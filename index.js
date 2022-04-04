// declaring variables
var id = 5;
id = 10;
var x = 'Sunil';
var check = true;
// array
var ids = [1, 2, 3, 4];
var arr = [1, 2, true, 'Hello'];
// tuple 
var person = [1, 'Jony', true];
// tuple array
var employee;
employee = [
    [1, 'John'],
    [2, 'Dolly'],
    [3, 'Dimpy']
];
console.log(employee);
// Union
var pid;
pid = 23;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left); // 2
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
// let customerId = <number> cid
var customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 78));
// void 
function log(message) {
    console.log(message);
}
console.log(log(4));
console.log(log('four'));
var user1 = {
    id: 10,
    name: 'John'
};
console.log(user1);
var add = function (x, y) { return x + y; };
console.log(add);
