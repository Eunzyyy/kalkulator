function formatThousands(num) {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Solve(val) {
   var v = document.getElementById('res');
   v.value = v.value.replace(/,/g, '');
   v.value += val;
   v.value = formatThousands(v.value);
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {       
       var num2 = eval(num1.replace(/,/g, '').replace('x', '*'));
       document.getElementById('res').value = formatThousands(num2);
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.replace(/,/g, '');
   ev.value = ev.value.slice(0, -1);
   ev.value = formatThousands(ev.value);
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});
