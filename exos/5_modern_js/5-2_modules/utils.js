import { msToYear } from './constants.js';

export function computeAge(born, died) {
  const end = died ? new Date(died) : new Date();
  const start = new Date(born);

  return (end - start) * msToYear;
}
