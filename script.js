// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "app.html";
    } else {
        alert("Invalid login");
    }
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}

// STORAGE
let donors = JSON.parse(localStorage.getItem("donors")) || [];

// DISPLAY
function displayDonors(list) {
    let donorList = document.getElementById("donorList");
    if (!donorList) return;

    donorList.innerHTML = "";

    list.forEach((d, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <b>${d.name}</b><br>
            Blood: ${d.blood}<br>
            Contact: ${d.contact}<br>
            Location: ${d.location}<br>
            <button onclick="deleteDonor(${index})">Delete</button>
        `;
        donorList.appendChild(li);
    });
}

// ADD
function addDonor() {
    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value;
    let contact = document.getElementById("contact").value;
    let location = document.getElementById("location").value;

    if (!name || !blood || !contact || !location) {
        alert("Fill all fields");
        return;
    }

    donors.push({ name, blood, contact, location });
    localStorage.setItem("donors", JSON.stringify(donors));

    displayDonors(donors);
}

// DELETE
function deleteDonor(index) {
    donors.splice(index, 1);
    localStorage.setItem("donors", JSON.stringify(donors));
    displayDonors(donors);
}

// SEARCH
function searchDonor() {
    let value = document.getElementById("search").value.toLowerCase();

    let filtered = donors.filter(d =>
        d.blood.toLowerCase().includes(value)
    );

    displayDonors(filtered);
}

// LOAD
displayDonors(donors);
