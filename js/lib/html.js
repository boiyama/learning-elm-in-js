const beginnerProgram = impl => impl;

const div = attributes => children => ({ name: "div", attributes, children });

const button = attributes => children => ({
  name: "button",
  attributes,
  children
});

const text = value => ({ name: "text", value });

const onClick = Msg => ({ name: "onclick", msg: new Msg() });

export default {
  beginnerProgram,
  div,
  button,
  text,
  Events: {
    onClick
  }
};
