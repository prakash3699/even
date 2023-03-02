let arr=[1,2,3,64,87,99,32,11,8];
function evenNum(arr){
	count=0;
	for(i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			count++;
		}
	}
	return count;
}
console.log(evenNum(arr));