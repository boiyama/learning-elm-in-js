class Msg {}
class Name extends Msg {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}
class Password extends Msg {
  password: string;
  constructor(password: string) {
    super();
    this.password = password;
  }
}
class PasswordAgain extends Msg {
  password: string;
  constructor(password: string) {
    super();
    this.password = password;
  }
}
class Foo {
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

const update = (msg: Msg) => model =>
  msg instanceof Name
    ? model.set("name", msg.name)
    : msg instanceof Password
      ? model.set("password", msg.password)
      : msg instanceof PasswordAgain
        ? model.set("passwordAgain", msg.password)
        : model;
