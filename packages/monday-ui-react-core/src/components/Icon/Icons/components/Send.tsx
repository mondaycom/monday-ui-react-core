/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SendProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Send: React.FC<SendProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.2377 2.30226C15.8835 2.21877 15.513 2.23558 15.1678 2.35081L15.1673 2.35099L3.58774 6.21048L3.58774 6.21048L3.58599 6.21106C3.27005 6.31723 2.9864 6.50219 2.76182 6.74848C2.53725 6.99476 2.37917 7.29424 2.30253 7.61861C2.22589 7.94298 2.23322 8.28153 2.32381 8.60228C2.41441 8.92304 2.58529 9.21539 2.8203 9.45174L2.8215 9.45294L5.54557 12.18L5.45407 15.5893C5.44694 15.8549 5.58079 16.1044 5.80597 16.2453C6.03115 16.3862 6.31406 16.3974 6.54974 16.2749L8.5835 15.2176L10.5443 17.1758L10.5447 17.1762C10.7809 17.4122 11.0735 17.5841 11.3947 17.6753C11.7161 17.7667 12.0555 17.7743 12.3807 17.6976C12.7059 17.6209 13.0061 17.4624 13.2528 17.237C13.4995 17.0117 13.6845 16.727 13.7903 16.4101L13.7904 16.4097L17.6466 4.83031L16.866 4.04952L16.8664 4.04923L17.6468 4.8296C17.762 4.48445 17.7788 4.11404 17.6953 3.75988C17.6118 3.40548 17.4312 3.08136 17.1737 2.82389C17.1495 2.79966 17.1247 2.77612 17.0993 2.75327C17.0901 2.74479 17.0808 2.73656 17.0714 2.72861C16.8325 2.52166 16.5466 2.37507 16.2377 2.30226ZM15.8013 2.98426L15.1678 2.35081L15.8012 2.98436L15.8013 2.98426ZM14.3292 4.21145L4.06379 7.63293L4.06316 7.63314C3.98921 7.65811 3.92281 7.70147 3.87021 7.75915C3.81747 7.817 3.78034 7.88734 3.76234 7.96352C3.74434 8.03971 3.74606 8.11922 3.76734 8.19456C3.78856 8.26969 3.82854 8.33819 3.88351 8.39363L3.88395 8.39407L6.35018 10.863L14.3292 4.21145ZM7.04458 12.237L6.98769 14.3567L8.37891 13.6334C8.66904 13.4826 9.02344 13.5371 9.25482 13.7682L11.6046 16.1148L11.605 16.1151C11.6605 16.1706 11.7293 16.211 11.8047 16.2325C11.8802 16.2539 11.9599 16.2557 12.0363 16.2377C12.1127 16.2197 12.1832 16.1824 12.2411 16.1295C12.2991 16.0766 12.3425 16.0097 12.3674 15.9353L16.1179 4.67314L7.04458 12.237Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Send.displayName = 'Send';
export default Send;
/* tslint:enable */
/* eslint-enable */
