import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-gray box-border flex flex-row items-start justify-between py-[1.312rem] pr-[1.5rem] pl-[1.25rem] max-w-full gap-[1.25rem] z-[1] text-left text-[1rem] text-white font-montserrat border-[0px] border-solid border-gray mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[5.25rem] w-[25.625rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-74.svg"
      />
      <div className="flex flex-col items-start justify-start gap-[0.375rem]">
        <h2 className="m-0 relative text-inherit z-[1] font-inherit">
          <span>{`To: `}</span>
          <b>Muddashir Work</b>
        </h2>
        <div className="relative text-[0.75rem] inline-block min-w-[7rem] whitespace-nowrap z-[1]">
          13-07-2024 16:05:23
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] text-right">
        <div className="flex flex-col items-end justify-start gap-[0.375rem]">
          <b className="relative inline-block min-w-[7.188rem] z-[1]">
            - 100,000 EUR
          </b>
          <div className="relative text-[0.75rem] inline-block min-w-[4.25rem] z-[1]">
            In Progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
