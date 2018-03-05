$(function () {

    // your code will go here
    $.ajax({
        url: 'https://www.codeschool.com/users/mad_cow.json',
        dataType: 'jsonp',
        success: function (response) {
            for ( let i = 0; i < response.courses.completed.length; i++ ) {
                $('#badges').append('<div class="course"><h3>' + response.courses.completed[i].title + '</h3></div>');
            }
        }
    });
});
