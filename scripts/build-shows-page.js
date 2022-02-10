const showsList = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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
    dateInfoEl.innerText = shows.date;
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
    venueInfoEl.innerText = shows.venue;
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

loadShows(showsList);
