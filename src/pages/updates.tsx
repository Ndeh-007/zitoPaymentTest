import {
  IonContent,
  IonTitle,
  IonSlide,
  IonSlides,
  IonItem,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRouterLink,
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuButton,
} from "@ionic/react";import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonImg,
    IonGrid,
    IonRow,
    IonAvatar,
    IonLabel,
    IonChip,
    IonList,
    IonPopover,
    IonActionSheet,
  } from "@ionic/react";
  import {
    ellipsisVerticalSharp,
    logoFacebook,
    logoInstagram,
    logoTwitter,
    logoWhatsapp,
    thumbsDown,
    thumbsDownOutline,
    thumbsUp,
    thumbsUpOutline,
    grid,
    closeCircleOutline,
    share,
    download,
    notificationsCircle,
    close,
  } from "ionicons/icons";
  import "../css/largeCard.css";
import React, { useState } from "react";
import "../css/home.css";
import bg from "../img/bg.jpg";
import sc from "../images/painter.jpeg";
import painter from "../images/painter.jpeg";
import paintings from "../images/paintings.jpeg";
import photographer from "../images/photographer.jpeg";
import photography from "../images/photography.jpeg";
import carpenter from '../images/carpentry.jpeg'
import { addCircle } from "ionicons/icons";
const updates: React.FC = () => {
  let string =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. luptatum id autem unde itaque v";
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
  };

  return (
    <IonPage>
        <IonHeader translucent>
            <IonToolbar color="primary">
                <IonMenuButton slot="start" menu="menu" id="main"></IonMenuButton>
                <IonTitle>Updates</IonTitle>
            </IonToolbar>
        </IonHeader>
      <IonContent className="slide-content">
        <IonItem lines="none">
          <IonTitle color="medium">Trending</IonTitle>
        </IonItem>
        <IonSlides className="home-slides" options={slideOpts} pager>
          <IonSlide>
            <SmallCard title="Gist" image={photographer}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={painter}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={photography}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={paintings}></SmallCard>
          </IonSlide>
        </IonSlides>
        <IonItem lines="none">
          <IonTitle color="medium">Today</IonTitle>
        </IonItem>
        <LargeCard title="Publisher" image={photography} text={string}></LargeCard>
        <LargeCard title="Publisher" image={painter} text={``}></LargeCard>
        <LargeCard title="Publisher" image={photographer} text={string}></LargeCard>
        <LargeCard title="Publisher" image={painter} text={string}></LargeCard>
        <LargeCard title="Publisher" image={paintings} text={string}></LargeCard>
        <IonItem lines="none">
          <IonTitle color="medium">Chin Chin</IonTitle>
        </IonItem>
        <IonSlides className="home-slides" options={slideOpts} pager>
          <IonSlide>
            <SmallCard title="Gist" image={photographer}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={paintings}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={sc}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={sc}></SmallCard>
          </IonSlide>
        </IonSlides>
        <IonItem lines="none">
          <IonTitle color="medium">Older</IonTitle>
        </IonItem>
        <LargeCard title="Publisher" image={photographer} text={string}></LargeCard>
        <LargeCard title="Publisher" image={painter} text={string}></LargeCard>
        <LargeCard title="Publisher" image={paintings} text={string}></LargeCard>
        <IonItem lines="none">
          <IonTitle color="medium">Chin Chin</IonTitle>
        </IonItem>
        <IonSlides className="home-slides" options={slideOpts} pager>
          <IonSlide>
            <SmallCard title="Gist" image={photographer}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={paintings}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={sc}></SmallCard>
          </IonSlide>
          <IonSlide>
            <SmallCard title="Gist" image={sc}></SmallCard>
          </IonSlide>
        </IonSlides>
        <LargeCard title="Publisher" image={photographer} text={string}></LargeCard>
        <LargeCard title="Publisher" image={carpenter} text={string}></LargeCard>
        <LargeCard title="Publisher" image={painter} text={string}></LargeCard>
      </IonContent>
    </IonPage>
  );
};

export default updates;

const SmallCard: React.FC<{ image: any; title: string }> = (props) => {
  return (
    <IonCard button className="small-card">
      <img className="small-card-img" alt="" src={props.image}></img>
      <IonCardContent className="small-card-content">
        {props.title}
      </IonCardContent>
    </IonCard>
  );
};

const LargeCard: React.FC<{ image: any; text: string; title: string }> = (
  props
) => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  const [feelState, setFeelState] = useState({
    like: true,
    dislike: true,
    event: undefined,
  });
  const [showActionSheet, setShowActionSheet] = useState(false);

  function changeLike(value: boolean) {
    if (value) return true;
  }
  function change(value: boolean) {
    if (value) return true;
  }

  function changeFeelLike(e: any) {
    if (feelState.like == true) {
      setFeelState({ like: false, dislike: true, event: e });
      change(feelState.like);
    }
    if (feelState.like == false) {
      setFeelState({ like: true, dislike: true, event: e });
      change(feelState.like);
    }
    console.log("success");
  }

  function changeFeelDislike(e: any) {
    if (feelState.dislike == true) {
      setFeelState({ like: true, dislike: false, event: e });
      change(feelState.dislike);
    }
    if (feelState.dislike == false) {
      setFeelState({ dislike: true, like: true, event: e });
      change(feelState.dislike);
    }
    console.log("success");
  }

  return (
    <>
      <IonPopover
        showBackdrop={true}
        translucent={true}
        cssClass="pop-over"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <IonList color="medium">
          <IonItem lines="full" color="primary">
            <IonLabel>Contact Publisher</IonLabel>
            <IonIcon
              slot="end"
              onClick={(e: any) => {
                e.persist();
                setShowPopover({ showPopover: false, event: e });
              }}
              icon={closeCircleOutline}
            ></IonIcon>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="success" icon={logoWhatsapp}></IonIcon>
            <IonLabel>Privately on WhatsApp</IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="danger" icon={logoInstagram}></IonIcon>
            <IonLabel>Instagram Handle </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon
              slot="start"
              color="secondary"
              icon={logoTwitter}
            ></IonIcon>
            <IonLabel>View Twitter Handle</IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="primary" icon={logoFacebook}></IonIcon>
            <IonLabel>View Facebook page</IonLabel>
          </IonItem>
        </IonList>
      </IonPopover>
      <IonCard className="large-card">
        <IonCardHeader className="large-card-header">
          <IonItem className="large-card-header-item" lines="none">
            <IonAvatar slot="start">
              <IonImg src={sc}></IonImg>
            </IonAvatar>
            <IonLabel>{props.title}</IonLabel>
            <IonIcon
              slot="end"
              icon={ellipsisVerticalSharp}
              onClick={() => setShowActionSheet(true)}
            ></IonIcon>
          </IonItem>
        </IonCardHeader>
        <IonCardContent className="large-card-content">
          <IonImg className="large-card-image" src={props.image}></IonImg>
          <div className="large-card-text">{props.text}</div>

          <IonGrid>
            <IonRow className="large-card-grid-row">
              <IonItem className="list" lines="none">
                <div slot="end">
                  {changeLike(feelState.like) ? (
                    <IonChip color="success" onClick={changeFeelLike}>
                      <IonIcon color="success" icon={thumbsUpOutline}></IonIcon>
                      <IonLabel color={`success`}>243</IonLabel>
                    </IonChip>
                  ) : (
                    <IonChip color="success" onClick={changeFeelLike}>
                      <IonIcon color="success" icon={thumbsUp}></IonIcon>
                      <IonLabel color={`success`}>244</IonLabel>
                    </IonChip>
                  )}
                  {change(feelState.dislike) ? (
                    <IonChip color="danger" onClick={changeFeelDislike}>
                      <IonIcon
                        color="danger"
                        icon={thumbsDownOutline}
                      ></IonIcon>
                      <IonLabel color={`danger`}>23</IonLabel>
                    </IonChip>
                  ) : (
                    <IonChip color="danger" onClick={changeFeelDislike}>
                      <IonIcon color="danger" icon={thumbsDown}></IonIcon>
                      <IonLabel color={`danger`}>22</IonLabel>
                    </IonChip>
                  )}
                </div>
                {/* {changeLike(feelState.like) ? <IonIcon slot='end' id='like' icon={thumbsUpOutline} onClick={changeFeelLike}></IonIcon> : <IonIcon slot='end' id='like' color='success' icon={thumbsUp} onClick={changeFeelLike}></IonIcon>}
                                {change(feelState.dislike) ? <IonIcon slot='end' id='dislike'  icon={thumbsDownOutline} onClick={changeFeelDislike}></IonIcon> : <IonIcon slot='end' id='like' color='danger' icon={thumbsDown} onClick={changeFeelDislike}></IonIcon>} */}

                {/* <IonChip color='primary' className='large-card-chip' slot='start'>
                                    <IonAvatar>
                                    <IonImg src={sc}></IonImg>
                                    </IonAvatar>
                                    <IonLabel >Today</IonLabel>
                                </IonChip> */}
                <IonIcon
                  color="primary "
                  slot="start"
                  onClick={(e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e });
                  }}
                  icon={grid}
                ></IonIcon>
              </IonItem>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>

      <IonActionSheet
        header="Card Options"
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass="action-sheet"
        buttons={[
          {
            text: "Share",
            icon: share,
            handler: () => {
              console.log("share Clicked");
            },
          },
          {
            text: "Download",
            icon: download,
          },
          {
            text: "Report Abuse",
            icon: notificationsCircle,
          },
          {
            text: "Cancel",
            role: "cancel",
            icon: close,
          },
        ]}
      ></IonActionSheet>
    </>
  );
};

export const LikeState: React.FC<{
  iconType: string;
  chipColor: string;
  iconColor: string;
  value: number;
}> = (props) => {
  return (
    <IonChip color={props.chipColor}>
      <IonIcon color={props.iconColor} icon={props.iconType}></IonIcon>
      <IonLabel color={props.iconColor}>{props.value}</IonLabel>
    </IonChip>
  );
};
