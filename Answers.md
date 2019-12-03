1. What problem does the context API help solve?
Answer: It solves having to prop drill in larger scale applications, which can become an issue when you prop drill 5+ components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
Why is the store known as a 'single source of truth' in a redux application?
Answer: Actions are says of altering the State inside of our Reducers. Reducers save our applications state for us and the store is where our application's components will call
 for state their state data. It is known as a single source of truth because it is the one location to find your state for the application, such as API data that you may need for several different
components.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Answer: Application state is held universally over the entire application, and can be passed down to whichever components will need the state data.
Component state is held internally by that paticular component and is can be prop drilled if the application is small enough.
Application state is most beneficial in larger applications where state data may be needed in many different components as to avoid any issues that come with prop drilling into interconnected components.
Component state is most time effective and practical in smaller applications where only a few components will require the state.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Answer: Redux Thunk is middleware that allows us to write action creators that will return a function instead of an action.
It also acts as a way to sync our actions via delays or creating conditions in which actions will only dispatch if said conditions are met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Answer: I have some pros and cons with both so honestly I feel it's too early for me to call a favorite.
While redux does take a lot of set up I can see it's benefits once it's been set up, and Context API just feels easier to use but I feel is not as
well defined as Redux.
