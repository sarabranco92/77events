import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

describe("Icon component", () => {
    describe("When a icon is created with name twitch", () => {
        it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
            render(<Icon name="twitch" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a')
        });
    });

    describe("When a icon is created with name facebook", () => {
        it("the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
            render(<Icon name="facebook" />);
      expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('bbea4c9e40773b969fdb6e406059f853')
        });
    });
})

//Dans ce test complet :

//1. je rendre le composant Icon avec le nom "facebook".
//2. je utilize md5 pour calculer la valeur de hash de l'attribut d de l'élément chemin SVG à l'intérieur du composant Icon rendu.
//3. je attend à ce que la valeur de hash calculée corresponde à la valeur de hachage attendue pour l'icône "facebook".

//Ce test garantit que l'icône "facebook" génère le chemin SVG correct avec la valeur de hachage spécifiée.w
