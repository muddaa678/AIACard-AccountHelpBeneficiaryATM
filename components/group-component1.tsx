import type { NextPage } from "next";

export type GroupComponent1Type = {
  className?: string;
  muddashirSiddique211?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  muddashirSiddique211,
}) => {
  return (
    <div
      className={`self-stretch rounded-3xs flex flex-row items-end justify-start pt-[0.812rem] pb-[1.356rem] pr-[1.25rem] pl-[1.437rem] box-border gap-[4.187rem] max-w-full text-left text-[1.563rem] text-gray font-montserrat mq450:gap-[1.063rem] mq700:flex-wrap mq700:gap-[2.063rem] ${className}`}
    >
      <img
        className="h-[6.5rem] w-[41.25rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-341.svg"
      />
      <div className="flex-1 flex flex-row items-end justify-start gap-[0.75rem] min-w-[12.75rem] mq450:flex-wrap">
        <div className="h-[4.063rem] w-[4.063rem] relative">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod box-border w-full h-full z-[1] border-[0px] border-solid border-gray" />
          <h1 className="m-0 absolute top-[1.125rem] left-[1.313rem] text-inherit font-bold font-inherit inline-block min-w-[1.5rem] z-[2] mq450:text-[1.25rem]">
            M
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.625rem] box-border min-w-[9.625rem] text-[1.125rem] text-white">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1]">
              Muddashir Work
            </h2>
            <div className="relative text-[0.688rem] z-[1]">
              Ym5XcTROYVhRZ0k1ckJRNUtNcGVzNHpW
            </div>
          </div>
        </div>
      </div>
      <div className="w-[14.719rem] flex flex-row items-start justify-start gap-[0.937rem] text-center text-[0.625rem] text-white">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.656rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0.187rem]">
              <div className="h-[2.781rem] w-[2.781rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
                <img
                  className="absolute top-[0.875rem] left-[0.813rem] w-[1.188rem] h-[1.063rem] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src={muddashirSiddique211}
                />
              </div>
            </div>
            <b className="relative inline-block min-w-[3.125rem] z-[1]">
              Favourite
            </b>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.187rem] pl-[0rem] gap-[0.631rem]">
          <div className="w-[2.781rem] h-[2.781rem] relative shrink-0 z-[1]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
            <img
              className="absolute top-[0.875rem] left-[0.875rem] w-[1.113rem] h-[1.031rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/screenshot-20240713-at-55100pm@2x.png"
            />
          </div>
          <b className="self-stretch relative inline-block min-w-[2.781rem] shrink-0 z-[1]">
            Transfer
          </b>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[0.187rem] pl-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.631rem]">
            <div className="w-[2.781rem] h-[2.781rem] relative shrink-0">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
              <img
                className="absolute top-[0.813rem] left-[0.938rem] w-[1rem] h-[1rem] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/group-112@2x.png"
              />
            </div>
            <b className="self-stretch relative shrink-0 z-[1]">Edit</b>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.631rem]">
            <div className="w-[2.781rem] h-[2.781rem] relative shrink-0">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
              <img
                className="absolute top-[0.813rem] left-[0.938rem] w-[0.938rem] h-[1.063rem] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/muddashir-siddique-17-1@2x.png"
              />
            </div>
            <b className="self-stretch relative shrink-0 z-[1]">Delete</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
