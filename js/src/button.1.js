import Html from "../lib/html";
const { beginnerProgram, button, div, text } = Html;
const { onClick } = Html.Events;

const view = model =>
  <Div>
    <Button onClick={Decrement}><Text>-</Text></Button>
    <Div><Text>{model}</Text></Div>
    <Button onClick={Increment}><Text>+</Text></Button>
  </Div>;

class Msg {}
class Increment extends Msg {}
class Decrement extends Msg {}

const update = msg => model =>
  msg instanceof Increment
    ? model + 1
    : msg instanceof Decrement ? model - 1 : model;

const main = beginnerProgram({ model: 0, view, update });

export { view, Msg, update, main };
