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
      className="glass-effect"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "16px",
        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03) translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
      }}
    >
      <IonImg
        src={photoUrl || "https://via.placeholder.com/300x150?text=Sem+Imagem"}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      />
      <IonCardHeader>
        <IonCardSubtitle style={{ color: "var(--ion-color-primary)", letterSpacing: "1px", fontWeight: 600 }}>{title}</IonCardSubtitle>
        <IonCardTitle
          style={{
            fontSize: "15px",
            fontWeight: 400,
            color: "#cbd5e1", /* Slate 300 */
            marginTop: "8px",
            lineHeight: "1.4",
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
        fill="solid"
        color="primary"
        onClick={() => navigate(`/details/${id}`)}
        style={{ margin: "14px", borderRadius: "8px", '--border-radius': '8px', fontWeight: 500, letterSpacing: '0.5px' }}
      >
        <IonIcon icon={eye} slot="start" />
        Ver Detalhes
      </IonButton>
    </IonCard>
  );
};

export default PhotoCard;
