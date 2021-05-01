import {
  IonAlert,
  IonAvatar,
  IonBackButton,
  IonBackdrop,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, heart, heartOutline, star, starHalf } from "ionicons/icons";
import React, { useState } from "react";
import photographer from "../images/photographer.jpeg";
import carpenter from "../images/carpentry.jpeg";
import carpentry from "../images/carpentry.jpeg";
import painter from "../images/painter.jpeg";
import photography from "../images/photography.jpeg";
const Category: React.FC = () => {
  let array = [
    { image: painter, name: "Babi Rosaline" },
    { image: photographer, name: "Oben Desomond" },
    { image: carpenter, name: "Tabi Lizzy" },
  ];
  let jobs = [
    { image: photography, name: "Wedding Cakes" },
    { image: carpentry, name: "Party Chin Chin" },
    { image: photography, name: "Funeral Pies" },
  ];

  // const [like, setlike] = useState(false);
  const [view, setview] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          {/* <IonMenuButton slot='start' menu="menu" id="main"></IonMenuButton> */}
          <IonButtons slot="start">
            {" "}
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Bakers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar mode="ios"></IonSearchbar>
        {array.map((cat, index) => (
          <CategoryCard
            name={cat.name}
            image={cat.image}
            viewModal={() => setview(true)}
          />
        ))}
      </IonContent>
      <IonModal
        isOpen={view}
        onDidDismiss={() => {
          setview(false);
        }}
      >
        <IonHeader>
          <IonToolbar>
            <IonBackdrop></IonBackdrop>
            {/* <IonIcon slot="start" size={"large"} icon={arrowBack} />
            <IonTitle slot="start">Back</IonTitle> */}
            <IonChip color="primary">
              <IonIcon icon={arrowBack}></IonIcon>
              <IonLabel>Paul Pierson</IonLabel>
              <IonAvatar>
                <IonImg src={carpenter}></IonImg>
              </IonAvatar>
            </IonChip>
          </IonToolbar>
        </IonHeader>
        <IonContent className={"ion-padding"}>
          <IonTitle color="primary">Biography</IonTitle>
          <p className="ion-padding">
            He Worked in, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Hic, recusandae officia. Similique aperiam, inventore libero
            soluta sed provident dolores animi molestias amet praesentium vel,
            impedit accusamus, perspiciatis enim rem voluptas ipsum accusantium!
          </p>
          <IonTitle color="primary">Portfolio</IonTitle>
          <IonSlides className="ion-padding-bottom" pager>
            {jobs.map((job, index) => {
              return (
                <IonSlide style={{ display: "block" }}>
                  <IonCard>
                    <IonImg src={job.image}></IonImg>
                    <IonCardHeader color="medium">
                      <IonCardTitle>{job.name}</IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                  <IonAlert
                    isOpen={ShowAlert}
                    onDidDismiss={() => {
                      setShowAlert(false);
                    }}
                    header={"Hire"}
                    subHeader={`${job.name}`}
                    message={`Paul Pierson`}
                    buttons={["Hire", "Decline"]}
                    mode="ios"
                  ></IonAlert>
                </IonSlide>
              );
            })}
          </IonSlides>
          <p className="ion-padding">
            <IonCardSubtitle>Ratings</IonCardSubtitle>
            <IonLabel>
              50 Reviews
              <IonButtons>
                <IonButton>
                  <IonIcon color={"warning"} icon={star}></IonIcon>
                </IonButton>
                <IonButton>
                  <IonIcon color={"warning"} icon={star}></IonIcon>
                </IonButton>
                <IonButton>
                  <IonIcon color={"warning"} icon={star}></IonIcon>
                </IonButton>
                <IonButton>
                  <IonIcon color={"warning"} icon={star}></IonIcon>
                </IonButton>
                <IonButton>
                  <IonIcon color={"warning"} icon={starHalf}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonLabel>
          </p>
        </IonContent>
        <IonButton
          onClick={() => {
            setShowAlert(true);
          }}
        >
          Hire
        </IonButton>
      </IonModal>
    </IonPage>
  );
};

export default Category;

const CategoryCard: React.FC<{
  name: string;
  image: string;
  viewModal: Function;
}> = (cat) => {
  const [like, setlike] = useState(false);
  return (
    <IonCard>
      <IonCardHeader color="light">
        <IonItem lines="none" color="light">
        <IonCardTitle slot="start">{cat.name}</IonCardTitle>
        <IonChip slot='end' color='dark'>
          <IonIcon icon={star} color="warning"></IonIcon>
          <IonLabel>{Math.floor(Math.random()*10)}</IonLabel>
        </IonChip>
        </IonItem>
      </IonCardHeader>
      <IonImg src={cat.image} />
      <IonCardContent>
        <IonToolbar>
          <IonButton onClick={() => cat.viewModal()}>Hire {cat.name}</IonButton>

          {like ? (
            <IonButton
              size="large" slot="end" fill="clear"
              onClick={() => {
                setlike(false);
              }}
            >
              <IonIcon icon={heart}></IonIcon>
            </IonButton>
          ) : (
            <IonButton
              size="large"
              slot="end"
              fill="clear"
              onClick={() => {
                setlike(true);
              }}
            >
              <IonIcon icon={heartOutline}></IonIcon>
            </IonButton>
          )}
        </IonToolbar>
      </IonCardContent>
    </IonCard>
  );
};
