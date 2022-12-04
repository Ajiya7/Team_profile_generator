const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

    it("Can set github through constructor argument", () => {
        const testValue = "Ajiya7";
        const E = new Engineer("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
        expect(E.github).toBe(testValue);
    });

    describe("getRole", () => {
    it("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const E = new Engineer("Faruk", 1, "Ajiyafaruk@gmail.com", "Ajiya7");
        expect(E.getRole()).toBe(testValue);
    })
    });

    describe("getOffice", () => {
        it("gets the managers office number through getOfficeNumber() ", () => {
            const testValue = 1;
            const E = new Engineer("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
            expect(E.getGithub()).toBe(testValue);
        })
        });
})