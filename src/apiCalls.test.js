import { getRandomJoke, getFeaturedJokes, getSpecificJoke } from './apiCalls';

describe('getRandomJoke', () => {
  let mockJoke
  beforeEach(() => {
    mockJoke = {
      "id": 118,
      "type": "general",
      "setup": "How did Darth Vader know what Luke was getting for Christmas?",
      "punchline": "He felt his presents."
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockJoke)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getRandomJoke();
    expect(window.fetch).toHaveBeenCalledWith('https://official-joke-api.appspot.com/random_joke')
  });

  it('should return a joke object', () => {
    getRandomJoke()
    .then(joke => expect(joke).toEqual(mockJoke));
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: getRandomJoke throw error'))
    })
    expect(getRandomJoke()).rejects.toEqual(Error('200 status code not found: getRandomJoke throw error'))
  });
});

describe('getSpecificJoke', () => {
  let state, mockJoke
  beforeEach(() => {
    mockJoke = {
      "category": "Dark",
      "type": "single",
      "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false
      },
      "id": 98,
      "error": false
    }
    state = { category: 'Dark', blacklistFlags: ['nsfw'], type: ['single']}
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockJoke)
      });
    });
  })

  it('should be called with the correct url', () => {
    getSpecificJoke(state)
    let mockOptions = {
      "blacklistFlags": ["nsfw"],
      "type": ["single"]
    }
    expect(window.fetch).toHaveBeenCalledWith(`https://sv443.net/jokeapi/v2/joke/${state.category}`, mockOptions)
  });

  it('should return a joke object', () => {
    getSpecificJoke(state)
      .then(joke => expect(joke).toEqual(mockJoke))
  });

  it('should return an error if the reponse is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: getSpecificJoke throw error'))
    })
    expect(getSpecificJoke(state)).rejects.toEqual(Error('200 status code not found: getSpecificJoke throw error'))
  });
});