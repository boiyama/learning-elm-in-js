import Html from "../lib/html";
const { beginnerProgram, button, div, text } = Html;
const { onClick } = Html.Events;

const view = model =>
  div([])([
    button([onClick(Decrement)])([text("-")]),
    div([])([text(model)]),
    button([onClick(Increment)])([text("+")])
  ]);

const changeName = name => ({
  type: "NAME",
  name
});
const changePassword = password => ({
  type: "PASSWORD",
  password
});
const changePasswordAgain = password => ({
  type: "PASSWORD_AGAIN",
  password
});

const update = msg => model => {
  switch (msg.type) {
    case "NAME": {
      return model.set("name", msg.name);
    }
    case "PASSWORD": {
      return model.set("password", msg.password);
    }
    case "PASSWORD_AGAIN": {
      return model.set("passwordAgain", msg.password);
    }
    default: {
      return model;
    }
  }
};

const main = beginnerProgram({ model: 0, view, update });

export { view, Msg, update, main };
