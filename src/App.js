import React from 'react';
import Logo from './components/Logo';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';
import { WhiteSection, LightSection, MediumDarkSection, DarkSection, DarkGradientSection, Footer } from './components/Sections'
import { TwoColumnGrid, PrimaryCell, SecondaryCell } from './components/Grids'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav-container container">
        <a aria-current="page" aria-label="Home" href="/">
          <Logo></Logo>
        </a>
        <nav>
          <a href="/products"><TertiaryButton>Products</TertiaryButton></a>
          <a href="/products"><TertiaryButton>Pricing</TertiaryButton></a>
          <a href="/products"><TertiaryButton>Company</TertiaryButton></a>
          <a href="/products"><TertiaryButton>Carreers</TertiaryButton></a>
          <a href="/products"><SecondaryButton>Products</SecondaryButton></a>
          <a href="/products">
            <PrimaryButton>
              Get Started
            </PrimaryButton>
          </a>
        </nav>
      </header>
      <LightSection>
        <div className="container flex-container">
          <article className="content">
            <h1>BUILD AN ARMY OF ROBOTS TODAY.</h1>
            <h2 className="sub-headline">Software Robots</h2>
            <p>A Software robot can automate any task that a human could do and also go beyond that.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </article>
          <aside className="image-aside aside-right"><img src="./images/hero_1.jpg" /></aside>
        </div>
      </LightSection>
      <WhiteSection>
        <div className="container flex-container">
          <aside className="image-aside aside-left"><img src="/images/for_developers.png"/></aside>
          <article className="content">
            <h2>Frictionless tools that are built for developers</h2>
            <p>Our tools are built to support your development workflows, however you wish to use them.</p>
          </article>
        </div>
      </WhiteSection>
      <LightSection>
        <div className="container flex-container">
          <article className="content">
            <h2>Open for sharing and collaboration</h2>
            <p>Leveraging Robot Framework, Python, VSCode, and the Jupyter ecosystems. Code is best when shared together.</p>
          </article>
          <aside className="image-aside aside-right"><img src="/images/brain_1.jpg"/></aside>
        </div>
      </LightSection>
      <WhiteSection>
        <div className="container flex-container">
          <aside className="image-aside aside-left"><img src="/images/fast_easy.png"/></aside>
          <article className="content">
            <h2>Fast and easy to deploy</h2>
            <p>When you’ve built your software robot, Robocloud will enable you to deploy it in the real world in minutes.</p>
          </article>
        </div>
      </WhiteSection>
      <DarkGradientSection
        id="learn-build-run"
      >
        <div className="secondary-container">
          <h2>Start Your Software Robot Developer Journey</h2>
          <TwoColumnGrid>
            <PrimaryCell className="span-two-column flex-container items-space-between">
              <img src="./images/robocorp_monkey_icon.svg" alt=""/>
              <div>
                <h3>Learn in Robocode</h3>
                <p>Learning space and community for software robot developers.</p>
              </div>
              <SecondaryButton>Get Started</SecondaryButton>
            </PrimaryCell>
            <SecondaryCell className="flex-container flex-items-top">
              <img src="./images/robocode_lab.svg" className="cell-icon" alt="robocode lab"/>
              <div className="cell-content">
                <h4>Build With Robocode</h4>
                <p>Open-source developer tools for building software robots.</p>
                <SecondaryButton>Download Robocloud Lab</SecondaryButton>
              </div>
            </SecondaryCell>
            <SecondaryCell className="flex-container flex-items-top">
              <img src="./images/robocloud.svg" className="cell-icon" alt="robocloud"/>
              <div className="cell-content">
                <h4>Run in Robocloud</h4>
                <p>Operate and run software robots anywhere with minium setup.</p>
                <SecondaryButton>Create Account</SecondaryButton>
              </div>
            </SecondaryCell>
          </TwoColumnGrid>
        </div>
      </DarkGradientSection>
      <Footer id="footer">
        <div class="container grid-container">
          <p>Robocorp Technologies, Inc.<br /><a href="https://goo.gl/maps/5qin1dYNqCq" target="_blank" rel="noreferrer">San Francisco</a></p>
          <p>Robocorp Oy<br /><a href="https://goo.gl/maps/Jew1nimBCavkk7Dt7" target="_blank" rel="noreferrer">Helsinki</a></p>
          <p>Contact<br /><a href="mailto:info@robocorp.com">info@robocorp.com</a></p>
          <p>Copyright ©2020 Robocorp<br/> All rights reserved</p>
        </div>
      </Footer>
    </div>
  );
}

export default App;
