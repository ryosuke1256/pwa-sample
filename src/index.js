if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then((registration) => {
      console.log('登録成功: ', registration);
    })
    .catch((err) => {
      console.log('登録失敗: ', err);
    });
}
