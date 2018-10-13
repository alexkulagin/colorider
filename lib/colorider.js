'use strict';



// IMPORT
// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

	const colorPresets = require('./tags');


// DEBUGGING
// ⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖⏖

	const log = console.log;




//┐  COLORIDER
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	const __ƒ = (function ()
	{


	//┐  OPTIONS
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		let __level = 8,
			__levels = [0, 4, 8, 24],
			__enabled = true;


		const __Options__ = Object.defineProperties(() => {},
		{
			enabled:
			{
				get: () => __enabled
			},

			level:
			{
				get: () => __levels.indexOf(__level),

				set: (n) =>
				{
					let level = __levels[(n >= 0 && n <= 3) ? n : (typeof n !== 'number' || !isFinite(n) || Math.floor(n) !== n || n < 0 ? 0 : 3)];
					__enabled = level > 0;
					__level = level;
				}
			}
		});


	//┐  BASE OBJECTS
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		let __Presets__ = null;



	//┐  INITIALIZING
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		const _initialize = () =>
		{
			let presets = colorPresets(),
				tag;

			__Presets__ = Object.create(null);

			for (tag in presets)
			{
				let preset = presets[tag],
					ƒ = preset.ƒ,
					isF = (ƒ !== undefined),

					style = Object.defineProperties(Object.create(null),
					{
						group: { get: () => preset.group },
						tag: { get: () => preset.tag },
						open: { get: () => preset.open, configurable: isF },
						close: { get: () => preset.close },
					});

				Object.defineProperty(__Presets__, tag,
				{
					get ()
					{
						let self = _coloride([...this.stylesheet]);
							self.stylesheet.push(style);

						if (isF)
						{
							return (...a) =>
							{
								Object.defineProperty(style, 'open', {
									get () { return ƒ.call(null, __level).apply(null, a) }
								});

								return self;
							}
						}

						return self;
					}
				});
			}
		};



	//┐  COLORIDE
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		const _coloride = (sheet) =>
		{
			let ƒ = Object.setPrototypeOf((input) => `\u001B[${sheet.map((a) => a.open).join(';')}m${input}\u001B[${sheet.map((a) => a.close).join(';')}m`, __Presets__);
				ƒ.stylesheet = sheet;

			return ƒ;
		};



	//┐  HIJACK HANDLER
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		const _hijack = (ƒ) => new Proxy(ƒ,
		{
			get (target, key)
			{
				// SET OPTIONS
				if (key in target) {
					return target[key];
				}

				// PARSER
				if (key in __Presets__) {
					return _coloride.call(null, [])[key];
				}

				throw new Error(`method "${key}" not found..`);
			}
		});



	//┐  INSTANCE
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		function Colorider (ƒ)
		{
			_initialize();
			return _hijack(Object.setPrototypeOf(ƒ, __Options__));
		}

		return new Colorider((...a) => _coloride([])(...a));


	})();




//┐  EXPORTS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	module.exports = __ƒ;



