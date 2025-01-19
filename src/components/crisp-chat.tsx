"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0749f730-b05b-42d8-aa6f-3e17ba462847")
  }, []);
  return null;
}