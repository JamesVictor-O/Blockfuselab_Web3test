// write a function to find the longest prefix string amount in an array of strings
// if there is no common prefix return empty string
let input=["flower", "dog"]
function commonLongestPrefix(arr){
    let [a,b]=arr
    let commonPrefix=""
    let lengthOfA=a.length;
    let lengthOfb=b.length;

    let minLengthOfAB=Math.min(lengthOfA,lengthOfb)
    for(i=0; i< minLengthOfAB; i++){
        if(a[i]=== b[i]){
            commonPrefix += a[i]
        }else{
            return ""
        }
    }
    return commonPrefix
}


console.log(commonLongestPrefix(input))