$.ajax({
    url: 'http://localhost:3000/user',
    success: function (myData) {
        var dataStr = JSON.stringify(myData);
        var newData = JSON.parse(dataStr);
        console.log(myData);

        $.ajax({
            url: 'http://localhost:3000/myuser',
            type: 'POST',
            dataType: 'JSON',
            data: myData,
            success: function () {
            }
        })
    }
})