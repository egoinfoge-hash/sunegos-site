"use client";

export default function Home() {
  return (
    <main className="hero">
      {/* ბლურებული ნათება ზურგში */}
      <div className="aura" />
      {/* subtle ხაზოვანი შუქი */}
      <div className="shine" aria-hidden />

      <section className="container">
        <div className="badge">Official</div>

        <h1 className="title">
          Sunegos
          <span className="glow" />
        </h1>

        <p className="subtitle">
          Next.js-ზე აგებული სწრაფი და ელეგანტური საიტი —
          <span className="accent"> დიზაინი, სისწრაფე და ანიმაციები</span>.
        </p>

        <div className="cta">
          <a className="btn primary" href="mailto:sandro.sandro78@yahoo.com">
            Contact
          </a>
          <a className="btn ghost" href="#work">
            View Work
          </a>
        </div>

        {/* დეკორატიული ნაპერწკლები */}
        <div className="sparks" aria-hidden />
      </section>
    </main>
  );
}
