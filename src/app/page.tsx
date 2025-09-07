//import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-yellow-100 to-sky-300">
          Nakul Reddy
        </span>
      </h1>
      <h2 className="text-3xl md:text-6xl font-bold tracking-tight my-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
          Crafting Code
        </span>
      </h2>
      <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Building Experiences
        </span>
      </h2>
      <p className="mt-4 text-base md:text-lg text-white/60">
        This is my personal portfolio.
      </p>
    </div>
  );
}