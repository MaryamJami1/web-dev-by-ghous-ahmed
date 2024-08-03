// question one

function greet() {
    alert("Hello! How are you?")
}











// question-3

function deleteRow(row) {
    row.parentNode.parentNode.remove()
}






// question-5

let count = 0;

function increase() {
    document.getElementById("counter").innerText = ++count
}



function decrease(){
    if(count>0){
        document.getElementById("counter").innerText= --count
    }else{
        alert("cart is empty")
    }
}
