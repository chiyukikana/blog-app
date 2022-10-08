# README

[下载源码](https://gh.api.99988866.xyz/https://github.com/chiyukikana/blog/archive/master.zip)

## API 外部调用方式

在资源引用的路径开头带上`~`符号就能引导 Axios 响应拦截器工作。

Axios 响应拦截器会自动为请求到的内容进行替换操作。

### 示例

#### 开发模式

环境变量：`API_URL=/api`

原始地址：`~/featured/main/banner.webp`

实际地址：`/api/features/main/banner.webp`

#### 生产模式

环境变量：`API_URL=http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api`

原始地址：`~/featured/main/banner.webp`

实际地址：`http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api/features/main/banner.webp`

# 最新归档

_none_