var reverse = function(x) {
    x=x.toString()
    let left=0
    let right=x.length-1
    console.log(x[1]);
    x.replace(2,9)
    console.log(x[1])


    while(left!=right)
    {
        let temp=x[left]
        x[left]=x[right]
        x[right]=temp
        
        left++
        right--
  
        
    }
    console.log(x)
    


};
reverse(321)