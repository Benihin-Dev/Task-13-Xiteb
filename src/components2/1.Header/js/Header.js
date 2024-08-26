import React from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import MiddlwSection from "./MiddleSection";

export default function Header() {
  return (
    <div className=" border-b">
      <TopSection />
      <MiddlwSection />
      <BottomSection />
    </div>
  );
}
