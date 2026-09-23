import { services } from "../data/home";

export function Services() {
  return (
    <section className="services-band" id="services">
      <div className="section-wrap">
        <div className="section-heading">
          <div><p className="eyebrow blue">Designed around you</p><h2>Our services</h2></div>
          <p>Everything you need to go further, all in one place.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, text]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}