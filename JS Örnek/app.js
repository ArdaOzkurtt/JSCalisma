// ÖRNEK 1
// ---------------------------------------------------------------

// const student = {
//     gender: "erkek",
//     name: "arda",
//     age: 17,
//     langs: ["html", "css", "javascript"],
//     work: function () {
//         console.log("öğrenci çalışıyor");
//     },
//     blabla: true,
//     blabla2: null,
//     blabla3: undefined,
// }

// console.log(student);

// ÖRNEK 2
// ---------------------------------------------------------------

// const text = document.querySelector(".text").innerHTML;

// const wordCount = text.length; text.split(" ").length;

// console.log(wordCount);

// const paragraph = document.querySelector(".text").innerHTML;
// const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"]; // Türkçe sesli harfler

// let vowelCount = 0;
// for (let i = 0; i < paragraph.length; i++) {
//     const letter = paragraph[i].toLowerCase(); // Küçük harf kontrolü yapılır
//     if (vowels.includes(letter)) {
//         vowelCount++;
//     }
// }

// console.log(`Paragraftaki sesli harf sayısı: ${vowelCount}`);

// ÖRNEK 3
// ---------------------------------------------------------------

// const text = document.querySelector(".text");

// text.innerHTML = text.innerHTML.replaceAll(" ", "-");