const delay = (time: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

export default delay;