import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface MessageCardProps {
  message: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Mensagem</IonCardSubtitle>
        <IonCardTitle>{message}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {/* Conteúdo adicional pode ser adicionado aqui */}
      </IonCardContent>
    </IonCard>
  );
};

export default MessageCard;
