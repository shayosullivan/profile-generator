const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Jared", 1, "jared@gmail", "2University");

  expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test("gets employee school", () => {
  const intern = new Intern("jared", 1, "jared@gmail", "2University");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// gets role from getRole()
test("gets role of employee", () => {
  const intern = new Intern("jared", 1, "jaredw@gmail.com", "2University");

  expect(intern.getRole()).toEqual("Intern");
});
