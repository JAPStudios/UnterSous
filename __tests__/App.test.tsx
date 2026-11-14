import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import App from "../App";

describe("UnterSous mobile information app", () => {
  it("shows the service overview by default", () => {
    const { getByText } = render(<App />);

    expect(getByText("Mobility that works for people.")).toBeTruthy();
    expect(getByText("Drivers are paid by UnterSous")).toBeTruthy();
  });

  it("navigates to passenger and delivery service information", () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("Services"));

    expect(getByText("Transportation and delivery")).toBeTruthy();
    expect(getByText("Qualifying medical journeys")).toBeTruthy();
    expect(getByText("Qualifying legal journeys")).toBeTruthy();
    expect(getByText("Delivery services")).toBeTruthy();
  });

  it("navigates to licensing and driving opportunity information", () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("Driving"));

    expect(getByText("A path toward paid driving work")).toBeTruthy();
    expect(getByText("Licensing support")).toBeTruthy();
    expect(getByText("Direct payment by UnterSous")).toBeTruthy();
  });
});
