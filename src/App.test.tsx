import React from "react";
import { findAllByText, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("All table column name should display correctly", () => {
  render(<App />);
  const titleColumn = screen.getByText("Title");
  const createdAtColumn = screen.getByText("Created_at");
  const urlColumn = screen.getByText("Url");
  const authorColumn = screen.getByText("Author");

  expect(titleColumn).toBeInTheDocument();
  expect(createdAtColumn).toBeInTheDocument();
  expect(urlColumn).toBeInTheDocument();
  expect(authorColumn).toBeInTheDocument();
});

test("Details button should display", async () => {
  render(<App />);
  const arr = await screen.findAllByText(/Details/i);

  expect(arr.length).toBe(20);
});
