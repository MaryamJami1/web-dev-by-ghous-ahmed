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
function readMore() {
    let story = `In a small town nestled between rolling hills, lived a young girl named Lily. She loved flying kites, and every weekend, she would race to the park with her favorite bright red kite. One sunny Saturday, as she prepared for another day of kite flying, she noticed an elderly man sitting alone on a bench, looking wistfully at the sky.

The man, Mr. Thompson, was known to the townspeople as a kind soul who had once been a renowned kite maker. However, he hadn't flown a kite in years due to his declining health. Lily, always keen to share her joy, approached Mr. Thompson with a smile.

“Hello, Mr. Thompson! Would you like to see my kite fly?” she asked.

The old man’s eyes twinkled with a mix of surprise and delight. “I’d love to,” he replied softly.

Lily ran to the open field, letting the red kite catch the wind. It soared high, dancing gracefully in the blue sky. She glanced back at Mr. Thompson and noticed his face light up with nostalgia.

After a while, Lily returned to Mr. Thompson, holding the kite. “Would you like to hold it?” she offered.

Mr. Thompson hesitated but accepted the kite, feeling its delicate string in his hands. With a gentle hand, he helped Lily guide it through the air. For a moment, it was as if he had returned to his youth, surrounded by the joy and freedom that flying kites brought.

“Thank you, Lily,” Mr. Thompson said, his voice filled with emotion. “This is the most 

`

document.getElementById("story").innerText = story;
}