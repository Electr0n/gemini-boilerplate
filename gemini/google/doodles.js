gemini.suite('doodles', (suite) => {
  suite.setUrl('/doodles')
    .setCaptureElements('#archive-list:nth-child(1)')
    .capture('thumb', { screenshotMode: 'fullpage' }, () => {})
});
