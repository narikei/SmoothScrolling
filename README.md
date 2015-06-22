# SmoothScrolling

> This can smooth scroll all of the elements in your website.
> Vertical Scrolling & Horizontal Scrolling is OK.

## Installing with Bower

```bash
bower install SmoothScrolling
```

## How to use

###scrolling top

```js
SmoothScrolling(document.body, 0, 0);
```

###elements
Element has "scroll".

```css
#scrollElement {
  overflow: scroll;
}
```

```js
var scrollElement = document.getElementById('scrollElement');
SmoothScrolling(scrollElement, 100, 300);
```
