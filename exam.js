
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
function renderQuestion(){
    test=_("test");
    var marks;
    marks= (correct*100)/questions.length;
    if(pos>=questions.length){
        test.innerHTML="<h2> You got "+correct+" of "+questions.length+" questions correct</h2><br> grades: <b>"+marks+"%</b>";
        _("test_status").innerHTML="Test Completed";
        pos =0;
        correct =0;
        return false;
    }
    _("test_status").innerHTML="Question "+(pos+1)+" of "+questions.length;
    question=questions[pos][0];
    chA=questions[pos][1];
    chB=questions[pos][2];
    chC=questions[pos][3]; 
    test.innerHTML="<h3>"+question+"</h3>";
    test.innerHTML+="<input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML+="<input type='radio' name='choices' value='B'>"+chB+"<br>"; 
    test.innerHTML+="<input type='radio' name='choices' value='C'>"+chC+"<br><br>"; 
    test.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer(){
    choices=document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice=choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
            correct++;
        }
       /* else{
             
        }*/
        pos++;
        renderQuestion();
}
window.addEventListener("load",renderQuestion,false);
