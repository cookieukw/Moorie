import React from "react";
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

interface MediaItem {
  mimeType: string;
  downloadUrl: string;
  fileName: string;
}

import crystalData from "../assets/data/crystal.json";
import VideoPlayer from "../components/VideoPlayer";

interface EntityData {
  [key: string]: {
    name: string;
    description: string;
    date: string;
    media: MediaItem[];
  };
}

const entityData: EntityData = {
  "1": {
    name: "Crystal",
    date:"fevereiro/2024 - 27/maio/2024",
    description:
      'Uma cachorrinha divertida e animada. Sempre me seguia quando eu chegava do trabalho e adorava carinho na barriga. Todos os dias ela me acompanhava da porta de casa até o portão e vice-versa. Quando chegava na porta de casa, esperava eu abrir a porta e deitava no chão de barriga para cima, para ganhar o seu carinho diário. Era obediente na maioria das vezes e consegui aprender o comando de "comer", usado para dar permissão para ela se alimentar. Ela esperava eu por o alimento e dar o comando de comer antes de sair de sua posição sentada e comer igual um leão. Sentirei saudades<3 ',
    media: crystalData,
  },
};

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  if (!id || !entityData[id]) {
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

  const entity = entityData[id];
  const images: MediaItem[] = entity.media.filter((item) =>
    item.mimeType.startsWith("image")
  );

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
        <IonCard>
          <IonImg
            src={images[1].downloadUrl}
            style={{
              width: "80%",
              objectFit: "cover",
              height: "260px",
              margin: "auto",
              marginTop: "50px",
              borderRadius: 15,
            }}
          />
          <IonCardHeader>
            <IonCardTitle>{entity.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>Descrição</IonCardSubtitle>
            <IonCardTitle>{entity.description}</IonCardTitle>
          </IonCardContent>
          <IonCardContent>
            <IonCardSubtitle>Data</IonCardSubtitle>
            <IonCardTitle>{entity.date}</IonCardTitle>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            {images.slice(1).map((item, index) => (
              <IonCol size="6" key={index}>
                <IonCard
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <IonImg
                    src={item.downloadUrl}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {entity.media.map((item, index) => (
              <IonCol size="6" key={index}>
                {item.mimeType.startsWith("video") && (
                  <IonCard
                    style={{
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <VideoPlayer
                      videoUrl={item.downloadUrl}
                      imagePoster={images[1].downloadUrl}
                    />
                  </IonCard>
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
