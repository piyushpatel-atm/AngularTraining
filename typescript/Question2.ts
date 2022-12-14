var obj1= (a:number[])=>{
    let n=a.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    console.log(a);
}
let array:number[];
array=[1,8,4,9,2,3];
obj1(array);