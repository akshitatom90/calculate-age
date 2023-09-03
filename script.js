"use strict";
let isvaildYear = false;
let isvaildMonth = false;
let isvaildDay = false;

const dayinp = document.getElementById("day");
const monthinp = document.getElementById("month");
const yearinp = document.getElementById("year");

const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submitbtn = document.querySelector(".submit-btn");

const errorday = document.querySelector(".error-day");
const errormonth = document.querySelector(".error-month");
const erroryear = document.querySelector(".error-year");

submitbtn.addEventListener("click", CalculateDate);

dayinp.addEventListener("input", (e) => {
  if (+dayinp.value > 31) {
    errorday.textContent = "must be a vaild date";
    isvaildDay = false;
    return;
  } else {
    isvaildDay = true;
    errorday.textContent = "";
  }
  if (+dayinp.value <= 0) {
    isvaildDay = false;
    errorday.textContent = "This field is required";
    return;
  } else {
    errorday.textContent = "";
  }
});

monthinp.addEventListener("input", (e) => {
  if (+monthinp.value > 12) {
    errormonth.textContent = "must be a vaild month";
    isvaildMonth = false;
    return;
  } else {
    isvaildMonth = true;
    errormonth.textContent = "";
  }
  if (+monthinp.value <= 0) {
    isvaildMonth = false;
    errormonth.textContent = "This field is required";
    return;
  } else {
    errormonth.textContent = "";
  }
});

yearinp.addEventListener("input", (e) => {
  if (+yearinp.value > new Date().getFullYear()) {
    erroryear.textContent = "must be a vaild year";
    isvaildYear = false;
    return;
  } else {
    isvaildYear = true;
    erroryear.textContent = "";
  }
  if (+yearinp.value <= 0) {
    isvaildYear = false;
    erroryear.textContent = "This field is required";
    return;
  } else {
    erroryear.textContent = "";
  }
});

function CalculateDate(e) {
  e.preventDefault();
  if (+monthinp.value % 2 == 1 && +dayinp.value > 31) {
    errorday.textContent = "must be a vaild date";
    isvaildDay = false;
    return;
  } else if (+monthinp.value % 2 == 0) {
    if ((+monthinp.value == 2 && +dayinp.value > 28) || +dayinp.value > 30) {
      errorday.textContent = "must be a vaild date";
      isvaildDay = false;
      return;
    }
  }

  if (isvaildDay == true && isvaildMonth == true && isvaildYear == true) {
    let birthday = `${monthinp.value}/${dayinp.value}/${yearinp.value}`;

    let birthdayObj = new Date(birthday);

    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;

    output_year.textContent = ageYears;
  } else {
    alert("error");
  }
}
