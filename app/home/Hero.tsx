export function Hero() {
  return (
    <section className="hero" aria-label="Travel destinations">
      <div className="hero-copy">
        <p className="eyebrow">Travel beyond expectations</p>
        <h1>Make the world<br /><em>your destination.</em></h1>
        <p className="hero-text">Curated journeys, thoughtful service, and a world of possibilities waiting for you.</p>
        <a className="primary-button" href="#services">Explore our journeys <span>→</span></a>
      </div>
      <div className="hero-dots" aria-hidden="true"><span className="selected" /><span /><span /></div>
    </section>
  );
}