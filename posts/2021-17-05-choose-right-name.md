---
title: Choose the right name
description: Get to know more about naming conventions
date: 2021-05-17 09:49:46
category: dev
background: "#637a91"
---

## What we’ve seen today

### File naming conventions (including case sensitive names)

<img src="https://imgs.xkcd.com/comics/documents.png" alt="Charge file naming confusion" width="300">

Image font: [https://datamanagement.hms.harvard.edu/collect/file-naming-conventions](https://datamanagement.hms.harvard.edu/collect/file-naming-conventions)

Descriptive file names are an important part of organizing, sharing, and keeping track of data files. Develop a naming convention based on elements that are important to the project.

### File naming best practices:

- Files should be named consistenly
- File names should be short but descriptive (<25 characters)
- Avoid unnecessary repetition and redundancy in file names and paths
- Avoid special characters or spaces in a file name
- Use capitals and underscores instead of periods or spaces or slashes
- For numbers always use a minimum of two digit numbers to ensure correct numerical order (e.g. 01, 02, 03, etc)
- Use date format ISO 8601: YYYYMMDD
- Include a version number
- Write down naming ocnvention in data management plan

### Elements to consider using in a naming convention are:

- Date of creation (putting the date in the front will facilitate computer aided date sorting)
- Short Description
- Work
- Location
- Project name or number
- Sample
- Analysis
- Version number

### Example

YYYYMMDD_Image_Modification

20130420_tina_original.jpeg

LocationAnalysisVersion

CarnegieLakeWordCloudV1

CarnegieLakeMapV1

CarnegieLakeMapV2

---

![Naming conventions](https://raw.githubusercontent.com/feantuns/personal-website/master/static/assets/img/naming-conventions.png)

## Naming conventions by language

### Java

![Naming conventions JAVA](https://raw.githubusercontent.com/feantuns/personal-website/master/static/assets/img/naming-conventions-java.png)

### JavaScript

The built-in JavaScript libraries use the same naming conventions as Java. Data types and constructors use upper camel case (RegExp, TypeError, DOMObject) and methods use lower camel case (getElementById, querySelector). In order to be consistent most JavaScript developers follow these conventions. See also: [Douglas Crockford's conventions](https://www.crockford.com/code.html)

---

### Tip on passing props in React Components

> This is good programming practice—only pass components exactly
> what they need to do their job and nothing more

---

### React Router Components

A `Switch` component lists a number of routes, only one of which will be rendered at a time. The last `Route` listed in a `Switch` will be the one used if nothing else matches, just as a switch statement in most programming languages makes the last clause its default clause.

So in this code the last `Route` component is the default:

```jsx
<Switch>
	<Route path="/addCustomer" render={...} />
	<Route path="/addAppointment" render={...} />
	<Route path="/searchCustomers" render={...} />
	<Route component={MainScreen} />
</Switch>
```

---

### Diffrence between invoking and mounting a component

When you **invoke** the render function, you construct the React element so that you can inspect its properties. In the other hand, when you **mount** it the component will run its lifecycle methods, like useEffects that should trigger on mount.

## Main new thing

Didn't know there were so many file naming conventions out there. It kinda makes sense mainly to libraries because of the gigantic number of files they may hold. Interesting indeed.

## Joke of the day (pt-BR)

Aquele país que todo mundo é forte e vive na academia
A Somalia

## Let's keep in touch!

Liked what you've just read? Reach out on <a class="twitter-share-button" href="https://twitter.com/intent/tweet?screen_name=feantuns" target="_blank">twitter</a> for comments!

## References

[Book Mastering React Test Driven Development](https://www.amazon.com.br/dp/B07RJCLX5C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

[Research Guides: Research Data Management at Princeton: File naming and structure](https://libguides.princeton.edu/c.php?g=102546&p=930626)

[](https://www.abdn.ac.uk/staffnet/documents/policy-zone-information-policies/File%20Naming%20Conventions%20July%202017.pdf)

[Naming convention (programming) | Wikiwand](<https://www.wikiwand.com/en/Naming_convention_(programming)>)
