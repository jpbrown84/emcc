

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";
import Title from "../title";

test("element exists", () => {
  const { queryByTestId } = render(<Title text="test" />);
  expect(queryByTestId("title")).toBeTruthy();
});

test("should render title text when prop passed", () => {
  const { queryByTestId } = render(<Title text="foo" />);
  expect(queryByTestId("title-title")).toBeTruthy();
});

test("should render subtitle text when prop passed", () => {
  const { queryByTestId } = render(<Title text="foo" subText="bar" />);
  expect(queryByTestId("title-subtitle")).toBeTruthy();
});

test("should not render subtitle text when prop not passed", () => {
  const { queryByTestId } = render(<Title text="foo" />);
  expect(queryByTestId("title-subtitle")).toBeFalsy();
});
