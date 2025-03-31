import './Section.css';

function Section({ children }) {
  return (
    <div className="Section">
      <section className="custom-section">
        {children}
      </section>
    </div>
  );
}

export default Section;