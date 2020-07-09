1. css压缩导出  gulp-clean-css
2. js压缩导出   gulp-uglify
    压缩之前必须先babel转换，否则会压缩失败
    babel安装  需要安装  @babel/preset-env   @babel/core 
3. 图片压缩  gulp-imagemin
4. 不需要转的文件输出 图标文件  使用imagemin
5. html压缩输出  
    html中的js和css压缩
6. 本地服务搭建 gulp-connect
7. 监听修改  watch
8. 热更新  connect.reload

9. 开发测试分类
 开发：不需要压缩，只打包js，css，html，图片，本地启动服务，监听
 线上：压缩，打包