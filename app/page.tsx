import Image from "next/image";

const roles = [
  {
    company: "Divisions Maintenance Group",
    title: "Head of Information Security",
    dates: "2025 - Present",
  },
  {
    company: "Slope",
    title: "IT & Security Manager",
    dates: "2023 - 2025",
  },
  {
    company: "Arturo",
    title: "IT Operations & Security Manager",
    dates: "2021 - 2023",
  },
];

const credentials = [
  "CISM",
  "SecurityX",
  "CySA+",
  "CCSP",
  "SSCP",
  "Security+",
  "Project+",
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav wrap" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Benjamin Ward, home">
            <span className="monogram" aria-hidden="true">
              <span>BW</span>
            </span>
            <span>Benjamin Ward</span>
          </a>
          <div className="nav-links">
            <a href="#leadership">Leadership</a>
            <a href="#community">Community</a>
            <a href="#credentials">Credentials</a>
            <a
              className="nav-contact"
              href="https://www.linkedin.com/in/benjamin-ward/"
              target="_blank"
              rel="noreferrer"
            >
              Let&apos;s connect
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-art-frame">
            <Image
              className="hero-art"
              src="/hero-banner.png"
              alt=""
              width="1731"
              height="909"
              priority
              unoptimized
            />
            <h1 className="visually-hidden" id="hero-title">
              Benjamin Ward. Technology leader. Security strategist.
            </h1>
          </div>

          <div
            className="hero-overview-card"
            aria-label="Introduction and leadership overview"
          >
            <div className="hero-copy">
              <div className="hero-meta">
                <p className="eyebrow">Security - Strategy - Technology</p>
                <p className="location">
                  <span aria-hidden="true" />Based in Cincinnati
                </p>
              </div>
              <p className="hero-intro">
                I enjoy solving complex technology problems with good people. My
                work spans IT, security, infrastructure, and team leadership,
                with a focus on making complicated systems easier to understand
                and use.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#leadership">
                  Explore my work <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="/Benjamin-Ward-Resume-2026.pdf">
                  View résumé
                </a>
              </div>
            </div>

            <div className="tenure-metric" aria-label="More than 13 years in technology">
              <strong>13+</strong>
              <span>years in technology</span>
            </div>
          </div>
        </section>

        <section className="section wrap" id="leadership">
          <div className="section-heading leadership-heading">
            <div>
              <p className="eyebrow">01 / Leadership</p>
              <h2>Technology works better when people understand it.</h2>
            </div>
          </div>

          <div className="journey" aria-label="Recent leadership experience">
            <p className="journey-label">Recent leadership journey</p>
            <div className="journey-list">
              {roles.map((role) => (
                <article className="journey-item" key={role.company}>
                  <span className="journey-dot" aria-hidden="true" />
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.company}</p>
                  </div>
                  <time>{role.dates}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section wrap" id="community">
          <div className="community-card">
            <div className="community-title">
              <p className="eyebrow">02 / Community work</p>
              <h2>Good technology should not depend on a big budget.</h2>
            </div>
            <div className="community-copy">
              <p className="stratit-name">StratIT Solutions</p>
              <p>
                I started StratIT Solutions because fire departments and
                nonprofits deserve dependable IT and security help, even when
                they do not have a large budget. The goal is simple: give local
                organizations practical support they can afford.
              </p>
              <ul>
                <li>Managed IT and practical cybersecurity</li>
                <li>Cloud, endpoint, backup, and identity support</li>
                <li>Risk reviews, incident readiness, and vCISO guidance</li>
              </ul>
              <a
                className="button button-outline"
                href="https://stratitsolutions.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit StratIT Solutions <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="credentials-section" id="credentials">
          <div className="section wrap">
            <div className="section-heading credentials-heading">
              <div>
                <p className="eyebrow">03 / Credentials</p>
                <h2>Always learning. Always raising the standard.</h2>
              </div>
              <p className="section-lede">
                I genuinely enjoy learning. Each degree and certification gives
                me another way to look at a problem, ask better questions, and
                help a team make a sound decision.
              </p>
            </div>

            <div className="credentials-columns">
              <div className="credential-column">
                <p className="column-label">Education</p>
                <div className="education-list">
                  <article>
                    <span>Completed · 2025</span>
                    <h3>MS, Cybersecurity &amp; Information Assurance</h3>
                    <p>Western Governors University</p>
                  </article>
                  <article>
                    <span>Completed</span>
                    <h3>BS, Cybersecurity &amp; Information Assurance</h3>
                    <p>Western Governors University</p>
                  </article>
                </div>
              </div>

              <div className="credential-column certification-column">
                <p className="column-label">Industry certifications</p>
                <div className="cert-list">
                  {credentials.map((credential) => (
                    <span key={credential}>{credential}</span>
                  ))}
                  <span className="cert-progress">CISSP <small>In progress</small></span>
                </div>
                <a
                  className="text-link dark-link"
                  href="https://www.credly.com/users/benjamin-ward"
                  target="_blank"
                  rel="noreferrer"
                >
                  View verified credentials ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">04 / Reach out</p>
              <h2>Good work starts with a thoughtful conversation.</h2>
            </div>
            <div className="contact-copy">
              <p>
                If you&apos;d like to talk about technology, security, leadership,
                or an interesting problem, feel free to reach out. I&apos;m always
                happy to have a good conversation.
              </p>
              <a className="button button-primary" href="mailto:benjamin@benjamin-ward.com">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <div className="social-links" aria-label="Professional links">
                <a href="https://www.linkedin.com/in/benjamin-ward/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://github.com/BenjaminWard-Python" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="/Benjamin-Ward-Resume-2026.pdf">Résumé ↓</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© 2026 Benjamin Ward</span>
          <span>Cincinnati, Ohio</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
