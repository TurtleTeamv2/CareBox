import * as React from "react"
import Svg, { G, Mask, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function FilterSvg(props: any) {
  return (
    <Svg
      width={45}
      height={51}
      viewBox="0 0 45 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_17_319)">
        <Mask id="a" fill="#fff">
          <Path d="M23.721 41.642l-.025.004-.146.072-.04.008-.03-.008-.145-.075c-.022-.005-.039 0-.05.013l-.008.02-.035.88.01.041.02.027.215.152.03.008.025-.008.214-.152.025-.033.008-.035-.035-.877c-.006-.023-.017-.035-.033-.038zm.543-.233l-.03.004-.377.192-.02.02-.007.023.037.883.01.025.017.017.413.189c.026.007.046.001.06-.017l.008-.028-.07-1.263c-.007-.026-.02-.04-.041-.045zm-1.47.004a.041.041 0 00-.056.013l-.012.028-.07 1.263c.002.024.013.04.035.049l.031-.004.413-.191.02-.017.007-.023.037-.883-.006-.025-.02-.02-.379-.19z" />
        </Mask>
        <Path
          d="M23.721 41.642l-.025.004-.146.072-.04.008-.03-.008-.145-.075c-.022-.005-.039 0-.05.013l-.008.02-.035.88.01.041.02.027.215.152.03.008.025-.008.214-.152.025-.033.008-.035-.035-.877c-.006-.023-.017-.035-.033-.038zm.543-.233l-.03.004-.377.192-.02.02-.007.023.037.883.01.025.017.017.413.189c.026.007.046.001.06-.017l.008-.028-.07-1.263c-.007-.026-.02-.04-.041-.045zm-1.47.004a.041.041 0 00-.056.013l-.012.028-.07 1.263c.002.024.013.04.035.049l.031-.004.413-.191.02-.017.007-.023.037-.883-.006-.025-.02-.02-.379-.19z"
          fill="#77C4EE"
        />
        <Path
          d="M23.721 41.642l.164-.987-.164-.027-.164.027.164.986zm-.025.004l-.164-.987-.145.024-.133.066.442.897zm-.146.072l.197.98.128-.026.118-.058-.443-.896zm-.04.008l-.275.961.233.067.237-.048-.196-.98zm-.03-.008l-.452.891.086.044.092.026.274-.962zm-.145-.075l.452-.891-.1-.051-.11-.028-.242.97zm-.05.013l-.78-.625-.093.116-.055.138.928.37zm-.008.02l-.928-.371-.064.16-.007.172.999.04zm-.035.88l-1-.04-.005.144.035.139.97-.243zm.01.041l-.97.243.05.202.128.165.792-.61zm.02.027l-.792.61.091.118.122.087.58-.815zm.215.152l-.58.815.147.105.175.046.258-.966zm.03.008l-.257.967.29.077.284-.095-.317-.949zm.025-.008l.316.949.142-.047.122-.087-.58-.815zm.214-.152l.58.815.127-.09.093-.125-.8-.6zm.025-.033l.8.6.125-.167.048-.204-.973-.229zm.008-.035l.973.23.032-.133-.006-.137-1 .04zm-.035-.877l1-.04-.005-.103-.025-.1-.97.242zm.51-.27l.196-.98-.168-.034-.17.024.142.99zm-.03.004l-.14-.99-.163.024-.147.074.45.892zm-.377.192l-.451-.893-.143.072-.113.113.707.708zm-.02.02l-.708-.707-.188.188-.07.256.965.263zm-.007.023l-.965-.263-.04.15.006.154.999-.041zm.037.883l-1 .042.008.178.069.165.923-.384zm.01.025l-.923.385.076.182.14.14.707-.707zm.017.017l-.707.707.127.127.163.075.417-.91zm.413.189l-.416.909.078.036.083.022.255-.967zm.06-.017l.792.61.117-.151.052-.184-.962-.275zm.008-.028l.961.274.047-.162-.01-.168-.998.056zm-.07-1.263l.998-.055-.005-.101-.026-.098-.967.254zm-1.511-.04l-.518.855.034.02.037.019.447-.895zm-.056.012l-.831-.556-.051.077-.037.085.92.394zm-.012.028l-.919-.394-.07.163-.01.176 1 .055zm-.07 1.263l-.998-.056-.003.056.003.055.998-.055zm.035.049l-.35.936.234.088.248-.033-.132-.991zm.031-.004l.132.99.15-.02.138-.063-.42-.907zm.413-.191l.42.907.11-.05.095-.076-.625-.781zm.02-.017l.625.781.255-.203.085-.315-.964-.263zm.007-.023l.965.264.03-.11.004-.112-1-.041zm.037-.883l.999.041.006-.144-.035-.14-.97.243zm-.006-.025l.97-.243-.067-.268-.196-.196-.707.707zm-.02-.02l.706-.708-.114-.114-.146-.073-.447.894zm.384-.948l-.025.004.329 1.973.024-.004-.328-1.973zm-.303.094l-.146.072.885 1.793.146-.072-.885-1.793zm.1-.012l-.04.008.391 1.961.042-.008-.393-1.961zm.43.027l-.029-.008-.55 1.923.03.008.549-1.923zm.149.062l-.146-.074-.905 1.783.146.074.905-1.783zm-.356-.153a1.038 1.038 0 00-1.073.358l1.562 1.25a.962.962 0 01-.974.333l.485-1.94zm-1.22.611l-.008.021 1.857.743.008-.02-1.857-.743zm-.08.353l-.034.88 1.998.079.035-.88-1.998-.08zm-.005 1.162l.01.04 1.94-.484-.01-.041-1.94.485zm.188.408l.02.027 1.585-1.22-.02-.026-1.585 1.219zm.233.232l.214.152 1.16-1.63-.214-.152-1.16 1.63zm.536.303l.03.009.516-1.933-.03-.008-.516 1.932zm.605-.009l.024-.008-.632-1.898-.025.009.633 1.897zm.288-.142l.214-.152-1.16-1.63-.214.152 1.16 1.63zm.434-.367l.025-.033-1.6-1.2-.025.033 1.6 1.2zm.198-.404l.008-.035-1.947-.458-.008.035 1.947.458zm.034-.304l-.035-.877-1.998.08.035.877 1.998-.08zm-.064-1.08c-.061-.244-.286-.689-.839-.78l-.328 1.972a.965.965 0 01-.773-.707l1.94-.485zm-.602-1.017l-.028.004.282 1.98.029-.004-.283-1.98zm-.338.102l-.378.191.902 1.785.378-.191-.902-1.785zm-.634.376l-.021.02 1.414 1.415.02-.02-1.413-1.415zm-.279.465l-.006.023 1.93.526.006-.023-1.93-.526zm-.04.327l.037.884 1.998-.083-.037-.884-1.998.083zm.113 1.227l.01.025 1.846-.77-.01-.024-1.846.77zm.226.347l.016.017 1.415-1.414-.017-.017-1.414 1.414zm.307.219l.414.189.832-1.819-.413-.189-.832 1.819zm.575.247a1.047 1.047 0 001.107-.374l-1.585-1.22a.954.954 0 01.987-.34l-.509 1.934zm1.276-.709l.008-.029-1.923-.55-.008.03 1.923.549zm.045-.359l-.07-1.262-1.997.11.07 1.263 1.997-.11zm-.101-1.461a1.053 1.053 0 00-.812-.771l-.392 1.96a.954.954 0 01-.73-.68l1.934-.51zm-1.96-.642a1.042 1.042 0 00-.765-.126l.434 1.953a.959.959 0 01-.705-.116l1.036-1.71zm-.765-.126a1.041 1.041 0 00-.64.438l1.663 1.11a.959.959 0 01-.59.405l-.433-1.953zm-.728.6l-.012.028 1.838.788.013-.028-1.839-.788zm-.091.367l-.07 1.262 1.997.11.07-1.261-1.997-.11zm-.07 1.373a1.057 1.057 0 00.682.93l.702-1.872a.948.948 0 01.613.831l-1.997.111zm1.165.985l.031-.004-.264-1.983-.031.005.264 1.982zm.319-.088l.413-.19-.84-1.816-.413.191.84 1.815zm.618-.317l.02-.017-1.249-1.562-.02.017 1.249 1.562zm.36-.535l.007-.022-1.93-.527-.006.023 1.93.526zm.041-.244l.037-.884-1.998-.083-.037.884 1.998.083zm.008-1.168l-.006-.025-1.94.485.006.025 1.94-.485zm-.27-.49l-.02-.02-1.414 1.414.02.021 1.415-1.414zm-.28-.207l-.378-.19-.894 1.79.378.189.894-1.789z"
          fill="#000"
          mask="url(#a)"
        />
        <Path
          d="M30.722 25.167h0a5.672 5.672 0 015.346 3.777l.118.334h2.758a1.556 1.556 0 110 3.11h-2.758l-.118.334a5.668 5.668 0 01-10.691 0l-.118-.333H6.055a1.556 1.556 0 010-3.111H25.26l.117-.334a5.667 5.667 0 015.346-3.777zM14.277 12.833h0a5.667 5.667 0 015.215 3.446l.135.347.124.318h19.192a1.556 1.556 0 01.196 3.099l-.21.013H19.741l-.117.333a5.669 5.669 0 01-10.561.33l-.137-.347-.125-.316H6.056a1.556 1.556 0 01-.195-3.099l.21-.013H8.814l.118-.333a5.667 5.667 0 015.345-3.778zM30.723.5h0a5.673 5.673 0 015.346 3.778l.118.333h2.758a1.556 1.556 0 110 3.111h-2.758l-.118.334a5.668 5.668 0 01-10.691 0l-.118-.334H6.055a1.556 1.556 0 010-3.11H25.26l.117-.334A5.667 5.667 0 0130.722.5z"
          fill="#77C4EE"
          stroke="#000"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default FilterSvg
