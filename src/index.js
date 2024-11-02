function displayTrivia(response) {
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

  let triviaElement = document.querySelector("#trivia-question");
  triviaElement.classList.remove("hidden");
  triviaElement.innerHTML = `<div class="generating">⏳ Generating a trivia question about ${userCommand.value}...<div>`;

  axios.get(apiURL).then(displayTrivia);
}
let triviaGeneratorElement = document.querySelector("#trivia-generator");
triviaGeneratorElement.addEventListener("submit", generateTrivia);
