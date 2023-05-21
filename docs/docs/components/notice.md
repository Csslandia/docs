# Notice

---

<a href="#" class="notice nn">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
    esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
    obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
    quaerat!
</a>


```html
<a href="#" class="notice">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad, dignissimos voluptatum obcaecati
    nesciunt quam perferendis ab quibusdam quod et sint maxime quaerat!
</a>
```

## Slide animation

<a href="#" class="notice slide nn" id="my-notice">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad, dignissimos voluptatum obcaecati
    nesciunt quam perferendis ab quibusdam quod et sint maxime quaerat!
</a>

<script>
    setTimeout(() => {
        typeof document !== 'undefined' && document.querySelector("#my-notice").classList.add("open");
    }, 2000);
</script>

```html
<a href="#" class="notice slide" id="my-notice">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse,
    labore laudantium suscipit ex iure ad, dignissimos voluptatum obcaecati
    nesciunt quam perferendis ab quibusdam quod et sint maxime quaerat!
</a>

<script>
    setTimeout(() => {
        document.querySelector("#my-notice").classList.add("open");
    }, 2000);
</script>
```

