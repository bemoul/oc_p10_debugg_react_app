import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const eventList = screen.getByTestId("eventcard-test");
    const cardElement = screen.getByTestId("eventcard-test");
    expect(eventList).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    const peopleList = screen.getByTestId("people-list");
    expect(peopleList).toBeInTheDocument();
    expect(screen.getByText("CEO"));
    expect(screen.getByText("Directeur marketing"));
    expect(screen.getByText("CXO"));
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    const footerTest = screen.getByTestId("footer-testid");
    expect(footerTest).toBeInTheDocument();
    expect(screen.getByText("Notre dernière prestation"));
    expect(screen.getByText("Contactez-nous"));
  });
  it("an event card, with the last event, is displayed", async () => {
    //
  });
});
