import React from 'react';

const PowerUpOutputType = ({
  children, contextPath, deployment, CssLinks, Fusion, Libs, MetaTags,
}) => (
  <html>
    <head>
      <title>Power-Up Page</title>
      <MetaTags />
      <Libs />
      <CssLinks />
      <link rel="icon" type="image/x-icon" href={deployment(`${contextPath}/resources/favicon.ico`)} />
    </head>
    <body>
      <div id="fusion-app">{children}</div>
      <Fusion />
    </body>
  </html>
);

export default PowerUpOutputType;
