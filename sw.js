//cacheの名前は任意
const CACHE_NAME = 'static';
//cacheに追加するもののpath
const CachePaths = ['./', './src/stylesheet.css', './images/logo192.png', 'src/index.js'];

//installした時
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      //キャッシュに追加
      return cache.addAll(CachePaths);
    })
  );
});
//fetchしてきた時
self.addEventListener('fetch', (e) => {
  console.log(`fetchリクエスト: ${e.request.url}`);
  e.respondWith(
    //match 正規表現e.requestで文字列を検索し、合致した部分文字列を取得
    //promise.then(success,failure)
    caches.match(e.request).then((response) => {
      console.log(response);
      return response ? response : fetch(e.request);
      // return response || fetch(e.request);
    })
  );
});
