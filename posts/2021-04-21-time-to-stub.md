---
title: Time to stub
description: Did you know you can stub React components in your tests?
date: 2021-04-20 09:48:13
category: dev
background: "#637a91"
---
## O que vimos hoje

**How to stub components**

To stub components you need to import them in a different way.

Instead of this:

```jsx
import { AppointmentForm } from '../src/AppointmentForm';
```

Do this:

```jsx
import * as AppointmentFormExports from '../src/AppointmentForm';
```

Because this way you get an object with an `AppointmentForm` property that is safe to reassign, because the other way you would get a `const` that you wouldn't be able to reassign its value.

### What parsing means

Parsing a document means translating it to some structure that makes sense - something the code can understand and use. The result of parsing is usually a tree of nodes that represent the structure of the document. It is called a perse tree or a syntax tree.

It is based on the syntax rules the document obeys.

**lexer** (sometimes called tokenizer) is responsible for breaking the input into valid tokens

**parser** is resposible for constructing the parse tree by analyzing the document structure according to the language syntax rules.

The parsing process is iterative.

### The flow of constructing the tree

In Firefox, the presentation is registered as a listener for DOM updates. The presentation delegates frame creation to the "FrameConstructor" and the constructor resolves style and creates a frame.

While in Webkit the process of resolving the style and creating a renderer is called "attachment". Every DOM node has an "attach" method. Attachment is synchronous, node insertion to the DOM tree calls the new node "attach" method.

You can keep track of the things in your clipboard using Windows + V if you're on Windows.

## Principal coisa nova

Get to know how to stub components was really neat, the trick may not work with external packages, but the book will cover it later.

## Referências

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[How Browsers Work](http://taligarsiel.com/Projects/howbrowserswork1.htm)