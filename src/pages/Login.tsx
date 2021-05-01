import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Component } from "ionicons/dist/types/stencil-public-runtime";
import { body } from "ionicons/icons";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
// import Pay from "../components/payuniit";
import Pay from "../components/payuniit";
// import YourComponent from "../components/payuniit";

const Login: React.FC = () => {
  function test() {
    var url = window.location.href;
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("id", "payunitIframe");
    //Adding Event listener to the main  page
    window.addEventListener('message',(e)=>{
      if(e.origin.startsWith(window.location.href))
      console.log(e.data)
    });

    //Adding Post request to the ifrmame to send (post) messages to the iframe;
    iframe.contentWindow?.postMessage("hello",'http://localhost:8100/login')
  }
  // PayUnit(
  //   {
  //     apiUsername: "payunit_sand_gs2SwD1Xc",
  //     apiPassword: "a1cbea67-b553-4471-bd6b-06c2d1f417e4",
  //     x_api_key: "56bcc402ce8d8c64126c1ddc3bc158e5fc07e61d",
  //     mode: "test",
  //   },
  //   {
  //     return_url: "http://localhost:8100/Map",
  //     notify_url: "",
  //     description: "",
  //     purchaseRef: "",
  //     total_amount: `50`,
  //     name: "Ndeh_ngwa",
  //     currency: "XAF",
  //   }
  //   );

  const slidesRef = React.useRef<HTMLIonSlidesElement>(null);

  function slideTo(index: number) {
    slidesRef.current?.slideTo(index);
  }

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: "center" }}>
            237<b>Pastries</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSegment value="login" swipeGesture={false}>
            <IonSegmentButton onClick={() => slideTo(0)} value="login">
              Login
            </IonSegmentButton>
            <IonSegmentButton onClick={() => slideTo(1)}>
              Sign Up
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonToolbar>
        <IonButton color="dark" size= 'large'>pay</IonButton>
          <IonSlides ref={slidesRef} onIonSlideDidChange={console.log}>
            <IonSlide
              style={{ display: "block", height: "100vh", overflow: "scroll" }}
            >
              <IonCardContent>
                {/* <IonButton
                  id="payunit-pay"
                  size="large"
                  color="dark"
                  onClick={test}
                >
                  <Pay></Pay>
                </IonButton> */}
                <div id="test"></div>
                <IonItem>
                  <IonLabel position="floating">Enter Email</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem id="test">
                  <IonLabel position="floating">Enter Password</IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
                <IonButton routerLink="/Home" className="ion-margin-top">
                  Login
                </IonButton>
              </IonCardContent>
              {/* <IonButton onClick={test}>test</IonButton> */}
            </IonSlide>
            <IonSlide
              style={{ display: "block", height: "100vh", overflow: "scroll" }}
            >
              <IonCardContent>
                <IonItem>
                  <IonLabel position="floating">Enter Email</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Enter name</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Enter Phone Number</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Skills</IonLabel>
                  <IonSelect>
                    <IonSelectOption>React.js</IonSelectOption>
                    <IonSelectOption>Ionic </IonSelectOption>
                    <IonSelectOption>PHP</IonSelectOption>
                    <IonSelectOption>Python</IonSelectOption>
                    <IonSelectOption>Flutter</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Enter Password</IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Date Of Birth</IonLabel>
                  <IonDatetime></IonDatetime>
                </IonItem>
                <IonButton routerLink="/Home" className="ion-margin-top">
                  Sign up
                </IonButton>
              </IonCardContent>
            </IonSlide>
          </IonSlides>
        </IonToolbar>{" "}
      </IonContent>
    </IonPage>
  );
};

export default Login;
