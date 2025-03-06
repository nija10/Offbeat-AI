function generateText(event){
  event.preventDefault();

  new Typewriter('#text', {
  strings: "otters hold hands while sleeping...",
  autoStart: true,
  delay:20,
  cursor:""
});

}

let aiFormElement=document.querySelector("#ai-form");
aiFormElement.addEventListener("submit", generateText)