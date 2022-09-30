var hotel = {
    name : "Park",
    rooms : 120,
    booked: 77,
    checkAvaiLabitity : function (){
        return this.booked;
    }
};

var elName = document.getElementById(elementld: 'hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById(elmentld: 'rooms');
elName.textContent = hotel.checkAvaiLabitity();
