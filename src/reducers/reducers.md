# Reducers

**Reducers** specify how the application's state changes in response to actions sent to the store. Remember that actions only describe _what happened_, but don't describe how the application's state changes.

In Redux, all of the application state is stored as a single object. You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.

Reducers have the following signature:

```
(previousState, action) => newState
```

## Note on Relationships

In a more complex app, you're going to want different entities to reference each other. We suggest that you keep your state as normalized as possible, without any nesting. Keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists. Think of the app's state as a database.

Reference: https://github.com/paularmstrong/normalizr
