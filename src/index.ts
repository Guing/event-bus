type Func<T> = (data: T) => void;
class EventBus<T> {
  private events: Record<string, Func<T>[]> = {};

  on(event: string, func: Func<T>) {
    if (!Array.isArray(this.events[event])) {
      this.events[event] = [];
    }
    this.events[event].push(func);
  }

  emit(event: string, data: T) {
    if (this.events[event]?.length !== 0) {
      this.events[event].forEach((func) => func.call(this, data));
    }
  }

  off(event: string, func: Func<T> | undefined) {
    if (func) {
      const arr = this.events[event];
      if (arr) {
        this.events[event] = arr.filter((listener) => listener !== func);
      }
    } else if (event) {
      delete this.events[event];
    }
  }

  once(event: string, func: Func<T>) {
    const wrapper = (data: T) => {
      this.off(event, wrapper);
      func.call(this, data);
    };
    this.on(event, wrapper);
  }

  offAll() {
    this.events = {};
  }
}

export default EventBus;
