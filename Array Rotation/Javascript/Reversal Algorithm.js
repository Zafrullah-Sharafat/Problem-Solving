
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} d
 * @returns {void}
*/

class Solution{
   leftRotate(arr,n,d){
       //code here
       let reverseArr1 = this.reverseArr(arr,0,d-1);
       let reverseArr2 = this.reverseArr(reverseArr1,d,n-1);
       let finalResult = this.reverseArr(reverseArr2,0,n-1);
       return finalResult;
   }
   
   reverseArr(arr,start,end){
       let startPosition = start;
       let endPosition = end;
       let rotation = Math.ceil((endPosition-startPosition)/2);
       for (let i = 0;i<rotation;i++){
           
        let temp = arr[startPosition];
        arr[startPosition] = arr[endPosition];
        arr[endPosition] = temp;
        startPosition++;
        endPosition--;
       }
   return arr;
   }
}
let array = [1,2,3,4,5];
let n = 5;
let d = 2;
let soln = new Solution();
let solution = soln.leftRotate(array,n,d);
console.log(solution)