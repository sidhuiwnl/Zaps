import {NavLink} from "react-router";

export default function LandingPage() {
    return (
        <main className="w-screen  min-h-screen flex flex-col bg-[#f3f1ea]">

            <header
                className="fixed top-0 left-0 right-0 z-50
        bg-[#F2F1EA]/80 backdrop-blur-lg border-b-2 border-[#E8E8E8]
        h-[66px] flex items-center"
            >
                <div className="container mx-auto px-4 flex justify-between items-center">

                    <div className="lg:absolute lg:left-[271px]">
                        <div className="w-[72px] h-[20px] relative">
                            <img
                                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737914689/nuablack4x72x20_rvv4mv.png"
                                alt="Nua Logo"
                                sizes="72px"
                                className="object-contain object-left"

                            />
                        </div>
                    </div>

                    {/* Right side elements */}
                    <div className="lg:absolute lg:right-[271px] flex items-center gap-[40px]">
                        <NavLink
                            to="/changelog"
                            className="text-[13px] font-medium text-gray-700 hover:text-gray-900 transition-colors font-instrument-sans"
                        >
                            Changelog
                        </NavLink>
                        <NavLink
                            to="/waitlist"
                            className="text-[13px] font-medium bg-black text-white px-[13px] pt-[8px] pb-[8px] rounded-[7px] hover:bg-gray-800 transition-colors font-instrument-sans"
                        >
                            Request Access
                        </NavLink>
                    </div>
                </div>
            </header>


            <div className="flex-1 flex flex-col items-center bg-[#f3f1ea]">

                <div className="w-full" style={{ height: "285px" }}>
                    <p
                        className="font-instrument-sans uppercase tracking-[0.51em] leading-[133%] text-center text-[19px]"
                        style={{
                            paddingTop: "249px",
                            marginBottom: "32",
                        }}
                    >
                        INTRODUCING Zap
                    </p>
                </div>

                <h1
                    className="text-[64px] leading-[83px] text-center px-4 lg:px-[314px]"
                    style={{ marginTop: "0px", marginBottom: "0px" }}
                >
                    <div className="whitespace-nowrap">
                        <span className="font-instrument-serif font-normal">Automate </span>
                        <span className="font-instrument-serif font-normal italic">high quality </span>
                        <span className="font-instrument-serif font-normal">account research</span>
                    </div>
                    <div className="font-instrument-serif font-normal">to speed up your pipeline generation</div>
                </h1>

                <p className="text-[28px] text-center font-instrument-sans font-light px-4 lg:px-[314px] mt-[25px] mb-[48px] leading-[133%]">
                    Nua analyzes your accounts & surfaces insights
                    <br className="hidden md:inline" />
                    you'd normally spend hours uncovering.
                </p>

                <NavLink to="/waitlist" style={{ marginTop: "-2px" }}>
                    <div
                        className="inline-flex items-center bg-black text-white rounded-[10px] hover:bg-black/90 transition-colors font-instrument-sans"
                        style={{ width: "227px", height: "49px" }}
                    >
                        <div className="flex items-center justify-between w-full pl-[22px] pr-[17px]">
                            <span className="text-[19px] whitespace-nowrap">Request Access</span>
                            <div className="flex items-center gap-[14px]">
                                <div className="w-[36px] h-[15px] relative">
                                    <img
                                        src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737918196/Arrow_1_tacbar.svg"
                                        alt="Arrow"
                                        width={36}
                                        height={15}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <div className="relative w-full">
                    <img
                        src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738096434/NUA_DEMO_2_1_kn8cwi.png"
                        alt="Nua Integration Visualization"
                        width={1274}
                        height={1043}
                        className="w-full max-w-[1274px] mx-auto mt-3"

                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 w-full"
                        style={{
                            height: "303px",
                            background: "linear-gradient(to top, #DCD5C1 0%, rgba(217, 217, 217, 0) 100%)",
                            zIndex: 10,
                        }}
                    />
                </div>

                <div className="container mx-auto relative" style={{ height: "887px" }}>
                    <div className="absolute" style={{ top: "290px", left: "50%", transform: "translateX(-50%)", zIndex: "0" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1517" height="629" viewBox="0 0 1517 629" fill="none">
                            <path
                                d="M0.646729 619.72L4.24351 0.471383L1516.06 9.25248L1512.47 628.501L0.646729 619.72Z"
                                fill="url(#paint0_radial_150_176)"
                            />
                            <defs>
                                <radialGradient
                                    id="paint0_radial_150_176"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(774.078 314.235) rotate(85.9819) scale(410.647 4531.28)"
                                >
                                    <stop stopColor="#E5DFD0" />
                                    <stop offset="1" stopColor="#F3F1EA" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="max-w-[1024px] w-full">
                            <div
                                className="font-instrument-serif text-[64px] leading-[70px]"
                                style={{
                                    marginTop: "181px",
                                    width: "391px",
                                }}
                            >
                                Made for Modern
                                <br />
                                SaaS Sales Teams
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-[51px] mb-[187px] relative z-1">
                        <div className="grid grid-cols-3 max-w-[1024px] mx-auto" style={{ gap: "8px" }}>
                            <img
                                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738240085/Group_292_1_1_xrqqmp.png"
                                alt="Banner"
                                width={336}
                                height={332}

                                className="mx-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738242527/LLM_Powered_1_1_ouoqrm.png"
                                alt="LLM Powered Banner"
                                width={336}
                                height={332}

                                className="mx-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738242565/image_e9piuy.png"
                                alt="Third Banner"
                                width={336}
                                height={332}

                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div
                        className="absolute font-instrument-sans text-[16px] text-black"
                        style={{
                            right: "135px",
                            top: "256px",
                            width: "650px",
                            paddingLeft: "135px",
                            zIndex: "1",
                        }}
                    >
                        <p
                            style={{
                                width: "650px",
                                lineHeight: "20px",
                                letterSpacing: "0",
                                fontWeight: 400,
                            }}
                        >
                            Nua is created by a founding team with experience in sales&nbsp;and&nbsp;product.
                            <br />
                            Committed to build the best tool for the sales of SaaS.
                            <br />
                            <NavLink
                                to="/waitlist"
                                className="inline-flex items-center hover:opacity-80 font-instrument-sans text-[16px] leading-[20px] text-black"
                                style={{
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                }}
                            >
                                Request Access
                                <span className="inline-flex items-center ml-2">
                  <img
                      src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738170017/Arrow_15_c8z3ee.svg"
                      alt="Arrow"
                      width={7}
                      height={11}
                      className="object-contain"
                  />
                </span>
                            </NavLink>
                        </p>
                    </div>
                </div>


                <section className="w-full bg-[#f3f1ea] relative"> {/* relative instead of overflow-hidden */}
                    <div className="w-full h-[213px] relative">
                        <div
                            className="w-full h-full"
                            style={{
                                background: "linear-gradient(0deg, rgba(243, 241, 234, 0.00) 0%, #DCD5C1 100%)",
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="lg:ml-[112px] -mt-[60px]">
                            <p className="font-instrument-sans text-black text-[18px] font-normal max-w-[326px]">
                                Built for the user. Not the buyer.
                            </p>
                            <div className="mt-[16px]">
                                <p className="font-instrument-serif text-black text-[60px] font-normal leading-[65px] max-w-[418px]">
                                    A sales tool you <br />
                                    will enjoy using
                                </p>
                            </div>
                            <p className="font-instrument-sans text-black max-w-[326px] mt-[28px]">
                                The times of cluttered and unreliable data are over. Just get a clear view of your key data that enables
                                you to build a strategic point of view on your accounts in seconds.
                            </p>
                        </div>

                        <div className="mt-[-200px]">
                            <div className="relative" style={{ marginRight: 'calc((100vw - 100%) / -2)' }}>
                                <img
                                    src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738267414/demodemo_1_hc3xrz.png"
                                    alt="Demo Visualization"
                                    width={1391}
                                    height={1033}
                                    className="w-full h-auto"

                                    style={{ marginTop: '9px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>


                <footer className="bg-black text-white py-12 w-full mt-20">
                    <div className="container mx-auto px-4 w-full">
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full">
                            <div className="flex flex-col items-center lg:items-start gap-2 mb-8 lg:mb-0">
                                <div className="w-[46px] h-[13px] relative">
                                    <img
                                        src="https://res.cloudinary.com/ducqjmtlk/image/upload/q_100/v1737901490/nuablack_dgaajp.png"
                                        alt="Nua Logo"

                                        sizes="46px"
                                        className="object-contain object-left"

                                    />
                                </div>
                                <div className="flex flex-wrap justify-center gap-4 lg:gap-12 text-sm">
                                    <NavLink to="/changelog" className="hover:opacity-80 font-instrument-sans">
                                        Changelog
                                    </NavLink>
                                    <NavLink to="/blog" className="hover:opacity-80 font-instrument-sans">
                                        Blog
                                    </NavLink>
                                    <NavLink to="/about-us" className="hover:opacity-80 font-instrument-sans">
                                        About us
                                    </NavLink>
                                    <NavLink to="/contact" className="hover:opacity-80 font-instrument-sans">
                                        Contact
                                    </NavLink>
                                    <NavLink to="/imprint" className="hover:opacity-80 font-instrument-sans">
                                        Imprint
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-40 text-sm opacity-70 text-center lg:text-left font-instrument-serif">
                            Made with <span className="text-red-500">❤️</span> By Sidharth.
                        </div>
                    </div>
                </footer>
            </div>
        </main>
)
}

