import * as React from "react";
import { Helmet } from "react-helmet-async";
import "./global.css";

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

        <script
          data-mode="hash"
          async
          defer
          src="https://cdn.simpleanalytics.io/hello.js"
        ></script>
        <noscript>
          {`<img src="https://api.simpleanalytics.io/hello.gif" alt="" />`}
        </noscript>

        <script>
          {`window.customerlySettings = {
            app_id: "a0224227"
          };`}
        </script>
        <script src="https://widget-ga.customerly.io/launcher.js"></script>
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Wrapper;
