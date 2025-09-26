# Block 27: React Forms - Workshop

In this workshop, you will write controlled React forms that will hit an external API. The API we are using is a small internal [FSA API](https://fsa-jwt-practice.herokuapp.com/) with only two routes, `/signup` and `/authenticate`.

In this workshop, you will pass the `/signup` route, either a username and password which will come from a React form. On success, the API will send back a token, which you can store, then pass to the server to authenticate future requests.

If you are completing this workshop with a partner or team, make sure you switch between the driver and navigator roles!

## Steps

1. [Initialize the App](#initialize-the-app)
2. [Sign Up Component](#sign-up-component)
3. [Authenticate Component](#authenticate-component)
4. [Wrapping Up](#wrapping-up)

### Initialize the App

Use Vite to spin up an application.

1. In your terminal, in the directory of your choice, run `npm create vite@latest`.
2. Follow the prompts to name your project and initialize it with React and Javascript.
3. Follow the prompts to cd into the directory, `npm install` and then open the project in VSCode
4. Navigate to the `App.jsx` component. Remove the boilerplate code and the unused import statements until you have a blank application. You can leave the `App.css` import, as there is some styling we can use.
5. Run `npm run dev` to start the development server and confirm you have a blank page.
6. Initialize the project's git repository by running `git init`.
7. Add and commit all files, `git add .`, `git commit -m 'initial commit'`.
8. Create a new GitHub repository and follow the command prompts for adding an existing project.

### Sign Up Component

1. In your `src` directory, create a `components` folder.
2. In this folder, create two files: `SignUpForm.jsx` and `Authenticate.jsx`.
3. In your `SignUpForm.jsx` file, create a `SignUpForm` component, and ensure it is the default export. For now, you can have it render a simple `h2` with a message saying, "Sign Up".

<details>
    <summary>Show Code</summary>

```js
export default function SignUpForm() {
  return <h2>Sign Up!</h2>;
}
```

</details>

4. In your `Authenitcate.jsx` file, create an `Authenticate` component, and ensure it is the default export. Have it render a simple `h2` with a message saying, "Authenticate".
<details>
    <summary>Show Code</summary>

```js
export default function Authenticate() {
  return <h2>Authenticate!</h2>;
}
```

</details>

5. Import both of these components into your `App.jsx` file, and mount them inside your JSX. If you refresh your browser, you should be able to observe the two components and the corresponding `h2`'s.
<details>
    <summary>Show Code</summary>

```js
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}
```

</details>

Navigate back to your` SignUpForm.jsx` and start on the form logic. Because we are creating a 'controlled' form, we will need to store our form input values in state variables. 6. At the top of your file, import the `useState` hook from React and create three state variables for our form inputs: `username`, `password`, and `error`. Their default values should be `""`, `""` and `null`, respectively.

<details>
    <summary>Show Code</summary>

```js
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
```

</details>

7. Underneath the `h2` we previously wrote, create a `form` element with two inputs and a `button` with the text "submit" nested inside. To keep the application accessible to screen readers, make sure to nest your input tags inside a parent label tag with appropriate text. \* Note: Nesting our inputs in this way helps eliminate the need to write name and for properties on our labels and inputs.
<details>
    <summary>Show Code</summary>

```js
<form>
  <label>
    Username: <input />
  </label>
  <label>
    Password: <input />
  </label>
  <button>Submit</button>
</form>
```

</details>

8. Assign each value property of your input to its corresponding state value. Similarly, pass each `onChange` property to a callback function. These callback functions should be defined to take an `event`, and pass the `event.tagert.value` to the corresponding `useState` setter.
<details>
    <summary>Show Code</summary>

```js
<input value={username} onChange={(e) => setUsername(e.target.value)} />
```

</details>

9. In your component body, and before your return statment, define an async function called `handleSubmit`. Define this function to take an event and call `preventDefault()` on it, to prevent our page refresh. For now, also `console.log` a short message.
<details>
    <summary>Show Code</summary>

```js
async function handleSubmit(event) {
  event.preventDefault();
  console.log("Hello 👋");
}
```

</details>

10. Finally, pass this `handleSubmit` to the opening form tag's `onSubmit` property.
<details>
    <summary>Show Code</summary>

```js
<form onSubmit={handleSubmit}>...
```

</details>

Open your browser's dev console and click on your submit button. You should now be able to observe your log message.

**Fantastic!**

We have our form functionality sorted out. The next step is to take our username and password and pass it along to our API.

To do this, leverage the `fetch()` API. 11. Because the network request could fail, start by writing a `try/catch` block in our `handleSubmit` function. After you `preventDefault` delete your `console.log` and replace it with a try/catch. In your catch block, pass the `error.message` to your `setError` function. This way, we can store a server error in the application state and display it. 12. After your `h2`, open up some { } so you can 'escape' into Javascript. Conditionally render your error message in a `p` tag, based on if the error property in your state is truthy / falsy.

<details>
    <summary>Show Code</summary>

```js
import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
```

</details>

13. To write out a fetch request, move back to the `handleSubmit` function, and call fetch within the try. Pass the following URL as a string as the first argument to fetch: `https://fsa-jwt-practice.herokuapp.com/signup`.
14. Since you are sending information to our API, make sure to send a POST request passing along the username and password state values in the request body.
    - Note: This API is expecting to revive an object containing username and password properties as the body of the request. Remember to reference documentation and other course materials before you check the solution.
15. Store the API response in a variable. Remember to then use the method to parse the response into JS to use in your code. Finally, console.log this result.
<details>
    <summary>Show Code</summary>

```js
const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
const result = await response.json();
console.log(result);
```

</details>

Now all the pieces of our form should be connected. Try it out!

16. Fill out your form with a username and password, hit your submit button, and check the console.
    - What can you observe? Try and describe the shape of the data.

If it all went according to plan, you should see an object with success, message and token properties. What we need from this response is the token.

Remember that the token is what you will use to authenticate future requests to this API. So take a moment to think about what parts of the application need access to this token property.

### Authenticate Component

You have now successfully received a token back from the API. But what do you need to do with it?

You need to pass it to the API, but how and where? The way the app is constructed, you will have to share it from our `SignUpForm` to its `Authenticate` sibling component. This means you need to create some state in the PARENT `App.jsx`, then pass it between both `SignUpForm` and `Authenticate`.

1. Navigate to you `App.jsx` and import the `useState` hook.
2. Next, create `token` and `setToken` variables with `useState`. Set its initial value to `null`.

<details>
    <summary>Show Code</summary>

```js
const [token, setToken] = useState(null);
```

</details>

3. Now, we need to pass these values to each component. Pass the `setToken` function to your `SignUpForm` component, and then pass the token value to your `Authenticate` component. This will allow us to set the token with our API response, and read/send the token back in our `Authenticate` component.

<details>
    <summary>Show Code</summary>

```js
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />

      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
```

</details>

4. Navigate back to your `SignUpForm` component and deconstruct the `setToken` function from props.
5. Now, let us use this function in our `handleSubmit`. Pass the token property of our API response to `setToken`.
   - Whenever we successfully signup, the token sent back from the API is now stored in our application state. Nice work! You can now access it in our `Authenticate` component and to authenticate a request.

<details>
    <summary>Show Code</summary>

```js
setToken(result.token);
```

</details>

6. You already passed in the `token` variable as a prop, so now navigate to your `Authenticate` component and deconstruct it from props. You now have access to the `token` and can pass it along to the `/authenticate` API endpoint.
7. Create a button, which `onClick` sends a request to the API and passes the token in an `Authentication` header. Underneath your `h2` create a button element with text saying "Authenticate Token" or something similar.
   - What do we want this button to do? We want the button to send a GET request to the `/authenticate` endpoint of our API.
8. Before your return statement, write a function called `handleClick`. This function will send a network request, so make sure you define it as an async function.
9. Pass this function to the `onClick` property of your button.
   - Pro-Tip: Add a `console.log` to your handleClick and ensure it fires when the button is clicked.
   - Once you have tested the button, and it is configured correctly, work on the logic of the `handleClick`.
10. Because we are once again making an asynchronous network request, be sure to start with a try/catch.
11. Add an error state to your component. Import the `useState` hook from React, and create `error` and `setError` state variables, initializing its value to `null`.
12. In your catch, pass the `error.message` property to the `setError` function.
13. After your `h2` and before your button, conditionally render the error in a `p` tag if the error is a truthy value.
    - Note: All of this very similar to what we did in the `SignUpForm` component.

<details>
    <summary>Show Code</summary>

```js
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      //
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
```

</details>

Shift back to the logic of the handle click.

14. In the try block, call the fetch API function and pass it two arguments.
_ The API endpoint URL: `https://fsa-jwt-practice.herokuapp.com/authenticate`.
_ The options object only needs two properties: - The method which you should set to "GET". - A headers property, which itself is an object. This headers object needs two properties.
_ The "Content-Type": "application/json"
_ The Authorization header. The Authorization header, as we saw in the introduction of our workshop, needs to contain our token in the following format: Authorization: `Bearer ${token}`
<details>
    <summary>Show Code</summary>

```js
const response = await fetch(
  "https://fsa-jwt-practice.herokuapp.com/authenticate",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
);
```

</details>

15. Now follow the same pattern with fetch. Store the response in a variable, call the `.json()` method on it, and store that in a result variable.
    - A successfully authenticated request will return us an object with three properties, `success`, `message` and `data`. For now, if the request is successful, store the message in a state variable and conditionally render the message.
16. Create `successMessage` and `setSuccessMessage` variables using `useState` and set its initial value to `null`. Just as we did with the error in your JSX, conditionally render the `successMessage` if it is a truthy value.
17. Now, as the last piece of the puzzle, pass the message property of your API result to `setSuccessMessage`.

<details>
    <summary>Show Code</summary>

```js
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
```

</details>

**Try it all out!**

Refresh your browser, go through the process of filling out and submitting the form, then hit your authenticate button. If all goes according to plan, you should be able to observe a nice message displayed to the browser once the token is authenticated.

Try refreshing the browser and hitting the authenticate button without signing up. You should be able to observe your error message displayed on the screen. This is because when we refresh the browser, our state values will be reset, and our token will be lost.

If you have other errors, and something else is not working, here is your chance to work on your React debugging skills. Are you getting an error message in your application? Is any network request failing? Utilize console.log and follow the stack trace.

### Wrapping Up

Now is your chance to customize the application we built.

For the rest of your project, complete the following:

1. Upon a successful request to the /authenticate endpoint, you are given back more information about the logged-in user than we have used. In addition to a message property, the response object will also have a data property. Display the username of your data property somewhere in your application
2. Add CSS styling.
3. Add form validation. Come up with a way to validate your form inputs. For example, your username must be eight characters in length. If it is not, see if you can add some helpful messages to guide your user interaction.

Nice work! You have successfully implemented a controlled form in React.
