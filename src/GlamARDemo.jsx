import React, { useEffect } from "react";
import * as GlamAR from "@glamario/core-web";

export default function GlamARDemo({ accessToken, appId_ }) {
  useEffect(() => {
    const config = {
      platform: "web",
      meta: { sdkVersion: "2.0.0" },
      category: "skinanalysis",
      configuration: {
        skinAnalysis: {
          appId: appId_, //replace with your actual app id
        },
      },
    };

    GlamAR.init("container__frame_wrapper", accessToken, config);
    GlamAR.addEventListener("*", eventHandler);

    return () => {
      if (GlamAR && typeof GlamAR.destroy === "function") {
        GlamAR.destroy();
      }
    };
  }, [accessToken]);

  const onCategoryClick = () => {
    GlamAR.applyByCategory("sunglasses");
  };
  const onResetClick = () => {
    GlamAR.reset();
  };
  const onSnapShotClick = () => {
    GlamAR.snapshot();
  };

  const eventHandler = (e) => {
    console.log("handle all your action based on the event", e);

    switch (e) {
      case "loaded":
        //fired when sdk is loaded
        break;
      case "sku-applied":
        //fired desired sku is applied
        break;
    }
  };

  return (
    <>
      <div id="container__frame_wrapper" />
    </>
  );
}
