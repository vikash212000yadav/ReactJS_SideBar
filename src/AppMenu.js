import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconBarChart from "@material-ui/icons/BarChart";

import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Quality Planning",
    Icon: IconDashboard,
    items: [
      {
        name: "Nutrition",
        link: "/nutrition"
      },
      {
        name: "Moisture",
        link: "/moisture"
      },
      {
        name: "EC",
        link: "/ec"
      }
    ]
  },
  {
    name: "Serializers",
    Icon: IconBarChart,
    items: [
      {
        name: "Search",
        link: "/search"
      },
      {
        name: "View",
        link: "/view"
      },
      {
        name: "SN",
        link: "/sn"
      },
      {
        name: "Wet weight",
        link: "/wet_weight"
      },
      {
        name: "Lab",
        link: "/lab"
      },
      {
        name: "Phase",
        link: "/phase"
      }
    ]
  }
];

const AppMenu = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%"
    },
    navList: {
      width: drawerWidth
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: "#97c05c"
    }
  })
);

export default AppMenu;
