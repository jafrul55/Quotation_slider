const testimonial = [
  {
    // photo:
    //   "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.841152157.1712317154&semt=ais_hybrid",
    photo: "./Jafrul.png",
    text: `Ever tried. Ever failed. No matter. Try Again. Fail again. Fail
          better.The world is yours.Treat everyone kindly and light in the
          night.`,
    author: "Jafrul Alam Tusar",
  },
  {
    photo:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?ga=GA1.1.841152157.1712317154&semt=ais_hybrid",
    text: "I like to sing. Will you like to sing with me",
    author: "John",
  },
  {
    photo:
      "https://img.freepik.com/free-photo/face-gloomy-sulking-man-begging-eyes_176420-19646.jpg?ga=GA1.1.841152157.1712317154&semt=ais_hybrid",
    text: "I like to play. Will you like to play with me",
    author: "Jack",
  },
];

const getphoto = document.querySelector("img");
const gettext = document.querySelector(".textjafrul");
const getauthor = document.querySelector(".Actor");

//index initiate
let indx = 0;
//initiate function for the first execute
testimonialfact();

function testimonialfact() {
  //it will give the index number serial wise
  const { photo, text, author } = testimonial[indx];
  getphoto.src = photo;
  gettext.innerText = text;
  getauthor.innerText = author;

  indx++;
  if (indx === testimonial.length) {
    indx = 0;
  }
  setTimeout(() => {
    testimonialfact();
  }, 10000);
}
