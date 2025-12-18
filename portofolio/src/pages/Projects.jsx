function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Website Portofolio',
      description:
        'Website portofolio pribadi yang dibuat menggunakan HTML, CSS, dan React.',
    },
    {
      id: 2,
      title: 'Aplikasi SPA React',
      description:
        'Aplikasi Single Page Application (SPA) dengan navigasi React Router.',
    },
    {
      id: 3,
      title: 'Tugas Praktikum Web',
      description:
        'Kumpulan tugas praktikum mata kuliah Teknologi Web.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Proyek Saya</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
