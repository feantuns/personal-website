---
title: Code Validation
description: Official tools from W3C to help your website
date: 2021-05-21 09:49:46
category: dev
background: "#637a91"
---

## What we’ve seen today

### Way of matching partially objects in tests

If you want to check if an object contains some key value property, you can use `.toMatchObject` in `jest` so that if the object you're testing has more properties than the one you're expecting it will still pass.

Here is an example:

```jsx
expect(reducer(undefined, action)).toMatchObject({
  status: "SUBMITTING",
})
// the object returned contains other properties than only status
```

---

### Accessibility concerns over headings

A common navigation technique for users of screen reading software is jumping from heading to heading to quickly determine the content of the page. Because of this, it is important to not skip one or more heading levels. Doing so may create confusion, as the person navigating this way may be left wondering where the missing head is.

```jsx
// Don't
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>

// Do
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

Another cool thing about headings is that all `h1` elements are treated as top-level headings by many screen readers and other tools. So it should not be used nested deep down the DOM tree.

You should also use only one `h1` per page or view.

---

## What is Code Validation

The process of checking that the **code** is correct. In the case of web applications, it is the process of checking that the code is in compliance with the standards and recommendations set by the World Wide Web Consortium (W3C) for the web.

## Validating HTML code

Using standards-compliant HTML increases the likelihood that all web browsers and assistive technologies will correctly handle your content. If your code contains errors or tags that are not part of the HTML specification, screen readers and other assistive technologies might fail when trying to render the content for users.

Other additional reasons to validate your HTML:

- Validating mark-up can help in your debugging efforts if your web page exhibits unexpected problems.
- Valid mark-up provides a better cross-browser, cross-platform, experience and gives you maximum control over how your page is displayed.
- Valid mark-up will help with future compatibility as it will have the best chance of being backward-compatible with new technologies.
- Properly formed HTML renders faster than HTML with errors. This means less load on servers sand client browsers.
- A site that validates using proper HTML is a sign of professionalism.

### Some techniques

- Use the [W3C Markup Validation Service](http://validator.w3.org/) to check HTML.
- Use the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/) to validate your CSS.
- Use [Siteimprove](http://siteimprove.com/), a powerful tool that scans your site at regular interavals for broken links, spelling errors, and accessibility problems.

## Main new thing

I didn't know there were official tools from W3C for validating HTML and CSS, it's great to know that, now you can guarantee that your website is following the standard best practices without doubts.

## Joke of the day (pt-BR)

Por que o Brasil era mais cheiroso em 1500?
Porque era uma colônia.

## Let's keep in touch!

Liked what you've just read? Reach out on <a class="twitter-share-button" href="https://twitter.com/intent/tweet?screen_name=feantuns" target="_blank">twitter</a> for comments!

## References

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[- : The HTML Section Heading elements - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

[https://www.igi-global.com/dictionary/code-validation/69141](https://www.igi-global.com/dictionary/code-validation/69141)

[Validating Your Code](https://www.washington.edu/accessibility/checklist/validation/)
