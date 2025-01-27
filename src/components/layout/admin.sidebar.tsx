"use client";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useContext } from "react";
import { AdminContext } from "@/library/admin.context";
import type { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];
const AdminSideBar = () => {
  const { Sider } = Layout;
  const { collapseMenu } = useContext(AdminContext)!;

  const items: MenuItem[] = [
    {
      key: "grp",
      label: "BASE VIEW CMS NEXTJS",
      type: "group",
      children: [
        {
          key: "dashboard",
          label: <Link href={"/dashboard"}>Dashboard</Link>,
          icon: <AppstoreOutlined />,
        },
        {
          key: "Users",
          label: <Link href={"/dashboard/user"}>Manage Users</Link>,
          icon: <TeamOutlined />,
        },
        {
          key: "Quản lý khách hàng",
          label: "Quản lý khách hàng",
          icon: <MailOutlined />,
          children: [
            {
              key: "g1",
              label: "Item 1",
              type: "group",
              children: [
                { key: "1", label: "Option 1" },
                { key: "2", label: "Option 2" },
              ],
            },
            {
              key: "g2",
              label: "Item 2",
              type: "group",
              children: [
                { key: "3", label: "Option 3" },
                { key: "4", label: "Option 4" },
              ],
            },
          ],
        },
        {
          key: "Quản lý tài khoản",
          label: "Quản lý tài khoản",
          icon: <AppstoreOutlined />,
          children: [
            { key: "5", label: "Option 5" },
            { key: "6", label: "Option 6" },
            {
              key: "sub3",
              label: "Submenu",
              children: [
                { key: "7", label: "Option 7" },
                { key: "8", label: "Option 8" },
              ],
            },
          ],
        },
        {
          type: "divider",
        },
        {
          key: "Quản lý crypto",
          label: "Quản lý crypto",
          icon: <SettingOutlined />,
          children: [
            { key: "9", label: "Option 9" },
            { key: "10", label: "Option 10" },
            { key: "11", label: "Option 11" },
            { key: "12", label: "Option 12" },
          ],
        },
      ],
    },
  ];

  return (
    <Sider
      className={`sider ${collapseMenu} ? "collapsed" : "expanded"`}
      collapsed={collapseMenu}
      style={{
        minWidth: "300px !important",
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
        style={{
          height: "100vh",
          overflowY: "scroll",
          paddingTop: "20px",
          backgroundColor: "#000000",
          boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.5)",
        }}
        className="MenuItem"
      />
    </Sider>
  );
};

export default AdminSideBar;
