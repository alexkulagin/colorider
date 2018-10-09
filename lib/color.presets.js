'use strict';



//┐  PRESETS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘


	//┐  DEFAULT TAGS
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		const __defaultTags = Object.create(null);


		// ⧆ FOREGROUND COLORS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__defaultTags['color'] =
			{
				// NORMAL
				// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
				black:			[ 30, 39],	// 01
				red:			[ 31, 39],	// 02
				green:			[ 32, 39],	// 03
				yellow:			[ 33, 39],	// 04
				blue:			[ 34, 39],	// 05
				magenta:		[ 35, 39],	// 06
				cyan:			[ 36, 39],	// 07
				light:			[ 37, 39],	// 08

				// LIGHT
				// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
				gray:			[ 90, 39],	// 09
				lightRed:		[ 91, 39],	// 10
				lightGreen:		[ 92, 39],	// 11
				lightYellow:	[ 93, 39],	// 12
				lightBlue:		[ 94, 39],	// 13
				lightMagenta:	[ 95, 39],	// 14
				lightCyan:		[ 96, 39],	// 15
				white:			[ 97, 39]	// 16
			};


		// ⧆ BACKGROUND COLORS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__defaultTags['background'] =
			{
				// NORMAL
				// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
				BLACK:			[ 40, 49],	// 01
				RED:			[ 41, 49],	// 02
				GREEN:			[ 42, 49],	// 03
				YELLOW:			[ 43, 49],	// 04
				BLUE:			[ 44, 49],	// 05
				MAGENTA:		[ 45, 49],	// 06
				CYAN:			[ 46, 49],	// 07
				LIGHT:			[ 47, 49],	// 08

				// LIGHT
				// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
				GRAY:			[100, 49],	// 09
				lightRED:		[101, 49],	// 10
				lightGREEN:		[102, 49],	// 11
				lightYELLOW:	[103, 49],	// 12
				lightBLUE:		[104, 49],	// 13
				lightMAGENTA:	[105, 49],	// 14
				lightCYAN:		[106, 49],	// 15
				WHITE:			[107, 49]	// 16
			};


		// ⧆ FORMAT MODIFIERS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__defaultTags['modifier'] =
			{
				bold:			[  1, 22],	// 01
				dim:			[  2, 22],	// 02
				italic:			[  3, 23],	// 03
				underline:		[  4, 24],	// 04
				blink:			[  5, 25],	// 05
				inverse:		[  7, 27],	// 06
				hidden:			[  8, 28],	// 07
				strikethrough:	[  9, 29]	// 08
			};


		// ⧆ PREPARING
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			const _prepareDefaultTags = (container) =>
			{
				let presets = __defaultTags, group, preset, tag, values;

				for (group in presets)
				{
					preset = presets[group];

					for (tag in preset)
					{
						values = preset[tag];

						Object.defineProperty(container, tag,
						{
							enumerable: true, value: Object.defineProperties(Object.create(null),
							{
								group: { value: group },
								tag: { value: tag },
								open: { value: values[0] },
								close: { value: values[1] }
							})
						});
					}
				}

				return container;
			};




//┐  EXPORTS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	module.exports = () => _prepareDefaultTags(Object.create(null));



