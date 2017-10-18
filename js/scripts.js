$(document).ready(function() {
  $("img#nicekitty").click(function() {
    $("ul#kittymeow").prepend("<li>Dog, you are my slave and shall do my bidding.</li>");
    $("ul#doggybark").prepend("<li>Bork, you are doing me a huge frighten.</li>");
    $("ul#kittymeow").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#doggybark").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("img#goodboy").click(function() {
    $("ul#kittymeow").prepend("<li>What a fool you are!</li>");
    $("ul#doggybark").prepend("<li>Can't we just play nice?</li>");
    $("ul#kittymeow").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#doggybark").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
