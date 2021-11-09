import React from "react";
import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";
import { isServer } from "lib/isServer";
import { useState } from "react";

export default function ManagerRegisterInfoPages() {
  const [decryptedURL, setDecryptedURL] = useState({});
  if (!isServer) {
    let cipherText = window.location.href.split("??")[1];
    let decryptText = CryptoAES.decrypt(
      cipherText,
      "lm3k123kl123kNJ#!#NJ!K#N!@K#Mxnamnx"
    );
    let decryptedAlready = decryptText.toString(CryptoENC);
    let decryptBySplit = decryptedAlready.split("?").join("=").split("=");
    setDecryptedURL({
      email: decryptBySplit[1],
      password: decryptBySplit[3],
    });
  }
  return (
    <>
      <p>Hello</p>
    </>
  );
}
