import React from "react";
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./css/app.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/category";
import Map from "./pages/map";
import Login from "./pages/Login";
import {
  home,
  information,
  logOut,
  map,
  notifications,
  person,
  search,
  star,
} from "ionicons/icons";

import img from "./images/painter.jpeg";
import updates from "./pages/updates";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/Home" component={Home} exact />
            <Route path="/" component={Login} exact></Route>
            <Route path="/category" component={Category} exact />
            <Route path="/updates" component={updates} exact></Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" selectedTab="search" color="primary">
            <IonTabButton tab="search" href="/Home">
              <IonIcon icon={search}></IonIcon>
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="map" href="/map">
              <IonIcon icon={map}></IonIcon>
              <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="updates" href="/updates">
              <IonIcon icon={notifications}></IonIcon>
              <IonLabel>Updates</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <Route exact path="/login" component={Login} />
        <IonMenu menuId="menu" contentId="main">
          <IonContent>
            <IonToolbar color="primary" className="ion-padding">
              <IonAvatar slot="start" style={{ border: "3px solid white" }}>
                <IonImg src={img}></IonImg>
              </IonAvatar>
              <IonTitle>Username</IonTitle>
            </IonToolbar>
            <IonItem lines="full" button>
              <IonIcon slot="start" icon={information}></IonIcon>
              <IonLabel>About Us</IonLabel>
            </IonItem>
            <IonItem lines="full" button>
              <IonIcon slot="start" icon={star}></IonIcon>
              <IonLabel>Rate Us</IonLabel>
            </IonItem>
            <IonItem lines="full" button>
              <IonIcon slot="start" icon={person}></IonIcon>
              <IonLabel>Profile</IonLabel>
            </IonItem>
            <IonItem lines="full" button href="/login">
              <IonIcon slot="start" icon={logOut}></IonIcon>
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </IonContent>
        </IonMenu>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
