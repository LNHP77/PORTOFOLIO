import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const Realisations = () => {
  const [activeSection, setActiveSection] = useState('webd');

  const renderSection = (sectionId) => {
    const webdSection = (
      <div className="grid" id='webd'>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f6.png" alt="SAE 1.05" />
            <div className="links"></div>
          </div>
          <a href="https://xd.adobe.com/view/4f6e73b4-7610-4bf9-b904-104cfef86220-1a3d/" className="content text-gray-900" target='_blank'>
            <h1>SAE 1.05 : Produire un site Web</h1>
            <p>Notre tout premier projet de classe en développement web, nous avions pour objectif de créer un site web sous forme d'agence, 
              par groupe de 3. Nous avons choisi de faire une agence nommée Caroussel regroupant les classements les plus insolites. 
              (PS : Le site a eu quelques problèmes techniques après sa publication, je vous suggère plutôt de regarder la maquette)</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f5.png" alt="Maquette iPhone 15 Pro" />
            <div className="links"></div>
          </div>
          <a href="umaestro" className="content text-gray-900" target='_blank'>
            <h1>Maquette iPhone 15 Pro</h1>
            <p>Creator of projects and content to help content creators.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/my_music.jpg" alt="Formulaire MyMusic" />
            <div className="links"></div>
          </div>
          <a href="creators-area" className="content text-gray-900" target='_blank'>
            <h1>Formulaire MyMusic</h1>
            <p>Dans le cadre de notre projet, nous avons reçu la tâche stimulante de reproduire une page d'accueil d'un site de musique en
               utilisant HTML.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/giveup-f0dd258d.jpg" alt="Générateur T-shirt personnalisé" />
            <div className="links"></div>
          </div>
          <a href="giveup" className="content text-gray-900" target='_blank'>
            <h1>Générateur T-shirt personnalisé</h1>
            <p>Website allowing people to publish preborn dead projects.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
      </div>
    );

    const infoSection = (
      <div className="grid" id='info'>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f1.png" alt="SAE 1.05" />
            <div className="links"></div>
          </div>
          <a href="/img/Affiche X-MEN.png" className="content text-gray-900" target='_blank'>
            <h1>Affiche de film X-MEN</h1>
            <p>Notre tout premier projet de classe en développement web, nous avions pour objectif de créer un site web sous forme d'agence, 
              par groupe de 3. Nous avons choisi de faire une agence nommée Caroussel regroupant les classements les plus insolites. 
              (PS : Le site a eu quelques problèmes techniques après sa publication, je vous suggère plutôt de regarder la maquette)</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f2.png" alt="Maquette iPhone 15 Pro" />
            <div className="links"></div>
          </div>
          <a href="/img/Background.png" className="content text-gray-900" target='_blank'>
            <h1>Affiche de film personnalisée</h1>
            <p>Pour ce projet-ci, il fallait réaliser une affiche d'un autre film, tout en reprenant les éléments de l'affiche X-MEN. 
              J'ai décidé de choisir le flim "La Nonne".</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f3.png" alt="Formulaire MyMusic" />
            <div className="links"></div>
          </div>
          <a href="/img/ttc.png" className="content text-gray-900" target='_blank'>
            <h1>Autres</h1>
            <p>Voici une affiche que j'ai réalisé pour apprendre à utiliser Photoshop.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/f4.png" alt="Générateur T-shirt personnalisé" />
            <div className="links"></div>
          </div>
          <a href="/img/heatwave.png" className="content text-gray-900" target='_blank'>
            <h1>Autres</h1>
            <p>Voici une autre affiche que j'ai réalisé pour apprendre à utiliser Photoshop.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
      </div>
    );

    const audioSection = (
      <div className="grid" id='audio'>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/cambu.jpg" alt="SAE 1.05" />
            <div className="links"></div>
          </div>
          <a href="https://youtu.be/eTXmE8j9ea4" className="content text-gray-900" target='_blank'>
            <h1>SAE 1.04 : Produire un contenu audio et vidéo</h1>
            <p>Voici le projet que nous avons fait dernièrement en audiovisuel. Le but était de faire un court métrge, par groupe de 5. 
              Notre court-métrage raconte l'histoire de deux élèves qui veulent cambrioler l'Université. Une fois toutes les séquences tournées, 
              nous avons chacun fait notre propre montage pour le son et l'image.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
      </div>
    );

    const comSection = (
      <div className="grid" id='com'>
        <article className="card bg-white">
          <div className="image">
            <img src="/img/tipips.jpg" alt="SAE 1.05" />
            <div className="links"></div>
          </div>
          <a href="/img/tipips.pdf" className="content text-gray-900" target='_blank'>
            <h1>Stratégie de communication digitale</h1>
            <p>Voici le projet que nous avons fait en communication.
               Nous devions choisir un scénario, par groupe de 4 ou 5, et ensuite faire une implémentation d’une stratégie de communication 
               digitale. Nous avons choisi le scénario d'une biscuiterie familiale locale souhaite lancer un nouveau goûter pour les enfants 
               jusqu’à 10 ans.</p>
            <span className="link">Voir le projet</span>
          </a>
        </article>
      </div>
    );

    switch(sectionId) {
      case 'webd':
        return webdSection;
      case 'info':
        return infoSection;
      case 'audio':
        return audioSection;
      case 'com':
        return comSection;
      case 'all':
        return (
          <>
            {webdSection}
            {infoSection}
            {audioSection}
            {comSection}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="content-top">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Mes travaux</p>
          <h2 className={styles.sectionHeadText}>Projets de première année</h2>
        </motion.div>
        <div>
          <nav className="navbar">
            <ul>
              <li><a onClick={() => setActiveSection('all')} href='#all'>Tous</a></li>
              <li><a onClick={() => setActiveSection('webd')}  href='#webd'>Web design</a></li>
              <li><a onClick={() => setActiveSection('info')}  href='#info'>Infographisme</a></li>
              <li><a onClick={() => setActiveSection('audio')}  href='#audio'>Audiovisuel</a></li>
              <li><a onClick={() => setActiveSection('com')}  href='#com'>Communication</a></li>
            </ul>
          </nav>
        </div>
        {renderSection(activeSection)}
      </div>
    </>
  );
};

export default SectionWrapper(Realisations, "realisations");
