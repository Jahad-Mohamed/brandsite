// const body = document.body;
// const section = document.createElement("h2");
// section.innerText = "Shows";

// body.append(section);

const showsData = [
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
  let showsWrapperEl = document.querySelector(".shows__wrapper");

  // let shows = [];

  for (let i = 0; i < data.length; i++) {
    const show = data[i];
    //   {
    // 	date: "Mon Sept 06 2021",
    // 	venue: "Ronald Lane ",
    // 	location: "San Francisco, CA",
    // },

    const showEl = document.createElement("div");
    // showEl.addEventListener("click", () => {
    // 	showEl.classList.toggle("show--active");
    // });

    showEl.classList.add("show");
    showsWrapperEl.appendChild(showEl);

    //First Cell - DATE
    const dateWrapperEl = document.createElement("div");
    dateWrapperEl.classList.add("show__wrapper");
    dateWrapperEl.classList.add("date__wrapper");

    const dateLabelEl = document.createElement("h4");
    dateLabelEl.classList.add("show__label");
    dateLabelEl.classList.add("date__label");
    dateLabelEl.innerText = "DATE";
    dateWrapperEl.appendChild(dateLabelEl);

    const dateInfoEl = document.createElement("h4");
    dateInfoEl.classList.add("show__info");
    dateInfoEl.classList.add("date__info");
    dateInfoEl.innerText = show.date;
    dateWrapperEl.appendChild(dateInfoEl);

    showEl.appendChild(dateWrapperEl);

    //Second Cell - VENUE
    const venueWrapperEl = document.createElement("div");
    venueWrapperEl.classList.add("show__wrapper");
    venueWrapperEl.classList.add("venue__wrapper");

    const venueLabelEl = document.createElement("h4");
    venueLabelEl.classList.add("show__label");
    venueLabelEl.classList.add("venue__label");
    venueLabelEl.innerText = "VENUE";
    venueWrapperEl.appendChild(venueLabelEl);

    const venueInfoEl = document.createElement("h4");
    venueInfoEl.classList.add("show__info");
    venueInfoEl.classList.add("venue__info");
    venueInfoEl.innerText = show.venue;
    venueWrapperEl.appendChild(venueInfoEl);

    showEl.appendChild(venueWrapperEl);

    //Third Cell - LOCATION
    const locationWrapperEl = document.createElement("div");
    locationWrapperEl.classList.add("show__wrapper");
    locationWrapperEl.classList.add("location__wrapper");

    const locationLabelEl = document.createElement("h4");
    locationLabelEl.classList.add("show__label");
    locationLabelEl.classList.add("location__label");
    locationLabelEl.innerText = "LOCATION";
    locationWrapperEl.appendChild(locationLabelEl);

    const locationInfoEl = document.createElement("h4");
    locationInfoEl.classList.add("show__info");
    locationInfoEl.classList.add("location__info");
    locationInfoEl.innerText = show.location;
    locationWrapperEl.appendChild(locationInfoEl);

    showEl.appendChild(locationWrapperEl);
    //Fourth Cell - BUTTON

    const buyButton = document.createElement("button");
    buyButton.classList.add("show__button");
    buyButton.classList.add("button");
    buyButton.classList.add("buy__button");
    buyButton.innerText = "BUY TICKETS";

    showEl.appendChild(buyButton);

    showsWrapperEl.appendChild(showEl);
  } //FOR LOOP ENDS HERE
};

loadShows(showsData);

// <!-- <div class="shows__wrapper"> //This exists in HTML

// <!-- <div class="show">

//         <div class="show__wrapper date__wrapper">
//           <h4 class="show__label date__label">DATE</h4>
//           <h4 class="show__info date__info">Mon Sept 06 2021</h4>
//         </div>

//         <div class="show__wrapper venue__wrapper">
//           <h4 class="show__label venue__label">VENUE</h4>
//           <h4 class="show__info venue__info">Ronald Lane</h4>
//         </div>

//         <div class="show__wrapper location__wrapper">
//           <h4 class="show__label location__label">LOCATION</h4>
//           <h4 class="show__info location__info">San Francisco, CA</h4>
//         </div>

//         <button class="show__button button buy__button">BUY TICKETS</button>

//       </div> -->

//       </div> -->
