export function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Limpa o conteúdo anterior

  const headline = document.createElement("h1");
  headline.textContent = "O Melhor Restaurante da Cidade!";

  const description = document.createElement("p");
  description.textContent = "Ingredientes frescos e pratos feitos com paixão.";

  content.appendChild(headline);
  content.appendChild(description);
}