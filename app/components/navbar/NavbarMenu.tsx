import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenu = () => {
  return (
    <div className="flex space-x-8 w-10/12 m-auto">
      <div>
        <NavbarMenuItem name="HOME" url="/" />
      </div>
      <div>
        <NavbarMenuItem name="CARS" url="/cars" />
      </div>
      <div>
        <NavbarMenuItem name="PRIVACY" url="/privacy" />
      </div>
    </div>
  );
};

export default NavbarMenu;
