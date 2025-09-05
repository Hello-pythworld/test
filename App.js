function Item({ name, isPacked}){
  return(
    <li className="item">
      {name} {isPacked&&'✅'}
    </li>
  );
}

export default function PackagingList() {
  return(
    <section>
      <h1>Sally Ride's PackagingList</h1>
      <ul>
        <Item
        isPacked={true}
        name="space suit"
        />
        <Item
        isPacked={true}
        name="Helmet with a golden leaf"
        />
        <Item
        isPacked={false}
        name="Photo of Tam"
        />
        </ul>
    </section>
  );
}