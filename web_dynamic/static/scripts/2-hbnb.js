$.get('http://127.0.0.1:5000/api/v1/status/', function(data) {
    if (data.status === 'OK') {
        $('div#api_status').css('background-color', '#ff545f');
    } else {
        $('div#api_status').css('background-color', '#cccccc');
    }
});
