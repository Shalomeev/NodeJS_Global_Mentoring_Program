export function hideProtectedFields(protectedFields: any[]) {
  return function() {
    const data = { ...this.get() };
    for (const protectedField of protectedFields) {
      delete data[protectedField];
    }
    return data;
  }
}
