function spy(func) {

  function wrapper(...args) {
    // мы используем ...args вместо аргументов для хранения "реального" массива в wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
