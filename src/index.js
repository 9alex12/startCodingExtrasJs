import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Extras Curso de StartCoding JS</h1>

`;

const names1 = ["Alexis", "Juan", "Pedro"];
const names2 = ["Martin", "Javier", "Matias"];

const persona1 = {
  firstname: "Juan",
  job: "Contador",
  city: "Cordoba"
};

//**** Sin destructuring****/
// const user1 = names1[0];
// const user2 = names1[1];
// const user3 = names1[2];

// console.log(user1, user2, user3);

//****con destructuring Arrays****/
//const [user1, user2, user3] = names1;

//****Sin destructuring Objects */
// const user1 = persona1.firstname;
// const job = persona1.job;
// console.log(user1);

//****Con destructuring Objects */
// const { firstname, job } = persona1;
// console.log(firstname, job);

//****SPREAD OPERATOR */
//**ARRAYS */
//1)Concatenar arrays
// const mergedArray = [...names1, ...names2];

// console.log(mergedArray);

//2)Copia del array
// const copiedArray = [...names1];
// names1.push("MARCELO");

// console.log(names1);
// console.log(copiedArray);

// //3)Obtener elementos del array
// const [user1, user2, user3] = names1;

// console.log(user1, user2, user3);

//En funciones
const logValues = (...args) => console.log(args);
logValues("Hola", "chao", "qiubo");
