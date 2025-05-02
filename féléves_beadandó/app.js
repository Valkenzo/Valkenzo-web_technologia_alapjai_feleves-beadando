let NEPTUN = "U7W4RZ";

async function loadPage() {
    try {
        const res = await fetch('nav.html');
        const navHtml = await res.text();
        const body = document.querySelector('body');
        const title = document.querySelector('title').textContent;

        if (title !== "Taxi Register") {
            
            insertNeptunInput();
        }

        body.insertAdjacentHTML('afterbegin', navHtml);

    } catch (err) {
        console.error(err);
    }
}

function insertNeptunInput() {
    const body = document.querySelector('body');

    body.insertAdjacentHTML('afterbegin', `
        <h4>Neptunkód:</h4>
        <input style="width:auto;" placeholder="Neptunkód kötelező." id="neptun-inp" type="text" value="${NEPTUN}">
    `);

    const neptunInp = document.querySelector('#neptun-inp');
    neptunInp.addEventListener('change', () => {
        NEPTUN = neptunInp.value.trim();
    });
}


function checkNeptun() {

    if (!NEPTUN) {
        alert("Nincs megadva érvényen Neptunkód!");
        return false;
    }

    return true;
}


loadPage();