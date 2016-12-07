import { SocketioAngular2Page } from './app.po';

describe('socketio-angular2 App', function() {
  let page: SocketioAngular2Page;

  beforeEach(() => {
    page = new SocketioAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
