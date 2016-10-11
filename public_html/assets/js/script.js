$(document).ready(function () {
    $("#btn-image").click(function () {
        $("#like,#nolike,#engage").hide();
        $("#image").show();
    });
    $("#btn-engage").click(function () {
        $("#image,#like,#nolike").hide();
        $("#engage").show();
    });
    $("#btn-dontlike").click(function () {
        $("#engage,#like,#image").hide();
        $("#nolike").show();
    });
    $("#btn-like").click(function () {
        $("#image,#nolike,#engage").hide();
        $("#like").show();
    });
        $(".showall").click(function () {
        $("#like,#image,#nolike,#engage").show();
    });
});