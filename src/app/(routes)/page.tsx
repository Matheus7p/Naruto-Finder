"use client";

import CharacterList from "../components/CharacterList/CharacterList.component";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <img src="/logo.png" alt="" />
      </div>


      <CharacterList />
    </div>
  );
}
