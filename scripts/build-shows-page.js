const showsData = axios
  .get(
    "https://project-1-api.herokuapp.com/showdates/?api_key=%3C015e6da7-7d99-4573-8225-abdf7d3aab43%3E3E"
  )
  .then((response) => {
    let dataArr = response.data;
    console.log(dataArr);
    let commentData = dataArr.forEach((dataArr) => {
      console.log(dataArr);
    });
    loadShows(dataArr);
  });

const loadShows = (data) => {
  let showsContainerEl = document.querySelector(".shows__container");

  // let shows = [];

  for (let i = 0; i < data.length; i++) {
    const shows = data[i];

    const showsEl = document.createElement("div");
    showsEl.classList.add("shows");
    showsContainerEl.appendChild(showsEl);

    //DATE section
    const dateSectionEl = document.createElement("div");
    dateSectionEl.classList.add("shows__date");

    const dateTagsEl = document.createElement("h4");
    dateTagsEl.classList.add("shows__label");
    dateTagsEl.innerText = "DATE";
    dateSectionEl.appendChild(dateTagsEl);

    const dateInfoEl = document.createElement("h4");
    dateInfoEl.classList.add("shows__date-info");
    dateInfoEl.innerText = convert("/Date(" + shows.date + ")/");
    dateSectionEl.appendChild(dateInfoEl);

    showsEl.appendChild(dateSectionEl);

    //VENUE section
    const venueSectionEl = document.createElement("div");
    venueSectionEl.classList.add("shows__venue");

    const venueLabelEl = document.createElement("h4");
    venueLabelEl.classList.add("shows__label");
    venueLabelEl.innerText = "VENUE";
    venueSectionEl.appendChild(venueLabelEl);

    const venueInfoEl = document.createElement("h4");
    venueInfoEl.classList.add("shows__info");
    venueInfoEl.innerText = shows.place;
    venueSectionEl.appendChild(venueInfoEl);

    showsEl.appendChild(venueSectionEl);

    //LOCATION section
    const locationSectionEl = document.createElement("div");
    locationSectionEl.classList.add("shows__location");

    const locationLabelEl = document.createElement("h4");
    locationLabelEl.classList.add("shows__label");
    locationLabelEl.innerText = "LOCATION";
    locationSectionEl.appendChild(locationLabelEl);

    const locationInfoEl = document.createElement("h4");
    locationInfoEl.classList.add("shows__address");
    locationInfoEl.innerText = shows.location;
    locationSectionEl.appendChild(locationInfoEl);

    showsEl.appendChild(locationSectionEl);

    // BUTTON section

    const buyButton = document.createElement("button");
    buyButton.classList.add("shows__button");
    buyButton.innerText = "BUY TICKETS";

    showsEl.appendChild(buyButton);

    showsContainerEl.appendChild(showsEl);
  } //FOR LOOP ENDS HERE
};

function convert(timestamp) {
  let date = new Date( // Convert to date
    parseInt(
      // Convert to integer
      timestamp.split("(")[1] // Take only the part right of the "("
    )
  );
  return [
    ("0" + date.getDate()).slice(-2), // Get day and pad it with zeroes
    ("0" + (date.getMonth() + 1)).slice(-2), // Get month and pad it with zeroes
    date.getFullYear(), // Get full year
  ].join("/"); // Glue the pieces together
}

console.log(convert("/Date(1630900800000)/"));
// loadShows(dataArr);
