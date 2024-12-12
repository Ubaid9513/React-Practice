function Card({ v, getData }) {
  console.log("Props", v);
  return (
    <div>
      <h2>{v}</h2>
      <button onClick={() => {getData("Ubaid Aslam")}}>Send Data</button>
    </div>
  );
}
export default Card;
