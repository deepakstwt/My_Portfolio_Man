import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-secondary">
        Let's Connect
      </a>
      <a 
        href="/Deepak_Prajapati.pdf" 
        download="Deepak_Prajapati_Resume.pdf"
        className="btn btn-primary"
      >
        Download Resume
      </a>
    </div>
  );
};

export default CTA;
