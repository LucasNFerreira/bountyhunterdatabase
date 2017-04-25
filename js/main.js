/*jshint esversion: 6 */

let url = "http://swapi.co/api/people/";

let persons;
let next;
let total = 0;

let appendContent = (text) => {
  let node = document.createElement('LI');
  let textNode = document.createTextNode(text);
  node.appendChild(textNode);
  document.querySelector('#persons-list').appendChild(node);
};
let loadPersons = () => {
  let load = new Promise(
    (resolve, reject) => {
      $.ajax({
        async : true,
        url : url,
        success : (result,status,xhr) => {
          persons = result.results;
          next = result.next;
          resolve(persons);
        }
      });
  });
  load.then(
    (persons) => {
      persons.forEach( (person) => {
        appendContent(`Hi! My name is ${person.name}`);
      });
      url = next;
      if(next){
        loadPersons();
      }
  });
};

loadPersons();
