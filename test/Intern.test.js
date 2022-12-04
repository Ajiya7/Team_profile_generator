const Intern = require("../lib/Intern");

describe('Intern', () => {

    it("Can set school through constructor argument", () => {
        const testValue = "UW";
        const E = new Intern("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
        expect(E.school).toBe(testValue);
    });

    describe("getRole", () => {
    it("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const E = new Intern("Faruk", 1, "Ajiyafaruk@gmail.com", "UW");
        expect(E.getRole()).toBe(testValue);
    })
    });

    describe("getSchool", () => {
        it("gets the interns school name through getSchool() ", () => {
            const testValue = 1;
            const E = new Intern("Faruk", 1, "Ajiyafaruk@gmail.com", testValue);
            expect(E.getSchool()).toBe(testValue);
        })
        });
})