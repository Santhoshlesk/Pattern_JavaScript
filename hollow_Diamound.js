
var n=parseInt(prompt("Enter The Size:"));
var i,j,z;k=2;
for(i=1;i<=n;i++){
		for(z=i;z<=n;z++){
			document.write("&nbsp;");
			document.write("&nbsp;");
		}
		for(j=1;j<=i*2-1;j++){
			if(j>=2 && j<=k)
			{document.write("&nbsp;");
			document.write("&nbsp;");}
			else{document.write("*");}
		}
		if(i>=2){k+=2;}
		document.write("<br>");
	}k-=2;
	k-=2;
	for(i=n-1;i>=1;i--){
		for(z=i;z<=n;z++){
			document.write("&nbsp;");
			document.write("&nbsp;");
		}
		for(j=1;j<=i*2-1;j++){
			if(j>=2 && j<=k)
			{document.write("&nbsp;");
			document.write("&nbsp;");}
			else{document.write("*");}
		}
		if(i>=2){k-=2;}
		document.write("<br>");
	}
