function Contact() {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">Kontak Saya</h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Pesan</label>
          <textarea
            rows="4"
            placeholder="Tulis pesan"
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kirim Pesan
        </button>
      </form>

      <p className="text-center text-gray-500 mt-6">
        Atau hubungi saya melalui Instagram:{' '}
        <a
          href="https://www.instagram.com/dyahamr_?igsh=MWc2bmR3cXYzYTJnaA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @dyahamr_
        </a>
      </p>
    </div>
  );
}

export default Contact;
