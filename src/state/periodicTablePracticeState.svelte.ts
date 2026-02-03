/*
See ./SvelteStateManagementStrategies.md for different ways to manage state in Svelte.
*/
export const gamestate = $state({
	previousFrameTime: 0,
	currentTime: 0,
	totalRoundTime: 0,
	previousRoundTime: 0,
	timerIsRunning: false,
	timerButtonText: "Start" as string | null,
	paused: false,
	elementList: [] as any[],
	currentElementName: null,
	currentElementLocation: 'LEFT',
	locationMode: false,
	selectedElementSetName: 'First 18 Elements',
	selectedElementSetElements: [
		'H',
		'He',
		'Li',
		'Be',
		'B',
		'C',
		'N',
		'O',
		'F',
		'Ne',
		'Na',
		'Mg',
		'Al',
		'Si',
		'P',
		'S',
		'Cl',
		'Ar',
	],
	hoveredElementName: ''
})

