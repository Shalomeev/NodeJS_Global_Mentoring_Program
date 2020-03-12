export function hideProtectedFields(protectedFields: any[]) {
  return function toJson() {
    const data = { ...this.get() };
    for (const protectedField of protectedFields) {
      delete data[protectedField];
    }
    return data;
  };
}
