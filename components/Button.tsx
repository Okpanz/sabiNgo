import React from "react";
import { clsx } from "clsx";
import ArrowIconleft from "./icon/ArrowIconleft";

const btnColor: Record<string, string> = {
  primary: "  bg-primary  text-white  hover:bg-white  hover:text-primary  ",
  secondry:
    "  bg-white text-primary     hover:bg-primary  hover:text-white    ",
};

function Button({
  label,

  icon,
  type,
  classes = "",
  color = "primary",
  onClick,
  disabled = false,
}: {
  label?: string;

  type: "button" | "submite" | "reset";
  color?: "primary" | "secondry";
  icon?: React.ReactNode;
  classes?: string;
  link?: "";
  disabled?: boolean;
  onClick?: (...params: any) => void;
}) {
  return (
    <button
      type={type}
      disable={disabled}
      className={clsx(
        "  flex   font-montse font-[500]   gap-1 py-[12px] px-[17px]  lg:text-[16px]  md:text-[12px] text-[9px] rounded-lg  whitespace-nowrap   items-center wrap border-primary border-2  white  ",
        classes || "",
        disabled ? "opacity-40 hover:!opacity-40 pointer-events-none" : "",
        btnColor[`${color}`] || ""
      )}
      onClick={onClick}
    >
      <div> {label}</div>

      <span> {icon} </span>
      <ArrowIconleft className="  lg:h-4 lg:w-4    h-3 w-3" color="white" />
    </button>
  );
}

export default Button;
