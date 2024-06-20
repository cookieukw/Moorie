import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import PhotoCard from "../components/PhotoCard";

interface IItem {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
}

const Home: React.FC = () => {
  const items: IItem[] = [
    {
      id: "1",
      name: "Crystal",
      description: "Ela adorava correr atrás da bola.",
      photoUrl: "",
    },
    {
      id: "2",
      name: "Meu Gatinho",
      description: "Ele era muito curioso e brincalhão.",
      photoUrl: "",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mural de Memórias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {items.map((item: IItem) => (
            <PhotoCard
              key={item.id}
              id={item.id}
              photoUrl={item.photoUrl}
              description={item.description}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
