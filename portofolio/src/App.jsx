import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import navbar from './components/navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <navbar />

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Wildcard route untuk 404 Not Found */}
          <Route
            path="*"
            element={
              <div className="text-center mt-10">
                404 - Halaman Tidak Ditemukan
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
