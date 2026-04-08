import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;
    let animFrame: number;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, select, textarea");
      cursor!.classList.toggle("hover", !!isInteractive);
    }

    function animate() {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor!.style.left = `${curX}px`;
      cursor!.style.top = `${curY}px`;
      animFrame = requestAnimationFrame(animate);
    }

    document.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
      style={{ pointerEvents: "none" }}
    />
  );
}
