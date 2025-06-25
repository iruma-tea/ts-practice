{
type TypeA = { name: string };
type TypeB = { age: number };
type TypeC = { isAdult: boolean };

// combinedType型はメンバーである型をすべて同時に満たす型
type CombinedType = TypeA & TypeB & TypeC;
}