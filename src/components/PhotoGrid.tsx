import { useEffect, useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from "motion/react";

interface Photo {
  id: string;
  alternative_slugs: {
    pt?: string;
  };
  urls: {
    small: string;
  };
}

const PhotoGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_APP_UNSPLASH_API_KEY;

      const resp = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: apiKey,
          query: searchTerm,
          per_page: 5,
          lang: "pt",
        },
      });

      setPhotos(resp.data.results);
    } catch (err) {
      setError(err.message || "Erro ao buscar fotos. Tente novamente.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1250);
    }
  };
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setPhotos([]);
    } else {
      fetchPhotos();
    }
  }, [searchTerm]);

  const cleanSlug = (slug: string | undefined) => {
    if (!slug) return "";
    return slug.replace(/-\w+$/, "").replace(/-/g, " ");
  };
  const filteredPhotos = photos.filter((photo) =>
    cleanSlug(photo.alternative_slugs.pt)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Pesquisar fotos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[336px] pl-12 p-2 bg-gray-800 text-white rounded-md  flex focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
        />
        <button
          onClick={() => fetchPhotos()}
          className="bg-gray-800  rounded-lg text-white p-2 ml-2 hover:bg-gray-700     "
        >
          <FaMagnifyingGlass />
        </button>
      </div>
      {loading && <p className="col-span-3 text-center"> Carregando...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-10">
        {filteredPhotos.length > 0
          ? filteredPhotos.map((photo) => (
              <div key={photo.id} className="">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <motion.img
                    src={photo.urls.small}
                    alt={cleanSlug(photo.alternative_slugs.pt)}
                    className="w-72 h-72 rounded-lg border-2 border-green-500 cursor-pointer "
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="text-center mt-3 w-52 ml-10 flex items-center justify-center">
                  {cleanSlug(photo.alternative_slugs.pt)}
                </div>
              </div>
            ))
          : !loading && (
              <div className="col-span-3 text-center">
                {error ? (
                  <p className="text-red-500">Nenhuma foto encontrada</p>
                ) : (
                  <p className="text-red-500">Nenhuma foto encontrada</p>
                )}
              </div>
            )}
      </div>
    </div>
  );
};

export default PhotoGrid;
