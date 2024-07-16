import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import ModalProfileContent from "../components/modal-profile-content";

const DesktopATMLocator: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[2.25rem] leading-[normal] tracking-[normal] mq925:gap-[1.125rem] mq925:pl-[1.25rem] mq925:box-border">
      <FrameComponent2 />
      <section className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_272px)] text-left text-[2rem] text-white font-montserrat mq925:max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq925:flex-wrap">
          <div className="w-[39.75rem] flex flex-col items-start justify-start gap-[4.312rem] max-w-full mq450:gap-[1.063rem] mq700:gap-[2.125rem]">
            <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
              <a className="[text-decoration:none] relative font-bold text-[inherit] mq925:text-[1.625rem] mq450:text-[1.188rem]">
                ATM Locator
              </a>
              <div className="relative text-[1rem]">{`Need cash? Withdraw from any ATM in the world. `}</div>
            </div>
            <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-between py-[0.75rem] pr-[1.375rem] pl-[2.25rem] max-w-full gap-[1.25rem] text-[1.125rem] text-darkgray border-[0px] border-solid border-gray mq450:flex-wrap">
              <img
                className="h-[5.188rem] w-[39.75rem] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-34.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
                <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1]">
                  Where are you right now?
                </h3>
              </div>
              <div className="h-[3.688rem] w-[3.688rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
                <img
                  className="absolute top-[1.063rem] left-[1.313rem] w-[1.063rem] h-[1.563rem] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/muddashir-siddique-23-1@2x.png"
                />
              </div>
            </div>
          </div>
          <ModalProfileContent propAlignSelf="unset" propWidth="12.313rem" />
        </div>
      </section>
    </div>
  );
};

export default DesktopATMLocator;
