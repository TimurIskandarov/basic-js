const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.log(MODERN_ACTIVITY/ +sampleActivity) / k | 0;
  return sampleActivity > 0 && sampleActivity < 15 && typeof sampleActivity == 'string'? time + 1 : false;
};
