import createOl from './createOl.js';
import createFilterButton from './createFilterButton.js';
import getJson from './getJson.js';

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const p1 = getJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );
    const p2 = getJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
    );

    const tweets = (await Promise.all([p1, p2])).flat();

    console.log('Le tableau de tweet', tweets);

    const displayedOl = createOl(tweets);
    const filter = createFilterButton(tweets, displayedOl);

    document.body.append(filter);
    document.body.append(displayedOl);
  },
  { once: true },
);
