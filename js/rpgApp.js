'use strict';

var rpgApp = angular.module('rpgApp', ['ui.bootstrap', 'ngSanitize']);

/*
 * Configuration
 * These are global configuration for monsters and items
 *
 * Some configuration information is still included in 
 * the respective services.
 */
rpgApp.constant('MonsterConfig', {
	monster: [
		{ name: 'Squirrel', hp: 25 },
		{ name: 'Boar', hp: 30 },
		{ name: 'Rat', hp: 20 },
		{ name: 'Goblin', hp: 40 },
		{ name: 'Orc', hp: 50 },
		{ name: 'Skeleton', hp: 35 },
	],
	prefix: [
		{ name: 'WEAKEST', value: 0.5 },
		{ name: 'WEAK', value: 1 },
		{ name: 'NORMAL', value: 2 },
		{ name: 'STRONG', value: 3 },
		{ name: 'STRONGEST', value: 5 }
	],
	suffix: [
		{ name: '', hpmod: 1 },
		{ name: 'the Tank', hpmod: 2 },
		{ name: 'the Mad', hpmod: 0.8 },
		{ name: 'the Holy', hpmod: 1.5 },
	]
});

rpgApp.constant('ItemConfig', [
	{ type: 'Weapon', items: [
		{ name: 'Sword', dmgmin: 4, dmgmax: 5, buff: [ { name:'HP', value: 5 }, { name:'Strength', value: 1 } ], req: [ { name:'Strength', value:5 } ] , icon: 'sword'}
	]},
	{ type: 'Shield', items: [
		{ name: 'Wooden Shield', armor: 3, buff: [ { name:'HP', value: 5} ], req: [ { name:'Endurance', value:50 } ], icon: 'shield' }
	]},
	{ type: 'Helm', items: [
		{ name: 'Leather Helmet', armor: 1,  buff: [ { name:'HP', value: 5} ], req: [ { name:'Endurance', value:50 } ], icon: 'helm' }
	]},
	{ type: 'Armor', items: [
		{ name: 'Leather Armor', armor: 4, buff: [ { name:'HP', value: 5} ], req: [ { name:'Endurance', value:50 } ], icon: 'armor' }
	]},
	{ type: 'Pants', items: [
		{ name: 'Leather Pants', armor: 2, buff: [ { name:'HP', value: 5} ], req: [ { name:'Endurance', value:50 } ], icon: 'pants' }
	]},
	{ type: 'Shoes', items: [
		{ name: 'Leather Shoes', armor: 1, buff: [ { name:'HP', value: 5} ], req: [ { name:'Endurance', value:50 } ], icon: 'shoes' }
	]},
	{ type: 'Ring', items: [
		{ name: 'Iron Ring', buff: [ { name:'HP', value: 5}, { name:'Strength', value: 1 } ], req: [ { name:'Intelligence', value:5 } ], icon: 'ring' }
	]},
	{ type: 'Necklace', items: [
		{ name: 'Magic Pendant', buff: [ { name:'HP', value: 5}, { name:'Strength', value: 1 } ], req: [ { name:'Wisdom', value:5 } ], icon: 'necklace' }
	]}	
]);

rpgApp.value('RarityConfig', [
	{ name: 'Legendary', prob: 0.005, effect:3 },
	{ name: 'Rare', prob: 0.045, effect:2 },
	{ name: 'Uncommon', prob: 0.25, effect:1 },
	{ name: 'Common', prob: 0.7, effect:0 }
]);