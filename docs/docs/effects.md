# Effects

---

Effects are used to change the visibility of elements using animation.

<div class="mb--10"></div>

## Fade

<button onclick="toggle('#my-fade')" class="btn bg-a">Toggle</button>

<div class="fade bg" id="my-fade">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

```html
<button onclick="toggle('#my-fade')" class="btn bg-a">Toggle</button>

<div class="fade bg" id="my-fade">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

<script>
    const toggle = (x) => {
        let el = document.querySelector(x);
        el.classList.toggle("open");
    };
</script>
```

## Slide

<button onclick="toggle('#my-slide')" class="btn bg-a">Toggle</button>

<div class="slide bg" id="my-slide">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

```html
<button onclick="toggle('#my-slide')" class="btn bg-a">Toggle</button>

<div class="slide bg" id="my-slide">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

<script>
    const toggle = (x) => {
        let el = document.querySelector(x);
        el.classList.toggle("open");
    };
</script>
```

## Hide

<button onclick="toggle('#my-hide')" class="btn bg-a">Toggle</button>

<div class="hide bg" id="my-hide">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

```html
<button onclick="toggle('#my-hide')" class="btn bg-a">Toggle</button>

<div class="hide bg" id="my-hide">
    <div class="px-8 py-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

<script>
    const toggle = (x) => {
        let el = document.querySelector(x);
        el.classList.toggle("open");
    };
</script>
```
