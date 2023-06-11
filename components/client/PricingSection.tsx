import React from "react";

function PricingSection() {
  return (
    <section id="pricing" className="pricing-section-wrapper">
      <div>
        <h4>Pricing</h4>
        <div className="price-cards-wrapper">
          <div className="price-card">
            <h5>FREE</h5>
            <p>You can use our beta service for free!</p>
            <ol>
              <li>Access to All Email Elements</li>
              <li>Cloud Save</li>
              <li>Total Control</li>
              <li>More Coming soon...</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
