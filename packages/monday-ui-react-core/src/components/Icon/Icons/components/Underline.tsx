/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UnderlineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Underline: React.FC<UnderlineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M5 1.96428C5.41421 1.96428 5.75 2.30007 5.75 2.71428V10.1428C5.75 11.2321 6.18272 12.2768 6.95295 13.047 7.72319 13.8173 8.76786 14.25 9.85714 14.25 10.3965 14.25 10.9306 14.1438 11.4289 13.9374 11.9272 13.731 12.38 13.4284 12.7613 13.047 13.1427 12.6657 13.4452 12.2129 13.6516 11.7146 13.8581 11.2163 13.9643 10.6822 13.9643 10.1428V2.71428C13.9643 2.30007 14.3001 1.96428 14.7143 1.96428 15.1285 1.96428 15.4643 2.30007 15.4643 2.71428V10.1428C15.4643 10.8792 15.3193 11.6083 15.0375 12.2886 14.7557 12.9689 14.3427 13.587 13.822 14.1077 13.3013 14.6284 12.6832 15.0414 12.0029 15.3232 11.3226 15.605 10.5935 15.75 9.85714 15.75 8.37004 15.75 6.94384 15.1592 5.89229 14.1077 4.84075 13.0562 4.25 11.63 4.25 10.1428V2.71428C4.25 2.30007 4.58579 1.96428 5 1.96428zM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H16.5714C16.9856 16.25 17.3214 16.5858 17.3214 17 17.3214 17.4142 16.9856 17.75 16.5714 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17z"
      />
    </g>
  </svg>
);
Underline.displayName = 'Underline';
export default Underline;
/* tslint:enable */
/* eslint-enable */
