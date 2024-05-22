interface ReadBtnProps {
  onMarkAsRead: () => void;
}

const ReadBtn: React.FC<ReadBtnProps> = ({ onMarkAsRead }) => {
  return (
    <button onClick={onMarkAsRead}>Have read</button>
  );
};

export default ReadBtn;
