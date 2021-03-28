function getBotResponse() {
    var rawText = $("#textInput").val();
    console.log('rawText', rawText)
    var userHTML = '<div class="chat"><div class="user-photo"><img src="/static/img2.jpg"/></div><p class="userText botText1"><span>' + rawText + '</span></p></div>';
    $('#textInput').val('');
    $('#chatbox').append(userHTML);
    document.getElementById('userInput').scrollIntoView({
        block: 'start',
        behaviour: 'smooth'
    });
    $.get("/get", {
        msg: rawText
    }).done(function(data) {
        var botHTML = '<div class="chat"><div class="user-photo"><img src="/static/img1.png"/></div><p class="botText"><span>' + data + '</span></p></div>';
        $("#chatbox").append(botHTML);
        document.getElementById('userInput').scrollIntoView({
            block: 'start',
            behaviour: 'smooth'
        });
        $(".chatlogs").stop().animate({ scrollTop: $(".chatlogs")[0].scrollHeight}, 1000);
    });
}
$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getBotResponse();
        }$(".chatlogs").stop().animate({ scrollTop: $(".chatlogs")[0].scrollHeight}, 1000);
});
$("#buttonInput").click(function() {
    getBotResponse();
    $(".chatlogs").stop().animate({ scrollTop: $(".chatlogs")[0].scrollHeight}, 1000);
});