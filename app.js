window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com";
      const api = `${proxy}https://api.darksky.net/forecast/04bf3ace72997ad39fd8b5be2a5edd8f/${lat},${long}`;

      fetch(api)
        .then(respons =>) {
            return Response.json();
        })
        .then(data =>{
            console.log(data);
            dfasdf
        });
    });
  }
});
