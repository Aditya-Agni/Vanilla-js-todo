# Vanilla JavaScript To-Do App

A To-Do application built using **pure JavaScript** with the explicit goal of strengthening core frontend foundations — especially **DOM manipulation, event handling, and state persistence** — without relying on frameworks.

--- Live Demo: https://aditya-agni.github.io/Vanilla-js-todo/

## Why this project exists

Many UI interactions in this app (toggling styles, updating text, showing/hiding elements) *could* have been achieved using **CSS-only techniques**.

This project **intentionally uses JavaScript instead**, to deeply understand:

- How the DOM is created, updated, and destroyed
- How user actions flow through events
- How UI changes are driven by **application logic**, not just styling
- How real applications manage **state** and **persistence**

This makes the project a **learning artifact**, not just a visual demo.

---

## Features

- Add tasks using **button click or Enter key**
- Toggle task completion using JavaScript-driven class changes
- Delete individual tasks using event delegation
- Clear all tasks with confirmation
- Persistent storage using **localStorage**
- Single event listener for dynamic elements

---

## JavaScript over CSS (Intentional Design Choice)

Several behaviors in this app are handled via JavaScript even though CSS alone could have been used:

- Task completion is toggled via JavaScript logic instead of checkbox hacks
- UI state (completed / not completed) is controlled through JS, not pseudo-classes
- DOM elements are dynamically created and removed rather than hidden/shown via CSS

This decision was made to:
- Practice real DOM APIs (`createElement`, `appendChild`, `remove`)
- Understand event bubbling and delegation
- Treat the DOM as a **rendered view**, not the source of truth

---

## State Management & localStorage

The application maintains a central `tasks` array representing the **true state** of the app.

Each task is stored as an object:

```js
{
  id: Number,
  text: String,
  completed: Boolean
}
