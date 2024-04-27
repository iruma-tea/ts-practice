{
    type CalcFunction = (n1: number, n2: number) => number;

    interface CalcInterface {
        (n1: number, n2: number): number;
    }

    const add: CalcFunction = (n1, n2) => n1 + n2;
    const subract: CalcInterface = (n1, n2) => n1 - n2;
}