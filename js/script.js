function display_time_left() {
    let count_down_date = new Date("Jan 6, 2025 24:00:00").getTime();


    let time = setInterval(function () {

        let current_date_time = new Date().getTime();

        let time_left = count_down_date - current_date_time;

        let seconds = Math.floor((time_left % (1000 * 60)) / 1000);
        let minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
        let hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let days = Math.floor(time_left / (1000 * 60 * 60 * 24));


        document.getElementById("Time till graduation").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s " + "left ";

        if (time_left < 0) {
            clearInterval(time);
            document.getElementById("Time till graduation").innerHTML = "Congratulations!!!";
        }
    }, 500);
}