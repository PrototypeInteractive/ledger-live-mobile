// @flow

import React from "react";
import Svg, { Path } from "react-native-svg";

const MoonPay = ({ size }: { size: number }) => (
  <Svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H38.5C44.0229 0 48.5 4.47715 48.5 10V38C48.5 43.5229 44.0228 48 38.5 48H10.5C4.97715 48 0.5 43.5228 0.5 38V10Z"
      fill="white"
    />
    <Path
      d="M10.1035 26.0021C10.1343 25.8835 10.1584 25.7632 10.1756 25.6419C10.5736 20.8739 13.9471 16.8642 18.5921 15.7799C22.3924 14.8936 25.7965 15.7799 28.698 18.4044C30.5335 20.052 31.7426 22.2839 32.1201 24.7214C32.5098 27.0212 32.1653 29.3853 31.1356 31.4782C30.1059 33.5711 28.4433 35.2866 26.3836 36.3811C25.187 37.0214 23.8797 37.4285 22.5311 37.5807C22.351 37.6024 22.1709 37.6294 22.0016 37.6546H20.3986C20.3464 37.642 20.2959 37.6258 20.2455 37.6186C19.7664 37.5465 19.2801 37.5033 18.8046 37.3988C16.4978 36.8832 14.4161 35.6439 12.8632 33.8617C11.3102 32.0795 10.3673 29.8477 10.172 27.4918C10.1557 27.3703 10.1316 27.25 10.0999 27.1315L10.1035 26.0021Z"
      fill="#7D00FF"
    />
    <Path
      d="M35.2808 10.358L35.6411 10.4337C36.4754 10.5818 37.24 10.9945 37.8216 11.6109C38.4032 12.2273 38.7709 13.0145 38.8704 13.8561C38.9941 14.8646 38.7257 15.8821 38.1207 16.6984C37.5157 17.5147 36.6203 18.0673 35.6194 18.2422C34.617 18.4089 33.5889 18.1841 32.7475 17.6141C31.9062 17.0442 31.3159 16.1728 31.0987 15.18C30.9854 14.6708 30.9738 14.1442 31.0645 13.6305C31.1552 13.1168 31.3465 12.626 31.6273 12.1864C31.908 11.7468 32.2729 11.3669 32.7008 11.0686C33.1287 10.7703 33.6113 10.5594 34.1209 10.4481L34.6018 10.3454L35.2808 10.358Z"
      fill="#7D00FF"
    />
    <Path
      d="M10.5 1H38.5V-1H10.5V1ZM47.5 10V38H49.5V10H47.5ZM38.5 47H10.5V49H38.5V47ZM1.5 38V10H-0.5V38H1.5ZM10.5 47C5.52944 47 1.5 42.9706 1.5 38H-0.5C-0.5 44.0751 4.42487 49 10.5 49V47ZM47.5 38C47.5 42.9706 43.4706 47 38.5 47V49C44.5751 49 49.5 44.0751 49.5 38H47.5ZM38.5 1C43.4706 1 47.5 5.02944 47.5 10H49.5C49.5 3.92487 44.5751 -1 38.5 -1V1ZM10.5 -1C4.42487 -1 -0.5 3.92487 -0.5 10H1.5C1.5 5.02944 5.52944 1 10.5 1V-1Z"
      fill="black"
      fillOpacity="0.06"
    />
  </Svg>
);

export default MoonPay;
