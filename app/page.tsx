"use client";

import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Work />
      {/* <h1>Hello World</h1> */}
    </>
  );
}
