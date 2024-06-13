

class SuperMath {
  check(obj) {
      const { X, Y, znak } = obj;

      const answer = document.querySelector('.answer');

      const confirmAsk = confirm(`do U want use: ${X} ${znak} ${Y}?`);

    if (confirmAsk) {
      let result;
        switch (znak) {
          case '+':
            result = X + Y;
              break;

        case '-':
          result = X - Y;
            break;

        case '/':
          result = X / Y;
            break;

        case '*':
          result = X * Y;
            break;

        case '%':
          result = X % Y;
            break;
      }

      console.log(obj);
      alert(`result: ${X} ${znak} ${Y} = ${result}`);
      answer.textContent = `${X} ${znak} ${Y} = ${result}`;

    } else {
      this.Input();
    }
  }


  Input() {
    const X = +prompt("Enter Num one: ");
    const znak = prompt("Enter Char --> (+, -, /, *, %)");
    const Y = +prompt("Enter Num Two: ");
    
    this.check({ X, Y, znak });
  }
}

const math = new SuperMath();
const obj = { X: 12, Y: 3, znak: '+' };



const promptButton = document.querySelector('.getPromptButton');

promptButton.addEventListener('click', showPrompt);
function showPrompt(){

  math.check(obj);
  document.querySelector('.containerTwo').style.display = 'flex';
}










