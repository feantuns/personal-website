---
title: Protocols and styles
description: Get to know more about protocols and the browsers
date: 2021-05-18 09:49:46
category: dev
background: "#637a91"
---

## What we’ve seen today

## FTP/ sFTP

The File Transfer Protocol (FTP) is a standard communication protocol used for the transfer of computer files from a server to a client on a computer network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server.

FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it. For secure transmission that protects the username and password, and encrypts the content, FTP is often secured with SSL/TLS (FTPS) or replaced with SSH File Transfer Protocol (SFTP).

### SSL/TLS

Transport Layer Security (TLS), the successor of the now-deprecated Secure Sockets Layer (SSL), is a cryptographic protocol designed to provide communications security over a computer network. Several versions of the protocol are widely used in applications such as email, instant messaging, and voice over IP, but its use as the Security layer in HTTPS remains the most publicly visible.

The TLS protocol aims primarily to provide privacy and data integrity between two or more communicating computer applications.

### FTPS

FTPS (also known FTP-SSL, and FTP Secure) is an extension to the commonly used FTP that adds support for the Transport Layer Security (TLS) and, formerly, the Secure Sockets Layer (SSL, which is now deprecated) cryptographic protocols. FTPS should **not** be confused with the SSH File Transfer Protocol (SFTP), a secure file transfer subsystem for the Secure Shell (SSH) protocol with which it is not compatible.

### SFTP

SSH File Transfer Protocol (also Secure File Transfer Protocol, or SFTP) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capabilities.

SFTP is not FTP run over SSH, but rather a new protocol designed from the ground up by the IETF SECSH working group.

---

### Why is it a good idea to position CSS `<link>`s between `<head></head>` ?

Putting links in the head is part of proper specification in building an optimized website. When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) and CSS creates the CSSOM (CSS Object). Both are needed to create the visuals in a website.

Because of this progressive rendering you should put the links between the head tags, this way the browser can know **as** it is creating the DOM where it is going to layout each element.

Imagine if you put the styles at the bottom of the HTML, the browser would create the DOM tree without styles and then when it reached the CSS styles it would have to re-create some parts of what it already had done before. Like the `display: none` rule which makes the element disappear from the page, the browser need to calculate the space the element was occupying to then reposition the elements around it.

To have a glimpse of what this process of rendering is, take a look at this short video of the Gecko rendering engine, which is the engine used by Mozilla firefox browser:

[Gecko Reflow Visualization - mozilla.org](https://www.youtube.com/watch?v=ZTnIxIA5KGw)

## Main new thing

I think that the main new thing is this reason why you should place your links and styles within the head tag, it is good to know the overflow the browser follows to accomplish the rendering of a website.

## Joke of the day (pt-BR)

Cuidado ao passar perto de alguma construção à noite
O concreto pode estar armado

## Let's keep in touch!

Liked what you've just read? Reach out on <a class="twitter-share-button" href="https://twitter.com/intent/tweet?screen_name=feantuns" target="_blank">twitter</a> for comments!

## References

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[File Transfer Protocol | Wikiwand](https://www.wikiwand.com/en/File_Transfer_Protocol)

[HTML Questions | Front End Interview Handbook](https://yangshun.github.io/front-end-interview-handbook/en/html-questions#why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions)
