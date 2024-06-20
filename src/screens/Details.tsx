import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface EntityData {
  [key: string]: {
    name: string;
    description: string;
    media: MediaItem[];
  };
}

const entityData: EntityData = {
  "1": {
    name: "Minha Cachorrinha",
    description: "Ela adorava correr atrás da bola.",
    media: [
      { type: "image", url: "/path/to/photo1.jpg" },
      { type: "image", url: "/path/to/photo2.jpg" },
      { type: "video", url: "https://www.example.com/path/to/video1.mp4" },
    ],
  },
  "2": {
    name: "Meu Gatinho",
    description: "Ele era muito curioso e brincalhão.",
    media: [
      { type: "image", url: "/path/to/cat-photo1.jpg" },
      { type: "image", url: "/path/to/cat-photo2.jpg" },
      { type: "video", url: "https://www.example.com/path/to/cat-video1.mp4" },
    ],
  },
};

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) {
    navigate("/");
    return;
  }
  const entity = entityData[id];
  const images: MediaItem[] = entity["media"];

  if (!entity) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Detalhes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Erro</IonCardSubtitle>
                    <IonCardTitle>Item não encontrado</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    O item solicitado não foi encontrado.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{entity.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCardContent>
          <IonImg
            src={images[Math.floor(Math.random() * images.length - 1)].url}
          />
        </IonCardContent>
        <IonCard>
          <IonCardContent>
            <IonCardSubtitle>Descrição</IonCardSubtitle>
            <IonCardTitle>{entity.description}</IonCardTitle>
          </IonCardContent>
        </IonCard>

        <IonCard></IonCard>
        <IonGrid>
          <IonRow></IonRow>
          <IonRow>
            {entity.media.map((item, index) => (
              <IonCol size="12" size-md="6" key={index}>
                {item.type === "image" ? (
                  <IonImg src={item.url} />
                ) : (
                  <video controls>
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Details;
