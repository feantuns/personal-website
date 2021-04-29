---
title: Smooth Delegation
description: Tired of delegating in a rush?
date: 2021-04-27 09:49:46
category: dev
background: "#637a91"
---

## O que vimos hoje

### What is event delegation in JS?

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. Because of the event bubbling the DOM makes, whenever the event is triggered on the descendant elements it is fired on the upper listener.

Here is one example given by [David Walsh](https://davidwalsh.name/event-delegate?__cf_chl_jschl_tk__=61352efc1db895b261ce7df57cf45d5c4c7b659a-1619653450-0-AVCxSjcobWyQAkZdrQqoB0gwgtrWhJDBnLTbCvJsxB4_gYFA1K8XdPZ3j9MqixkNZ6QksJ4PuWVhXWqZhoR9Gr0jZvCRQORxJxYNMo0DR3fpXBUl0nsvcFtffkNG-Lhs_mXe_EamwBcTZFw7_TJSMjcnWJeOcphc5vYBuNKHJC7YcvuR5EgI7Y3jIocZPb2uvzJOX19JverCW8_n82j_LdzgAkmhEQZqHSHfBKhSGpR4aNHmIJNjPA3L8AVbHM3PDDNBGS9yOxj9NQoIwUZe-ttfqA1QAkRRgU0eaSLBli4J6GgyZ7QWsRyy0G_NqpFF42NNyEXBhaqbzZXejx-KvOKcdiTxj6bfPJSz6QUhPY1c3j7a6SGtBKOVIwerGOzqQxnCPt31AIB-FNi6fFcTk-8):
Suppose you have a `ul` tag with a buch of `li` and you wanted to keep track of what `li` is clicked. To do that you could add an event listener in each of the `li` tags OR you could use event delegation by attaching the event listener on the `ul` because if you think for a moment, when you click a `li` you're automatically clicking the `ul` because it is the `li`'s parent.

```jsx
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>
```

Above is the list.

Below is the event tracking logic.

```jsx
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function (e) {
  // e.target is the clicked element!
  // If it was a list item
  if (e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log("List item ", e.target.id.replace("post-", ""), " was clicked!")
  }
})
```

---

### How to make scroll smooth

When you need to scroll to a certain position in a page is so much better to have a smooth scrolling instead of direct one. To have that effect is so simple, you just need these lines of css:

```css
/* to work in all page, or select the element you need */
html {
  scroll-behavior: smooth;
}
```

---

### Function that returns function

```jsx
const type = typeName => element => element.type === typeName
```

Isn't this code strange?

When you call it you call it this way:

```jsx
elementsMatching(type("p"))
```

Well what's happening here is, you're passing `'p'` as the argument of the function, the `typeName` then this function returns a new function. This new function receives an `element` as its argument, then this new function compares the element type with the type that was passed through to the first function to see if they're equal.

It's done this way because the new function that is returned is used as the filter function in an array, like this:

```jsx
const elementsMatching = (element, matcherFn) =>
  childrenOf(element).filter(matcherFn);

// it is exported this way
{
...
elementsMatching: (matcherFn) => // this matcherFn is the type('p') for instance
      elementsMatching(element, matcherFn),
...
}
```

## Principal coisa nova

The event delegation thing is really interesting, it's a new way of thinking when you face a problem where you need to add listeners to a lot of child components, then it may be better to just add an event listener on their parent.

## Piadoca

Que cargo o pedreiro assumiu no exército?
Ex-peão

## Referências

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[Front End Interview Handbook](https://yangshun.github.io/front-end-interview-handbook/en/javascript-questions)
