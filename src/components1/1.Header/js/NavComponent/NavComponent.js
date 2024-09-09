import React from "react";
import Product from "../NavLinks/Product";
import Pages from "../NavLinks/Pages";
import Collection from "../NavLinks/Collection";
import Medical from "../NavLinks/Medical";

export default function NavComponent({ details, index }) {
  return (
    <div>
      {index === 0 ? (
        <Product details={details} />
      ) : index === 1 ? (
        <Medical details={details} />
      ) : index === 3 ? (
        <Pages details={details} />
      ) : index === 4 ? (
        <Collection details={details} />
      ) : (
        ""
      )}
    </div>
  );
}
