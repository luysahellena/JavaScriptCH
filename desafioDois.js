function getEstacao(mes) {
    mes = mes.toLowerCase(); // converte para lowercase para evitar problemas de case sensitivity
    switch (mes) {
      case "janeiro":
      case "fevereiro":
      case "dezembro":
        return "Inverno";
      case "março":
      case "abril":
      case "maio":
        return "Primavera";
      case "junho":
      case "julho":
      case "agosto":
        return "Verão";
      case "setembro":
      case "outubro":
      case "novembro":
        return "Outono";
      default:
        return "Mês inválido";
    }
  }
  

  const mes = prompt("Digite o nome do mês: ");
  alert(getEstacao(mes));