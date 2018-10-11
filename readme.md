
<cover>
	<a href="#">
		<img width="100%" src="/media/headline-cover.svg" alt="Colorider">
	</a>
</cover>
<br>
<br>

# Colorider Module
A node.js module for output styling in Terminal, iTerm, etc.


## Install

```sh
˃₋ npm install colorider
```



## Usage

```js
const Cr = require('colorider');
console.log(Cr.cyan('Hi colorider!'));
console.log(colo.cyan('Hi Colorider!') === '\u001B[36mHi Colorider!\u001B[39m'); // ˃₋  true
```



## Styling presets


### Supported tags
The following tags works with most terminals and terminals emulators.
```sh
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃::::::::::::::::::::::::: ᵈᵉᶠᵃᵘˡᵗ ᵖʳᵉˢᵉᵗˢ :::::::::::::::::::::::::┃
┃:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::┃
┣━━━━━━━━━━━━━━━━━━━━━━━━┳┳━━━━━━━━━━━━━━━━━━━━━━━━┳┳━━━━━━━━━━━━━━━┫
┃ FOREGROUND             ┃┃ BACKGROUND             ┃┃ MODIFIER      ┃
┃ ‾‾‾‾‾‾‾‾‾‾             ┃┃ ‾‾‾‾‾‾‾‾‾‾             ┃┃ ‾‾‾‾‾‾‾‾      ┃
┡━━━━━━━━━┯━━━━━━━━━━━━━━╇╇━━━━━━━━━┯━━━━━━━━━━━━━━╇╇━━━━━━━━━━━━━━━┩
│ black   │ gray         ││ BLACK   │ GRAY         ││ bold          │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ red     │ lightRed     ││ RED     │ lightRED     ││ dim           │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ green   │ lightGreen   ││ GREEN   │ lightGREEN   ││ italic        │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ yellow  │ lightYellow  ││ YELLOW  │ lightYELLOW  ││ underline     │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ blue    │ lightBlue    ││ BLUE    │ lightBLUE    ││ blink         │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ magenta │ lightMagenta ││ MAGENTA │ lightMAGENTA ││ inverse       │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ cyan    │ lightCyan    ││ CYAN    │ lightCYAN    ││ hidden        │
├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ light   │ white        ││ LIGHT   │ WHITE        ││ strike        │
├─────────┴──────────────┴┴─────────┴──────────────┴┴───────────────┤
│:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::│
╰───────────────────────────────────────────────────────────────────╯
```
> *The **colors** can vary depending of the terminal configuration.*


### Examples

#### Foreground (text color)
```js
console.log(Cr.red('Red color'));
console.log(Cr.yellow('Yellow color'));
console.log(Cr.green('Green color'));
```
<a href="#"><img width="460px" src="/media/example-foreground.png" alt="Foreground tags"></a>
<br>

#### Background (background color)
```js
console.log(Cr.BLACK('Black background'));
console.log(Cr.YELLOW('Yellow background'));
console.log(Cr.WHITE('White background'));
```
<a href="#"><img width="460px" src="/media/example-background.png" alt="Background tags"></a>
<br>

#### Modifiers (formatting text)
```js
console.log(Cr.bold('Bold modifier'));
console.log(Cr.italic('Italic modifier'));
console.log(Cr.underline('Underline modifier'));
```
<a href="#"><img width="460px" src="/media/example-modifiers.png" alt="Modifiers tags"></a>
<br>
<br>



## Base features

#### Style combining
```js
console.log(Cr.red('Red') + ' Normal ' + Cr.blue('Blue'));
```
<a href="#"><img width="460px" src="/media/example-style-combining.png" alt="Style combining"></a>
<br>

#### Chaining tags
```js
console.log(Cr.white.bold.underline('White bold underline'));
```
<a href="#"><img width="460px" src="/media/example-chaining-tags.png" alt="Chaining tags"></a>
<br>



