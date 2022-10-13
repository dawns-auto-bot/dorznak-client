const priceList = {
  signs: {
    form: {
      triangle: {
        size: {
          1: { aCom: 1000, aIng: 1100, B: 1200, C: 1300 },
          2: { aCom: 1100, aIng: 1200, B: 1300, C: 1400 },
          3: { aCom: 1200, aIng: 1300, B: 1400, C: 1500 },
        },
      },
      square: {
        size: {
          1: { aCom: 1000, aIng: 1100, B: 1200, C: 1300 },
          2: { aCom: 1100, aIng: 1200, B: 1300, C: 1400 },
          3: { aCom: 1200, aIng: 1300, B: 1400, C: 1500 },
        },
      },
      round: {
        size: {
          1: { aCom: 1000, aIng: 1100, B: 1200, C: 1300 },
          2: { aCom: 1100, aIng: 1200, B: 1300, C: 1400 },
          3: { aCom: 1200, aIng: 1300, B: 1400, C: 1500 },
        },
      },
      rectangle: {
        size: {
          1: { aCom: 1000, aIng: 1100, B: 1200, C: 1300 },
          2: { aCom: 1100, aIng: 1200, B: 1300, C: 1400 },
          3: { aCom: 1200, aIng: 1300, B: 1400, C: 1500 },
        },
      },
    },
  },
  idn: {},
  led: {},
  parking: {},
};

export default function getPricesList() {
  return priceList;
}
