import React from "react";
import Link from "next/link";

const NavbarMenuItem = () => {
  return (
    <div>
      <Link href="/" className="font-bold">
        HOME
      </Link>
    </div>
  );
};

export default NavbarMenuItem;
