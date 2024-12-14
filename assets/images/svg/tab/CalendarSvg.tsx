import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarSvg(props:any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 9v7a2 2 0 01-2 2H2a2 2 0 01-2-2V9h18zm-5-9a1 1 0 011 1v1h2a2 2 0 012 2v3H0V4a2 2 0 012-2h2V1a1 1 0 012 0v1h6V1a1 1 0 011-1z"
        fill={props?.color}
      />
    </Svg>
  )
}

export default CalendarSvg
