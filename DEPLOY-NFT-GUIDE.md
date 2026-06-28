# NFT Airdrop Hunter - 部署指南

## 📦 网站2已创建完成

**项目位置**: `C:\Users\成1\Documents\nft-airdrop-hunter`

**已完成的配置**:
- ✅ NFT主题首页和导航
- ✅ 3个NFT空投示例数据（Pudgy Penguins, Blur, Magic Eden）
- ✅ SEO优化（sitemap、robots、meta标签）
- ✅ 所有功能页面（日历、工具、交易所、博客）
- ✅ 本地构建测试通过

---

## 🚀 部署到 Vercel

### 方案1：通过 Vercel Dashboard（推荐，最简单）

1. **创建 GitHub 仓库**
   ```powershell
   cd "C:\Users\成1\Documents\nft-airdrop-hunter"
   git init
   git add .
   git commit -m "Initial commit: NFT Airdrop Hunter"
   ```

2. **推送到 GitHub**
   - 在 GitHub 创建新仓库 `nft-airdrop-hunter`（public）
   - 本地关联并推送：
   ```powershell
   git remote add origin https://github.com/你的用户名/nft-airdrop-hunter.git
   
   # 用之前验证有效的SSH推送方式
   git -c core.sshCommand="ssh -i ~/.ssh/id_ed25519 -p 443 -o HostName=ssh.github.com" push -u origin main
   ```

3. **导入到 Vercel**
   - 访问 https://vercel.com/new
   - 选择 "Import Git Repository"
   - 授权访问你的 GitHub
   - 选择 `nft-airdrop-hunter` 仓库
   - 点击 Deploy（无需修改任何配置，Vercel 自动识别 Next.js）

4. **等待部署完成**
   - 1-3 分钟后，Vercel 会分配一个域名：`nft-airdrop-hunter.vercel.app`
   - 点击域名访问你的 NFT 站

---

### 方案2：使用 Vercel CLI（如果 Dashboard 访问有问题）

```powershell
cd "C:\Users\成1\Documents\nft-airdrop-hunter"

# 安装 Vercel CLI（如果未安装）
npm install -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

按提示操作：
- Set up and deploy? `Y`
- Which scope? 选择你的账号
- Link to existing project? `N`
- What's your project's name? `nft-airdrop-hunter`
- In which directory? `./`
- Want to modify settings? `N`

---

## 🔄 配置自动更新（可选）

如果想让 NFT 站也每天自动更新（虽然 NFT 空投更新频率低），可以：

1. **获取 Vercel Deploy Hook**
   - Vercel Dashboard → 你的项目 → Settings → Git → Deploy Hooks
   - 创建新 Hook，名称 `daily-update`
   - 复制生成的 URL

2. **修改自动更新脚本**
   编辑 `scripts/run-update.ps1`，把 Deploy Hook URL 改成 NFT 站的

3. **创建 Windows 计划任务**（参考网站1的方式）
   ```powershell
   $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-ExecutionPolicy Bypass -File C:\Users\成1\Documents\nft-airdrop-hunter\scripts\run-update.ps1"
   $trigger = New-ScheduledTaskTrigger -Daily -At 10:00AM
   Register-ScheduledTask -TaskName "NFT-AirdropHunterRefresh" -Action $action -Trigger $trigger
   ```

---

## 📝 后续优化建议

### 立即可做：
1. **添加更多 NFT 空投数据**
   - 编辑 `data/airdrops.json`
   - 参考现有3个示例的格式
   - 推荐添加：OpenSea Pro、Tensor、LooksRare、X2Y2 等

2. **修改博客文章为 NFT 主题**
   - `data/blog-posts.js` 里的5篇文章还是加密空投内容
   - 改成 NFT 教程：
     - "How to Safely Participate in NFT Airdrops"
     - "Best NFT Marketplaces for Farming Rewards"
     - "Understanding NFT Royalties and Airdrops"

3. **绑定自定义域名**（提高 SEO）
   - 购买域名：`nftairdrophunter.com`（约$10-15/年）
   - Vercel Dashboard → Domains → Add Domain
   - 按提示配置 DNS

### 中期优化：
1. **提交到 Google Search Console**
   - 验证站点所有权
   - 提交 sitemap: `https://nft-airdrop-hunter.vercel.app/sitemap.xml`

2. **申请 Google AdSense**（需先有流量）
   - 1-2周推广后申请
   - 填入发布商ID到 `app/layout.js`

3. **配置返佣链接**
   - 注册各NFT市场的推荐计划
   - 更新 `config/referral.js`

---

## 🔗 两个站的定位

| 站点 | 定位 | 目标用户 |
|------|------|---------|
| **网站1**: airdrop-hunter | 加密货币空投（DeFi、Layer2、新链） | DeFi 用户 |
| **网站2**: nft-airdrop-hunter | NFT 市场空投和奖励 | NFT 交易者 |

**互相导流策略**:
- 网站1 footer 加链接：`也关注NFT? 访问我们的 NFT Airdrop Hunter`
- 网站2 footer 加链接：`也关注DeFi? 访问我们的 Crypto Airdrop Hunter`

---

## ⚠️ 注意事项

1. **不要共用 GitHub 仓库**
   - 两个站各自独立的仓库
   - 各自的 Deploy Hook
   - 避免互相影响

2. **Search Console 验证码**
   - 网站1 和网站2 需要分别申请
   - 不要复用同一个验证码

3. **数据文件不同步**
   - `data/airdrops.json` 在两个站内容完全不同
   - 加密空投 ≠ NFT空投
   - 各自维护

4. **AdSense 账号**
   - 两个站可以用同一个 AdSense 账号
   - 但需要分别提交审核

---

## 🎯 快速开始部署

**最简单3步**:
```powershell
# 1. 初始化 git
cd "C:\Users\成1\Documents\nft-airdrop-hunter"
git init
git add .
git commit -m "Initial commit"

# 2. 推送到 GitHub（先在 GitHub 创建仓库）
git remote add origin https://github.com/你的用户名/nft-airdrop-hunter.git
git -c core.sshCommand="ssh -i ~/.ssh/id_ed25519 -p 443 -o HostName=ssh.github.com" push -u origin main

# 3. 在 Vercel.com 导入仓库
# 访问 https://vercel.com/new → Import → 选择仓库 → Deploy
```

完成！你的 NFT 空投站就上线了。

---

**需要帮助？** 告诉我卡在哪一步，我帮你解决。
