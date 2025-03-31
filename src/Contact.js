import logo from './contactIMG.png';
function Contact() {
  return (
    <div id="contact" className="Contact">
      <section>
        <h1>Contact</h1>
        <p>Call the whitehouse now for your first pizza pringles FREE!
        </p>
      </section>
      <img src={logo} className="IMG" alt="img" />
    </div>
  );
}

export default Contact;