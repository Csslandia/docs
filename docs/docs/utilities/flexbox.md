# Flexbox

---

<div class="flexbox">
    <div class="mob:w-100% tab:w-50% pc:w-33% bg-0f5 c-fff d:c-222 p-9">1</div>
    <div class="mob:w-100% tab:w-50% pc:w-33% bg-a p-9">2</div>
    <div class="mob:w-100% tab:w-50% pc:w-33% bg-0a5 c-fff d:c-222 p-9">3</div>
</div>

```html
<div class="flexbox">
    <div class="mob:w-100% tab:w-50% pc:w-33%">1</div>
    <div class="mob:w-100% tab:w-50% pc:w-33%">2</div>
    <div class="mob:w-100% tab:w-50% pc:w-33%">3</div>
</div>
```

## Columns

<div class="flexbox text-center nowrap hidden">
    <div class="w-100% p-2"><div class="bg-a p-5">.w-100%</div></div>
    <div class="w-90% p-2"><div class="bg-a p-5">.w-90% (9/10)</div></div>
    <div class="w-10% p-2"><div class="bg-a p-5">.w-10% (1/10)</div></div>
    <div class="w-87% p-2"><div class="bg-a p-5">.w-87% (7/8)</div></div>
    <div class="w-12% p-2"><div class="bg-a p-5">.w-12% (1/8)</div></div>
    <div class="w-83% p-2"><div class="bg-a p-5">.w-83% (5/6)</div></div>
    <div class="w-17% p-2"><div class="bg-a p-5">.w-17% (1/6)</div></div>
    <div class="w-80% p-2"><div class="bg-a p-5">.w-80% (4/5)</div></div>
    <div class="w-20% p-2"><div class="bg-a p-5">.w-20% (1/5)</div></div>
    <div class="w-75% p-2"><div class="bg-a p-5">.w-75% (3/4)</div></div>
    <div class="w-25% p-2"><div class="bg-a p-5">.w-25% (1/4)</div></div>
    <div class="w-70% p-2"><div class="bg-a p-5">.w-70% (7/10)</div></div>
    <div class="w-30% p-2"><div class="bg-a p-5">.w-30% (3/10)</div></div>
    <div class="w-67% p-2"><div class="bg-a p-5">.w-67% (2/3)</div></div>
    <div class="w-33% p-2"><div class="bg-a p-5">.w-33% (1/3)</div></div>
    <div class="w-62% p-2"><div class="bg-a p-5">.w-62% (5/8)</div></div>
    <div class="w-37% p-2"><div class="bg-a p-5">.w-37% (3/8)</div></div>
    <div class="w-60% p-2"><div class="bg-a p-5">.w-60% (3/5)</div></div>
    <div class="w-40% p-2"><div class="bg-a p-5">.w-40% (2/5)</div></div>
    <div class="w-50% p-2"><div class="bg-a p-5">.w-50% (1/2)</div></div>
    <div class="w-50% p-2"><div class="bg-a p-5">.w-50% (1/2)</div></div>
</div>

```html
<div class="w-10%">.w-10% (1/10)</div>
<div class="w-12%">.w-12% (1/8)</div>
<div class="w-17%">.w-17% (1/6)</div>
<div class="w-20%">.w-20% (1/5)</div>
<div class="w-25%">.w-25% (1/4)</div>
<div class="w-30%">.w-30% (3/10)</div>
<div class="w-33%">.w-33% (1/3)</div>
<div class="w-37%">.w-37% (3/8)</div>
<div class="w-40%">.w-40% (2/5)</div>
<div class="w-50%">.w-50% (1/2)</div>
<div class="w-60%">.w-60% (3/5)</div>
<div class="w-62%">.w-62% (5/8)</div>
<div class="w-67%">.w-67% (2/3)</div>
<div class="w-70%">.w-70% (7/10)</div>
<div class="w-75%">.w-75% (3/4)</div>
<div class="w-80%">.w-80% (4/5)</div>
<div class="w-83%">.w-83% (5/6)</div>
<div class="w-87%">.w-87% (7/8)</div>
<div class="w-90%">.w-90% (9/10)</div>
<div class="w-100%">.w-100%</div>
```

## Responsive width

|    width     | global  |   mobile    |   tablet    |     pc     |
| :----------: | :-----: | :---------: | :---------: | :--------: |
|     auto     | .w-auto | .mob:w-auto | .tab:w-auto | .pc:w-auto |
|      0       |  .w-0   |  .mob:w-0   |  .tab:w-0   |  .pc:w-0   |
|  10% (1/10)  | .w-10%  | .mob:w-10%  | .tab:w-10%  | .pc:w-10%  |
| 12.5% (1/8)  | .w-12%  | .mob:w-12%  | .tab:w-12%  | .pc:w-12%  |
| 16.67% (1/6) | .w-17%  | .mob:w-17%  | .tab:w-17%  | .pc:w-17%  |
|  20% (1/5)   | .w-20%  | .mob:w-20%  | .tab:w-20%  | .pc:w-20%  |
|  25% (1/4)   | .w-25%  | .mob:w-25%  | .tab:w-25%  | .pc:w-25%  |
|  30% (3/10)  |  .w-30  | .mob:w-30%  | .tab:w-30%  | .pc:w-30%  |
| 33.33% (1/3) |  .w-33  | .mob:w-33%  | .tab:w-33%  | .pc:w-33%  |
| 37.5% (3/8)  |  .w-37  | .mob:w-37%  | .tab:w-37%  | .pc:w-37%  |
|  40% (2/5)   |  .w-40  | .mob:w-40%  | .tab:w-40%  | .pc:w-40%  |
|  50% (1/2)   |  .w-50  | .mob:w-50%  | .tab:w-50%  | .pc:w-50%  |
|  60% (3/5)   |  .w-60  | .mob:w-60%  | .tab:w-60%  | .pc:w-60%  |
| 62.5% (5/8)  |  .w-62  | .mob:w-62%  | .tab:w-62%  | .pc:w-62%  |
| 66.67% (2/3) |  .w-67  | .mob:w-67%  | .tab:w-67%  | .pc:w-67%  |
|  70% (7/10)  |  .w-70  | .mob:w-70%  | .tab:w-70%  | .pc:w-70%  |
|  75% (3/4)   |  .w-75  | .mob:w-75%  | .tab:w-75%  | .pc:w-75%  |
|  80% (4/5)   |  .w-80  | .mob:w-80%  | .tab:w-80%  | .pc:w-80%  |
| 83.33% (5/6) |  .w-83  | .mob:w-83%  | .tab:w-83%  | .pc:w-83%  |
| 87.5% (7/8)  |  .w-87  | .mob:w-87%  | .tab:w-87%  | .pc:w-87%  |
|  90% (9/10)  |  .w-90  | .mob:w-90%  | .tab:w-90%  | .pc:w-90%  |
|     100%     | .w-100% | .mob:w-100% | .tab:w-100% | .pc:w-100% |
|      -       | .w-fill | .mob:w-fill | .tab:w-fill | .pc:w-fill |

Learn more about [responsivity](../responsivity).

## Justify content

<div class="flexbox x-left bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-left</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-left</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-left</div>
</div>
<div class="flexbox x-center bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-center</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-center</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-center</div>
</div>
<div class="flexbox x-right bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-right</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-right</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-right</div>
</div>
<div class="flexbox x-between bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-between</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-between</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-between</div>
</div>
<div class="flexbox x-around bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-around</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-around</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-around</div>
</div>
<div class="flexbox x-evenly bg mb-5">
    <div class="w-25% pc:w-20% bg-0f5 c-fff d:c-222 py-7 text-center">.x-evenly</div>
    <div class="w-25% pc:w-20% bg-a py-7 text-center">.x-evenly</div>
    <div class="w-25% pc:w-20% bg-0a5 c-fff d:c-222 py-7 text-center">.x-evenly</div>
</div>

```html
<div class="flexbox x-left">...</div>
<div class="flexbox x-center">...</div>
<div class="flexbox x-right">...</div>
<div class="flexbox x-between">...</div>
<div class="flexbox x-around">...</div>
<div class="flexbox x-evenly">...</div>
```

|   global   |     mobile     |     tablet     |      pc       |
| :--------: | :------------: | :------------: | :-----------: |
|  .x-left   |  .mob:x-left   |  .tab:x-left   |  .pc:x-left   |
| .x-center  | .mob:x-center  | .tab:x-center  | .pc:x-center  |
|  .x-right  |  .mob:x-right  |  .tab:x-right  |  .pc:x-right  |
| .x-between | .mob:x-between | .tab:x-between | .pc:x-between |
| .x-around  | .mob:x-around  | .tab:x-around  | .pc:x-around  |
| .x-evenly  | .mob:x-evenly  | .tab:x-evenly  | .pc:x-evenly  |

## Align items

<div class="flexbox y-top bg mb-5 h-13">
    <div class="w-100% bg-a py-7 text-center">.y-top</div>
</div>
<div class="flexbox y-center bg mb-5 h-13">
    <div class="w-100% bg-a py-7 text-center">.y-center</div>
</div>
<div class="flexbox y-bottom bg mb-5 h-13">
    <div class="w-100% bg-a py-7 text-center">.y-bottom</div>
</div>
<div class="flexbox y-stretch bg mb-5 h-13">
    <div class="w-100% bg-a py-7 text-center">.y-stretch</div>
</div>
<div class="flexbox y-baseline bg mb-5 h-13">
    <div class="w-100% bg-a py-7 text-center">.y-baseline</div>
</div>

```html
<div class="flexbox y-top">...</div>
<div class="flexbox y-center">...</div>
<div class="flexbox y-bottom">...</div>
<div class="flexbox y-stretch">...</div>
<div class="flexbox y-baseline">...</div>
```

|   global    |     mobile      |     tablet      |       pc       |
| :---------: | :-------------: | :-------------: | :------------: |
|   .y-top    |   .mob:y-top    |   .tab:y-top    |   .pc:y-top    |
|  .y-center  |  .mob:y-center  |  .tab:y-center  |  .pc:y-center  |
|  .y-bottom  |  .mob:y-bottom  |  .tab:y-bottom  |  .pc:y-bottom  |
| .y-stretch  | .mob:y-stretch  | .tab:y-stretch  | .pc:y-stretch  |
| .y-baseline | .mob:y-baseline | .tab:y-baseline | .pc:y-baseline |

## Flex direction

<div class="flexbox m--3">
    <div class="w-50% p-3">
        Row
        <div class="flexbox row">
            <div class="bg-a p-8 w-50%">1</div>
            <div class="bg-0a5 c-fff d:c-222 p-8 w-50%">2</div>
        </div>
    </div>
    <div class="w-50% p-3">
        Row reverse
        <div class="flexbox row-reverse">
            <div class="bg-a p-8 w-50%">1</div>
            <div class="bg-0a5 c-fff d:c-222 p-8 w-50%">2</div>
        </div>
    </div>
    <div class="w-50% p-3">
        Column
        <div class="flexbox column">
            <div class="bg-a p-8">1</div>
            <div class="bg-0a5 c-fff d:c-222 p-8">2</div>
        </div>
    </div>
    <div class="w-50% p-3">
        Column reverse
        <div class="flexbox column-reverse">
            <div class="bg-a p-8">1</div>
            <div class="bg-0a5 c-fff d:c-222 p-8">2</div>
        </div>
    </div>
</div>

```html
<div class="flexbox row">
    <div>1</div>
    <div>2</div>
</div>
<div class="flexbox row-reverse">
    <div>1</div>
    <div>2</div>
</div>
<div class="flexbox column">
    <div>1</div>
    <div>2</div>
</div>
<div class="flexbox column-reverse">
    <div>1</div>
    <div>2</div>
</div>
```

|     global      |       mobile        |       tablet        |         pc         |
| :-------------: | :-----------------: | :-----------------: | :----------------: |
|      .row       |      .mob:row       |      .tab:row       |      .pc:row       |
|  .row-reverse   |  .mob:row-reverse   |  .tab:row-re verse  |  .pc:row-re verse  |
|     .column     |     .mob:column     |     .tab:column     |     .pc:column     |
| .column-reverse | .mob:column-reverse | .tab:column-reverse | .pc:column-reverse |

When using `.column` or `.column-reverse`, justify-content and align-items are reversed.

## Fill

<div class="nowrap">

<div class="flexbox">
    <div class="w-15 bg-a p-9">.w-15</div>
    <div class="w-fill bg-0a5 c-fff d:c-222 p-9">.w-fill</div>
</div>

<div class="h-6"></div>

<div class="flexbox">
    <div class="w-33% bg-a p-9">.w-33%</div>
    <div class="w-fill bg-0a5 c-fff d:c-222 p-9">.w-fill</div>
</div>

</div>

```html
<div class="flexbox">
    <div class="w-15">.w-15</div>
    <div class="w-fill">.w-fill</div>
</div>

<div class="flexbox">
    <div class="w-33%">.w-33%</div>
    <div class="w-fill">.w-fill</div>
</div>
```

| global |  mobile   |  tablet   |    pc    |
| :----: | :-------: | :-------: | :------: |
| .fill  | .mob:fill | .tab:fill | .pc:fill |

## Inner flexbox

<div class="flexbox y-stretch">
    <header class="w-100% bg-a p-9">header</header>
    <nav class="mob:w-100% tab:w-33% pc:w-25% bg-0f5 c-fff d:c-222 p-9">nav</nav>
    <div class="flexbox y-stretch mob:w-100% tab:w-67% pc:w-75%">
        <main class="w-100% pc:w-80% bg-0a5 c-fff d:c-222 h-14 p-9">main</main>
        <aside class="mob:w-100% tab:w-0 pc:w-20% bg-0f5 c-fff d:c-222 p-9">aside</aside>
        <footer class="w-100% bg-a p-9">footer</footer>
    </div>
</div>

```html
<div class="flexbox y-stretch">
    <header class="w-100% bg-a p-9">header</header>
    <nav class="mob:w-100% tab:w-33% pc:w-25% bg-0f5 p-9">nav</nav>
    <div class="flexbox y-stretch mob:w-100% tab:w-67% pc:w-75%">
        <main class="w-100% pc:w-80% bg-0a5 h-14 p-9">main</main>
        <aside class="mob:w-100% tab:w-0 pc:w-20% bg-0f5 p-9">aside</aside>
        <footer class="w-100% bg-a p-9">footer</footer>
    </div>
</div>
```
