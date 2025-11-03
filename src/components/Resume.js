import React, { useState } from 'react';
  // Import the CSS

const resumeUrl = '/assets/resume.pdf';

export  function Resume() {
  const [hover, setHover] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className={`resume-floating-btn${hover ? ' enlarged' : ''}`}
      onClick={handleDownload}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title="Download Resume"
    >
      <span role="img" aria-label="resume" style={{ fontSize: 24 }}>📄</span>
      {hover && <span className="resume-btn-text">Download Resume</span>}
    </button>
  );
}
