
//function for rotating the array
function rotateArray(arr,d){
   let arrayLength = arr.length;
   for (let i=1;i<=d;i++)
   rotateByOne(arr,arrayLength);
}

// function for rotating one element
function rotateByOne(arr,arrayLength){
   let temp = arr[0];
   for (let i=0;i<arrayLength-1;i++)
   arr[i] = arr[i+1];
   arr[arrayLength-1] = temp;
}

//function for printing the array
function printArray(arr){
   console.log(arr);
}

//Declaring the array and rotation number
var testArr = [1,2,3,4,5,6,7,8,9,0];
var d = 4;

// calling the function
rotateArray(testArr,d);
printArray(testArr);
