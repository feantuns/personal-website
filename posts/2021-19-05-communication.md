---
title: A little bit about communication
description: Learn about HTTP, HTTPs and also Redux
date: 2021-05-19 09:49:46
category: dev
background: "#637a91"
---

## What we’ve seen today

### HTTP

Hypertext Transfer Protocol (HTTP) is an applicable-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests. Though often based on a TCP/IP layer, it can be used on any reliable transport layer, that is, a protocol that doesn't lose messages silently like [UDP](https://www.wikiwand.com/en/User_Datagram_Protocol) does.

HTTP is the foundation of any data exchange on the Web and is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description (styles), images, videos, scripts, and more.

The messages sent by the client, usually a Web browser, to a server are called requests and the messages sent by the server as an answer are called responses.

![HTTP](https://raw.githubusercontent.com/feantuns/personal-website/master/static/assets/img/HTTP.png)

The browser is **always** the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).

Between the Web browser and the server, numerous computers and machines relay the HTTP messages. Due to the layered structure of the Web stack, most of these operate at the transport, network or physical levels. Those operating at the application layers are generally called **proxies**. These can be transparent, fowarding on the requests they receive without altering them in any way, or non-transparent, in which case they will change the request in some way before passing it along to the server. Proxies may perform numerous functions, such as:

- caching (cache like the browser cache)
- filtering (like an antivirus scan)
- load balancing (to allow multiple servers to serve the different requests)
- authentication (to control access to different resources)
- logging (allowing the storage of historical information)

### HTTPS

HTTPS (HyperText Transfer Protocol Secure) is an encrypted version of the HTTP protocol. It uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, such as performing banking activities or online shopping or sharing video and audio.

### Difference from HTTP

HTTPS URLs begin with "https://" and use port 443 by default, whereas, HTTP URLs begin with "http://" and use port 80 by default.

HTTP is not encrypted and thus is vulnerable to man-in-the-middle and eavesdropping attacks, which can let attackers gain access to website accounts and sensitive information, and modify webpages to inject malware or advertisements. HTTPS is designed to withstand such attacks and is considered secure against them, at least when it is using TLS.

---

### What is Redux?

Redux is a predictable state container. Redux isn't very opinionated about how it should be used, so it leaves the integrator with many decisions to make.

### What is `expect-redux`?

[expect-redux](https://github.com/rradczewski/expect-redux) is used to test Redux interactions. It is a testing library that enables you to write tests that verify the behavior of your business logic, no matter if you are using `redux-saga` or just `redux-thunk`.

## Main new thing

The discovery of this testing library `expect-redux` is pretty awesome, can't wait to see more about it.

## Joke of the day (pt-BR)

O que o J disse para o L?
K entre nós...

## Let's keep in touch!

Liked what you've just read? Reach out on <a class="twitter-share-button" href="https://twitter.com/intent/tweet?screen_name=feantuns" target="_blank">twitter</a> for comments!

## References

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)

[An overview of HTTP - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

[HTTPS | Wikiwand](https://www.wikiwand.com/en/HTTPS)
