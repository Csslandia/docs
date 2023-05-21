# Border

---

<div class="flexbox y-center">
    <div class="w-25% mob:w-50% p-4">
        <div class="bg p-7">no class</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bg p-7">.bd</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-x bg p-7">.bd-x</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-y bg p-7">.bd-y</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-top bg p-7">.bd-top</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-bottom bg p-7">.bd-bottom</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-left bg p-7">.bd-left</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd-right bg p-7">.bd-right</div>
    </div>
</div>

```html
<div>no class</div>
<div class="bd">.bd</div>
<div class="bd-x">.bd-x</div>
<div class="bd-y">.bd-y</div>
<div class="bd-top">.bd-top</div>
<div class="bd-bottom">.bd-bottom</div>
<div class="bd-left">.bd-left</div>
<div class="bd-right">.bd-right</div>
```

## Border color

The `.bd-XXX` class only sets the border color, so if the border width is 0 or border style is none, you see no effect. You must use one of the classes above or set the border width and style manually.

<div class="flexbox y-center">
    <div class="w-25% mob:w-50% p-4">
        <div class="bd p-7">default</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bd-a p-7">accent</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bd-05f p-7">blue</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bd-f00 p-7">red</div>
    </div>
</div>

```html
<div class="bd">default</div>
<div class="bd bd-a">accent</div>
<div class="bd bd-05f">blue</div>
<div class="bd bd-f00">red</div>
```

Check also border color section in [colors](colors#border-color).

## Border width

The `.bw-X` class only sets the border width, so if the border style is none, you see no effect. You must use one of the classes above or set the border style manually.

<div class="flexbox text-center m--4">
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-0 p-7">.bw-0</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-1 p-7">.bw-1</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-2 p-7">.bw-2</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-3 p-7">.bw-3</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-4 p-7">.bw-4</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-5 p-7">.bw-5</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-6 p-7">.bw-6</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-7 p-7">.bw-7</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-8 p-7">.bw-8</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-9 p-7">.bw-9</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-10 p-7">.bw-10</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-11 p-7">.bw-11</div>
    </div>
     <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-12 p-7">.bw-12</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-13 p-7">.bw-13</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-14 p-7">.bw-14</div>
    </div>
    <div class="w-25% mob:w-50% p-4">
        <div class="bd bw-15 p-7">.bw-15</div>
    </div>
</div>

```html
<div class="bd bw-0">.bw-0</div>
<div class="bd bw-1">.bw-1</div>
<div class="bd bw-2">.bw-2</div>
<div class="bd bw-3">.bw-3</div>
<div class="bd bw-4">.bw-4</div>
<div class="bd bw-5">.bw-5</div>
<div class="bd bw-6">.bw-6</div>
<div class="bd bw-7">.bw-7</div>
<div class="bd bw-8">.bw-8</div>
<div class="bd bw-9">.bw-9</div>
<div class="bd bw-10">.bw-10</div>
<div class="bd bw-11">.bw-11</div>
<div class="bd bw-12">.bw-12</div>
<div class="bd bw-13">.bw-13</div>
<div class="bd bw-14">.bw-14</div>
<div class="bd bw-15">.bw-15</div>
```

| class | .bw-0 |  .bw-1  |  .bw-2  |  .bw-3   |  .bw-4  |  .bw-5   |  .bw-6  |  .bw-7   |  .bw-8  |  .bw-9   | .bw-10  |  .bw-11  | .bw-12  |  .bw-13  | .bw-14  |  .bw-15  |
| :---: | :---: | :-----: | :-----: | :------: | :-----: | :------: | :-----: | :------: | :-----: | :------: | :-----: | :------: | :-----: | :------: | :-----: | :------: |
| value |   0   | 0.05rem | 0.1rem | 0.15rem | 0.2rem | 0.25rem | 0.3rem | 0.35rem | 0.4rem | 0.45rem | 0.5rem | 0.6rem | 0.7rem | 0.8rem | 0.9rem | 1rem |

## Border radius

<div class="flexbox text-center m--4">
    <div class="w-17% mob:w-33% p-4">
        <div class="br-0 bg py-9">.br-0</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-1 bg py-9">.br-1</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-2 bg py-9">.br-2</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-3 bg py-9">.br-3</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-4 bg py-9">.br-4</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-5 bg py-9">.br-5</div>
    </div> 
    <div class="w-17% mob:w-33% p-4">
        <div class="br-6 bg py-9">.br-6</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-7 bg py-9">.br-7</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-8 bg py-9">.br-8</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-9 bg py-9">.br-9</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-10 bg py-9">.br-10</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-11 bg py-9">.br-11</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-12 bg py-9">.br-12</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-13 bg py-9">.br-13</div>
    </div> 
    <div class="w-17% mob:w-33% p-4">
        <div class="br-14 bg py-9">.br-14</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="br-15 bg py-9">.br-15</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="pill bg py-9">.pill</div>
    </div>
    <div class="w-17% mob:w-33% p-4">
        <div class="angular bg py-9">.angular</div>
    </div>
</div>

```html
<div class="br-0">.br-0</div>
<div class="br-1">.br-1</div>
<div class="br-2">.br-2</div>
...
<div class="br-15">.br-15</div>
<div class="pill">.pill</div>
<div class="angular">.angular</div>
```

| class | .br-0 | .br-1 | .br-2 | .br-3 | .br-4 | .br-5 | .br-6 | .br-7 | .br-8 | .br-9 | .br-10 | .br-11 | .br-12 | .br-13 | .br-14 | .br-15 | .pill  | .angular |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :------: |
| value |   0   |  1px  |  2px  |  3px  |  4px  |  6px  |  8px  | 12px  | 16px  | 24px  |  32px  |  48px  |  64px  |  96px  | 128px  | 192px  | 9999px |    0     |
