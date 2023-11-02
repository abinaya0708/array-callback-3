document.write("There can only be three winners,the fourth person in the list will have to be discounted."+"<br>");
document.write("Given array:competitors=['Anna','Beth','Cara','David']"+"<br>");
document.write("Output:"+"<br>");
let competitors=["Anna","Beth","Cara","David"];

let res1=competitors.filter(function(value,index,array){
	return index==0;
	
});
  document.write("The No1 winner is:"+res1+".<br>");
  let res2=competitors.filter(function(value,index,array){
	return index==1;
	
});
  document.write("The No2 winner is:"+res2+".<br>");
  
  let res3=competitors.filter(function(value,index,array){
	return index==2;
	
});
  document.write("The No3 winner is:"+res3+".<br>");
  
   let res4=competitors.filter(function(value,index,array){
	return index==3;
	
});
  document.write("Sorry,"+res4+" is not one of the winners.");