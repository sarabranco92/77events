import { render, screen } from "@testing-library/react";
import ModalEvent from "./index";

const data = {
  type: "soirée entreprise",
  date: "2022-04-29T20:28:45.744Z",
  title: "Conférence #productCON",
  cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
  description:
    "Présentation des outils analytics aux professionnels du secteur",
  nb_guesses: 1300,
  periode: " ",
  prestations: [
    "1 espace d’exposition",
    "1 scéne principale",
    "2 espaces de restaurations",
    "1 site web dédié",
  ],
};
describe("When Modal data is created", () => {
  it("a list of mandatory data is displayed", async () => {
    render(<ModalEvent event={data} />);
    await screen.findByText(data.title);
    await screen.findByText(data.description);

    // Use forEach to iterate over prestations array
    data.prestations.forEach(async (prestation) => {
      await screen.findByText(prestation);
    });
  });
});