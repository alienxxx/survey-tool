import { SurveyToolPage } from './app.po';

describe('survey-tool App', function() {
  let page: SurveyToolPage;

  beforeEach(() => {
    page = new SurveyToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
