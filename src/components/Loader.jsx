import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="#262A3A"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  width: 92.5vw;
  display: flex;
  justify-content: center;
`;

export default Loader;
