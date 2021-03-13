import { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
`;

const FadeIn100 = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
`;

const Pulse = keyframes`
  0% {
    opacity: .5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: .5;
  }
`;

const SlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const SlideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    transform: translateY(25%);
  }
`;

const Float = keyframes`
  0% {
    transform: translateY(0vmin) translateX(0vmin);
  }

  50% {
    transform: translateY(-1vmin) translateX(-0.5vmin);
  }

  100% {
    transform: translateY(0vmin) translateX(0vmin);
  }
`;

export {
  FadeIn,
  FadeIn100,
  FadeOut,
  Pulse,
  SlideIn,
  SlideOut,
  Float,
};
