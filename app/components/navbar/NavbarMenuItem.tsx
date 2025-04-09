import React from "react";
import Link from "next/link";

const NavbarMenuItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <div>
      <Link
        href={url}
        className="font-bold text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
      >
        {name}
      </Link>
    </div>
  );
};

export default NavbarMenuItem;
