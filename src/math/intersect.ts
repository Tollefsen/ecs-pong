import { Rect } from "../primitives/rect";

export default function intersects(a: Rect, b: Rect): boolean {
    const w = 0.5 * (a.width + b.width);
    const h = 0.5 * (a.height + b.height);
    const dx = a.x1 + a.width / 2 - (b.x1 + b.width / 2);
    const dy = a.y1 + a.height / 2 - (b.y1 + b.height / 2);
  
    if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
      const wy = w * dy;
      const hx = h * dx;
      if (wy > hx) {
        if (wy > -hx) {
          return true;
        } else {
          return true;
        }
      } else {
        if (wy > -hx) {
          return true;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  export function boxIntersects(a: Rect, b: Rect): boolean {
    return (a.x1 < b.x1 + b.width &&
        a.x1 + a.width > b.x1 &&
        a.y1 < b.y1 + b.height &&
        a.y1 + a.height > b.y1)
  }
