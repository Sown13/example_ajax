let slideList = [];

function showAllLesson() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/slides",
        success(dataGotFromApi) {
            console.log(dataGotFromApi);
            slideList = dataGotFromApi;
        }
    })
}

showAllLesson();


let currentPage = -1;

function showNextPage() {
    let prefix = '<img src=';
    let src;
    let suffix = "alter='Không tìm thấy slide' style='height: 800px;width: 1500px'>";
    let view;
    if (currentPage < slideList.length - 1) {
        src = slideList[currentPage + 1].slideSrc;
        currentPage++;
    } else {
        src = slideList[currentPage].slideSrc;
    }
    view = prefix + src + suffix;
    document.getElementById("display").innerHTML = view;
}

function showPreviousPage() {
    let prefix = '<img src=';
    let src;
    let suffix = "alter='Không tìm thấy slide' style='height: 800px;width: 1500px'>";
    let view;
    if (currentPage > 0) {
        src = slideList[currentPage - 1].slideSrc;
        currentPage--;
    } else {
        src = slideList[currentPage].slideSrc;
    }
    view = prefix + src + suffix;
    document.getElementById("display").innerHTML = view;
}

$(function () {
    $(".transformer").click(function(){
        $(this).text("Đã biến hình");
    });
})

$(document).ready(function(){
    $("#hid").click(function(){
        $("#hid").hide()
    });
});

$("#onEvent").on({
    mouseenter: function () {
        $(this).css("background-color", "black");
    },
    mouseleave: function () {
        $(this).css("background-color", "lightblue");
    },
    click: function () {
        $(this).css("background-color", "yellow");
    },
});

