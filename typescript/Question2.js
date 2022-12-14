var obj1 = function (a) {
    var n = a.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    console.log(a);
};
var array;
array = [1, 8, 4, 9, 2, 3];
obj1(array);
