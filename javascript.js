function gerarSenha() {
      const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|<>?";
      let senha = "";
      const tamanho = 14;

      for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
      }

      document.getElementById("senhaGerada").textContent = senha;
      document.getElementById("senhaCopiada").style.display = "none";
    }

function copiarSenha() {
      const senha = document.getElementById("senhaGerada").textContent;

      if (senha && senha !== "Clique em \"Gerar Senha\"") {
        const tempInput = document.createElement("input");
        tempInput.value = senha;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        const mensagem = document.getElementById("senhaCopiada");
        mensagem.style.display = "block";
        setTimeout(() => {
          mensagem.style.display = "none";
        }, 2000);
        }
    }
