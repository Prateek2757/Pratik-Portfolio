import { useEffect, useRef, useState } from "react";

const beamCount = 8;
const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  "[data-cursor='interactive']",
].join(",");

type Point = {
  x: number;
  y: number;
};

type BeamState = Point & {
  angle: number;
};

export const CustomCursor = () => {
  const beamRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const target = useRef<Point>({ x: -100, y: -100 });
  const previous = useRef<Point>({ x: -100, y: -100 });
  const beams = useRef<BeamState[]>(
    Array.from({ length: beamCount }, () => ({ x: -100, y: -100, angle: 0 }))
  );
  const frame = useRef<number>();
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const canUseCursorTrail = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canUseCursorTrail) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
      setInteractive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };

    const handleLeave = () => {
      setVisible(false);
      setInteractive(false);
    };
    const handleEnter = () => setVisible(true);

    const animate = () => {
      const dx = target.current.x - previous.current.x;
      const dy = target.current.y - previous.current.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      previous.current = {
        x: previous.current.x + dx * 0.26,
        y: previous.current.y + dy * 0.26,
      };

      beams.current.forEach((beam, index) => {
        const leader = index === 0 ? previous.current : beams.current[index - 1];
        const ease = 0.34 - index * 0.018;

        beam.x += (leader.x - beam.x) * ease;
        beam.y += (leader.y - beam.y) * ease;
        beam.angle += ((Number.isFinite(angle) ? angle : beam.angle) - beam.angle) * 0.22;

        const element = beamRefs.current[index];
        if (element) {
          element.style.transform = `translate3d(${beam.x}px, ${beam.y}px, 0) rotate(${beam.angle}deg)`;
        }
      });

      frame.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);
    frame.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={[
        "cursor-beams",
        visible ? "is-visible" : "",
        interactive ? "is-interactive" : "",
      ].join(" ")}
      aria-hidden="true"
    >
      {Array.from({ length: beamCount }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            beamRefs.current[index] = element;
          }}
          className="cursor-beam"
          style={{
            opacity: 1 - index * 0.1,
            width: `${Math.max(16, 64 - index * 5)}px`,
            animationDelay: `${index * 55}ms`,
          }}
        />
      ))}
    </div>
  );
};
