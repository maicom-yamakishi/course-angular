import { AppPeixeUrbanoPage } from './app.po';

describe('app-peixe-urbano App', () => {
  let page: AppPeixeUrbanoPage;

  beforeEach(() => {
    page = new AppPeixeUrbanoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
