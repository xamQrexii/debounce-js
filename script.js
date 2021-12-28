// count variable
let count = 0;

// denounce function
const debounce = (fn, delay) => {
  let timerId;
  return () => {
    clearInterval(timerId);
    timerId = setTimeout(() => fn(), delay);
  };
};

// incrementCound function
const incrementCount = () => console.log(count++);

// make incementCount a debounce
const debouncedIncrementCount = debounce(incrementCount, 500);

// pass debouncedIncrementCount to scroll event to check the debounce
window.addEventListener("scroll", debouncedIncrementCount);
