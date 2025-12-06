import React, { useState } from "react";
import Box from "./Component/Box";
import Header from "../../Component/Header";
import Theme from "../../Component/Theme";
import icon_1 from "./Image/icon/np1.svg";

function HoverBox() {
  const [active, setActive] = useState(2);
  const boxes = [
    {
      img: new URL("./Image/img/img1.webp", import.meta.url).href,
      text: "Adwise leveraged feed data for a 67% rise in ROI",
      icon: icon_1,
    },
    {
      img: "https://assets-global.website-files.com/635b7fcaa4466902de288cbc/63de368f6bf1b1d29a5e4ea4_Gadventures%20home%20page-2.webp",
      text: "g adventures company logoReduced CPAs just by being able to cater to specific audiences with Dynamic Ads",
      icon: "https://oliomama.vercel.app/Image/B2B/Ship/np2.svg",
    },
    {
      img: "https://assets-global.website-files.com/635b7fcaa4466902de288cbc/63de1be51693d148ebe68820_gorillas%20home%20page.webp",
      text: "Enabled quick and effective launch and promotion of hundreds of new delivery locations",
      icon: "https://oliomama.vercel.app/Image/B2B/Ship/np3.svg",
    },
    {
      img: "https://assets-global.website-files.com/635b7fcaa4466902de288cbc/63de1be5442224094ab96a00_Tipico%20home%20page.webp",
      text: "tipico company logoUnlocked performance on social to show live odds in betting, delivering high-quality visuals with real-time relevance",
      icon: "https://oliomama.vercel.app/Image/B2B/Ship/np4.svg",
    },
    {
      img: "https://assets-global.website-files.com/635b7fcaa4466902de288cbc/63de368f47ab586a768e29ee_Wavemaker%20home%20page-2.webp",
      text: "wavemaker company logoHighly-personalized dynamic creatives led to 50% decrease in CPA",
      icon: "https://oliomama.vercel.app/Image/B2B/Ship/np5.svg",
    },
  ];

  return (
    <>
      <div className="theme">
        <div className="w-full h-screen flex flex-col bg-gray-100 dark:bg-gray-800 pb-5">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"Hover Box"} />
            <Theme />
          </div>
          <div className="h-screen flex flex-grow justify-center items-center min min-h-[550px]">
            <section
              id="SelBox"
              className="w-full max-h-[1000px] !flex gap-1 sm:gap-4 m-1 sm:m-3"
            >
              {boxes.map((item, index) => {
                return (
                  <Box
                    {...item}
                    key={index}
                    active={active === index}
                    onHover={() => setActive(index)}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverBox;
