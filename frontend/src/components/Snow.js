"use client";
import { useEffect, useState } from 'react';

export default function Snow() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    // Generate static snow flakes only on client side to avoid hydration mismatch
    const newFlakes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      width: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flakes.map((flake) => (
        <div 
          key={flake.id}
          className="absolute bg-white rounded-full opacity-60 animate-drift"
          style={{
            left: `${flake.left}vw`,
            top: '-10px',
            width: `${flake.width}px`,
            height: `${flake.width}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
