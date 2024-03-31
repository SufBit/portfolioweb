import React from 'react';

const OvalPicture = ({ src, alt }) => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip">
          <ellipse cx="100" cy="50" rx="100" ry="50" />
        </clipPath>
      </defs>
      <image
        clipPath="url(#clip)"
        xlinkHref={src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        alt={alt}
      />
    </svg>
  );
};

export default OvalPicture;
