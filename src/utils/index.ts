function filterNullProps<T>(obj: T): Partial<T> {
  const result = {} as Partial<T>;

  for (const key in obj) {
    if (obj[key] !== null) {
      result[key] = obj[key];
    }
  }
  return result
}

export { filterNullProps };