$(function () {
  $('#send').click(getPosts);
});

function getPosts() {
  var userId = $('#userID').val();

  var apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  $.ajax({
    url: apiUrl,
    method: 'GET',
    success: displayPosts,
    error: () => console.log('err'),
  });
}

function displayPosts(data) {
  var userInfoHtml = '<h2>User Info</h2>';

  $.each(data, (index, userPost) => {
    userInfoHtml += '<p>User ID: ' + userPost.userId + '</p>';
    userInfoHtml += '<p>Title: ' + userPost.title + '</p>';
    userInfoHtml += '<p>Body: ' + userPost.body + '</p>';
  });

  $('#userInfo').html(userInfoHtml);
}
