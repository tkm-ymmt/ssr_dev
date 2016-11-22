# サーバーサイドレンダリング + サブドメイン デモ


## get start

1. `$ yarn install`  
2. hosts 書き換え

```
# /etc/hosts
・
・
・
# 以下追記
127.0.0.1 test.local
127.0.0.1 api.test.local
```
3.  `$ npm run serve`
4. `$ curl http://api.test.local:3000`

