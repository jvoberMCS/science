<script>

	import {onMount} from 'svelte'
    import {elementInfo as elements} from '../../components/PeriodicTable/ElementInfo.svelte' 
    import {elementSets} from '../../components/PeriodicTablePractice/ElementSets.svelte' 
    import {gamestate} from '../../state/periodicTablePracticeState.svelte'

	let canvas;
	let ctx;
	let frameId;

	let width = 0;
	let height = 0;
	let t = 0;

	const lightPurple = '#D400FF' //light purple
	const lightYellow = '#D4FF00' // light yellow
	const lightBlue = '#E6FBFF' // alt light blue
	const lightRed = '#e82323'
	const lightBrown = '#6d6e3a'
	const deselectedGray = '#3c484b'
	
	let elementClickables = []
	let blankElementClickables = []
	let selectedSet = 'First 18 Elements'

	const options = [
		'First 10 Elements',
    	'First 18 Elements', 
    	'First 36 Elements', 
    	'First 54 Elements', 
    	'Most Common Elements', 
    	'All Elements'
	]

	let timerButtonText = 'Start';

	const roundTwoPlaces = (number) => {
		return Math.round(number * 100) / 100
	}

	const setElementSet = () => {
		switch (gamestate.selectedElementSetName) {
			case 'First 10 Elements':
				gamestate.elementList = elementSets.elementSetFirst10
				gamestate.selectedElementSetElements = elementSets.elementSetFirst10
				break
			case 'First 18 Elements':
				gamestate.elementList = elementSets.elementSetFirst18
				gamestate.selectedElementSetElements = elementSets.elementSetFirst18
				break
			case 'First 36 Elements':
				gamestate.elementList = elementSets.elementSetFirst36
				gamestate.selectedElementSetElements = elementSets.elementSetFirst36
				break
			case 'First 54 Elements':
				gamestate.elementList = elementSets.elementSetFirst54
				gamestate.selectedElementSetElements = elementSets.elementSetFirst54
				break
			case 'Common Elements':
				gamestate.elementList = elementSets.elementSetCommonElements
				gamestate.selectedElementSetElements = elementSets.elementSetCommonElements
				break
			case 'All Elements':
				gamestate.elementList = elementSets.elementSetAll
				gamestate.selectedElementSetElements = elementSets.elementSetAll
				break
			default:
				gamestate.elementList = elementSets.elementSetCommonElements
				gamestate.selectedElementSetElements = elementSets.elementSetCommonElements
		}
	}

	const shuffleArr = (a) => {
		return a.sort(() => Math.random() - 0.5)
	}

	const getRandNumRange = (min, max) => {
		return Math.round(Math.random() * (max - min) + min)
	}

	const createElementList = (elementSet) => {
		let newSet = elements.filter((e) => elementSet.includes(e.symbol))
		newSet = shuffleArr(newSet).slice(0, 6)
		return newSet
	}

	let getNewElement = (elList) => {
		// Establish what the new element will be
	
		return elList.length !== 0
			? // ? elList[getRandNumRange(0, elList.length - 1)].name
				elList[getRandNumRange(0, elList.length - 1)]
			: 'Done'
	}

	const getUpdatedElementList = (newElementName, oldList) => {
		return oldList.filter((el) => el.name !== newElementName)
	}


	const startRound = () => {
		// Determine which element list is current
	
		console.log('Starting a new round')
		setElementSet()
	
		gamestate.elementList = createElementList(gamestate.elementList)
		let newElement = getNewElement(gamestate.elementList)
		gamestate.currentElementName = newElement.name
		gamestate.currentElementLocation = newElement.location
		gamestate.elementList = getUpdatedElementList(
			gamestate.currentElementName,
			gamestate.elementList
		)
		gamestate.startTime = Date.now()
	}


	const handleTimerClick = () => {
		console.log('Timer Clicked')
		gamestate.time++
		if (gamestate.timerIsRunning == true && gamestate.elementList.length > 0) {
			gamestate.paused = true
			gamestate.timerIsRunning = false
		} else if (gamestate.paused == true) {
			gamestate.paused = false
			gamestate.timerIsRunning = true
		} else {
			// Start a new round instead of pausing
			gamestate.previousTime = gamestate.time
			startRound()
			gamestate.timerIsRunning = true
		}

	}

	const handleElementSetDropdownChange = (selection) => {
		gamestate.selectedElementSetName = selection
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
			// 1. Handle Resizing (Responsive Canvas)
    	const resizeObserver = new ResizeObserver((entries) => {
    	  for (const entry of entries) {
    	    // Get the CSS width/height of the canvas container
    	    const { width: cssWidth, height: cssHeight } = entry.contentRect;
    	    
    	    // Handle High DPI (Retina) displays for crisp rendering
    	    const dpr = window.devicePixelRatio || 1;
    	    canvas.width = cssWidth * dpr;
    	    canvas.height = cssHeight * dpr;
    	    
    	    // Scale the context so you can draw using CSS logic (0 to width)
    	    ctx.scale(dpr, dpr);
    	    
    	    // Update state
    	    width = cssWidth;
    	    height = cssHeight;
    	  }
    	});

    	resizeObserver.observe(canvas);

		const render = () => {
    	    const width = canvas.width = window.innerWidth;
    	    const height = canvas.height = window.innerHeight;

    	    frameId = requestAnimationFrame(render);
    	};

    	// Start loop
    	render();

    	// Cleanup when component is destroyed (stop the loop)
    	return () => {
			cancelAnimationFrame(frameId);
			resizeObserver.disconnect();
    	};
  }); // End of onMount
</script>


<button 
    class="timer-btn" 
    onclick={() => {handleTimerClick()}}
>
    {timerButtonText}
</button>
<select style="position: absolute; top: 50vh; right: 50vw;" bind:value={gamestate.selectedElementSetName}>
  <option value="" disabled selected hidden>{gamestate.selectedElementSetName}</option>
  <option value="First 10 Elements">First 10 Elements</option>
  <option value="First 18 Elements">First 18 Elements</option>
  <option value="First 36 Elements">First 36 Elements</option>
  <option value="First 54 Elements">First 54 Elements</option>
  <option value="Most Common Elements">Most Common Elements</option>
  <option value="All Elements">All Elements</option>
</select>
<div>{gamestate.time}</div>
<div>{gamestate.elementList[0].name},{gamestate.elementList[1].name},{gamestate.elementList[2].name},{gamestate.elementList[3].name},{gamestate.elementList[4].name}</div>
<canvas bind:this={canvas} style="display:block; width: 100%; height: 100vh; position: absolute; top:0; left:0; z-index: 0; pointer-events: none;"></canvas>

<style>
    /* Styling to match p5 ".locate()" and ".resize()" */
    .timer-btn {
        position: absolute;
        z-index: 10; /* Above canvas */
        
        /* timer.locate(window.innerWidth * 0.37, window.innerHeight * 0.24) */
        left: 37vw;
        top: 24vh;

        /* timer.resize(window.innerWidth * 0.125, window.innerHeight / 10) */
        width: 12.5vw;
        height: 10vh;

        /* timer.color = 'blue' */
        background-color: blue;
        border: none;
        cursor: pointer;

        /* timer.textColor = 'white' */
        color: white;

        /* timer.textSize = window.innerHeight / 16 */
        font-size: 6vh; 
        font-family: sans-serif;
        
        /* Center text */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .timer-btn:active {
        transform: scale(0.98); /* Little click effect */
    }
</style>
