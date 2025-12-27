import Navbar from './Navbar';
import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* --- HERO SECTION --- */}
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
            Currently focusing on [Topic 1, e.g., Full Stack Web Dev] and [Topic 2, e.g., System Architecture].
          </p>
          <br />
          <h3>Tech Stack</h3>
          <div className="skills-grid">
            {/* Edit these to match your skills */}
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="content-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <h3>Project Name 1</h3>
            <p className="project-desc">A brief description of what this project does. Maybe it's a web app that tracks fitness or a Python script that automates tasks.</p>
            <div className="project-links">
              <a href="#">View Code</a>
              <a href="#">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Project Name 2</h3>
            <p className="project-desc">Description of your second project. Keep it short and punchy.</p>
            <div className="project-links">
              <a href="#">View Code</a>
            </div>
          </div>

           {/* Project 3 */}
           <div className="project-card">
            <h3>Project Name 3</h3>
            <p className="project-desc">Description of your third project. Highlight the tech stack used here.</p>
            <div className="project-links">
              <a href="#">View Code</a>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="content-section footer-section">
        <div className="card text-center">
          <h2><a href = "https://www.linkedin.com/in/kamveer-grewal/" className="cta-button">Let's Connect!</a></h2>
          <p>I'm currently looking for internship opportunities.</p>
          <a href="mailto:kamveerg@gmail.com" className="email-link">kamveerg@gmail.com</a>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kamveer-grewal/">LinkedIn</a>
            <a href="https://github.com/KamveerGrewal?tab=repositories">GitHub</a>
            <a href="#">Resume</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;