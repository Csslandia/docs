# Button

---

<div>
    <button class="btn bg m-4">Button</button>
    <button class="btn bd m-4">Button</button>
    <input type="button" value="Button" class="btn bg m-4">
    <input type="button" value="Button" class="btn bd m-4">
    <input type="submit" class="btn bg m-4">
    <input type="submit" class="btn bd m-4">
    <input type="reset" class="btn bg m-4">
    <input type="reset" class="btn bd m-4">
    <div class="btn bg m-4" tabindex="0">Div</div>
    <div class="btn bd m-4" tabindex="0">Div</div>
    <span class="btn bg m-4" tabindex="0">Span</span>
    <span class="btn bd m-4" tabindex="0">Span</span>
    <a href="#" class="btn bg c m-4">A href</a>
    <a href="#" class="btn bd c m-4">A href</a>
</div>

```html
<button class="btn bg m-4">Button</button>
<button class="btn bd m-4">Button</button>
<input type="button" value="Button" class="btn bg m-4" />
<input type="button" value="Button" class="btn bd m-4" />
<input type="submit" class="btn bg m-4" />
<input type="submit" class="btn bd m-4" />
<input type="reset" class="btn bg m-4" />
<input type="reset" class="btn bd m-4" />
<div class="btn bg m-4" tabindex="0">Div</div>
<div class="btn bd m-4" tabindex="0">Div</div>
<span class="btn bg m-4" tabindex="0">Span</span>
<span class="btn bd m-4" tabindex="0">Span</span>
<a href="#" class="btn bg c m-4">A href</a>
<a href="#" class="btn bd c m-4">A href</a>
```

## Possible classes

<button class="b bg m-4">Button</button>
<button class="btn bg m-4">Button</button>
<button class="button bg m-4">Button</button>
<button class="form bg m-4">Button</button>
<span class="form">
<button class="bg m-4">Button</button>
</span>

```html
<button class="b bg">Button</button>
<button class="btn bg">Button</button>
<button class="button bg">Button</button>
<button class="form bg">Button</button>
<span class="form">
    <button class="bg">Button</button>
</span>
```

The `.btn` class is used in the Csslandia docs by default.

## Size

<button class="btn bg xs m-4">Button</button>
<button class="btn bg sm m-4">Button</button>
<button class="btn bg m-4">Button</button>
<button class="btn bg lg m-4">Button</button>
<button class="btn bg xl m-4">Button</button>

```html
<button class="btn bg xs">Button</button>
<button class="btn bg sm">Button</button>
<button class="btn bg">Button</button>
<button class="btn bg lg">Button</button>
<button class="btn bg xl">Button</button>
```

## Colors

<button class="btn bg c-a m-4">Button</button>
<button class="btn c-a m-4">Button</button>
<button class="btn bd-a c-a m-4">Button</button>
<button class="btn bg-a c-fff m-4">Button</button>
<button class="btn bg-a c-222 m-4">Button</button>

```html
<button class="btn bg c-a">Button</button>
<button class="btn c-a">Button</button>
<button class="btn bd-a c-a">Button</button>
<button class="btn bg-a c-fff">Button</button>
<button class="btn bg-a c-222">Button</button>
```

## Shape

<button class="btn bg pill m-4">Button</button>
<button class="btn bd pill m-4">Button</button>
<button class="btn bg angular m-4">Button</button>
<button class="btn bd angular m-4">Button</button>

```html
<button class="btn bg pill">Button</button>
<button class="btn bd pill">Button</button>
<button class="btn bg angular">Button</button>
<button class="btn bd angular">Button</button>
```

## Padding size

<button class="btn bg p-xs m-4">Button</button>
<button class="btn bg p-sm m-4">Button</button>
<button class="btn bg m-4">Button</button>
<button class="btn bg p-lg m-4">Button</button>
<button class="btn bg p-xl m-4">Button</button>

```html
<button class="btn bg p-xs">Button</button>
<button class="btn bg p-sm">Button</button>
<button class="btn bg">Button</button>
<button class="btn bg p-lg">Button</button>
<button class="btn bg p-xl">Button</button>
```

## Disabled

<button class="btn bg m-4" disabled>Button</button>
<button class="btn bd m-4" disabled>Button</button>

```html
<button class="btn bg" disabled>Button</button>
<button class="btn bd" disabled>Button</button>
```

## Icon

<button class="btn bg m-4"><span class="i-search sm mr-6"></span>Search</button>
<button class="btn bd m-4"><span class="i-search sm mr-6"></span>Search</button>
<button class="btn bg m-4">Close<span class="i-close sm ml-6"></span></button>
<button class="btn bd m-4">Close<span class="i-close sm ml-6"></span></button>

```html
<button class="btn bg"><span class="i-search sm mr-6"></span>Search</button>
<button class="btn bd"><span class="i-search sm mr-6"></span>Search</button>
<button class="btn bg">Close<span class="i-close sm ml-6"></span></button>
<button class="btn bd">Close<span class="i-close sm ml-6"></span></button>
```

## Width

<div>
<button class="btn bg w-100%">Button</button>
<div class="h-6"></div>
<button class="btn bd w-100%">Button</button>
</div>

```html
<button class="btn bg w-100%">Button</button>
<button class="btn bd w-100%">Button</button>
```

## 3D buttons

<button class="btn d3 bg m-4">Button</button>
<button class="btn d3 bd m-4">Button</button>
<button class="btn d3 bg pill m-4">Button</button>
<button class="btn d3 bd pill m-4">Button</button>
<button class="btn d3 bg angular m-4">Button</button>
<button class="btn d3 bd angular m-4">Button</button>

```html
<button class="btn d3 bg">Button</button>
<button class="btn d3 bd">Button</button>
<button class="btn d3 bg pill">Button</button>
<button class="btn d3 bd pill">Button</button>
<button class="btn d3 bg angular">Button</button>
<button class="btn d3 bd angular">Button</button>
```

### Color

<button class="btn d3 bg m-4" style="--d3-c: #0c5">Button</button>
<button class="btn d3 bd m-4" style="--d3-c: #0c5">Button</button>

```html
<button class="btn d3 bg" style="--d3-c: #0c5">Button</button>
<button class="btn d3 bd" style="--d3-c: #0c5">Button</button>
```

---

Check also buttons in the [config](../config#buttons).