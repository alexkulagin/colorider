'use strict';



//┐  COLOR CONVERTER
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘


	const __converter = Object.create(null);



	//┐  RGB TO ANSI
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		const MULT4 = 0.00392156862745098; // ~ (1 / 255)
		const MULT8 = 0.01960784313725490; // ~ (1 / 255 * 5)


		// ⧆ 16 COLORS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__converter['rgb4'] = (...rgb) =>
			{
				let r = rgb[0] * MULT4, g = rgb[1] * MULT4, b = rgb[2] * MULT4,
					v = Math.round(Math.max(r, g, b) * 2),
					gray = (r === g && g === b) && (r > 0.30 && r < 0.38);

				return (v === 0) ? 30 : 30 + ((v === 2 || gray) ? 60 : 0) + ((Math.round(b) << 2) | (Math.round(g) << 1) | Math.round(r));
			};


		// ⧆ 256 COLORS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__converter['rgb8'] = (...rgb) =>
			{
				let r = rgb[0], g = rgb[1], b = rgb[2];

				return (r === g && g === b) ? (r < 8) ? 16 : (r > 248) ? 231 : Math.round((r - 8) * 0.09716599190283401) + 232 : 16 + (36 * Math.round(r * MULT8)) + (6 * Math.round(g * MULT8)) + Math.round(b * MULT8);
			};


		// ⧆ TRUE COLORS
		// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

			__converter['rgb24'] = (...rgb) => rgb;




//┐  EXPORTS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	module.exports = __converter;



