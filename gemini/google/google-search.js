gemini.suite('google-search', (suite) => {
  suite.skip.in(['another-browser-name']).setUrl('/')
    .before((actions, find) => {
      this.input = find('#lst-ib')
    })
    .setCaptureElements('body')
    .capture('empty-search-field')
    .capture('input', (actions, find) => {
      actions.sendKeys(this.input, "medium")
      actions.sendKeys(this.input, gemini.ENTER)
    })
    .capture('medium', { tolerance: 10 }, (actions, find) => {
      this.firstResult = find('#rso:nth-child(1) a')
      actions.click(this.firstResult)
    });
});
