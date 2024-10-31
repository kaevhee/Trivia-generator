function generateTrivia(event) {
  event.preventDefault();

  new Typewriter("#trivia-question", {
    strings: ["Which freezes faster: hot or cold water?"],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
let triviaGeneratorElement = document.querySelector("#trivia-generator");
triviaGeneratorElement.addEventListener("submit", generateTrivia);
