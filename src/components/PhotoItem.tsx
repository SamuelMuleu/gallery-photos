interface PhotoItemProps {
  photo: {
    id: string;
    alternative_slugs: {
      pt?: string;
    };
    urls: {
      small: string;
    };
  };
}

const PhotoItem = ({ photo }: PhotoItemProps): JSX.Element => {
  const cleanSlug = (slug: string | undefined) => {
    if (!slug) return "";
    return slug.replace(/-\w+$/, "").replace(/-/g, " ");
  };
  return (
    <div className="">
      <img
        src={photo.urls.small}
        alt={cleanSlug(photo.alternative_slugs.pt)}
        className="w-full h-auto"
      />
    </div>
  );
};

export default PhotoItem;
