import { SVG_NS } from "../settings";
import Board from "./Board";

export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(element);

    this.board = new Board(this.width, this.height);
  }

  render() {
    ///empty out game elements before re-rendering
    this.gameElement.innerHTML = "";

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewbox", `0 0 ${this.width} ${this.height}`);
    svg.setAttributeNS(null, "version", "1.1");

    this.gameElement.appendChild(svg);

    // rendering all game elements inside the svg

    this.board.render(svg);
  }
}
