import React from 'react';
import './css/Legal.css';

function GTC() {
  return (
    <div className="legal-page gtc">
      <div className="legal-header">
        <h1>General Terms & Conditions of Purchase</h1>
      </div>
      
      <div className="legal-content">
        <div className="last-updated">Last Updated: July 15, 2023</div>
        
        <div className="legal-section">
          <h2>1. General Provisions</h2>
          <p>These General Terms and Conditions of Purchase ("GTC") apply to all business relationships with our business partners and suppliers ("Seller"). The GTC apply only if the Seller is an entrepreneur (§ 14 BGB), a legal entity under public law, or a special fund under public law.</p>
        </div>
        
        <div className="legal-section">
          <h2>2. Conclusion of Contract</h2>
          <p>2.1 Our order is binding at the earliest upon written submission or confirmation. The Seller must point out obvious errors (e.g., spelling and calculation errors) and incompleteness of the order, including the order documents, for the purpose of correction or completion before acceptance; otherwise, the contract shall be deemed not concluded.</p>
          <p>2.2 The Seller is obliged to confirm our order in writing within a period of 5 working days or to execute it without reservation by dispatching the goods (acceptance). A delayed acceptance shall be deemed to be a new offer and requires acceptance by us.</p>
        </div>
        
        <div className="legal-section">
          <h2>3. Delivery Time and Delay in Delivery</h2>
          <p>3.1 The delivery time specified by us in the order is binding. The Seller is obliged to inform us immediately in writing if circumstances occur or become apparent to him according to which the delivery time cannot be met.</p>
          <p>3.2 If the Seller does not perform or does not perform within the agreed delivery time or if the Seller is in default, our rights - in particular to withdrawal and compensation - shall be determined in accordance with the statutory provisions.</p>
        </div>
        
        <div className="legal-section">
          <h2>4. Performance, Delivery, Transfer of Risk, Default of Acceptance</h2>
          <p>4.1 Without our prior written consent, the Seller is not entitled to have the performance owed by him provided by third parties (e.g., subcontractors).</p>
          <p>4.2 Delivery shall be made within Germany "free domicile" to the place specified in the order. If the destination is not specified and nothing else has been agreed, the delivery shall be made to our place of business. The respective destination is also the place of performance (obligation to deliver).</p>
          <p>4.3 The delivery shall be accompanied by a delivery note stating the date (issue and dispatch), the contents of the delivery (article number and quantity) and our order identification (date and number). If the delivery note is missing or incomplete, we shall not be responsible for any resulting delays in processing and payment.</p>
        </div>
        
        <div className="legal-section">
          <h2>5. Prices and Payment Terms</h2>
          <p>5.1 The price stated in the order is binding. All prices are inclusive of statutory value-added tax, unless this is shown separately.</p>
          <p>5.2 Unless otherwise agreed in individual cases, the price includes all services and ancillary services of the Seller (e.g., assembly, installation) as well as all ancillary costs (e.g., proper packaging, transport costs including any transport and liability insurance).</p>
        </div>
      </div>
    </div>
  );
}

export default GTC;
