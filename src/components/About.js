import React from 'react';
import { Typography, Row, Col, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Row align="middle" gutter={[32, 32]}>
        {/* Photo / Avatar */}
        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          <Avatar size={150} icon={<UserOutlined />} />
        </Col>

        {/* Texte de présentation */}
        <Col xs={24} sm={16}>
          <Title level={2}>À propos de moi</Title>
          <Paragraph>
            Bonjour ! Je suis <strong>Mamadou FOFANA</strong>, développeur full-stack passionné,
            spécialisé dans la création d’applications web et mobiles modernes, performantes et
            intuitives. Mon objectif est de concevoir des solutions qui allient
            <em> efficacité</em>, <em> expérience utilisateur</em> et <em> scalabilité</em>.
          </Paragraph>
          <Paragraph>
            J’ai travaillé avec plusieurs technologies comme <strong>React.js</strong>,
            <strong> React Native</strong>, <strong>Django</strong>, <strong>Node.js</strong>,
            <strong> Spring Boot (Java)</strong> et <strong>PostgreSQL</strong>. Je conçois des
            APIs REST sécurisées (authentification JWT), j’intègre les frontends web/mobile et je
            mets en place des pipelines de déploiement fiables.
          </Paragraph>
          <Paragraph>
            Curieux et rigoureux, j’aime relever des défis techniques, apprendre en continu et
            travailler en équipe pour livrer des produits impactants. Je m’intéresse également à la
            <strong> cybersécurité</strong> et au partage de connaissances.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
