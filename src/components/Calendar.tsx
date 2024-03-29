"use client";

import Image from "next/image";
import React, { useState } from "react";

const Calendar: React.FC = () => {
  // Function to get an array of the next 30 days starting from today
  const getNext30Days = () => {
    const dates = [];
    let currentDate = new Date();
    for (let i = 0; i < 30; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="w-[1200px] h-[500px] border border-black">
      <div className="grid grid-cols-7 border border-black">
        {days.map(day => (
          <div key={day} className="p-2 border border-black">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5">
        {getNext30Days().map((date, index) => (
          <div key={index} className="p-2 border border-black">
            {date.toLocaleDateString('en-US', { day: 'numeric' })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
