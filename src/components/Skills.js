import React from 'react';
import { Typography, Row, Col, Tag } from 'antd'; // Importe les composants Typography, Row, Col, Tag d'Ant Design

// Destructure le composant Title de Typography
const { Title } = Typography;

// Définit les compétences par catégorie
const skills = {
  "Frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Ant Design"],
  "Backend": ["Node.js", "Express", "MongoDB"],
  "Outils": ["Git", "Webpack", "npm", "Jest"],
  "Autres": ["API REST", "Responsive Design"]
};

/**
 * Composant Skills
 * Représente la section "Mes Compétences" du portfolio.
 * Affiche les compétences regroupées par catégories.
 */
const Skills = () => {
  return (
    // Conteneur principal de la section avec un padding vertical
    <div style={{ padding: '50px 0' }}>
      {/* Titre de la section "Mes Compétences" */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Compétences</Title>
      
      {/* Utilise la grille d'Ant Design pour organiser les catégories de compétences */}
      <Row gutter={[32, 32]}> {/* Espacement entre les colonnes et les lignes */}
        {/* Mappe sur les catégories de compétences */}
        {Object.entries(skills).map(([category, list]) => (
          // Colonne pour chaque catégorie, avec des tailles responsives
          <Col xs={24} sm={12} md={6} key={category}>
            {/* Titre de la catégorie de compétences */}
            <Title level={4}>{category}</Title>
            {/* Mappe sur la liste des compétences de la catégorie pour afficher des Tags */}
            {list.map(skill => (
              <Tag key={skill} style={{ margin: '4px' }}>{skill}</Tag> // Tag Ant Design pour chaque compétence
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
