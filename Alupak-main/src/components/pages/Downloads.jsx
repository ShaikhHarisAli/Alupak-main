import React from "react";
import {
  DownloadsBanner,
  DownloadsUsefulLinks,
  Downloadsbottom,
} from "../index";

const Downloads = () => {
  return (
    <React.Fragment>
      <DownloadsBanner />
      <DownloadsUsefulLinks />
      <Downloadsbottom />
    </React.Fragment>
  );
};

export default Downloads;
