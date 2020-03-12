export const getRequestInfo = (req: any): string =>
  `
  ${Date()}
  - request: ${req.method} ${req.url}
  - body: ${JSON.stringify(req.body, null, 2)},
`;
