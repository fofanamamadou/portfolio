import React from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import ProjectList from './components/ProjectList';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import projects from './data/projects.json';

import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const menuItems = [
    { key: 'about', label: <a href="#about">À propos</a> },
    { key: 'skills', label: <a href="#skills">Compétences</a> },
    { key: 'projects', label: <a href="#projects">Projets</a> },
    { key: 'contact', label: <a href="#contact">Contact</a> },
];


function App() {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Remplacez l'icône par votre photo en utilisant <Avatar src="/path/to/your/photo.jpg" /> */}
            <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: '15px' }}/>
            <h1 className="header-title">Mon Portfolio</h1>
        </div>
        <Menu theme="dark" mode="horizontal" items={menuItems} style={{ lineHeight: '64px', background: 'transparent', borderBottom: 'none' }} />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '30px' }}>
        <div className="site-layout-content">
          <div id="about" style={{paddingTop: '70px', marginTop: '-70px'}}><About /></div>
          <div id="skills" style={{paddingTop: '70px', marginTop: '-70px'}}><Skills /></div>
          <div id="projects" style={{paddingTop: '70px', marginTop: '-70px'}}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Projets</Title>
            <ProjectList projects={projects} />
          </div>
          <div id="contact" style={{paddingTop: '70px', marginTop: '-70px'}}><Contact /></div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2025 [Votre Nom et Prénom]. Tous droits réservés.
      </Footer>
    </Layout>
  );
}

export default App;
