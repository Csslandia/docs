# Position & Display

<div class="mb--10"></div>

## Relative & Absolute

<img
    src="https://picsum.photos/688/128"
    alt="random image"
    class="absolute responsive-image h-14"
/>

<div class="relative h-14">
    <div class="center bg">
        Image has .absolute class, this text has .relative class.
    </div>
</div>

```html
<img
    src="https://picsum.photos/688/128"
    alt="random image"
    class="absolute responsive-image h-14"
/>
<div class="relative h-14">
    <div class="center bg">
        Image has .absolute class, this text has .relative class.
    </div>
</div>
```

## Fixed

<button class="btn bg-a" onclick='toggle("#position-fixed")'>Toggle Fixed Divs</button>

<div class="hide" id="position-fixed">
    <div class="fixed left top bg-a m-6 p-6">.fixed .left .top</div>
    <div class="fixed x-center top bg-a m-6 p-6">.fixed .x-center .top</div>
    <div class="fixed right top bg-a m-6 p-6">.fixed .right .top</div>
    <div class="fixed left y-center bg-a m-6 p-6">.fixed .left .y-center</div>
    <div class="fixed center bg-a m-6 p-6">.fixed .center</div>
    <div class="fixed right y-center bg-a m-6 p-6">.fixed .right .y-center</div>
    <div class="fixed left bottom bg-a m-6 p-6">.fixed .left .bottom</div>
    <div class="fixed x-center bottom bg-a m-6 p-6">.fixed .left .bottom</div>
    <div class="fixed right bottom bg-a m-6 p-6">.fixed .right .bottom</div>
</div>

```html
<div class="fixed left top">.fixed .left .top</div>
<div class="fixed x-center top">.fixed .x-center .top</div>
<div class="fixed right top">.fixed .right .top</div>
<div class="fixed left y-center">.fixed .left .y-center</div>
<div class="fixed center">.fixed .center</div>
<div class="fixed right y-center">.fixed .right .y-center</div>
<div class="fixed left bottom">.fixed .left .bottom</div>
<div class="fixed x-center bottom">.fixed .left .bottom</div>
<div class="fixed right bottom">.fixed .right .bottom</div>
```

## Sticky

<div class="sticky bg-a px-8 py-7 text-center">
    .sticky sticks to the top of the page when you scroll down.
</div>

```html
<div class="sticky">
    .sticky sticks to the top of the page when you scroll down.
</div>
```

## Block

<div class="block h-12 w-12 bg px-7 py-6">1</div>
<div class="block h-12 w-12 bg px-7 py-6">2</div>

```html
<div class="block h-12 w-12 bg px-7 py-6">1</div>
<div class="block h-12 w-12 bg px-7 py-6">2</div>
```

## Inline

<div class="inline h-12 w-12 bg px-7 py-6">1</div>
<div class="inline h-12 w-12 bg px-7 py-6">2</div>

```html
<div class="inline h-12 w-12 bg px-7 py-6">1</div>
<div class="inline h-12 w-12 bg px-7 py-6">2</div>
```

## Inline block

<div class="inline-block h-12 w-12 bg px-7 py-6">1</div>
<div class="inline-block h-12 w-12 bg px-7 py-6">2</div>

```html
<div class="inline-block h-12 w-12 bg px-7 py-6">1</div>
<div class="inline-block h-12 w-12 bg px-7 py-6">2</div>
```

## None

<div class="none h-12 w-12 bg px-7 py-6">1</div>
<div class="none h-12 w-12 bg px-7 py-6">2</div>

```html
<div class="none h-12 w-12 bg px-7 py-6">1</div>
<div class="none h-12 w-12 bg px-7 py-6">2</div>
```

## Flex

Check [flexbox](flexbox).
