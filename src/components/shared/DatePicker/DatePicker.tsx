import React, { useEffect, useState } from "react";
import { startOfWeek, addDays, format, isToday, isBefore } from "date-fns";
import { Container } from "@mui/material";
import classNames from "classnames";

import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const startOfCurrentWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const handleDateChange = (day: any) => {
    setSelectedDate(day);
  };

  const renderWeekDays = () => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(startOfCurrentWeek, i);

      console.log(selectedDate.getDay() - 1);

      weekDays.push(
        <div
          key={i}
          onClick={() => handleDateChange(day)}
          className={classNames({
            "flex flex-1 flex-col justify-between text-center h-[100%]": true,
            "selected-date": day.toDateString() === selectedDate.toDateString(),
          })}
        >
          <p
            className={classNames({
              "text-[16px] text-grey-2": true,
              "font-bold": day.toDateString() === selectedDate.toDateString(),
            })}
          >
            {format(day, "EEE").charAt(0)}
          </p>
          <div
            className={classNames({
              "flex flex-col items-center gap-[11px] text-[16px] text-grey-2 pt-[12px] pb-[9px]":
                true,
              "gap-[11px] bg-orange text-white text-[16px] font-extrabold rounded-[8px] pt-[12px] pb-[9px]":
                day.toDateString() === selectedDate.toDateString(),
            })}
          >
            <span>{format(day, "d")}</span>
            <div
              className={classNames({
                "w-[6px] h-[6px] rounded-[90px]": true,
                "bg-white": day.toDateString() === selectedDate.toDateString(),
                "bg-grey":
                  new Date(selectedDate).getDate() - 1 === day.getDate() ||
                  new Date(selectedDate).getDate() - 2 === day.getDate() ||
                  new Date(selectedDate).getDate() - 3 === day.getDate(),
              })}
            ></div>
          </div>
        </div>
      );
    }
    return weekDays;
  };

  return (
    <Container>
      <div className="w-[100%] mx-auto mt-8 bg-bg-grey px-[14px] py-[20px] rounded-[21px] h-[210px]">
        <div className="flex justify-between items-center mb-[19px]">
          <button
            className="text-xl font-bold text-calendar-arrow focus:outline-none"
            onClick={() => setSelectedDate(addDays(selectedDate, -7))}
          >
            <img src={arrowLeft} alt="arrow-left" />
          </button>
          <p className="text-xl font-bold text-calendar-arrow">
            {format(startOfCurrentWeek, "yyyy")}
          </p>
          <button
            className="text-xl font-bold text-calendar-arrow focus:outline-none"
            onClick={() => setSelectedDate(addDays(selectedDate, 7))}
          >
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </div>
        <div
          className="flex h-[75%]"
          style={{ borderRadius: "21px", background: "#FAFAFA" }}
        >
          {renderWeekDays()}
        </div>
      </div>
    </Container>
  );
};

export default DatePicker;
