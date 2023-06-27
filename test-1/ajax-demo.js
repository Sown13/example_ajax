function showAllLesson() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/lessons",
        success(dataGotFromApi) {
            console.log(dataGotFromApi);
            console.log(screen.width);
            console.log(screen.height);


            let view = "";

            view += `<table>
    <tr>
        <td>#ID</td>
        <td>Tên Bài học</td>
    </tr>`

            for (let i = 0; i < dataGotFromApi.length; i++) {
                view += ` <tr>
        <td>${dataGotFromApi[i].lessonId}</td>
        <td>${dataGotFromApi[i].lessonName}</td>
    </tr>`
            }

            view += `</table>`

            document.getElementById("display").innerHTML = view;
        }
    })
}


function showAllSlide() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/slides",
        success(dataGotFromApi) {
            console.log(dataGotFromApi);

            let viewAllSlide = "";

            viewAllSlide += `<table>
    <tr>
        <td>#ID</td>
        <td>Tên Slide</td>
        <td>Thuộc về bài học</td>
    </tr>`

            for (let i = 0; i < dataGotFromApi.length; i++) {
                viewAllSlide += ` <tr>
        <td>${dataGotFromApi[i].slideId}</td>
        <td>${dataGotFromApi[i].slideName}</td>
        <td>${dataGotFromApi[i].lesson.lessonName}</td>
    </tr>`
            }

            viewAllSlide += `</table>`

            document.getElementById("display").innerHTML = viewAllSlide;
        }
    })
}

function showFormCreate() {
    let viewForm = ``;
    viewForm = `<form id="add-smartphone">
    <table>
        <tr>
            <td>Tên Slide:</td>
            <td><input type="text" id="slideName" placeholder="tên"></td>
        </tr>
        <tr>
            <td>Đường dẫn tới slide:</td>
            <td><input type="text" id="slideSrc" placeholder="link"></td>
        </tr>
        <tr>
            <td>Id bài học</td>
            <td><input type="text" id="lessonId" placeholder="lessonId"></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" value="Thêm slides mới" onclick="addNewSlide()"></td>
        </tr>
    </table>
</form>`
    document.getElementById("display").innerHTML = viewForm;
}

function addNewSlide() {
    //lay du lieu
    let slideName = $('#slideName').val();
    let slideSrc = $('#slideSrc').val();
    let lessonId = $('#lessonId').val();
    let newSlide = {
        slideName: slideName,
        slideSrc: slideSrc,
        lesson: {
            "lessonId": lessonId
        }
    };
    console.log(newSlide);
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newSlide),
        //tên API
        url: "http://localhost:8080/api/slides",
        //xử lý khi thành công
        success: console.log('success')
    });
    showAllSlide();
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();

}


