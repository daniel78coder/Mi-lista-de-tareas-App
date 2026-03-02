# React Best Practices

## Component Structure

### Functional Components
- Always use functional components with hooks instead of class components
- Use arrow functions for component definitions
- Keep components small and focused on a single responsibility

```tsx
// ✅ Good
export function UserProfile({ user }: UserProfileProps) {
  return <div>{user.name}</div>;
}

// ❌ Avoid
class UserProfile extends React.Component { ... }
```

### Component Organization
```
ComponentName/
  ├── ComponentName.tsx      # Main component
  ├── ComponentName.test.tsx # Tests
  ├── ComponentName.css      # Styles (if not using CSS-in-JS)
  └── index.ts               # Re-export
```

## Naming Conventions

### Components
- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Prefix custom hooks with "use"

```tsx
// ✅ Good
function UserProfileCard() { }
function useUserData() { }

// ❌ Avoid
function userprofile() { }
function getUserData() { }
```

### Props and State
- Use camelCase for props and state variables
- Use descriptive names
- Prefix boolean props with "is", "has", "should"

```tsx
// ✅ Good
interface ButtonProps {
  isDisabled: boolean;
  hasIcon: boolean;
  onClick: () => void;
}

// ❌ Avoid
interface ButtonProps {
  disabled: boolean;
  icon: boolean;
  click: () => void;
}
```

## Hooks Best Practices

### useState
- Initialize state with the correct type
- Use functional updates when new state depends on previous state
- Split state into multiple variables instead of one complex object

```tsx
// ✅ Good
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
setCount(prev => prev + 1);

// ❌ Avoid
const [state, setState] = useState({ count: 0, user: null, loading: false });
setCount(count + 1); // May cause stale closure issues
```

### useEffect
- Keep effects focused on a single concern
- Always include all dependencies in the dependency array
- Clean up side effects (subscriptions, timers, etc.)

```tsx
// ✅ Good
useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

// ❌ Avoid
useEffect(() => {
  // Multiple unrelated side effects
  fetchUser();
  setupWebSocket();
  startTimer();
}); // Missing dependency array
```

### Custom Hooks
- Extract reusable logic into custom hooks
- Prefix with "use"
- Return values in a consistent format (array or object)

```tsx
// ✅ Good
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

## Props and TypeScript

### Props Interface
- Always define TypeScript interfaces for props
- Use descriptive interface names ending with "Props"
- Make optional props explicit with `?`

```tsx
// ✅ Good
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}

function UserCard({ user, onEdit, className }: UserCardProps) {
  // ...
}
```

### Props Destructuring
- Destructure props in function parameters
- Provide default values for optional props

```tsx
// ✅ Good
function Button({ 
  children, 
  variant = 'primary',
  isDisabled = false 
}: ButtonProps) {
  // ...
}

// ❌ Avoid
function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}
```

## State Management

### Local State
- Use `useState` for component-local state
- Keep state as close to where it's used as possible
- Lift state up only when necessary

### Derived State
- Avoid storing derived values in state
- Calculate derived values during render

```tsx
// ✅ Good
function TodoList({ todos }: TodoListProps) {
  const completedCount = todos.filter(t => t.completed).length;
  return <div>Completed: {completedCount}</div>;
}

// ❌ Avoid
function TodoList({ todos }: TodoListProps) {
  const [completedCount, setCompletedCount] = useState(0);
  
  useEffect(() => {
    setCompletedCount(todos.filter(t => t.completed).length);
  }, [todos]);
  
  return <div>Completed: {completedCount}</div>;
}
```

## Performance Optimization

### Memoization
- Use `useMemo` for expensive calculations
- Use `useCallback` for functions passed as props to memoized components
- Use `React.memo` for components that render often with same props

```tsx
// ✅ Good
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

export const MemoizedComponent = React.memo(Component);
```

### Avoid Inline Functions and Objects
- Don't create new functions/objects in render unless necessary
- Extract to variables or use useCallback/useMemo

```tsx
// ✅ Good
const style = { color: 'red' };
function Component() {
  return <div style={style}>Text</div>;
}

// ❌ Avoid
function Component() {
  return <div style={{ color: 'red' }}>Text</div>;
}
```

## Conditional Rendering

### Use Logical AND for Simple Conditions
```tsx
// ✅ Good
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}

// ❌ Avoid
{isLoading ? <Spinner /> : null}
```

### Use Ternary for If-Else
```tsx
// ✅ Good
{isLoggedIn ? <Dashboard /> : <Login />}

// ❌ Avoid
{isLoggedIn && <Dashboard />}
{!isLoggedIn && <Login />}
```

## Lists and Keys

### Always Use Unique Keys
- Use stable, unique IDs as keys
- Never use array index as key if list can change

```tsx
// ✅ Good
{todos.map(todo => (
  <TodoItem key={todo.id} todo={todo} />
))}

// ❌ Avoid
{todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
))}
```

## Event Handlers

### Naming Convention
- Prefix with "handle" for handler functions
- Prefix with "on" for props that receive handlers

```tsx
// ✅ Good
interface ButtonProps {
  onClick: () => void;
  onSubmit: (data: FormData) => void;
}

function Form({ onSubmit }: FormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Error Handling

### Use Error Boundaries
- Wrap components that might error in Error Boundaries
- Provide fallback UI

### Handle Async Errors
```tsx
// ✅ Good
const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  fetchData()
    .catch(err => setError(err));
}, []);

if (error) return <ErrorMessage error={error} />;
```

## Accessibility

### Semantic HTML
- Use semantic HTML elements
- Add ARIA labels when necessary

```tsx
// ✅ Good
<button onClick={handleClick} aria-label="Close dialog">
  <CloseIcon />
</button>

<nav aria-label="Main navigation">
  <ul>...</ul>
</nav>
```

### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Use proper focus management

## File Organization

### Import Order
1. External libraries (React, third-party)
2. Internal modules (components, utils)
3. Types/Interfaces
4. Styles

```tsx
// ✅ Good
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { formatDate } from '@/utils/date';

import type { User } from '@/types';

import styles from './Component.module.css';
```

## Testing Considerations

### Write Testable Components
- Keep components pure when possible
- Extract business logic to separate functions
- Use dependency injection for external dependencies

```tsx
// ✅ Good - Easy to test
export function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

export function Cart({ items }: CartProps) {
  const total = calculateTotal(items);
  return <div>Total: ${total}</div>;
}
```

## Common Pitfalls to Avoid

### Don't Mutate State Directly
```tsx
// ❌ Avoid
const [items, setItems] = useState([]);
items.push(newItem); // Mutation!
setItems(items);

// ✅ Good
setItems([...items, newItem]);
```

### Don't Call Hooks Conditionally
```tsx
// ❌ Avoid
if (condition) {
  const [state, setState] = useState(0);
}

// ✅ Good
const [state, setState] = useState(0);
if (condition) {
  // use state
}
```

### Don't Forget Cleanup
```tsx
// ❌ Avoid
useEffect(() => {
  const subscription = subscribe();
}, []);

// ✅ Good
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);
```

## Summary

- Use functional components with hooks
- Follow consistent naming conventions
- Keep components small and focused
- Use TypeScript for type safety
- Optimize performance when needed
- Write accessible, semantic HTML
- Handle errors gracefully
- Keep code testable and maintainable

