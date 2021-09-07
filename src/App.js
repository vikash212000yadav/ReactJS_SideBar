import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles, useTheme, Divider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import AppMenu from "./AppMenu";

const Nutrition = () => (
  <Typography variant="h3" component="h1">
    Nutrition Page
  </Typography>
);
const Moisture = () => (
  <Typography variant="h3" component="h1">
    Moisture Page
  </Typography>
);
const EC = () => (
  <Typography variant="h3" component="h1">
    EC Page
  </Typography>
);
const Search = () => (
  <Typography variant="h3" component="h1">
    Search Page
  </Typography>
);
const View = () => (
  <Typography variant="h3" component="h1">
    View Page
  </Typography>
);
const SN = () => (
  <Typography variant="h3" component="h1">
    SN Page
  </Typography>
);
const WetWeight = () => (
  <Typography variant="h3" component="h1">
    Wet Weight Page
  </Typography>
);
const Lab = () => (
  <Typography variant="h3" component="h1">
    Lab Page
  </Typography>
);
const Phase = () => (
  <Typography variant="h3" component="h1">
    Phase Page
  </Typography>
);

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <div className={classes.toolbar}>
            GREEN MONKEY
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route path="/nutrition" exact component={Nutrition} />
            <Route path="/moisture" component={Moisture} />
            <Route path="/ec" component={EC} />
            <Route path="/search" component={Search} />
            <Route path="/view" exact component={View} />
            <Route path="/sn" component={SN} />
            <Route path="/wet_weight" component={WetWeight} />
            <Route path="/lab" component={Lab} />
            <Route path="/phase" component={Phase} />
          </Switch>
          {/* </Container> */}
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
    // backgroundColor: "#FFFFFF"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    marginTop: 70,
    padding: theme.spacing(3)
  }
}));

export default App;
