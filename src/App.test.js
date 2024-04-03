import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the welcome message correctly", () => {
  render(<App />);
  const welcomeMessageElement = screen.getByText(/WELCOME! 어서오세요!/i);
  expect(welcomeMessageElement).toBeInTheDocument();
});
