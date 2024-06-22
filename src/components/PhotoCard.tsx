import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";

interface PhotoCardProps {
  photoUrl: string;
  description: string;
  id: string; // Adicionando a propriedade id
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photoUrl, description, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  return (
    <IonCard>
      <IonImg
        src={photoUrl}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <IonCardHeader>
        <IonCardSubtitle>Descrição</IonCardSubtitle>
        <IonCardTitle>{description}</IonCardTitle>
      </IonCardHeader>
      <IonButton expand="full" onClick={handleNavigate}>
        Ver Detalhes
      </IonButton>
    </IonCard>
  );
};

export default PhotoCard;
