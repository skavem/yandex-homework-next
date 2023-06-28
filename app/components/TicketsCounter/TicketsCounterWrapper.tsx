"use client";

import { Providers } from "@/app/redux/Provider";
import React from "react";
import TicketsCounter from "./TicketsCounter";

const TicketsCounterWrapper: typeof TicketsCounter = (props) => {
  return (
    <Providers>
      <TicketsCounter {...props} />
    </Providers>
  );
};

export default TicketsCounterWrapper;
