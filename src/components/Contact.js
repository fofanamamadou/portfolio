import React from 'react';
import { Typography, Form, Input, Button, Row, Col } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Ici, vous intégreriez une logique d'envoi d'e-mail (ex: via EmailJS, Netlify Forms, ou un backend)
    alert("Merci pour votre message ! (Simulation d'envoi)");
  };

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Me Contacter</Title>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Title level={4}>Envoyez-moi un message</Title>
          <Form name="contact" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              label="Nom"
              rules={[{ required: true, message: 'Veuillez entrer votre nom !' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide !' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Veuillez entrer votre message !' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Envoyer
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>Retrouvez-moi sur</Title>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button type="link" href="https://www.linkedin.com/in/votre-profil" target="_blank" icon={<LinkedinOutlined />} style={{ fontSize: '20px', padding: '0', height: 'auto', marginBottom: '10px' }}>
              LinkedIn
            </Button>
            <Button type="link" href="https://github.com/votre_nom" target="_blank" icon={<GithubOutlined />} style={{ fontSize: '20px', padding: '0', height: 'auto', marginBottom: '10px' }}>
              GitHub
            </Button>
            <Button type="link" href="mailto:votre.email@example.com" icon={<MailOutlined />} style={{ fontSize: '20px', padding: '0', height: 'auto' }}>
              votre.email@example.com
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
