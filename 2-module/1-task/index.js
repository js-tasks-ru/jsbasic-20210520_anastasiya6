function sumSalary(salaries) {
  var summ=0;
  for (salary in salaries) {
  	if (typeof salaries[salary]=='number' && isFinite(salaries[salary])) {
  		summ+=salaries[salary];
  	}
  }
  return summ;
}
