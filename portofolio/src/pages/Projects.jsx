const projects = [
  {
    id: 1,
    title: "Website Portofolio",
    description: "Portofolio pribadi menggunakan CSS.",
    link: " https://2400016071-boop.github.io/ega_ganteng_Praktikum-3/", 
  },
  {
    id: 2,
    title: "Website FoodGo",
    description: "Website pemesanan makanan menggunakan React dan Tailwind CSS.",
    link: " https://2400016071-boop.github.io/hackathon/", 
  },
  {
    id: 3,
    title: "Website Random Useless Facts",
    description: "Interaksi Web dengan JavaScript dan DOM.",
    link: "https://2400016071-boop.github.io/2400016071_Dyah-A_Praktikum-4/",
  },
  {
    id: 4,
    title: "Website Kata-Kata Hari Ini",
    description: "Interaksi Web dengan JavaScript dan DOM.",
    link: " https://2400016071-boop.github.io/2400016071_Dyah-A_Praktikum-5-1-/",
  },
  {
    id: 5,
    title: "Website Tebak Angka",
    description: "Interaksi Web dengan JavaScript dan DOM.",
    link: " https://2400016071-boop.github.io/2400016071_Dyah-A_Praktikum-5-2-/",
  },
   {
    id: 6,
    title: "Slicing Landing Page ",
    description: "Menggunakan JavaScript dasar untuk memanipulasi DOM (membuat hamburger menu interaktif).",
    link: " https://2400016071-boop.github.io/2400016071_Dyah-A_Praktikum-5_slicing/",
  },
];

function Projects() {
  return (
    <div className="min-h-screen w-full bg-pink-50 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-pink-700 text-center mb-12">
        Projects
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-pink-700 mb-4">
              {project.title}
            </h2>

            <p className="text-pink-900 leading-relaxed">
              {project.description}
            </p>

            <p className="mt-6 text-pink-600 font-semibold">
              Lihat Project →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
