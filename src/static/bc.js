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
    var days = [
		{
			name: 'Day 1',
			start: Date.UTC(2017, 10, 3, 18, 00, 0),
			end: Date.UTC(2017, 10, 4, 03, 30, 0),
			panels: [
				{
					name: 'Opening Ceremony',
					start: Date.UTC(2017, 10, 3, 18, 00, 0),
					end: Date.UTC(2017, 10, 3, 19, 00, 0),
					stage: 'Mythic',
					game:''
				},
				{
					name: 'Heroes of the Storm Community Gauntlet',
					start: Date.UTC(2017, 10, 3, 19, 15, 0),
					end: Date.UTC(2017, 10, 3, 20, 15, 0),
					stage: 'Epic',
					game:'hots'
				},				
				{
					name: 'Blizzard Art Live - Drawing and Sculpting',
					start: Date.UTC(2017, 10, 3, 19, 15, 0),
					end: Date.UTC(2017, 10, 3, 20, 15, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'World of Warcraft - What\'s Next',
					start: Date.UTC(2017, 10, 3, 19, 30, 0),
					end: Date.UTC(2017, 10, 3, 20, 30, 0),
					stage: 'Mythic',
					game:'wow'
				},
				{
					name: 'StarCraft II - What\'s Next',
					start: Date.UTC(2017, 10, 3, 19, 30, 0),
					end: Date.UTC(2017, 10, 3, 20, 15, 0),
					stage: 'Legendary',
					game:'sc2'
				},
				{
					name: 'Hearthstone - What\'s Next',
					start: Date.UTC(2017, 10, 3, 20, 45, 0),
					end: Date.UTC(2017, 10, 3, 21, 30, 0),
					stage: 'Mythic',
					game:'hs'
				},
				{
					name: 'Blizzard Social - What\'s Next',
					start: Date.UTC(2017, 10, 3, 20, 30, 0),
					end: Date.UTC(2017, 10, 3, 21, 30, 0),
					stage: 'Legendary',
					game:''
				},
				{
					name: 'Allcraft Live!',
					start: Date.UTC(2017, 10, 3, 20, 45, 0),
					end: Date.UTC(2017, 10, 3, 21, 30, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'LoreCraft - The Art of Storytelling',
					start: Date.UTC(2017, 10, 3, 20, 30, 0),
					end: Date.UTC(2017, 10, 3, 21, 30, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Overwatch -  What\'s Next',
					start: Date.UTC(2017, 10, 3, 21, 45, 0),
					end: Date.UTC(2017, 10, 3, 22, 45, 0),
					stage: 'Mythic',
					game:'ow'
				},
				{
					name: 'Voices of Blizzard - The Powerful Women of Warcraft',
					start: Date.UTC(2017, 10, 3, 21, 45, 0),
					end: Date.UTC(2017, 10, 3, 22, 45, 0),
					stage: 'Legendary',
					game:'wow'
				},
				{
					name: 'Author Showcase - Making Pages Come Alive',
					start: Date.UTC(2017, 10, 3, 22, 00, 0),
					end: Date.UTC(2017, 10, 3, 22, 30, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'Diablo III - Visual Effects of the Necromancer',
					start: Date.UTC(2017, 10, 3, 21, 45, 0),
					end: Date.UTC(2017, 10, 3, 22, 15, 0),
					stage: 'Heroic',
					game:'d3'
				},
				{
					name: 'Blizzard Art Live - In-Game Animation',
					start: Date.UTC(2017, 10, 3, 22, 30, 0),
					end: Date.UTC(2017, 10, 3, 23, 30, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'World of Warcraft - Gameplay and Systems Deep Dive',
					start: Date.UTC(2017, 10, 3, 23, 00, 0),
					end: Date.UTC(2017, 10, 3, 23, 45, 0),
					stage: 'Mythic',
					game:'wow'
				},
				{
					name: 'Connect and Inspire Through Play with Geek & Sundry',
					start: Date.UTC(2017, 10, 3, 23, 00, 0),
					end: Date.UTC(2017, 10, 4, 00, 00, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'Junkertown: The Plan - Creating a New Kind of Overwatch Animation',
					start: Date.UTC(2017, 10, 3, 23, 15, 0),
					end: Date.UTC(2017, 10, 4, 00, 15, 0),
					stage: 'Legendary',
					game:'ow'
				},
				{
					name: 'Heroes of the Storm - What\'s Next',
					start: Date.UTC(2017, 10, 4, 00, 00, 0),
					end: Date.UTC(2017, 10, 4, 00, 45, 0),
					stage: 'Mythic',
					game:'hots'
				},
				{
					name: 'Overwatch Presents: What\'s in the Loot Box?',
					start: Date.UTC(2017, 10, 4, 00, 15, 0),
					end: Date.UTC(2017, 10, 4, 01, 00, 0),
					stage: 'Epic',
					game:'ow'
				},
				{
					name: 'CodeCraft - Under the Hood with Blizzard Engineering, Part 1',
					start: Date.UTC(2017, 10, 4, 00, 00, 0),
					end: Date.UTC(2017, 10, 4, 01, 00, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Community Night',
					start: Date.UTC(2017, 10, 4, 01, 00, 0),
					end: Date.UTC(2017, 10, 4, 03, 30, 0),
					stage: 'Mythic',
					game:''
				}
			]
		},
		{
			name: 'Day 2',
			start: Date.UTC(2017, 10, 4, 17, 00, 0),
			end: Date.UTC(2017, 10, 5, 04, 30, 0),
			panels: [
				{
					name: 'Overwatch - Archives',
					start: Date.UTC(2017, 10, 4, 17, 00, 0),
					end: Date.UTC(2017, 10, 4, 18, 00, 0),
					stage: 'Mythic',
					game:'ow'
				},
				{
					name: 'The Sound of Blizzard Cinematics',
					start: Date.UTC(2017, 10, 4, 17, 00, 0),
					end: Date.UTC(2017, 10, 4, 18, 00, 0),
					stage: 'Legendary',
					game:''
				},
				{
					name: 'Living Blizzard - Pursuing Your Passion',
					start: Date.UTC(2017, 10, 4, 17, 00, 0),
					end: Date.UTC(2017, 10, 4, 18, 00, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'CodeCraft - Under the Hood with Blizzard Engineering, Part 2',
					start: Date.UTC(2017, 10, 4, 17, 00, 0),
					end: Date.UTC(2017, 10, 4, 18, 00, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Behind Blizzard\'s Worlds',
					start: Date.UTC(2017, 10, 4, 18, 30, 0),
					end: Date.UTC(2017, 10, 4, 19, 30, 0),
					stage: 'Mythic',
					game:''
				},
				{
					name: 'StarCraft Remastered - Then and Now',
					start: Date.UTC(2017, 10, 4, 18, 30, 0),
					end: Date.UTC(2017, 10, 4, 19, 15, 0),
					stage: 'Legendary',
					game:'sc2'
				},
				{
					name: 'The Instance Live!',
					start: Date.UTC(2017, 10, 4, 18, 15, 0),
					end: Date.UTC(2017, 10, 4, 19, 15, 0),
					stage: 'Epic',
					game:'wow'
				},
				{
					name: 'DesignCraft - Building Blocks of Level Design',
					start: Date.UTC(2017, 10, 4, 18, 30, 0),
					end: Date.UTC(2017, 10, 4, 19, 30, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Carbot Creates Live!',
					start: Date.UTC(2017, 10, 4, 19, 30, 0),
					end: Date.UTC(2017, 10, 4, 20, 15, 0),
					stage: 'Epic',
					game:'sc2'
				},
				{
					name: 'The Art of World of Warcraft',
					start: Date.UTC(2017, 10, 4, 19, 45, 0),
					end: Date.UTC(2017, 10, 4, 20, 45, 0),
					stage: 'Legendary',
					game:'wow'
				},
				{
					name: 'Heroes of the Storm - Hero Deep Dive',
					start: Date.UTC(2017, 10, 4, 20, 00, 0),
					end: Date.UTC(2017, 10, 4, 21, 00, 0),
					stage: 'Mythic',
					game:'hots'
				},
				{
					name: 'Carbot Creates Live!',
					start: Date.UTC(2017, 10, 4, 20, 15, 0),
					end: Date.UTC(2017, 10, 4, 21, 30, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'Hearthstone - Live Q&A',
					start: Date.UTC(2017, 10, 4, 21, 30, 0),
					end: Date.UTC(2017, 10, 4, 22, 30, 0),
					stage: 'Mythic',
					game:'hs'
				},
				{
					name: 'Voices of Blizzard - United Nations of Overwatch',
					start: Date.UTC(2017, 10, 4, 21, 30, 0),
					end: Date.UTC(2017, 10, 4, 22, 30, 0),
					stage: 'Legendary',
					game:'ow'
				},
				{
					name: 'Exploring Diablo\'s Community',
					start: Date.UTC(2017, 10, 4, 21, 45, 0),
					end: Date.UTC(2017, 10, 4, 22, 15, 0),
					stage: 'Epic',
					game:'d3'
				},
				{
					name: 'SoundCraft - An Interactive Blizzard Sound',
					start: Date.UTC(2017, 10, 4, 21, 30, 0),
					end: Date.UTC(2017, 10, 4, 22, 30, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'CostumeCraft - Cosplay Design & Fabrication',
					start: Date.UTC(2017, 10, 4, 22, 30, 0),
					end: Date.UTC(2017, 10, 4, 23, 15, 0),
					stage: 'Epic',
					game:''
				},
				{
					name: 'World of Warcraft - Battle for Azeroth Q&A',
					start: Date.UTC(2017, 10, 4, 23, 00, 0),
					end: Date.UTC(2017, 10, 5, 00, 00, 0),
					stage: 'Mythic',
					game:'wow'
				},
				{
					name: 'Blizzard Cinematics - Behind the Scenes',
					start: Date.UTC(2017, 10, 4, 23, 00, 0),
					end: Date.UTC(2017, 10, 4, 23, 45, 0),
					stage: 'Legendary',
					game:''
				},
				{
					name: 'Overwatch Streamer Showdown',
					start: Date.UTC(2017, 10, 4, 23, 30, 0),
					end: Date.UTC(2017, 10, 5, 00, 30, 0),
					stage: 'Epic',
					game:'ow'
				},
				{
					name: 'Blizzard Art Live - 3D Art and Digital Painting',
					start: Date.UTC(2017, 10, 4, 23, 00, 0),
					end: Date.UTC(2017, 10, 5, 00, 00, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Inside the Overwatch League',
					start: Date.UTC(2017, 10, 5, 00, 15, 0),
					end: Date.UTC(2017, 10, 5, 01, 15, 0),
					stage: 'Mythic',
					game:'ow'
				},
				{
					name: 'World of Warcraft Boss Design Workshop',
					start: Date.UTC(2017, 10, 5, 00, 30, 0),
					end: Date.UTC(2017, 10, 5, 01, 15, 0),
					stage: 'Legendary',
					game:'wow'
				},
				{
					name: 'Hearthstone: Tavern Trivia',
					start: Date.UTC(2017, 10, 5, 00, 45, 0),
					end: Date.UTC(2017, 10, 5, 01, 30, 0),
					stage: 'Epic',
					game:'hs'
				},
				{
					name: 'Exploring the Wide World of Blizzard Careers',
					start: Date.UTC(2017, 10, 5, 00, 15, 0),
					end: Date.UTC(2017, 10, 5, 01, 15, 0),
					stage: 'Heroic',
					game:''
				},
				{
					name: 'Closing Ceremony',
					start: Date.UTC(2017, 10, 5, 01, 30, 0),
					end: Date.UTC(2017, 10, 5, 04, 30, 0),
					stage: 'Main',
					game:''
				}
			]
		}
	];

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