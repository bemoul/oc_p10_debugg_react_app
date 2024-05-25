/**
 * 
 */

import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            expect(getMonth(new Date('2022-01-01'))).toBe("janvier")
        });
        it("the function return février for 2022-02-01 as date", () => {
            expect(getMonth(new Date('2022-02-01'))).toBe("février")
        });
        it("the function return mars for 2022-03-01 as date", () => {
            expect(getMonth(new Date('2022-03-01'))).toBe("mars")
        });
        it("the function return avril for 2022-04-01 as date", () => {
            expect(getMonth(new Date('2022-04-01'))).toBe("avril")
        });
        it("the function return mai for 2022-05-01 as date", () => {
            expect(getMonth(new Date('2022-05-01'))).toBe("mai")
        });
        it("the function return juin for 2022-06-01 as date", () => {
            expect(getMonth(new Date('2022-06-01'))).toBe("juin")
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            expect(getMonth(new Date('2022-07-08'))).toBe("juillet")
        });
        it("the function return août for 2022-08-01 as date", () => {
            expect(getMonth(new Date('2022-08-01'))).toBe("août")
        })
        it("the function return septembre for 2022-09-01 as date", () => {
            expect(getMonth(new Date('2022-09-01'))).toBe("septembre")
        })
        it("the function return octobre for 2022-10-01 as date", () => {
            expect(getMonth(new Date('2022-10-01'))).toBe("octobre")
        })
        it("the function return novembre for 2022-11-01 as date", () => {
            expect(getMonth(new Date('2022-11-01'))).toBe("novembre")
        })
        it("the function return décembre for 2022-12-01 as date", () => {
            expect(getMonth(new Date('2022-12-01'))).toBe("décembre")
        });
        it("the function returns undefined for an invalid date", () => {
            expect(getMonth(new Date('invalid-date'))).toBeUndefined();
        });
    });
})

