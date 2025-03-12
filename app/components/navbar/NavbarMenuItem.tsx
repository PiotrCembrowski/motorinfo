import React from "react";
import Link from "next/link";

const NavbarMenuItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <div>
      <Link href={url} className="font-bold">
        {name}
      </Link>
    </div>
  );
};

export default NavbarMenuItem;
