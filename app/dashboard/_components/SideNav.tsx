"use client";
import Link from "next/link";
import { FileClock, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const navItems = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();
  useEffect(() => {});

  return (
    <div className="h-screen p-5 relative bg-white shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={123} height={61} />
      </div>
      <hr className="my-5 border" />
      <div className="mt-5">
        {navItems.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex gap-2 mt-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-1 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
