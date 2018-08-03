import delay from "redux-saga";

it("async test 1", done => {
  setTimeout(done, 1000);
});

it("async test 2", () => {
  return new Promise(r => setTimeout(r, 1000));
});

it("async test 3", async () => {
  return await delay(1000);
});
