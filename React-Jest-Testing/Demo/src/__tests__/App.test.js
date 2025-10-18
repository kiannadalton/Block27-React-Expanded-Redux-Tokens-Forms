/**
 * @jest-environment jsdom
 */
//imports
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

/**
 * What are some tests we could write for our application?
 *
 * - check if completed aka strike through on click
 * - check if data loads list
 * - check if title exists
 */

describe("App Component", () => {
  test("Displays title", () => {
    // render the app
    render(<App />);
    // get the title
    const title = screen.getByRole("heading", {
      name: /To Do List/i,
    });

    // expect it to be in document
    expect(title).toBeInTheDocument();
  });

  test("displays the tasks", () => {
    // render the component
    render(<App />);

    // get the tasks
    const task = screen.getByText("Start Block 27A Workshop");
    // expect it to be in document
    expect(task).toBeInTheDocument();
  });

  test("User can complete a task", () => {
    //r ender test
    render(<App />);
    // get a task
    let task = screen.getByText("Start Block 27A Workshop");

    // check it starts off not completed
    expect(task).not.toHaveClass("complete");

    // "clicks" on the task
    fireEvent.click(task);

    // pull task again to check it
    task = screen.getByText("Start Block 27A Workshop");

    // expect it to HAVE the class
    expect(task).toHaveClass("complete");
  });
});
