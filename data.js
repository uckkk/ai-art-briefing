window.BRIEFING = {
  meta: {
    date: "2026-08-21",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "即梦 Seedance 2.5 全球首发专业 3D 工作流：3D 白模控制 + Maya/Blender 插件、50 个全模态参考（30 图+10 视频+10 音频）、30 秒直出、最长 3 分钟、帧级/区域级局部修改——AI 视频从「盲盒抽卡」正式跨入「工业化生产」。",
    "Spline v2 重构 3D 编辑器：WebGPU 渲染器 + 内置 AI Agent（读场景/跑工具/截图自检）+ MCP server——Claude Code/Cursor 可编程驱动 3D 编辑器，MCP 标准接口继 ComfyUI 后再落一城。",
    "DeepSeek Harness rc.8 补齐多模态（14 项更新）：原生图片请求 + 图文混合输入 + Claude Code/Codex 子代理接入 + 工具层视觉（OCR/颜色统计/像素扫描）——纯文本模型也能「看图」。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "Seedance 2.5：全球首款支持专业 3D 工作流的 AI 视频工具（3D 白模 + Maya/Blender 插件）",
          summary: "8 月 20 日即梦（Dreamina）预热全球首发满血版 Seedance 2.5——AI 视频从「抽卡」迈向「工业化生产」。核心杀手锏是首次兼容专业 3D 工作流：① 3D 白模控制——精准调度镜头走向、分镜逻辑、人物站位和运动轨迹，解决长镜头「空间透视崩坏」；② 独家支持 Maya 和 Blender 插件——传统 3D 软件搭好白模和骨架，材质渲染/光影氛围/细节填充交给 AI；③ 50 个全模态素材参考（30 图 + 10 视频 + 10 音频），基本告别提示词门槛；④ 单段 30 秒原生直出（2.0 的 15 秒翻倍），支持延长最高 3 分钟，长视频人物/场景/声音一致性提升；⑤ 帧级/区域级局部修改——框选画面精修不推倒重来；⑥ 原生 10+ 语言生成 + 口型精准对齐。",
          links: [
            { label: "全球首创！Seedance 2.5 首款能做 3D 动画的 AI 视频工具（评测）", url: "http://www.hqwc.cn/a/1548950.html" },
            { label: "AGI HUNT 日报 8/20：Seedance 2.5 展示 30 秒 1080p 全场一致性", url: "https://agihunt.info/daily/latest" }
          ],
          value: "3D 白模控制 + Maya/Blender 插件直接命中游戏 CG 宣传片最痛点——过去 AI 视频镜头一推拉，透视和空间关系就崩。现在可以在 Blender 里搭好场景白模/骨架/运动轨迹，让 AI 补材质、光影和细节，把渲染农场成本砍掉一大截。50 全模态参考对买量素材批量生产是革命性的：一次喂 30 图 + 10 视频 + 10 音频，AI 理解镜头语言、情绪和节奏，批量产出多版本。帧级修改意味着电商/买量素材「改个元素」不用整条重生成。",
          impact: "AI 视频赛道已结束「比谁画面漂亮」的炫技期，进入「比谁能稳定进入生产流程」的深水区。3D 白模控制是 AI 视频与 DCC 工具链第一次真正的握手——方向一旦被验证，Blender/Maya 会成为 AI 视频的事实输入标准，传统 Pre-viz 和动态预演岗位的工作方式将被重写。"
        },
        {
          idx: "02",
          title: "Spline v2：WebGPU 重构 + AI Agent + MCP，3D 编辑器进入「Agent 可编程」时代",
          summary: "8 月 20 日 Spline 发布 v2——为 Agent 时代重建的 3D 编辑器：① AI Agent 内置——侧边栏 Agent 标签可读场景、跑编辑器工具、截图自检，能操控对象/材质/灯光/相机/布尔/粒子/克隆器/变量，甚至响应交互事件；② MCP server——Claude Code、Cursor、ChatGPT 等通过 MCP 驱动编辑器，与内置 Agent 同一套工具；③ WebGPU 渲染器成为默认（WebGL 回退）——绘制开销大幅下降、首帧更快、更多对象同屏；④ 先进材质——完整 PBR 管线 + IBL + HDR 色彩管线、屏幕空间反射、Physical Sky/HDRi Sky、高度雾、Dust 灰尘累积层；⑤ 新建模工具——Bevel/Chamfer 圆角、圆柱/球面纹理投影、雕刻笔刷对称、全新 Hair System 毛发系统（光照/阴影/风/结块）；⑥ 性能——Booleans 重写快 4 倍，导出体积自适应变小。",
          links: [
            { label: "Spline Blog: Introducing Spline v2", url: "https://blog.spline.design/spline-v2" }
          ],
          value: "Spline v2 是继 ComfyUI 之后 MCP 在 DCC 工具的又一次落地——「Agent 可编程」开始从生图工作流扩散到 3D 编辑器。游戏美术团队可以用 Claude Code/Cursor 直接驱动 Spline 生成场景、UI 状态、交互原型，Agent 自己读场景、检查、迭代。对做游戏 UI/概念场景的团队，Spline v2 的 Agent + 代码模式（HTML/JS 覆盖层）意味着「3D 交互原型」可以代码生成，不用手工摆节点。Hair System 对角色头发/毛发资产也是新增可选管线。",
          impact: "Spline 判断「3D 编辑器的主用户正在从设计师变成 Agent」——与 ComfyUI、Blender 的 AI 插件方向一致。MCP 正在成为 DCC 工具与 AI 大脑之间的事实标准接口：ComfyUI 走通、Spline 跟进，Blender/Spine/FairyGUI 的 Agent 化只是时间问题。游戏美术团队的资产工具链会从「人用软件」变成「Agent 驱动软件 + 人做判断」。"
        },
        {
          idx: "03",
          title: "Meshy 7：30 秒自动绑骨，AI 3D 角色直接进引擎（Unity/Godot 实测）",
          summary: "8 月 10 日 Meshy 7 发布，8 月 12 日 REST API 上线。头条功能是 auto-rigging 自动绑骨：上传人形网格、开启 enable_rigging，30 秒内得到可形变骨骼；单视图 3D 几何对齐基准得分 81.0%，领先 Tripo 3.1 和 Rodin 2.5。但实测暴露三个坑：① 导出格式是 FBX 不是 GLB——开启绑骨后静态网格 GLB 变成 FBX，glTF 端到端管线要规划格式切换；② Unity Humanoid 手指骨经常塌缩成单掌关节——Avatar 配置里 Hand 未映射，绿勾不代表手部没问题；③ Godot 肩部无 twist 骨——90° 抬臂时三角肌几何被挤压，需在 Blender 补手动 twist 骨。",
          links: [
            { label: "Meshy 7's 30-second auto-rig, tested in Unity and Godot", url: "https://bitsoulhosting.com/marketplace/blog/meshy-7-auto-rig-tested-unity-godot" }
          ],
          value: "30 秒绑骨把「AI 出角色 → 进引擎能跑」的路径压缩到小时级（实测 prompt 到 Unreal 里跑起来的角色约 $0.60/个、1 小时内）。但「能跑」和「动得对」是两回事——手部骨骼和肩部 twist 仍需人工修。对游戏美术管线的现实用法：中低模 NPC/配角用 Meshy 7 绑骨 + 人工修正手指/肩膀，hero 角色仍走人工绑骨；quad 拓扑 + 8000 面左右是最优配比。",
          impact: "auto-rig 从「demo 功能」走向「API 生产级」只用了半年。AI 3D 的下一步不是更精致的网格，而是「网格 + 拓扑 + 绑骨 + 动画」的完整资产链——谁能把 auto-rig 的精度拉到 Mixamo 级，谁就拿到中低模角色批产的市场。目前 Meshy 7 是「生产可接近」而非「生产可交付」。"
        },
        {
          idx: "04",
          title: "Grok Imagine 2.0：区域编辑 + 5 图参考融合 + 模板工作流，生图从「出图」走向「编辑」",
          summary: "8 月 10 日 xAI 发布 Imagine Image 2.0（Grok 的 Quality Mode），基于 Aurora 引擎（自回归 MoE transformer，逐 patch 生成），核心是控制而非分辨率：① 区域编辑（Magic Wand）——只改目标区域，其余不动，配分割工具精确选区；② 多参考融合——单次生成接受最多 5 张参考图，复杂构图无需手动拼接；③ Smart Resize——不是粗暴裁剪，而是重构图面适配 9 种比例（1:2 到 2:1）；④ 模板工作流——照片编辑/产品换色/电商图/专业头像/图标/角色精灵/表情/商品设计，视频策划场景可分别生成角色/场景/道具并保持统一风格。Arena 文生图全球第二（Elo 1320，第一 GPT-Image-2 1380）、图像编辑第二（1439 vs 1463）。",
          links: [
            { label: "xAI releases Grok Imagine 2.0（Wortins）", url: "https://www.wortins.com/story/xai-releases-grok-imagine-2-0-with-region-editing-and-multi--4f8a1c5d" },
            { label: "xAI 发布 Imagine Image 2.0 中文解读", url: "https://marcinkossakowski.com?live-blog-21016793-2026-08-10-xai-fa-buimagine-image2-0-zuo-weigrok-qi-xiaweb-duanimagine-fu-wu-jiios-android-/" }
          ],
          value: "区域编辑是美术最需要的「改局部不重画」——活动弹窗改个按钮文案、角色换件衣服、商品换配色，都不再整张重抽。5 图参考融合对「角色 × 场景 × 道具」的视觉一致性工作流是直接生产力：一次生成保持统一风格，不用后期拼图。角色精灵模板对 2D 游戏是现成的批产路径。API 访问计划推进中但尚未开放——想接入 Agent 管线还需等 API。",
          impact: "头部生图模型（OpenAI/Meta/xAI/Google）的竞争焦点已从「画得更像」转向「编辑更可控」——区域编辑、参考融合、模板化正在成为标配。生图工具从「生成器」变成「轻量编辑器」，美术的交互方式从「抽卡-筛选」变成「生成-定向修改」。"
        },
        {
          idx: "05",
          title: "腾讯 ARC 开源 SCoPE：相机视线当坐标注入视频扩散模型，精准运镜控制",
          summary: "8 月 20 日腾讯 ARC 开源 SCoPE（Spherical COordinate Position Embedding）——把相机视线当作位置坐标注入预训练视频扩散 Transformer，输入首帧、文本与轨迹即可跟指定运镜生成视频。仓库基于 Wan2.2-I2V-A14B 且自带完整推理，无需额外训练即可控制镜头移动。",
          links: [
            { label: "AGI HUNT 日报 8/20：腾讯 ARC 开源 SCoPE", url: "https://agihunt.info/daily/latest" }
          ],
          value: "运镜是游戏宣传片/过场动画的命门——SCoPE 用「轨迹驱动镜头」的路线，和传统「画关键帧」的工作流可以无缝衔接：首帧定构图、轨迹定运镜、文本定内容。开源 + 自包含推理意味着可以本地私有化部署，IP 项目数据不出域。配合当天社区里出现的 CrossView-Warp LoRA V2（V2V 改机位/运动轨迹，HuggingFace 权重），「改机位」这条以前只能重生成的路正在被打通。",
          impact: "镜头控制是 2026 下半年视频模型的主战场——LTX 多镜头、Kling Omni 逐角色口型、腾讯 SCoPE 轨迹控制、CrossView-Warp 改机位，四路并进。AI 视频的「导演能力」正在从「提示词语言」走向「结构化控制」（3D 白模/相机轨迹/关键帧），这对专业团队是好消息：控制越结构化，越能嵌进生产管线。"
        }
      ]
    },
    B: {
      tag: "B 层",
      title: "AI 上游信息",
      hint: "模型 / Agent / 开源 / 机器人 / 安全 / 产品化",
      items: [
        {
          idx: "01",
          title: "DeepSeek Harness v0.1.0-rc.8：14 项更新补齐多模态 + 子代理协作",
          summary: "8 月 20 日凌晨 DeepSeek Harness 迎来公测后首次重要更新（v0.1.0-rc.8），14 项调整：① 多模态输入——支持原生图片请求和图文混合输入，/goal、/plan 等命令可直接接收图片；② 子代理协作——Claude Code、Codex 进一步接入其子代理体系；③ 工具层视觉——面对不支持图像输入的纯文本模型，可调用 OCR、颜色统计、像素扫描等工具，把图片拆成结构化信息再交给文本模型推理，相当于给纯文本模型拼出「视觉」；④ 终端体验修复——Windows 终端体验、图片请求、流式生成、自定义网关等问题修复。8 月 13 日 v0.1 公测并开源。",
          links: [
            { label: "DeepSeek Harness 首发新版本：14 项更新，多模态能力拉满（智东西）", url: "https://view.inews.qq.com/a/20260820A03U8O00?scene=news-skill" },
            { label: "DeepSeek Harness GitHub Releases: dsh-v0.1.0-rc.8", url: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8" }
          ],
          value: "本地 dsh（npx @DeepSeek-ai/dsh，v0.1.0-rc.6，端口 4173）这次 rc.8 直接升级两个核心能力：① 图片输入——美术 Agent 最需要的「看图→理解→反馈」链路打通，xart MCP 验证时可以让 dsh 直接看图评估生成质量，不用再走外部视觉模型；② 子代理协作——Claude Code/Codex 接入子代理体系，多 Agent 协作的美术管线（一个 agent 看图、一个 agent 改 prompt、一个 agent 跑 ComfyUI）有了本地底座。建议尽快升级到 rc.8 并测试图片输入。",
          impact: "DeepSeek 用「工具层视觉」绕过模型本身的视觉能力，是工程上非常务实的一招——纯文本模型 + OCR/像素扫描在多数结构化任务上够用，且成本远低于多模态旗舰。这预示着 Agent 框架的竞争从「模型能力」转向「工具编排能力」。"
        },
        {
          idx: "02",
          title: "视频格局重排：Sora 2 停服倒计时 + Kling 3.0 登顶 + Happy Horse 1.0 登顶 + 可灵营收 8.5 亿",
          summary: "8 月 20 日视频模型格局重排信号密集：① Sora 2 退场倒计时——独立 Sora 应用 4/26 已停用，Sora 2 API 9/24 停服，ChatGPT Plus/Pro 内仍可用但已不适合作生产管线底座，行业共识 9 月前完成迁移；② Kling 3.0 登顶——LLM Stats Video Arena 文生图视频榜单 Elo 1934 第一（盲测 1392 票），随后 Happy Horse 1.0（1816）、Seedance 2.0 Fast（1747）；但 Artificial Analysis Video Arena 上阿里 Happy Horse 1.0 排名第一，超出 Seedance 2.0 一截；③ 快手 Q2 财报——可灵 AI 当季营收超 8.5 亿元（同比 +200%、环比 +30.8%），可灵 3.0 系列称推出原生 4K 直出，上线 3.0 Turbo、MCP 等；④ 新模型涌入——FLUX.3 Video（BFL 8 月）、MiniMax H3（Hailuo-03，2K + 首尾帧控制）、Grok Imagine Video 1.5、Wan 2.7 Video。",
          links: [
            { label: "Best AI for Video Generation in 2026（LLM Stats, 8/20 更新）", url: "https://www.llm-stats.com/leaderboards/best-ai-for-video-generation" },
            { label: "Civitai 新视频模型：Happy Horse 1.0 / Seedance 2.0 / Wan 2.7", url: "https://releasebot.io/updates/civitai/civitai" },
            { label: "AGI HUNT 日报 8/20：快手财报 + 可灵 3.0 原生 4K", url: "https://agihunt.info/daily/latest" }
          ],
          value: "Sora 2 停服是 9/24 前的硬性迁移任务——凡依赖 Sora 的视频管线要在这 1-2 周完成迁移，行业共识迁移本身是 1-2 周的工程而非危机。Kling 3.0 以「最高 Elo + 最低单价 + 逐角色口型 + 中文/方言理解最强」成为性价比首选；Happy Horse 1.0 在 Artificial Analysis 登顶但价格贵。可灵营收 +200% 说明 AI 视频的商业化已被市场验证——视频管线选型可以更放心地押注头部工具，因为它们在持续投入。",
          impact: "AI 视频已「商品化」——原生音频普及、1080p 成地板、单条可用片段跌破 1 美元。最聪明的做法是抽象掉供应商：统一提示词层对接多家，每季度重评一次——「9 月的冠军未必是 6 月的冠军」。"
        },
        {
          idx: "03",
          title: "Math Magic（Hi3D 母公司）Series A+ 近 $5000 万：AI 3D 从「生成」到「交付」全链闭环",
          summary: "8 月 20 日 Math Magic 宣布完成 Series A+ 轮，6 个月两轮累计融资近 $5000 万（BAI Capital 与 HyT Capital 联合领投，V Fund 及 HSG/IDG 等跟投）。Math Magic 同时押注 AI 3D 模型技术（旗下 Hi3D 昨日发布 V3.0，2048³ 体素 + 8K 纹理）+ 物理供应链（智能拆件、多色打印、制造履约），走「生成到交付」模式：Builda 社区 + Builda Camera（拍照生成个性化手办并送货上门）。公司自述是「唯一同时具备高精度 AI 3D 模型技术与物理生产能力」的公司。",
          links: [
            { label: "Math Magic Closes Series A+（PR Newswire, 8/20）", url: "https://www.prnewswire.com/news-releases/math-magic-closes-series-a-raising-nearly-50-million-across-two-rounds-in-six-months-302856530.html" }
          ],
          value: "对游戏美术，这轮融资的意义不在钱，而在验证「AI 3D 资产 = 可交付商品」的商业闭环——Hi3D 的 2048³ 精度 + 智能拆件 + 多色打印，直接把 AI 3D 从「数字资产」延伸到「物理商品」（潮玩/手办/周边）。如果你在做 IP 衍生周边、潮玩企划，这条链路值得跟踪：未来「角色 3D 模型 → 自动拆件 → 多色打印 → 交付」可以全自动，省掉建模师和供应链对接的人力。",
          impact: "AI 3D 的资本叙事正在从「模型能力」转向「模型 + 供应链」的全链条——能落地的 3D 公司必须同时搞定生成端和生产端。对纯工具型 AI 3D 公司，这个门槛会越来越高；对游戏公司，这意味着 AI 3D 资产生态（资产库、打印服务、电商化）会加速成熟。"
        }
      ]
    }
  },
  actions: [
    "Seedance 2.5 上线即测 3D 白模工作流：用 Blender 搭 1 个角色/道具白模 + 运动轨迹，跑一条游戏 CG 宣传片需求，对比传统渲染农场成本与返工率——重点测 3D 白模控制下的空间稳定性和 Maya/Blender 插件体验。",
    "Spline v2 + MCP PoC：接 Claude Code 驱动 Spline 搭一个游戏 UI 交互场景原型，验证「Agent 可编程 3D」在概念阶段的生产力；同时把 Spline v2 的 Hair System 加入角色毛发资产管线做 A/B。",
    "Meshy 7 自动绑骨 A/B：用 3 个中低模角色对比 Meshy 7 自动绑骨 vs 人工绑骨工时，重点验证手指骨/肩部 twist 修复成本，输出「AI 绑骨 + 人工修正」的标准工时表。",
    "DeepSeek Harness 升级 rc.8 + 图片输入测试：本地 dsh 升级，用 3 张生图结果做「看图评估」测试，验证纯文本模型 + 工具层视觉能否支撑美术 Agent 的质检环节。",
    "Sora 2 停服迁移：9/24 前完成视频管线迁移（Sora → Kling 3.0 / Veo 3.1 / Seedance 2.5 三选一或双轨），并建立「统一提示词层 + 季度重评」的视频供应商抽象。"
  ],
  timeline: {
    current: "2026-08-21",
    nodes: [
      { type: "day",   date: "2026-08-21", label: "08-21" },
      { type: "week",   id: "w34", label: "W34", range: "08-17 ~ 08-23", focus: "Seedance 2.5 全球首发 3D 白模控制 + Maya/Blender 插件，AI 视频跨入工业化生产；Spline v2 用 WebGPU + AI Agent + MCP 重构 3D 编辑器；DeepSeek Harness rc.8 补齐多模态；Sora 2 API 9/24 停服倒计时，Kling 3.0 登顶 LLM Stats 视频榜。" },
      { type: "day",   date: "2026-08-20", label: "08-20" },
      { type: "day",   date: "2026-08-14", label: "08-14" },
      { type: "day",   date: "2026-08-13", label: "08-13" },
      { type: "week",   id: "w33", label: "W33", range: "08-10 ~ 08-16", focus: "Qwen 3.8-Max 开源但引入收入分成许可，开源 AI freemium 拐点；Comfy MCP 批量生成上线，Agent 驱动千级 workflow/天；Anthropic SynthID-Text 水印全平台落地；Gemini 3.7 Flash + Claude Sonnet 5 + NVIDIA Nemotron 3.5 密集迭代。" },
      { type: "day",   date: "2026-08-04", label: "08-04" },
      { type: "week",   id: "w32", label: "W32", range: "08-03 ~ 08-09", focus: "AI Agent 商业化验证：Cognition/Devin 年化收入破 $10 亿；Stripe 收购 OpenRouter $70 亿标志 LLM 分发层整合；Anthropic 签 20 年数据中心租约加码自有算力。" },
      { type: "day",   date: "2026-08-02", label: "08-02" },
      { type: "day",   date: "2026-08-01", label: "08-01" },
      { type: "month",  id: "m202608", label: "8月", range: "08-01 ~ 08-21", focus: "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 3D 白模视频工作流 + 开源视频世界模型（LTX-2.5 22B）+ Comfy MCP 批量生产 + Qwen freemium 许可 + 定价格局反转。AI 美术生产从单点工具进入工具链编排阶段。" },
      { type: "day",   date: "2026-07-31", label: "07-31" },
      { type: "day",   date: "2026-07-30", label: "07-30" },
      { type: "day",   date: "2026-07-29", label: "07-29" },
      { type: "day",   date: "2026-07-28", label: "07-28" },
      { type: "day",   date: "2026-07-27", label: "07-27" },
      { type: "week",   id: "w31", label: "W31", range: "07-27 ~ 08-02", focus: "Kling 4.0 Pro 原生 4K + 音频同步；EU AI Act Article 50 生效（8/2）AI 内容强制标注；MCP 最终规范发布——无状态核心 + Apps + Tasks；Midjourney V8.2 设为默认；Claude Opus 5 半价逼近 Fable 5。" },
      { type: "day",   date: "2026-07-25", label: "07-25" },
      { type: "day",   date: "2026-07-24", label: "07-24" },
      { type: "day",   date: "2026-07-23", label: "07-23" },
      { type: "day",   date: "2026-07-22", label: "07-22" },
      { type: "day",   date: "2026-07-20", label: "07-20" },
      { type: "week",   id: "w30", label: "W30", range: "07-20 ~ 07-26", focus: "字节 Seedream 5.0 Pro 像素级编辑；MeshFlow 3D 网格生成 1 秒内（SIGGRAPH）；DeepSeek V4 + Qwen3.8 + Kimi K3 三箭齐发；阿里 Qwen-Image-3.0 复杂 UI + 多语言一次生成。" },
      { type: "day",   date: "2026-07-19", label: "07-19" },
      { type: "day",   date: "2026-07-18", label: "07-18" },
      { type: "day",   date: "2026-07-17", label: "07-17" },
      { type: "day",   date: "2026-07-16", label: "07-16" },
      { type: "day",   date: "2026-07-15", label: "07-15" },
      { type: "day",   date: "2026-07-14", label: "07-14" },
      { type: "day",   date: "2026-07-13", label: "07-13" },
      { type: "week",   id: "w29", label: "W29", range: "07-13 ~ 07-19", focus: "Seedream 5.0 Pro 图层分离 + 像素编辑；Luma Ray3.2 16 关键帧逐帧控场；3D 开源权重（Hunyuan3D-2.5/TRELLIS.2）追平闭源可商用自托管；Kling 3.0 原生 4K/60fps；腾讯混元3D 8K PBR。" },
      { type: "month",  id: "m202607", label: "7月", range: "07-13 ~ 07-31", focus: "视频三巨头同日开火（Kling 4/Veo 4/Sora 3）成本暴跌 80%；3D 开源权重追平闭源可商用自托管；EU AI Act 生效 + MCP 规范落地；Agentic Engineering 范式确立（Karpathy AgentHub）；极逸 SOON 原生 Spine 骨骼动画。" }
    ]
  }
};
