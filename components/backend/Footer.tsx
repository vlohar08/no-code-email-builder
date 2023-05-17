import Link from "next/link";
import React from "react";
import SiteLogo from "@/assets/no-code-email-builder-logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="app-footer-wrapper">
      <div>
        <Image src={SiteLogo} alt="No Code Email Builder" />
      </div>
      <div>
        <Link href="#">Privacy policy</Link>
        <Link href="#">Terms of use</Link>
      </div>
    </footer>
  );
}

export default Footer;
