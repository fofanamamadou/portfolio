import React from 'react';
import { Typography } from 'antd';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaJava
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiDjango, SiSpringboot, SiPostgresql } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

const { Title } = Typography;

// Nouvelle structure de données incluant les icônes
const skills = {
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Responsive Design", icon: <MdDesignServices /> },
  ],
  "Backend": [
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "API REST", icon: <TbApi /> },
  ],
  "Outils": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Java", icon: <FaJava /> },
  ],
};

const Skills = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Compétences</Title>
      
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <Title level={4} style={{ marginBottom: '20px' }}>{category}</Title>
          <div className="skills-grid">
            {list.map(skill => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;