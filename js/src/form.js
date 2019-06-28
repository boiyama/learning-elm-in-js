import Html from "../lib/html";
const { beginnerProgram, button, div, text } = Html;
const { onClick } = Html.Events;

const view = model =>
  div([])([
    button([onClick(Decrement)])([text("-")]),
    div([])([text(model)]),
    button([onClick(Increment)])([text("+")])
  ]);

class Msg {}
class Name extends Msg {
  constructor(name) {
    this.name = name;
  }
}
class Password extends Msg {
  constructor(password) {
    this.password = password;
  }
}
class PasswordAgain extends Msg {
  constructor(password) {
    this.password = password;
  }
}

const update = msg => model =>
  msg instanceof Name
    ? model.set("name", msg.name)
    : msg instanceof Password
      ? model.set("password", msg.password)
      : msg instanceof PasswordAgain
        ? model.set("passwordAgain", msg.password)
        : model;

const main = beginnerProgram({ model: 0, view, update });

export { view, Msg, update, main };
