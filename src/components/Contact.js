import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Space } from 'antd'; // Importe les composants Ant Design nécessaires
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons'; // Importe les icônes

// Destructure les composants de Typography et Input
const { Title } = Typography;
const { TextArea } = Input;

const Contact = () => {
  // Fonction appelée lors de la soumission du formulaire
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // TODO: Ici, vous intégreriez une logique d'envoi d'e-mail réelle.
    // Par exemple, via un service comme EmailJS, Netlify Forms, ou une API backend.
    alert("Merci pour votre message ! (Simulation d'envoi)");
  };

  return (
    // Conteneur principal de la section avec un padding vertical
    <div style={{ padding: '50px 0' }}>
      {/* Titre de la section "Me Contacter" */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Me Contacter</Title>
      
      {/* Utilise la grille d'Ant Design pour organiser le formulaire et les liens */}
      <Row gutter={[32, 32]}>
        {/* Colonne pour le formulaire d'envoi de message */}
        <Col xs={24} md={12}>
          <Title level={4}>Envoyez-moi un message</Title>
          {/* Formulaire Ant Design avec validation */}
          <Form name="contact" onFinish={onFinish} layout="vertical">
            {/* Champ pour le nom */}
            <Form.Item
              name="name"
              label="Nom"
              rules={[{ required: true, message: 'Veuillez entrer votre nom !' }]}
            >
              <Input />
            </Form.Item>
            {/* Champ pour l'email */}
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide !' }]}
            >
              <Input />
            </Form.Item>
            {/* Champ pour le message (zone de texte) */}
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Veuillez entrer votre message !' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            {/* Bouton de soumission du formulaire */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Envoyer
              </Button>
            </Form.Item>
          </Form>
        </Col>
        
        {/* Colonne pour les liens vers les profils sociaux */}
        <Col xs={24} md={12}>
          <Title level={4}>Retrouvez-moi sur</Title>
          {/* Utilise Space pour espacer horizontalement les icônes */}
          <Space size="large">
            {/* Lien LinkedIn avec icône */}
            <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            {/* Lien GitHub avec icône */}
            <a href="https://github.com/votre_nom" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            {/* Lien Email avec icône */}
            <a href="mailto:votre.email@example.com">
              <MailOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
