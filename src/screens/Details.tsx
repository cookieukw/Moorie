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
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FaCalendarAlt, FaInfoCircle, FaImages, FaVideo } from "react-icons/fa";
import gsap from "gsap";
import entities from "../data/entities";
import VideoPlayer from "../components/VideoPlayer";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const entity = entities.find((e) => e.id === id);
  const images = entity?.media?.filter((item) => item.mimeType.startsWith("image")) || [];
  const videos = entity?.media?.filter((item) => item.mimeType.startsWith("video")) || [];

  const mainRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);
  const vidRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    imgRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: i * 0.1, ease: "power2.out" }
      );
    });

    vidRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, delay: i * 0.15, ease: "power2.out" }
      );
    });
  }, []);

  if (!id || !entity) {
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
        <div ref={mainRef}>
          <IonCard>
            <IonImg
              src={images[0]?.downloadUrl}
              style={{
               // width: "100%",
                //objectFit: "cover",
                height: "240px",
                borderRadius: "15px",
              }}
            />
            <IonCardHeader>
              <IonCardTitle>{entity.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle>
                <FaInfoCircle style={{ marginRight: "6px" }} />
                Descrição
              </IonCardSubtitle>
              <p
                style={{
                  whiteSpace: "pre-line",
                  padding: "1rem 2rem",
                  textAlign: "justify",
                }}
              >
                {entity.longDescription}
              </p>
            </IonCardContent>
            <IonCardContent>
              <IonCardSubtitle>
                <FaCalendarAlt style={{ marginRight: "6px" }} />
                Data
              </IonCardSubtitle>
              <p>{entity.date}</p>
            </IonCardContent>
          </IonCard>

          <IonGrid>
            <IonRow>
              {images.slice(1).map((item, index) => (
                <IonCol size="6" sizeMd="4" key={index}>
                  <div
                    ref={(el) => {
                      if (el) imgRefs.current[index] = el;
                    }}
                  >
                    <IonCard>
                      <IonImg
                        src={item.downloadUrl}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                      <IonCardContent className="ion-text-center">
                        <FaImages />
                      </IonCardContent>
                    </IonCard>
                  </div>
                </IonCol>
              ))}
            </IonRow>
            <IonRow>
              {videos.map((item, index) => (
                <IonCol size="12" sizeMd="6" key={index}>
                  <div
                    ref={(el) => {
                      if (el) vidRefs.current[index] = el;
                    }}
                  >
                    <IonCard>
                      <VideoPlayer
                        videoUrl={item.downloadUrl}
                        imagePoster={images[0]?.downloadUrl}
                      />
                      <IonCardContent className="ion-text-center">
                        <FaVideo />
                      </IonCardContent>
                    </IonCard>
                  </div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Details;
