import React , { Component, Fragment } from 'react';
import styled from 'styled-components';
import FormComponent from'./components/FormComponent';

styled.div
class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    render()
    {
       return ( 

<Fragment>
        
<div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div className="site-mobile-menu-body"></div>
  </div>

  <nav className="site-nav js-site-navbar mb-5 site-navbar-target">
    <div className="container">



      <div className="site-navigation text-center">

        <a href="index.html" className="d-block text-center float-left logo">JA</a>


        <ul className="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
          <li className="active"><a href="#home-section" className="nav-link">Home</a></li>
          <li className="has-children">
            <a href="#" className="nav-link">Dropdown</a>
            <ul className="dropdown">
              <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
              <li className="has-children">
                <a href="#">Menu Two</a>
                <ul className="dropdown">
                  <li><a href="#" className="nav-link">Sub Menu One</a></li>
                  <li><a href="#" className="nav-link">Sub Menu Two</a></li>
                  <li><a href="#" className="nav-link">Sub Menu Three</a></li>
                </ul>
              </li>
              <li><a href="#" className="nav-link">Menu Three</a></li>
            </ul>
          </li>
          <li><a href="#about-section" className="nav-link">About</a></li>
          <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
          <li><a href="#services-section" className="nav-link">Services</a></li>
          <li><a href="#resume-section" className="nav-link">Resume</a></li>
          <li><a href="#blog-section" className="nav-link">Blog</a></li>
          <li><a href="#contact-section" className="nav-link">Contact</a></li>
        </ul>

        <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none" data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>

      </div>
    </div>
  </nav>


  <div className="site-blocks-cover overlay" style={{backgroundImage : "url(images/hero_img.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5" id="home-section">
    <div className="container">
      <div className="row align-items-center justify-content-center text-center">

        <div className="col-lg-8">
          <h1 className="text-white" data-aos="fade-up" data-aos-delay="0">I'm James Anderson <br/> A Front-end Developer</h1>
          <p data-aos="fade-up" data-aos-delay="100">A new work from the fine folks at <a href="https://untree.co/" className="font-weight-bold" target="_blank">Untree.co</a></p>
        </div>
      </div>
    </div>
  </div>  
  
  <section className="site-section" id="about-section">
    <div className="container">
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
          <div className="img-wrap">
            <img src="images/image_1_long.jpg" alt="Image placeholder" className="img-fluid"/>
          </div>
          
        </div>
        <div className="col-lg-5 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
          <div className="section-heading">
            <h2>My Bio</h2>
          </div>
          
          <p>Far far away, behind <span className="highlight">the word mountains</span>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


          <div className="my-5">
            <div className="skill">
              <h3>Design</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  <span>85%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>HTML5</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                  <span>98%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>CSS3</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "97%"}} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                  <span>97%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>WordPress</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "88%"}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                  <span>88%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>Bootstrap</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "92%"}} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>

          <p>
            <a href="#contact-section" className="btn btn-primary smoothscroll">Hire Me</a>
            <a href="#" className="btn btn-secondary">Download CV</a>
          </p>
        </div>
      </div>

      
    </div>
  </section>



    </Fragment>   
    )
    }
}

export default App;