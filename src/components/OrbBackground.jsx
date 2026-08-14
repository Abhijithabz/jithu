export default function OrbBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden dot-grid bg-base">
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-purple/30 blur-[110px] animate-float" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-pink/25 blur-[120px] animate-float-delay" />
      <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-cyan/25 blur-[110px] animate-float" />
      <div className="absolute bottom-20 right-10 h-[300px] w-[300px] rounded-full bg-yellow/15 blur-[100px] animate-float-delay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/90" />
    </div>
  )
}
