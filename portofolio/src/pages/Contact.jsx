function Contact() {
  return (
    <div className="min-h-screen w-full bg-pink-50 px-6 py-12 flex justify-center items-center">
      <section className="w-full max-w-3xl bg-pink-100 rounded-3xl shadow-lg px-6 py-10 md:px-14 md:py-14">
        
        {/* JUDUL */}
        <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 text-center mb-6">
          Kontak
        </h2>

        {/* DESKRIPSI */}
        <p className="text-pink-900 text-base md:text-lg text-center mb-10">
          Kunjungi profil Instagram saya di{" "}
          <a
            href="https://www.instagram.com/dyahamr_?igsh=MWc2bmR3cXYzYTJnaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 font-semibold hover:underline"
          >
            sini
          </a>
          , atau kirim pesan lewat form di bawah ini.
        </p>

        {/* FORM */}
        <form className="space-y-6">
          <div>
            <label className="block text-pink-900 mb-2">Nama</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label className="block text-pink-900 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label className="block text-pink-900 mb-2">Pesan</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Tulis pesan..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
          >
            Kirim
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
