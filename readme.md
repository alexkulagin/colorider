
<cover>
	<a href="#">
		<img width="100%" src="/media/cover.svg" alt="Colorider">
	</a>
</cover>
<br><br>

# Colorider Module
A node.js module for output styling in Terminal, iTerm, etc.


## Install

```sh
˃₋ npm install colorider
```


## Usage

```js
const Cr = require('colorider');
console.log(Cr.red.bold('Hi colorider!'));
```
<a href="#"><img width="460px" src="/media/example-usage-hi.png" alt="Hi colorider!"></a>
<br>

```js
console.log(Cr.cyan('Text') === '\u001B[36mText\u001B[39m');
```
<a href="#"><img width="460px" src="/media/example-usage-true.png" alt="true"></a>
<br><br><br>




## Tags preset
The following tags works with most terminals and terminals emulators.
<br><br>


### Modifiers (text formatting)
`bold`&ensp;`dim`&ensp;`italic`&ensp;`underline`&ensp;`blink`&ensp;`inverse`&ensp;`hidden`&ensp;`strike`
<br><br>


### Color scheme
<table>
	<tr>
		<th align="left" colspan="2">Foreground (text)</th>
		<th align="left" colspan="2">Background</th>
	</tr><tr>
		<td><b>normal</b></td>
		<td><b>bright</b></td>
		<td><b>normal</b></td>
		<td><b>bright</b></td>
	</tr><tr>
		<td><code>black</code></td>
		<td><code>gray</code></td>
		<td><code>BLACK</code></td>
		<td><code>GRAY</code></td>
	</tr><tr>
		<td><code>red</code></td>
		<td><code>red2</code></td>
		<td><code>RED</code></td>
		<td><code>RED2</code></td>
	</tr><tr>
		<td><code>green</code></td>
		<td><code>green2</code></td>
		<td><code>GREEN</code></td>
		<td><code>GREEN2</code></td>
	</tr><tr>
		<td><code>yellow</code></td>
		<td><code>yellow2</code></td>
		<td><code>YELLOW</code></td>
		<td><code>YELLOW2</code></td>
	</tr><tr>
		<td><code>blue</code></td>
		<td><code>blue2</code></td>
		<td><code>BLUE</code></td>
		<td><code>BLUE2</code></td>
	</tr><tr>
		<td><code>magenta</code></td>
		<td><code>magenta2</code></td>
		<td><code>MAGENTA</code></td>
		<td><code>MAGENTA2</code></td>
	</tr><tr>
		<td><code>cyan</code></td>
		<td><code>cyan2</code></td>
		<td><code>CYAN</code></td>
		<td><code>CYAN2</code></td>
	</tr><tr>
		<td><code>light</code></td>
		<td><code>white</code></td>
		<td><code>LIGHT</code></td>
		<td><code>WHITE</code></td>
	</tr>
</table>
<br><br>


### Converters
The special tags for color models conversion to ansi code.
<table>
	<tr>
		<th>Foreground</th>
		<th>Background</th>
	</tr><tr>
		<td align="center"><code>rgb</code></td>
		<td align="center"><code>RGB</code></td>
	</tr><tr>
		<td align="center"><code>hex</code></td>
		<td align="center"><code>HEX</code></td>
	</tr>
</table>
<br><br>


### Example

```js
// formatting text
console.log(Cr.bold('Bold modifier'));
console.log(Cr.italic('Italic modifier'));
console.log(Cr.underline('Underline modifier'));

// foreground (text color)
console.log(Cr.red('Red color'));
console.log(Cr.rgb(255, 224, 0)('Yellow color'));
console.log(Cr.hex('#00D75F')('Green color'));

// background
console.log(Cr.BLACK('Black background'));
console.log(Cr.RGB(255, 224, 0)('Yellow background'));
console.log(Cr.HEX('#EEEEEE')('White background'));
```
<a href="#"><img width="460px" src="/media/example-preset.png" alt="Modifiers tags"></a>
<br><br><br>




## Conversion level

<a href="#"><img width="460px" src="/media/example-comparing-level.png" alt="Background tags"></a>
<br>


### Levels

<table>
	<tr>
		<td align="center"><code>0</code></td>
		<td>disable conversion</td>
	</tr><tr>
		<td align="center"><code>1</code></td>
		<td>16 colors (4-bit the terminal color scheme)</td>
	</tr><tr>
		<td align="center"><code>2</code></td>
		<td>256 colors (8-bit default)</td>
	</tr><tr>
		<td align="center"><code>3</code></td>
		<td>16 777 216 color variations (24-bit True color)</td>
	</tr>
</table>

```js
console.log('level:', Cr.level); // default 2

Cr.level = 1;
console.log(Cr.RGB(255,250,154)('Conversion level 1'));

Cr.level = 2;
console.log(Cr.RGB(255,250,154)('Conversion level 2'));

Cr.level = 3;
console.log(Cr.RGB(255,250,154)('Conversion level 3'));

```
<a href="#"><img width="460px" src="/media/example-change-level.png" alt="Background tags"></a>
<br><br><br>




## Base features


#### Style combining
```js
console.log(Cr.red('Red') + ' Normal ' + Cr.blue('Blue'));
```
<a href="#"><img width="460px" src="/media/example-style-combining.png" alt="Style combining"></a>
<br><br>


#### Chain tags
```js
console.log(Cr.white.bold.underline('White bold underline'));
```
<a href="#"><img width="460px" src="/media/example-chain-tags.png" alt="Chaining tags"></a>
<br><br><br>



