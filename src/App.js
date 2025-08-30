import React, { useEffect, useState, useCallback } from 'react';
import { Layout, Menu, Typography, Avatar, Drawer, Button } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

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

const particlesOptions = {
    background: {
        color: {
            value: 'transparent',
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#888888',
        },
        links: {
            color: '#888888',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

function App() {
  const [ init, setInit ] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [current, setCurrent] = useState('about');

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleScroll = useCallback(() => {
    const headerOffset = 150; // An offset to trigger the change a bit sooner
    const scrollPosition = window.scrollY + headerOffset;
    const sectionIds = menuItems.map(item => item.key).reverse(); // Reverse to check from bottom up

    let newCurrent = 'about'; // Default to 'about'
    for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
            newCurrent = id;
            break; // Found the current section, break the loop
        }
    }
    setCurrent(newCurrent);
  }, []);

  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Layout className="layout" style={{ background: 'transparent' }}>
      {init && <Particles id="tsparticles" options={particlesOptions} />}
      <Header style={{ padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: '15px' }}/>
            <h1 className="header-title">Mon Portfolio</h1>
        </div>

        <div className="desktop-only">
            <Menu theme="dark" mode="horizontal" items={menuItems} selectedKeys={[current]} style={{ lineHeight: '64px', background: 'transparent', borderBottom: 'none', minWidth: '300px' }} />
        </div>

        <Button className="mobile-only" type="text" onClick={showDrawer} style={{color: 'white'}}>
            <MenuOutlined />
        </Button>

      </Header>

      <Drawer
          title="Navigation"
          placement="right"
          onClose={onCloseDrawer}
          open={drawerVisible}
          styles={{
            header: { background: 'var(--card-background-color)', borderBottom: '1px solid var(--border-color)' },
            body: { padding: 0, background: 'var(--card-background-color)' }
        }}
      >
          <Menu
              theme="dark"
              mode="vertical"
              items={menuItems}
              selectedKeys={[current]}
              onClick={onCloseDrawer}
              style={{ background: 'transparent', borderRight: 'none' }}
          />
      </Drawer>

      <Content style={{ padding: '0 50px', marginTop: '30px', zIndex: 0 }}>
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
      <Footer style={{ textAlign: 'center', zIndex: 0, background: 'transparent' }}>
        ©2025 [Votre Nom et Prénom]. Tous droits réservés.
      </Footer>
    </Layout>
  );
}

export default App;
