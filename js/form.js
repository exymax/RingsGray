const emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validation(data) {
  if (data.name.length === 0) {
    const input = $( "input[name='name']");

    input.addClass('warning');
    setTimeout(function () {
      input.removeClass('warning');
    }, 3000);

    return false;
  }

  if (data.phone.length === 0) {
    const input = $( "input[name='phone']");

    input.addClass('warning');
    setTimeout(function () {
      input.removeClass('warning');
    }, 3000);

    return false;
  }

  if (!emailreg.test(String(data.email).toLowerCase())) {
    const input = $( "input[name='email']");

    input.addClass('warning');
    setTimeout(function () {
      input.removeClass('warning');
    }, 3000);

    return false;
}

  return true;
}

$(document).ready(function(){
  $('.submit').on('click', function(){
    const url = '';
    let parsedData = {};
    let data = {};

    data = $('form').serializeArray();
    data.forEach(item => parsedData[item.name] = item.value);

    if (validation(parsedData)) {
      alert('Запрос отправлен');
        // fetch(url, parsedData)
        //   .then(res => res)
        //   .catch(err => err)
    }
  });
});
