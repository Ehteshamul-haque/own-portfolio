import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(145deg, #070b12 0%, #0c1220 55%, #082033 100%)",
          color: "#f1f5f9",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#38bdf8",
          }}
        >
          Full Stack Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", maxWidth: 900 }}>
            MERN · Next.js · Shopify · Node.js · Cloud & DevOps
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#64748b" }}>
          Building scalable web applications that solve real problems.
        </div>
      </div>
    ),
    size,
  );
}
