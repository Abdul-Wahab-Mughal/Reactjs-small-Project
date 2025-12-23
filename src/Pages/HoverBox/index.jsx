import React, { useState } from "react";
import Box from "./Component/Box";
import icon_1 from "./Image/icon/np1.svg";
import icon_2 from "./Image/icon/np2.svg";
import icon_3 from "./Image/icon/np3.svg";
import icon_4 from "./Image/icon/np4.svg";
import icon_5 from "./Image/icon/np5.svg";
import Main from "../../Component/Main";

function HoverBox() {
  const [active, setActive] = useState(2);
  const boxes = [
    {
      img: new URL("./Image/img/img1.webp", import.meta.url).href,
      text: "Adwise leveraged feed data for a 67% rise in ROI",
      icon: icon_1,
    },
    {
      img: new URL("./Image/img/img2.webp", import.meta.url).href,
      text: "g adventures company logoReduced CPAs just by being able to cater to specific audiences with Dynamic Ads",
      icon: icon_2,
    },
    {
      img: new URL("./Image/img/img3.webp", import.meta.url).href,
      text: "Enabled quick and effective launch and promotion of hundreds of new delivery locations",
      icon: icon_3,
    },
    {
      img: new URL("./Image/img/img4.webp", import.meta.url).href,
      text: "tipico company logoUnlocked performance on social to show live odds in betting, delivering high-quality visuals with real-time relevance",
      icon: icon_4,
    },
    {
      img: new URL("./Image/img/img5.webp", import.meta.url).href,
      text: "wavemaker company logoHighly-personalized dynamic creatives led to 50% decrease in CPA",
      icon: icon_5,
    },
  ];

  return (
    <>
      <Main title={"Hover Box"}>
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
      </Main>
    </>
  );
}

export default HoverBox;
