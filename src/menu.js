export function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Limpa o conteúdo anterior

  const headline = document.createElement("h1");
  headline.textContent = "Nosso Cardápio";

  const item = document.createElement("p");
  item.textContent = "Prato Principal: Hambúrguer Artesanal - R$ 35";

  content.appendChild(headline);
  content.appendChild(item);
}