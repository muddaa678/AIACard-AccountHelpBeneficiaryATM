import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ContactLabelsType = {
  className?: string;
  emailAddress?: string;
  muddashiraianalysisPlaceh?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ContactLabels: NextPage<ContactLabelsType> = ({
  className = "",
  emailAddress,
  muddashiraianalysisPlaceh,
  propPadding,
}) => {
  const contactLabelsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border gap-[0.625rem] max-w-full text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
      style={contactLabelsStyle}
    >
      <b className="relative inline-block min-w-[5.625rem]">{emailAddress}</b>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.125rem] max-w-full mq450:flex-wrap">
        <div className="flex-1 rounded-8xs box-border flex flex-row items-start justify-start pt-[0.625rem] px-[1.312rem] pb-[1rem] min-w-[14.75rem] max-w-full border-[2px] border-solid border-gray">
          <div className="h-[3.25rem] w-[23rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-gray" />
          <input
            className="w-[14.75rem] [border:none] [outline:none] font-medium font-montserrat text-[1rem] bg-[transparent] h-[1.25rem] relative text-white text-left inline-block p-0 z-[1]"
            placeholder={muddashiraianalysisPlaceh}
            type="text"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
          <button className="cursor-pointer [border:none] pt-[0.375rem] pb-[0.5rem] pr-[0.812rem] pl-[1.125rem] bg-gray rounded-8xs flex flex-row items-start justify-start gap-[0.687rem]">
            <div className="h-[2.188rem] w-[5.563rem] relative rounded-8xs bg-gray hidden" />
            <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
              <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-center min-w-[1.625rem] z-[1]">
                Edit
              </b>
            </div>
            <div className="h-[1.313rem] w-[1.313rem] relative z-[1]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-black w-full h-full" />
              <img
                className="absolute top-[0.438rem] left-[0.438rem] w-[0.5rem] h-[0.5rem] object-contain z-[1]"
                alt=""
                src="/muddashir-siddique-12-1@2x.png"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactLabels;
