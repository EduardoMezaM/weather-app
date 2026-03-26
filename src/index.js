import "./styles.css";
import { displayAll, toggleDegrees } from "./dom.js";

displayAll();

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', displayAll)

