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

          <aside className="aspiration-card" aria-label="Target leadership roles">
            <p className="location"><span aria-hidden="true" />Based in Cincinnati</p>
            <div className="role-stack">
              <span>Director of Information Technology</span>
              <span>Director of Information Security</span>
              <span>Director of Technology</span>
            </div>
            <div className="availability">
              <span>Ready for what&apos;s next</span>
              <span>2026</span>
            </div>
          </aside>
        </section>

        <section className="metrics wrap" aria-label="Career impact">
          <div className="metric">
            <strong>10+</strong>
            <span>years in technology</span>
          </div>
          <div className="metric">
            <strong>1,200</strong>
            <span>employees supported</span>
          </div>
          <div className="metric">
            <strong>$440K</strong>
            <span>annual savings delivered</span>
          </div>
          <div className="metric">
            <strong>60%</strong>
            <span>faster incident response</span>
          </div>
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

          <div className="leadership-grid">
            <article className="lead-card lead-card-featured">
              <span className="card-number">01</span>
              <h3>Strategy that ships</h3>
              <p>
                Roadmaps, budgets, governance, and operating models that turn
                business priorities into durable execution.
              </p>
            </article>
            <article className="lead-card">
              <span className="card-number">02</span>
              <h3>Security made practical</h3>
              <p>
                Defense-in-depth, incident response, and compliance programs
                shaped for real teams—not shelfware.
              </p>
            </article>
            <article className="lead-card">
              <span className="card-number">03</span>
              <h3>Teams built to scale</h3>
              <p>
                Clear ownership, strong partnerships, and systems that help
                talented people do their best work.
              </p>
            </article>
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

            <div className="lab-overview">
              <div className="hardware-list" aria-label="Homelab hardware">
                <div className="hardware-row">
                  <span>Network core</span>
                  <strong>UniFi Dream Machine Pro</strong>
                </div>
                <div className="hardware-row">
                  <span>Switching</span>
                  <strong>USW Pro HD 24 PoE</strong>
                </div>
                <div className="hardware-row">
                  <span>Wireless</span>
                  <strong>2× U7 Pro XG</strong>
                </div>
                <div className="hardware-row">
                  <span>Compute</span>
                  <strong>Threadripper 1950X · 128GB RAM</strong>
                </div>
                <div className="hardware-row">
                  <span>Acceleration</span>
                  <strong>RTX 3060 12GB · GTX 1660 Ti 6GB</strong>
                </div>
                <div className="hardware-row">
                  <span>Storage</span>
                  <strong>6TB</strong>
                </div>
              </div>

              <div className="flow-panel">
                <div className="flow-title">
                  <span>Current data flow</span>
                  <span className="local-badge">Local-first</span>
                </div>
                <div
                  className="network-flow"
                  role="img"
                  aria-label="Traffic moves from client devices through the UniFi gateway and switch to the private inference server, which routes requests to either a Dungeons and Dragons assistant or a general-purpose local model."
                >
                  <div className="flow-node">
                    <small>01</small>
                    <strong>Client</strong>
                    <span>Prompt or request</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-node">
                    <small>02</small>
                    <strong>UniFi core</strong>
                    <span>Gateway + switching</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="flow-node flow-node-emphasis">
                    <small>03</small>
                    <strong>AI server</strong>
                    <span>Private inference</span>
                  </div>
                  <span className="flow-arrow" aria-hidden="true">→</span>
                  <div className="model-stack">
                    <div><strong>Campaign model</strong><span>D&amp;D worldbuilding</span></div>
                    <div><strong>General model</strong><span>Daily AI assistant</span></div>
                  </div>
                </div>
                <p className="flow-note">
                  Two purpose-built local LLM experiences share one carefully
                  managed compute platform: one helps run an ongoing D&amp;D
                  campaign; the other replaces costly general-purpose AI tools.
                </p>
              </div>
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

            <div className="next-builds">
              <div>
                <p className="eyebrow">Next in the lab</p>
                <h3>Experiments that deepen the leadership story.</h3>
              </div>
              <ol>
                <li><span>01</span><p><strong>Unified observability</strong>Centralize infrastructure, application, and security telemetry with service-level dashboards.</p></li>
                <li><span>02</span><p><strong>Zero-trust segmentation</strong>Document identity-aware access, VLAN boundaries, and tested recovery paths.</p></li>
                <li><span>03</span><p><strong>Local AI operations</strong>Add model evaluation, usage visibility, retrieval, and repeatable deployment workflows.</p></li>
              </ol>
            </div>
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
                cybersecurity support to local fire departments and nonprofits—
                organizations often overlooked by large service providers, but
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

            <div className="education-grid">
              <article>
                <span>Completed</span>
                <h3>MS, Cybersecurity &amp; Information Assurance</h3>
                <p>Western Governors University · 2025</p>
              </article>
              <article>
                <span>Completed</span>
                <h3>BS, Cybersecurity &amp; Information Assurance</h3>
                <p>Western Governors University</p>
              </article>
              <article className="education-current">
                <span>In progress</span>
                <h3>MS, Computer Science</h3>
                <p>Artificial Intelligence &amp; Machine Learning</p>
              </article>
            </div>

            <div className="certification-row">
              <div>
                <p className="eyebrow">Industry certifications</p>
                <div className="cert-list">
                  {credentials.map((credential) => (
                    <span key={credential}>{credential}</span>
                  ))}
                  <span className="cert-progress">CISSP · In progress</span>
                </div>
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
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">05 / What&apos;s next</p>
              <h2>Let&apos;s build resilient technology—and the teams behind it.</h2>
            </div>
            <div className="contact-copy">
              <p>
                I&apos;m exploring director-level opportunities across information
                technology, information security, and technology leadership.
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
