# Responsivity

---

On screens narrower than 600px are used classes with the `mob:` prefix.
<br>
On screens between 600px and 1000px are used classes with the `tab:` prefix.
<br>
On screens wider than 1000px are used classes with the `pc:` prefix.
<br>
Classes without the prefix are used on all screens.

| prefix | min screen width | max screen width |
| :----: | :--------------: | :--------------: |
| `mob:` |        -         |       599        |
| `tab:` |       600        |       999        |
| `pc:`  |       1000       |        -         |

You can change default breakpoints in the [config](config#breakpoints).

## Example

<div class="mob:w-100% tab:w-50% pc:w-33% bg px-8 py-7">I'm responsive</div>

```html
<div class="mob:w-100% tab:w-50% pc:w-33%">I'm responsive</div>
```

The width is 100% on phones, 50% on tablets and 33% on PCs.

---

<div class="w-50% mob:w-100% bg px-8 py-7">I'm responsive</div>

```html
<div class="w-50% mob:w-100%">I'm responsive</div>
```

The width is 50% on tablets and PCs, on phones it is 100%.

## Available classes

By default, only classes used with [flexbox](utilities/flexbox) are available with prefixes.

You can also enable [margin & padding prefixes](config#margin-padding-prefixes) and [width & height prefixes](config#width-height-prefixes) in the config.
