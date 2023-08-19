"use client";

import { useEffect } from "react";

const Preline: any = () => {
  useEffect(() => {
    import("preline");
  }, []);
};

export default Preline;
