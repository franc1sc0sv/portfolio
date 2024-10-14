import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";

import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";

import expressicon from "../../assets/icons/expressicon.svg";

import apiicon from "../../assets/icons/apiicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";

import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/FJ.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

import HiveSync from "../img/FireShot Capture 003 - HiveSync - hivesync.netlify.app.png";
import teamup from "../img/teamup.png";

export const headerIntroData = {
  title: {
    de: "Hola, soy Francisco",
    en: "Hi, I'm Francisco",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Soy una persona adaptable y autodisciplinada, capaz de afrontar los retos con resiliencia y optimismo. Mi enfoque del liderazgo se basa en la paciencia y la escucha activa, lo que me permite comprender mejor a los demás y trabajar eficazmente en equipo. Me considero autodidacta y responsable, siempre dispuesto a aprender rápidamente y mejorar mis habilidades.",
    en: "I am an adaptable and self-disciplined person, able to face challenges with resilience and optimism. My approach to leadership is based on patience and active listening, which allows me to better understand others and work effectively in a team. I consider myself self-taught and responsible, always willing to learn quickly and improve my skills.",
  },
  buttons: [
    {
      name: "Projects",
      label: {
        de: "Mis proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
};

export const projectsData = [
  {
    title: "HiveSync",
    description:
      "HiveSync surge en un contexto de constantes cambios impulsados por la nueva era tecnológica, que impacta especialmente en los sectores corporativo y educativo. A medida que estos sectores buscan adaptarse a las nuevas tendencias, se hace evidente la necesidad de actualizar las metodologías y pedagogías en el trabajo colaborativo. HiveSync es una red de comunicaciones centralizada que permite a las personas colaborar en un ambiente aislado desde cualquier lugar, siempre que cuenten con conexión a Wi-Fi. La plataforma ofrece funcionalidades como espacios de trabajo para grupos, acceso a canales de comunicación textuales y audiovisuales, y la integración de herramientas útiles como inteligencia artificial, documentos de texto y pizarras interactivas, todo diseñado para optimizar el trabajo y el estudio en entornos modernos.",
    description_EN:
      "HiveSync arises in a context of constant changes driven by the new technological era, which especially impacts the corporate and educational sectors. As these sectors seek to adapt to new trends, the need to update methodologies and pedagogies in collaborative work becomes evident. HiveSync is a centralized communications network that allows people to collaborate in an isolated environment from anywhere, as long as they have a Wi-Fi connection. The platform offers functionalities such as group workspaces, access to textual and audiovisual communication channels, and the integration of useful tools such as artificial intelligence, text documents and interactive whiteboards, all designed to optimize work and study in modern environments.",
    technologies: [
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "TypeScript", icon: typescripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Express", icon: expressicon },
      { name: "JWT", icon: jwticon },
    ],
    image: HiveSync,
    githuburl: "https://github.com/franc1sc0sv/hivesync_docker",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "TeamUp",
    description:
      "TeamUp se fundamenta en la necesidad de modernizar los procesos deportivos en el Colegio Don Bosco, donde se identificó un enfoque anticuado para la reserva de canchas y la organización de encuentros deportivos. Esta solución innovadora digitaliza y optimiza estos procedimientos a través de una serie de aplicaciones web que facilitan la creación de partidos, equipos y plantillas, mejorando la accesibilidad y agilidad en la gestión. ",
    description_EN:
      "TeamUp is based on the need to modernize the sports processes at the Don Bosco School, where an outdated approach to the reservation of courts and the organization of sporting events was identified. This innovative solution digitizes and optimizes these procedures through a series of web applications that facilitate the creation of matches, teams and squads, improving accessibility and agility in management. ",
    technologies: [
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Express", icon: expressicon },
      { name: "JWT", icon: jwticon },
    ],
    image: teamup,
    githuburl: "https://github.com/franc1sc0sv/teamup-frontend",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
];

export const liveTickerData = {
  content: {
    de: "Mas proyectos en Github",
    en: "More Projects on Github",
  },
};

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
    ],
  },
];

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
];

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
    ],
  },
];

export const navLinks = [
  { de: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { de: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
];

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
];

export const sideBarRightMail = {
  link: "mailto:franc1sc0.sv.xd@gmail.com",
  text: "franc1sc0.sv.xd@gmail.com",
};

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/francisco-hernandez-148105224/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/franc1sc0sv",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:franc1sc0.sv.xd@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
];

export const quotesData = [
  {
    de: '"Si se puede imaginar, se puede programar"',
    en: `"If you can imagine it, you can program it"`,
    author: "ProgramacionATS",
  },
  {
    de: '"La web es como un lienzo, y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
];

export const aboutMeData = {
  title: "Sobre mi",
  title_EN: "About me",
  description: "Algunas cosas sobre mi",
  description_EN: "Some things about me",
  paragraphs_DE: [
    {
      title: "Los Circuitos de Mi Corazón",
      description:
        "Cuando no estoy navegando en el mundo digital, exploro el fascinante ámbito de la tecnología y el hardware. Los circuitos y las uniones de soldadura son para mí como piezas de un rompecabezas en una emocionante aventura.",
      icon: hardwareicon,
    },
    {
      title: "En la Vía Rápida de la Vida",
      description:
        "Además de programar, me gusta estar en la vía rápida – en el sentido más literal de la palabra. Los automóviles son mi pasión, y disfruto conducir máquinas potentes por carreteras desconocidas.",
      icon: caricon,
    },
    {
      title: "La Alegría del Descubrimiento como Lema de Vida",
      description:
        "Mi viaje como desarrollador web es solo una parte de mi camino en la vida. Vivo bajo el lema de que la aventura comienza cuando dejas atrás lo familiar. Descubrir nuevos lugares y culturas es mi forma de inspiración creativa.",
      icon: travelicon,
    },
  ],

  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures inspires my creativity.",
      icon: travelicon,
    },
  ],
};

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
};

export const buttonLabels = {
  language: {
    de: "SP",
    en: "EN",
  },
};

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
