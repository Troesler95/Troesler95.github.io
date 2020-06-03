import * as React from "react";

function SvgTerminalIcon(props) {
  return (
    <svg viewBox="0 0 368.77 295.85" {...props}>
      <g data-name="Layer 2">
        <path
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={13.88}
          d="M6.94 6.94h354.89v281.97H6.94z"
        />
        <text
          transform="translate(90.39 201.23)"
          fill="#fff"
          fontFamily="Raleway-SemiBold,Raleway"
          fontWeight={600}
          fontSize={207.97}
        >
          {'\u003E'}
        </text>
        <text
          transform="translate(178.24 186.6)"
          fontSize={184.3}
          fill="#fff"
          fontFamily="Raleway-SemiBold,Raleway"
          fontWeight={600}
        >
          {'\u005F'}
        </text>
      </g>
    </svg>
  );
}

export default SvgTerminalIcon;