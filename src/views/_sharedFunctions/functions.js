import axios from "axios";

export function setBooking(data) {
  let _booking = {};

  _booking.totalCost = 0;

  _booking.bookingReference = data.bookingReference;
  _booking.reservedBy =
    data.rooms[0].guests[0].firstName + " " + data.rooms[0].guests[0].lastName;
  _booking.bookingStatusId = data.statusId;
  _booking.bookingStatus = data.status.status;

  let _bookingAdds = [];
  data.bookingAdds.map((x) => {
    _bookingAdds.push({
      id: x.id,
      bookingAddAmount: x.bookingAddAmount,
      bookingAddSingle: x.bookingAddSingle,
      bookingAddText: x.bookingAddText,
      bookingAddTotal: x.bookingAddTotal,
    });

    _booking.totalCost += parseFloat(x.bookingAddTotal);
  });
  _booking.bookingAdds = _bookingAdds;

  let _rooms = [];
  data.rooms.map((x) => {
    let _totalRoomPrice = 0;

    let _guests = [];
    x.guests.map((g) => {
      _guests.push({
        id: g.id,
        birthday: g.birthday,
        city: g.city,
        company: g.company,
        country: g.country,
        email: g.email,
        firstName: g.firstName,
        lastName: g.lastName,
        guestComment: g.guestComment,
        guestNumber: g.guestNumber,
        guestTypeText: g.guestTypeText,
        passport: g.passport,
        phone: g.phone,
        salutation: g.salutation,
        street: g.street,
        streetNumber: g.streetNumber,
        title: g.title,
        zip: g.zip,
        roomId: x.id,
      });
    });

    let _rates = [];
    x.rates.map((r) => {
      _rates.push({
        id: r.id,
        rateAmount: r.rateAmount,
        rateFrom: r.rateFrom,
        rateTo: r.rateTo,
        rateSingle: r.rateSingle,
        rateText: r.rateText,
        rateTotal: r.rateTotal,
        roomId: r.roomId,
      });
      _totalRoomPrice += parseFloat(r.rateTotal);
      _booking.totalCost += parseFloat(r.rateTotal);
    });

    let _adds = [];
    x.roomAdds.map((a) => {
      _adds.push({
        id: a.id,
        roomAddAmount: a.roomAddAmount,
        roomAddSingle: a.roomAddSingle,
        roomAddText: a.roomAddText,
        roomAddTotal: a.roomAddTotal,
        roomId: a.roomId,
      });
      _totalRoomPrice += parseFloat(a.roomAddTotal);
      _booking.totalCost += parseFloat(a.roomAddTotal);
    });

    _rooms.push({
      id: x.id,
      arrivalDate: x.arrivalDate,
      arrivalTime: x.arrivalTime,
      departureDate: x.departureDate,
      packageText: x.packageText,
      roomComment: x.roomComment,
      roomNumber: x.roomNumber,
      roomTypeText: x.roomTypeText,
      totalRoomPrice: _totalRoomPrice,
      guests: _guests,
      rates: _rates,
      roomAdds: _adds,
    });
  });

  _booking.rooms = _rooms;

  localStorage.setItem("booking", JSON.stringify(_booking));

  return _booking;
}

export function refreshBooking() {
  let _booking = localStorage.getItem("booking");
  if (_booking !== null) {
    _booking = JSON.parse(_booking);
    let reference = _booking.bookingReference;

    axios
      .get(
        process.env.VUE_APP_PRECHECKIN_API_ENDPOINT +
          "/CheckIn/booking/" +
          reference
      )
      .then((response) => {
        if (response.data.status === 200) {
          let _booking = setBooking(response.data.body);
          localStorage.setItem(
            "booking_original",
            JSON.stringify(response.data.body)
          );
          localStorage.setItem("booking", JSON.stringify(_booking));
        }
      });
  }
}

export function ignoreTimezone(date) {
  if (date !== null) {
    date = new Date(date);
    return new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    ).toISOString();
  }
  return null;
}

export function differenceInDays(date1, date2) {
  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}
