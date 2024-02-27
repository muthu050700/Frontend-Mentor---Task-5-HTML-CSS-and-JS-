let main_card = document.querySelector(".after_submit ");
let sucess_card = document.querySelector(".hidden-sucess");
let inputValueOfMail = document.querySelector("#email");
let formSubmit = document.querySelector("#submit");
let addpara = document.querySelector(".para");
let sucess_dismissbtn = document.querySelector(".sucess_btn");

let validRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(inputValueOfMail);

formSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let inputvalue = inputValueOfMail.value;
  console.log(inputvalue);
  errorcheck(inputvalue);
});
function errorcheck(value) {
  console.log(validRegex.test(value));
  if (value === "") {
    inputValueOfMail.classList.remove("email_err");
    document.querySelector(".msg").classList.remove("error");
    document.querySelector(".msg").innerText = `Email field cannot be empty`;
    document.querySelector(".msg").classList.add("error");
    console.log("helloe");
  }
  if (validRegex.test(value)) {
    console.log("crt");
    document.querySelector(".msg").classList.remove("error");
    addpara.innerHTML = `<p>A confirmation email has been sent to <span>${value}</span>.please open it and click the button inside your subscription.</p>`;
    main_card.classList.add("hidden");
    sucess_card.classList.remove("hide");
  } else if (value !== "") {
    document.querySelector(".msg").innerText = `valid email required`;
    document.querySelector(".msg").classList.add("error");
    inputValueOfMail.classList.add("email_err");
  }
}
sucess_dismissbtn.addEventListener("click", function () {
  main_card.classList.remove("hidden");
  sucess_card.classList.add("hide");
  document.querySelector("#email").value = "";
});
