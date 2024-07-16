import type { NextPage } from "next";

export type NameLabelsType = {
  className?: string;
  firstName?: string;
  muddashirPlaceholder?: string;
};

const NameLabels: NextPage<NameLabelsType> = ({
  className = "",
  firstName,
  muddashirPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
    >
      <b className="relative inline-block min-w-[4.313rem]">{firstName}</b>
      <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[0.75rem] px-[1.125rem] pb-[0.875rem] max-w-full border-[2px] border-solid border-gray">
        <div className="h-[3.25rem] w-[23rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-gray" />
        <input
          className="w-[5.5rem] [border:none] [outline:none] font-medium font-montserrat text-[1rem] bg-[transparent] h-[1.25rem] relative text-white text-left inline-block p-0 z-[1]"
          placeholder={muddashirPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default NameLabels;
