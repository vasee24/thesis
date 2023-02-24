import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Inbox",
    icon: <InboxIcon />,
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
  },
  {
    title: "Admin",
    icon: <SettingsOutlinedIcon />,
  },
];
