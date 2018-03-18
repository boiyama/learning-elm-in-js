import { h, patch } from "ultradom";

export default function({ model, view, update }) {
  const element = document.body.appendChild(
    patch(createVdomNode(view(model)))
  );

  function createVdomNode(node) {
    if (node.name == "text") {
      return node.value;
    }

    return h(
      node.name,
      node.attributes.length
        ? node.attributes
            .map(attribute => ({
              [attribute.name]: () => {
                model = update(attribute.msg)(model);
                patch(createVdomNode(view(model)), element);
              }
            }))
            .reduce((accumulator, currentValue) =>
              Object.assign(accumulator, currentValue)
            )
        : null,
      node.children.map(child => createVdomNode(child))
    );
  }
}
