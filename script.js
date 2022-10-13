
document.getElementById('hablar').addEventListener("click",()=>{decir(document.getElementById("texto").value);
});


function decir(texto){
    if(texto != 0){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}else{
    speechSynthesis.speak(new SpeechSynthesisUtterance("Escribe algo"));
}

}