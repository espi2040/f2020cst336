let d = new Date();
document.getElementById("message").innerHTML = d 

$.ajax({
    type:"GET",
    url:"https://rawg-video-games-database.p.rapidapi.com/games",
    dataType:"json"
})