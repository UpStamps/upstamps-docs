import * as React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UpStamps Documentation</title>
        <meta
          name="description"
          content="Simple feature flagging and toggle service"
        />
        {/* Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.upstamps.com/" />
        <meta property="og:title" content="Upstamps" />
        <meta
          property="og:description"
          content="Simple feature flagging and toggle service"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.upstamps.com/" />
        <meta property="twitter:title" content="UpStamps" />
        <meta
          property="twitter:description"
          content="Simple feature flagging and toggle service"
        />
        <meta property="twitter:image" content="" />

        <link
          rel="icon"
          type="image/jpg"
          href="https://dev.upstamps.com/imgs/logo.jpg"
        />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Wrapper;
