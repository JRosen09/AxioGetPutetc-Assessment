//Get HTML Element / querySelector(s)
const complimentBtn = document.getElementById("complimentButton");
//const firstName = document.querySelector("#first-name");
const validationBtn = document.querySelector("#validationButton");

const baseURL = "http://localhost:4001/api";

//write the function
const getCompliment = () => {
  axios.get("http://localhost:4001/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

//getValidation
const getValidation = () => {
  axios.get("http://localhost:4001/api/validation/").then((res) => {
    const data = res.data;
    alert(data);//I want it to return a txt str instead of an alert...?
  });

//combine 1 and 2 with an event listener
complimentBtn.addEventListener("click", getCompliment);

validationBtn.addEventListener("click", getValidation);