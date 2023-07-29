import { getGifs } from "../../src/helpers/GetGifs";

describe('tests on getGifs.js', () => {

  test('should return array of gifs', async() => {
    const gifs = await getGifs('commodore 64');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

});
