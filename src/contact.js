export function loadContact() {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Limpa o conteúdo anterior

  const headline = document.createElement("h1");
  headline.textContent = "Fale Conosco";

  const phone = document.createElement("p");
  phone.textContent = "Telefone: (11) 99999-9999";

  content.appendChild(headline);
  content.appendChild(phone);
}