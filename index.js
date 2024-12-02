// write a function to find the longest prefix string amount in an array of strings
// if there is no common prefix return empty string
let input=["flower", "flight","flow"]
function commonLongestPrefix(arr){
    let [a,b,c]=arr
    let commonPrefix=""
    let lengthOfA=a.length;
    let lengthOfb=b.length;
    let lengthOfc=c.length;

    let minLengthOfAB=Math.min(lengthOfA,lengthOfb,lengthOfc)

    for(i=0; i< minLengthOfAB; i++){
        if(a[i]=== b[i] && a[i]=== c[i]){
            commonPrefix += a[i]
        }else{ 
           break
        }
    }
    return commonPrefix
}


console.log(commonLongestPrefix(input))