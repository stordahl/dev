<script lang="ts">
  /*
  * Things to do
  * - [x] timer mechanism
  * - [x] generate paragraphs
  * - [x] track typing accuracy
  * - [] handle game end state
  * - [x] calculate wpm
  */
  import type { PageData } from './$types'
  import { onMount } from 'svelte'
  import { loopGame, gameState, handleGameStart } from './utils'

  export let data:PageData

  $: paragraphs = data.data;
  let currentIndex = 0

  $: gameHasStarted = $gameState.typedChars.length >= 1 
  $: if(gameHasStarted) loopGame(gameState)
  
  $: doesTextMatch = paragraphs.join().includes($gameState.typedChars)
  
  //$: console.log({ gameHasStarted, state: $gameState})
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap" rel="stylesheet">
</svelte:head>
<div class="container">
<div class="game-data">
  <span><strong>stats</strong></span>
  <hr/>
  <span>timer: {$gameState.timeElapse}</span>
  <span class="game-status">
    accuracy: <span class:correct={doesTextMatch}></span>
  </span>
</div>
<div class="text-wrap">
  <textarea bind:value={$gameState.typedChars} autofocus></textarea>
  <textarea disabled={true} value={paragraphs[currentIndex]}></textarea>
</div>
</div>

<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .game-data {
    width: 125px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 1.2rem;
  }

  .game-status { 
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .game-status > span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ca143b;
  }
  .game-status > span.correct {
      background-color: #34cd34;
  }

  .text-wrap {
    position: relative;
    height: 400px;
    width: 100%;
    max-width: 900px;
    margin: auto;
  }

  textarea,
  textarea:disabled {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: block;
      background-color: transparent;
      color: white;
      font-family: 'Azeret Mono', monospace;
      font-size: 2rem;
      position: absolute;
      border: none;
      resize: none;
    }
  textarea {
    z-index: 2;
  }
  textarea:focus { outline: none; }
  textarea:disabled {
      color: grey;
      z-index: 1;
    }
</style>

