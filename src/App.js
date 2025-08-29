import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css'; // Importe les styles de base d'Ant Design

import ProjectList from './components/ProjectList';
import projects from './data/projects.json';

import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <h1 style={{ color: 'white', margin: 0, float: 'left' }}>Mon Portfolio</h1>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '30px' }}>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <ProjectList projects={projects} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Portfolio ©2025 Créé avec React et Ant Design
      </Footer>
    </Layout>
  );
}

export default App;
