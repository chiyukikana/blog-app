# 千秋花的博客

## API 外部调用方式

### 开发模式

`API_URL=/api`

Raw: `~/featured/main/main.json`

响应经过 Axios 拦截器进行内容替换

Replaced: `/api/features/main/main.json`

### 生产模式

`API_URL=http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api`

Raw: `~/featured/main/main.json`

响应经过 Axios 拦截器进行内容替换

Replaced: `http://192.168.2.238/FFSite/kaixin/userweb/19j1zjl/api/features/main/main.json`
