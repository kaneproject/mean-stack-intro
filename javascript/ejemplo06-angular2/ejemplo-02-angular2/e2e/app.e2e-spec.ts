import { Ejemplo02Angular2Page } from './app.po';

describe('ejemplo-02-angular2 App', function() {
  let page: Ejemplo02Angular2Page;

  beforeEach(() => {
    page = new Ejemplo02Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
