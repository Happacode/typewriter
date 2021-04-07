const sentence = "hello there from lighthouse labs";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
        // print the char here
    process.stdout.write(char);
  }, timer += 50) // <= 1s delay to make it noticeable. Can dial it down later.
};
setTimeout(() => {
  process.stdout.write("\n");
}, timer)


// let timer = 0;
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence.charAt(i));
//   }, timer += 50)
// };