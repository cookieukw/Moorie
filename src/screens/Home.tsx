import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import PhotoCard from "../components/PhotoCard";
import entities from "../data/entities";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Moorie, feito para guardar lembranças</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {entities.map((item) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={item.id}>
                <PhotoCard
                  id={item.id}
                  title={item.name}
                  photoUrl={item.photoUrl}
                  date={item.date}
                  description={item.shortDescription}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
