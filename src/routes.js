/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Add from "@material-ui/icons/Add";
import Person from "@material-ui/icons/Person";
import List from "@material-ui/icons/List";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import AddAnnounce from "views/Announces/AddAnnounce.js";

import ListAnnounces from "views/Announces/ListAnnounces.js";
import Typography from "views/Admin/Admins.js";
// core components/views for RTL layout
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/add",
    name: "Add announce",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Add,
    component: AddAnnounce,
    layout: "/admin",
  },
  {
    path: "/list",
    name: "List of announces",
    rtlName: "قائمة الجدول",
    icon: List,
    component: ListAnnounces,
    layout: "/admin",
  },
  {
    path: "/Admin's",
    name: "Admin's",
    rtlName: "طباعة",
    icon: Person,
    component: Typography,
    layout: "/admin",
  },
];

export default dashboardRoutes;
