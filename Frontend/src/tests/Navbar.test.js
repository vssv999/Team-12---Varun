import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import NavBarComps from "../components/Navbar";
import SearchBox from "../components/SearchBox";

// test("Navbar should render", () => {
//   render(<NavBarComps />);
//   expect(screen.findAllByRole("div"));
// });

test("should render search", () => {
  render(<SearchBox />);
  expect(screen.getByTestId("search"));
});
