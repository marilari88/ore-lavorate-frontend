import styled, { keyframes } from "styled-components";

const animation = keyframes`
 0% { opacity:0 }
 100% { opacity: 1 }
`;

export const SfondoNero = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(15, 60, 120, 1) 100%
  );
  animation-name: ${animation};
  animation-duration: 1s;
`;
