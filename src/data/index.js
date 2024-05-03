import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import CV from "../files/cv-lucca.pdf";

const bioDescription = `6+ years of experience as a Software Engineer, working on
large-scale and high-impact projects for digital companies, where I
created digital acquisition experiences, dashboards, designed systems and email marketing tools.`;
const subBioDescription = `I'm really focused about resolving real problems through technology,
specifically web development, regarding back-end technologies.
Web is my passion. Web is my life. I help making the web as it is today.`;

const rootDomain = "https://lccmrx.dev";

const socials = {
  email: "mailto:contact@lccmrx.dev",
  discord: "",
  github: "https://github.com/lccmrx",
  linkedin: "https://linkedin.com/in/lccmrx",
  instagram: "https://instagram.com/lccmrx/",
}

const careerPath = [
  {
    role: "senior software engineer",
    details: `Mercado Livre | São Paulo, Brazil | 2024 -> current`,
    description: `Recently admitted`
  },
  {
    role: "software engineer",
    details: `Red Ventures | São Paulo, Brazil | 2022 -> 2024`,
    description: `As a Software Engineer @ RV, my core focus is on back-end engineering, complemented by providing assistance to the data teams as required. Our tech stack predominantly features Golang, complemented by a variety of bespoke architectures, including mail gunners, content management systems, and more. We specialize in constructing REST APIs tailored to our clients' specific needs, ranging from serverless to cloud-managed containerized architectures, leveraging technologies such as Kubernetes and AWS ECS. Our primary objective is to craft seamless acquisition pages that prioritize speed and security throughout the process. This commitment ensures we consistently meet high standards of quality, performance, and accessibility.`,
  },
  {
    role: "software engineer assistant",
    details: `Red Ventures | São Paulo, Brazil | 2020 -> 2022`,
    description: `As an Assistant Software Engineer @ RV, my role primarily involved contributing to the development and maintenance of an ongoing project. I played a key part in enhancing various features across the system, ensuring its smooth operation. My contributions extended to the creation and improvement of numerous internal tools. Among these were sophisticated dashboards and comprehensive email marketing tools, which were instrumental in streamlining operations and enhancing our marketing strategies. My efforts in these areas not only supported the project's objectives but also fostered a more efficient and productive workflow within the team.`,
  },
  {
    role: "back-end developer",
    details: `ITWV | São Paulo, Brazil | 2019 -> 2020`,
    description: `Beginning my programming journey as a back-end developer @ ITWV, I embarked on a path that introduced me to Python, my inaugural programming language. My initial project involved creating a REST API for a bespoke Business Intelligence dashboard system. This experience was not limited to REST API development; I also engaged in batch processing tasks that required minimal API interaction. However, it was my first exposure to integrating with clients' APIs that truly broadened my technological horizon and ignited my enduring passion for web development.

    My career at ITWV also afforded me the opportunity to contribute to several notable Machine Learning projects. Among these, a standout project enabled a hospital to swiftly identify cancer in patients using laboratory reports. This, along with my involvement in various data processing and analytics projects, has enriched my professional experience, blending my interest in web technologies.`,
  },
  {
    role: "intern",
    details: `ITWV | São Paulo, Brazil | 2018 -> 2019`,
    description: `Starting my tech journey as an intern @ ITWV, I was initially unfamiliar with the intricacies of the field, but soon found myself immersed in the world of SQL and databases. The company, primarily focused on delivering data analytics projects and optimizing ETL processes, occasionally ventured into system development. As an Oracle Partner, ITWV provided me with extensive exposure to Oracle databases and tools, alongside valuable insights into Oracle Cloud. This enriching experience led me to achieve my first Oracle certification as an OCI Architect.

    During my tenure, I contributed to the construction of various dashboards, but the project that resonated with me the most involved leveraging a third-party software named 'Stilingue' for sentiment analysis from social media. Utilizing this data, we developed a dashboard to visually present the findings. This particular project opened doors to exciting opportunities, including traveling to another state to present our results to clients. This journey not only marked the beginning of my career in technology but also shaped my understanding and appreciation for data-driven decision-making and cloud technologies.`,
  },
];

const academyPath = [
  {
    role: "postgraduate diploma (pgdip) in golang expert",
    details: `full cycle | são Paulo, brazil | 2024 -> ongoing`,
  },
  {
    role: "bachelor in computer engineering",
    details: `centro universitário de são paulo university (UNASP) | são Paulo, brazil | 2018 -> 2022`,
  },
];

const quickActionList = [
  {
    text: "copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: rootDomain,
  },
  {
    text: "download cv",
    nick: "d",
    icon: <FiDownload />,
    target: CV,
  },
  {
    text: "know my career",
    nick: "k",
    icon: <FiLinkedin />,
    target: "https://linkedin.com/in/lccmrx",
  },
  {
    text: "see my github",
    nick: "g",
    icon: <FiGithub />,
    target: socials.github,
  },
  {
    text: "book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "send an email",
    nick: "e",
    icon: <FiMail />,
    target: socials.email,
  },
  {
    text: "follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: socials.instagram,
  },
  {
    text: "view source code",
    nick: "r",
    icon: <FiCoffee />,
    target:  `${socials.github}/www`,
  },
];

export { bioDescription, subBioDescription, careerPath, academyPath, quickActionList, socials, CV };
