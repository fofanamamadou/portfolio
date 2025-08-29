import React from 'react';
import { Modal, Button, Tag } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const ProjectModal = ({ project, visible, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      title={project.title}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      {project.videoUrl ? (
        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={project.videoUrl}
            title={`Vidéo de ${project.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img alt={project.title} src={project.imageUrl} style={{ width: '100%' }} />
      )}

      <p style={{ marginTop: '24px', fontSize: '16px' }}>{project.description}</p>

      <div style={{ margin: '24px 0' }}>
        <strong>Technologies:</strong><br />
        {project.technologies.map(tech => (
          <Tag color="blue" key={tech} style={{ marginTop: '8px' }}>{tech}</Tag>
        ))}
      </div>

      <div>
        {project.githubUrl && (
          <Button 
            href={project.githubUrl} 
            target="_blank" 
            icon={<GithubOutlined />}
            style={{ marginRight: '10px' }}
          >
            Code Source
          </Button>
        )}
        {project.siteUrl && (
          <Button 
            href={project.siteUrl} 
            target="_blank" 
            icon={<LinkOutlined />}
            type="primary"
          >
            Visiter le Site
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
