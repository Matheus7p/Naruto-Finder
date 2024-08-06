"use client";

interface CharacterCardProps {
  name: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default CharacterCard;
