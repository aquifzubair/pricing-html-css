let monthlyChecker = 1;

const myFunction = (classL, elem) => {
  classL.toggle(elem);

  if (monthlyChecker == 1) {
    document.getElementById("monthly-basis").innerHTML = 19.99;
    document.getElementById("monthly-basis1").innerHTML = 24.99;
    document.getElementById("monthly-basis2").innerHTML = 39.99;
    monthlyChecker = 0;
  } 
  else  {
    document.getElementById("monthly-basis").innerHTML = 199.99;
    document.getElementById("monthly-basis1").innerHTML = 249.99;
    document.getElementById("monthly-basis2").innerHTML = 399.99;
    monthlyChecker = 1;
  }
};
