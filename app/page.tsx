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
          <div className="hero-art-frame">
            <img
              className="hero-art"
              src="/hero-banner.png"
              alt=""
              width="1731"
              height="909"
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
              <p className="eyebrow">Security - Strategy - Technology</p>
              <p className="hero-intro">
                I enjoy solving complex technology problems with good people. My
                work spans IT, security, and the systems organizations depend on
                every day.
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

            <div className="hero-leadership">
              <div>
                <p className="location"><span aria-hidden="true" />Based in Cincinnati</p>
                <div className="arch-summary">
                  <p className="arch-kicker">Leadership at a glance</p>
                  <p>
                    I work across infrastructure, security, and team leadership. I
                    enjoy making complicated systems easier to understand and use.
                  </p>
                </div>
              </div>
              <div className="tenure-metric" aria-label="More than 10 years in technology">
                <strong>10+</strong>
                <span>years in technology</span>
              </div>
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

        <section className="lab-section" id="homelab">
          <div className="section wrap">
            <div className="section-heading lab-heading">
              <div>
                <p className="eyebrow">02 / Homelab</p>
                <h2>A private AI workshop, built from the network up.</h2>
              </div>
              <p className="section-lede">
                My homelab is where I get to tinker. It lets me follow an idea
                from the network and servers all the way to the software someone
                actually uses.
              </p>
            </div>

            <figure className="lab-map">
              <div className="lab-map-header">
                <div className="lab-map-title">
                  <span className="lab-map-mark" aria-hidden="true">BW</span>
                  <div>
                    <p>Benjamin&apos;s homelab</p>
                    <h3>Private AI systems map</h3>
                  </div>
                </div>
                <div className="lab-map-status">
                  <span aria-hidden="true" />
                  Local-first architecture
                </div>
              </div>

              <div className="lab-map-body">
                <aside className="lab-foundation" aria-label="Architecture principles">
                  <p className="map-label">Foundation</p>
                  <div className="foundation-list">
                    <div className="foundation-item">
                      <span className="map-icon" aria-hidden="true">01</span>
                      <div><strong>Secure edge</strong><small>Policy · routing · remote access</small></div>
                    </div>
                    <div className="foundation-item">
                      <span className="map-icon" aria-hidden="true">02</span>
                      <div><strong>Segmented core</strong><small>Purpose-built network paths</small></div>
                    </div>
                    <div className="foundation-item">
                      <span className="map-icon" aria-hidden="true">03</span>
                      <div><strong>Protected data</strong><small>Local storage · controlled access</small></div>
                    </div>
                  </div>
                  <div className="foundation-note">
                    <span aria-hidden="true">↳</span>
                    <p><strong>Design intent</strong>Keep services close, boundaries clear, and each experience focused.</p>
                  </div>
                </aside>

                <div className="lab-topology">
                  <section className="topology-zone access-zone" aria-labelledby="access-zone-title">
                    <div className="zone-heading">
                      <div>
                        <span className="zone-number">01</span>
                        <h4 id="access-zone-title">Access layer</h4>
                      </div>
                      <span className="zone-tag">Trusted</span>
                    </div>
                    <div className="access-path">
                      <div className="system-card compact-card">
                        <span className="system-glyph" aria-hidden="true">TD</span>
                        <div><strong>Trusted devices</strong><small>Prompts · apps · administration</small></div>
                      </div>
                      <span className="path-arrow" aria-hidden="true">→</span>
                      <div className="system-card compact-card">
                        <span className="system-glyph" aria-hidden="true">SE</span>
                        <div><strong>Secure network edge</strong><small>Identity · policy · encrypted access</small></div>
                      </div>
                    </div>
                  </section>

                  <section className="topology-zone platform-zone" aria-labelledby="platform-zone-title">
                    <div className="zone-heading">
                      <div>
                        <span className="zone-number">02</span>
                        <h4 id="platform-zone-title">Core platform</h4>
                      </div>
                      <span className="zone-tag">Isolated</span>
                    </div>
                    <div className="platform-grid">
                      <div className="system-card">
                        <span className="system-glyph" aria-hidden="true">NW</span>
                        <div><strong>Segmented network</strong><small>Managed wired + wireless paths</small></div>
                      </div>
                      <div className="system-card featured-card">
                        <span className="system-glyph" aria-hidden="true">GPU</span>
                        <div><strong>Accelerated compute</strong><small>Local inference · flexible workloads</small></div>
                      </div>
                      <div className="system-card">
                        <span className="system-glyph" aria-hidden="true">DB</span>
                        <div><strong>Protected storage</strong><small>Models · application data · backups</small></div>
                      </div>
                    </div>
                  </section>

                  <section className="topology-zone services-zone" aria-labelledby="services-zone-title">
                    <div className="zone-heading">
                      <div>
                        <span className="zone-number">03</span>
                        <h4 id="services-zone-title">Private AI services</h4>
                      </div>
                      <span className="zone-tag">Local</span>
                    </div>
                    <div className="services-path">
                      <div className="runtime-hub">
                        <span className="system-glyph" aria-hidden="true">AI</span>
                        <div><small>Private AI runtime</small><strong>Local model services</strong></div>
                      </div>
                      <span className="split-line" aria-hidden="true" />
                      <div className="assistant-grid">
                        <div className="assistant-card">
                          <span className="assistant-index">A</span>
                          <div><strong>Campaign assistant</strong><small>D&amp;D worldbuilding</small></div>
                        </div>
                        <div className="assistant-card">
                          <span className="assistant-index">B</span>
                          <div><strong>General assistant</strong><small>Everyday AI tasks</small></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <figcaption className="lab-map-footer">
                <div><span>01</span> Request enters from a trusted device</div>
                <div><span>02</span> Work stays inside segmented infrastructure</div>
                <div><span>03</span> The runtime selects the purpose-built assistant</div>
              </figcaption>
            </figure>

            <article className="project-feature">
              <div className="project-intro">
                <p className="eyebrow">Open-source project</p>
                <h3>Simple LMS</h3>
                <p>
                  I built Simple LMS for nonprofits that need to track required
                  training without paying for a large enterprise platform. It is
                  self-hosted, straightforward, and focused on the records an
                  auditor actually needs.
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
                <p className="eyebrow">04 / Credentials</p>
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
                  <article>
                    <span>In progress</span>
                    <h3>MS, Computer Science</h3>
                    <p>
                      Western Governors University · Artificial Intelligence &amp;
                      Machine Learning
                    </p>
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
