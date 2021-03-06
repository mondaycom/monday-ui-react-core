/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ShortText = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 7.25C2.58579 7.25 2.25 7.58579 2.25 8C2.25 8.41421 2.58579 8.75 3 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H3ZM3 10.9424C2.58579 10.9424 2.25 11.2782 2.25 11.6924C2.25 12.1066 2.58579 12.4424 3 12.4424H8.38462C8.79883 12.4424 9.13462 12.1066 9.13462 11.6924C9.13462 11.2782 8.79883 10.9424 8.38462 10.9424H3Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ShortText.displayName = 'ShortText';
ShortText.propTypes = {
  size: PropTypes.string
}
export default ShortText;
/* tslint:enable */
/* eslint-enable */
