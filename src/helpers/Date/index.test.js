import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date ('2022-01-01');
            const month = getMonth(date);
            expect(month).toEqual('janvier');
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date ('2022-07-01');
            const month = getMonth(date);
            expect(month).toEqual('juillet');
        });
    });
})

//Dans ces tests, new Date('2022-01-01') et new Date('2022-07-08') créent des objets Date représentant respectivement le 1er janvier 2022 et le 8 juillet 2022. 
//La fonction getMonth est ensuite appelée avec ces objets date, 
//et les valeurs retournées sont comparées aux noms de mois français attendus en utilisant le comparateur expect().toEqual() de Jest.