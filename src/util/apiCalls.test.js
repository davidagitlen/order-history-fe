import { getOrderHistory, postPurchase, deletePurchase } from './apiCalls.js';


describe('getOrderHistory', () => {

  let mockResults; 

  beforeEach(() => {
    mockResults = [{
      id: 1,
      image: 'broken-link.png',
      name: 'Blah',
      description: 'blib',
      price: 100
    }];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResults)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getOrderHistory();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases');
  });

  it('should return a response with an array containing a purchased object (HAPPY)', () => {
    expect(getOrderHistory()).resolves.toEqual(mockResults)
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(getOrderHistory()).rejects.toEqual(Error('Error fetching purchases!'))

  })

})
