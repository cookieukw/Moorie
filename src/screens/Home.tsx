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
  date:string
}

const Home: React.FC = () => {
  const items: IItem[] = [
    {
      id: "1",
      name: "Crystal",
      date: "fevereiro/2024 - 27/maio/2024",
      description: "Ela adorava correr atrás das pessoas.",
      photoUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBMk7casTgNlW2Fasn7Eunrtk2ZOLofNWFg5UjdlIoTG5Bh1FlF-wXQ2UzJedTxDtnZq45c27SkvWpJw9UkXguDRb3cTt6XalFn-_vFWnMrxPUdlxKRBC4s94dbquN3Tr8m8d67BsH2DF405doQWkD5mxO80usQQa6tCU0-4s1Zb9_E-NzH-Ld5zzkakY/s320/retouch_1718894218249.PNG",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Moorie, o mural das memórias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {items.map((item: IItem) => (
            <PhotoCard
              key={item.id}
              id={item.id}
              title={item.name}
              photoUrl={item.photoUrl}
              date={item.date}
              description={item.description}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
