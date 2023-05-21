# Colors

<div class="mb--10"></div>

## Basic colors

<div class="flexbox">
    <div class="bg-fff c-000 w-33% mob:w-50% text-center py-8">white - #fff</div>
    <div class="bg-000 c-fff w-33% mob:w-50% text-center py-8">black - #000</div>
    <div class="bg-888 c-fff w-33% mob:w-50% text-center py-8">gray - #888</div>
    <div class="bg-f00 c-fff w-33% mob:w-50% text-center py-8">red - #f00</div>
    <div class="bg-0f0 c-fff w-33% mob:w-50% text-center py-8">green - #0f0</div>
    <div class="bg-00f c-fff w-33% mob:w-50% text-center py-8">blue - #00f</div>
    <div class="bg-0ff c-000 w-33% mob:w-50% text-center py-8">cyan - #0ff</div>
    <div class="bg-f0f c-000 w-33% mob:w-50% text-center py-8">magenta - #f0f</div>
    <div class="bg-ff0 c-000 w-33% mob:w-50% text-center py-8">yellow - #ff0</div>
</div>

## All available colors

<div class="flexbox">
    <div class="flexbox w-50% mob:w-100%" v-html="cols[0]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="cols[1]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="cols[2]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="cols[3]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="cols[4]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="cols[5]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="gray_cols[0]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="gray_cols[1]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="gray_cols[2]"></div>
    <div class="flexbox w-50% mob:w-100%" v-html="gray_cols[3]"></div>
</div>

## Accent color

<div class="flexbox y-center text-center m--4">
    <div class="w-33% mob:w-100% p-4">
        <div class="c-a p-7">accent color</div>
    </div>
    <div class="w-33% mob:w-100% p-4">
        <div class="bg-a p-7">accent background</div>
    </div>
    <div class="w-33% mob:w-100% p-4">
        <div class="bd bd-a" style="padding: calc(12px - 0.1rem)">accent border</div>
    </div>
</div>

```html
<div class="c-a">accent color</div>
<div class="bg-a">accent background</div>
<div class="bd bd-a">accent border</div>
```

### Hover

<div class="h-7"></div>

<div class="flexbox y-center text-center m--4">
    <div class="w-33% mob:w-100% p-4">
        <div class="hover:c-a p-7">accent color</div>
    </div>
    <div class="w-33% mob:w-100% p-4">
        <div class="hover:bg-a p-7">accent background</div>
    </div>
    <div class="w-33% mob:w-100% p-4">
        <div class="bd bd-none hover:bd-a" style="padding: calc(12px - 0.1rem)">accent border</div>
    </div>
</div>

```html
<div class="hover:c-a">accent color</div>
<div class="hover:bg-a">accent background</div>
<div class="bd bd-none hover:bd-a">accent border</div>
```

Learn more about accent color in the [config](../config#accent-color).

## Usage

### Color

<div class="h-7"></div>

<div class="m--4">
<button class="btn c m-4">default color</button>
<button class="btn c-a m-4">accent color</button>
<button class="btn c-05f m-4">blue color</button>
<button class="btn c-f00 m-4">red color</button>
<button class="btn c-none m-4">none color</button>
</div>

```html
<button class="btn c">default color</button>
<button class="btn c-a">accent color</button>
<button class="btn c-05f">blue color</button>
<button class="btn c-f00">red color</button>
<button class="btn c-none">none color</button>
```

### Background color

<div class="h-7"></div>

<div class="m--4">
<button class="btn bg m-4">default background</button>
<button class="btn bg-a m-4">accent background</button>
<button class="btn bg-05f c-fff m-4">blue background</button>
<button class="btn bg-f00 c-fff m-4">red background</button>
<button class="btn bg-none m-4">none background</button>
</div>

```html
<button class="btn bg">default background</button>
<button class="btn bg-a">accent background</button>
<button class="btn bg-05f c-fff">blue background</button>
<button class="btn bg-f00 c-fff">red background</button>
<button class="btn bg-none">none background</button>
```

### Border color

<div class="h-7"></div>

<div class="m--4">
<button class="btn bd m-4">default border</button>
<button class="btn bd-a m-4">accent border</button>
<button class="btn bd-05f m-4">blue border</button>
<button class="btn bd-f00 m-4">red border</button>
<button class="btn bd-none m-4">none border</button>
</div>

```html
<button class="btn bd">default border</button>
<button class="btn bd-a">accent border</button>
<button class="btn bd-05f">blue border</button>
<button class="btn bd-f00">red border</button>
<button class="btn bd-none">none border</button>
```

## Semi-transparent background colors

<div class="flexbox bg-a c text-center p-7">
    <div class="bg-0.2 w-20% py-8">.bg-0.2</div>
    <div class="bg-0.4 w-20% py-8">.bg-0.4</div>
    <div class="bg-0.6 w-20% py-8">.bg-0.6</div>
    <div class="bg-0.8 w-20% py-8">.bg-0.8</div>
    <div class="bg w-20% py-8">.bg</div>
</div>

```html
<div class="bg-0.2">.bg-0.2</div>
<div class="bg-0.4">.bg-0.4</div>
<div class="bg-0.6">.bg-0.6</div>
<div class="bg-0.8">.bg-0.8</div>
<div class="bg">.bg</div>
```

## Dark mode

Classes with the `d:` prefix are only applied in dark mode and will override classes without this prefix.
If the `$color-mode` property in the [config](../config#color-mode) is set to `both` (it's the default), then each color above is also available with the `d:` prefix.

To see the effect toggle the color mode. In lignt mode color is blue, in dark it is red.

<button class="btn c-05f d:c-f00 m-4">color</button>
<button class="btn bg-05f d:bg-f00 c-fff m-4">background</button>
<button class="btn bd-05f d:bd-f00 m-4">border</button>

```html
<button class="btn c-05f d:c-f00">color</button>
<button class="btn bg-05f d:bg-f00 c-fff">background</button>
<button class="btn bd-05f d:bd-f00">border</button>
```

For more informations see [Color mode](../color-mode).

<script>
export default {
    data() {
        return {
            cols: ["", "", "", "", "", ""],
            gray_cols: ["", "", "", "", "", "", ""]
        }
    },
    

    mounted() {
        let colors = "05af".split("");
        let grayColors = "0123456789abcdef".split("");
            
        for (let k = 3; k >= 0; k--) {
            for (let j = 3; j >= 0; j--) {
                for (let i = 3; i >= 0; i--) {
                    let r = colors[i]
                    let g = colors[j]
                    let b = colors[k]

                    this.cols[5-k] += `<div class="bg-${r}${g}${b} c-${(i + j + k) < 5 ? 'fff' : '000'} w-25% text-center py-9">#${r}${g}${b}</div>`;
                }
            }
        }
        for (let i = 0; i < grayColors.length; i++) {
            let n = Math.floor(i/4);
            let c = grayColors[grayColors.length - 1 - i]
           
            this.gray_cols[n] += `<div class="bg-${c}${c}${c} c-${i < grayColors.length / 2 ? '000' : 'fff'} w-25% text-center py-9">#${c}${c}${c}</div>`;
        }
    }
}
</script>
