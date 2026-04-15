"use client";

import { useMemo } from "react";
import type { Preset } from "@/data/presets";

type MeshGradientCardProps = {
  preset: Preset;
  priority?: boolean;
};

function buildMeshLayers(colors: string[]) {
  const anchors = [
    { x: 18, y: 14, size: 42, alpha: 0.88 },
    { x: 76, y: 18, size: 48, alpha: 0.84 },
    { x: 58, y: 72, size: 52, alpha: 0.8 },
    { x: 16, y: 74, size: 50, alpha: 0.76 },
    { x: 48, y: 42, size: 38, alpha: 0.7 },
    { x: 86, y: 62, size: 44, alpha: 0.68 },
  ];

  return colors.map((color, index) => {
    const anchor = anchors[index % anchors.length];
    const dx = (index % 3) * 4 - 4;
    const dy = index % 2 === 0 ? -3 : 5;
    return `radial-gradient(circle at ${anchor.x + dx}% ${anchor.y + dy}%, ${color}${Math.round(anchor.alpha * 255)
      .toString(16)
      .padStart(2, "0")}, transparent ${anchor.size}%)`;
  });
}

export function MeshGradientCard({ preset }: MeshGradientCardProps) {
  const meshBackground = useMemo(() => {
    const base = preset.colors[0] ?? "#e7ddd3";
    const layers = buildMeshLayers(preset.colors);
    return [
      `linear-gradient(160deg, ${base} 0%, color-mix(in oklab, ${base} 52%, #05070a 48%) 100%)`,
      ...layers,
    ].join(", ");
  }, [preset.colors]);

  return (
    <article className="card">
      <div className="mesh-frame" style={{ backgroundImage: meshBackground }}>
        <div className="mesh-noise" />
        <div className="mesh-glow" />
        <div className="mesh-caption">
          <span>{preset.family}</span>
          <strong>{preset.name}</strong>
          <em>{preset.zhName}</em>
        </div>
      </div>
      <div className="card-copy">
        <p>{preset.description}</p>
        <div className="swatches">
          {preset.colors.map((color) => (
            <span key={color} title={color} style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </article>
  );
}
