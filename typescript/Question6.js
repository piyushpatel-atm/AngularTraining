var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.setting = function (id, name, salary) {
            _this.id = id;
            _this.name = name;
            _this.salary = salary;
        };
        this.count = function (str) {
            var s = str[0].toUpperCase();
            var sum = 0;
            if (s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U') {
                for (var i = 0; i < str.length; i++) {
                    if (str[i].toUpperCase() != 'A' || str[i].toUpperCase() != 'E' || str[i].toUpperCase() != 'I' || str[i].toUpperCase() != 'O' || str[i].toUpperCase() != 'U') {
                        sum++;
                    }
                }
                console.log(sum);
            }
            else {
                for (var i = 0; i < str.length; i++) {
                    if (str[i].toUpperCase() == 'A' || str[i].toUpperCase() == 'E' || str[i].toUpperCase() == 'I' || str[i].toUpperCase() == 'O' || str[i].toUpperCase() == 'U') {
                        sum++;
                    }
                }
                console.log(sum);
            }
        };
    }
    return Employee;
}());
var obj1 = new Employee();
obj1.count("yasir");
