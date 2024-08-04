// question-one

function getValues(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value
    let formDataDiv = document.getElementById('formData');
    formDataDiv.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>First Name:</strong> ${name}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `
}

// question-2
function readMore(){
let story = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi porro in veritatis minus,"
document.getElementById("story").innerText=story
}
