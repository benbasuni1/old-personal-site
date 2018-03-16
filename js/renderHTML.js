const render   = (template, node) => node.innerHTML = template;
const unRender = node => {
  for (let i = 0; i < node.length; i++)
    node[i].innerHTML = "";
}

const renderInit = () => {
  render(headerHTML, document.querySelector('header'));
  render(introHTML, document.querySelector('#intro'));
  render(trumpHTML, document.querySelector('.trump'));
  render(searchSortHTML, document.querySelector('.search-sort'));
  render(nbaStatsHTML, document.querySelector('.nba-stats'));
  render(footerHTML, document.querySelector('footer'));
}

const renderHomePage = () => {
  unRender([contact, about]);
  render(trumpHTML, document.querySelector('.trump'));
  render(searchSortHTML, document.querySelector('.search-sort'));
  render(nbaStatsHTML, document.querySelector('.nba-stats'));
}

const renderAboutPage = () => {
  unRender([trump, searchSort, nbaStats, contact]);
  render(aboutHTML, document.querySelector('#about'));
}

const renderContactPage = () => {
  unRender([trump, searchSort, nbaStats, about]);
  render(contactHTML, document.querySelector('#contact'));
}

renderInit();
