import "./styles.css";
import { displayAll } from "./dom.js";

displayAll();

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', displayAll)
