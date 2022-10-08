# Getting Started

## 下载项目

使用 Git 下载：

```shell
git clone https://github.com/chiyukikana/blog.git
```

或直接点击[此处下载](https://gh.api.99988866.xyz/https://github.com/chiyukikana/blog/archive/master.zip)最新版本。

## 环境配置

安装包管理器(版本要求>=14) [Node.js](https://nodejs.org/zh-cn/)，推荐使用 LTS 的版本。

本项目基于`yarn`包管理器，所以要先安装`yarn`，使用`yarn -v`命令来查看是否已经安装成功。

```shell
npm -g install yarn
```

安装项目依赖：

```shell
yarn install
```

## 运行项目

开发模式预览：

```shell
yarn dev
```

构建：

```shell
yarn build
```

## API 外部调用方式

在资源引用的路径开头带上`~`符号就能引导 Axios 响应拦截器工作。

Axios 响应拦截器会自动为请求到的内容进行替换操作。

### 示例

#### 开发模式

环境变量：`API_URL=/api`

原始地址：`~/featured/main/banner.webp`

实际地址：`/api/featured/main/banner.webp`

#### 生产模式

环境变量：`API_URL=http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api`

原始地址：`~/featured/main/banner.webp`

实际地址：`http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api/featured/main/banner.webp`

# 最新归档

_none_
