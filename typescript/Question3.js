var obj = function (str) {
    var s = "";
    for (var i = str.length - 1; i >= 0; i--) {
        s = s + str[i];
    }
    if (str === s) {
        console.log("palindrom");
    }
    else {
        console.log("Not Palindrom");
    }
};
var str = "aplppa";
obj(str);
