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
      description: "Ela adorava correr atrás das pessoas.",
      photoUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVGdo-BKQKXK2sYzlkZYlfIeLBZN9pXPMr_6iRrU8vIGMF7E-3utVo9ZkgfUcx_um6FLh4Pl11Bqh-M2gsxqX_KBC9R0XBCpKVJwgynz1l0N5z4uSGlthmiNA2HC7L4uoZMxdDJcqHjRl768XEgH-SFQVe1l4C5UFM3ZgjQLXqO85hixEjgZXSmxHnc54/s4080/20240329_110359.jpg",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Memorial das memórias</IonTitle>
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
