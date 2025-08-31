function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // 1~9 숫자 배열 만들기
  const squares = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <>
      {/* 3개씩 끊어서 줄(row) 만들기 */}
      {[0, 3, 6].map((start) => (
        <div className="board-row" key={start}>
          {squares.slice(start, start + 3).map((num) => (
            <Square value={num} key={num} />
          ))}
        </div>
      ))}
    </>
  );
}