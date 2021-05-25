function factorial(n) {
	let f=1;
	if (n==0) {
		return 1;
	}
  for (var i = n-1; i >= 0; i--) {
	  	f=(n-i)*f;
  }
   return f;
}