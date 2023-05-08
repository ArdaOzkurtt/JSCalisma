// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length - 1];

// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
// }
// elements.forEach(function(elements){
//     console.log(element)
// });

// const collections = Array.from(document.all);
// collections.forEach(function(collections){
//     console.log(collections)
// });

// console.log(value)

// -----------------------------------------------------------------

// Document Objesi

// let value;

// value = document;

// Scripts

// value.document.scripts;

// value = document.scripts.length;
// value = document.scripts[0];

// Linkler

// value = document.links;
// value = document.links[document.links.length - 1].getAttribute("class")
// value = document.links[document.links.length - 1].className

// Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms[0].id;
// value = document.forms["forms"];

// console.log(value);

// -----------------------------------------------------------------

// Elementleri Seçme

// İD'ye Göre Seçme

// let element;

// element = getElementById("todo-form")

// console.log(element);

// -----------------------------------------

// Class'a Göre Seçme

// let element;

// element = getElementsByClassName("list-group-item")

// console.log(element);

// -----------------------------------------

// Tag'a Göre Seçme

// let element;

// element = document.getElementsByTagName("li")

// console.log(element);

// -----------------------------------------

// Query Göre Seçme - CSS Göre Seçme

// let element;

// element = document.querySelector("#todo-form");
// element = document.querySelector(".todo-item");
// element = document.querySelector("div");

// console.log(element);

// -----------------------------------------------------------------

// Elementleri Seçme ve Özelliklerini Değiştirme

// const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classlist);
// console.log(element.classlist[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style)

// -----------------------------------------------------------------

// Style ve Element Özelliklerini Değiştirme

// element.className = "btn btn-primary";
// element.style.color = "black"
// element.textContent = "ada"



// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function (el) {
//     el.style.color = "red";
// })

// ----------------------------------

// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even)");

// element2.forEach(function (el) {
//     el.style.background = "red"
// })

// console.log(element2)

// -----------------------------------------------------------------

// Dom Elementleri Üzerinde Gezinme

// let value;

// const todoList = document.querySelector(".list-group")
// const todo = document.querySelector(".list-group-item")
// const cardrow = document.querySelector(".card.row");

// Child Nodes / Text Dahil

// value = todoList.childNodes;

// Children / Text Dahil Değil

// value = todoList.children;
// value = todoList.children[2].textContent = "asd";

// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "asd";

// value = cardrow.parentElement Ebeveyine git

// value = todo.previousElementSibling; Bir Önceki Kardeşe Git

// console.log(value)

// -----------------------------------------------------------------

// Dinamik Element Oluşturma

/* {<a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>} */

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "#";
// newLink.appendChild(document.createTextNode("ASD"));
// cardbody.appendChild(newLink)

// -----------------------------------------------------------------

// Dinamik Element Silme

// const todoList = document.querySelector("ul.list-group")
// const todos = document.querySelectorAll(".list-group-item")

// Remove Metodu / Child

// todos[0].remove();

// todoList.removeChild(todoList.lastElementChild)

// -----------------------------------------------------------------

// Elementleri Değiştirme

// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "BuBirBaşlık";

// // Eski Element

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// -----------------------------------------------------------------

// Dinamik Attribute Değiştirme

// const todoinput = document.querySelector("#todo")

// todoinput.className = "form-control newclass"