import { useEffect, useRef, useState } from "react";

function Canvas() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);

  const a = (2 * Math.PI) / 6;
  const r = 25;

  function drawGrid(ctx, px, py) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (
      let y = px - 100;
      y + r * Math.sin(a) < px + 100;
      y += r * Math.sin(a)
    ) {
      for (
        let x = r + (py - 100), j = 0;
        x + r * (1 + Math.cos(a)) < py + 150;
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
    // ctx.fill();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    const setFromEvent = (e) => setPosition({ x: 300, y: 200 });
    window.addEventListener("mousemove", setFromEvent);

    drawGrid(context, position.x, position.y);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
    

  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth * 10}
      height={window.innerWidth * 10}
    />
  );
}

export default Canvas;
