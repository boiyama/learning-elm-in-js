import xif from "../lib/xif";
import Html from "../lib/html";
const { beginnerProgram, button, div, text } = Html;
const { onClick } = Html.Events;

const view = model =>
  div([])([
    button([onClick(new Decrement())])([text("-")]),
    div([])([text(model)]),
    button([onClick(new Increment())])([text("+")])
  ]);

class Msg {}
class Increment extends Msg {}
class Decrement extends Msg {}

const update = msg => model =>
  xif(msg instanceof Increment)(model + 1)(
    xif(msg instanceof Decrement)(model - 1)(model)
  );

const main = beginnerProgram({ model: 0, view, update });

export { main };
