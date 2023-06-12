import Link from "next/link";
import React from "react";
import SiteLogo from "@/assets/brand/no-code-email-builder-logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="client-footer-wrapper">
      <div>
        <div>
          <Link href="/">
            <Image src={SiteLogo} alt="No Code Email Builder" />
          </Link>
        </div>
        <div>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-of-use">Terms of use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
