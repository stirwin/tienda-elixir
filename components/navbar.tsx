"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar}from '@nextui-org/react';
import { Link } from "@nextui-org/link";
import {  DM_Sans} from "next/font/google";


const dmsans = DM_Sans({
	weight: ["300", "700"],
	subsets: ["latin"],
  });
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <NextUINavbar
	className="bg-transparent"
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/*LOGO*/}
      <NavbarContent>
        {/*menu responsiv*/}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
		<Avatar
              className="transition-transform"
              name="Santiago"
              size="md"
              src="./logo.png"
            />
		<p className="font-bold text-white font-abrilfalface ml-5">ElixeriumOdor</p>
        </NavbarBrand>
      </NavbarContent>

      {/*CONTENIDO*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  className={`${dmsans.className} text-white` }href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className={`${dmsans.className} text-white` } href="/shop" >
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  className={`${dmsans.className} text-white `}href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/*END FOTO*/}
      <NavbarContent justify="end">
	  <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Santiago"
              size="sm"
              src="./ceo.jpeg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
           
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Menú responsive */}
      <NavbarMenu>
        <NavbarMenuItem>
		<Link className="w-full" href="/" size="lg">
            Home
          </Link>
		  <Link className="w-full" href="/shop" size="lg">
            Shop
          </Link>
          <Link className="w-full" href="/about" size="lg">
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
