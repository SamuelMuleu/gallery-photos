

interface PhotoItemProps {
  photo: {
    id: string;
  description: string;
  urls: {
    small: string;
  };
  };
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
  return (
    <div className="relative">
      <img src={photo.urls.small} alt={photo.description} className="w-full h-auto" />
      <div className="text-center mt-2">{photo.description}</div>
    </div>
  );
};

export default PhotoItem;