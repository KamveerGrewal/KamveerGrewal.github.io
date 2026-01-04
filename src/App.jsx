import Navbar from './Navbar';
import './App.css';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="hero-section">
        <div className="hero-content">
          <Typewriter
  options={{
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter
      .typeString("Hello, I'm Kamveer Grewal.")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Based in Mississauga, ON; Open for Summer 2026 Internships")
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
/>
          <p>Computer Science Student at University of Toronto</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="content-section">
        <div className="card">
          <h2>About Me</h2>
          <p>
            I am a second-year student passionate about software development and solving complex problems. 
            Currently focusing on data analyst roles and building projects.
          </p>
          <br />
          <h3>Tech Stack</h3>
          <div className="skills-grid">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Excel</span>
            <span className="skill-tag">Powerpoint</span>
            <span className="skill-tag">Tableau</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Scrum</span>
            <span className="skill-tag">RISC-V Assembly</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <h3>Credit Card Recommender</h3>
            <p className="project-desc">Built a Python-based decision tool that analyzes user spending habits to recommend optimal credit products based on rewards structures and fees.</p>
            <div className="project-links">
              <a href="https://github.com/KamveerGrewal/CreditCardRecommendation/tree/main">View Code</a>
    
            </div>
          </div>

           <div className="project-card">
            <h3>RISC-V Assembly Game</h3>
            <p className="project-desc">Engineered complex logic algorithms for collision detection and object tracking.</p>
            <div className="project-links">
              <a href="https://github.com/KamveerGrewal/Fighting-my-Demons">View Code</a>
            </div>

          </div>
          <div className="project-card">
            <h3>Interactive Java GUI Application</h3>
            <p className="project-desc">Engineered a modular Java application within a Scrum team of 5, delivering a fully functional product ahead of schedule.</p>
            <div className="project-links">
              <a href="#"></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-section footer-section">
        <div className="card text-center">
          <h2><a href = "https://www.linkedin.com/in/kamveer-grewal/" className="cta-button">Let's Connect!</a></h2>
          <p>I'm currently looking for internship opportunities.</p>
          <a href="mailto:kamveerg@gmail.com" className="email-link">kamveerg@gmail.com</a>
          
          <div className="social-links">

            <a href="https://www.linkedin.com/in/kamveer-grewal/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/KamveerGrewal" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a 
              href="/KamveerGrewal2026.pdf" 
              download="KamveerGrewal2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Resume"
            >
            <FaFileAlt />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;