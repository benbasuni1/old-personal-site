const render   = (template, node) => node.innerHTML = template;
const unRender = node => {
  for (let i = 0; i < node.length; i++)
    node[i].innerHTML = "";
}

const renderInit = () => {
  render(headerHTML, document.querySelector('header'));
  render(avatarHTML, document.querySelector('#avatar'));
  render(homeHTML, document.querySelector('#home'));
  render(trumpHTML, document.querySelector('.trump'));
  render(jediHTML, document.querySelector('.jedi'));
  render(nbaStatsHTML, document.querySelector('.nba-stats'));
  render(footerHTML, document.querySelector('footer'));
}

const renderHomePage = () => {
  unRender([contact, about]);
  render(homeHTML, home);
  render(trumpHTML, trump);
  render(searchSortHTML, searchSort);
  render(nbaStatsHTML, nbaStats);
  setTimeout(() => trump.style.opacity = searchSort.style.opacity = nbaStats.style.opacity = 1, 100);
  about.style.opacity = contact.style.opacity = 0;
}

const renderAboutPage = () => {
  unRender([trump, searchSort, nbaStats, contact]);
  render(aboutHTML, about);
  setTimeout(() => about.style.opacity = 1, 100);
  contact.style.opacity = trump.style.opacity = searchSort.style.opacity = nbaStats.style.opacity = home.style.opacity = 0;
}

const renderContactPage = () => {
  unRender([trump, searchSort, nbaStats, about]);
  render(contactHTML, contact);
  setTimeout(() => contact.style.opacity = 1, 100);
  about.style.opacity = trump.style.opacity = searchSort.style.opacity = nbaStats.style.opacity = 0;
}

renderInit();
