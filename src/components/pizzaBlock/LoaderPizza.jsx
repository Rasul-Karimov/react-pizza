import React from "react";
import ContentLoader from "react-content-loader";
const LoaderPizza = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="449" cy="296" r="8" />
      <circle cx="141" cy="136" r="125" />
      <rect x="4" y="300" rx="0" ry="0" width="310" height="86" />
      <rect x="133" y="399" rx="21" ry="21" width="146" height="48" />
      <rect x="26" y="409" rx="0" ry="0" width="68" height="31" />
      <rect x="59" y="413" rx="0" ry="0" width="0" height="1" />
      <rect x="5" y="273" rx="0" ry="0" width="272" height="16" />
    </ContentLoader>
  );
};

export default LoaderPizza;
