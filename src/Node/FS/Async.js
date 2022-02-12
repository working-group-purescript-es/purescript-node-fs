"use strict";

export function handleCallbackImpl(left, right, f) {
  return (err, value) => {
    if (err) {
      f(left(err))();
    } else {
      f(right(value))();
    }
  };
}
