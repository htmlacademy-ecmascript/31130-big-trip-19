import FilterView from './view/filter-view.js';
import ListPresenter from './presenter/list-presenter.js';
import { render } from './render.js';

const siteHeaderFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const listPresenter = new ListPresenter({listContainer: siteMainElement});

render(new FilterView(), siteHeaderFilterElement);

listPresenter.init();
