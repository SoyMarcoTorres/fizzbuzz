const Reader = require("./../../lib/utils/Reader");

describe("Prueba unitaria para Readre", () => {
    test("1) Impirme una lista de objetos de los explorers de package.json", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        
        expect(explorers).not.toBeUndefined();
    });
});