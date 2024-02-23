import React, { SVGProps } from "react";

const LoadingSpinner = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={197}
      height={197}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        background: "0 0",
        display: "block",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={38}
        fill="none"
        stroke="#200ecd"
        strokeDasharray="179.0707812546182 61.690260418206066"
        strokeWidth={6}
        style={{
          animationPlayState: "running",
          animationDelay: "0s",
        }}
      >
        <animateTransform
          attributeName="transform"
          dur="0.5813953488372093s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
};

export default LoadingSpinner;
