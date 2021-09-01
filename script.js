$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

$("#searchBTN").click(function () {
  console.log("search button tapped");
  const cityName = $("#cityID").val();
  const currentDate = new Date();
  const dateNtimeList = currentDate.toISOString().split("T");
  const justDate = dateNtimeList[0];

  // get current weather
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://weatherapi-com.p.rapidapi.com/current.json?q=" + cityName,
    method: "GET",
    headers: {
      "x-rapidapi-key": "3e63a22131msh15b58637f3054e8p15d663jsn6ffa50dd837e",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    var city = response.location.name;
    var condition = response.current.condition.text;
    var temp = response.current.temp_c;
    var lastUpdated = response.current.last_updated;
    var icon = response.current.condition.icon;
    var image = icon.replace("//cdn.weatherapi.com/", "");
    console.log("get current weather");
    document.getElementById("cardTitleBar").textContent = city;
    document.getElementById("condition").textContent = condition;
    document.getElementById("temp").textContent = temp;
    document.getElementById("lastUpdated").textContent = lastUpdated;
    document.getElementById("currentDate").textContent = justDate;
    $("#weather_icon").attr("src", image);
  });

  // get astro data
  const settings_astro = {
    async: true,
    crossDomain: true,
    url:
      "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=" +
      cityName +
      "&dt=" +
      justDate,
    method: "GET",
    headers: {
      "x-rapidapi-key": "3e63a22131msh15b58637f3054e8p15d663jsn6ffa50dd837e",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };
  $.ajax(settings_astro).done(function (response) {
    console.log(response);
    var sunrise = response.astronomy.astro.sunrise;
    var sunset = response.astronomy.astro.sunset;
    var moonrise = response.astronomy.astro.moonrise;
    var moonset = response.astronomy.astro.moonset;
    console.log("get astro data");
    document.getElementById("sunrise").textContent = sunrise;
    document.getElementById("sunset").textContent = sunset;
    document.getElementById("moonrise").textContent = moonrise;
    document.getElementById("moonset").textContent = moonset;
  });

  // get forcast data
  const settings_forcast = {
    async: true,
    crossDomain: true,
    url:
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
      cityName +
      "&days=3",
    method: "GET",
    headers: {
      "x-rapidapi-key": "3e63a22131msh15b58637f3054e8p15d663jsn6ffa50dd837e",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  $.ajax(settings_forcast).done(function (response) {
    console.log(response);
    var forecast_lastUpdated = response.current.last_updated;
    //day1
    var day1_date = response.forecast.forecastday[0].date;
    var day1_condition = response.forecast.forecastday[0].day.condition.text;
    var day1_temp = response.forecast.forecastday[0].day.maxtemp_c;
    var day1_icon = response.forecast.forecastday[0].day.condition.icon;
    var day1_image = day1_icon.replace("//cdn.weatherapi.com/", "");
    document.getElementById("day1_condition").textContent = day1_condition;
    document.getElementById("day1_temp").textContent = day1_temp;
    document.getElementById("day1_lastUpdated").textContent =
      forecast_lastUpdated;
    document.getElementById("day1_date").textContent = day1_date;
    $("#day1_weather_icon").attr("src", day1_image);
    var day1_sunrise = response.forecast.forecastday[0].astro.sunrise;
    var day1_sunset = response.forecast.forecastday[0].astro.sunset;
    var day1_moonrise = response.forecast.forecastday[0].astro.moonrise;
    var day1_moonset = response.forecast.forecastday[0].astro.moonset;
    document.getElementById("day1_sunrise").textContent = day1_sunrise;
    document.getElementById("day1_sunset").textContent = day1_sunset;
    document.getElementById("day1_moonrise").textContent = day1_moonrise;
    document.getElementById("day1_moonset").textContent = day1_moonset;
    //day2
    var day2_date = response.forecast.forecastday[1].date;
    var day2_condition = response.forecast.forecastday[1].day.condition.text;
    var day2_temp = response.forecast.forecastday[1].day.maxtemp_c;
    var day2_icon = response.forecast.forecastday[1].day.condition.icon;
    var day2_image = day2_icon.replace("//cdn.weatherapi.com/", "");
    document.getElementById("day2_condition").textContent = day2_condition;
    document.getElementById("day2_temp").textContent = day2_temp;
    document.getElementById("day2_lastUpdated").textContent =
      forecast_lastUpdated;
    document.getElementById("day2_date").textContent = day2_date;
    $("#day2_weather_icon").attr("src", day2_image);
    var day2_sunrise = response.forecast.forecastday[1].astro.sunrise;
    var day2_sunset = response.forecast.forecastday[1].astro.sunset;
    var day2_moonrise = response.forecast.forecastday[1].astro.moonrise;
    var day2_moonset = response.forecast.forecastday[1].astro.moonset;
    document.getElementById("day1_sunrise").textContent = day2_sunrise;
    document.getElementById("day1_sunset").textContent = day2_sunset;
    document.getElementById("day1_moonrise").textContent = day2_moonrise;
    document.getElementById("day1_moonset").textContent = day2_moonset;
    //day3
    var day3_date = response.forecast.forecastday[2].date;
    var day3_condition = response.forecast.forecastday[2].day.condition.text;
    var day3_temp = response.forecast.forecastday[2].day.maxtemp_c;
    var day3_icon = response.forecast.forecastday[2].day.condition.icon;
    var day3_image = day3_icon.replace("//cdn.weatherapi.com/", "");
    document.getElementById("day3_condition").textContent = day3_condition;
    document.getElementById("day3_temp").textContent = day3_temp;
    document.getElementById("day3_lastUpdated").textContent =
      forecast_lastUpdated;
    document.getElementById("day3_date").textContent = day3_date;
    $("#day3_weather_icon").attr("src", day3_image);
    var day3_sunrise = response.forecast.forecastday[2].astro.sunrise;
    var day3_sunset = response.forecast.forecastday[2].astro.sunset;
    var day3_moonrise = response.forecast.forecastday[2].astro.moonrise;
    var day3_moonset = response.forecast.forecastday[2].astro.moonset;
    document.getElementById("day3_sunrise").textContent = day3_sunrise;
    document.getElementById("day3_sunset").textContent = day3_sunset;
    document.getElementById("day3_moonrise").textContent = day3_moonrise;
    document.getElementById("day3_moonset").textContent = day3_moonset;
    console.log("get forecast data");
  });
});

$("#history_btn").click(function () {
  let history_cityName = $("#history_cityText").val();
  let history_date = $("#history_dateTime").val();
  const his_dateNtimeList = history_date.split("T");
  const his_justDate = his_dateNtimeList[0];
  const hour = "1";

  if (history_cityName === "" || history_date === "") {
    alert("Enter Date and City to search");
  } else {
    // get history data
    const settings_history = {
      async: true,
      crossDomain: true,
      url:
        "https://weatherapi-com.p.rapidapi.com/history.json?q=" +
        history_cityName +
        "&dt=" +
        his_justDate +
        "&lang=en&hour=" +
        hour,
      method: "GET",
      headers: {
        "x-rapidapi-key": "3e63a22131msh15b58637f3054e8p15d663jsn6ffa50dd837e",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    $.ajax(settings_history).done(function (response) {
      console.log(response);
      var his_date = response.forecast.forecastday[0].date;
      var his_condition = response.forecast.forecastday[0].day.condition.text;
      var his_temp = response.forecast.forecastday[0].day.maxtemp_c;
      var his_city = response.location.name;
      document.getElementById("his_condition").textContent = his_condition;
      document.getElementById("his_temp").textContent = his_temp;
      document.getElementById("his_city").textContent = his_city;
      document.getElementById("his_date").textContent = his_date;
      var his_sunrise = response.forecast.forecastday[0].astro.sunrise;
      var his_sunset = response.forecast.forecastday[0].astro.sunset;
      var his_moonrise = response.forecast.forecastday[0].astro.moonrise;
      var his_moonset = response.forecast.forecastday[0].astro.moonset;
      document.getElementById("his_sunrise").textContent = his_sunrise;
      document.getElementById("his_sunset").textContent = his_sunset;
      document.getElementById("his_moonrise").textContent = his_moonrise;
      document.getElementById("his_moonset").textContent = his_moonset;
    });
  }
});
