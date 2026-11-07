import { describe, it, expect } from 'vitest';
import useFetch from './useFetch';

describe('useFetch works', () => {
  const testVar = useFetch();
  it('useFetch returns true', () => {
    expect(testVar).toBe(true);
  });
});
