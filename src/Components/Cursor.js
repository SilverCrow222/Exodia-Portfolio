import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursor && follower) {
        cursor.style.left = clientX + "px";
        cursor.style.top = clientY + "px";

        setTimeout(() => {
          follower.style.left = clientX + "px";
          follower.style.top = clientY + "px";
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      follower.style.transform = "translate(-50%, -50%) scale(1.5)";
      follower.style.borderColor = "rgba(99, 102, 241, 0.5)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.borderColor = "rgba(99, 102, 241, 0.3)";
    };

    document.addEventListener("mousemove", moveCursor);

    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}

export default CustomCursor;
