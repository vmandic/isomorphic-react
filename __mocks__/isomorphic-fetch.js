// The mock file should be named the same as the real impl. file which is being mocked
let __value = 42;

// fn is a "spy" function, a jest tracable function replacement
const isomorphicFetch = jest.fn(() => __value);
isomorphicFetch.__setValue = v => (__value = v);

// we will import fetch "normally" in our test but jest will inject this one rather the original impl.
export default isomorphicFetch;
