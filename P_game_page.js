function make_send(){
    n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
    actual_ans=parseInt(n1) * parseInt(n2);

    problem="<h4>"+n1+"X"+n2+"</h4>";
    input_box="<br>Answer : <input type='text' id='check_box' placeholder='answer'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>check</button>"; 
    row=problem+input_box+check_btn;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}