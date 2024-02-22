// SelectGame.js

export default function SelectGame() {
    return (
      <section className="select-game">
        <h2>Select a Game</h2>
  
        <GameThumbnail image="/game-1.png" title="Game 1" />  
        <GameThumbnail image="/game-2.png" title="Game 2" />
        <GameThumbnail image="/game-3.png" title="Game 3" />
      </section>
    );
  }
  