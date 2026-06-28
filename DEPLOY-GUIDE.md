# 网站2 部署指引 - NFT Airdrop Hunter

## ✅ 网站2已完成

**项目位置**: `C:\Users\成1\Documents\nft-airdrop-hunter`
**构建输出**: `C:\Users\成1\Documents\nft-airdrop-hunter\out` (21个页面)

### 功能概况
- ✅ 4个NFT空投项目（OpenSea、Blur、Magic Eden、Tensor）
- ✅ 首页/日历/教程/工具页
- ✅ About/Contact/Privacy 合规页
- ✅ SEO优化（sitemap、robots、meta标签）
- ✅ 品牌：NFT Airdrop Hunter 🖼️

---

## 📦 部署到 Vercel（网页拖拽，最简单）

### 第1步：打开 Vercel
浏览器访问：https://vercel.com（用你之前的账号登录）

### 第2步：创建新项目
1. 点击右上角 **"Add New..."** → 选择 **"Project"**
2. 选择 **"Deploy without Git"**（或类似选项）

### 第3步：拖拽部署
1. 把整个文件夹 `C:\Users\成1\Documents\nft-airdrop-hunter\out` **拖进去**
2. Vercel 会自动识别并部署
3. 等待1-2分钟

### 第4步：获取网址
- 部署完成后，Vercel 会给你一个网址，类似：
  - `https://nft-airdrop-hunter-xxx.vercel.app`
- **这就是网站2的地址**

---

## 🔄 如果想走 GitHub 自动部署

### 选项A：手动创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名：`nft-airdrop-hunter`
3. 创建后，在 `nft-airdrop-hunter` 项目根目录运行：
   ```powershell
   cd "C:\Users\成1\Documents\nft-airdrop-hunter"
   git init
   git add .
   git commit -m "Initial NFT airdrop hunter site"
   git remote add origin https://github.com/你的用户名/nft-airdrop-hunter.git
   git -c http.proxy="socks5h://127.0.0.1:7897" -c http.version=HTTP/1.1 -c pack.threads=1 push --no-thin -u origin main
   ```
4. 推送成功后，Vercel 连接这个 GitHub 仓库

### 选项B：网页拖拽（推荐，避免 git push 超时）
就按上面的"第1-4步"操作即可。

---

## 📊 两个网站对比

| 特性 | 网站1（Crypto） | 网站2（NFT） |
|-----|---------------|------------|
| 地址 | https://airdrop-hunter-sooty.vercel.app | 待部署 |
| 项目数 | 45个（DeFi + L2 + 新链） | 4个（NFT市场） |
| 目标用户 | DeFi玩家、L2用户 | NFT交易者、GameFi玩家 |
| 自动更新 | ✅ 每天9点自动抓取 | ⏸️ 暂无（手动维护） |
| 返佣链接 | ✅ Binance/OKX | ❌ NFT市场无返佣 |
| AdSense | ✅ 代码占位 | ✅ 代码占位 |

---

## 💡 下一步建议

### 如果你想两个站都自动更新：
复制网站1的自动化脚本到网站2：
```powershell
Copy-Item "C:\Users\成1\Documents\airdrop-hunter\scripts" "C:\Users\成1\Documents\nft-airdrop-hunter\scripts" -Recurse -Force
Copy-Item "C:\Users\成1\Documents\airdrop-hunter\data\airdrop-sources.json" "C:\Users\成1\Documents\nft-airdrop-hunter\data\airdrop-sources.json" -Force
```
然后修改 `airdrop-sources.json` 为 NFT 项目的官网（OpenSea blog、Blur blog等）

### 变现策略差异：
- **网站1（Crypto）**：交易所返佣 + AdSense
- **网站2（NFT）**：纯 AdSense（NFT市场无返佣计划）

---

## 🚀 现在开始

1. 打开 https://vercel.com
2. 拖拽 `C:\Users\成1\Documents\nft-airdrop-hunter\out` 文件夹
3. 等待部署完成
4. 把网址告诉我

部署完成后，我教你推广两个站的策略。
