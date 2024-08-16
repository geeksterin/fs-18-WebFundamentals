// index.js

// Curry function
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...args2) => curried.apply(this, args.concat(args2));
    }
  };
};

// Compose function
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

// Memoize function
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
};

// Debounce function
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};

// Pipe function
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

// Partially apply function
const partial =
  (fn, ...presetArgs) =>
  (...laterArgs) =>
    fn(...presetArgs, ...laterArgs);

export { curry, compose, memoize, debounce, pipe, partial };
