import Image from "next/image";
import React from "react";
import SiteLogo from "@/assets/brand/no-code-email-builder-logo.svg";
import DefaultAvatar from "@/assets/default/avatar.webp";

type HeaderProps = {
  name: string | undefined;
};

function Header({ name }: HeaderProps) {
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
          <p>{name || "Guest"}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
