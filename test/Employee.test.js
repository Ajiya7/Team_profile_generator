const Employee = require("../lib/Employee");

describe('Employee', () => {

    it("Can instantiate Employee instance", () => {
        const E = new Employee();
        expect(typeof(E)).toBe("object");
    });

    it("Can set name through constructor arguments", () => {
        const testvalue = "Faruk";
        const E = new Employee(testvalue);
        expect(E.name).toBe(testvalue);
    });

    it("Can set id through constructor argument", () => {
        const testValue = 1;
        const E = new Employee("Faruk", testValue);
        expect(E.id).toBe(testValue);
    });

    it("Can set email through constructor argument", () => {
        const testValue = "Ajiyafaruk@gmail.com";
        const E = new Employee("Faruk", 1, testValue);
        expect(E.email).toBe(testValue);
    });

    describe("getName", () => {
        it("gets employee name through getName()", () => {
            const testValue = "Faruk";
            const E = new Employee(testValue);
            expect(E.getName()).toBe(testValue);
        })
    });
        
    describe("getId", () => {
        it("gets employee ID through geId()", () => {
            const testValue = 1;
            const E = new Employee("Faruk", testValue);
            expect(E.getId()).toBe(testValue);
        })
    });
        
    describe("getEmail", () => {
        it("gets employee email through getEmail()", () => {
            const testValue = "Ajiyafaruk@gmail.com";
            const E = new Employee("Faruk", 1, testValue);
            expect(E.getEmail()).toBe(testValue);
        })
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const E = new Employee("Faruk", 1, "Ajiyafaruk@gmail.com");
            expect(E.getRole()).toBe(testValue);
        })
    });
})