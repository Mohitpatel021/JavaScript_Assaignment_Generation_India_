function removeSpace(strings) {
  const newString = strings.split(" ");
  return newString.join("");
}

const strings = "This is Mohit Patel  ";
console.log(removeSpace(strings));
