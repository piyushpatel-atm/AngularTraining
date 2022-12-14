var item = /** @class */ (function () {
    function item(id, name, price, category) {
        var _this = this;
        this.display = function () {
            console.log(_this.itemid, "-", _this.itemname, '-', _this.itemprice, '-', _this.category);
        };
        this.itemid = id;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;
    }
    return item;
}());
var obj = new item(1, "Book", 300, "Study");
obj.display();
