"use client";

import Image from "next/image";
import Calendar from "@/components/Calendar";

export default function Appointments() {

  return (
    <main className="h-[700px]">
      <div className="h-[150px]"></div>
      <div className="flex w-[1200px] m-auto">
        <Calendar />
      </div>
    </main>
  );
}
