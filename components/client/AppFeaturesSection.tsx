import Image from "next/image";
import React from "react";
import EmailElementsImg from "@/assets/screenshots/email-elements.png";
import EmailDragAndDropImg from "@/assets/screenshots/email-drag-and-drop.png";
import EmailElementSettingsImg from "@/assets/screenshots/email-element-settings.png";
import EmailCardImg from "@/assets/screenshots/email-card.png";

function AppFeatureSections() {
  return (
    <section id="features" className="app-features-wrapper">
      <div>
        <h4>
          Discover the Email Builder <span>Features</span>
        </h4>
        <div className="feature-cards-wrapper">
          <div className="feature-card">
            <Image
              width={500}
              height={500}
              src={EmailElementsImg}
              alt="Email Elements"
            />
            <h5>10 Essential Email Building Blocks</h5>
          </div>
          <div className="feature-card">
            <Image
              width={500}
              height={500}
              src={EmailDragAndDropImg}
              alt="Drag Email Element"
            />
            <h5>Drag, Drop, and Build Away!</h5>
          </div>
          <div className="feature-card">
            <Image
              width={500}
              height={500}
              src={EmailElementSettingsImg}
              alt="Email Element Settings"
            />
            <h5>Total Control: Customize Every Element</h5>
          </div>
          <div className="feature-card">
            <Image
              width={500}
              height={500}
              src={EmailCardImg}
              alt="Export Email"
            />
            <h5>Export or Download HTML in one click</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFeatureSections;
