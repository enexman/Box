export default store => next => action => {
  const { generateId, ...rest } = action;
  if (!generateId) return next(action);

  next({
    ...rest,
    generateId: genId()
  })
}


function genId() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
