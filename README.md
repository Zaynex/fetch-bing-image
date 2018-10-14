# 利用 Puppeteer 抓取 Bing 背景图
给朋友做的抓取 bing 背景图的小功能。

## 启动
```
node index.js
```

## 注意事项
虽然可能在自己的电脑上能 Work，但很有可能部署的服务器会缺乏一些库。
```
cd node_modules/puppeteer/.local-chromium/linux-594312/chrome-linux/
ldd chrome | grep not
```

检测当前缺失的依赖包，然后通过查找相应的资源安装即可。

### 推荐参考资源
https://medium.com/mockingbot/run-puppeteer-chrome-headless-on-ec2-amazon-linux-ami-6c9c6a17bee6

### 踩坑提示（仅限于腾讯云Centos)
如果你也遇到这个资源包的问题
```
libpng12.so.0 => not found
```

```
sudo rpm -ivh --nodeps https://rpmfind.net/linux/centos/7.5.1804/os/x86_64/Packages/libpng12-1.2.50-10.el7.x86_64.rpm
```