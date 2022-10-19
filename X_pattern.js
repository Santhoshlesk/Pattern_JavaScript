//X Pattern in JavaScript.
//by Santhosh kumar A
var n=parseInt(prompt("Enter The size:"));
var i,j;
	for(i=1;i<=n;i++){
		for(j=1;j<=n;j++){
			if(i==j || i+j==(n+1)){
				document.write("*&nbsp;");
			}
			else{document.write("&nbsp;&nbsp;&nbsp;");}
		}
		document.write("<br>");
}