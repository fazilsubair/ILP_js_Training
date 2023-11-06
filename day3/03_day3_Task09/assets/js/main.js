export const myNumber = [1, 2, 3, 4];
const animals = [`panda`, `brear`, `eagle`];
export function myLogger() {
  console.log(myNumber, animals);
}
export default function petsLogger(pets) {
  console.log(pets);
}
export { myNumber, myLogger as Logger };