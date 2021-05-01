import {
    IonButton,
    IonFab,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonRouterLink,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import svg from "../images/map.svg";

const Map: React.FC = () => {
  function testSuccess(value: string) {
    let word = "transaction_status=SUCCESSFUL";
    let i = value.search("transaction_status=SUCCESSFUL");
    let str = value.substr(i, word.length);

    console.log(str);

    if (i != -1) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  // window.location.href
  // let url ='food';
  testSuccess(window.location.href);
  return (
    <IonPage>
        <IonHeader>
                <IonToolbar color="primary">
                    <IonMenuButton slot="start" menu="menu" id='main'></IonMenuButton>
                    <IonTitle>Map</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* <IonRouterLink routerLink="/Home">
                <IonButton size="large" expand="full" color="secondary"> view papers</IonButton>
            </IonRouterLink> */}
      <div style={{ height: "50%", width: "50%", margin: "auto" }}>
        <IonImg src={svg}></IonImg>
      </div>
      <IonSearchbar
        color="primary"
        placeholder="Search Location"
      ></IonSearchbar>
      {/* <IonTitle color="secondary" style={{textJustify: "center"}}>Map of Area</IonTitle> */}
    </IonPage>
  );
};

export default Map;
