import React, { useState } from "react";
import "../css/Header.css";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";

export default function Header() {
  return (
    <div className=" border-b">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
