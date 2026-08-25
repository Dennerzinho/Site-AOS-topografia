import { useEffect, useRef } from 'react';

const FRAME_COUNT = 274;

export function ScrollFrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const frames: HTMLImageElement[] = [];
    let targetFrame = 0;
    let displayedFrame = 0;
    let animationFrame = 0;
    let frameToDraw = -1;

    const drawFrame = (frameIndex: number) => {
      const image = frames[frameIndex];
      if (!image?.naturalWidth) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scale = Math.max(viewportWidth / image.naturalWidth, viewportHeight / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;

      context.clearRect(0, 0, viewportWidth, viewportHeight);
      context.drawImage(image, (viewportWidth - width) / 2, (viewportHeight - height) / 2, width, height);
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      frameToDraw = -1;
    };

    const updateTargetFrame = () => {
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      targetFrame = scrollRange > 0
        ? Math.min(FRAME_COUNT - 1, Math.max(0, (window.scrollY / scrollRange) * (FRAME_COUNT - 1)))
        : 0;
    };

    const animate = () => {
      displayedFrame += (targetFrame - displayedFrame) * 0.14;
      const nextFrame = Math.round(displayedFrame);
      if (nextFrame !== frameToDraw) {
        frameToDraw = nextFrame;
        drawFrame(nextFrame);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    for (let index = 0; index < FRAME_COUNT; index += 1) {
      const image = new Image();
      image.src = `/frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;
      image.onload = () => drawFrame(Math.round(displayedFrame));
      frames.push(image);
    }

    resizeCanvas();
    updateTargetFrame();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateTargetFrame, { passive: true });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTargetFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="scroll-frame-animation" />;
}