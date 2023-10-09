<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Variable spelling is wrong here. First line declared `greeting`. But second line assigned an empty object to `greetign` which is a totally different variable form `greeting`. So third line gives `ReferenceError`` as greetign is not declared before assigned value.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Console logging `console.log(sum(1, "2"))` gives a result `12`. Because of implicit type conversion. When two variable is of different type JS automatically converts one variable to the type of another variable. In case of this example JS converts `number` 1 to `string` 1 which makes `+` operation a `concatenation` instead of `addition`.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Simply because we are console logging food variable which is of type `array`. The 2-3 lines deals with info `object` which takes a value of food as favourite food and changes its value once. But that does not do any change to our food variable. So food varaible remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When calling the sayHi function we are not passing any value. So name variable will be initialized as `undefined` and so we get output as `Hi there, undefined`. Usually it is recommanded to set a default value for name variable so that output is meaningful.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>He a forEach method is used to loop througn the nums array and count accourding to provided condition. In JS number `0` equats to `boolean:false` and any other number equats to `boolean:true`. So when the if condition inside forEach method encounters 0, it doesn't execute `count += 1`. So count is 3 when there are 4 numbers in nums array as 0 equats to false.</i>

</p>
</details>
