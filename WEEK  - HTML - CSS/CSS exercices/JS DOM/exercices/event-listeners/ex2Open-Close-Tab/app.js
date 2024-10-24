
/*
When a button is clicked
the paragraph after it is displayed.
the text of the button is no longer "Open tab" but "Close tab"
If we click the button again, the paragraph disappears and the text of the button should be back to "Open tab"
*/

    const btn = document.querySelectorAll('button');
    const hid = document.getElementsByClassName('hidden');

function handleClick(i) {
    if (btn[i].textContent === "Open tab") {
        hid[i].style.display = 'block';
        btn[i].textContent = "Close tab";
    } else if (btn[i].textContent === "Close tab") {
        hid[i].style.display = 'none';
        btn[i].textContent = "Open tab";
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {handleClick(i);}); // closure inside anonimous function to remember de values of i in each interaction
}


