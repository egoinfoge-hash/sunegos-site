'use client';
import React from 'react';

const logos = [
  'Acme', 'Nimbus', 'Voxel', 'Helios', 'Orbit', 'Pulse', 'Magma', 'Zenith'
];

const projects = [
  { t: 'E-commerce Sprint', tag: 'Website', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Fintech Dashboard', tag: 'Web App', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Brand Motion', tag: 'Branding', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Mobile UI Kit', tag: 'Mobile', img: 'https://images.unsplash.com/photo-1557264322-82f8d026de7a?q=80&w=1600&auto=format&fit=crop' },
];

const features = [
  { t: 'Design-first', d: 'შეუფერხებელი UI, მკვეთრი ტიპოგრაფია, თხელი ბალანსი.' },
  { t: 'Next.js Power', d: 'SSR/SSG, სწრაფი ლოდინგი, edge-ზე გაშვება.' },
  { t: 'SEO/Analytics', d: 'სუფთა სტრუქტურა, შესრულება, გაზომვადი შედეგი.' },
  { t: 'Scale-ready', d: 'კოდის არქიტექტურა, რომელიც იზრდება ბიზნესთან ერთად.' },
];

export default function Page() {
  return (
    <main>

      {/* NAV */}
      <header className="nav">
        <div className="nav__inner">
          <div className="logo">Sunegos</div>
          <nav className="links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className="btn" href="#contact">Let’s talk</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__wrap">
          <h1 className="hero__title">
            Bold web experiences<br/>that look <span>premium</span> and feel <span>fast</span>.
          </h1>
          <p className="hero__sub">
            Websites, web & mobile apps, performance ads და მუდმივი IT მხარდაჭერა — ერთ გუნდში.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="mailto:Sunegospl@gmail.com">Start a project</a>
            <a className="btn btn--ghost" href="#work">See work</a>
          </div>
        </div>
      </section>

      {/* MARQUEE (clients) */}
      <section className="marquee" aria-label="Partners">
        <div className="marquee__track">
          {[...logos, ...logos].map((l, i) => (
            <span className="marquee__item" key={i}>{l}</span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="services" className="section">
        <div className="section__head">
          <h2>What we do</h2>
          <p>Web • Apps • Ads • IT — premium craft, measurable outcomes.</p>
        </div>
        <div className="grid grid--four">
          {features.map(f => (
            <div key={f.t} className="card">
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section">
        <div className="section__head">
          <h2>Selected work</h2>
          <p>ბოლო სპრინტები, რომლებიც შედეგზეა ორიენტირებული.</p>
        </div>
        <div className="grid grid--two">
          {projects.map((p, i) => (
            <article key={i} className="work">
              <div className="work__thumb" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="work__body">
                <span className="tag">{p.tag}</span>
                <h3>{p.t}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STRIPE (about) */}
      <section id="about" className="stripe">
        <div className="stripe__inner">
          <h3>We blend aesthetics with performance.</h3>
          <p>
            სწრაფი ფრონტი, მკვრივი ვიზუალი, ნათელი მესიჯი — Sunegos ქმნის საცხოვრებელს,
            სადაც ბრენდი რეალურად იყიდება. დავიწყოთ ერთი ზარით?
          </p>
          <a className="btn btn--primary" href="#contact">Book a call</a>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="quote">
          <p>“Sunegos-მა ჩვენს ლენდინგს 2 კვირაში 38%-ით აუწია კონვერსია — დიზაინმა და სიჩქარემ ერთად იმუშავა.”</p>
          <span>— Marta K., Growth Lead</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Let’s build.</h2>
        <p>მოგვწერე ერთი სიტყვა — დაგიბრუნდებით მიწერით იგივე დღეს.</p>
        <div className="contact__cards">
          <a className="card card--link" href="mailto:Sunegospl@gmail.com">
            <strong>Email</strong>
            <span>Sunegospl@gmail.com</span>
          </a>
          <a className="card card--link" href="tel:+48739237886">
            <strong>Phone (PL)</strong>
            <span>+48 739 237 886</span>
          </a>
          <div className="card">
            <strong>Address</strong>
            <span>Iwicka 42, Warszawa</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Sunegos</div>
        <div>Design • Development • Ads • IT</div>
      </footer>
    </main>
  );
}
