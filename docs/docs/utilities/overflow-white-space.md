# Overflow & White space

<div class="mb--10"></div>

## Overflow

<div class="flexbox" style="margin: -12px">
    <div class="w-50% mob:w-100% p-6">
        <div class="auto h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="w-50% mob:w-100% p-6">
        <div class="scroll h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="w-50% mob:w-100% p-6">
        <div class="hidden h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="w-50% mob:w-100% p-6">
        <div class="visible h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
</div>

<div class="h-11"></div>

```html
<div class="auto h-13">...</div>
<div class="scroll h-13">...</div>
<div class="hidden h-13">...</div>
<div class="visible h-13">...</div>
```

|           |  auto   |  scroll   |  hidden   |  visible   |
| :-------: | :-----: | :-------: | :-------: | :--------: |
| both axes |  .auto  |  .scroll  |  .hidden  |  .visible  |
|  x axis   | .x-auto | .x-scroll | .x-hidden | .x-visible |
|  y axis   | .y.auto | .y.scroll | .y.hidden | .y.visible |

## White space

<div class="flexbox" style="margin: -12px">
    <div class="w-50% mob:w-100% p-6">
        <div class="nowrap auto h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad.
        </div>
    </div>
    <div class="w-50% mob:w-100% p-6">
        <div class="wrap h-13 px-7 py-6 bd">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad.
        </div>
    </div>
</div>

```html
<div class="nowrap auto">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad.
</div>
<div class="wrap">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad.
</div>
```

## Hide scrollbar

<div class="nowrap auto px-7 py-6 bd">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
    esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
    obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
    quaerat!
</div>

<div class="h-6"></div>

<div class="hide-scrollbar nowrap auto px-7 py-6 bd">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
    esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
    obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
    quaerat!
</div>

```html
<div class="nowrap auto">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad, dignissimos voluptatum obcaecati
    nesciunt quam perferendis ab quibusdam quod et sint maxime quaerat!
</div>
<div class="hide-scrollbar nowrap auto">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad, dignissimos voluptatum obcaecati
    nesciunt quam perferendis ab quibusdam quod et sint maxime quaerat!
</div>
```
