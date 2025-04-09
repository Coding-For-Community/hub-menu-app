import { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';


export const MediumCup = memo(MediumCupImpl)

function MediumCupImpl(args: {width: number, height: number}) {
   // This code is autogenerated so don't diss me on the formatting
	return <Svg
	width={args.width} height={args.height} style={{outlineColor: "blue"}} viewBox="0 0 808.000000 1220.000000"
	preserveAspectRatio="xMidYMid meet">
   
   <G transform="translate(0.000000,1220.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="black" strokeWidth={60}>
   <Path d="M1026 12124 c-55 -20 -119 -72 -149 -119 -13 -22 -34 -80 -46 -130
   -12 -49 -26 -106 -31 -125 -5 -19 -12 -46 -15 -60 -9 -38 -104 -420 -116 -465
   -6 -22 -14 -53 -19 -70 -4 -16 -21 -84 -36 -150 -26 -114 -44 -155 -67 -155
   -6 0 -47 -18 -92 -40 -98 -47 -204 -146 -260 -241 -102 -175 -122 -388 -53
   -583 11 -33 21 -69 21 -81 -1 -12 -26 -100 -57 -196 -31 -96 -62 -192 -68
   -214 -7 -22 -13 -93 -13 -160 0 -133 18 -205 78 -320 43 -81 174 -212 257
   -257 110 -60 231 -88 381 -88 71 0 101 -4 104 -12 3 -12 12 -163 45 -828 15
   -303 29 -572 40 -775 5 -99 14 -281 20 -405 6 -124 15 -308 20 -410 6 -102 15
   -282 20 -400 10 -212 21 -417 40 -800 6 -107 15 -285 20 -395 5 -110 14 -288
   19 -395 6 -107 17 -337 26 -510 8 -173 20 -400 26 -505 5 -104 14 -284 20
   -400 5 -115 14 -298 19 -405 6 -107 14 -283 19 -390 5 -107 12 -235 15 -285 3
   -49 10 -187 16 -305 53 -1112 58 -1196 85 -1255 28 -61 71 -106 133 -136 l47
   -24 2535 -3 c1814 -2 2549 0 2585 8 89 19 181 104 205 188 9 36 18 169 40 617
   5 116 14 293 20 395 5 102 14 280 20 395 26 516 30 611 40 795 6 107 17 337
   25 510 8 173 19 398 25 500 11 216 26 508 40 810 6 118 15 292 20 385 5 94 14
   267 20 385 6 118 17 350 25 515 8 165 19 399 25 520 6 121 13 258 16 305 3 47
   9 171 14 275 5 105 14 280 19 390 12 234 23 457 51 1025 11 228 23 461 26 518
   l6 102 96 0 c165 0 308 35 420 103 55 33 157 130 193 182 99 147 141 337 108
   497 -6 29 -40 144 -75 254 l-64 202 32 93 c113 331 -39 690 -350 825 -42 18
   -82 41 -89 51 -6 10 -25 77 -42 148 -17 72 -35 146 -40 165 -5 19 -15 58 -22
   85 -6 28 -15 64 -20 80 -11 37 -128 507 -138 555 -19 88 -76 161 -158 201
   l-48 24 -2985 2 c-2569 1 -2990 0 -3024 -13z m5710 -552 c6 -4 14 -20 17 -37
   6 -40 124 -511 137 -551 6 -17 10 -42 10 -57 l0 -27 -2858 0 c-1572 0 -2861 2
   -2864 5 -3 3 3 38 13 78 10 39 46 185 80 322 34 138 66 256 71 263 8 9 560 12
   2697 12 1477 0 2691 -4 2697 -8z m627 -1265 c15 -10 35 -33 43 -51 18 -36 19
   -32 -43 -196 -42 -113 -39 -191 14 -345 79 -233 113 -345 113 -379 0 -24 -9
   -43 -29 -65 l-29 -31 -3389 0 c-3054 0 -3391 2 -3411 16 -12 8 -29 28 -37 44
   -16 30 -12 50 35 190 103 308 115 355 114 430 -1 59 -9 93 -34 160 -19 47 -35
   108 -37 135 -4 45 -1 53 24 77 15 14 42 28 58 31 17 2 1504 4 3305 3 3136 -1
   3277 -2 3303 -19z m-706 -1799 c-4 -90 -11 -251 -17 -358 -16 -315 -34 -673
   -69 -1405 -11 -225 -25 -493 -31 -595 -5 -102 -14 -277 -20 -390 -5 -113 -14
   -302 -20 -420 -6 -118 -15 -294 -20 -390 -5 -96 -12 -227 -15 -290 -11 -228
   -35 -717 -40 -810 -4 -89 -10 -198 -35 -717 -6 -115 -15 -289 -20 -388 -5 -99
   -14 -274 -20 -390 -6 -115 -17 -340 -25 -500 -8 -159 -19 -396 -25 -525 -6
   -129 -15 -296 -20 -370 -6 -75 -10 -181 -10 -237 0 -79 -3 -105 -16 -117 -14
   -14 -228 -16 -2212 -16 -1208 0 -2203 4 -2209 8 -13 8 -22 120 -43 547 -5 110
   -15 288 -20 395 -10 183 -38 744 -60 1210 -6 113 -15 295 -21 405 -5 110 -14
   286 -19 390 -5 105 -14 278 -19 385 -6 107 -15 292 -20 410 -11 225 -33 662
   -51 1010 -10 197 -18 360 -40 795 -10 210 -22 456 -40 790 -5 110 -17 344 -25
   520 -9 176 -20 401 -25 500 -5 99 -14 284 -20 410 -6 127 -13 242 -16 257 -3
   15 -3 32 1 38 4 7 849 10 2627 10 l2621 0 -6 -162z"/>
   <Path d="M3117 6303 c-4 -3 -7 -501 -7 -1105 l0 -1098 185 0 185 0 1 733 c0
   655 5 808 22 757 3 -8 23 -73 45 -145 49 -157 167 -532 224 -710 49 -155 59
   -186 88 -285 12 -41 25 -82 29 -90 7 -12 40 -15 187 -18 l180 -2 11 32 c6 18
   28 87 48 153 64 211 97 319 116 375 10 30 39 125 65 210 43 145 62 205 129
   420 15 47 31 89 36 94 5 6 9 -290 9 -757 l0 -767 185 0 185 0 0 1105 0 1105
   -269 0 -270 0 -17 -57 c-9 -32 -25 -89 -36 -128 -11 -38 -23 -83 -28 -100 -5
   -16 -18 -64 -29 -105 -26 -92 -72 -255 -107 -375 -34 -118 -38 -134 -67 -240
   -14 -49 -35 -124 -46 -165 -12 -41 -30 -107 -41 -146 -41 -150 -57 -176 -72
   -117 -4 15 -16 60 -27 98 -11 39 -47 167 -80 285 -34 118 -66 231 -72 250 -5
   19 -58 206 -117 415 l-108 380 -265 3 c-146 1 -268 -1 -272 -5z"/>
   </G>
   </Svg>
}