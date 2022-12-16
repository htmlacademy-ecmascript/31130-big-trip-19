import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import NewPointView from '../view/new-point-view';
import ListView from '../view/list-view';
import { render } from '../render';

export default class ListPresenter {
  listComponent = new ListView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(new SortView(), this.listContainer);
    render(this.listComponent, this.listContainer);
    render(new EditPointView(), this.listComponent.getElement());

    for (let ind = 0; ind < 3; ind++) {
      render(new PointView(), this.listComponent.getElement());
    }

    render(new NewPointView(), this.listComponent.getElement());
  }
}
