import React, { useEffect, useState } from 'react';
import './ResumeModal.css';
import { Download, X } from 'lucide-react';
import { LOCAL_RESUME_URL, RESUME_JSONP_URL, RESUME_JSON_URL } from '../resumeLinks';

const getDriveResumeUrl = (payload) => (payload?.source === 'drive' ? payload.embedUrl : null);
const getResumeDownloadUrl = (payload) => payload?.downloadUrl || payload?.viewUrl || LOCAL_RESUME_URL;

const ResumeModal = ({ isOpen, onClose }) => {
  const [resumeSrc, setResumeSrc] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const callbackName = `__sumitResume_${Date.now()}`;
    let script = null;
    const controller = new AbortController();
    const fallbackTimer = window.setTimeout(() => {
      setResumeSrc((currentSrc) => currentSrc || LOCAL_RESUME_URL);
      setDownloadUrl((currentUrl) => currentUrl || LOCAL_RESUME_URL);
    }, 8000);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    queueMicrotask(() => {
      setResumeSrc(null);
      setDownloadUrl(null);
    });

    const finishWithPayload = (payload) => {
      window.clearTimeout(fallbackTimer);
      const driveResumeUrl = getDriveResumeUrl(payload);
      setResumeSrc(driveResumeUrl || LOCAL_RESUME_URL);
      setDownloadUrl(getResumeDownloadUrl(payload));
    };

    const loadWithJsonp = () => {
      script = document.createElement('script');

      window[callbackName] = finishWithPayload;

      script.src = `${RESUME_JSONP_URL}&callback=${callbackName}&t=${Date.now()}`;
      script.async = true;
      script.onerror = () => {
        window.clearTimeout(fallbackTimer);
        setResumeSrc(LOCAL_RESUME_URL);
        setDownloadUrl(LOCAL_RESUME_URL);
      };
      document.body.appendChild(script);
    };

    fetch(`${RESUME_JSON_URL}&t=${Date.now()}`, {
      credentials: 'omit',
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Resume lookup failed');
        }
        return response.json();
      })
      .then(finishWithPayload)
      .catch(() => loadWithJsonp());

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(fallbackTimer);
      controller.abort();
      script?.remove();
      delete window[callbackName];
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="resume-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div>
            <p className="resume-kicker">Latest Curriculum Vitae</p>
            <h2 id="resume-modal-title">Sumit Singh Resume</h2>
          </div>
          <button className="resume-close-btn" type="button" onClick={onClose} aria-label="Close CV preview">
            <X size={20} />
          </button>
        </div>

        <div className="resume-viewer">
          {resumeSrc ? (
            <iframe title="Sumit Singh resume preview" src={resumeSrc} />
          ) : (
            <div className="resume-loading" role="status">Loading latest CV...</div>
          )}
        </div>

        <div className="resume-actions">
          {downloadUrl ? (
            <a className="btn btn-primary" href={downloadUrl} download="Sumit_Singh_CV.pdf">
              <Download size={18} />
              Download Resume
            </a>
          ) : (
            <button className="btn btn-primary" type="button" disabled>
              <Download size={18} />
              Loading latest resume...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
