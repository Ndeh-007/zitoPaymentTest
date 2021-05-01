import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import photographer from "../images/photographer.jpeg";
import carpenter from "../images/carpentry.jpeg";
import painter from "../images/painter.jpeg";
import { arrowForwardOutline, heartOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
// import PayUnit from "../components/payuniit";
import "../components/zitopay";
const Home: React.FC = () => {
  let array = [
    { image: painter, name: "Baker" },
    { image: carpenter, name: "Chin Chin" },
    { image: photographer, name: "Fish Pie" },
  ];

  // console.log(window.location?.href);

  let url = `http://localhost:8100/Home?transaction_id%20=%201698010851136&transaction_amount=50&transaction_gateway=mtnmomo&transaction_status=SUCCESSFUL&message=Your%20transaction%20completed%20successfully.`;

  //test post request

  const [errorMessage, seterrorMessage] = useState("");
  const [transactionMessage, settransactionMessage] = useState({});
  const [ref, setref] = useState("");

  function getinformation() {
    //fecting transactiontion status from the zitopay url site
    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({
        action: "get_transaction",
        receiver: "ndehngwa@gmail.com",
        ref: `16196987187375`,
      }),
    };

    function postData(url: string) {
      fetch(url,{mode:'no-cors'})
        .then((res) => {
          console.log(res);
          // let value = res.json();
          // return value;
        })
        .then(
          (data) => {
            console.log("success", data);
          }
          ,
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log("error:", error);
          }
        );
    }
    postData("https://zitopay.africa/api_v1?action=get_transaction&receiver=ndehngwa@gmail.com&ref=16196987187375003");
  }

  function getRef() {
    //fetching ref from success_url site
    const requestOpt: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({
        ref: "ref",
        zitopay_transaction_reference: "zitopay_transaction_reference ",
      }),
    };

    fetch("https://localhost:8100/map", requestOpt)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setref(data.ref);
        console.log(data);

        settransactionMessage(JSON.parse(data));
        console.log(JSON.parse(data));

        return JSON.parse(data);
      })
      .catch((error) => {
        seterrorMessage(error.toString());
        console.error("There was an error!", error);
        console.log(errorMessage);
      });
  }

  function startFetching() {
    // console.log(getinformation())
  }

  function apiCall() {
    getinformation();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={`primary`}>
          <IonMenuButton slot="start" menu="menu" id="main"></IonMenuButton>
          <IonTitle>
            <IonText color="light"> 237 </IonText>
            <b>Pastries</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton color="danger" onClick={() => apiCall()}>
          CAll api
        </IonButton>
        <IonButton
          color="dark"
          className="pay-with-zitopay"
          data-amount="20"
          data-currency="XAF"
          data-email="ndehngwa@gmail.com"
          data-receiver="akumah"
          notification-url="http://localhost:8101/Home"
          success-url="https://quesers-app.web.app"
        >
          Pay
        </IonButton>
        <IonSearchbar mode="ios"></IonSearchbar>
        {/* <PayUnit></PayUnit> */}
        {array.map((cat, index) => (
          <IonCard key={index}>
            <IonCardHeader color="light">
              <IonCardTitle>{cat.name}</IonCardTitle>
            </IonCardHeader>
            <IonImg src={cat.image} />
            <IonCardContent>
              <IonToolbar>
                <IonButton expand="full" routerLink={"/category"}>
                  Scout
                </IonButton>
              </IonToolbar>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
