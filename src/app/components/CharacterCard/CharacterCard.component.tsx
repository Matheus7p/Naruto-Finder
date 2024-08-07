"use client";

interface CharacterCardProps {
  name: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image }) => {
  return (
    <div className="h-[250px] w-[200px] border-[#F4A300] border-4 rounded-lg m-4">
      <div className="text-center mb-2">
        <h2 className="text-white font-bold whitespace-nowrap">{name}</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt={name} className="w-[130px] h-[100px] " />
      </div>
    </div>
  );
};

export default CharacterCard;
