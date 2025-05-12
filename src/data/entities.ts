import crystal from "../assets/data/crystal.json";
import bombom from "../assets/data/bombom.json"
import frajola from "../assets/data/frajola.json"
import floco_de_neve from "../assets/data/floco_de_neve.json"

export interface MediaItem {
  mimeType: string;
  downloadUrl: string;
  fileName: string;
}

export interface Entity {
  id: string;
  name: string;
  date: string;
  photoUrl: string;
  media: MediaItem[];
  shortDescription: string;
  longDescription: string;
}

const entities: Entity[] = [
  {
    id: "1",
    name: "Crystal",
    shortDescription: "Ela adorava correr atrás das pessoas.",
    longDescription:
      `Uma cachorrinha divertida e animada. Sempre me seguia quando eu chegava do trabalho e adorava carinho na barriga. Todos os dias ela me acompanhava da porta de casa até o portão e vice-versa. 
      Quando chegava na porta de casa, esperava eu abrir a porta e deitava no chão de barriga para cima, para ganhar o seu carinho diário.
      Era obediente na maioria das vezes e consegui aprender o comando de "comer", usado para dar permissão para ela se alimentar. 
       Ela esperava eu por o alimento e dar o comando de comer antes de sair de sua posição sentada e comer igual um leão. Sentirei saudades<3 `,

    date: "01/2024 - 27/07/2024",
    photoUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBMk7casTgNlW2Fasn7Eunrtk2ZOLofNWFg5UjdlIoTG5Bh1FlF-wXQ2UzJedTxDtnZq45c27SkvWpJw9UkXguDRb3cTt6XalFn-_vFWnMrxPUdlxKRBC4s94dbquN3Tr8m8d67BsH2DF405doQWkD5mxO80usQQa6tCU0-4s1Zb9_E-NzH-Ld5zzkakY/s320/retouch_1718894218249.PNG",
    media: crystal,
  },
  
  {
    id: "2",
    name: "Frajola",
    shortDescription:
      "Mesmo sem ter tempo de crescer, tu virou gigante no meu coração.",
    longDescription: `Mesmo sem ter tempo de crescer, tu virou gigante no meu coração.
    Chegou pequeno, frágil, mas trouxe com tua presença uma luz que eu nunca vou esquecer.
    Tua partida foi cedo demais, injusta demais, mas eu estava lá. E tu também.
    Até o último suspiro, tu não tava sozinho.

    Frajola, teu nome agora mora aqui dentro.
    No silêncio que ficou, no calor que eu tentei te devolver, no amor que transbordou mesmo sem palavras.
    Tu foi amado.
    Tu sempre vai ser lembrado.

    Descansa em paz, pequeno guerreiro.`,
    date: "20/02/2025 - 21/04/2025",
    photoUrl: "https://i.imgur.com/33GFvb2.jpeg",
    media: frajola,
  },

  {
    id: "3",
    name: "Floco de neve",
    shortDescription:
      "Uma gatinha que infelizmente não pode viver muito. fofa como todos os outros gatinhos e lindos olhos azuis",
    longDescription: `Tão pequena, tão branca, tão pura.
Parecia um pedacinho de nuvem que caiu na Terra só pra espalhar doçura.
Te deram embora antes da hora, quando teu mundo ainda era o colo quente da mãe.
Você não sabia o que era ração, só conhecia o cheiro do leite, o conforto do ninho.

Partiu rápido. Silenciosa.
Mas tua ausência grita.
A gente sente falta até do que não viveu contigo.
Você merecia mais tempo. Mais cuidado. Mais colo.

Não foi culpa tua.
Foi o mundo que te levou cedo demais,
como se anjinhos miúdos não tivessem espaço aqui.

Mas agora você é só isso:
um floco que derreteu no tempo,
mas congelou pra sempre no coração de quem te amou`,
    date: "20/02/2025 - 20/04/2025",
    photoUrl: "https://i.imgur.com/9PBQUdd.jpeg",
    media:floco_de_neve,
  },
  {
    id: "4",
    name: "Bombom",
    shortDescription:
      "Ela era teimosa, difícil, e mesmo sem apego, eu nunca deixei faltar água ou comida. No fundo, ela amolecia meu coração.",
    longDescription: `Essa cachorrinha marrom era cheia de personalidade. Teimosa demais, dava trabalho, e por isso, muitas vezes, eu tinha que prender ela. A verdade é que eu nunca fui muito apegado, mas sempre sentia dó quando a via assim. Não importava o dia ou o momento — sempre que eu a encontrava, fazia questão de trocar a água, colocar comida. Era o mínimo. Ela não precisava me conquistar com carinho; só o jeitinho dela já me fazia cuidar. Hoje, o vazio que ela deixou prova que até sem apego, o coração sente.`,
    date: "03/12/2024 - 12/05/2025",
    photoUrl: "https://i.imgur.com/NL2SVNw.jpeg",
    media: bombom
  },
];
export default entities;
