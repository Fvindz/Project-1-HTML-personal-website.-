function showWelcome() {
    alert("Welcome to my video game hobby page! Let's explore.");
}

$(document).ready(function() {
    $(".toggle").click(function() {
        $(this).slideToggle("slow");
    });

    $("#toggleImageBtn").click(function() {
        $("#mainImage").slideToggle("slow");
    });

    $("#genre img").hover(function() {
        $(this).animate({ width: "340px" }, 300);
    }, function() {
        $(this).animate({ width: "300px" }, 300);
    });

    $("#platform img").hover(function() {
        $(this).fadeTo(300, 0.5);
    }, function() {
        $(this).fadeTo(300, 1);
    });

    $("#multiplayer img").css({ transition: "transform 0.4s ease" });
    $("#multiplayer img").hover(function() {
        $(this).css("transform", "rotate(5deg)");
    }, function() {
        $(this).css("transform", "rotate(0deg)");
    });
});
