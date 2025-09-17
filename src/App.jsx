import React, { useState } from "react";
import GlamARDemo from "./GlamARDemo";

export default function App() {
  const [accessToken, setAccessToken] = useState("");
  const [appId, setAppId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (accessToken.trim().length < 10) {
      alert("Please enter a valid access token");
      return;
    }
    if (appId.trim().length < 10) {
      alert("Please enter a valid app id");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <div className="access-token-overlay">
          <div className="access-token-modal">
            <div className="access-token-icon">🔑</div>
            <h2>GlamAR SDK Access Required</h2>
            <p>Please enter your GlamAR SDK Access Token to continue.</p>
            <input
              type="text"
              placeholder="Enter your GlamAR SDK Access Token"
              value={accessToken}
              onChange={(token) => setAccessToken(token.target.value)}
            />
            <p>Please enter your Skin Analysis App ID to continue.</p>
            <input
              type="text"
              placeholder="Enter your Skin Analysis App ID"
              value={appId}
              onChange={(appid) => setAppId(appid.target.value)}
            />
            <button onClick={handleSubmit} disabled={!accessToken || !appId}>
              Initialize SDK
            </button>
          </div>
        </div>
      ) : (
        <GlamARDemo accessToken={accessToken} appId_={appId} />
      )}
    </>
  );
}
