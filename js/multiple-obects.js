function Hotel(name, rooms, booked){
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function (){
return this.rooms - this.booked;
};
}
var quayHotel = new Hotel( name: 'quay', rooms:40, booked:25);
var parkHotel = new Hotel( name: 'Park', rooms:120, booked:77);

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elhotel1 = documentc.getElementById( elmentld: 'hotel');
elhotel.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += quayHotel.checkAvailability();
var details2 = document.getElementById( elementld: 'hotel2');
elHotel.textContent = details2;