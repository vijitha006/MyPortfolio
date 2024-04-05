// import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
//import Skills from './components/skills/Skills';
import Skills from './components/skills/DB-Skills';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import axios from 'axios';
import { useState ,useEffect } from 'react';

function App() {


  return (
    <div >
      <main className="bg-danger-subtle m-0">
        <section width="100" className=" w-100 hero">
          <Header />
        </section>
        <About />
        <section className='ps-4 mb-4 mt-3'>

          <Skills />
        </section>
        <section className='ps-4 mb-4'>
          <h2 className="text-left fs-3  " >Education</h2>
          <p className="ps-3" >B.Tech Computer Science</p>
        </section>
        <section className='ps-4 mb-4'>
          <h2 className="text-left fs-3" >Experience</h2>
          <p className="ps-3">Honeycomb Technology- 2021 to present</p>
        </section>
        <section className='ps-4 mb-4'>
          <h2 className="text-left fs-3" >Projects</h2>
          <ul>
            <li><a href="https://www.honeycombtech.org/" target='_blank' rel='noreferrer'>Honeycomb Technology website</a></li>
            <li><a href="https://www.thechesswarriors.com/" target='_blank' rel='noreferrer'>The Chesswarriors</a></li>
          </ul>
        </section>
        <Contact />
        <Footer />

      </main>
    </div>
  );
}

export default App;
