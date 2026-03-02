import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButtons,
  IonBackButton,
  IonModal,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaInfoCircle, FaImages, FaVideo } from "react-icons/fa";
import gsap from "gsap";
import entities from "../data/entities";
import VideoPlayer from "../components/VideoPlayer";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const entity = entities.find((e) => e.id === id);
  const images = entity?.media?.filter((item) => item.mimeType.startsWith("image")) || [];
  const videos = entity?.media?.filter((item) => item.mimeType.startsWith("video")) || [];

  const mainRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);
  const vidRefs = useRef<HTMLDivElement[]>([]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    imgRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: i * 0.1, ease: "power2.out" }
      );
    });

    vidRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, delay: i * 0.15, ease: "power2.out" }
      );
    });
  }, []);

  if (!id || !entity) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Detalhes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Erro</IonCardSubtitle>
                    <IonCardTitle>Item não encontrado</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    O item solicitado não foi encontrado.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="header-glass">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" color="primary" />
          </IonButtons>
          <IonTitle style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{entity.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div ref={mainRef}>
          <div style={{ position: 'relative', width: '100%', height: '350px', overflow: 'hidden', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.6)', backgroundColor: '#0f172a' }}>
             {/* Blurred background for cinematic feel without distortion */}
             <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', backgroundImage: `url(${images[0]?.downloadUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(20px)', opacity: 0.4 }}></div>
             
             {/* Main image properly contained */}
             <IonImg 
                src={images[0]?.downloadUrl} 
                onClick={() => setSelectedImage(images[0]?.downloadUrl)}
                style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'contain', 
                    position: 'relative',
                    zIndex: 1,
                    cursor: 'pointer'
                }} 
             />
             
             {/* Gradient overlay for blending */}
             <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(15,23,42,1), transparent)', height: '180px', zIndex: 2, pointerEvents: 'none' }}></div>
          </div>
          
          <div style={{ padding: '0 16px', marginTop: '-60px', position: 'relative', zIndex: 10, marginBottom: '2rem' }}>
            <IonCard className="glass-effect" style={{ margin: 0, borderRadius: '20px' }}>
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '2rem', fontWeight: 700, color: '#f8fafc', lineHeight: 1.2 }}>{entity.name}</IonCardTitle>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', color: 'var(--ion-color-primary)', fontWeight: 500 }}>
                   <FaCalendarAlt /> <span>{entity.date}</span>
                </div>
              </IonCardHeader>
              <IonCardContent>
                <h3 style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', fontSize: '1.2rem', fontWeight: 600, margin: '16px 0 12px 0' }}>
                  <FaInfoCircle style={{ marginRight: "8px", color: 'var(--ion-color-primary)' }} />
                  História
                </h3>
                <p
                  style={{
                    whiteSpace: "pre-line",
                    lineHeight: '1.8', 
                    color: '#e2e8f0', /* Lighter slate for better contrast */
                    fontSize: '1.05rem', 
                    textAlign: "justify",
                    margin: 0
                  }}
                >
                  {entity.longDescription}
                </p>
              </IonCardContent>
            </IonCard>
          </div>

          <div style={{ padding: '0 16px', marginBottom: '2rem' }}>
            {images.length > 1 && (
            <>
              <h3 style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1rem' }}>
                <FaImages style={{ marginRight: "8px", color: 'var(--ion-color-primary)' }} />
                Fotos
              </h3>
              <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '16px', paddingBottom: '16px' }}>
                {images.slice(1).map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedImage(item.downloadUrl)}
                    style={{ flex: '0 0 auto', width: '240px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backgroundColor: '#1e293b', cursor: 'pointer' }}
                    ref={(el) => { if (el) imgRefs.current[index] = el; }}
                  >
                    <IonImg src={item.downloadUrl} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </>
            )}

            {videos.length > 0 && (
            <>
              <h3 style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.3rem', marginTop: '1rem', marginBottom: '1rem' }}>
                <FaVideo style={{ marginRight: "8px", color: 'var(--ion-color-primary)' }} />
                Vídeos
              </h3>
              <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '16px' }}>
                {videos.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ flex: '0 0 auto', width: '320px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.5)', background: '#1e293b' }}
                    ref={(el) => { if (el) vidRefs.current[index] = el; }}
                  >
                    <VideoPlayer videoUrl={item.downloadUrl} imagePoster={images[0]?.downloadUrl} />
                  </div>
                ))}
              </div>
            </>
            )}
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        <IonModal isOpen={!!selectedImage} onDidDismiss={() => setSelectedImage(null)}>
          <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton 
              fill="clear" 
              style={{ position: 'absolute', top: '24px', right: '16px', color: '#fff', zIndex: 999 }} 
              onClick={() => setSelectedImage(null)}
            >
              <IonIcon icon={closeOutline} slot="icon-only" style={{ fontSize: '32px' }} />
            </IonButton>
            {selectedImage && (
               <img src={selectedImage} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Fullscreen" />
            )}
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Details;
