import React from 'react';
import { Card, Tag } from 'antd';

const { Meta } = Card;

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      cover={<img alt={project.title} src={project.imageUrl} style={{ height: 200, objectFit: 'cover' }} />}
    >
      <Meta title={project.title} />
      <div style={{ marginTop: '16px' }}>
        {project.technologies.map(tech => (
          <Tag color="blue" key={tech}>{tech}</Tag>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
