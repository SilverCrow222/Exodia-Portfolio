function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title fade-in">About Me</h2>
      <div className="about-content">
        <div className="about-img fade-in">
          <img src="PicsArt_03-07-10.07.05.jpg" alt="Mohamed Salah" />
        </div>
        <div className="about-text">
          <h3 className="fade-in">Passionate Frontend Developer</h3>
          <p className="fade-in">
            I'm a frontend developer with a passion for creating beautiful,
            functional, and user-friendly websites. With 5+ years of experience
            in web development, I specialize in building responsive web
            applications using modern technologies.
          </p>
          <p className="fade-in">
            My approach combines technical expertise with an eye for design to
            deliver exceptional user experiences. I'm constantly learning and
            staying up-to-date with the latest web technologies and best
            practices.
          </p>
          <div className="skills fade-in">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">UI/UX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
