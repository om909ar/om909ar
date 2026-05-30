const lessons = [
{
title:"اليوم 1",
rule:"am / is / are",
words:["Employee","Manager","Office","Meeting","Report"]
},
{
title:"اليوم 2",
rule:"Pronouns",
words:["Father","Mother","Brother","Sister","Family"]
},
{
title:"اليوم 3",
rule:"Present Simple",
words:["Work","Read","Write","Drive","Study"]
},
{
title:"اليوم 4",
rule:"Present Simple Negative",
words:["Car","House","Room","Door","Key"]
},
{
title:"اليوم 5",
rule:"Present Simple Questions",
words:["Morning","Evening","Night","Today","Tomorrow"]
}
];

let currentDay = parseInt(localStorage.getItem("day")) || 1;

function renderLesson(){

const lesson = lessons[currentDay - 1];

document.getElementById("lessonTitle").innerText = lesson.title;
document.getElementById("lessonRule").innerText = lesson.rule;

let html = "";

lesson.words.forEach(word=>{
html += `<li>${word}</li>`;
});

document.getElementById("wordList").innerHTML = html;

document.getElementById("dayCounter").innerText =
`${currentDay} / 30`;
}

function nextDay(){

if(currentDay < lessons.length){
currentDay++;
localStorage.setItem("day",currentDay);
renderLesson();
}
}

renderLesson();
