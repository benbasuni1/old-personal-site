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
  render(trumpHTML, document.querySelector('.trump'));
  render(searchSortHTML, document.querySelector('.search-sort'));
  render(nbaStatsHTML, document.querySelector('.nba-stats'));
}

const renderAboutPage = () => {
  render(aboutHTML, document.querySelector('#about'));
}

const renderContactPage = () => {
  render(contactHTML, document.querySelector('#contact'));
}

renderInit();
