// count variable
let count = 0;

// debounce function
const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    clearInterval(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

// incrementCound function
const incrementCount = () => console.log(count++);

// make incementCount a debounce
const debouncedIncrementCount = debounce(incrementCount, 500);

// pass debouncedIncrementCount to scroll event to check the debounce
window.addEventListener("scroll", debouncedIncrementCount);
