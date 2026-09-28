let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
  const itemText = input.value.trim();
  if (itemText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.style.marginRight = "40px";
  li.append(deleteBtn);
  list.append(li);

  input.value = "";
});
