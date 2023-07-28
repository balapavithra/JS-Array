let values = [[5, 8, 7, 12, 13], [1, 3, 4]];
let delvalues=[];
function deletedvalue() {
let value = values.flat()

let x = value.splice(0, 1);

x.push(value.splice(1, 1))
return delvalues = x.flat();
}
console.log("Deleted values are: ",deletedvalue());