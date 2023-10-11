var arr1 = [10, 20, 30];

function arrayToList(arr) {
  var list = {};

 for (var i = 0; i < arr.length; i++) {
    list.value = arr.splice(0, 1)[0];
    list.rest = (arr.length > 0) ? arrayToList(arr) : null;
 }

 return list;
}

console.log(arrayToList(arr1));