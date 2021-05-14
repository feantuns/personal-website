---
title: Absolute URLs vs Relative URLs
description: This topic is absolutely relative
date: 2021-05-13 09:49:46
category: dev
background: "#637a91"
---

## What we’ve seen today

### What are Absolute URLs?

An absolute URL contains the entire address from the protocol (HTTPS) to the domain name and includes the location within yout website in your folder system (/folderNameA) names within the URL. Basically, it's the full URL of the page that you link to.

Here is an example:

```html
<a href="http://www.example.com/xyz"></a>
```

### What are Relative URLs?

The relative URL does not use the full web address and olny contains the location following the domain. It assumes that the link you add is referring to the same site and is part of the same root domain. The relative path starts with the / and leads the browser to stay within the current site.

Here is an example:

```html
<a href="/xyz"></a>
```

Behind the scenes the browser understands that before the / it would be `http://www.example.com`.

### Advantages of Relative URLs

- You code less because you don't have to keep repeating the entire name of your website
- It saves time when changing environments, like you can change the domain and your links will still work

### Advantages of Absolute URLs

- It makes it difficult for scrapers to copy your entire site code and paste it in another domain, because your links will still work if they are relative
- Disallows duplicate content, if you have multiple versions of the same domain (`http://example.com http://www.example.com`) Google assumes they are different websites, so it will crawl every one of them. Thus if the URLs of your links are Relative, Google will have duplicate versions of each page for each domain, which will eventually result in a duplicate content issue.

  With Absolute URLs Google can reach a single page from whatever version of your domain.

### Which to choose?

Both options have their pros and cons, so it will depend on the need of your site.

More study on the difference between the two options will be made to bring more clarity on the subject.

## Main new thing

This thing about Relative and Absolute URLs is a topic interesting, I didn't know that there were so many differences and pros and cons to both options. Gotta keep studying this to learn more.

## Joke of the day (pt-BR)

Como se referem ao indivíduo muito bom em se comunicar com espíritos?
Um cara acima da médium

## Let's keep in touch!

Liked what you've just read? Reach out on <a class="twitter-share-button" href="https://twitter.com/intent/tweet?screen_name=feantuns" target="_blank">twitter</a> for comments!

## References

[What Is the Difference Between a Relative and an Absolute URL?](https://www.seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/)
