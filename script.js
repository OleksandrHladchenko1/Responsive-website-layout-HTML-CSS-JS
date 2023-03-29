const feedbacks = [{
  id: 0,
  authorSrc: './img/author1.png',
  authorName: 'Stephan Heil',
  authorPosition: 'Lindner & Steffen GmbH designer',
  subComment: 'As a designer I like to work with fast- and easy to use software to get a quick result of the idea i have in mind.',
  comment: '"Froont is a great tool for setting up fully functional one-pagers for any customer with nice effects and cool animations".',
}, {
  id: 1,
  authorSrc: './img/author2.png',
  authorName: 'Wouter Tweehuijsen',
  authorPosition: 'Brandmannen',
  subComment: 'Just drag-and-drop or choose from awesome pre-made elements. I\'ve built many landing pages for clients with FROONT, and it has saved me a lot of time',
  comment: '"FROONT is a fantastic tool! I don\'t know a lot about writing code and with FROONT I don\'t need to.',
}, {
  id: 2,
  authorSrc: './img/author3.png',
  authorName: 'Lev Manovich',
  authorPosition: 'Professor and Director',
  subComment: '',
  comment: '"Just amazed at how FROONT makes it so easy to make changes."',
}];

/* SWITCH BUTTONS */
const prevButton = document.querySelector('.feedback__prev');
const nextButton = document.querySelector('.feedback__next');

prevButton.addEventListener('click', () => switchFeedback('prev'));
nextButton.addEventListener('click', () => switchFeedback('next'));

/* FEEDBACK CARD ELEMENTS */
const authorImage = document.querySelector('.feedback__author-avatar');
const authorNameField = document.querySelector('.feedback__author-name');
const authorPositionField = document.querySelector('.feedback__author-position');
const subCommentField = document.querySelector('.feedback__subcomment-text');
const commentField = document.querySelector('.feedback__comment');

const interval =  setInterval(() => switchFeedback('next'), 8000);

const fillFeedback = ({
  authorSrc,
  authorName,
  authorPosition,
  subComment,
  comment,
}) => {
  authorImage.src = authorSrc;
  authorNameField.innerHTML = authorName;
  authorPositionField.innerHTML = authorPosition;
  subCommentField.innerHTML = subComment;
  commentField.innerHTML = comment;
};

const switchFeedback = (direction) => {
  const currentFeedbackIndex = feedbacks.findIndex(feedback => feedback.authorName === authorNameField.innerHTML);
  let nextFeedback;
  const swithNext = () => {
    nextFeedback = currentFeedbackIndex === feedbacks.length - 1
    ? nextFeedback = feedbacks[0]
    : nextFeedback = feedbacks[currentFeedbackIndex + 1];
  };
  const swithPrev = () => {
    nextFeedback = currentFeedbackIndex === 0
    ? nextFeedback = feedbacks[feedbacks.length - 1]
    : nextFeedback = feedbacks[currentFeedbackIndex - 1];
  };

  direction === 'next' ? swithNext() : swithPrev();

  fillFeedback(nextFeedback);
};
