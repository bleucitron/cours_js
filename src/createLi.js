import moment from '../node_modules/moment/dist/moment.js';

export default function createLi(tweet) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  li.classList.add('tweet');
  textDiv.classList.add('text');
  authorDiv.classList.add('author');
  dateDiv.classList.add('date');

  li.append(authorDiv, textDiv, dateDiv);

  textDiv.textContent = tweet.full_text;
  dateDiv.textContent = moment(
    tweet.created_at,
    'ddd MMM DD HH:mm:ss Z yyyy',
  ).fromNow();
  authorDiv.textContent = tweet.user.name;

  return li;
}
