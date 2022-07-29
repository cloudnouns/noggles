const rainbow = `
@keyframes frames-fill {
  0% {
    fill: rgb(255, 0, 0, 1);
    animation-timing-function: linear;
  }

  10% {
    fill: rgb(255, 154, 0, 1);
    animation-timing-function: linear;
  }

  20% {
    fill: rgb(208, 222, 33, 1);
    animation-timing-function: linear;
  }

  30% {
    fill: rgb(79, 220, 74, 1);
    animation-timing-function: linear;
  }

  40% {
    fill: rgb(63, 218, 216, 1);
    animation-timing-function: linear;
  }

  50% {
    fill: rgb(47, 201, 226, 1);
    animation-timing-function: linear;
  }

  60% {
    fill: rgb(28, 127, 238, 1);
    animation-timing-function: linear;
  }

  70% {
    fill: rgb(95, 21, 242, 1);
    animation-timing-function: linear;
  }

  80% {
    fill: rgb(186, 12, 248, 1);
    animation-timing-function: linear;
  }

  90% {
    fill: rgb(251, 7, 217, 1);
    animation-timing-function: linear;
  }

  100% {
    fill: rgb(255, 0, 0, 1);
  }
}

#PLACEHOLDER {
  animation: 10s linear 0s infinite both frames-fill;
}
`;

export const animations = {
	rainbow
};
