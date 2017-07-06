import { CryptobaguettePage } from './app.po';

describe('cryptobaguette App', () => {
  let page: CryptobaguettePage;

  beforeEach(() => {
    page = new CryptobaguettePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
