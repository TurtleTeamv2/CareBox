import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddCircleSvg(props:any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23 0C10.296 0 0 10.296 0 23s10.296 23 23 23 23-10.296 23-23S35.704 0 23 0zm13.414 24.914a1.91 1.91 0 01-1.914 1.913h-7.664V34.5a1.91 1.91 0 01-1.913 1.914h-3.837a1.915 1.915 0 01-1.913-1.914v-7.664H11.5a1.915 1.915 0 01-1.914-1.913v-3.837a1.91 1.91 0 011.914-1.913h7.664V11.5a1.91 1.91 0 011.913-1.914h3.837c1.06 0 1.913.863 1.913 1.914v7.664H34.5c1.06 0 1.914.862 1.914 1.913v3.837z"
        fill={props?.color}
      />
    </Svg>
  )
}

export default AddCircleSvg
