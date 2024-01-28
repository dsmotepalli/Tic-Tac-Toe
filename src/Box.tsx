interface IBox {
  val: string;
  idx: number;
  changePlayer: (idx: number) => void;
}
function Box({ val, idx, changePlayer }: IBox) {
  return (
    <button
      className="w-[80px] h-[80px] border-2 border-rose-500
   border-opacity-100 hover:border-opacity-50 cursor-pointer flex justify-center items-center"
      onClick={()=>changePlayer(idx)}
    >
      <div className="text-3xl text-fuchsia-900 font-bold ">{val}</div>
    </button>
  );
}

export default Box;
