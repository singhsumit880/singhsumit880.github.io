import React, { useEffect } from 'react';
import './ResumeModal.css';
import { Download, ExternalLink, X } from 'lucide-react';

const RESUME_URL = `${import.meta.env.BASE_URL}Sumit_Singh_CV.pdf`;

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
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
            <p className="resume-kicker">Curriculum Vitae</p>
            <h2 id="resume-modal-title">Sumit Singh CV</h2>
          </div>
          <button className="resume-close-btn" type="button" onClick={onClose} aria-label="Close CV preview">
            <X size={20} />
          </button>
        </div>

        <div className="resume-viewer">
          <iframe title="Sumit Singh CV preview" src={RESUME_URL} />
        </div>

        <div className="resume-actions">
          <a className="btn btn-primary" href={RESUME_URL} download="Sumit_Singh_CV.pdf">
            <Download size={18} />
            Download CV
          </a>
          <a className="resume-secondary-btn" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} />
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
