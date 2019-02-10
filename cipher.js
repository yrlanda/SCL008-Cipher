window.cipher = {
  encode: (offset, mensaje) => {

    //aca declaro función para cifrar

    let cipher_message = '';

    for (let i = 0; i < mensaje.length; i++) {
      let ascii_char = mensaje.charCodeAt(i);

      //si se cumple la condicion para las letras  minuscúlas en el código ascii se aplica formula de Michell
      if (ascii_char >= 97 && ascii_char <= 122) {
        ascii_char = ((ascii_char - 97 + offset) % 26) + 97;
      }


      //si se cumple la condicion para las letras  mayuscúlas en el código ascii se aplica formula de Michell
      if (ascii_char >= 65 && ascii_char <= 90) {
        ascii_char = ((ascii_char - 65 + offset) % 26) + 65;
      }

      //si se cumple la condicion para los números en el código ascii se aplica formula de Michell
      if (ascii_char >= 48 && ascii_char <= 57) {
        ascii_char = ((ascii_char - 48 + offset) % 10) + 48;
      }

      //si se cumple la condicion para los caracteres especiales en el código ascii se aplica formula de Michell
      if (ascii_char >= 32 && ascii_char <= 47) {
        ascii_char = ((ascii_char - 32 + offset) % 16) + 32;
      }
      //si se cumple la condicion para los caracteres especiales en el código ascii se aplica formula de Michell
      if (ascii_char >= 58 && ascii_char <= 64) {
        ascii_char = ((ascii_char - 58 + offset) % 7) + 58;
      }


      cipher_message = cipher_message + String.fromCharCode(ascii_char);

    }

    return cipher_message;

  },
  decode: (offset, mensaje) => {
    // Acá declaro función para descifrar

    let decipher_tex = '';


    for (let i = 0; i < mensaje.length; i++) {

      let ascii_char = mensaje.charCodeAt(i);

      //si se cumple la condicion para las letras  minuscúlas en el código ascii se aplica formula de Michell

      if (ascii_char >= 97 && ascii_char <= 122) {

        ascii_char = ((ascii_char - 122 - offset) % 26) + 122;
      }

      //si se cumple la condicion para las letras  mayuscúlas en el código ascii se aplica formula de Michell

      if (ascii_char >= 65 && ascii_char <= 90) {
        ascii_char = ((ascii_char - 90 - offset) % 26) + 90;
      }

      //si se cumple la condicion para los números en el código ascii se aplica formula de Michell

      if (ascii_char >= 48 && ascii_char <= 57) {
        ascii_char = ((ascii_char - 57 - offset) % 10) + 57;
      }

      //si se cumple la condicion para los caracteres especiales en el código ascii se aplica formula de Michell

      if (ascii_char >= 32 && ascii_char <= 47) {
        ascii_char = ((ascii_char - 47 - offset) % 16) + 47;
      }

      //si se cumple la condicion para los caracteres especiales en el código ascii se aplica formula de Michell

      if (ascii_char >= 58 && ascii_char <= 64) {
        ascii_char = ((ascii_char - 64 - offset) % 7) + 64;
      }

      //con el metodo de String.fromCharCode obtengo la letra o el caracer del Código Ascii

      decipher_tex = decipher_tex + String.fromCharCode(ascii_char);

    }

    return decipher_tex;

  }

}
