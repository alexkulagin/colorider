
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
console.log(colo.cyan('Text') === '\u001B[36mText\u001B[39m');
// ˃₋  true
```



## Styling presets


### Supported tags
The following tags works with most terminals and terminals emulators.

<table>
	<tr>
		<th align="left">Modifiers</th>
		<th colspan="2">Foreground</th>
		<th colspan="2">Background</th>
	</tr><tr>
		<td><code>bold</code></td>
		<td align="center"><code>black</code></td>
		<td align="center"><code>gray</code></td>
		<td align="center"><code>BLACK</code></td>
		<td align="center"><code>GRAY</code></td>
	</tr><tr>
		<td><code>dim</code></td>
		<td align="center"><code>red</code></td>
		<td align="center"><code>lightRed</code></td>
		<td align="center"><code>RED</code></td>
		<td align="center"><code>lightRED</code></td>
	</tr><tr>
		<td><code>italic</code></td>
		<td align="center"><code>green</code></td>
		<td align="center"><code>lightGreen</code></td>
		<td align="center"><code>GREEN</code></td>
		<td align="center"><code>lightGREEN</code></td>
	</tr><tr>
		<td><code>underline</code></td>
		<td align="center"><code>yellow</code></td>
		<td align="center"><code>lightYellow</code></td>
		<td align="center"><code>YELLOW</code></td>
		<td align="center"><code>lightYELLOW</code></td>
	</tr><tr>
		<td><code>blink</code></td>
		<td align="center"><code>blue</code></td>
		<td align="center"><code>lightBlue</code></td>
		<td align="center"><code>BLUE</code></td>
		<td align="center"><code>lightBLUE</code></td>
	</tr><tr>
		<td><code>inverse</code></td>
		<td align="center"><code>magenta</code></td>
		<td align="center"><code>lightMagenta</code></td>
		<td align="center"><code>MAGENTA</code></td>
		<td align="center"><code>lightMAGENTA</code></td>
	</tr><tr>
		<td><code>hidden</code></td>
		<td align="center"><code>cyan</code></td>
		<td align="center"><code>lightCyan</code></td>
		<td align="center"><code>CYAN</code></td>
		<td align="center"><code>lightCYAN</code></td>
	</tr><tr>
		<td><code>strike</code></td>
		<td align="center"><code>light</code></td>
		<td align="center"><code>white</code></td>
		<td align="center"><code>LIGHT</code></td>
		<td align="center"><code>WHITE</code></td>
	</tr>
</table>


### Examples


#### Modifiers (formatting text)
```js
console.log(Cr.bold('Bold modifier'));
console.log(Cr.italic('Italic modifier'));
console.log(Cr.underline('Underline modifier'));
```
<a href="#"><img width="460px" src="/media/example-modifiers.png" alt="Modifiers tags"></a>
<br>


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



