import GameModes from "@/components/game-modes";
import Weapons from "@/components/weapons";

export default function GamesPage() {
  return (
    <main className="pt-16">
      <GameModes />
      <Weapons />
    </main>
  );
}
