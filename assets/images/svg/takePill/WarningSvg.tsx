import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function WarningSvg(props: any) {
  return (
    <Svg
      width={87}
      height={76}
      viewBox="0 0 87 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={87} height={76} rx={11} fill="#E284B6" />
      <Path
        d="M23.128 61.586h39.45c3.767 0 6.127-2.711 6.127-6.127a5.957 5.957 0 00-.804-3.013L48.14 17.09C47.009 15.054 44.949 14 42.865 14c-2.059 0-4.168 1.054-5.299 3.089L17.83 52.47c-.553.953-.829 1.958-.829 2.989 0 3.415 2.386 6.126 6.128 6.126zm19.737-17.201c-1.33 0-2.059-.754-2.11-2.109l-.35-12.405c-.051-1.356 1.003-2.361 2.435-2.361 1.406 0 2.511 1.03 2.46 2.386l-.375 12.38c-.05 1.381-.78 2.109-2.06 2.109zm0 9.266c-1.457 0-2.812-1.155-2.812-2.712 0-1.558 1.33-2.711 2.812-2.711 1.482 0 2.813 1.13 2.813 2.71 0 1.583-1.357 2.713-2.813 2.713z"
        fill="#FDFDFD"
      />
    </Svg>
  )
}

export default WarningSvg
