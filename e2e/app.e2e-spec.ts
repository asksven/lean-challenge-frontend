import { LeanChallengePage } from './app.po';

describe('lean-challenge App', () => {
  let page: LeanChallengePage;

  beforeEach(() => {
    page = new LeanChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lc works!');
  });
});
