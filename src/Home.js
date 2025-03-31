
import logo from './homeIMG.png';
function Home() {
  return (
    <div id="home" className="Home">
      <section>
        <h1>Home</h1>
        <p>The whitehouse is our real home
        </p>
      </section>
      <img src={logo} className="IMG" alt="img" />
    </div>
  );
}

export default Home;