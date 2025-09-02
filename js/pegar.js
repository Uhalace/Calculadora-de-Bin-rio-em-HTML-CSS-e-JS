function pegar() {
      let numero = parseInt(document.getElementById("pegar").value);
      let binario = [];

      while (numero > 0) {
        let resto = numero % 2;
        binario.unshift(resto);
        numero = Math.floor(numero / 2);
      }

      // Aqui usamos innerHTML para mostrar na página
      document.getElementById("resultado").innerHTML = binario.join("") || "0";
    }
