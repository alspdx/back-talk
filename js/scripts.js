$(document).ready(function() {
  $("img#nicekitty").click(function() {
    $("ul#kittymeow").prepend("<div>Dog, you are my slave and shall do my bidding.</div>");
    $("ul#doggybark").prepend("<div>Bork, you are doing me a huge frighten.</div>");
  });
});
