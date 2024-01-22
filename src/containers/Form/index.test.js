import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";


//test unitaire car il se concentre sur le rendu initial du composant Form sans interaction avec d'autres composants
jest.setTimeout(10000); // Increases the timeout to 10 seconds
describe("When Form is created", () => {
  it("a list of information is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  // test d'intégration car il simule une interaction utilisateur et vérifie l'invocation d'une fonction de rappel
  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"), // classe "button-test-id" sur Form.js
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await waitFor(() => screen.findByText("En cours"));
      await waitFor(() => screen.findByText("Envoyer"), { timeout: 5000 });
      
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
