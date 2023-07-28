const values = [5, 8, 7, 12, 13];
function deletedvalue() {
    const remove = [1, 3, 4];

    for (let i = 0; i < remove.length; i++) {
        values.splice(remove[i], 1);
        console.log(values);
    }
}
deletedvalue();