
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PillsSvg(props:any) {
  return (
    <Svg
      width={73}
      height={57}
      viewBox="0 0 73 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M70.054 27.498c-.596.88-1.857.946-2.625.2L44.479 5.411c-.767-.746-.71-1.982.207-2.55A18.617 18.617 0 0154.66 0C64.792 0 73 7.971 73 17.813c0 3.573-1.078 6.89-2.946 9.685zm-5.422 5.266c-2.866 1.814-6.293 2.861-9.973 2.861-10.133 0-18.341-7.971-18.341-17.813 0-3.573 1.078-6.89 2.946-9.685.596-.88 1.857-.946 2.625-.2l22.95 22.288c.767.745.71 1.981-.207 2.549zm-30.435 8.205c1.09 0 1.938.913 1.72 1.948C34.15 50.966 26.792 57 17.977 57 9.162 57 1.803 50.966.037 42.917c-.229-1.035.63-1.948 1.72-1.948h32.452-.012zm0-3.563H1.757c-1.09 0-1.938-.913-1.72-1.948 1.766-8.049 9.125-14.083 17.94-14.083 8.815 0 16.174 6.034 17.94 14.083.23 1.035-.63 1.948-1.72 1.948z"
        fill="#E284B6"
        fillOpacity={0.2}
      />
    </Svg>
  )
}

export default PillsSvg
