import "../styles/globals.css";
import { providers, utils } from "ethers";
import { WebBundlr } from "@bundlr-network/client";
import { useState, useRef } from "react";

function MyApp({ Component, pageProps }) {
  async function initialize() {
    await window.ethereum.enable();
    const provider = new providers.Web3Provider(window.ethereum);
    await provider._ready();

    const bundlr = new WebBundlr(
      "https://node1.bundlr.network",
      "matic",
      provider
    );
    await bundlr.ready();
  }
  return (
    <div>
      <button onClick={initialize}>initialize</button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
