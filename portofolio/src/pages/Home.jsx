function Home() {
  return (
    <div className="grid-container">
      {/* HEADER */}
      <header className="header">
        <div className="nav-container">
          <h1>Dyah Amarruli</h1>
          <nav>
            <ul className="nav-list">
              <li>Tentang</li>
              <li>Hobi</li>
              <li>Kontak</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* KONTEN UTAMA */}
      <main className="main-content">
        {/* Tentang Saya */}
        <section className="card about">
          <h2>Tentang Saya</h2>
          <img
            src="/assets/dyaha.jpg"
            alt="Foto profil Dyah Amarruli"
            className="profile-img"
          />
          <p>
            Halo! Saya adalah seorang mahasiswa yang bersemangat untuk belajar
            tentang pengembangan web. Saya suka memecahkan masalah dan
            menciptakan aplikasi yang berguna bagi orang lain.
          </p>
        </section>

        {/* Hobi */}
        <section className="card portfolio">
          <h2>Hobi Saya</h2>
          <div className="hobi-list">
            <div className="hobi-item">🎬 Nonton Film</div>
            <div className="hobi-item">🎮 Main</div>
            <div className="hobi-item">🍰 Jajan</div>
          </div>
        </section>

        {/* Kontak */}
        <section className="card contact">
          <h2>Kontak</h2>
          <p>
            Kunjungi profil Instagram saya di{' '}
            <a
              href="https://www.instagram.com/dyahamr_?igsh=MWc2bmR3cXYzYTJnaA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              sini
            </a>
            .
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Dyah Amarruli</p>
      </footer>
    </div>
  );
}

export default Home;
