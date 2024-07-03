import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    illustrator,
    typescript,
    photoshop,
    premierepro,
    aftereffect,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "experience",
      title: "Parcours",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Audiovisuel",
      icon: web,
    },
    {
      title: "Développement Web",
      icon: mobile,
    },
    {
      title: "Création Numérique",
      icon: backend,
    },
    {
      title: "Communication",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Premiere Pro",
      icon: premierepro,
    },
    {
      name: "After Effects",
      icon: aftereffect,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Threejs",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Stage en infographie",
      company_name: "École de la Seconde Chance",
      icon: photoshop,
      iconBg: "#383E56",
      date: "Décembre 2019",
      points: [

        "J'ai eu l'opportunité de réaliser un stage en infographie, où j'ai pu développer et affiner mes compétences dans ce domaine.",
        "Pendant cette expérience, j'ai travaillé sur divers projets qui m'ont permis d'explorer différentes facettes de l'infographie, la retouche d'images, et la conception de supports de communication visuelle.",
        "Ce stage m'a permis d'apprendre de nouvelles techniques et logiciels.",
        
      ],
    },
    {
      title: "Bac STI2D",
      company_name: "LPO Raoul Georges-Nicolo",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Année 2022-2023",
      points: [
        "Durant cette formation, j'ai acquis des compétences en innovation technologique, en développement durable et en gestion de projet.",
        "J'ai également eu l'occasion de travailler sur des projets qui m'ont permis d'accroitre ma passion pour le domaine de l'informatique.",
        
      ],
    },
    {
      title: "1ère année BUT MMI",
      company_name: "IUT de la Guadeloupe, Saint-Claude",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Année 2023-2024",
      points: [
        "J'ai poursuivi mes études en obtenant un BUT MMI",
        "Cette formation m'a permis d'acquérir une expertise dans divers domaines tels que  le développement web, la communication digitale, ou encore la production audiovisuelle.",
        "J'ai travaillé sur des projets variés qui m'ont permis de maîtriser des outils de création graphique, des langages de programmation, et des techniques de gestion de contenu.",
       
      ],
    },
    {
      title: "Stage de 1ère année",
      company_name: "Maison de l'insertion",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Juin 2024",
      points: [
        "",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Première année",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mmi",
          color: "green-text-gradient",
        },
        {
          name: "projets",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Deuxième année",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mmi",
          color: "green-text-gradient",
        },
        {
          name: "projets",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "<https://github.com/>",
    },
    {
      name: "Troisième année",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mmi",
          color: "green-text-gradient",
        },
        {
          name: "projets",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };