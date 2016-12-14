import { AngularMeetupPage } from './app.po';

describe('angular-meetup App', function() {
  let page: AngularMeetupPage;

  beforeEach(() => {
    page = new AngularMeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
