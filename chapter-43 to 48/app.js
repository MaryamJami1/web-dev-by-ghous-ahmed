// question one

function greet(){
    alert("Hello! How are you?")
}


// question-3
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }