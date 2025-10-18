/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

// This test case is provided for you. Reference this test case
// to complete the following one!
test("Checkbox initially renders as off", () => {
  const { queryByLabelText } = render(<Checkbox labelOn="On" labelOff="Off" />);
  expect(queryByLabelText(/off/i)).toBeTruthy();
});

// TODO: Complete this test!
test("Checkbox toggles between labels when clicked", () => {
  // 1. Render the component with "On" and "Off" as the labels.
  // 2. Expect the label to be "Off" initially.
  // 3. Click the checkbox by using `fireEvent.click` and `getByLabelText`.
  // 4. Expect the label to be "On" after the click event.
  // 5. Click the checkbox again.
  // 6. Expect the label to be "Off" again.
});
