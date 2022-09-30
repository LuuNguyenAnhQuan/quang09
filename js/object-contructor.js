var hotel = new object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77,
    hotel.checkAvaiLabitity = function () {
    return this.rooms - this.booked;
    };

var elName = document.getElementById( elemenltd: 'hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById( elmenltd: 'rooms');
elRooms.textContent = hotel.checkAvaiLabitity();