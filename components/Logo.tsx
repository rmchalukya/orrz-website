import Image from "next/image";

// Official Orrizonte mark (public/logo.png).
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Orrizonte Technologies logo"
      width={100}
      height={100}
      className={className}
    />
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        ORRIZONTE
        <span className="ml-1 font-medium text-orange-600">Technologies</span>
      </span>
    </span>
  );
}
