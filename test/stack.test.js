import { Stack } from '../main';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('should elements be empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should return the size of the elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
  });

  it('should contain the pushed elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.elements).toContain(2);
    expect(stack.elements).toHaveLength(3);
  });

  it('should remove the element', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(5);

    stack.pop();
    stack.pop();

    expect(stack.elements).toContain(2);
    expect(stack.elements).toHaveLength(2);
  });
});
