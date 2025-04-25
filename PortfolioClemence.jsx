import React from 'react';

export default function PortfolioClemence() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Portfolio - Clémence RANCE</h1>
      <nav style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="#about" style={{ margin: '0 1rem' }}>Qui je suis ?</a>
        <a href="#skills" style={{ margin: '0 1rem' }}>Soft skills</a>
        <a href="#projects" style={{ margin: '0 1rem' }}>Mes projets</a>
        <a href="#enterprise" style={{ margin: '0 1rem' }}>Projets en entreprise</a>
        <a href="#school" style={{ margin: '0 1rem' }}>Projets scolaires</a>
        <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
      </nav>

      <section id="about">
        <h2>Qui je suis ?</h2>
        <p>Je m'appelle Clémence Rance, j'ai 23 ans. Après des études littéraires spécialisées en histoire,
        j'ai choisi de me réorienter vers un BTS Communication en alternance. Cette décision est née de mon désir
        d'être en contact direct avec les personnes et de travailler dans le milieu artistique, notamment en tant que
        chef de projet. Cette formation m'a permis de combiner ma passion pour la culture et mes compétences en communication.</p>
      </section>

      <section id="skills">
        <h2>Soft skills</h2>
        <ul>
          <li>Créative</li>
          <li>Curieuse</li>
          <li>Autonome</li>
        </ul>
      </section>
      <section id="projects"><h2>Mes projets</h2><p>Tu pourras ajouter ici une galerie ou une liste de projets.</p></section>
      <section id="enterprise"><h2>Projets en entreprise</h2><p>Détaille tes projets pros ici.</p></section>
      <section id="school"><h2>Projets scolaires</h2><p>Ajoute ici tes travaux réalisés pendant les études.</p></section>
      <section id="contact"><h2>Contact</h2><p>Tu pourras ajouter un formulaire ici.</p></section>
    </main>
  );
}
