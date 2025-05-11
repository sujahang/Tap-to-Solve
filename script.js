const buttons = document.querySelectorAll('button');
  const input = document.querySelector('.display');

  let inputVale = "";
  let arr = Array.from(buttons);

  arr.forEach((button) => {
    button.addEventListener('click', (e) => {
      let btnText = e.target.innerHTML;
      if(btnText == "=") {
        inputVale = eval(inputVale);
        input.value = inputVale;
      } else if (btnText == "C") {
        inputVale = "";
        input.value = inputVale;
      } else if(btnText == "←") {
        inputVale = inputVale.substring(0, inputVale.length -1);
        input.value = inputVale;
      }else {
        inputVale += btnText;
        input.value = inputVale;
      }
    })
  })