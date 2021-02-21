import { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
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

const FadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const SkellySwipe = keyframes`
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -100%;
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

const ElementFloat = keyframes`
  0% {
    transform: translateY(0%) translateX(0%);
  }

  50% {
    transform: translateY(-7.5%) translateX(-2.5%);
  }

  100% {
    transform: translateY(0%) translateX(0%);
  }
`;

export {
  FadeIn,
  FadeOut,
  FadeUp,
  SkellySwipe,
  Pulse,
  SlideIn,
  SlideOut,
  Float,
  ElementFloat
};
