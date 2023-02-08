import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="-8" rx="3" ry="3" width="96" height="48" />
    <rect x="22" y="45" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="94" height="6" />
    <rect x="0" y="69" rx="3" ry="3" width="103" height="7" />
    <rect x="0" y="87" rx="3" ry="3" width="37" height="5" />
    <rect x="12" y="15" rx="0" ry="0" width="1" height="2" />
  </ContentLoader>
);

export default Skeleton;
