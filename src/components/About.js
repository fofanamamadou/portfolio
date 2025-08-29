import React from 'react';
import { Typography, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Row align="middle" gutter={[32, 32]}>
        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          <Avatar size={150} icon={<UserOutlined />} />
        </Col>
        <Col xs={24} sm={16}>
          <Title level={2}>À propos de moi</Title>
          <Paragraph>
            Bonjour ! Je suis [Votre Nom], un développeur passionné par la création d'applications web performantes et esthétiques. J'ai de l'expérience avec des technologies modernes comme React, Node.js et l'écosystème JavaScript.
          </Paragraph>
          <Paragraph>
            J'aime résoudre des problèmes complexes et apprendre continuellement de nouvelles choses. Quand je ne code pas, j'aime [Vos Hobbies ou Intérêts].
          </Paragraph>
          <Paragraph>
            N'hésitez pas à parcourir mes projets et à me contacter si vous souhaitez collaborer !
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
