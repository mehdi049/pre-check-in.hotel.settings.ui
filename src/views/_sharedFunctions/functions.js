import axios from "axios";

export function setHotelSettings(data) {
  localStorage.setItem("hotelSettings", JSON.stringify(data));

  return data;
}

export function refreshHotelSettings() {
  let _hotelSettings = localStorage.getItem("hotelSettings");
  if (_hotelSettings !== null) {
    _hotelSettings = JSON.parse(_hotelSettings);
    let id = _hotelSettings.id;

    axios
      .get(
        process.env.VUE_APP_PRECHECKIN_API_ENDPOINT +
          "/hotelSettings/hotelSettings/" +
          id
      )
      .then((response) => {
        if (response.data.status === 200) {
          let _hotelSettings = setHotelSettings(response.data.body);
          localStorage.setItem(
            "hotelSettings_original",
            JSON.stringify(response.data.body)
          );
          localStorage.setItem("hotelSettings", JSON.stringify(_hotelSettings));
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
