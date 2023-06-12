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
            <h5>Free</h5>
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
          <div className="price-card">
            <h5>Premium</h5>
            <p>Everything in free + pre designed templates and much more</p>
            <h6>
              $__ <span>per month</span>
            </h6>
            <Link href="/login">
              <Button>Coming Soon!</Button>
            </Link>
            <ol>
              <li>Everything in Free</li>
              <li>Pre defined templates</li>
              <li>Support</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
