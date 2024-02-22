// SelectGame.js

import img1 from './images/cs2.jpg';
import img2 from './images/cs2.jpg';
import img3 from './images/cs2.jpg';

export default function SelectGame() {

  return (
    <section className="select-game">
      <h2>Select a Game</h2>

      <img src={img1} alt="Game 1" />
      <img src={img2} alt="Game 2" />
      <img src={img3} alt="Game 3" />

    </section>
  );

}
