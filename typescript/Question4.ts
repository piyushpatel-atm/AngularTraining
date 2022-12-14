class item{
    private itemid:number;
    private itemname:string;
    private itemprice:number;
    private category:string;
    constructor(id:number,name:string,price:number,category:string){
        this.itemid=id;
        this.itemname=name;
        this.itemprice=price;
        this.category=category;
    }
    public display=()=>{
        console.log(this.itemid,"-",this.itemname,'-',this.itemprice,'-',this.category);
    }
}

var obj=new item(1,"Book",300,"Study");
obj.display();