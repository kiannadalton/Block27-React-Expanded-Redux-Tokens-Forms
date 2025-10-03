# Block27-React-Expanded-Redux-Tokens-Forms

This is a collection of various items learned within React, including React Forms, tokens, RTK Query, and more.

## Deployed Workshop Links:

React Forms JWT Sign Up Workshop: https://block27signupworkshop.netlify.app/
React Redux Bank Account Workshop: https://block27reactreduxworkshop.netlify.app/

## Learning Lessons:

The Block 27 Sign Up workshop was relatively easy to work through after reading more about the JWT. No major learning lessons outside of further solidifying the value of props and passing information from one component to another.

In the React Redux Workshop, there were issues with getting the withdrawal reducer to work and getting the Transactions History to show the amount. I utilized console.log to see the structure of these objects. This lead me to discover that withdrawal should be attached to the type 'withdraw'. The amount contained another object with an amount key, so I had to use amount/amount to access that part of the payload.

## Demonstrates use of: React, Redux, Redux Toolkit, Json Web Tokens (JWT), Bearer, onSubmit, onClick, async/await, fetch, useState, useEffect GET, POST, Displaying error messages, spread operator (...), JSON.stringify, .json(), props, if, preventDefault(), useDispatch, configureStore, createSlice, useSelector, nested objects
