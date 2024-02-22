export class Viewport
{
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor ()
  {
    // initialize the dom
    this.canvas = document.createElement("canvas");
    if (!this.canvas)
    {
      throw "Browser not supported for canvas tag";
    }

    // initialize rendering
    const context = this.canvas.getContext("2d");
    if (!context)
    {
      throw "Browser not supporting 2D context";
    }
    this.context = context;

    // Show into user interface
    document.body.appendChild(this.canvas);
  }
}