let formEl = document.querySelector(".comment__query-form");

const loadComment = (arrayComment) => {
  let commentWrapperEl = document.querySelector(".comment__wrapper");
  console.log(arrayComment);
  arrayComment.forEach((data) => {
    const commentLogEL = document.createElement("div");
    commentLogEL.classList.add("comment__log");
    commentWrapperEl.appendChild(commentLogEL);

    const commentUserEL = document.createElement("div");
    commentUserEL.classList.add("comment__user");
    commentLogEL.appendChild(commentUserEL);

    // name section

    const nameDateImageSectionEl = document.createElement("div");
    nameDateImageSectionEl.classList.add("comment__name-date-image");

    const imgTagsEl = document.createElement("img");
    imgTagsEl.classList.add("comment__image");
    //
    commentUserEL.appendChild(imgTagsEl);

    const nameDateEl = document.createElement("div");
    nameDateEl.classList.add("comment__name-date");
    nameDateImageSectionEl.appendChild(nameDateEl);

    //name and date child
    const commentNameEl = document.createElement("h4");
    commentNameEl.classList.add("comment__name");
    commentNameEl.innerText = data[i].name;
    nameDateEl.appendChild(commentNameEl);

    const commentDateEl = document.createElement("h4");
    commentDateEl.classList.add("comment__date");
    commentDateEl.innerText = convert("/Date(" + data[i].timestamp + ")/");
    nameDateEl.appendChild(commentDateEl);

    // commment section

    const commentTextEl = document.createElement("h4");
    commentTextEl.classList.add("comment__text");
    commentTextEl.innerText = data[i].comment;
    nameDateImageSectionEl.appendChild(commentTextEl);

    commentUserEL.appendChild(nameDateImageSectionEl);
  });
};

// new comment submit validation
document.querySelector(".comment__button").type = "button";

// formEl.addEventListener("submit", (event) => {
document
  .querySelector(".comment__button")
  .addEventListener("click", (event) => {
    if (
      document.querySelector(".comment__box-name").value != "" &&
      document.querySelector(".comment__box-comment").value != ""
    ) {
      event.preventDefault();
      // console.log("test");
      // console.log(event);
      // console.log(event.target.elements);

      // will output all form elements

      // All inputs are available by their name="" attribute value
      // input values are available through value property

      const nameInput = document.querySelector(".comment__box-name");
      const commentInput = document.querySelector(".comment__box-comment");

      console.log("myvalues", nameInput, commentInput);

      const nameValue = nameInput.value;
      const commentValue = commentInput.value;

      const newComment = {
        name: nameValue,
        comment: commentValue,
      };

      console.log("myvalues2", nameValue, commentValue);
      postComment(newComment);
      loadComment(newComment);

      nameInput.value = null;
      commentInput.value = null;
    } else {
      if (!document.querySelector(".comment__box-name").checkValidity()) {
        document.querySelector(".comment__box-name").style.border =
          "1px solid red";
        // document.querySelector(".comment__box-comment").setAttribute('data-after', 'anything');
        document.querySelector(".errorClass1").style.color = "red";

        document.querySelector(".errorClass1").style.display = "block";
      }
      if (document.querySelector(".comment__box-comment").value == "") {
        document.querySelector(".comment__box-comment").style.border =
          "1px solid red";

        document.querySelector(".errorClass2").style.color = "red";

        document.querySelector(".errorClass2").style.display = "block";
      }
      document
        .querySelector(".comment__box-comment")
        .addEventListener("textentered", (event) => {
          event.target.style.border = "1px solid black";
          document.querySelector(".errorClass2").style.display = "none";
        });
      document
        .querySelector(".comment__box-name")
        .addEventListener("textentered", (event) => {
          event.target.style.border = "1px solid black";
          document.querySelector(".errorClass1").style.display = "none";
        });
    }
  });

let postComment = (comment) => {
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments/?api_key=%3C015e6da7-7d99-4573-8225-abdf7d3aab43%3E",
      comment
    )
    .then((response) => {
      let initialDiv = document.createElement("div");
      initialDiv.className = "initialDiv";
      //
      let comment__log = document.createElement("div");
      comment__log.className = "comment__log";
      let comment__user = document.createElement("div");
      comment__user.className = "comment__user";
      comment__log.append(comment__user);
      let comment__image = document.createElement("img");
      comment__image.className = "comment__image";

      let comment__name_date_image = document.createElement("DIV");
      comment__name_date_image.className = "comment__name-date-image";

      let comment__name_date = document.createElement("div");
      comment__name_date.className = "comment__name-date";

      let comment__name = document.createElement("h4");
      comment__name.className = "comment__name";
      comment__name.innerHTML = response.data.name;
      let comment__date = document.createElement("h4");
      comment__date.className = "comment__date";
      comment__date.innerHTML = convert(
        "/Date(" + response.data.timestamp + ")/"
      );

      let comment__text = document.createElement("h4");
      comment__text.className = "comment__text";
      comment__text.innerHTML = response.data.comment;

      comment__name_date.append(comment__name, comment__date);
      comment__name_date_image.append(comment__name_date, comment__text);
      comment__user.append(
        initialDiv,
        comment__image,
        comment__name_date_image
      );

      //  const deleteButton = document.createElement("button");

      console.log(
        response.data,
        "response",
        document.querySelector(".comment__wrapper").prepend(comment__log)
      );
      // getAllComment().catch((err) => console.log("My API Error: ", err))
      // getAllComment();
    });
};
getAllComment = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments/?api_key=%3C015e6da7-7d99-4573-8225-abdf7d3aab43%3E"
    )
    .then((response) =>
      processResponse(response.data).catch((err) =>
        console.log("My API Error: ", err)
      )
    );
};

// HTTP GET
const getData = axios
  .get(
    "https://project-1-api.herokuapp.com/comments/?api_key=%3C015e6da7-7d99-4573-8225-abdf7d3aab43%3E"
  )
  .then((response) => {
    let dataArr = response.data;
    dataArr.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    // console.log(
    //   dataArr.sort(function (a, b) {
    //     return (
    //       convert("/Date(" + a.timestamp + ")/") -
    //       convert("/Date(" + b.timestamp + ")/")
    //     );
    //   })

    dataArr.forEach((dataArr) => {
      // console.log(dataArr.name);
      // console.log(dataArr.timestamp);
      // console.log(dataArr.comment);
    });

    let name = dataArr.name;
    let timestamp = dataArr.timestamp;
    let comment = dataArr.comment;

    loadComment(dataArr);
  });

function convert(timestamp) {
  var date = new Date( // Convert to date
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
