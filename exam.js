
var pos =0, test,test_status, question,choice,choices,chA,chB,chC,correct=0;
var questions=[
    ["What is 10 + 4?","12","14","16","B"],
    ["What is 20 - 9?","7","13","11","C"],
    ["What is 7 * 3?","21","24","25","A"],
    ["What is 8 / 2?","10","2","4","C"],
];
function _(x){
    return document.getElementById(x)
}