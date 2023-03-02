# TypeScript Event Bus

TypeScript Event Bus is a simple yet powerful event bus for TypeScript applications. It can be used to distribute events and manage event listeners, making it easy to add, remove, and trigger events in your application.

## Features

- Strong typing and compile-time checks
- Easy to add, remove, and trigger events
- Simplifies event-driven code
- Makes your application easier to maintain and read
- Designed specifically for TypeScript applications

## Installation

To install TypeScript Event Bus, use the following command:

```sh
npm install event-bus-ts
```

## Usage

To use TypeScript Event Bus in your TypeScript project, first import the EventBus class:

```ts
import EventBus from '@myorg/simple-event-bus'
```

Then, create a new instance of the EventBus class:

```ts
const eventBus = new EventBus<MyEventData>()
```

You can replace MyEventData with the type of data you want to pass to your event listeners.

To listen for an event, use the on method:

```ts
eventBus.on('my-event', (data: MyEventData) => {
  console.log('My event data:', data)
})
```

To trigger an event, use the emit method:

```ts
eventBus.emit('my-event', { foo: 'bar' })
```

To remove an event listener, use the off method:

```ts
eventBus.off('my-event', myEventListener)
```

To remove all event listeners for a specific event, use the off method with only the event name:

```ts
eventBus.off('my-event')
```

To remove all event listeners for all events, use the offAll method:

```ts
eventBus.offAll()
```

## API

The EventBus class has the following public methods:

- `on(event: string, func: Func<T>): void` - adds an event listener for the specified event
- `emit(event: string, data: T): void` - triggers the specified event with the specified data
- `off(event: string, func?: Func<T>): void`- removes the specified event listener, or all listeners for the specified event if func is not specified
- `once(event: string, func: Func<T>): void`- adds a one-time event listener for the specified event
- `offAll(): void`- removes all event listeners for all events

## License

TypeScript Event Bus is licensed under the MIT license. See the LICENSE file for more information.
