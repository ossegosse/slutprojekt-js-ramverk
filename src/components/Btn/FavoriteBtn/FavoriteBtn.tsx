import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const FavoriteBtn = ({ isFavorite, onToggle }) => {
  return (
    <>
      {isFavorite ? (
        <MdFavorite onClick={onToggle} className="favorite-icon" />
      ) : (
        <MdFavoriteBorder onClick={onToggle} className="favorite-icon" />
      )}
    </>
  );
};

export default FavoriteBtn;
