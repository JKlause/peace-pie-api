const request = require('../request');
const { dropCollection } = require('../db');

describe('sandwich flavor api', () => {
  
  beforeEach(() => dropCollection('sandwich-flavors'));

  const sandwichFlavor = {
    name: 'Key Lime Pie',
    cookies: 'cinnamon',
    iceCream: 'vanilla',
    toppings: ['key lime']
  };

  function postSandwichFlavor(sandwichFlavor) {
    return request
      .post('/api/sandwich-flavors')
      .send(sandwichFlavor)
      .expect(200)
      .then(sandwichFlavor => sandwichFlavor);
  }
  
  it('gets a list of flavors', () => {
    return Promise.all([
      postSandwichFlavor(sandwichFlavor),
      postSandwichFlavor(sandwichFlavor),
      postSandwichFlavor(sandwichFlavor)
    ])
      .then(() => {
        return request.get('/api/sandwich-flavors').expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(3);
        expect(body[0]).toMatchInlineSnapshot(
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
  
  it('posts a sandwich flavor', () => {
    return request
      .post('/api/sandwich-flavors')
      .send(sandwichFlavor)
      .expect(200)
      .then(sandwichFlavor => {
        expect(sandwichFlavor.body).toMatchInlineSnapshot(
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


  // it('it gets a sandwich flavor by id', {

  // })
});
