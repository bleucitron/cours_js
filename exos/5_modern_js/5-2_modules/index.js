import theBeatles, { paul, john } from './beatles.js';
import simonAndGarfunkel, {
  paul as paulSimon,
  art,
} from './simon_garfunkel.js';
import { computeAge } from './utils.js';

console.log('Paul McCartney', paul);
console.log('The Beatles', theBeatles);
console.log('Paul Simon', paulSimon);
console.log('Simon & Garfunkel', simonAndGarfunkel);

console.log("Lennon's age", computeAge(john.birthDate, john.deathDate));
console.log("Art's age", computeAge(art.birthDate));
