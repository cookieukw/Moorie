import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { calendar, eye } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PhotoCardProps {
  photoUrl: string;
  title: string;
  description: string;
  id: string;
  date: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  photoUrl,
  description,
  id,
  title,
  date,
}) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLIonCardElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <IonCard
      ref={cardRef}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <IonImg
        src={photoUrl || "https://via.placeholder.com/300x150?text=Sem+Imagem"}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <IonCardHeader>
        <IonCardSubtitle>{title}</IonCardSubtitle>
        <IonCardTitle
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            color: "#444",
            marginTop: "4px",
          }}
        >
          {description}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          paddingBottom: 0,
        }}
      >
        <IonIcon icon={calendar} />
        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardContent>
      <IonButton
        expand="block"
        onClick={() => navigate(`/details/${id}`)}
        style={{ margin: "12px", display: "flex", alignItems: "center", gap: "6px" }}
      >
        <IonIcon icon={eye} />
        Ver Detalhes
      </IonButton>
    </IonCard>
  );
};

export default PhotoCard;
