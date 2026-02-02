<script>

	import {onMount} from 'svelte'
    import {elementInfo as elements} from '../../components/PeriodicTable/ElementInfo.svelte' 
    import {elementSets} from '../../components/PeriodicTablePractice/ElementSets.svelte' 
    import {gamestate} from '../../state/periodicTablePracticeState.svelte'
    import HStack from '../../lib/components/ui/hstack/HStack.svelte'
    import Center from '../../lib/components/ui/center/Center.svelte'
    
    import { Spinner } from "flowbite-svelte";


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

	const restartRound = () => {
		// Determine which element list is current
	
		console.log('Restarting round')
		setElementSet()
	
		gamestate.elementList = createElementList(gamestate.elementList)
		let newElement = getNewElement(gamestate.elementList)
		gamestate.currentElementName = newElement.name
		gamestate.currentElementLocation = newElement.location
		gamestate.elementList = getUpdatedElementList(
			gamestate.currentElementName,
			gamestate.elementList
		)
		gamestate.paused = false
		gamestate.startTime = Date.now()
	}

	const handleTimerClick = () => {
		if (gamestate.timerIsRunning == true && gamestate.elementList.length > 0) {
			console.log('Pausing')
			gamestate.paused = true
			gamestate.timerIsRunning = false
			gamestate.timerButtonText = "Paused"
		} else if (gamestate.paused == true) {
			console.log('Resuming')
			gamestate.paused = false
			gamestate.timerIsRunning = true
			gamestate.timerButtonText = gamestate.currentElementName
		} else {
			// Start a new round instead of pausing
			console.log('Starting a new round')
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
			// Calc time stuff and update
			let previous = gamestate.previousFrameTime
            let current = Date.now()
            let delta = current - previous
            gamestate.totalRoundTime = gamestate.timerIsRunning ? gamestate.totalRoundTime + delta : gamestate.totalRoundTime
            gamestate.previousFrameTime = current


            // Update the ... animation loop
            switch(gamestate.waitingDotsCounter >= 30){
                case true:
                    gamestate.waitingDots >= 3 ? gamestate.waitingDots = 0 : gamestate.waitingDots++
                    gamestate.waitingDotsCounter = 0
                default: 
                    gamestate.waitingDotsCounter++ 

            }

			// Clear canvas and draw new frame elements (if necessary)
			ctx.clearRect(0,0,canvas.width,canvas.height)

			// Loop
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


<Center>
    <HStack class='buttonContainer'>
        <button 
            class="timer-btn" 
            onclick={() => {handleTimerClick()}}
        >
            {gamestate.timerIsRunning == true ? (gamestate.totalRoundTime / 1000).toFixed(2) : gamestate.paused == true ? "Paused" : "Start"}
        </button>
        <div 
            class="currentElementDisplay" 
        >
            {#if gamestate.timerIsRunning == false && gamestate.paused == false}
                <Spinner />
            {:else}
                {gamestate.timerIsRunning == true ? gamestate.currentElementName : gamestate.paused == true ? "🤐" : null}
            {/if}
        </div>
        <button 
            class="restart-btn" 
            onclick={() => {restartRound()}}
        >
        	Restart
        </button>
    </HStack>

</Center>

<Center><HStack>
    <select bind:value={gamestate.selectedElementSetName}>
      <option value={gamestate.selectedElementSetName} disabled selected hidden>{gamestate.selectedElementSetName}</option>
      <option value="First 10 Elements">First 10 Elements</option>
      <option value="First 18 Elements">First 18 Elements</option>
      <option value="First 36 Elements">First 36 Elements</option>
      <option value="First 54 Elements">First 54 Elements</option>
      <option value="Most Common Elements">Most Common Elements</option>
      <option value="All Elements">All Elements</option>
    </select>
</HStack></Center>

<Center><HStack>
    <div>Location Mode: {gamestate.locationMode}</div>
    <div>Location: {gamestate.currentElementLocation}</div>
</HStack></Center>

<Center>
    <div class='periodic-table'>
        {#each elements as element}
            <div class='element-square' style:width='5vw'>{element.name}</div>
        {/each}
    </div>
</Center>

<canvas bind:this={canvas} style="display:block; width: 100%; height: 100vh; position: absolute; top:0; left:0; z-index: 0; pointer-events: none;"></canvas>

<style>
    .currentElementDisplay {
        z-index: 10; /* Above canvas */

        width: 12.5vw;
        height: 10vh;

        background-color: brown;
        border: none;

        color: white;

        font-size: 6vh; 
        font-family: sans-serif;
        
        /* Center text */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .timer-btn {
        z-index: 10; /* Above canvas */

        width: 12.5vw;
        height: 10vh;

        background-color: blue;
        border: none;
        cursor: pointer;

        color: white;

        font-size: 6vh; 
        font-family: sans-serif;
        
        /* Center text */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .restart-btn {
        z-index: 10; /* Above canvas */

        width: 12.5vw;
        height: 10vh;

        background-color: forestGreen;
        border: none;
        cursor: pointer;

        color: white;

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

    .buttonContainer {
        margin-top: 2vh;
    }
    .periodic-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        color: red;
        width: 95vw;
        border: 1px solid yellow;
    }

    .element-square {
        border: 1px solid blue
    }
</style>
