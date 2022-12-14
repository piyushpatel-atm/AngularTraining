class Employee{
    id:number;
    name:string;
    salary:number;
    setting=(id:number,name:string,salary:number)=>{
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    count=(str:string)=>{
        var s=str[0].toUpperCase();
        let sum=0;
        if(s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U'){
            for(let i=0;i<str.length;i++){
                if(str[i].toUpperCase() != 'A' || str[i].toUpperCase() != 'E' || str[i].toUpperCase() != 'I' || str[i].toUpperCase() != 'O' || str[i].toUpperCase() != 'U'){
                    sum++;
            }
        }
            console.log(sum);
        } else{
            for(let i=0;i<str.length;i++){
                if(str[i].toUpperCase() == 'A' || str[i].toUpperCase() == 'E' || str[i].toUpperCase() == 'I' || str[i].toUpperCase() == 'O' || str[i].toUpperCase() == 'U'){
                    sum++;
            }
        }
        console.log(sum);
        }
        

    }

}
var obj1=new Employee();
obj1.count("yasir");