window.BRIEFING = {
  meta: {
    date: "2026-07-29",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "MCP 2026-07-28 规范昨天正式发布——最大协议改版：删除会话握手，每个请求自包含可被普通负载均衡器路由，97M 月下载量、10000+ 活跃 Server 的生态一夜换底。这直接影响你所有 AI Agent 基础设施的部署架构。",
    "中国开源模型三连击——DeepSeek V4 GA（$0.28/百万 token 输出）+ Kimi K3 开源权重（2.8T 参数）+ 腾讯 Hy3（$0.58/百万 token），把成本差距推到 10-50 倍。自托管高性能模型做美术 Agent 编排的时代到了。",
    "AI 图像市场彻底碎片化——GPT Image 2 / Midjourney V8.2 / FLUX.2 三极分立，同一任务成本差 60 倍（$0.003 ~ $0.20/张），中国模型 Seedream 4.5 和 Hunyuan Image 3.0 以 $0.03-0.04/张抢性价比。选模型不再是「哪个最强」而是「哪个匹配你的场景」。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "AI 图像生成市场彻底碎片化：GPT Image 2 / Midjourney V8.2 / FLUX.2 三极分立 + 60 倍价差 + 中国挑战者崛起",
          summary: "StackSpend 7 月全景报告：单一霸主时代结束。GPT Image 2 领先复杂 prompt 遵循+照片级写实（arena 第一）；Midjourney V8.2（7/25 设为默认）领先美学+艺术指导，~5x 更快、原生 2K、Draft 模式一次 24 张探索；FLUX.2 领先开源权重+企业控制（Pro/Flex/Dev/Schnell 四档）。中国挑战者 Seedream 4.5（字节 12B）$0.039/张和 Hunyuan Image 3.0（腾讯）$0.03/张抢性价比。价格从 SDXL $0.003 到高端 $0.20/张——60 倍差距。专业团队从「选一个」变「建多模型栈」。",
          links: [
            { label: "StackSpend 图像模型全景报告", url: "https://www.stackspend.app/resources/blog/image-generation-models-july-2026" },
            { label: "Frontier News：市场碎片化分析", url: "https://www.frontiernews.ai/news/article/the-image-generation-market-just-fractured-why-the-8154e878" },
            { label: "Midjourney V8.2 官方公告", url: "https://www.midjourney.com/updates/announcements" },
            { label: "FLUX.2 vs Midjourney V8.1 大对比", url: "https://www.gradually.ai/en/flux-vs-midjourney/" }
          ],
          value: "对游戏美术负责人的启示：① 概念图批量出——SDXL $0.003/张做 A/B 探索，FLUX.2 Dev $0.025/张做量产，MJ V8.2 做 hero 概念图；② 中国模型——Seedream 4.5 在多图一致性（批量 9 张统一风格）+中文字渲染上有独到优势，适合国内游戏宣传素材；③ 「建多模型栈」——按探索/量产/精修/文字渲染/风格一致分场景路由，单模型成本可降 5-10 倍。本周：盘点当前概念图管线用了几个模型，标出每个模型的角色和单价，算总成本。",
          impact: "图像生成从「谁能做」变「谁在什么场景最优+多便宜」。60 倍价差意味着同一批 1000 张概念图，SDXL 只要 $3，GPT Image 2 高分辨率要 $200——差异够雇一个初级美术。关键趋势：① 开源权重让自托管成本走低；② 中国模型在性价比+中文本土化上形成护城河；③ MJ 的「美学不可替代性」在缩小但 Draft 模式一次 24 张探索是其独有工作流。"
        },
        {
          idx: "02",
          title: "Texture++（arXiv 2607.21504, 7/23）：区域感知扩散模型做 3D 纹理超分——让老游戏的低分辨率纹理资产重获新生",
          summary: "arXiv 7/23 发表 Texture++ 框架，专门解决 3D 资产纹理超分问题——当前超分模型只处理自然图像、忽略纹理贴图（texture maps），导致大量老游戏的低分辨率纹理资产被废弃。Texture++ 把 UV 空间超分重定义为：在多个渲染视角上做超分再合并。三个核心创新：① 自适应视角选择策略整合分散在 UV 纹理块上的纹路；② 四叉树（quadtree）纹理区域组织+mask 区分需提升区域；③ 扩散超分模型只对指定 mask 区域增强，与周围无缝融合。实验证明细节和连贯性显著优于现有方法。",
          links: [
            { label: "Texture++ 论文（arXiv）", url: "https://arxiv.org/abs/2607.21504" }
          ],
          value: "对游戏美术管线的意义是「资产保值」——老项目（手游/页游时代）的低分辨率纹理资产可以不重新制作、而是用 AI 超分「升级」到高分辨率。场景：① 老游戏 HD 重制版——角色/场景/道具贴图 512x512 超分到 2K/4K 不需重新手绘；② 跨平台移植——移动端到 PC/主机纹理不够用 AI 超分解决；③ AI 生成的 3D 模型纹理（Meshy/Tripo）通常偏低分辨率，Texture++ 方法可二次提升。目前论文阶段未开源。本周：盘查项目中有多少低分辨率纹理资产可做超分升级，量化潜在节省美术工时。",
          impact: "3D 纹理超分是 AI 美术管线中被忽视的环节——大家关注「生成新模型」但忘了「升级已有资产」。Texture++ 的四叉树区域组织+mask 引导扩散指向一个趋势：AI 不只是「从零生成」而是「资产全生命周期管理」——生成→优化→超分→修复→再利用。对有大量历史资产的游戏公司，这个方向的价值可能比新模型生成更大。"
        },
        {
          idx: "03",
          title: "UMI3D（arXiv 2607.24298, 7/27）：免训练多图 3D 生成，解决单图 3D 基模「多图输入退化」老问题",
          summary: "arXiv 7/27 发表 UMI3D——免训练（training-free）、即插即用（plug-and-play）框架，解决 3D 基模在多图输入上的退化问题。现有 3D 基模（Trellis/Hunyuan3D/Meshy）能从单图生成高质量 3D，但给多张图（正/侧/背）反而退化——几何扭曲、纹理过平滑、颜色混乱。根因不是模型容量不够，而是单图交叉注意力和多图设置不匹配：模型没有原则性方法决定每个体素（voxel）在每步去噪时该信任哪张图。UMI3D 核心是 Simultaneous Focus Cross-Attention（SFC-Attn）——每步激活所有条件图，但让每个体素只聚焦最能解释它的那张图。通过 Voxel Reference Score（VRS，模型内蕴指标）实现路由，不需外部匹配/分割/对应模型。",
          links: [
            { label: "UMI3D 论文（arXiv）", url: "https://arxiv.org/abs/2607.24298" }
          ],
          value: "多图输入 3D 生成是游戏美术管线刚需——角色需要正/侧/背面参考才能保证几何精度。当前痛点：用 Meshy/Tripo 从单图生成 3D，正面好但背面/侧面不准；给多张图反而更差。UMI3D 的免训练特性意味着可直接加到现有 3D 生成管线上——不需重训模型，只在推理阶段改交叉注意力路由。场景：① 角色概念图（正/侧/背三视图）→ UMI3D → 高精度 3D 模型；② 道具多角度参考 → 更准确几何。论文阶段未开源但「即插即用」，如开源可集成到 ComfyUI 或自定义 3D pipeline。本周：关注 UMI3D 项目页面和代码发布，同时测试当前 Meshy/Tripo 多图输入效果做基线。",
          impact: "3D 生成的「多图问题」一直是行业痛点——UMI3D 指出根因是注意力路由而非模型容量，这个判断如果成立，意味着当前 3D 基模的潜力被架构瓶颈限制了，不需要更大模型、只需要更好的路由。这和去年图像生成的 ControlNet 思路异曲同工——不改基模、加控制层。如果这个方向成立，3D 生成的「多图精度」问题可能今年内被解决，这对需要高精度角色/道具 3D 的游戏管线是质变。"
        },
        {
          idx: "04",
          title: "Krea 2 开源 LoRA 生态大爆发 + ComfyUI 全面支持 Qwen-Image ControlNet（Canny/Depth/OpenPose/Inpaint）+ 风格 LoRA 链式叠加",
          summary: "7/28 两个并行进展：① Krea 2 开源后社区 LoRA 生产加速，本周涌现：皮肤纹理 LoRA（开放数据集+训练指南，28 steps/guidance 4.5/strength 0.6-1.0）、Identity Edit LoRA（输入图加文字标注做可控布局）、复古动画 LoRA（18000 张赛璐璐截图复现 90-00 年代动画质感）、GTA San Andreas 画风 LoRA（复刻 RenderWare 低多边形年代感）、LoKr 对比测试（43 张图 LoKr vs LoRA 效果接近）。② ComfyUI 全面支持 Qwen-Image 的 ControlNet（Canny 边缘检测/Depth 深度图/Inpaint 修复）和 LoRA（LineArt/SoftEdge/Normal Map/OpenPose 人体姿态），支持风格 LoRA 链式加载（原始→3D Voxel→Pixel Art→90s Retro Anime 逐层风格迁移）。同时集成 EasyCache 智能跳过采样步加速推理。",
          links: [
            { label: "AGI HUNT AI 资讯日报 2026-07-28", url: "https://agihunt.info/daily/2026-07-28" },
            { label: "ComfyUI 更新：Qwen Image ControlNet/LoRA", url: "http://sd114.wiki/16585.html" },
            { label: "ComfyUI 官方 Changelog", url: "https://docs.comfy.org/changelog" }
          ],
          value: "对游戏美术工作流的直接价值：① ComfyUI Qwen-Image ControlNet——OpenPose+Depth+Canny 三件套稳定出角色概念图/分镜/产品多视图，这是游戏美术最高频需求；风格 LoRA 链式叠加（写实→3D体素→像素风→复古动画）适合「同一角色多风格变体」——游戏活动 UI 需要同一 IP 多种画风时直接用。② Krea 2 皮肤纹理 LoRA 改善 AI 生图「塑料感」问题；复古动画 LoRA 直接做复古风格游戏美术。③ EasyCache 加速——智能跳过采样步，ComfyUI 工作流直接提速。本周：在 ComfyUI 中搭建 Qwen-Image+OpenPose+Depth+Canny 三 ControlNet 串联工作流，测试角色概念图稳定性。",
          impact: "ComfyUI 正从「SD 专用节点编辑器」变「AI 美术生产通用编排层」——支持 Qwen-Image+FLUX+Seedance+Hunyuan3D+Grok Video 等所有主流模型。游戏美术可以围绕 ComfyUI 建统一管线：出图（Qwen-Image/FLUX）→视频生成（Seedance/Kling）→3D 生成（Hunyuan3D）→后处理（ControlNet/LoRA/超分），所有环节在一个工具里编排。LoRA 生态从「SD 专属」扩展到 Krea 2 等新模型——社区驱动的风格定制能力正在跨模型传播，降低对官方模型更新的依赖。"
        },
        {
          idx: "05",
          title: "Google「边说边画」：SC-CMJP 让 AI 文字+图像实时同步生成互相纠错（arXiv 2607.13188, 7/28 报道）",
          summary: "7/28 报道 Google+Google DeepMind+石溪大学联合研究（arXiv:2607.13188v1），解决 AI 多模态生成的「模态割裂」问题。当前 AI 要么「先说完再画图」（串行），要么「文字和图像同时生成但各顾各的」（并行不耦合），经常对不上。团队提出「自修正耦合马尔可夫跳跃过程」（SC-CMJP）和实际生成器 CO²Jump——不需改底层模型结构，不需额外训练「监督者」，只在推理阶段改采样方式，让文字和图像生成在每一个瞬间都互相知晓对方状态，发现矛盾时及时纠正。创建了三个数据集（图像编辑、迷宫求解、数织 Nonogram），模型权重和数据集开放。",
          links: [
            { label: "Google「边说边画」论文解读（科技行者）", url: "https://www.163.com/dy/article/L2V8H3BM0511DTVV.html" },
            { label: "arXiv:2607.13188v1", url: "https://arxiv.org/abs/2607.13188" }
          ],
          value: "「边说边画」对游戏美术概念设计有长远意义——AI 在生成概念图的同时生成设计说明，两者实时互相调整。比如「这个角色穿蓝色铠甲」→AI 画图发现像紫色→文字自动修正→图像跟着调。解决当前「prompt 出图→不满意→改 prompt→重新出」的串行迭代低效。目前论文阶段，但 Google 开放了权重和数据集，如集成到 ComfyUI 可变可用工作流。本周：关注论文后续——如 CO²Jump 可集成到现有文生图 pipeline，概念设计迭代速度可能质变。",
          impact: "多模态生成从「串行」到「并行」再到「耦合」是趋势线。SC-CMJP 指向一个未来：AI 不再是「你说它画」，而是「它边理解需求边画边调整描述」——这更接近真实美术和策划的协作方式。如果这个方向成熟，概念设计的迭代闭环从「分钟级」可能压缩到「秒级」。推理阶段方案不需改模型是优势——可以加到现有 pipeline 上。"
        }
      ]
    },
    B: {
      tag: "B 层",
      title: "AI 上游信息",
      hint: "模型 / Agent / 开源 / 协议 / 思想",
      items: [
        {
          idx: "01",
          title: "MCP 2026-07-28 规范昨天正式发布：最大改版——无状态协议核心 + Extensions 框架 + Tasks + MCP Apps",
          summary: "7/28 MCP（Model Context Protocol，AI Agent 和工具之间的连接协议）发布 2026-07-28 最终规范——自 2024 年 11 月以来最大改版。核心变化：① 无状态协议层——删除 initialize/initialized 握手和 Mcp-Session-Id 头，每个请求自包含（协议版本、客户端信息、能力声明都在 _meta 字段），可被普通轮询负载均衡器路由，不再需要粘性会话（sticky session）；② Mcp-Method 和 Mcp-Name 头——网关和限流器不需解析 JSON-RPC body 就能路由；③ ttlMs+cacheScope——工具列表和资源响应可像 HTTP 资源一样缓存；④ W3C Trace Context 标准化——跨 SDK 和网关分布式追踪；⑤ 完整 JSON Schema 2020-12——工具 schema 支持 oneOf/anyOf/allOf 组合和条件；⑥ Extensions 框架——反向 DNS 命名的能力扩展，独立于核心 spec 版本化；⑦ Tasks 从实验核心移到官方扩展（tasks/get 轮询模型）；⑧ MCP Apps——服务端渲染交互式 HTML 界面在沙箱 iframe 中运行；⑨ Roots/Sampling/Logging 进入正式弃用（至少 12 个月跑道）。生态规模：97M 月 SDK 下载量、10000+ 活跃 Server。规范 5/21 冻结 RC，7/28 发布 final。",
          links: [
            { label: "MCP 2026-07-28 Release Candidate 博客", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/" },
            { label: "MCP 2026-07-28 规范深度解读", url: "https://blog.mcpservers.org/posts/mcp-spec-2026-07-28" },
            { label: "MCP Goes Stateless：10000+ Server 影响", url: "https://agentmarketcap.ai/blog/2026/07/16/mcp-stateless-transport-spec-rc" }
          ],
          value: "对你的 AI Agent 基础设施的直接影响：① 无状态化——如果你的美术 Agent 用了 MCP Server（连 ComfyUI/Spine/3D 工具），7/28 后不再需要粘性会话，多实例部署变简单——一个 Server 挂了自动切到另一个，不需 Redis session store；② Tasks 异步化——长时间运行的任务（批量生成 100 张概念图）从阻塞调用变轮询，Agent 不会被卡住；③ MCP Apps——工具可提供 HTML 交互界面，美术可直接在 Agent 界面里看到工具 UI（ComfyUI 节点图），不需跳转；④ 完整 JSON Schema——工具参数可用 oneOf/anyOf 表达「接受图片路径或 3D 模型路径」，对美术工具很实用。本周：检查 Agent MCP 依赖是否兼容 2026-07-28，SDK tier 1 预计已支持。",
          impact: "MCP 从实验协议变生产级规范，标志着 AI Agent 基础设施标准化基本完成。无状态化是最重要的变化——把 MCP Server 从「必须粘在一个实例上」变「随便部署多少副本」，对企业级 Agent 部署是质变。Extensions 框架意味着新能力可独立版本化发布。整体看：Agent 基础设施的「操作系统层」正在标准化——MCP 做工具连接、Tasks 做异步任务、Apps 做 UI——三件套覆盖了 Agent 和外部世界交互的大部分需求。",
          conduction: "传导到游戏美术生产：① 无状态 MCP → 美术 Agent 可多实例并行（一个出概念图、一个出 3D、一个出 Spine 动画），不互相干扰；② Tasks 轮询 → 批量生成任务（100 张概念图/20 个 3D 模型）不阻塞 Agent 主线程；③ MCP Apps → 美术可在 Agent 对话中直接看工具 UI（ComfyUI 节点图/3D 预览/Spine 时间线），降低跨工具切换成本；④ 下一步：如果 Agent 还用旧版 MCP（2025-11-25），需更新到 2026-07-28——initialize 握手和 session ID 都删了，旧代码会报错。"
        },
        {
          idx: "02",
          title: "中国开源三连击：DeepSeek V4 GA + Kimi K3 开源权重 + 腾讯 Hy3 = 10-50 倍成本结构性拐点 + 峰谷定价",
          summary: "7 月两周内三个中国开源模型接连发布，形成结构性成本拐点：① DeepSeek V4 GA（7/19 正式版）——V4-Pro（1.6T/49B active）和 V4-Flash（284B/13B active），MIT 许可证，100 万 token 上下文。首创「峰谷定价」：高峰时段（工作日 9-12/14-18 北京时间）2 倍价格。V4-Flash 低谷时段输出 $0.28/百万 token——是 GPT-5.6 Sol（$15）的 1/54、Fable 5（$50）的 1/178。SWE-bench Verified 80.6%，接近 Opus 4.8 的 80.8%。② Kimi K3（7/16 API/7/27 权重）——2.8T 参数，Frontend Code arena #1（超越 GPT-5.6 Sol 和 Fable 5），Modified MIT 许可。③ 腾讯 Hy3（7/6）——295B/21B active MoE，Apache 2.0，OpenRouter $0.14/$0.58 per 1M token。三连击引发 7/17 芯片股抛售（日经 -4%、SoftBank -9.2%），投资者重新定价「美国闭源 AI 有持久护城河」假设。能力差距从 2024 年的 12-18 个月压缩到 2026 年 7 月的 2-3 个月。",
          links: [
            { label: "DeepSeek V4 GA 详解：1/57 Fable 5 价格", url: "http://wan27.org/blog/deepseek-v4-ga" },
            { label: "中国开源 vs 美国闭源：2026 年 7 月拐点", url: "https://andrew.ooo/answers/chinese-open-weight-vs-us-proprietary-ai-inflection-july-2026" },
            { label: "Kimi K3 开源权重（ExplainX）", url: "https://www.explainx.ai/blog/kimi-k3-open-weights-2-8-trillion-parameters-july-2026" },
            { label: "腾讯 Hy3 详解", url: "https://kie.ai/pt/blog/what-is-hy3" },
            { label: "Kimi K3 价格战（dev.to）", url: "https://dev.to/tunan666/kimi-k3-just-open-sourced-its-weights-the-18-vs-60-api-price-war-is-here-5ahg" }
          ],
          value: "对你的 Agent 编排层成本优化：① DeepSeek V4 峰谷定价——把批量美术任务（概念图 prompt 生成/ComfyUI 参数调优/结果评估）调度到低谷时段（晚间/夜间/周末），成本直接减半。V4-Flash 低谷 $0.28/百万 token 输出——如果编排层每天消耗 500 万 token，月成本从 Opus 5 的 $375 降到 V4-Flash 的 $4.2，降 89 倍。② Kimi K3 前端代码 arena #1——如果 Agent 涉及代码生成（ComfyUI workflow JSON/Spine 脚本/Unity 编辑器扩展），K3 可能比 Opus 5 更强。③ Hy3 在 OpenRouter 上 $0.14 输入/$0.58 输出——如果需要中等质量+极低成本的中间步骤（初步 prompt 草稿/结果分类/质量评分），Hy3 是最便宜选项。本周：在 OpenRouter 上测试 V4-Flash+K3+Hy3 做现有 Agent 任务集，量化性能/成本/稳定性三维度对比。",
          impact: "这不是渐进降价而是范式切换——10-50 倍成本差距让「自托管高性能模型」从理论可能变经济可行。关键信号：① 峰谷定价是 AI 行业首创——说明推理算力已变成像电力一样的「可调度资源」，这直接利好批处理场景；② 能力差距 2-3 个月——意味着闭源模型「能力领先」的时间窗口在缩短，开源追上的速度越来越快；③ 芯片股抛售——投资者开始质疑「美国闭源 AI 需要的 GPU 投资规模是否合理」，如果持续可能影响 Nvidia 数据中心收入预期。",
          conduction: "传导到游戏美术生产：① Agent 编排层成本从 Opus 5 的 $5/$25 切换到 V4-Flash 的 $0.14/$0.28（低谷）——月成本可能降 50-90 倍，前提是性能可接受（SWE-bench 80.6% 接近 Opus 80.8%）；② 峰谷定价→把 ComfyUI workflow 生成、prompt 批处理、结果评估等非实时任务调度到夜间低谷时段，实时交互用高峰模型；③ K3 前端代码 #1→如果 Agent 生成 ComfyUI workflow JSON 或 Spine 脚本，K3 可能比 Opus 更合适；④ 建立模型路由器——简单任务→Hy3（最便宜）、中等任务→V4-Flash（便宜+快）、复杂任务→K3（最强开源）、极复杂→Opus 5（最贵但最稳）。"
        },
        {
          idx: "03",
          title: "FLUX 3 生成 20 秒带音频视频 + 昆仑万维 Matrix-3.5 世界模型押注「世界模型元年」+ 生成模型渗透具身 AI",
          summary: "7/28 多条上游信号指向同一趋势——生成模型从「内容创作」渗透到「物理操作/世界模拟」：① FLUX 3（Black Forest Labs）不再只是图像生成——已成为能生成带音频 20 秒视频的多模态 backbone，并被引入 Audi Production Lab 做工业操控测试，搭载 Mimic 机器人控制栈的系统在装配任务抓取失败后可自我修正——暗示生成模型在具身场景（embodied AI）的渗透正在加速。② 昆仑万维 7/28 集中发布 Matrix-3.5 世界模型、Mureka V9.5/O3 音乐模型、Riemann-1.0 具身世界模型（面向机器人「先预演再行动」），CEO 方汉将 2026 年定义为「世界模型元年」，路径覆盖游戏/视频内容实时生成与机器人预演。③ AMD 在 AAI 2026 大会展示物理 AI 全栈布局（锐龙 AI 嵌入式 X100、Kria AI SOM、机器人软件套件），预计 2035 年物理 AI 芯片市场 2000 亿美元。④ 北大等多机构 NeurIPS 2026 论文（arXiv:2607.15278）提出「先想后画」视频生成方案，解决双向扩散（推理强但慢）vs 流式自回归（快但逻辑弱）的核心张力。",
          links: [
            { label: "AGI HUNT AI 资讯日报 2026-07-28", url: "https://agihunt.info/daily/2026-07-28" },
            { label: "昆仑万维 Matrix-3.5 世界模型", url: "https://new.qq.com/rain/a/20260728A08TWF00" },
            { label: "北大「先想后画」视频生成论文解读", url: "https://dy.163.com/article/L2V71LC00511DTVV.html" }
          ],
          value: "对游戏美术的长远启示：① FLUX 3 能生成 20 秒带音频视频——一个模型同时做图像+视频+音频，游戏宣传片/过场动画的「一站式生成」更近了。如果 FLUX 3 开源（FLUX 系列一直是开源权重），自托管一个多模态生成 backbone 成为可能。② 世界模型（Matrix-3.5/Riemann-1.0）——「先预演再行动」的思路如果应用到游戏场景生成，可能是「AI 自动搭建关卡」的前奏：先在世界模型里预演场景布局，再生成可玩内容。③「先想后画」视频生成——北大团队的核心思路（先在双向扩散中做全局规划，再用流式自回归执行）对游戏过场动画的「叙事逻辑一致性」有价值。目前都在早期阶段，但方向值得追踪。",
          impact: "生成模型正从「输出一张图/一段视频」进化到「理解和模拟世界」——FLUX 3 做 20 秒视频+Audi 工业操控、昆仑做世界模型、AMD 做物理 AI 芯片——这些信号叠加说明：生成模型的未来不只是「更好看的图」，而是「能理解物理规律+空间关系+因果逻辑的世界模拟器」。对游戏美术的终极影响可能是：AI 不只生成单个资产，而是生成整个游戏场景/关卡/世界——这比当前「AI 出概念图/AI 出 3D 模型」高一个层级。但这个未来需要 2-3 年成熟，短期关注 FLUX 3 的多模态能力和开源计划。",
          conduction: "传导到游戏美术生产：① FLUX 3 的 20 秒带音频视频→如果开源，管线可从「图像生成（FLUX.2）+视频生成（Seedance/Kling）+音频生成（Suno）」三个工具变成一个 FLUX 3，降低集成复杂度；② 世界模型→2-3 年后可能从「AI 出概念图」进化到「AI 出场景布局+关卡设计」，美术负责人的角色从「管资产生产」扩展到「管 AI 世界生成」；③ 短期：关注 FLUX 3 是否开源以及 API 定价，如果可用可以替代当前的多模型视频栈。"
        }
      ]
    }
  },
  actions: [
    "MCP 2026-07-28 兼容性检查——检查 Agent MCP 依赖是否兼容新规范（initialize 握手和 session ID 已删除），SDK tier 1 预计已支持，更新后可多实例部署。",
    "建立模型路由器——按任务复杂度路由：简单（Hy3 $0.14/$0.58）→中等（V4-Flash $0.14/$0.28 低谷）→复杂（K3 $3/$15）→极复杂（Opus 5 $5/$25），量化每层成本。",
    "ComfyUI Qwen-Image + 三 ControlNet 工作流搭建——OpenPose+Depth+Canny 串联出角色概念图/分镜/多视图，加风格 LoRA 链式叠加做多风格变体。",
    "AI 图像模型选型矩阵——按探索（SDXL $0.003）/量产（FLUX.2 Dev $0.025）/精修（MJ V8.2）/文字渲染（Seedream 4.5 $0.039）/hero 概念图（GPT Image 2）分场景路由，计算总成本对比单模型方案。"
  ],
  timeline: {
    current: "2026-07-29",
    days: [
      { date: "2026-07-14", label: "07-14", weekday: "周二" },
      { date: "2026-07-15", label: "07-15", weekday: "周三" },
      { date: "2026-07-16", label: "07-16", weekday: "周四" },
      { date: "2026-07-17", label: "07-17", weekday: "周五" },
      { date: "2026-07-18", label: "07-18", weekday: "周六" },
      { date: "2026-07-19", label: "07-19", weekday: "周日" },
      { date: "2026-07-20", label: "07-20", weekday: "周一" },
      { date: "2026-07-21", label: "07-21", weekday: "周二" },
      { date: "2026-07-22", label: "07-22", weekday: "周三" },
      { date: "2026-07-23", label: "07-23", weekday: "周四" },
      { date: "2026-07-24", label: "07-24", weekday: "周五" },
      { date: "2026-07-25", label: "07-25", weekday: "周六" },
      { date: "2026-07-26", label: "07-26", weekday: "周日" },
      { date: "2026-07-27", label: "07-27", weekday: "周一" },
      { date: "2026-07-28", label: "07-28", weekday: "周二" },
      { date: "2026-07-29", label: "07-29", weekday: "周三" }
    ],
    weekly: {
      id: "week-2026-W31",
      range: "07-28 ~ 08-02",
      focus: "本周主线：① MCP 2026-07-28 规范正式发布——无状态化+Extensions+Apps+Tasks 四件套，Agent 基础设施标准化完成；② 中国开源三连击——DeepSeek V4 GA + Kimi K3 开源 + Hy3，10-50 倍成本差距结构性拐点 + 峰谷定价；③ AI 图像市场彻底碎片化——GPT Image 2/MJ V8.2/FLUX.2 三极分立 60 倍价差，建多模型栈；④ EU AI Act 8/2 倒计时 4 天——合规收尾；⑤ ComfyUI Qwen-Image ControlNet 全面支持+Krea 2 LoRA 生态大爆发。"
    },
    monthly: {
      id: "month-2026-07",
      range: "07-01 ~ 07-29",
      focus: "7 月收官主线：① AI 图像市场从单一霸主变三极分立——60 倍价差+多模型栈成标配；② 3D 生成从「单图退化」到「多图路由」——UMI3D 免训练解决行业痛点；③ 纹理超分从论文到管线——Texture++ 让老资产重获新生；④ 中国开源模型三连击——DeepSeek V4+Kimi K3+Hy3 把成本推到 10-50 倍差距+峰谷定价首创；⑤ MCP 2026-07-28 最大改版——无状态化+Extensions+Apps+Tasks，Agent 基础设施标准化完成；⑥ 生成模型渗透具身 AI——FLUX 3 做 20 秒视频+Audi 工业操控+昆仑世界模型。最后两天关键：EU AI Act 8/2 合规 + 模型路由器搭建。"
    }
  }
};
