# 技术周报

日报仍由首页的 `data.js` 和 `archive.js` 提供。周报是单独的栏目，每一期一个永久地址，正文生成在本站页面里。

不要在本仓库再加定时任务。已有的每周流程只调用下面的命令。这里不需要新闻生成接口的密钥；条目由该流程写进 JSON。

## 格式

文件是 UTF-8 JSON。`id` 用这一周的起始日，也是永久地址的文件名。同一 `id` 再次导入会覆盖这一期，不会新增第二条。

```json
{
  "schemaVersion": 1,
  "id": "2026-11-09",
  "end": "2026-11-16",
  "title": "技术周报 · 11 月 9 日至 16 日",
  "dek": "一句话说明这一期写了什么。",
  "closing": "可选。写在全文最后。",
  "items": [
    {
      "title": "条目标题",
      "body": ["第一段。", "第二段。"],
      "value": "对一般游戏美术流程的意义。",
      "links": [{ "label": "原始出处", "url": "https://example.com/source" }]
    }
  ]
}
```

约束：

- `schemaVersion` 只能是 `1`。
- `id` 和 `end` 是真实存在的 `YYYY-MM-DD`，且 `end` 不早于 `id`。
- `items` 可以是空数组。空数组不会编造条目，页面会写明这一期没有已核实内容。
- 每条至少一段正文、一句美术价值和一个不带账号的 `http` 或 `https` 链接。
- 不要增加未列出的字段。

## 导入

在仓库根目录执行：

```bash
node scripts/import-weekly.js weekly/issues/2026-11-09.json
```

标准输出只有一行，例如：

```text
status=created id=2026-11-09 html=weekly/2026-11-09.html
```

`status` 为 `created`、`updated` 或 `unchanged`。同一文件再执行一次应为 `unchanged`，退出码仍是 0。格式不对时退出码为 2。

导入只写 `weekly/issues/<id>.json`、`weekly/<id>.html`、`weekly/index.html` 和 `weekly/manifest.json`。它不改日报，不上传，不改域名。

模板有变动时，重渲染全部已有周报：

```bash
node scripts/import-weekly.js --rebuild
```

检查：

```bash
node scripts/test-weekly.js
```

## 发布

本仓库唯一会自动更新的公开副本，是默认分支 `main` 根目录对应的 Pages。来源是 `main` 的 `/`，构建类型为 legacy。推送到 `main` 会触发仓库里已经存在的 Pages 构建，不要另建工作流。

内容准备好之后：

```bash
node scripts/test-weekly.js
git add weekly index.html styles.css docs/WEEKLY.md scripts
git commit -m "weekly: 2026-11-09"
git push origin main
node scripts/verify-publish.js --file weekly/2026-11-09.html
```

`verify-publish.js` 只读取公开地址，对照本地文件的 SHA-256，并打印每条响应的地址、`Server` 和证书结果。它不上传，也不改 DNS。

退出码：

| 退出码 | 含义 |
| --- | --- |
| 0 | `pagesHttp` 和 `edgeHttps` 都是 `match`：两份公开副本的正文都与本地文件一致 |
| 3 | 只有一份副本的正文对得上 |
| 4 | 两份副本都还没有这个文件 |
| 2 | 参数或本地文件有误 |

报告里的 `pagesHttps` 会单独写证书结果。Pages 这一侧的证书名称目前对不上自定义域名，这不单独导致失败；真正要看的是 `pagesHttp` 和 `edgeHttps`。

退出码 3 或 4 时停住。不要改 DNS，不要切换托管，不要使用其他项目的凭据，也不要改用目录上传。带有效证书的那一份副本没有写在本仓库的发布步骤里，需要另行授权。

校验脚本也可以只打到一个本地或临时地址：

```bash
node scripts/verify-publish.js --file weekly/2026-11-09.html --base http://127.0.0.1:8765
```

## 地址

- 列表：`/weekly/` 或 `/weekly/index.html`
- 单期：`/weekly/2026-11-09.html`

自定义域名的 HTTPS 并不对所有解析结果成立。Pages 那一侧的证书名称对不上这个域名，仓库设置里也没有强制 HTTPS。校验输出里的 `tls` 以实际响应为准，不要把一次推送理解成整个域名已经更新。
