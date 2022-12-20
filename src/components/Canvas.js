import { useEffect, useRef, useState } from "react";

function Canvas() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const canvasRef = useRef(null);

  const a = (2 * Math.PI) / 6;
  const r = 25;

  function drawGrid(ctx, px, py) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let width = ctx.canvas.width;

    for (
      let y = px - width;
      y + r * Math.sin(a) < px + width;
      y += r * Math.sin(a)
    ) {
      for (
        let x = r + (py - width), j = 0;
        x + r * (1 + Math.cos(a)) < py + width;
        x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)
      ) {
        drawHexagon(ctx, x, y);
      }
    }
  }

  function drawHexagon(ctx, x, y) {
    ctx.fillStyle = "#6c706f";
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  useEffect(() => {
    
    const spotlight = document.getElementById("spotlight1");
    spotlight.style.left = (position.x-200) + "px";
    spotlight.style.top = (position.y-200) + "px";
    // drawGrid(context, position.y, position.x);
  }, [position]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const handleMouseMove = (event) => {
      setPosition({ x: (event.clientX), y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
     drawGrid(context, position.y, position.x);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (<>
    <div className="spotlight" id='spotlight1'>
        <div  className="spotlightchild"></div>
    </div>
    <canvas
      ref={canvasRef}
      width={window.innerWidth * 10}
      height={window.innerWidth * 10}
    /></>
  );
}

export default Canvas;