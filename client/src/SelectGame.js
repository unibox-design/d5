// SelectGame.js

import img1 from './images/cs2.jpg';
import img2 from './images/dota.jpeg';
import img3 from './images/pubg.jpeg';


export default function SelectGame() {

  return (
    <section class="select-game">
      <h2>Select a Game</h2>

      <div class='select-cards'>

      <div class='img-container'>
        <img src={img1} alt="CS2" />
      </div>

      <div class='img-container'>
        <img src={img2} alt="Data-2" />
      </div>

      <div class='img-container'>
        <img src={img3} alt="Pubg" />
      </div>

      </div>


    </section>
  );

}
