# Forms

<div class="mb--10"></div>

## Usage

<iframe src="/iframes/overview/1.html" class="w-100% bd-none" style="height: 34px" allowtransparency = "true"></iframe>
<input type="text" class="form" />
<div class="h-6"></div>
<div class="form">
    <input type="text" />
</div>

```html
<!-- Form styles are not applied -->
<input type="text" />

<!-- Form styles are applied to input -->
<input type="text" class="form" />

<!-- Form styles are applied to each input inside a tag with the .form class -->
<div class="form">
    <input type="text" />
</div>
```

## With Placeholders

<form class="form">
    <input type="text" placeholder="Your name" />
    <input type="email" placeholder="Your email" />
    <textarea rows="4" placeholder="Your message"></textarea>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>

```html
<form class="form">
    <input type="text" placeholder="Your name" />
    <input type="email" placeholder="Your email" />
    <textarea rows="4" placeholder="Your message"></textarea>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>
```

## With Labels

<form class="form">
    <label for="name">Your name</label>
    <input type="text" id="name" />
    <label for="email">Your email</label>
    <input type="email" id="email" />
    <label for="message">Your message</label>
    <textarea rows="4" id="message"></textarea>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>

```html
<form class="form">
    <label for="name">Your name</label>
    <input type="text" id="name" />
    <label for="email">Your email</label>
    <input type="email" id="email" />
    <label for="message">Your message</label>
    <textarea rows="4" id="message"></textarea>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>
```

## Horizontal

<form class="form horizontal">
    <div>
        <label for="name">Your name</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label for="email">Your email</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="message">Your message</label>
        <textarea rows="4" id="message"></textarea>
    </div>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>

```html
<form class="form horizontal">
    <div>
        <label for="name">Your name</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label for="email">Your email</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="message">Your message</label>
        <textarea rows="4" id="message"></textarea>
    </div>
    <label>
        <input type="checkbox" class="bg" />
        I agree with terms and conditions
    </label>
    <input type="submit" class="bg-a w-100% lg" />
</form>
```

## Verify

<input type="email" value="valid@format.com" class="form verify" />
<div class="h-6"></div>
<input type="email" value="invalid format" class="form verify" />

```html
<input type="email" value="valid@format.com" class="form verify" />
<input type="email" value="invalid format" class="form verify" />
```

### Color

<div class="h-6"></div>

<input type="email" value="invalid format" class="form verify" style="--verify-c: #fa0">

```html
<input
    type="email"
    value="invalid format"
    class="form verify"
    style="--verify-c: #fa0"
/>
```

---

Check also forms in the [config](../config#forms).