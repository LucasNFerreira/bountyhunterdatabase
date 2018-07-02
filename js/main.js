/*jshint esversion: 6 */

const endpoint = "https://swapi.co/api/people/?format=json";

let characters;
let total = 0;

function appendContent(text) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(text);

  node.appendChild(textNode);
  document.querySelector('#characters-list').appendChild(node);
};

function displayCharacters(result,status,xhr) {
  result.results.forEach((character) => {
    appendContent(`Hi! My name is ${character.name}`);
  });

  if (result.next){
    loadcharacters(result.next);
  }
}

function errorFunction(result,status,xhr) {
  console.log('Something is fucked');
}

function loadcharacters(endpoint) {
  const promise = $.ajax({
    async: true,
    url: endpoint,
  });
  
  promise.then(displayCharacters, errorFunction);
};

loadcharacters(endpoint);
