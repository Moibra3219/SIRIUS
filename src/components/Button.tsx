import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  classname?: string | any;
}

export const Button: FC<PropsWithChildren<ButtonProps>>|any = ({
  children,
  classname,
}:{children:any , classname:any}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "relative py-2 px-3 text-sm font-medium rounded-lg bg-gradient-to-b from-[#1d3565] to-[#1d3565] shadow-[0px_0px_12px_#1d3565]",
        classname,
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute border border-white/20 inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute border border-white/40 inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(29,53,101,0.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};
