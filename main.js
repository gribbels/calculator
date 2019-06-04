list=[
    "/",
    "*",
    "+",
    "-",
    "%",
    ".",
    "njut",
    "dab"
]

nums=[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
]

function input(n){
    raw = $("#textbox").html();

    if (n=="c"){
        $("#textbox").html("");
    }

    else if (nums.includes(n)){
        $("#textbox").append(n);
    }
    else if (n=="ce"){
        $("#textbox").html("");
    }

    else if (list.includes(n)){
        if(list.includes(raw[raw.length-1])) {
        }
        else{
            $("#textbox").append(n);
        }
    }
    else if (n=="del"){
        raw = $("#textbox").html();
        raw=raw.substring(0,raw.length-1);
        $("#textbox").html(raw);

    }

    else{
        if ($("#textbox").html()==""){
            $("#textbox").append("√");
        };
    };
}

function submit(){
    raw = $("#textbox").html();
    if (raw[0].includes("√")){
        answer=Math.sqrt(raw.substring(1,raw.length));
        $("#textbox").html(answer);
    }
    else{
        answer = eval(raw);
        console.log(answer);
        $("#textbox").html(answer);
    }
}

$(document).keydown(function(e) {
    console.log(e.keyCode);
    var key = e.keyCode;
    if (e.key=="%"){
        input("%");
    }
    else if (e.key=="/") {
        input("/");
    }
    else if (e.key=="*") {
        input("*");
    }
    else if (key==190) {
        input(".");
    }
    else if (key==32) {
        input("c");
    }
    else if (key==13) {
        submit();
    }
    else if (key==8) {
        input("del");
    }
    else if(key==49) {
        input(1);
    }
    else if(key==50) {
        input(2);
    }
    else if(key==51) {
        input(3);
    }
    else if(key==52) {
        input(4);
    }
    else if(key==53) {
        input(5);
    }
    else if(key==54) {
        input(6);
    }
    else if(key==55) {
        input(7);
    }
    else if(key==56) {
        input(8);
    }
    else if(key==57) {
        input(9);
    }
    else if(key==48) {
        input(0);
    }
    else if(key==187) {
        input("+");
    }
    else if(key==189) {
        input("-");
    }
});
