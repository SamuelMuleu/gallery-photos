import { useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Photo {
  id: string;
  alt_description: string;
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
    try {
      const apiKey = "w1KKR8LgaHDmdo_QuwmG6IIChheUGW_IxtBbXlQ2_r8";
      const resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchTerm}&per_page=12`
      );
      setPhotos(resp.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Pesquisar fotos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={fetchPhotos}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
      {loading && <p  className="col-span-3 text-center"> Carregando...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.length > 0
          ? photos.map((photo) => (
              <div key={photo.id} className="relative">
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="w-full h-auto"
                />
                <div className="text-center mt-2">{photo.alt_description}</div>
              </div>
            ))
          : !loading && (
              <div className="col-span-3 text-center">
                {error && <p className="text-red-500">{error}</p>}{" "}
              </div>
            )}
      </div>
    </div>
  );
};

export default PhotoGrid;
