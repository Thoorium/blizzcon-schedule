Number.prototype.toOrdinal = function () { var n = this % 100; var a = ["th", "st", "nd", "rd", "th"]; var b = n < 21 ? (n < 4 ? a[n] : a[0]) : (n % 10 > 4 ? a[0] : a[n % 10]); return this + b }
String.prototype.leftPad = function (l, c) { return new Array(l - this.length + 1).join(c || '0') + this }
$(function () {
	var weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	var days = [{
		name: 'Day 1',
		start: Date.UTC(2019, 10, 1, 18, 00, 0),
		end: Date.UTC(2019, 10, 2, 04, 00, 0),
		panels: [{
			name: 'Opening Ceremony',
			start: Date.UTC(2019, 10, 1, 18, 00, 0),
			end: Date.UTC(2019, 10, 1, 19, 00, 0),
			stage: 'Mythic',
			game: ''
		}, 
		{
			name: 'Diablo IV: Unveiled',
			start: Date.UTC(2019, 10, 1, 19, 30, 0),
			end: Date.UTC(2019, 10, 1, 20, 15, 0),
			stage: 'Mythic',
			game: 'd3'
		}, 
		{
			name: 'Quarter Century of Warcraft Audio',
			start: Date.UTC(2019, 10, 1, 19, 30, 0),
			end: Date.UTC(2019, 10, 1, 20, 30, 0),
			stage: 'Epic',
			game: 'wow'
		}, 
		{
			name: 'Overwatch: What\'s Next',
			start: Date.UTC(2019, 10, 1, 20, 30, 0),
			end: Date.UTC(2019, 10, 1, 21, 15, 0),
			stage: 'Mythic',
			game: 'ow'
		}, 
		{
			name: 'Life at Blizzard: Career & Culture Insights',
			start: Date.UTC(2019, 10, 1, 20, 0, 0),
			end: Date.UTC(2019, 10, 1, 21, 0, 0),
			stage: 'Epic',
			game: ''
		}, 
		{
			name: 'World of Warcraft: What\'s Next',
			start: Date.UTC(2019, 10, 1, 21, 30, 0),
			end: Date.UTC(2019, 10, 1, 22, 15, 0),
			stage: 'Mythic',
			game: 'wow'
		}, 
		{
			name: 'Heroes of the Storm: Deep Dive',
			start: Date.UTC(2019, 10, 1, 22, 15, 0),
			end: Date.UTC(2019, 10, 1, 23, 00, 0),
			stage: 'Epic',
			game: 'hots'
		}, 
		{
			name: 'Hearthstone: What\'s Next',
			start: Date.UTC(2019, 10, 1, 22, 30, 0),
			end: Date.UTC(2019, 10, 1, 23, 15, 0),
			stage: 'Mythic',
			game: 'hs'
		}, 
		{
			name: 'Blizzard Animation: The Art of Setting the Scene',
			start: Date.UTC(2019, 10, 1, 23, 15, 0),
			end: Date.UTC(2019, 10, 2, 00, 00, 0),
			stage: 'Epic',
			game: ''
		}, 
		{
			name: 'Hearthstone Update',
			start: Date.UTC(2019, 10, 2, 00, 15, 0),
			end: Date.UTC(2019, 10, 2, 01, 00, 0),
			stage: 'Epic',
			game: 'hs'
		}, 
		{
			name: 'Cosplay Exhibition',
			start: Date.UTC(2019, 10, 2, 00, 15, 0),
			end: Date.UTC(2019, 10, 2, 01, 15, 0),
			stage: 'Mythic',
			game: ''
		}, 
		{
			name: 'Community Night',
			start: Date.UTC(2019, 10, 2, 01, 30, 0),
			end: Date.UTC(2019, 10, 2, 03, 30, 0),
			stage: 'Mythic',
			game: ''
		}]
	}, 
	{
		name: 'Day 2',
		start: Date.UTC(2019, 10, 2, 17, 00, 0),
		end: Date.UTC(2019, 10, 4, 04, 30, 0),
		panels: [{
			name: 'Voices of Azeroth: A Hero\'s Journey',
			start: Date.UTC(2019, 10, 2, 17, 00, 0),
			end: Date.UTC(2019, 10, 2, 18, 00, 0),
			stage: 'Mythic',
			game: 'wow'
		}, 
		{
			name: 'Overwatch League 2020: Watchpoint Season Preview',
			start: Date.UTC(2019, 10, 2, 17, 00, 0),
			end: Date.UTC(2019, 10, 2, 18, 00, 0),
			stage: 'Legendary',
			game: 'ow'
		}, 
		{
			name: 'Artists at Work: Diablo IV',
			start: Date.UTC(2019, 10, 2, 17, 30, 0),
			end: Date.UTC(2019, 10, 2, 18, 15, 0),
			stage: 'Epic',
			game: 'd3'
		}, 
		{
			name: 'World of Warcraft: Deep Dive',
			start: Date.UTC(2019, 10, 2, 18, 15, 0),
			end: Date.UTC(2019, 10, 2, 19, 00, 0),
			stage: 'Mythic',
			game: 'wow'
		}, 
		{
			name: 'Artists at Work: Overwatch',
			start: Date.UTC(2019, 10, 2, 19, 00, 0),
			end: Date.UTC(2019, 10, 2, 19, 45, 0),
			stage: 'Epic',
			game: 'ow'
		}, 
		{
			name: 'Diablo IV: Systems & Features',
			start: Date.UTC(2019, 10, 2, 19, 15, 0),
			end: Date.UTC(2019, 10, 2, 20, 00, 0),
			stage: 'Mythic',
			game: 'd3'
		}, 
		{
			name: 'Stay Awhile & Listen',
			start: Date.UTC(2019, 10, 2, 19, 45, 0),
			end: Date.UTC(2019, 10, 2, 20, 45, 0),
			stage: 'Legendary',
			game: ''
		}, 
		{
			name: 'Overwatch: Evolving the Art',
			start: Date.UTC(2019, 10, 2, 20, 15, 0),
			end: Date.UTC(2019, 10, 2, 21, 00, 0),
			stage: 'Mythic',
			game: 'ow'
		}, 
		{
			name: 'Designers at Work: World of Warcraft World Creation',
			start: Date.UTC(2019, 10, 2, 20, 30, 0),
			end: Date.UTC(2019, 10, 2, 21, 30, 0),
			stage: 'Epic',
			game: 'wow'
		}, 
		{
			name: 'World of Warcraft: Q&A',
			start: Date.UTC(2019, 10, 2, 21, 15, 0),
			end: Date.UTC(2019, 10, 2, 22, 00, 0),
			stage: 'Mythic',
			game: 'wow'
		}, 
		{
			name: 'The Writers Room: Building the Worlds of Blizzard',
			start: Date.UTC(2019, 10, 2, 21, 15, 0),
			end: Date.UTC(2019, 10, 2, 22, 00, 0),
			stage: 'Legendary',
			game: ''
		}, 
		{
			name: 'Diablo IV: World & Lore',
			start: Date.UTC(2019, 10, 2, 22, 15, 0),
			end: Date.UTC(2019, 10, 2, 23, 00, 0),
			stage: 'Mythic',
			game: 'd3'
		}, 
		{
			name: 'Warcraft III: Reforged Update',
			start: Date.UTC(2019, 10, 2, 22, 15, 0),
			end: Date.UTC(2019, 10, 2, 23, 00, 0),
			stage: 'Legendary',
			game: 'w3r'
		}, 
		{
			name: 'Artists at Work: World of Warcraft',
			start: Date.UTC(2019, 10, 2, 22, 15, 0),
			end: Date.UTC(2019, 10, 2, 23, 00, 0),
			stage: 'Epic',
			game: 'wow'
		}, 
		{
			name: 'World of Warcraft: Developers\' Tales',
			start: Date.UTC(2019, 10, 2, 23, 15, 0),
			end: Date.UTC(2019, 10, 3, 00, 00, 0),
			stage: 'Mythic',
			game: 'wow'
		}, 
		{
			name: 'The Art of Diablo',
			start: Date.UTC(2019, 10, 2, 23, 15, 0),
			end: Date.UTC(2019, 10, 3, 00, 00, 0),
			stage: 'Legendary',
			game: 'd3'
		}, 
		{
			name: 'Voices of Overwatch',
			start: Date.UTC(2019, 10, 3, 00, 15, 0),
			end: Date.UTC(2019, 10, 3, 01, 15, 0),
			stage: 'Mythic',
			game: 'ow'
		}, 
		{
			name: 'CodeCraft: Exploring Blizzard Engineering',
			start: Date.UTC(2019, 10, 3, 00, 15, 0),
			end: Date.UTC(2019, 10, 3, 01, 15, 0),
			stage: 'Legendary',
			game: ''
		}, 
		{
			name: 'Closing Ceremony',
			start: Date.UTC(2019, 10, 3, 02, 30, 0),
			end: Date.UTC(2019, 10, 3, 04, 00, 0),
			stage: 'Mythic',
			game: ''
		}]
	}];

	var table = $('#bc_panels2');
	function init() {
		for (var day_i = 0; day_i < days.length; day_i++) {
			var day = days[day_i];

			$('<thead>').appendTo(table)
				.append($('<tr class="bc_day">')
					.append(
						$('<th colspan="2">').text(
							'Day ' + (day_i + 1)
						)
					)
					.append(
						$('<th>').text(
							pretty_date(day.start, day.end)
						)
					)
					.append(day.countdown = $('<th>Soon</th>'))
				)
				.append($('<tr>')
					.append($('<th class="bc_stage">Stage</th>'))
					.append($('<th class="bc_panel">Panel Name</th>'))
					.append($('<th class="bc_time">Time</th>'))
					.append($('<th class="bc_countdown">Countdown</th>'))
				);
			var tbody = $('<tbody>').appendTo(table);

			for (var panel_i = 0; panel_i < day.panels.length; panel_i++) {
				var panel = day.panels[panel_i];

				$('<tr class=\'' + panel.game + '\'>').appendTo(tbody)
					.append($('<td class="bc_stage">').text(panel.stage))
					.append($('<td class="bc_panel">').text(panel.name))
					.append($('<td class="bc_time">').text(pretty_date(panel.start, panel.end)))
					.append(panel.countdown = $('<td class="bc_panel">Soon</td>'));
			}
		}
	}

	function countdown_tick() {
		var now = new Date();
		var timestamp = now.getTime() + now.getTimezoneOffset() * 60;

		for (var day_i = 0; day_i < days.length; day_i++) {
			var day = days[day_i];

			if (day.start > timestamp) {
				day.countdown.text(countdown(timestamp, day.start));
			}
			else if (day.end < timestamp) {
				day.countdown.text('Ended');
			}
			else {
				day.countdown.text('In progress');
			}

			for (var panel_i = 0; panel_i < day.panels.length; panel_i++) {
				var panel = day.panels[panel_i];

				if (panel.start > timestamp) {
					panel.countdown.text(countdown(timestamp, panel.start));
				}
				else if (panel.end < timestamp) {
					panel.countdown.text('Ended');
				}
				else {
					panel.countdown.text('In progress');
				}
			}
		}

		var opening_ceremony = days[0].panels[0];
		if(opening_ceremony.start > timestamp)
		{
			var blizzcon_begins = countdown(timestamp, opening_ceremony.start);
			blizzcon_begins = blizzcon_begins.replace(" days", "d").replace(" day", "d")
								.replace(" hours", "h").replace(" hour", "h")
								.replace(" minutes", "m").replace(" minute", "m")
								.replace(" seconds", "s").replace(" second", "s");
			window.document.title = blizzcon_begins + " - Blizzcon 2019";
		}
	}

	function pretty_date(start_ts, end_ts) {
		var start = new Date(start_ts);
		var end = new Date(end_ts);
		var result = '';

		result += format_date(start);
		result += ' at ';
		result += format_time(start);

		if (end > start) {
			result += ' to ';

			if (start.toLocaleDateString() != end.toLocaleDateString()) {
				result += 'the '
				result += end.getDate().toOrdinal();
				result += ' at ';
			}

			result += format_time(end);
		}

		return result;
	}

	function format_date(date) {
		var result = '';

		result += weekdays[date.getDay()];
		result += ', ';
		result += months[date.getMonth()];
		result += ' ';
		result += date.getDate().toOrdinal();

		return result;
	}

	function format_time(date) {
		var result = '';

		result += String(date.getHours()).leftPad(2);
		result += ':';
		result += String(date.getMinutes()).leftPad(2);

		return result;
	}

	function countdown(now, then) {
		var remaining = Math.floor((then - now) / 1000);

		var days = Math.floor(remaining / (60 * 60 * 24));
		remaining %= (60 * 60 * 24);
		var hours = Math.floor(remaining / (60 * 60));
		remaining %= (60 * 60);
		var minutes = Math.floor(remaining / 60);
		remaining %= 60;
		var seconds = remaining;
		var values = new Array();

		if (days > 0) values.push({ unit: "day", value: days });
		if (hours > 0) values.push({ unit: "hour", value: hours });
		if (minutes > 0) values.push({ unit: "minute", value: minutes });
		if ((seconds > 0) && (values.length < 3)) values.push({ unit: "second", value: seconds });

		var result = '';
		var last = values[values.length - 1];

		for (var i = 0; i < values.length - 1; i++) {
			if (result.length > 0) result += ", ";
			result += values[i].value + " " + values[i].unit;
			if (values[i].value > 1) result += "s";
		}

		if (result.length > 0) result += " and ";
		result += last.value + " " + last.unit;
		if (last.value > 1) result += "s";

		return result;
	}

	init();
	countdown_tick();
	window.setInterval(countdown_tick, 1000);
})