let namee = document.getElementById("name");
let membership = document.getElementById("membership");
let prefer = document.getElementById("prefer");
let book = document.getElementById("book");
let btn = document.getElementById("btn");
let paragraph = document.getElementById("result-card");

let sentence = "";

btn.addEventListener("click", function () {
  let arr = [];

  sentence = "";

  if (
    namee.value == "" ||
    membership.value == "" ||
    prefer.value == "" ||
    book.value == ""
  ) {
    paragraph.textContent = "Please don't leave any input empty.";
    paragraph.style.backgroundColor = "#ff0000";
    paragraph.style.fontSize = "18px";
    paragraph.style.marginButton = "2rem";
    return;
  }

  sentence += "Hello " + namee.value + ".\n";
  arr.push(namee.value);
  if (membership.value == "student") {
    sentence += "Membership: Student.\n";
    arr.push("student");
  } else if (membership.value == "regular") {
    sentence += "Membership: Regular.\n";
    arr.push("Regular");
  } else {
    paragraph.textContent =
      "Invalid input! Please enter 'student' or 'regular'.";

    paragraph.style.backgroundColor = "#ff0000";
    paragraph.style.fontSize = "18px";
    paragraph.style.marginButton = "2rem";
    return;
  }

  if (prefer.value == "fiction") {
    sentence += "Preference: Fiction.\n";
    arr.push("Fiction");
  } else if (prefer.value == "non-fiction") {
    sentence += "Preference: Non-fiction.\n";
    arr.push("Non-fiction");
  } else {
    paragraph.textContent =
      "Invalid input! Please enter 'fiction' or 'non-fiction'.";
    paragraph.style.backgroundColor = "#ff0000";
    paragraph.style.fontSize = "18px";
    paragraph.style.marginButton = "2rem";
    return;
  }

  sentence += "Book: " + book.value;
  arr.push(book.value);
  paragraph.style.backgroundColor = "#09ff0095";
  paragraph.textContent = sentence;
  console.log(arr);
  arr = null;
});
