import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders the welcome message correctly", () => {
  render(<Welcome />);
  const welcomeMessageElement = screen.getByText(/WELCOME! 어서오세요!/i);

  expect(welcomeMessageElement).toBeInTheDocument();
});
