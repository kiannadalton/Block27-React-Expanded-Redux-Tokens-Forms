import { useState } from "react";
import { useAddPuppyMutation, useGetPuppiesQuery } from "../../store/api";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [err, setErr] = useState("");
  const [addPuppy] = useAddPuppyMutation();
  const { data, error, isLoading } = useGetPuppiesQuery();

  // *Completed
  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted

  function postPuppy(event) {
    event.preventDefault();

    try {
      // addPuppy(event)
      addPuppy({
        name,
        breed,
      });
    } catch (err) {
      setErr(err);
    }

    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";

    //resets form
    setName("");
    setBreed("");
  }

  return (
    <>
      <h2 id="addPuppyHeader">Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
