const Manager = require("../lib/Manager");

describe('Manager', () => {

    it("Can set office number through constructor argument", () => {
        const testValue = 1;
        const E = new Manager("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
        expect(E.officeNumber).toBe(testValue);
    });

    describe("getRole", () => {
    it("getRole() should return \"Manager\"", () => {
        const testValue = "Manager";
        const E = new Manager("Faruk", 1, "Ajiyafaruk@gmail.com", 100);
        expect(E.getRole()).toBe(testValue);
    })
    });

    describe("getOffice", () => {
        it("gets the managers office number through getOfficeNumber() ", () => {
            const testValue = 1;
            const E = new Manager("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
            expect(E.getOfficeNumber()).toBe(testValue);
        })
        });
})