import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <Suspense fallback={null}>
      <Spline scene="https://prod.spline.design/g6O9bc5vNfmYYQmf/scene.splinecode" />
    </Suspense>
  );
}
