import {  useGetPuppiesQuery } from "../../store/api";

/**
  @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
    const { data, error, isLoading } = useGetPuppiesQuery();
    
console.log("data", data);

    if(error){
      console.log("error", error)
    }
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {error && <p>Something went wrong! Please try again.</p>}
        { data?.data && data?.data?.players.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
