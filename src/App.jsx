import './App.css'

const navigation = ['Home', 'Features', 'About', 'Pricing']

const stats = [
  { value: '12.8K', label: 'Active users' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '98%', label: 'Customer satisfaction' },
]

const features = [
  {
    icon: '✦',
    title: 'Clean Design',
    text: 'Memiliki visual yang rapi, modern, dan mudah dibaca untuk pengalaman yang lebih fokus.',
  },
  {
    icon: '◈',
    title: 'Dark Glassmorphism',
    text: 'Tampilan glassmorphism dengan warna gelap, transparansi, blur, dan aksen biru yang elegan.',
  },
  {
    icon: '⚡',
    title: 'Lightweight',
    text: 'Struktur layout ringan dan mudah dikembangkan tanpa kebutuhan library tambahan.',
  },
]

function App() {
  return (
    <div className="page-shell">

      {/* Background decoration */}
      <div className="background-blur blur-one" />
      <div className="background-blur blur-two" />
      <div className="background-grid" />

      {/* ================= HEADER ================= */}

      <header className="topbar glass-panel">

        <div className="brand">
          <div className="brand-mark">
            W
          </div>

          <div className="brand-text">
            <span className="brand-name">
              JERXXZ
            </span>

            <span className="brand-subtitle">
              DIGITAL EXPERIENCE
            </span>
          </div>
        </div>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-cta"
        >
          Get Started
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="content">

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-copy">

            <p className="eyebrow">
              Modern digital experience
            </p>

            <h1>
              Simplicity
              <span>
                {' '}meets
              </span>
              <br />
              <strong>
                elegance.
              </strong>
            </h1>

            <p className="lead">
              Template website dengan konsep
              dark glassmorphism, dominan hitam,
              dan aksen biru modern. Cocok untuk
              portfolio, landing page, maupun
              aplikasi bisnis.
            </p>

            <div className="hero-actions">

              <button
                type="button"
                className="primary-btn"
              >
                Get Started
              </button>

              <button
                type="button"
                className="secondary-btn"
              >
                Learn More
              </button>

            </div>


            {/* Stats */}

            <div className="mini-stats">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="stat-box glass-panel"
                >

                  <strong>
                    {item.value}
                  </strong>

                  <span>
                    {item.label}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="dashboard-card glass-panel">

              <div className="panel-header">

                <div>

                  <span className="panel-label">
                    Dashboard
                  </span>

                  <h2>
                    Overview
                  </h2>

                </div>

                <button
                  type="button"
                  className="more-btn"
                >
                  ⋮
                </button>

              </div>


              {/* Summary */}

              <div className="summary-card">

                <span className="summary-label">
                  Total Growth
                </span>

                <div className="summary-row">

                  <strong>
                    84.7%
                  </strong>

                  <span>
                    +12.8%
                  </span>

                </div>


                {/* Chart */}

                <div
                  className="chart-bars"
                  aria-label="Chart bars"
                >

                  <span style={{ height: '35%' }} />
                  <span style={{ height: '50%' }} />
                  <span style={{ height: '65%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '78%' }} />
                  <span style={{ height: '92%' }} />
                  <span style={{ height: '100%' }} />

                </div>

              </div>


              {/* Mini dashboard cards */}

              <div className="mini-grid">

                <div className="mini-card">

                  <span>
                    Users
                  </span>

                  <strong>
                    12.8K
                  </strong>

                  <small>
                    +18.4%
                  </small>

                </div>


                <div className="mini-card">

                  <span>
                    Revenue
                  </span>

                  <strong>
                    $24.8K
                  </strong>

                  <small>
                    +12.7%
                  </small>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="features"
        >

          <div className="section-heading">

            <p className="eyebrow">
              Features
            </p>

            <h3>
              Designed to stay simple.
            </h3>

            <p className="section-subtitle">
              Interface modern yang menggabungkan
              minimalism, dark mode, dan glassmorphism.
            </p>

          </div>


          <div className="feature-grid">

            {features.map((feature) => (

              <article
                key={feature.title}
                className="feature-card glass-panel"
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h4>
                  {feature.title}
                </h4>

                <p>
                  {feature.text}
                </p>

                <span className="feature-arrow">
                  →
                </span>

              </article>

            ))}

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="showcase glass-panel"
        >

          <div className="showcase-copy">

            <p className="eyebrow">
              About
            </p>

            <h3>
              Built for modern
              <span> websites and apps.</span>
            </h3>

            <p>
              Template ini cocok untuk portfolio,
              company profile, dashboard, aplikasi
              bisnis, atau landing page yang ingin
              tampil premium dengan visual dark
              glassmorphism.
            </p>

            <button
              type="button"
              className="outline-btn"
            >
              Explore More
            </button>

          </div>


          <div className="showcase-list">

            <div>

              <span>
                01
              </span>

              <p>
                Responsive layout untuk desktop
                dan mobile.
              </p>

            </div>

            <div>

              <span>
                02
              </span>

              <p>
                Visual dark glassmorphism dengan
                aksen biru yang modern.
              </p>

            </div>

            <div>

              <span>
                03
              </span>

              <p>
                Struktur komponen yang mudah
                disesuaikan untuk kebutuhanmu.
              </p>

            </div>

            <div>

              <span>
                04
              </span>

              <p>
                Fokus pada readability dan
                user experience.
              </p>

            </div>

          </div>

        </section>


        {/* ================= PRICING ================= */}

        <section
          id="pricing"
          className="pricing"
        >

          <div className="section-heading">

            <p className="eyebrow">
              Pricing
            </p>

            <h3>
              Simple and transparent.
            </h3>

          </div>


          <div className="pricing-grid">

            {/* Basic */}

            <div className="pricing-card glass-panel">

              <span className="pricing-label">
                BASIC
              </span>

              <h4>
                Free
              </h4>

              <p className="pricing-description">
                Untuk memulai dan mencoba
                pengalaman digital modern.
              </p>

              <div className="pricing-price">
                $0
                <span>
                  /month
                </span>
              </div>

              <button className="pricing-btn secondary-btn">
                Get Started
              </button>

            </div>


            {/* Pro */}

            <div className="pricing-card glass-panel pricing-featured">

              <div className="popular-badge">
                MOST POPULAR
              </div>

              <span className="pricing-label">
                PRO
              </span>

              <h4>
                $29
              </h4>

              <p className="pricing-description">
                Untuk project yang membutuhkan
                lebih banyak fitur dan fleksibilitas.
              </p>

              <div className="pricing-price">
                $29
                <span>
                  /month
                </span>
              </div>

              <button className="pricing-btn primary-btn">
                Start Building
              </button>

            </div>


            {/* Premium */}

            <div className="pricing-card glass-panel">

              <span className="pricing-label">
                PREMIUM
              </span>

              <h4>
                $79
              </h4>

              <p className="pricing-description">
                Solusi lengkap untuk kebutuhan
                profesional dan bisnis.
              </p>

              <div className="pricing-price">
                $79
                <span>
                  /month
                </span>
              </div>

              <button className="pricing-btn secondary-btn">
                Contact Us
              </button>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          className="cta glass-panel"
        >

          <div>

            <p className="eyebrow eyebrow-light">
              Ready to build?
            </p>

            <h3>
              Turn your idea into
              <span>
                {' '}something beautiful.
              </span>
            </h3>

            <p className="cta-description">
              Mulai bangun website modern
              dengan visual dark glassmorphism
              dan aksen biru.
            </p>

          </div>

          <button
            type="button"
            className="cta-btn"
          >
            Start Building
            <span>
              →
            </span>
          </button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>

          <span className="footer-brand">
            JERXXZ
          </span>

          <p>
            Modern. Dark. Elegant.
          </p>

        </div>

        <div className="footer-right">

          <span>
            © 2026 JERXXZ
          </span>

          <span>
            All rights reserved.
          </span>

        </div>

      </footer>

    </div>
  )
}

export default App