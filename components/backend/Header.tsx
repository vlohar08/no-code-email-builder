import Image from "next/image";
import React from "react";
import SiteLogo from "@/assets/no-code-email-builder-logo.svg";
import DefaultAvatar from "@/assets/default/avatar.webp";

function Header() {
  return (
    <header className="app-header-wrapper">
      <Image
        className="site-logo"
        src={SiteLogo}
        alt="No Code Email Builder Logo"
      />
      <div>
        <Image
          className="user-avatar"
          src={DefaultAvatar}
          width={40}
          height={40}
          alt="User Avatar"
        />
        <div>
          <p>User_Name</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
