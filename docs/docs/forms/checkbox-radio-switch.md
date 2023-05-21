# Checkbox, Radio & Switch

<div class="mb--10"></div>

## Checkbox

<div class="form">
    <input type="checkbox" class="m-4">
    <input type="checkbox" class="m-4" checked>
</div>

```html
<input type="checkbox" class="form" />
<input type="checkbox" class="form" checked />
<!-- or -->
<div class="form">
    <input type="checkbox" />
    <input type="checkbox" checked />
</div>
```

## Radio

<div class="form">
    <input type="radio" class="m-4" name="group-1">
    <input type="radio" class="m-4" name="group-1" checked>
</div>

```html
<input type="radio" class="form" name="group-1" />
<input type="radio" class="form" name="group-1" checked />
<!-- or -->
<div class="form">
    <input type="radio" name="group-1" />
    <input type="radio" name="group-1" checked />
</div>
```

## Switch

<input type="checkbox" class="switch m-4">
<input type="checkbox" class="switch m-4" checked>

```html
<input type="checkbox" class="switch" />
<input type="checkbox" class="switch" checked />
```

## Size

<div class="form">
    <input type="checkbox" class="xs m-4">
    <input type="checkbox" class="sm m-4">
    <input type="checkbox" class="m-4">
    <input type="checkbox" class="lg m-4">
    <input type="checkbox" class="xl m-4">
</div>

```html
<div class="form">
    <input type="checkbox" class="xs" />
    <input type="checkbox" class="sm" />
    <input type="checkbox" />
    <input type="checkbox" class="lg" />
    <input type="checkbox" class="xl" />
</div>
```

<div class="form">
    <input type="radio" class="xs m-4" name="group-2">
    <input type="radio" class="sm m-4" name="group-2">
    <input type="radio" class="m-4" name="group-2">
    <input type="radio" class="lg m-4" name="group-2">
    <input type="radio" class="xl m-4" name="group-2">
</div>

```html
<div class="form">
    <input type="radio" class="xs" name="group-2" />
    <input type="radio" class="sm" name="group-2" />
    <input type="radio" name="group-2" />
    <input type="radio" class="lg" name="group-2" />
    <input type="radio" class="xl" name="group-2" />
</div>
```

<input type="checkbox" class="switch xs m-4">
<input type="checkbox" class="switch sm m-4">
<input type="checkbox" class="switch m-4">
<input type="checkbox" class="switch lg m-4">
<input type="checkbox" class="switch xl m-4">

```html
<input type="checkbox" class="switch xs" />
<input type="checkbox" class="switch sm" />
<input type="checkbox" class="switch" />
<input type="checkbox" class="switch lg" />
<input type="checkbox" class="switch xl" />
```

## Color

<div class="form">
    <input type="checkbox" class="c-a m-4">
    <input type="checkbox" class="c-a m-4" checked>
    <input type="checkbox" class="bg-a m-4">
    <input type="checkbox" class="bg-a m-4" checked>
    <input type="checkbox" class="bd-a bg-none m-4">
    <input type="checkbox" class="bd-a bg-none m-4" checked>
</div>

```html
<div class="form">
    <input type="checkbox" class="c-a" />
    <input type="checkbox" class="c-a" checked />
    <input type="checkbox" class="bg-a" />
    <input type="checkbox" class="bg-a" checked />
    <input type="checkbox" class="bd-a bg-none" />
    <input type="checkbox" class="bd-a bg-none" checked />
</div>
```

<div class="form">
    <input type="radio" class="c-a m-4" name="group-3">
    <input type="radio" class="c-a m-4" name="group-3" checked>
    <input type="radio" class="bg-a m-4" name="group-4">
    <input type="radio" class="bg-a m-4" name="group-4" checked>
    <input type="radio" class="bd-a m-4 bg-none" name="group-5">
    <input type="radio" class="bd-a m-4 bg-none" name="group-5" checked>
</div>

```html
<div class="form">
    <input type="radio" class="c-a" name="group-3" />
    <input type="radio" class="c-a" name="group-3" checked />
    <input type="radio" class="bg-a" name="group-4" />
    <input type="radio" class="bg-a" name="group-4" checked />
    <input type="radio" class="bd-a bg-none" name="group-5" />
    <input type="radio" class="bd-a bg-none" name="group-5" checked />
</div>
```

<input type="checkbox" class="switch bg-a m-4">
<input type="checkbox" class="switch bg-a m-4" checked>
<input type="checkbox" class="switch bd-a bg-none m-4">
<input type="checkbox" class="switch bd-a bg-none m-4" checked>
<input type="checkbox" class="switch c-a m-4">
<input type="checkbox" class="switch c-a m-4" checked>
<input type="checkbox" class="switch c-a bd bg-none m-4">
<input type="checkbox" class="switch c-a bd bg-none m-4" checked>

```html
<input type="checkbox" class="switch bg-a" />
<input type="checkbox" class="switch bg-a" checked />
<input type="checkbox" class="switch bd-a bg-none" />
<input type="checkbox" class="switch bd-a bg-none" checked />
<input type="checkbox" class="switch c-a" />
<input type="checkbox" class="switch c-a" checked />
<input type="checkbox" class="switch c-a bd bg-none" />
<input type="checkbox" class="switch c-a bd bg-none" checked />
```

---

<style>
    .my-switch {
        background-color: #eee !important; /* bg unchecked */
        color: #0c5 !important; /* dot unchecked */
    }
    .my-switch:checked {
        background-color: #0c5 !important; /* bg checked */
        color: #eee !important; /* dot checked */
    }
</style>

<input type="checkbox" class="switch xl my-switch">

```html
<style>
    .my-switch {
        background-color: #eee !important; /* bg unchecked */
        color: #0c5 !important; /* dot unchecked */
    }
    .my-switch:checked {
        background-color: #0c5 !important; /* bg checked */
        color: #eee !important; /* dot checked */
    }
</style>

<input type="checkbox" class="switch xl my-switch" />
```

## Label

<label>
    <input type="checkbox" class="form" />
    When you click on me, the checkbox is toggled.
</label>
<div class="h-6"></div>
<label>
    <input type="radio" class="form" />
    When you click on me, the radio is checked.
</label>
<div class="h-6"></div>
<label>
    <input type="checkbox" class="switch" />
    When you click on me, the switch is toggled.
</label>

```html
<label>
    <input type="checkbox" class="form" />
    When you click on me, the checkbox is toggled.
</label>
<label>
    <input type="radio" class="form" />
    When you click on me, the radio is checked.
</label>
<label>
    <input type="checkbox" class="switch" />
    When you click on me, the switch is toggled.
</label>
```
