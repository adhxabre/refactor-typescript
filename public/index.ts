function main() {
  // declaring name and typeName
  const myNameInput = document.getElementById("name");
  const typeNameInput = document.getElementById("type-name");

  // complete this code
  const yourName = "DumbWays";

  const myName: HTMLElement = myNameInput!;
  myName.textContent = `Halo nama saya ${yourName}`;

  const typeName: HTMLElement = typeNameInput!;
  typeName.innerHTML = `<p>tipe data nama kamu itu <mark>${typeof yourName}</mark></p>`;

  const ageInput = document.getElementById("age");
  const typeAgeInput = document.getElementById("type-age");

  // complete this code
  const yourAge = 23;

  const age: HTMLElement = ageInput!;
  age.textContent = `Halo umur saya ${yourAge}`;

  const typeAge: HTMLElement = typeAgeInput!;
  typeAge.innerHTML = `<p>tipe data umur saya adalah <mark>${typeof yourAge}</mark></p>`;
}

main();

export default main;
