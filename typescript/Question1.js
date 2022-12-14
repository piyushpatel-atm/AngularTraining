var obj1 = function (a) {
    var n = a.length;
    a.forEach(function (element) {
        console.log("string : ", element, "stringLength", element.length);
    });
};
var a;
a = ["Piyush", "Yasir", "Raviraj"];
obj1(a);
