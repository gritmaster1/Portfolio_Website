"use client";

import { ElegantShape } from "@/components/ui/elegant-shape";
import { cn } from "@/lib/utils";

export function GlobalBackground() {
  return (
    <div className={cn("fixed inset-0 z-0 overflow-hidden bg-[#030303]")}>
      {/* Main blurred gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* The animated shapes */}
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-indigo-500/[0.15]"
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />

      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-rose-500/[0.15]"
        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />

      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-violet-500/[0.15]"
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />

      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-amber-500/[0.15]"
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />

      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-cyan-500/[0.15]"
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />

      {/* Additional shapes for better coverage */}
      <ElegantShape
        delay={0.8}
        width={400}
        height={100}
        rotate={45}
        gradient="from-emerald-500/[0.15]"
        className="left-[50%] md:left-[55%] top-[40%] md:top-[45%]"
      />

      <ElegantShape
        delay={0.9}
        width={250}
        height={70}
        rotate={-30}
        gradient="from-orange-500/[0.15]"
        className="right-[30%] md:right-[35%] bottom-[20%] md:bottom-[25%]"
      />
    </div>
  );
}