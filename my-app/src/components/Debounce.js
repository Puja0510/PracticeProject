function Debounce (fn, delay){
    let timer;
  return function(...args){
    clearTimeout(timer)

    timer = setTimeout(() => {
        fn.apply(this, args)
    }, delay)
  }
}

function search(query) {
    console.log('Searching for:', query);
}

const dSearch = Debounce(search, 100);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
