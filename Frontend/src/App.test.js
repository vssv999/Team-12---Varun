import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

test("Footer not rendering", () => {
  render(<Footer />);
  expect(screen.getByTestId("footer"));
});

test("HomeScreen not rendering", () => {
  render(<HomeScreen />);
  expect(screen.find.getByTestId("homescreen", { exact: false }));
});

test("HomeScreen not rendering", () => {
  render(<ProductScreen />);
  expect(screen.find.getByTestId("productdetails", { exact: false }));
});
