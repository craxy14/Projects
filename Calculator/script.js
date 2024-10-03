let res = document.getElementById("display")

function display(input){
    res.value += input
}

function clearDisplay(){
    res.value = "";
}

function calculate(){
    try {
        res.value = eval(res.value)
    }
    catch(err) {
        res.value = "Error"
    }
}

function del(){
    let current = res.value;
    if (current.length > 0) {
        res.value = current.slice(0, -1);
    }
}