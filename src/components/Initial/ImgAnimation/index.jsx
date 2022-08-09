import React from "react";
import { Container } from "./styles";
import frame1 from "../../../assets/modalInitPage/Frame-1.svg";
import frame2 from "../../../assets/modalInitPage/Frame-2.svg";
import frame3 from "../../../assets/modalInitPage/Frame-3.svg";

const ImgAnimation = () => {
  return (
    <Container>
      <img className="frame1Index" src={frame1} alt="" />
      <img className="frame2Index" src={frame2} alt="" />
      <img className="frame3Index" src={frame3} alt="" />

      <div>
        <div>
          <div />
        </div>
      </div>
    </Container>
  );
};

export default ImgAnimation;
