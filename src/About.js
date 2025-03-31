
import logo from './aboutIMG.png';
function About() {
  return (
    <div id="about" className="About">
      <section>
        <h1>About</h1>
        <p>I am ombama
        </p>
      </section>
      <img src={logo} className="IMG" alt="img" />
    </div>
  );
}

export default About;