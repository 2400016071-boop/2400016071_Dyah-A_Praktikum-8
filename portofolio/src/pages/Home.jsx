import profileImage from "../assets/dyaha.jpg";

function Home() {
  return (
    <div className="min-h-screen w-full bg-pink-50 px-6 py-12 flex justify-center">
      <main className="w-full max-w-6xl space-y-12">
        
        {/* ===== TENTANG SAYA ===== */}
        <section className="bg-pink-100 rounded-3xl shadow-lg px-6 py-10 md:px-16 md:py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-6">
            Tentang Saya
          </h2>

          <img
            src={profileImage}
            alt="Foto Dyah Amarruli"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-lg mb-6"
          />

          <p className="text-pink-900 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Halo! Saya adalah seorang mahasiswa yang bersemangat untuk belajar
            tentang pengembangan web. Saya suka memecahkan masalah dan
            menciptakan aplikasi yang berguna bagi orang lain.
          </p>
        </section>

        {/* ===== HOBI ===== */}
        <section className="bg-pink-100 rounded-3xl shadow-lg px-6 py-10 md:px-16 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-8">
            Hobi Saya
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-pink-200 px-6 py-3 rounded-xl text-pink-900 font-medium">
              🎬 Nonton Film
            </div>
            <div className="bg-pink-200 px-6 py-3 rounded-xl text-pink-900 font-medium">
              🚆 Travelling
            </div>
            <div className="bg-pink-200 px-6 py-3 rounded-xl text-pink-900 font-medium">
              🍜 Kuliner
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;
