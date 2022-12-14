interface shap{
    shapename:string,
    printname:()=>string
}
class Cone implements shap{
    shapename: "Cone";
    r:number;
    h:number;
    constructor(radius:number,height:number){
        this.r=radius;
        this.h=height;
    }
    printname= () :string => "Shape Name : Cone";
    area=()=>{
        let l=Math.sqrt((this.r*this.r + this.h*this.h));
        console.log(3.14*this.r*(l+this.r))
    }
}
class sphere implements shap{
    shapename: "Sphere";
    r:number;
    constructor(radius:number){
        this.r=radius;
    }
    printname= () :string => "Shape Name : Sphere";
    area=()=>{
        console.log(4*3.14*this.r*this.r)
    }
}
class Rectangle implements shap{
    shapename: "Rectangle";
    l:number;
    b:number;
    constructor(length:number,breadth:number){
        this.l=length;
        this.b=breadth;
    }
    printname= () :string => "Shape Name : Rectangle";
    area=()=>{
        console.log(this.l*this.b);
    }
}
var obj1 = new Cone(4,12);
obj1.area();
var obj2 = new sphere(4);
obj2.area();
var obj3 = new Rectangle(4,5);
obj3.area();
