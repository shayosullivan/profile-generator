const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("Jared", 1, "jared@gmail", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("jared", 1, "jared@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
