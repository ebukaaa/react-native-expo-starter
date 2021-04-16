export function unmount({ set, value }) {
  return () => set(value);
}
