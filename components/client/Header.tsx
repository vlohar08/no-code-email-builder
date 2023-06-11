import Image from "next/image";
import React from "react";
import NoCodeEmailBuilderLogo from "@/assets/no-code-email-builder-logo.svg";
import Button from "../Button";
import Link from "next/link";

function Header() {
  return (
    <header className="client-header-wrapper">
      <div>
        <Link href="/">
          <Image
            className="header-logo"
            src={NoCodeEmailBuilderLogo}
            alt="No Code Email Builder"
          />
        </Link>
        <nav className="header-menu">
          <ul>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link href="/login">
            <Button className="get-started-btn">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button className="login-btn">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
