"use client";

import Promotions from "./components/Promotions";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";

export default async function Home() {
  return (
    <>
      <LandingPage />
      <Promotions />
      <Products />
    </>
  );
}
