"use client";

import { useEffect } from "react";

const Preline: any = () => {
  return useEffect(() => {
    import("preline");
  }, []);
};

export default Preline;
