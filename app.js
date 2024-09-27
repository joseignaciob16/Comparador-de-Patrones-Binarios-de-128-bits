function compararPatrones() {
  const cadenaA = document.getElementById("cadenaA").value.trim();
  const cadenaB = document.getElementById("cadenaB").value.trim();
  const resultDiv = document.getElementById("result");
  
  resultDiv.innerHTML = '';

  if (cadenaA.length !== 128 || cadenaB.length !== 128) {
      resultDiv.innerHTML = '<p class="error">Ambas cadenas deben tener exactamente 128 bits.</p>';
      return;
  }

  let resultadoA = '';
  let resultadoB = '';
  
  for (let i = 0; i < 128; i++) {
      if (cadenaA[i] !== cadenaB[i]) {
          resultadoA += `<span class="diferente">${cadenaA[i]}</span>`;
          resultadoB += `<span class="diferente">${cadenaB[i]}</span>`;
      } else {
          resultadoA += cadenaA[i];
          resultadoB += cadenaB[i];
      }
  }

  resultDiv.innerHTML = `
      <p><strong>Cadena A:</strong></p><p>${resultadoA}</p>
      <p><strong>Cadena B:</strong></p><p>${resultadoB}</p>
  `;
}
