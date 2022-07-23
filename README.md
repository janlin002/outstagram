# OUTSTAGRAM

## 專案歷程

[Link](https://github.com/janlin002/outstagram/blob/master/client/projectPlanning.md)

## 使用技術(套件)

## 前端

- Webpack
- React
- React-router
- Bootstrap
- React-icons
- React-loading-skeleton (刪除) => react-loading-icons
- React-slick
- React-Modal (刪除)
- Redux-logger (在 console 內看 redux)
- Sweetalert2
- Formik && Yup (驗證)

## 後端

- node
- express
- mongoDB

## 基礎功能簡介(畫面展示)

進入頁面輸入使用者名稱

![login-page](./client/src/assets/image/README/%E6%88%AA%E5%9C%96%202022-07-22%20%E4%B8%8B%E5%8D%881.18.18.png)

如果沒有的話，可以新增一筆

![new-user](./client/src/assets/image/README/%E6%88%AA%E5%9C%96%202022-07-22%20%E4%B8%8B%E5%8D%881.23.28.png)

進入主要畫面會有所有使用者的貼文，如果有想留言的部分，可以在貼文的留言區，寫下自己的想法

![comment]()

點擊十字按鈕，可以新增貼文，貼文可使用連結或是自己電腦裡面的圖片(使用 radio 做切換)

![add-post]()

如果想更改使用者基本資料，也可以點擊設定頁

![user-setting]

可手動刪除使用者，會將這位使用者永久刪除，包含他的基本資料跟他的貼文

![delete-user]()

點擊頭像 icon，可以看到這位使用者的所有貼文

![user-info]()
