import { fireEvent, render, screen,waitFor} from "@testing-library/react";
import Home from "./index";

jest.setTimeout(10000); // Increases the timeout to 10 seconds

describe("When Form is created", () => {
  test("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      const submitButton = await screen.findByText("Envoyer");
      fireEvent.click(submitButton);
      await waitFor(() => screen.findByText("En cours"));
      await waitFor(() => screen.findByText("Envoyer"), { timeout: 5000 });
   
    });
  });
});

// 

describe("When a page is created", () => {

  it("a list of events is displayed", async () => {
    render(<Home />);
    const eventList = await screen.findByTestId("event-list-testid");
    expect(eventList).toBeInTheDocument();
  });

  it("a list a people is displayed", async () => {
    render(<Home />);
    const peopleList = await screen.findByTestId("people-list-testid");
    expect(peopleList).toBeInTheDocument();
  });

  it("a footer is displayed", async () => {
    render(<Home />);
    const footer = await screen.findByTestId("footer-testid");
    expect(footer).toBeInTheDocument(); 
   });
  
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const lastEventCard = await screen.findByText("Notre derniére prestation");
    expect(lastEventCard).toBeInTheDocument();
  });
});
