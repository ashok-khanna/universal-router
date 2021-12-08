import { useUniversalRouter } from '../universal-router';

describe('universal router', () => {
  test('simple router without arguments', async () => {
    const universalRouter = useUniversalRouter('/about', [
      ['/', 'home'],
      ['/about', 'about'],
      ['/pages/:page', 'page-detail']
    ]);

    expect(universalRouter).toEqual({ match: 'about', arguments: [] });
  })

  test('nested router', async () => {
    const universalRouter = useUniversalRouter('/containers/3/hello', [
      ['/pages/:page', 'page-detail'],
      ['/containers/:number/:id', 'container-detail'],
      ['/', 'home'],
      ['/about', 'about'],
    ]);

    expect(universalRouter).toEqual({ match: 'container-detail', arguments: ['containers', '3', 'hello'] });
  })

  test('router with page arguments', async () => {
    const universalRouter = useUniversalRouter('/pages/hello', [
      ['/', 'home'],
      ['/about', 'about'],
      ['/pages/:page', 'page-detail']
    ]);

    expect(universalRouter).toEqual({ match: 'page-detail', arguments: ['pages', 'hello'] });
  })

  test('router with reversed order', async () => {
    const universalRouter = useUniversalRouter('/pages/hello', [
      ['/pages/:page', 'page-detail'],
      ['/', 'home'],
      ['/about', 'about'],
    ]);

    expect(universalRouter).toEqual({ match: 'page-detail', arguments: ['pages', 'hello'] });
  })
})
