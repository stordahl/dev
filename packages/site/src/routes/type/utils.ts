import { writable, get } from 'svelte/store'
import type { Writable } from 'svelte/store'

export type GameState = {
  typedChars: string,
  typedCharsNum?: number,
  timeElapse: number,
  gameIsRunning?: boolean,
  gameWon?: boolean, 
}

export const gameState = writable<GameState>({
  typedChars: '',
  typedCharsNum: 0,
  timeElapse: 0,
  gameIsRunning: false,
  gameWon: false,
})

export function handleGameStart(event:Event, state:Writable<GameState>) {
  console.log({event, state: get(state)})
  const { typedChars } = get(state)
}

export function loopGame(state:Writable<GameState>) {
  const loop = setInterval(() => {
    const { timeElapse } = get(state);
    console.log(timeElapse)
    state.update((s) => ({...s, gameIsRunning: true, timeElapse: timeElapse + 1  }))
    if(timeElapse >= 60) {
      clearInterval(loop);
      state.update((s) => ({...s, timeElapse: 0, gameIsRunning: false}))
      //console.log('game over!')
    }
  }, 1000)

  return state
}

export function randomSelectFromArray(arr:string[], count:number) {
  let acc = []
  for(let v = 1; v <= count; v++) {
    acc.push(arr[Math.floor(Math.random()*arr.length)])
  }
  return acc
}










