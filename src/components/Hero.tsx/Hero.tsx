import Searchbar from "../Searchbar/Searchbar";
import "./Hero.scss"

interface HeroProps {
  title: string;
  backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImageUrl }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default Hero;
