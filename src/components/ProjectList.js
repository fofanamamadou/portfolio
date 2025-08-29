import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectList = ({ projects }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Row gutter={[32, 32]}>
        {projects.map(project => (
          <Col key={project.id} xs={24} sm={12} md={8}>
            <ProjectCard project={project} onClick={() => openModal(project)} />
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          visible={modalVisible}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProjectList;
