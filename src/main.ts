import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/symbol';

import Canvas from '../lib/Canvas';
import Game from './Game';
import Dimensions from '../lib/helpers/Dimensions';

class Main {
  private canvas: Canvas;

  public constructor() {
    // Spiel initialisieren
    this.canvas = new Canvas({
      el: <HTMLCanvasElement>document.getElementById('canvas'),
      aspectRatio: 4 / 3,
      width: 600,
      grid: new Dimensions(1600, 1200),
      // Eigene Root Rootkomponente
      root: new Game(),
      showFPS: true
    });
  }
}

new Main();
