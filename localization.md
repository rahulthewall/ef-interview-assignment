# Localising a landing page for 50+ countries

## Problem Statement

We want to create a new landing page that will be available in 50+ countries.

The page consists of several sections, with text paragraphs and images. 

The same design of the page is shared across all languages, but the content itself will be different. You can assume that the length of the labels will be the same for all languages and also image resolution.

Unfortunately, we don’t have any backend service available to get the translations and we’ll only be able to host static assets (html, js, css and images). 

In addition, we would like to focus on miming the amount of work the developers need to do, but also we need to keep an eye on page performances. 

How would you have this challenge? Which technologies would you use and why?

## Proposed Solution

### HTML Structure

We annotate the HTML elements that need translation with an id. An excerpt is provided below.

```
<div class="mainContent">
    <h1 id="title"></h1>
    <p id="introduction"></p>
    <img id="bannerImage" />
</div>
```

### Translation Data

We store the translation data in different JSON files (one for each language). An example of the English transations for the above excerpt might take the following form

```
{
    title: 'Some Title',
    introduction: 'Some Introduction',
    bannerImage: {
        src: './images/bannerImage.png',
        alt: 'Banner image",
    }
}
```

The translation data will be available on the server (along with other static assets)

### Applying the Translation Data

We can get the current browser language by using the [Navigator Language property](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language). 

When we get the current language, we can fetch the relevant translation file. We can then load the content from the translation file and insert it into our HTML file. 

Consider the key `title` (available in the variable `key`), and assume that the translation file has been loaded in the object `en`. 

```
const el = document.getElementById(key);
el.innerText = en[key];
```

We can thus iterate over the keys in the translation file and fill our HTML page with the relevant content. 


### Analysis

#### Ease of Development

Since the translation keys are maintained in separate files (which are unrelated to code), they can be maintained by non-developers and save develpoment time. 

The possibility also exists of using a third-party service like [PhraseApp](https://phraseapp.com/) which provides a UI that can help non-developers maintain and update the translation data. 

#### Page Performance

Note that we only load the translation file for the current browser language, thereby decreasing our load time.

Iterating over a set of keys to load content into a single landing page should not be a limiting factor for the performance of our website (it's not as if we are loading 10k keys and then filling in content into the HTML page). 

We also don't use any third party libraries to implement our solution, thereby ensuring that the bundle size doesn't increase. 