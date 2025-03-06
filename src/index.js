function displayText(response){

  new Typewriter('#text', {
  strings: response.data.answer,
  autoStart: true,
  delay:20,
  cursor:""
});
}


function generateText(event){
  event.preventDefault();

  let instructionsInput=document.querySelector("#user-instructions")

  let apiKey="2a6oe4748bb5fftba3d905acff9c17d3";
  let context = "You are a witty and funny AI with knowledge about almost everything. Ensure the information is accurate. Share a fun fact about the given topic with a humorous twist. After the fact, insert a <br> element, then sign the poem with 'SheCodes AI' inside a <strong> element on a new line. Keep the fact concise and follow user instructions carefully.";
  let prompt=`User instructions are: Give a fun fact about ${instructionsInput.value}`;
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let textElement=document.querySelector("#text")
  textElement.classList.remove("hidden");
  textElement.innerHTML=`<div class="generating">⏳ Generating a fact about ${instructionsInput.value}...</div>`

  axios.get(apiUrl).then(displayText);

}

let aiFormElement=document.querySelector("#ai-form");
aiFormElement.addEventListener("submit", generateText)