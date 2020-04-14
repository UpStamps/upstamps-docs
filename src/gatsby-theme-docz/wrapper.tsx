import * as React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UpStamps Documentation</title>
        <link
          rel="icon"
          type="image/png"
          href="https://avatars.dicebear.com/v2/male/dd.svg"
        />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Wrapper;
