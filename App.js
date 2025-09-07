export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Akalilu Lemma"
            width={70}
            height={70}
            />
        </div>
      </div>
      <div className="card">
      <div className="card-content">
        <h1>About</h1>
        <p>AKlilu Lemma was a distinguished Ethiopian scientists who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}