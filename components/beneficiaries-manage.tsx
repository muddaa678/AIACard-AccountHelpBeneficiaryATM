import type { NextPage } from "next";
import ModalProfileContent from "./modal-profile-content";

export type BeneficiariesManageType = {
  className?: string;
};

const BeneficiariesManage: NextPage<BeneficiariesManageType> = ({
  className = "",
}) => {
  return (
    <nav
      className={`m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] whitespace-nowrap text-left text-[2rem] text-white font-montserrat mq950:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[0.437rem]">
        <a className="[text-decoration:none] relative font-bold text-[inherit] mq450:text-[1.188rem] mq950:text-[1.625rem]">
          Beneficiaries
        </a>
        <h2 className="m-0 relative text-[1rem] font-normal font-inherit">{`Add and manage your beneficiaries. `}</h2>
      </div>
      <div className="w-[15.25rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
        <button className="cursor-pointer [border:none] pt-[0.5rem] pb-[0.437rem] pr-[0.625rem] pl-[0.687rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start gap-[0.812rem]">
          <div className="h-[3.25rem] w-[10.75rem] relative rounded-8xs bg-goldenrod hidden" />
          <div className="h-[2.313rem] w-[2.313rem] relative z-[1]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
            <img
              className="absolute top-[0.8rem] left-[0.719rem] w-[0.875rem] h-[0.719rem] object-cover z-[1]"
              alt=""
              src="/34@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative text-[0.75rem] font-bold font-montserrat text-black text-left inline-block min-w-[6.313rem] z-[1]">
              Add Beneficiary
            </a>
          </div>
        </button>
      </div>
      <ModalProfileContent propAlignSelf="unset" propWidth="12.313rem" />
    </nav>
  );
};

export default BeneficiariesManage;
