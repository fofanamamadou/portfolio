import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Space } from 'antd';
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
          <Space size="large">
            <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            <a href="https://github.com/votre_nom" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
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
