import createLi from './createLi.js';

export default function createOl(tweets) {
  const ol = document.createElement('ol');

  tweets.forEach(tweet => {
    const li = createLi(tweet);
    ol.append(li);
  });

  return ol;
}
