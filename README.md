![CI status](https://github.com/glinda93/use-derived-state/actions/workflows/main.yml/badge.svg)

# use-derived-state

Custom React hooks for derived state.

## Why?

Normally React states derived from props does not update when props is changed. Consider the following example:

```jsx
const Person = (props) => {
  const [name, setName] = useState(`Mr. ${props.name}`);

  return <div>Hello {name}</div>;
};
```

State `name` does not update automatically when `props` is changed.

As stated in [this StackOverflow answer](https://stackoverflow.com/a/54626764/11792577):

> `useState` hooks function argument is being used only once and not everytime the prop changes. You must make use of `useEffect` hooks to implement what you would call the `componentWillReceiveProps`/`getDerivedStateFromProps` functionality

## Installation

```
npm i @glinda93/use-derived-state
```

## Usage

```jsx
import { useDerivedState } from "@glinda93/use-derived-state";

const mapper = (propsName) => `Mr. ${propsName}`;

const Person = (props) => {
  const [name, setName] = useDerivedState(props.name, mapper);

  return <div>Hello {name}</div>;
};
```
