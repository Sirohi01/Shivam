import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
        <Header />
        <Hero />
        <main className="main-content">
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
        </main>
        <Contact />
        </div>
    );
}

export default App;