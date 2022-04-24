import axios from "axios";

export function setHotelSettings(data) {
  localStorage.setItem("hotelSettings", JSON.stringify(data));

  return data;
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
          let _booking = setHotelSettings(response.data.body);
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
