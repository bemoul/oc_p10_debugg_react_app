import { render, screen } from "@testing-library/react";
import Icon from ".";

describe("Icon component", () => {
  const renderIcon = (name) => {
      render(<Icon name={name} />);
  };

  it("renders the twitch icon correctly", () => {
      renderIcon("twitch");
      expect(screen.getByTestId("icon-twitch")).toBeInTheDocument();
  });

  it("renders the facebook icon correctly", () => {
      renderIcon("facebook");
      expect(screen.getByTestId("icon-facebook")).toBeInTheDocument();
  });

  it("renders the twitter icon correctly", () => {
      renderIcon("twitter");
      expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
  });

  it("renders the youtube icon correctly", () => {
      renderIcon("youtube");
      expect(screen.getByTestId("icon-youtube")).toBeInTheDocument();
  });

  it("renders the close icon correctly", () => {
      renderIcon("close");
      expect(screen.getByTestId("icon-close")).toBeInTheDocument();
  });
});