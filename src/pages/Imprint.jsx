import React from 'react';
import './css/Legal.css';

function Imprint() {
  return (
    <div className="legal-page imprint">
      <div className="legal-header">
        <h1>Imprint</h1>
      </div>
      
      <div className="legal-content">
        <div className="legal-section">
          <h2>Company Information</h2>
          <p><strong>ZAHORANSKY AG</strong></p>
          <p>Anton-Zahoransky-Strasse 1<br />
          79674 Todtnau<br />
          Germany</p>
          
          <p>Phone: +49 7671 997-0<br />
          Email: info@zahoransky.com<br />
          Website: www.zahoransky.com</p>
          
          <p>Commercial Register: HRB 713629<br />
          Registration Court: Freiburg im Breisgau<br />
          VAT Identification Number: DE 142217413</p>
        </div>
        
        <div className="legal-section">
          <h2>Management Board</h2>
          <p>Dr. Robert Dous (CEO)<br />
          Ulrich Zahoransky<br />
          Gerhard Steinebrunner</p>
        </div>
        
        <div className="legal-section">
          <h2>Supervisory Board</h2>
          <p>Peter Zahoransky (Chairman)<br />
          Michael Zahoransky<br />
          Erich Zahoransky</p>
        </div>
        
        <div className="legal-section">
          <h2>Responsible for Content</h2>
          <p>According to § 55 Abs. 2 RStV:<br />
          Dr. Robert Dous<br />
          ZAHORANSKY AG<br />
          Anton-Zahoransky-Strasse 1<br />
          79674 Todtnau<br />
          Germany</p>
        </div>
        
        <div className="legal-section">
          <h2>Liability for Content</h2>
          <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are responsible for our own content on these web pages. However, we are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity. Our obligations to remove or block the use of information under general laws remain unaffected by this.</p>
        </div>
        
        <div className="legal-section">
          <h2>Liability for Links</h2>
          <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.</p>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
