# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
The console.log on line 5 is withing the scope of the function f1 whist, the console.log on line 7 has global scope outside of the function and refers to line 1.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

console.log (x) - is 10, bod defined and within the scope of the function
console.log(f1()) - is undefined, as it is outside of the function
console.log (y) - its not declared in the function

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

f1: references the declared parameter where the value of x, is 9
f2: is an object passed by reference to function, so when function is
called it can modify the original object, hence the 9 modified to 10
