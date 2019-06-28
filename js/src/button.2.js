import Html from "../lib/html";
const { beginnerProgram, button, div, text } = Html;
const { onClick } = Html.Events;

const view = model =>
  div([])([
    button([onClick(Decrement)])([text("-")]),
    div([])([text(model)]),
    button([onClick(Increment)])([text("+")])
  ]);

const xcase = instance => patterns =>
  patterns
    .map(pattern => ({
      Klass: pattern[1] === undefined ? undefined : pattern[0],
      callback: pattern[1] === undefined ? pattern[0] : pattern[1]
    }))
    .find(
      ({ Klass, callback }) =>
        Klass === undefined ? true : instance instanceof Klass
    )
    .callback();

class Msg {}
class Increment extends Msg {}
class Decrement extends Msg {}

// const update = msg => model =>
//   msg instanceof Increment
//     ? model + 1
//     : msg instanceof Decrement ? model - 1 : model;

const update = msg => model =>
  xcase(msg)([
    [Increment, () => model + 1],
    [Decrement, () => model - 1],
    [() => model]
  ]);

const main = beginnerProgram({ model: 0, view, update });

export { view, Msg, update, main };
