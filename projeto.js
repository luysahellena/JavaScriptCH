const form = document.getElementById('correction-form');
  const resultDiv = document.getElementById('result');

  // Índices de correção desde janeiro de 2020
  const correctionIndices = {
    2020: {
      1: 0.0234, // Janeiro 2020
      2: 0.0251, // Fevereiro 2020
      3: 0.0268, // Março 2020
      4: 0.0285, // Abril 2020
      5: 0.0302, // Maio 2020
      6: 0.0319, // Junho 2020
      7: 0.0336, // Julho 2020
      8: 0.0353, // Agosto 2020
      9: 0.0370, // Setembro 2020
      10: 0.0387, // Outubro 2020
      11: 0.0404, // Novembro 2020
      12: 0.0421, // Dezembro 2020
    },
    2021: {
      1: 0.0438, // Janeiro 2021
      2: 0.0455, // Fevereiro 2021
      3: 0.0472, // Março 2021
      4: 0.0489, // Abril 2021
      5: 0.0506, // Maio 2021
      6: 0.0523, // Junho 2021
      7: 0.0540, // Julho 2021
      8: 0.0557, // Agosto 2021
      9: 0.0574, // Setembro 2021
      10: 0.0591, // Outubro 2021
      11: 0.0608, // Novembro 2021
      12: 0.0625, // Dezembro 2021
    },
    // Adicione mais anos e índices de correção aqui
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const factGeneratorDate = new Date(document.getElementById('fact-generator-date').value);
    const updateDate = new Date(document.getElementById('update-date').value);
    const value = parseFloat(document.getElementById('value').value);

    try {
      const correctedValue = calculateCorrection(factGeneratorDate, updateDate, value);
      resultDiv.innerHTML = `O valor corrigido é: R$ ${correctedValue.toFixed(2)}`;
    } catch (error) {
      resultDiv.innerHTML = `Erro: ${error.message}`;
    }
  });

  function calculateCorrection(factGeneratorDate, updateDate, value) {
    const factGeneratorYear = factGeneratorDate.getFullYear();
    const factGeneratorMonth = factGeneratorDate.getMonth() + 1;
    const updateYear = updateDate.getFullYear();
    const updateMonth = updateDate.getMonth() + 1;

    let correctionFactor = 1;
    for (let year = factGeneratorYear; year <= updateYear; year++) {
      for (let month = (year === factGeneratorYear ? factGeneratorMonth : 1); month <= (year === updateYear ? updateMonth : 12); month++) {
        const correctionIndex = correctionIndices[year][month];
        if (!correctionIndex) {
          throw new Error(`Índice de correção não encontrado para ${year}/${month}`);
        }
        correctionFactor *= (1 + correctionIndex);
      }
    }

    return value * correctionFactor;
  }