/* Header Buttons */
homeButton.addEventListener('click', () => {
  unRender([contact, about]);
  renderHomePage();
});
aboutButton.addEventListener('click', () => {
  unRender([trump, searchSort, nbaStats, contact]);
  renderAboutPage();
});
contactButton.addEventListener('click', () => {
  unRender([trump, searchSort, nbaStats, about]);
  renderContactPage();
});

/* Social Media Footers */
facebook.addEventListener('click', () => window.location = "https://www.facebook.com/benbasuni");
github.addEventListener('click', () => window.location = "https://www.github.com/benbasuni1");
instagram.addEventListener('click', () => window.location = "https://www.instagram.com/benbasuni");
linkedIn.addEventListener('click', () => window.location = "https://www.linkedin.com/in/benbasuni");
twitter.addEventListener('click', () => window.location = "https://www.twitter.com/stampedethegoat");

