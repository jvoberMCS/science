/*
See ./SvelteStateManagementStrategies.md for different ways to manage state in Svelte.
*/
export const gamestate = $state({
    startTime: 0,
    time: 0,
    previousTime: 0,
    timerIsRunning: false,
    paused: false,
    elementList: [],
    currentElementName: 'Press Timer To Start',
    currentElementLocation: 'LEFT',
    locationMode: false,
    selectedElementSetName: 'Selected Element Set',
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
})

