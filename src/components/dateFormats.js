const dateFormats = (date) => {
    var strArray = [
      'Janu',
      'Febr',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agus',
      'Sept',
      'Okto',
      'Nove',
      'Dese',
    ];
    const day = date.substring(8, 10);
    if (day[0] === 0) {
      return day[1];
    }
    var month = strArray[date[6]];
    const years = date.substring(0, 4);

    return day + ' ' + month + ' ' + years;
  };
  export default dateFormats