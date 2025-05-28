import { printOutString } from "./ejercicio1.js";
import {doublesTheArray} from "./ejercicio2.js"
import { commonCourses } from "./ejercicio4.js";
import { sumWithInitial } from "./ejercicio3.js";
import { bubbleSort } from "./ejercicio6.js";


const exportar = (id, result) => {
    document.getElementById(id).innerText=result;
}

exportar("result1", printOutString());
exportar("result2", doublesTheArray);
exportar("result3", sumWithInitial);
exportar("result4", commonCourses());
exportar("result6", bubbleSort());

