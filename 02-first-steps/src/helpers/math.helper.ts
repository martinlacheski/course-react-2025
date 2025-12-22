

export const addition = (a: number, b: number) => a + b;

export const substraction = (a: number, b: number) => a - b;

export const multiplication = (a: number, b: number) => a * b;

export const division = (a: number, b: number) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
