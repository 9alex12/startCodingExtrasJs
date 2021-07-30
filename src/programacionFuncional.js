const names1 = ["Alexis", "Juan", "Pedro"];
const names2 = ["Martin", "Javier", "Matias"];

const persona1 = {
  firstname: "Juan",
  job: "Contador",
  city: "Cordoba"
};

// const addMember = (currentMembers, newMember) => {
//   const newMemberList = [...currentMembers, newMember];
//   return newMemberList;
// };

// console.log(addMember(names1, "Jorge"));
// console.log(names1);

//**Funciones puras */
const sum = (a, b) => a + b;

console.log(sum(2, 3));
