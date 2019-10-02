const request = require('../request');
const { dropCollection } = require('../db');

describe('sandwich api', () => {
  beforeEach(() => dropCollection('sandwiches'));

  const sandwich = {
    name: 'Key Lime Pie',
    cookies: 'cinnamon',
    iceCream: 'vanilla',
    toppings: ['key lime']
  };

  it('posts a sandwich', () => {
    return request
      .post('/api/sandwiches')
      .send(sandwich)
      .expect(200)
      .then(sandwich => {
        expect(sandwich.body).toMatchInlineSnapshot(
          {
            _id: expect.any(String)
          },
          `
          Object {
            "__v": 0,
            "_id": Any<String>,
            "cookies": "cinnamon",
            "iceCream": "vanilla",
            "name": "Key Lime Pie",
            "toppings": Array [
              "key lime",
            ],
          }
        `
        );
      });
  });
});
