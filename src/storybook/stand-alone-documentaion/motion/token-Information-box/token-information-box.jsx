import { InformationBox } from "monday-ui-storybook-blocks";

export const TokenInformationBox = ({ className, videoSrc, title, description, tokenInfo, tokenDescription }) => {
  const TokenInformationBoxImg = videoSrc ? <video src={videoSrc} controls loop /> : null;

  return (
    <div className={className}>
      <InformationBox component={TokenInformationBoxImg} title={title} description={description} />
      {tokenInfo && <p>{tokenInfo}</p>}
      {tokenDescription && <p>Token: {tokenDescription}</p>}
    </div>
  );
};
