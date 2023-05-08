// Değişken Oluşturma

// var a = (20);

// var b = (30);

// var c = (40);

// console.log(a,b,c);



// Primitive VeriTipleri

// var a = (20); // Number Veri Tipi

// console.log(typeof a);

// ----------------------------------------

// var name = "Mustafa"; String Veri Tipi

// console.log(typeof name);

// ----------------------------------------

// var a = true; Boolean Veri Tipi

// ----------------------------------------

// var a = null; 0

// var a: undefined Hiçlik



// Reference VeriTipleri

// var numbers = [1,2,3,4,5];

// console.log(numbers[0]);

// ----------------------------------------

// var person = {
//     name: "ArdaÖzkurt",
//     age: 17,
// }

// ----------------------------------------

// var date = new Date();

// ----------------------------------------

// var merhaba = function(){
//     console.log("Merhaba");
// }

// ----------------------------------------

// let const



// --------------------------------------------------------------------------------

// Veri Tiplerini String'e Çevirme

// let value;

// value = String(123);

// console.log(value);
// console.log(typeof value)

// ----------------------------------------

// Veri Tiplerini Number'e Çevirme

// let value;

// value = Number("asd");

// console.log(value);
// console.log(typeof value)



// --------------------------------------------------------------------------------

// Operatörler ve Math Objesinin Metodları



// --------------------------------------------------------------------------------

// Stringlerin Metodları

// let value;

// const firstName = "Arda";
// const lastName = "Özkurt";
// const lang = "Java,Python,C++";

// value = firstName + " " + lastName;

// value += " Adra";

// value = firstName.length;

// value = firstName.concat(" ",lastName," ","Caz");

// ----------------------------------------

// Index Of

// value = firstName.indexOf("r")

// ----------------------------------------

// Char At

// value = firstName.charAt(0)
// value = firstName.charAt(firstName.lenght -1)

// ----------------------------------------

// Split

// value = lang.split(",");

// ----------------------------------------

// Replace

// value = lang.replace("Python","CSS");

// ----------------------------------------

// Includes

// value = lang.includes("Java");

// console.log(value);



// --------------------------------------------------------------------------------

// Temlate Literal  - String Oluşturmakta Yeni Standar

// const name = "Arda Ozkurt";
// const age = "on yedi";
// const salary = 10;

// const a = "İsim: " + name + "\n" + "Yaş: " + age + "\n" + "Maaş: " + salary;

// const a = `İsim:${name}\nYaş:${age}\nMaaş:${salary}\n`;

// const html = "<ul>" + "<li>" + name + "</li>" + "</ul>" ;

// const htmtl = `<ul>
//                 <li>${name}</li>
//                 </ul>`;

// document.body.innerHTML = html;

// console.log(a)



// --------------------------------------------------------------------------------

// Arraylerin Özellikleri

// let value;

// const number = [21, 41, 51, 61, 71, 81];

// const langs = ("java", "CSS", "Python", "C++");

// const a = ["Hi", 22, null, undefined, 3.14];

// value = number.length;

// value = number[0];
// value = number[1];

// consol.log(value)



// --------------------------------------------------------------------------------

// Obje Kavramı

// let value;

// const programmer = {
//     name: "arda",
//     age: 25,
//     email: "arda.son21@gmail.com",
//     langs: ["Java", "Python", "C++"],
//     address: {
//         city: "Ankara",
//         street: "Bahçelievler"
//     },

//     work: function () {
//         console.log("Programcı Çalışıyor...");
//     }
// }

// value = programmer.work();

// console.log(value)



// --------------------------------------------------------------------------------

// Karşılaştırma Operatörler Koşullar ve Ternaly Operatör

// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log(2 == "2");
// console.log(!(2 != "2"));
// console.log( (2 == 2) && ("Ahmet" == "Ahmet") );
// console.log( (4 == 2) || ("Ahmet" == "Mehmet") );
// console.log(2 === "2");
// console.log(4 > 2);
// console.log(2 < 4);
// console.log(2 != 4);

// const error = true;

// if (error == false) {
//     console.log("Hata!");
// }

// else {
//     console.log("SıkıntıYok");
// }

// const user = "mmc";

// if (user === "mmc") {
//     console.log("KullanıcıBulundu")
// }
// else {
//     console.log("KullanıcıBulunamadı...")
// }

// const process = "5";

// if (process === "1") {
//     console.log("işlem 1")
// }

// else if (process === "2") {
//     console.log("işlem 2")
// }

// else if (process === "3") {
//     console.log("işlem 3")
// }

// else if (process === "4") {
//     console.log("işlem 4")
// }

// else {
//     console.log("Geçersiz İşlem")
// }



// let number;

// number = 100

// if (number === 10) {
//     console.log("Sayı 100'e Eşit")
// }
// else {
//     console.log("Sayı Eşit Değil")
// }

// ---------------------------------------- Kısa Yol

// Ternary Operatör

// console.log(number === 100 ? "Sayı Eşit": "Sayı Eşit Değil");

// ----------------------------------------

// if (number === 100)console.log("Eşit") Tek bir işlemse {} = gerek yok

// ----------------------------------------

// Switch Case Yapıları

// const a = 20;

// switch(a){
//     case 1:
//         console.log("İşlem 1");
//         break;
//     case 2:
//         console.log("İşlem 2");
//         break;
//     case 3:
//         console.log("İşlem 3");
//         break;
//     case 4:
//         console.log("İşlem 4");
//         break;
//         default:
//         console.log("Geçersiz İşlem");
// }



// --------------------------------------------------------------------------------

// Fonksiyon Tanımlama

// function meraba(name = "BilgiYok",age = "BilgiYok") {
//     // if (typeof name === "undefined", name = "Bilgi Yok");
//     // if (typeof age === "undefined", age = "Bilgi Yok");
//     console.log(`isim:${name} Yaş:${age}`);
// }

// meraba("Murat",17);
// meraba();

// ----------------------------------------

// function square(x) {
//     return x * x;
// }
// function cube(x) {
//     return x*x*x;
// }

// let a = square(12);

// a = cube(a)

// console.log(a);

// function selam() {
//     return "selam;"
// }

// console.log(selam());

// const selam = function (name) {
//     console.log("selam  "+ name);
// };

// selam("arda")

// (function (name) {
//     console.log("Selam: " + name);
// })("Arda");

// const database = {
//     host: "localhost",
//     add: function () {
//         console.log("Eklendi");
//     },
//     get: function () {
//         console.log("Elde Edildi");
//     },
//     update: function (id) {
//         console.log(`id: ${id}Güncellendi`);
//     },
//     delate: function (id) {
//         console.log(`id: ${id}Silindi`);
//     }
// }

// console.log(database.host)



// --------------------------------------------------------------------------------

// Döngüler

// ---------------------------------------- While Düngüleri

// let i = 0;

// while(i < 10) {
//     console.log(i)
//     i++;
// }

// let i = 10;

// while(i > 0){
//     console.log(i)
//     i--;
// }

// ---------------------------------------- Break ve Contiune

// let i = 0;

// while (i < 10) {
//     if (i == 5) {
//         break
//     }
//     console.log(i)
//     i++;
// }

// while (i < 10) {
//     if (i == 3 || i == 5) {
//         i++;
//         continue
//     }
//     console.log(i)
//     i++;
// }

// ---------------------------------------- Do While

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);



// const langs = ["Python", "J", "JS"];

// let index = 0;

// while (index < langs.length) {
//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0; index < langs.length; index++) {
//     console.log(langs[index]);
// }

// langs.forEach(function (langs) {
//     console.log(langs,index);
// });

// const user = [
//     { name: "Arda", age: "17" },
//     { name: "Ceren", age: "17" },
//     { name: "Efe", age: "16" }
// ];

// const names = user.map(function (user) {
//     return user.name;
// });
// const ages = user.map(function (user) {
//     return user.age;
// });

// console.log(names);
// console.log(ages);

// const user = {
//     name: "Arda",
//     age: 17,
// };

// for (let key in user) {
//     console.log(key, user[key]);
// }



// --------------------------------------------------------------------------------

// Window Objesine Genel Bakış

// alert("Merhaba")

// const cevap = confirm("Emin Misin?")

// console.log(cevap)

// if (confirm("Emin Misin?")) {
//     console.log("Silin Gitsin");
// }
// else {
//     console.log("Silmeyin");
// }

// const cevap = prompt("2 + 2 = ?")

// if (cevap == "4"){
//     console.log("Doğru");
// }
// else {
//     console.log("Yanlış");
// }

// let value;

// value = window;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

// if (confirm("Sayfa Yenilensin mi?")) {
//     window.location.reload();
// }
// else {
//     console.log("Sayfa Yenilenmedi");
// }

// value = window.outerHeight;
// value = window.outerWidth;
// value = window.innerHeight;
// value = window.innerWidth;
// value = window.scrollX;

// console.log(value)