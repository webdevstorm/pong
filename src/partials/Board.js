import { SVG_NS } from "../settings";
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    //set all the rect attributes

    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", "#353535");
    rect.setAttributeNS(null, "stroke", "#000000");

    // set all the line attributes
    let line = document.createElementNS(SVG_NS, "line");

    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "stroke", "#FFFFFF");
    line.setAttributeNS(null, "stroke-width", "4");
    line.setAttributeNS(null, "stroke-dasharray", "20, 15");

    svg.appendChild(rect);
    svg.appendChild(line);

    // HOW DO WE ACTUALLY APPEND THIS THING TO THE SVG IN THE GAME????
  }
}
