import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

// 1. Carrega a home por padrão ao abrir o site
loadHome();

// 2. Adiciona escutadores nos botões do header
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
contactBtn.addEventListener("click", loadContact);