gemini.suite('google-main', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('#hplogo')
    .capture('logo', { screenshotMode: 'fullpage' }, () => {});
});
