import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import "../Btn.scss"

interface ReadBtnProps {
  onMarkAsRead: () => void;
}

const ReadBtn: React.FC<ReadBtnProps> = ({ onMarkAsRead }) => {
  const [color, setColor] = useState(true)

  const handleClick = () => {
    setColor(!color)
    onMarkAsRead()
  }

  return (
    <IoBookOutline className={ `have-read-btn ${color ? 'white' : 'black'}`}
    onClick={handleClick}
    size={36}
    />
  );
};

export default ReadBtn;
