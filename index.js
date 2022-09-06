const writeComment = $(".blogPostComment");

$(".commentSection").hide();

writeComment.click(() => {
  $(".singlePost").css("filter", "blur(2px)");
  $(".commentSection").show();
});

$(".ex").click(() => {
  $(".commentSection").hide();
  $(".singlePost").css("filter", "");
});

const loginForm = $(".loginForm");
const signupForm = $(".signupForm");

signupForm.submit(() => {
  alert("submitted");
});
