/* Acá va tu código */
window.onload = () => {
   
    const difficulty = document.getElementById("difficulty");
    const textEncode = document.getElementById("txtEncode");
    const btn_codificar = document.getElementById("codificar");
    const btn_decodificar = document.getElementById("decodificar");
    const text_webcode = document.getElementById("txt_webcode");
    const btn_clear = document.getElementById("btn_clear");
     



    btn_codificar.addEventListener("click", () => {
        let offset = parseInt(difficulty.value);
        let text_usuario = textEncode.value;
        let text_encoded = window.cipher.encode(offset, text_usuario);
        text_webcode.value = text_encoded; 

    })

    btn_clear.addEventListener("click", () =>{
        difficulty.value = "";
        textEncode.value = "";
        text_webcode.value = "";


    })


    btn_decodificar.addEventListener("click", () => {
        let offset = parseInt(difficulty.value);
        let text_usuario = textEncode.value;
        let text_decoded = window.cipher.decode(offset, text_usuario);
        text_webcode.value = text_decoded; 

    })

    
}