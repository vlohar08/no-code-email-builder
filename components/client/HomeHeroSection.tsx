import React from "react";
import Button from "../Button";
import Image from "next/image";
import EmailBuilderImg from "@/assets/screenshots/email-builder.png";
import Link from "next/link";

function HomeHeroSection() {
  return (
    <section className="home-hero-section-wrapper">
      <div>
        <h3>
          <span>Design emails</span> for your business without writing a single
          line of code
        </h3>
        <p>
          Revolutionize Your Email Game in Beta Mode with Sassy Style and Zero
          Coding Hassles!
        </p>
        <Link href="/login">
          <Button className="get-started-btn">Get started for free!</Button>
        </Link>
        <Image src={EmailBuilderImg} alt="No Code Email Builder" />
      </div>
    </section>
  );
}

export default HomeHeroSection;
