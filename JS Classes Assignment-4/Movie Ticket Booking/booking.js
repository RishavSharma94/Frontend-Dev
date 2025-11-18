const form = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const seatsError = document.getElementById("seatsError");
const ticketDiv = document.getElementById("ticket");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;

    if(!/^[A-Za-z\s]+$/.test(nameInput.value)){
        nameInput.classList.add("error");
        nameInput.classList.remove("success");
        nameError.textContent = "Name should contain only letters";
        valid = false;
    } else {
        nameInput.classList.remove("error");
        nameInput.classList.add("success");
        nameError.textContent = "";
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput.value)){
        emailInput.classList.add("error");
        emailInput.classList.remove("success");
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        emailError.textContent = "";
    }

    const seats = Number(seatsInput.value);
    if(isNaN(seats) || seats < 1 || seats > 10){
        seatsInput.classList.add("error");
        seatsInput.classList.remove("success");
        seatsError.textContent = "Seats must be between 1 and 10";
        valid = false;
    } else {
        seatsInput.classList.remove("error");
        seatsInput.classList.add("success");
        seatsError.textContent = "";
    }

    if(valid){
        const booking = { name: nameInput.value, email: emailInput.value, seats: seats };

        ticketDiv.innerHTML = `
            <h3>Ticket Details</h3>
            Name: ${booking.name} <br>
            Email: ${booking.email} <br>
            Seats: ${booking.seats}
        `;

        form.reset();
        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
        seatsInput.classList.remove("success");
    }
});
