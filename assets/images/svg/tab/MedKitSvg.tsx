import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MedKitSvg(props:any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 45 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.508 49.638l-.03.005-.174.085-.048.01-.035-.01-.174-.088c-.026-.006-.046-.002-.059.015l-.01.024-.041 1.049.012.049.025.032.255.181.036.01.03-.01.254-.181.03-.04.01-.041-.042-1.046c-.006-.026-.02-.041-.04-.044zm.647-.277l-.035.005-.45.228-.025.024-.007.027.044 1.054.012.029.02.02.492.225c.031.008.055.002.071-.02l.01-.034-.083-1.504c-.008-.031-.025-.05-.05-.054zm-1.752.005a.049.049 0 00-.066.014l-.015.035-.083 1.504c.001.03.015.05.041.059l.037-.005.493-.228.024-.02.007-.026.044-1.054-.007-.03-.024-.024-.451-.225zM29.403 0a4.9 4.9 0 014.9 4.9v2.45h2.451a7.35 7.35 0 017.35 7.352v22.052a7.35 7.35 0 01-7.35 7.35H7.351A7.35 7.35 0 010 36.755V14.702A7.35 7.35 0 017.35 7.35h2.451V4.9A4.9 4.9 0 0114.701 0h14.702zm-7.35 22.052a2.45 2.45 0 00-2.434 2.164l-.017.287v2.45h-2.45a2.45 2.45 0 00-.287 4.883l.287.018h2.45v2.45a2.45 2.45 0 004.884.286l.017-.286v-2.45h2.45a2.45 2.45 0 00.287-4.884l-.287-.017h-2.45v-2.45a2.45 2.45 0 00-2.45-2.45zm14.701-9.8H7.351a2.45 2.45 0 00-2.45 2.45h34.303a2.45 2.45 0 00-2.45-2.45zM29.404 4.9H14.701v2.45h14.701V4.9z"
        fill={props?.color}
      />
    </Svg>
  )
}

export default MedKitSvg
