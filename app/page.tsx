const roles = [
  {
    company: "Divisions Maintenance Group",
    title: "Senior Manager of Infrastructure & Security",
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
            <a href="#homelab">Homelab</a>
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
          <div className="hero-copy">
            <p className="eyebrow">Technology · Security · Cincinnati</p>
            <h1 id="hero-title">
              Technology leader.
              <br />
              Security strategist.
              <br />
              <em>Builder.</em>
            </h1>
            <p className="hero-intro">
              I align resilient systems, strong teams, and pragmatic security
              to move organizations forward—from enterprise IT operations to
              community-first technology.
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

          <aside className="aspiration-card" aria-label="Leadership impact summary">
            <p className="location"><span aria-hidden="true" />Based in Cincinnati</p>
            <div className="arch-summary">
              <p className="arch-kicker">Leadership at a glance</p>
              <p>
                I lead across infrastructure, cybersecurity, governance, and
                organizational growth—pairing enterprise scale with hands-on depth.
              </p>
            </div>
            <div className="arch-metrics" aria-label="Career impact">
              <div><strong>10+</strong><span>years in technology</span></div>
              <div><strong>1,200</strong><span>employees supported</span></div>
              <div><strong>$440K</strong><span>annual savings</span></div>
              <div><strong>60%</strong><span>faster response</span></div>
            </div>
          </aside>
        </section>

        <section className="section wrap" id="leadership">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Leadership</p>
              <h2>Clarity at the intersection of people and systems.</h2>
            </div>
            <p className="section-lede">
              My leadership practice pairs executive-level judgment with the
              curiosity of a hands-on technologist. I build teams people trust,
              security programs leaders understand, and technology strategies
              that earn their investment.
            </p>
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

        <section className="lab-section" id="homelab">
          <div className="section wrap">
            <div className="section-heading lab-heading">
              <div>
                <p className="eyebrow">02 / Homelab</p>
                <h2>A private AI workshop, built from the network up.</h2>
              </div>
              <p className="section-lede">
                My lab is where infrastructure, security, software, and AI meet.
                It gives me a place to test ideas at full depth—from packet flow
                to user experience—before turning them into better decisions at
                work.
              </p>
            </div>

            <div className="flow-panel">
              <div className="flow-title">
                <span>Infrastructure &amp; data flow</span>
                <span className="local-badge">Local-first</span>
              </div>
              <div
                className="architecture-flow"
                role="img"
                aria-label="Trusted devices send requests through a secured network edge and segmented core to local compute and storage. A private AI runtime then routes prompts to either a campaign assistant or a general-purpose assistant."
              >
                <div className="architecture-path">
                  <div className="flow-node">
                    <small>People</small>
                    <strong>Trusted devices</strong>
                    <span>Prompts · apps · administration</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-node">
                    <small>Boundary</small>
                    <strong>Secure network edge</strong>
                    <span>Policy · routing · remote access</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-node">
                    <small>Core</small>
                    <strong>Segmented network</strong>
                    <span>Managed wired + wireless paths</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-node flow-node-emphasis">
                    <small>Platform</small>
                    <strong>Compute + storage</strong>
                    <span>GPU acceleration · protected data</span>
                  </div>
                </div>
                <div className="service-flow">
                  <span className="branch-arrow" aria-hidden="true">↓</span>
                  <div className="runtime-node">
                    <small>Private AI runtime</small>
                    <strong>Local model services</strong>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="model-stack">
                    <div><strong>Campaign assistant</strong><span>D&amp;D worldbuilding</span></div>
                    <div><strong>General assistant</strong><span>Everyday AI tasks</span></div>
                  </div>
                </div>
              </div>
              <p className="flow-note">
                Requests stay on a controlled path from trusted devices to local
                inference, where each model has a distinct purpose and experience.
              </p>
            </div>

            <article className="project-feature">
              <div className="project-intro">
                <p className="eyebrow">Open-source project</p>
                <h3>Simple LMS</h3>
                <p>
                  A self-hosted SCORM learning platform for nonprofits that need
                  defensible training records without enterprise per-seat costs
                  or unnecessary complexity.
                </p>
                <a
                  className="project-link"
                  href="https://github.com/BenjaminWard-Python/simple-lms"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the repository <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="project-details">
                <div><span>Runtime</span><strong>SCORM 1.2</strong></div>
                <div><span>Stack</span><strong>TypeScript · Node · SQLite</strong></div>
                <div><span>Design</span><strong>Multi-tenant · Audit-ready</strong></div>
                <div><span>License</span><strong>MIT · Self-hosted</strong></div>
              </div>
            </article>

          </div>
        </section>

        <section className="section wrap" id="community">
          <div className="community-card">
            <div className="community-title">
              <p className="eyebrow">03 / Community work</p>
              <h2>Good technology should not depend on a big budget.</h2>
            </div>
            <div className="community-copy">
              <p className="stratit-name">StratIT Solutions</p>
              <p>
                I founded StratIT Solutions to provide affordable IT and
                cybersecurity support to local fire departments and nonprofits—organizations
                often overlooked by large service providers, but
                no less deserving of reliable, secure technology.
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
                <p className="eyebrow">04 / Credentials</p>
                <h2>Always learning. Always raising the standard.</h2>
              </div>
              <p className="section-lede">
                Formal study and industry credentials support the work—but the
                real value is translating that knowledge into safer systems,
                stronger teams, and sound executive decisions.
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
                  <article>
                    <span>In progress</span>
                    <h3>MS, Computer Science</h3>
                    <p>Artificial Intelligence &amp; Machine Learning</p>
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
              <p className="eyebrow">05 / Reach out</p>
              <h2>Good work starts with a thoughtful conversation.</h2>
            </div>
            <div className="contact-copy">
              <p>
                If you&apos;d like to talk about technology, security, leadership,
                or a problem worth solving, I&apos;d be glad to hear from you.
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
