import React from "react"
import Img from 'gatsby-image';

// Components
import Layout from '../components/Layout';
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from '../components/skills/Skills';
import Tools from "../components/tools/Tools";
import Applications from "../components/applications/Applications";
import Contact from '../components/contact/Contact';

const Home = () => (
  <Layout>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Tools />
    <Applications />
    <Contact />
  </Layout>
);

export default Home;
