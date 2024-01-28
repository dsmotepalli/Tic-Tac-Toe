import { useState } from "react";
import Box from "./Box";
import winCombos from "./WinCombos";

const intitalArr = Array(9).fill("");

function App() {
  const [Arr, setArr] = useState(intitalArr);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  function changePlayer(idx: number) {
    const updatedArr = [...Arr];
    if (updatedArr[idx].length > 0) return;
    updatedArr[idx] = player;
   
    setArr(updatedArr);
    const val = checkWinner(updatedArr);
    if (val) {
      alert(`${player} is the winner`);
      reset();
      return;
    }
    setPlayer((p) => {
      if (p === "X") return "O";
      return "X";
    });
  }
  function checkWinner(Arr: string[]): boolean {
    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];

      if (
        Arr[a] &&
        Arr[b] &&
        Arr[c] &&
        Arr[a] === Arr[b] &&
        Arr[a] === Arr[c]
      ) {
        return true;
      }
    }
    return false;
  }

  function reset() {
    setArr(intitalArr);
    setPlayer("X");
    setWinner("");
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 ">
        <div className="text-5xl font-bold text-cyan-700">Tic Tac Toe</div>
        <div className="text-3xl text-fuchsia-700 font-bold">
          {winner ? winner + " is the winner" : player + "'s Turn"}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Arr.map((val, idx) => {
            return (
              <Box val={val} idx={idx} key={idx} changePlayer={changePlayer} />
            );
          })}
        </div>
        <button
          className="border-2 border-red-700 w-[80px] rounded-lg bg-fuchsia-600 font-bold text-black text-lg"
          onClick={() => reset()}
        >
          RESET
        </button>
        <div className="absolute bottom-3 font-mono">
          Made by <a href="https://github.com/dsmotepalli" target="_blank" className="opacity-80 underline">Deepak</a>
        </div>
      </div>
    </>
  );
}

export default App;
