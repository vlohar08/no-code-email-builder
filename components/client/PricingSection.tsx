import React from "react";
import Button from "../Button";
import Link from "next/link";

function PricingSection() {
  return (
    <section id="pricing" className="pricing-section-wrapper">
      <div>
        <h4>Pricing</h4>
        <div className="price-cards-wrapper">
          <div className="price-card">
            <h5>FREE</h5>
            <p>Take your emails to the next level</p>
            <h6>
              $0 <span>per month</span>
            </h6>
            <Link href="/login">
              <Button>Get started for free!</Button>
            </Link>
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
