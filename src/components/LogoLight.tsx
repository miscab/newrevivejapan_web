import Image from "next/image";

export default function LogoLight({ className = "", height = 48 }: { className?: string; height?: number }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo-icon.png"
        alt=""
        width={height}
        height={height}
        className="shrink-0"
        style={{ height, width: "auto" }}
      />
      <div className="flex flex-col justify-center leading-tight">
        <span
          className="font-bold text-white tracking-tight"
          style={{ fontSize: height * 0.35 }}
        >
          New Revive Japan
        </span>
        <span
          className="text-gray-400 font-normal"
          style={{ fontSize: height * 0.16 }}
        >
          リサイクル・リバイブ・リユース
        </span>
      </div>
    </div>
  );
}
