var Cone = /** @class */ (function () {
    function Cone(radius, height) {
        var _this = this;
        this.printname = function () { return "Shape Name : Cone"; };
        this.area = function () {
            var l = Math.sqrt((_this.r * _this.r + _this.h * _this.h));
            console.log(3.14 * _this.r * (l + _this.r));
        };
        this.r = radius;
        this.h = height;
    }
    return Cone;
}());
var sphere = /** @class */ (function () {
    function sphere(radius) {
        var _this = this;
        this.printname = function () { return "Shape Name : Sphere"; };
        this.area = function () {
            console.log(4 * 3.14 * _this.r * _this.r);
        };
        this.r = radius;
    }
    return sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        var _this = this;
        this.printname = function () { return "Shape Name : Rectangle"; };
        this.area = function () {
            console.log(_this.l * _this.b);
        };
        this.l = length;
        this.b = breadth;
    }
    return Rectangle;
}());
var obj1 = new Cone(4, 12);
obj1.area();
var obj2 = new sphere(4);
obj2.area();
var obj3 = new Rectangle(4, 5);
obj3.area();
