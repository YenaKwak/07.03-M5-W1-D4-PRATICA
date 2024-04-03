import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders the Welcome component correctly", () => {
  render(<Welcome />);
  const welcomeText = screen.getByText(/WELCOME! 어서오세요!/i);
  expect(welcomeText).toBeInTheDocument();
});
