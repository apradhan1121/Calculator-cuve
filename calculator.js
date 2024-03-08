string = "";
temp = "";
let buttons = document.querySelectorAll(".digits");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      // string=eval(string)
      document.querySelector("input").value = eval(string);
    } else if (e.target.innerHTML == "AC") {
      console.log("AC was clicked")
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "X") {
      string = string + "*";
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "x") {
      string = string.slice(0,-1);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
