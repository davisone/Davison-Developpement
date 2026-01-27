export default function Loading() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-neutral-400 text-sm animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  )
}