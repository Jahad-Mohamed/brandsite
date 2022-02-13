const commentData = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

let formEl = document.querySelector(".comment__query-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  console.log(event.target.elements);
  // will output all form elements

  // All inputs are available by their name="" attribute value
  // input values are available through value property

  const nameInput = document.querySelector(".comment__box-name");
  const commentInput = document.querySelector(".comment__box-comment");

  console.log(nameInput, commentInput);

  const nameValue = nameInput.value;
  const commentValue = commentInput.value;

  const newComment = {
    name: nameValue,
    comment: commentValue,
    date: Date.now(),
    //date: new Date().getDate(),
  };

  console.log(nameValue, commentValue);
});

const loadComment = (data) => {
  let commentWrapperEl = document.querySelector(".comment__wrapper");

  for (let i = 0; i < data.length; i++) {
    const comments = data[i];

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
    imgTagsEl.innerHTML = "src=../assets/images/Mohan-muruge.jpg";
    commentUserEL.appendChild(imgTagsEl);

    const nameDateEl = document.createElement("div");
    nameDateEl.classList.add("comment__name-date");
    nameDateImageSectionEl.appendChild(nameDateEl);

    //name and date child
    const commentNameEl = document.createElement("h4");
    commentNameEl.classList.add("comment__name");
    commentNameEl.innerText = comments.name;
    nameDateEl.appendChild(commentNameEl);

    const commentDateEl = document.createElement("h4");
    commentDateEl.classList.add("comment__date");
    commentDateEl.innerText = comments.date;
    nameDateEl.appendChild(commentDateEl);

    // commment section

    const commentTextEl = document.createElement("h4");
    commentTextEl.classList.add("comment__text");
    commentTextEl.innerText = comments.comment;
    nameDateImageSectionEl.appendChild(commentTextEl);

    commentUserEL.appendChild(nameDateImageSectionEl);
  }
};

loadComment(commentData);
