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
      <IonHeader className="ion-no-border">
        <IonToolbar className="header-glass">
          <IonTitle className="gradient-text" style={{ fontWeight: 700, fontSize: "1.2rem", padding: "12px 16px" }}>Moorie</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: "3rem 1.5rem", textAlign: "center", marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 12px 0", lineHeight: "1.2" }}>
            Guardando <span className="gradient-text">Lembranças</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", margin: 0, fontWeight: 300 }}>
            Um espaço dedicado àqueles que marcaram nossas vidas.
          </p>
        </div>
        <IonGrid style={{ padding: "0 1rem 2rem 1rem" }}>
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
