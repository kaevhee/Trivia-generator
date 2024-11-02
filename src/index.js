function displayTrivia(response) {
  console.log("Trivia question generated!");

  new Typewriter("#trivia-question", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateTrivia(event) {
  event.preventDefault();

  let userCommand = document.querySelector("#user-command");
  let apiKey = "0b6410a3b1bfe35o6c4e94f90d43bt09";
  let context =
    "You are knowledgeable about trivia question concerning any topic. please generate a thought provoking and short trivia question about any subject along with it's answer in <br>  and sign the trivia question with the origin in <strong>. make sure to follow the User guide below.";
  let prompt = `User guide: Generate a Trivia about ${userCommand.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating trivia...");
  console.log(prompt)
  console.log(context)
  axios.get(apiURL).then(displayTrivia);
}
let triviaGeneratorElement = document.querySelector("#trivia-generator");
triviaGeneratorElement.addEventListener("submit", generateTrivia);
