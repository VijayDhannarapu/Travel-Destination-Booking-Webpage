let buttons = document.getElementsByClassName("bookTrip");

Array.from(buttons).forEach(element => {
    element.onclick = function(){
        window.alert("Your trip has been booked...Thank You");
    }
});