$(document).ready(() => {
    let ctrlIcon = $("#ctrlIcon");
    let playBtn = $("#playBtn")
    let song = $("#song")[0];


    playBtn.click((evt) => {
        if (ctrlIcon.hasClass("fa-pause")) {
            song.pause();
            ctrlIcon.removeClass("fa-pause");
            ctrlIcon.addClass("fa-play");
        } else {
            song.play();
            ctrlIcon.hasClass("fa-play");
            ctrlIcon.addClass("fa-pause");
            ctrlIcon.removeClass("fa-play");
            setInterval(() => {
                $("#progress-bar").slider({
                    value: song.currentTime
                });
            }, 500);
        }

    });

    $("#progress-bar").slider({
        max: song.duration,
        slide: (e, ui) => {
            song.currentTime = ui.value
            song.play();
            ctrlIcon.addClass('fa-pause')
            ctrlIcon.removeClass('fa-play')
        }
    });


});
