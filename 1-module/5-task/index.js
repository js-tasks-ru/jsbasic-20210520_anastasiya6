function truncate(str, num){
	if (str.length<num+1) {
		return str
	} 
	else{
		return str.substring(0,num-1)+"…";
	}
} 