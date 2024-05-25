import { render, screen } from "@testing-library/react";
import Icon from "../Icon";

describe("Icon component", () => {
    const renderIcon = (name) => {
        render(<Icon name={name} />);
    };

    it("renders the twitch icon correctly", () => {
        renderIcon("twitch");
        expect(screen.getByTestId("icon-twitch")).toBeInTheDocument();
        expect(screen.getByTestId("icon-twitch")).toHaveAttribute('data-testid', 'icon-twitch');
    });

    it("renders the facebook icon correctly", () => {
        renderIcon("facebook");
        expect(screen.getByTestId("icon-facebook")).toBeInTheDocument();
        expect(screen.getByTestId("icon-facebook")).toHaveAttribute('data-testid', 'icon-facebook');
    });

    it("renders the twitter icon correctly", () => {
        renderIcon("twitter");
        expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
        expect(screen.getByTestId("icon-twitter")).toHaveAttribute('data-testid', 'icon-twitter');
    });

    it("renders the youtube icon correctly", () => {
        renderIcon("youtube");
        expect(screen.getByTestId("icon-youtube")).toBeInTheDocument();
        expect(screen.getByTestId("icon-youtube")).toHaveAttribute('data-testid', 'icon-youtube');
    });
});
