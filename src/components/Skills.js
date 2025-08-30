import React from 'react';
import { Typography, Row, Col, Tag } from 'antd';

const { Title } = Typography;

const skills = {
  "Frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Ant Design"],
  "Backend": ["Node.js", "Express", "MongoDB"],
  "Outils": ["Git", "Webpack", "npm", "Jest"],
  "Autres": ["API REST", "Responsive Design"]
};

const Skills = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Compétences</Title>
      <Row gutter={[32, 32]}>
        {Object.entries(skills).map(([category, list]) => (
          <Col xs={24} sm={12} md={6} key={category}>
            <Title level={4}>{category}</Title>
            {list.map(skill => (
              <Tag key={skill} style={{ margin: '4px' }}>{skill}</Tag>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
