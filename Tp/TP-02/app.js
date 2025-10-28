// Step 1:
var school = "GIC";
let year = 2025;
const maxScore = 100;

// school = "ITC";
// year = 2026;
// maxScore = 150; because maxScore is a constant value so we can’t assign any value to it.

console.log(a); // undefined
var a = 10;

try{
    console.log(b); // error
    let b = 20;
} catch(error){
  console.log("b error:", error.message); // b error: Cannot access 'b' before initialization
}
//var behaves differently from let because of hoisting.

// Step 2:
function letterGrade(score) {
  if(score >= 90){
    return "A";
  } else if(score>= 80){
    return "B";
  } else if(score >= 70){
    return "C";
  } else if(score >= 60){
    return "D";
  } else {
    return "F";
  }
}
console.log("Grade(92) =", letterGrade(92)); // expected "A";

function mood(emoji) {
  switch(emoji){
  case ":)":
    return "happy";
  case ":(":
    return  "sad";
  case ":|":
    return  "neutral";
  default:
    return  "unknown";
}
}

// Step 3:
// for
let sumFor = 0;
for(let i = 1; i <=5; i++){
   sumFor += i;
}

// while
let sumWhile = 0;
j = 1;
while(j <= 5){
   sumWhile += j;
      j++;
}

// for…of
const nums = [1,2,3,4,5];
let sumOf = 0;
for(const num of nums){
    sumOf += num;
}

console.log("Sum of using For loop:", sumFor);
console.log("Sum of using While loop:", sumWhile);
console.log("Sum of using ForOf loop:", sumOf);

// Step 4:
const scores = [88, 95, 62];
scores.push(74);
console.log("Scores after added 74 to the end: ", scores);
scores.shift();
console.log("Scores after remove first element: ", scores);
let highestScore = Math.max(...scores);
let passingScores = scores.filter(score => score > 60);
console.log("HighestScore: ", highestScore);
console.log("Passing Scores: ", passingScores);
// a) function declaration

function square1(n) { 
    return n*n;
}

// b) function expression

const square2 = function(n) {
   return n*n;
}

// c) arrow function

const square3 = (n) => n*n;

console.log(square1(4), square2(4), square3(4)); // 16 16 16

// Step 6:
const student = { name: "Dana", score: 84 };
student.isPassed = student.score >= 60;

function describeStudent(s) {
    return `${s.name} scored ${s.score} ${s.isPassed ? '(pass)' : '(fail)'}`;
}
console.log(describeStudent(student));
// Step 7:
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const stats = document.getElementById("stats");
output.textContent = "Ready to practice DOM!";

// Step 8:
const state = { students: [] }; // { name: string, score: number }

function computeAverage(arr) {
    if(arr.length == 0){
        return 0;
    }
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i].score;
    }
    return total / arr.length;
}

function render() {
    list.innerHTML = "";
    for (let i = 0; i < state.students.length; i++) {
        const student = state.students[i];
        const li = document.createElement("li");
        li.textContent = `${student.name} — ${student.score}`;
        li.classList.add(student.score >= 60 ? 'pass' : 'fail');

        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.className = 'removeBtn';
        btn.style.marginLeft = '8px';
        btn.addEventListener('click', (e) => {
            // remove the student by index in the original array and re-render
            const idx = state.students.indexOf(student);
            if (idx !== -1) {
                state.students.splice(idx, 1);
                render();
            }
        });

        li.appendChild(btn);
        list.appendChild(li);
    }

    const totalStudents = state.students.length;
    const passingStudents = state.students.filter(s => s.score >= 60).length;
    const failingStudents = totalStudents - passingStudents;

    // Calculate average and format it to two decimal places
    const averageScore = computeAverage(state.students);
    const averageScoreFormatted = averageScore.toFixed(2); 
    const averageLetter = letterGrade(averageScore);

    // --- DOM Update ---
    stats.textContent = `Count: ${totalStudents} | Avg: ${averageScoreFormatted} (${averageLetter}) | Pass: ${passingStudents} | Fail: ${failingStudents}`;
}

addBtn.addEventListener('click', (e) => {
    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);
    // Validation
    if (!name) {
        alert('Name cannot be empty.');
        return;
    }
    if (isNaN(score) || score < 0 || score > 100) {
        alert('Score must be a number between 0 and 100.');
        return;
    }
    state.students.push({ name: name, score: score });
    render();
});

clearBtn.addEventListener('click', (e) => {
    state.students = [];
    render();
});

render();