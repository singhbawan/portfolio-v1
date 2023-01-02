import { useEffect, useRef, useState } from "react";

function Canvas() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [refPos, setRefPos] = useState(100);

  const canvasRef = useRef(null);

  const a = (2 * Math.PI) / 6;
  const r = 25;

  function drawGrid(ctx, px, py) {
    setRefPos((position.x+position.y));
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let width = 2000;

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
    ctx.fillStyle = "rgba(20, 60, 99, 0.1)";
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.strokeStyle = "#1d1d1d";
    ctx.stroke();
    if(Math.random()<=0.02)ctx.fill();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const spotlight = document.getElementById("spotlight1");
    spotlight.style.left = (position.x-270) + "px";
    spotlight.style.top = (position.y-270) + "px";
    if(Math.abs(refPos-(position.x+position.y))>300){
    drawGrid(context, position.y, position.x);}
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
      width={2000}
      height={2000}
    /></>
  );
}

export default Canvas;
