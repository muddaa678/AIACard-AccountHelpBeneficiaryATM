import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import ContactLabels from "../components/contact-labels";
import NameLabels from "../components/name-labels";
import ModalProfileContent from "../components/modal-profile-content";

const DesktopAccount: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[9.312rem] leading-[normal] tracking-[normal] mq750:gap-[4.625rem] mq450:gap-[2.313rem] mq1125:flex-wrap mq1125:p-[1.25rem] mq1125:box-border">
      <main className="flex-1 flex flex-row items-start justify-start gap-[1.75rem] max-w-full mq750:pl-[1.75rem] mq750:pr-[1.75rem] mq750:box-border mq1050:min-w-full">
        <FrameComponent />
        <section className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] text-left text-[2rem] text-white font-montserrat mq750:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.25rem] max-w-full mq1050:gap-[3.625rem] mq450:gap-[1.813rem]">
            <div className="w-[46.125rem] flex flex-col items-start justify-start gap-[2.875rem] max-w-full mq750:gap-[1.438rem]">
              <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
                <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-[1.625rem] mq450:text-[1.188rem]">
                  Account Settings
                </h1>
                <div className="relative text-[1rem]">{`Manage your account settings to personalize your experience. `}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem] box-border max-w-full text-[5.625rem] text-gray">
                <div className="flex-1 flex flex-row items-start justify-start gap-[4.206rem] max-w-full mq750:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
                  <div className="w-[11.669rem] flex flex-col items-end justify-start gap-[1.081rem] min-w-[11.669rem] mq750:flex-1">
                    <div className="self-stretch h-[11.669rem] relative">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod box-border w-full h-full border-[0px] border-solid border-gray" />
                      <h1 className="m-0 absolute top-[2.469rem] left-[3.144rem] text-inherit font-bold font-inherit inline-block w-[5.638rem] h-[7.1rem] z-[1] mq1050:text-[2.813rem] mq450:text-[1.688rem]">
                        M
                      </h1>
                    </div>
                    <div className="flex flex-row items-start justify-end py-[0rem] pr-[2.937rem] pl-[3.125rem]">
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
                  <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[1.562rem] min-w-[19.313rem] max-w-full">
                    <ContactLabels
                      emailAddress="Email Address"
                      muddashiraianalysisPlaceh="muddashir@aianalysis.group"
                    />
                    <ContactLabels
                      emailAddress="Phone Number"
                      muddashiraianalysisPlaceh="+971 52 123 4567"
                      propPadding="unset"
                    />
                    <ContactLabels
                      emailAddress="Password"
                      muddashiraianalysisPlaceh="*************************"
                      propPadding="unset"
                    />
                    <button className="cursor-pointer [border:none] py-[0.875rem] pr-[1.812rem] pl-[1.875rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod-100">
                      <div className="h-[2.688rem] w-[11.125rem] relative rounded-8xs bg-goldenrod hidden" />
                      <b className="relative text-[0.75rem] inline-block font-montserrat text-gray text-center min-w-[7.438rem] z-[1]">
                        Link Authenticator
                      </b>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem] box-border max-w-full text-[1.375rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.125rem] max-w-full mq450:gap-[1.063rem]">
                <div className="flex flex-row items-start justify-start gap-[1.562rem] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.125rem]">
                      Personal Information
                    </h2>
                  </div>
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
                <div className="self-stretch flex flex-row items-start justify-start gap-[2.812rem] max-w-full text-[0.75rem] text-darkgray mq750:flex-wrap mq450:gap-[1.375rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.875rem] min-w-[14.938rem] max-w-full">
                    <NameLabels
                      firstName="First Name"
                      muddashirPlaceholder="Muddashir"
                    />
                    <NameLabels
                      firstName="Nationality"
                      muddashirPlaceholder="Sri Lanka"
                    />
                    <NameLabels
                      firstName="Date of Birth"
                      muddashirPlaceholder="24-11-1999"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.875rem] min-w-[14.938rem] max-w-full">
                    <NameLabels
                      firstName="Last Name"
                      muddashirPlaceholder="Siddique"
                    />
                    <NameLabels
                      firstName="Country of Residence"
                      muddashirPlaceholder="United Arab Emirates"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
                      <b className="relative inline-block min-w-[4.313rem]">
                        KYC Status
                      </b>
                      <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-between pt-[0.312rem] pb-[0.375rem] pr-[1.312rem] pl-[1.125rem] max-w-full gap-[1.25rem] text-[1rem] text-white border-[2px] border-solid border-gray mq450:flex-wrap">
                        <div className="h-[3.25rem] w-[23rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-gray" />
                        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                          <div className="relative font-medium inline-block min-w-[4.5rem] z-[1]">
                            Passport
                          </div>
                        </div>
                        <div className="rounded-8xs bg-gray flex flex-row items-start justify-start pt-[0.562rem] px-[0.75rem] pb-[0.5rem] gap-[0.187rem] z-[1] text-center text-[0.75rem]">
                          <div className="h-[2.188rem] w-[5.813rem] relative rounded-8xs bg-gray hidden" />
                          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                            <b className="relative inline-block min-w-[3.063rem] z-[2]">
                              Verified
                            </b>
                          </div>
                          <img
                            className="h-[1.125rem] w-[1.063rem] relative object-contain min-h-[1.125rem] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/muddashir-siddique-2-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[12.313rem] flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border">
        <ModalProfileContent />
      </div>
    </div>
  );
};

export default DesktopAccount;
