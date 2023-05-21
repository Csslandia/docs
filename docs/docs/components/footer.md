# Footer

The last child of `.has-footer` is always at the bottom.

---

<button class="btn bg-a mr-4" onclick="shrinkFooter('#footer-iframe')">Shrink</button>
<button class="btn bg-a" onclick="expandFooter('#footer-iframe')">Expand</button>

<iframe src="/iframes/footer/1.html" class="w-100% h-17 bd" id="footer-iframe"></iframe>

```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body class="has-footer">
        <div class="p-7">Footer is always at the bottom of the parent.</div>
        <div class="p-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
        <footer class="bg text-center p-7">This is footer</footer>
    </body>
</html>
```
