import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

interface FavoriteBtnProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ isFavorite, onToggle }) => {
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
