import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FEF3EA 0%, #ffffff 55%, #EEF8FC 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={76} height={76} alt="" />
          <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1, color: "#111" }}>
            ORRIZONTE TECHNOLOGIES
          </span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111",
            maxWidth: 980,
          }}
        >
          Strategy and software, led by architects who&apos;ve built it at national scale.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#E0670F", fontWeight: 600 }}>
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
