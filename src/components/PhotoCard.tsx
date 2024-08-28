import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
  IonCardContent,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";

interface PhotoCardProps {
  photoUrl: string;
  title: string; 
  description: string;
  id: string;
  date: string
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photoUrl, description, id ,title, date}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  return (
    <IonCard>
      <IonImg
        src={photoUrl}
        title={title} 
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <IonCardHeader>
        <IonCardSubtitle>{title}</IonCardSubtitle> 
        <IonCardTitle>{description}</IonCardTitle> 
      </IonCardHeader>{" "}
      <IonCardContent>
        <IonCardSubtitle>Data</IonCardSubtitle>
        <IonCardTitle>{date}</IonCardTitle>
      </IonCardContent>
      <IonButton expand="full" onClick={handleNavigate}>
        Ver Detalhes
      </IonButton>
    </IonCard>
  );
};

export default PhotoCard;
