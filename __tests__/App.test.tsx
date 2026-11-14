import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("UnterSous mobile entry point", () => {
  it("renders the application name", () => {
    const { getByText } = render(<App />);
    expect(getByText("UnterSous")).toBeTruthy();
  });
});
