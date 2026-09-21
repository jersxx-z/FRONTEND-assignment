import profilePhoto from './assets/foto siu.png'
import { useEffect, useState } from 'react'
import './App.css'

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  { number: '01', title: 'ArsiBot', type: 'Web application', text: 'AI untuk mendesain rumah berdasarkan kebutuhan pengguna.', tags: ['React', 'CSS', 'Dashboard'] },
  { number: '02', title: 'G7 Cafee', type: 'Web website', text: 'Website untuk memudahkan dalan pemesanan, rekap dan manajemen kafe.', tags: ['UI Design', 'Responsive', 'Vite'] },
  { number: '03', title: 'Deepfake Detector', type: 'Web website', text: 'Website untuk mendeteksi konten yang digenerate oleh AI atau bukan.', tags: ['JavaScript', 'CNN', 'Web'] },
]

const skills = [
  ['Frontend', 'React, JavaScript, HTML, CSS'],
  ['Design', 'UI design, wireframe, design system'],
  ['Tools', 'Figma, Git, VS Code'],
  ['Strength', 'Problem solving, teamwork, curiosity'],
]

function getPageFromHash() {
  const page = window.location.hash.replace('#', '')
  return pages.some((item) => item.id === page) ? page : 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const syncPage = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  const navigate = (nextPage) => {
    window.location.hash = nextPage
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    if (page === 'about') return <About navigate={navigate} />
    if (page === 'projects') return <Projects navigate={navigate} />
    if (page === 'skills') return <Skills navigate={navigate} />
    if (page === 'contact') return <Contact />
    return <Home navigate={navigate} />
  }

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => navigate('home')} aria-label="Go to home"><span className="brand-symbol">J</span><span><b>Jeremy</b>Alfie<small>portfolio</small></span></a>
        <nav className="nav" aria-label="Main navigation">
          {pages.map((item) => <a key={item.id} className={page === item.id ? 'active' : ''} href={`#${item.id}`} onClick={() => navigate(item.id)}>{item.label}</a>)}
        </nav>
        <button type="button" className="header-button" onClick={() => navigate('contact')}>Let&apos;s talk <span>↗</span></button>
      </header>
      <main>{renderPage()}</main>
      <footer className="site-footer"><span>© 2026 [Nama Anda]</span><span>Based in Indonesia</span><button type="button" onClick={() => navigate('home')}>Back to top ↑</button></footer>
    </div>
  )
}

function Home({ navigate }) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy"><span className="pill">✦ Personal portfolio</span><p className="availability"><span /> Available for new opportunities</p><h1 id="hero-title">I create digital experiences that feel <em>alive.</em></h1><p className="hero-description">Halo, saya <strong>Jeremy Alfie</strong> — frontend developer yang merancang dan membangun website modern dengan perhatian pada detail.</p><div className="hero-actions"><button type="button" className="primary-button" onClick={() => navigate('projects')}>View my work <span>↗</span></button><button type="button" className="secondary-button" onClick={() => navigate('about')}>More about me</button></div></div>
    <div className="hero-art" aria-label="Decorative portfolio graphic"><div className="art-caption">CREATIVE<br />DEVELOPER</div><div className="dot-sphere" aria-hidden="true">{Array.from({ length: 220 }, (_, index) => <i key={index} />)}</div><div className="art-index">01 / 04</div></div>
  </section>
}

function Biodata({ nama, umur, domisili, keahlian }) {
  return <dl className="biodata-card" aria-label="Biodata Jeremy Alfie">
    <div><dt>Nama</dt><dd>{nama}</dd></div>
    <div><dt>Umur</dt><dd>{umur}</dd></div>
    <div><dt>Domisili</dt><dd>{domisili}</dd></div>
    <div><dt>Keahlian</dt><dd>{keahlian}</dd></div>
  </dl>
}
function biodata({ nama, umur, domisili, keahlian }) {
  return (
    <div className="biodata-card">
      <span className="eyebrow">Biodata</span>

      <div className="biodata-row">
        <span>Nama</span>
        <strong>{nama}</strong>
      </div>

      <div className="biodata-row">
        <span>Umur</span>
        <strong>{umur} tahun</strong>
      </div>

      <div className="biodata-row">
        <span>Domisili</span>
        <strong>{domisili}</strong>
      </div>

      <div className="biodata-row biodata-skills">
        <span>Keahlian</span>
        <div>
          {keahlian.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
      </div>
    </div>
  )
}
function About({ navigate }) {
  return <section className="inner-page about-page" aria-labelledby="about-title"><div className="page-intro"><span className="pill">About me</span><h1 id="about-title">Designing thoughtful <em>digital experiences.</em></h1><p>Saya adalah <strong>Jeremy Alfie</strong>, seorang frontend developer dan UI enthusiast yang suka mengubah ide menjadi website yang rapi, cepat, dan mudah digunakan.</p></div><div className="profile-layout"><div className="profile-orb"><img src={profilePhoto} alt="Foto Jeremy Alfie" /></div><div className="profile-note"><span className="eyebrow">Currently</span><h2>Learning, building, and improving every day.</h2><p>Fokus saya adalah membuat antarmuka yang punya karakter, tetap fungsional, dan nyaman dipakai di semua ukuran layar.</p><Biodata nama="Jeremy Alfie" umur="20 tahun" domisili="Manado" keahlian="Frontend Development & UI Design" /><button className="text-button" type="button" onClick={() => navigate('skills')}>See my skills <span>↗</span></button></div></div></section>
}

function Projects({ navigate }) {
  return <section className="inner-page" aria-labelledby="projects-title"><div className="page-intro project-intro"><span className="pill">Selected work</span><h1 id="projects-title">A few things I&apos;ve <em>made.</em></h1><p>Contoh proyek yang menampilkan cara saya memadukan tampilan modern dan pengalaman pengguna yang jelas.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><span className="project-number">{project.number}</span><div><span className="eyebrow">{project.type}</span><h2>{project.title}</h2><p>{project.text}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><button type="button" className="arrow-button" aria-label={`Contact about ${project.title}`} onClick={() => navigate('contact')}>↗</button></article>)}</div></section>
}

function Skills({ navigate }) {
  return <section className="inner-page" aria-labelledby="skills-title"><div className="page-intro"><span className="pill">What I do</span><h1 id="skills-title">Built with care, <em>curiosity,</em> and code.</h1></div><div className="skill-grid">{skills.map(([title, detail], index) => <article className="skill-card" key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{detail}</p></article>)}</div><div className="skill-footer"><p>Selalu terbuka untuk belajar teknologi baru dan berkolaborasi pada proyek yang bermakna.</p><button type="button" className="primary-button" onClick={() => navigate('contact')}>Let&apos;s work together <span>↗</span></button></div></section>
}

function Contact() {
  return <section className="inner-page contact-page" aria-labelledby="contact-title"><span className="pill">Contact</span><h1 id="contact-title">Let&apos;s make something <em>memorable.</em></h1><p className="contact-lead">Punya ide, peluang kolaborasi, atau hanya ingin menyapa? Saya senang mendengarnya.</p><a className="contact-email">jeremy@gmail.com <span>↗</span></a><div className="social-links" aria-label="Social links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></div></section>
}

export default App
