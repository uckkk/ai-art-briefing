window.BRIEFING = {
  meta: {
    date: "2026-07-24",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "Kling 4.0 Pro 正式发布——原生 4K + 全序列时空处理 + 音频同步生成 + 最多 9 张参考图 + 首尾帧控制，AI 视频从「能出片」进化到「能出专业级成片」，不再需要后期对轨和逐帧修 flickering。",
    "EU AI Act Article 50 还有 4 天（8/2）生效——AI 生成内容强制标注 + Disney vs Midjourney 版权战关键节点（调解截止 8/19），游戏美术管线需要立即建立合规流程。",
    "MCP 2026-07-28 最终规范 4 天后发布——无状态核心 + MCP Apps + Tasks 扩展，Agent 基础设施从「能用」进化到「可规模化部署」，美术 Agent 管线有了标准底座。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "Kling 4.0 Pro 正式发布：原生 4K + 全序列时空处理 + 音频同步生成 + 最多 9 张参考图 + 首尾帧控制，AI 视频迈入「专业级成片」阶段",
          summary: "快手 Kling 4.0 Pro 正式发布。核心升级：全序列时空处理（一次性建模整段视频时空关系而非逐帧拼接，皮肤/布料/水体/快速运动物体无 flickering）、原生 4K 输出（非 1080p→超分，每个像素原生渲染）、音频同步生成（上传音频 URL 在扩散阶段同步对齐唇形/动作/环境音，不需后期对轨）、最多 9 张参考图（R2V 模型保持角色外观+声音跨片段一致）、首尾帧精确控制（过渡更平滑物理可信）。Kling 3.0 Pro Arena 含音频 Elo 1104 领先 Veo 3.1（1094），4.0 Pro 上线后差距预期拉大。",
          links: [
            { label: "Kling 4.0 Pro 官方产品页", url: "https://kling4pro.com/" },
            { label: "Kling 4.0 完整对比评测（Kingy AI）", url: "https://kingy.ai/news/best-ai-video-generator-2026" },
            { label: "2026 AI 视频工具全景对比（Similarlabs）", url: "https://similarlabs.com/blog/best-ai-video-generators-2026" }
          ],
          value: "「全序列时空处理」是 Kling 4.0 Pro 的核心壁垒——Seedance 2.5 的 30 秒整片交付是长，Kling 4.0 Pro 的「一次性建模整段时空」是深，两者互补而非替代。游戏宣传片：需叙事连贯性走 Seedance 整片，需顶级画质+精准物理走 Kling 4.0 Pro。音频同步生成意味着宣传片配乐+对白+动作音效一次搞定，不再需要后期音画对轨。最多 9 张参考图 + 首尾帧控制 = 多角度角色设定一次喂入，精确度大幅提升。本周：对比测试 Kling 4.0 Pro vs Seedance 2.5，同一段 30 秒游戏宣传片需求，量化各自优势维度。",
          impact: "AI 视频从「能出片」进化到「能出专业级成片」。Kling 4.0 Pro 的全序列时空处理解决的是「为什么 AI 视频总有一种廉价感」的根本问题——帧间 flickering、肢体抖动、光影断裂——而原生 4K + 音频同步意味着交付物达到可直出商用标准。Kling $3B 融资 + 4.0 Pro 发布说明 AI 视频赛道已从技术验证进入产品化竞赛。"
        },
        {
          idx: "02",
          title: "Meshy 6 + Tripo v3.1：3D 自动绑定 30 秒完成 + 四边面拓扑 + T-pose/A-pose 控制，游戏 3D 资产管线从「生成可用」进入「生产可用」",
          summary: "Meshy 6 新增自动绑定——上传 GLB/FBX/OBJ，AI 30 秒内构建完整骨骼层级 + 计算平滑蒙皮权重，支持 Humanoid/Quadruped Dog/Smart Rig 三种骨架，T-pose/A-pose 控制，绑定后直接加动画导出 FBX/GLB/USDZ 进 Unity/Unreal/Blender/Maya。四边面拓扑模式——三角面一键转四边面、指定目标面数（100K-300K）、对称模式。Tripo v3.1 同步升级自动绑定+四边面重网格化+部件分割+自动修复，生成 1-5 分钟。盲测（1,331 名资深 3D 艺术家）63.8% 偏好 Meshy 6 可控质量。",
          links: [
            { label: "Meshy 6 角色自动绑定完整教程", url: "https://www.meshy.ai/tutorials/character-auto-rigging-workflow" },
            { label: "AI 3D 模型生成器 2026 全景对比（Cinevva）", url: "https://app.cinevva.com/guides/ai-3d-model-generators" },
            { label: "Hitem3D vs Meshy vs Tripo 对比（3D AI Studio）", url: "https://www.3daistudio.com/blog/hitem3d-vs-meshy-vs-tripo-comparison" }
          ],
          value: "自动绑定 30 秒完成是 3D 管线最大效率突破——AI 生模型→30 秒绑骨→直接进引擎播动画的完整链路可行。四边面拓扑直接解决 AI 生 3D 最大痛点——三角面进引擎动画会撕裂，四边面是正确的形变基础。Smart Rig（Beta）支持多肢体/奇幻生物等非标准 NPC。本周：用 Meshy 6 自动绑定测试 AI 生成的 3D 角色，从生成→绑骨→加动画→导入 Unity 全链路跑通。",
          impact: "AI 3D 资产生成正从「能出网格」进入「能出生产线就绪资产」。Meshy 6 四边面拓扑 + 自动绑定 + T-pose 控制，Tripo v3.1 速度 + 部件分割，Hunyuan3D 2.1 生产级 PBR——三条路线在各自维度突破，加起来「中低模道具/NPC 全程 AI 生产」已可行。对美术岗：3D 道具/NPC 生产从「建高模→拓扑→UV→烘焙→贴图→绑定 6 步手工」变成「AI 生成→自动绑定 2 步」。"
        },
        {
          idx: "03",
          title: "EU AI Act Article 50 8/2 生效（只剩 4 天！）：AI 生成内容强制标注 + Disney vs Midjourney 版权战关键节点 + Adobe Firefly 赔偿上限 $10k",
          summary: "三条合规信号叠加：① EU AI Act Article 50 透明度义务 8/2 生效——AI 生成图像须机器可读标注，7/22 为初始签署方加入标注行为准则截止日；② Disney/Marvel/Star Wars vs Midjourney——治安法官 6 月限制制片厂只需提供消费者端 AI 使用文件，Midjourney 上诉要求翻案（主张制片厂内部 AI 使用也是「行业惯例」证据），调解截止 8/19，专家证据开示 9/21，动议 11/23。Disney 与 OpenAI $1B 授权交易可能成为 Midjourney「选择性维权」论据；③ Adobe Firefly IP 赔偿上限 $10k/每次输出或索赔，仅限 teams/enterprise Pro Plus 或 Edition 4 计划。",
          links: [
            { label: "AI 图像商用许可安全指南（Toolglance）", url: "https://toolglance.com/guides/ai-image-commercial-use-licensing-safe-2026" },
            { label: "Disney vs Midjourney 案件状态（LegalClarity）", url: "https://legalclarity.org/disney-midjourney-lawsuit-claims-defenses-and-case-status" },
            { label: "版权战升级：证据开示之争（搜狐）", url: "https://m.sohu.com/a/1046453165_122396381" }
          ],
          value: "EU AI Act 只剩 4 天——如果你的游戏在欧洲区发行，所有 AI 生成美术素材须机器可读标注，立即盘点团队 AI 工具及标注能力、建立标注 SOP。Disney 胜诉→任何能生成受版权保护角色的 AI 工具可能面临禁令，需建立「角色相似度审核」流程。Adobe Firefly $10k 赔偿上限→大型 KV/户外广告的 AI 生成风险需单独评估，高价值素材建议回归人工+授权图库。本周：建立 EU AI Act 合规 checklist，盘点使用工具标注现状。",
          impact: "AI 美术「免费午餐」时代正式结束。EU AI Act 标注要求 + Disney 版权诉讼 + Firefly 赔偿上限三信号叠加→游戏公司使用 AI 美术需三层合规：标注层（可溯源可检测）、版权层（角色相似度审核）、赔偿层（按素材价值选赔偿上限足够的工具）。"
        },
        {
          idx: "04",
          title: "EmoStyle：情感驱动图像生成获 AffectiveArt Challenge 2026 冠军，LLM 推理情感 + LoRA 风格适配器 + VLM 候选筛选",
          summary: "7/11 arXiv 发布 EmoStyle（arXiv:2607.10165，中科大），AffectiveArt Challenge 2026 Track 1 冠军。核心创新：LLM 从 prompt 预测情感维度（valence-arousal/主导情绪）和宽高比；情感条件向量注入去噪块（AdaLN 调制），不只当附加文本而是直接控制中间特征生成；为每种艺术风格单独训练 LoRA 适配器，推理时选对应风格专家；VLM 从 prompt 对齐/风格一致性/情感表达/视觉质量四维排名候选图。",
          links: [
            { label: "arXiv: EmoStyle 论文", url: "https://arxiv.org/abs/2607.10165" },
            { label: "EmoStyle 方法详解（Pith）", url: "https://www.pith.science/paper/2607.10165" }
          ],
          value: "情感条件向量注入去噪块比在 prompt 写「悲伤的氛围」精确得多——对角色立绘/关键帧的情感表达（角色情绪需透过色彩/光影/笔触传达）有直接提升。风格桶 LoRA 启发：游戏项目「同一角色不同场景的情感表达」可训练对应情感 LoRA 一键切换。VLM 候选筛选对口美术 Agent 管线——目前批量出图靠人眼筛选，EmoStyle 四维自动排名可作为 Agent 自动筛选层。当前论文阶段，未开源代码。",
          impact: "「情感可控生成」从 prompt 工程进入模型架构层面。EmoStyle 证明情感不是靠多写几个形容词就能精准控制，而是需模型内部有专门的情感条件注入通道。和一个更大趋势吻合——AI 生成正从「描述型控制」进化到「参数化控制」（情感/风格/构图各自独立可调向量）。"
        },
        {
          idx: "05",
          title: "Midjourney V8.1 + FLUX.2 Max + Nano Banana 2：2026 生图三极分立——审美（MJ）、画质/开源（FLUX）、速度/免费（Nano Banana 2）各占一极",
          summary: "2026 年 7 月 AI 生图工具格局定型：① Midjourney V8.1 最强审美一致性，Arena Elo ~1,180，$30/月无限 Relax 模式，无 API；② FLUX.2 Max 原生 2,304×1,736（~4MP）分辨率天花板，<10 秒生成，klein-4B Apache 2.0 开源可商用；③ Nano Banana 2（Gemini 3.1 Flash Image）速度之王 4-6 秒出图，免费 ~20 张/天，自然语言编辑「把光线调暖、杯子左移」无需 prompt 语法，API $0.045-0.151/张；④ GPT Image 2 传闻（GPT Image 1.5 和 DALL-E 3 的继任者）未正式发布。",
          links: [
            { label: "2026 最佳 AI 生图工具实测（UsuallyCorrect）", url: "https://usuallycorrect.com/blog/best-ai-image-generators-2026" },
            { label: "AI 生图模型 2026 全景（Gradually）", url: "https://www.gradually.ai/en/ai-image-models" },
            { label: "AI 生图工具排名（ModelRanked）", url: "https://modelranked.com/ai-image-design/best-ai-image-generators/" }
          ],
          value: "生图选型已不需纠结「哪个最好」——概念美术/风格探索→MJ V8.1，商用素材批量生产→FLUX.2 Max/klein-4B，快速迭代/编辑→Nano Banana 2。FLUX.2 klein-4B Apache 2.0 可在 ComfyUI 本地部署商用，不受 API 定价波动。Nano Banana 2 自然语言编辑降低 Agent 操作图像门槛——Agent 不需学 prompt 语法。本周：更新团队生图工具矩阵表，按场景分派最优模型。",
          impact: "AI 生图从「一家独大」进入「三极分立」——审美/画质开源/速度免费各占不可替代的生态位。比 2025 年更成熟：不是工具互相替代，而是各自占据专属场景。对美术岗：建立「场景→工具→模型」路由表，不再问「哪个最好」。"
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
          title: "GPT-5.6 Sol/Terra/Luna + Claude Sonnet 5 + Gemini 3.6 Flash 三旗舰 3 周扎堆发布：上游模型能力集体跃迁，推理成本继续暴跌",
          summary: "7 月前三周三家前沿实验室密集发布：① OpenAI GPT-5.6 7/9 GA（Sol $5/$30、Terra $2.50/$15、Luna $1/$6 per 1M token，1.05M 上下文+128K 输出，新增编程化工具调用+持久化推理+beta 多 Agent 编排）；② Anthropic Claude Sonnet 5 7/1 发布（SWE-bench Verified 89.4% 压过 Opus 4.8 的 88.6%，Terminal-Bench 76.1% vs Sonnet 4.6 仅 55.4%=+37%，$2/$10 入门 8/31 前优惠，1M 上下文+128K 输出）；③ Google Gemini 3.6 Flash 7/21（DeepSWE 49% +32%、MLE-Bench 63.9% +29%、Terminal-Bench 54% +74%，$1.50/$7.50，输出 token 减少 65%），同步发布 Flash-Lite（$0.30/$2.50）和 Flash Cyber（安全专项）。",
          links: [
            { label: "2026 最新 LLM 发布追踪（benchr.org）", url: "https://benchr.org/recent-releases" },
            { label: "三旗舰编码对比（andrew.ooo）", url: "https://andrew.ooo/answers/gemini-3-6-flash-vs-claude-sonnet-5-vs-gpt-5-6-terra-coding-agents-july-2026" },
            { label: "Google 三模型同日发布分析（Bitig）", url: "https://bitig.info/blog/google-ships-three-gemini-models" }
          ],
          value: "三旗舰扎堆→美术 Agent 规划层模型选择暴增：简单路由+文本用 Gemini 3.6 Flash-Lite（$0.30/$2.50），复杂编排用 Sonnet 5（Terminal-Bench 76.1% 领跑 Agent 任务），批量高吞吐用 GPT-5.6 Luna（$1/$6）。Sonnet 5 Terminal-Bench 76.1%（Sonnet 4.6 仅 55.4%）→Agent 任务可靠性大幅提升，对美术 Agent（一次跑 50 张图不能中间崩）是质变。Gemini 3.6 Flash 输出 token 减 65%→Agent 多步调用成本直降 65%。本周：更新模型路由表，加入最新定价和 benchmark。",
          impact: "上游模型从「军备竞赛」进入「产品矩阵」阶段——每家同时覆盖旗舰+中端+性价比三档，产品矩阵趋同。选模型不再选厂商，而是选最适合当前任务的档位——模型路由从可有可无变成必做功课。",
          conduction: "传导到游戏美术生产：① 立即：更新模型路由表——文本层 Gemini 3.6 Flash-Lite $0.30/$2.50 或 DeepSeek V4 Flash $0.14/$0.28，编排层 Sonnet 5 $2/$10，图像层 FLUX.2 Max/Nano Banana 2；② 1-2 周：用 Sonnet 5 替代当前编排层模型，量化 Agent 任务成功率提升（对比 Terminal-Bench 55.4%→76.1% 的预期改善）；③ 每两周：重跑模型路由表（这个速度的模型更新频率，月度已经不够了）。"
        },
        {
          idx: "02",
          title: "MCP 2026-07-28 最终规范 4 天后发布：无状态核心 + MCP Apps + Tasks 扩展，Agent 基础设施从「实验协议」升级为「生产级标准」",
          summary: "MCP 2026-07-28 最终规范 7/28 发布（自 2024/11 诞生以来最大修订）。核心：① 无状态协议——移除 initialize 握手和 Mcp-Session-Id，每个请求自包含，任意服务器实例可处理，可部署在普通轮询负载均衡器后；② MCP Apps——服务器渲染交互式 HTML UI（沙盒 iframe），工具预先声明 UI 模板；③ Tasks——从实验升级为正式扩展，异步长任务标准管理（tasks/get/update/cancel）；④ 授权硬化——6 个 SEP 对齐 OAuth 2.0/OIDC 部署标准；⑤ 正式弃用政策——12 个月迁移窗口。Beta SDK（Python/TS/Go/C#）6/29 发布。MCP 由 Anthropic 捐赠给 AAIF（Linux Foundation 旗下），首次完整规范周期在中立治理下运行。",
          links: [
            { label: "MCP 2026-07-28 RC 官方博客", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate" },
            { label: "MCP 规范详解（MCPservers.org）", url: "https://blog.mcpservers.org/posts/mcp-spec-2026-07-28" },
            { label: "MCP 无状态化企业指南（NomadX）", url: "https://nomadx.ae/blog/mcp-2026-07-28-spec-what-changed/" }
          ],
          value: "无状态化→ComfyUI/Spine/Blender MCP Server 可多实例部署+负载均衡分发，高并发跑 50 张图不因单实例挂而全部丢失。Tasks→渲染 4K 视频/生成 3D 模型/批量出图的异步管理不再需自建状态追踪。MCP Apps→未来 ComfyUI 节点调整/Spine 骨骼编辑 UI 可直接嵌入 Agent 客户端，不需切换应用。12 个月弃用窗口→基于 MCP 构建的美术 Agent 管线不会因协议升级突然崩溃。本周：追踪 7/28 最终文本，评估工具链是否需升级 MCP SDK。",
          impact: "MCP 从实验协议经历中立治理后迎来生产级规范。无状态化解决企业部署最大痛点（粘性会话），Tasks 解决异步执行，Apps 打开 UI 嵌入——Agent 基础设施标准化基本完成。对美术 Agent：过去需在 ComfyUI API + Spine API + Blender API 上各自搭适配层，现在统一走 MCP Server，Agent 用标准 JSON-RPC 调用所有美术工具——这就是美术 Agent 的「操作系统层」。",
          conduction: "传导到游戏美术生产：① 立即：追踪 7/28 MCP 2026-07-28 最终规范文本，评估 ComfyUI/Spine/Blender 是否有官方 MCP Server 或需自建；② 1-2 周：基于新规范设计美术 Agent 「工具层」——哪些美术工具支持 MCP、哪些需适配层、如何利用 Tasks 管理长渲染任务；③ 1-3 个月：将美术 Agent 管线迁移到 MCP 2026-07-28 协议底座，享受无状态扩展+标准异步任务管理。"
        },
        {
          idx: "03",
          title: "Karpathy「语音是 Agent 的下个入口」+ LeCun 论文驳 AGI 定义 + Anthropic 发现 J-space：上游思想交锋揭示关键范式分歧",
          summary: "三信号交织：① Karpathy 7/22 X 上抛出「语音模式工作法」——往后一靠切换语音、漫谈十分钟意识流，LLM 重构得比原话更清晰。人-AI 接口从键盘（60-80 字/分钟）→语音（200-250 字/分钟）带宽差 3-4 倍。此前 7/6 警告「当前 AI 最大错误是急着逼 Agent 干活没搞懂底层模型」——回顾 2016 OpenAI World of Bits 失败（用 RL 做 Agent 困死在简陋网页，5 年后才靠 LLM 走通）；② LeCun 团队论文逐一驳斥 7 个主流 AGI 定义，提 SAI（Superhuman Adaptable Intelligence）——不问「像不像人」只问「学得多快」+「能否在人类盲区超越」。$1.03B 种子轮 AMI Labs 用 JEPA 从感知数据学因果和规划；③ Anthropic 发现 Claude 内部自发形成 J-space——暂存概念/承接中间结果/影响推理，关闭后只能回答幼儿园问题，非 Anthropic 设计而是训练中「长」出来的。",
          links: [
            { label: "Karpathy 语音模式工作法（腾讯新闻）", url: "https://new.qq.com/rain/a/20260722A0AY2W00?refer=cp_1009" },
            { label: "LeCun 驳 AGI + Anthropic J-space（字母 AI）", url: "https://new.qq.com/rain/a/20260707A06LRE00?refer=cp_1009" },
            { label: "Karpathy 轰 Agent 圈（今日头条）", url: "https://www.toutiao.com/article/7659235725937836582/" }
          ],
          value: "Karpathy 语音模式→美术 Agent 交互范式的启发：目前 Agent 文本指令「我要仙侠风角色立绘、表情悲伤但不绝望、雨天背景、柔和光线、中景构图」打字 30 秒反复调 prompt，语音 10 秒说完带情感色彩，LLM 转结构化 prompt。未来美术 Agent 交互可能是「语音→LLM 结构化→生图 Agent 执行」。LeCun SAI→不要追求通用 AGI，而是追求「在游戏美术特定领域超越人类效率」——和当前美术 Agent 设计方向一致。J-space→Agent 自进化循环需内部暂存空间保持多步推理中间状态。",
          impact: "Karpathy 和 LeCun 虽都批评盲目乐观，但指向不同——Karpathy 说「Demo 容易产品要十年」强调 Agent 工程需沉淀迭代；LeCun 说「AGI 定义是胡扯 LLM 走不到真智能」强调需世界模型新架构。共同点：不要追概念和 demo，追可迭代可积累的工作流。Anthropic J-space 说明即使沿 LLM 路线，模型内部已在自发形成未完全理解的认知结构。"
        }
      ]
    }
  },
  actions: [
    "对比测试 Kling 4.0 Pro vs Seedance 2.5——同一段 30 秒游戏宣传片需求，分别跑 Kling 4.0 Pro（原生 4K + 音频同步 + 全序列时空）和 Seedance 2.5（30 秒整片 + 50 份参考），记录质量/时间/成本/可改率四维对比。",
    "建立 EU AI Act Article 50 合规 checklist——盘点团队 AI 生成内容的标注现状，确认工具是否支持机器可读标注，完成 8/2 前合规检查。",
    "跑通 Meshy 6 自动绑定全链路——用 AI 生成 3D 角色测试：生成→自动绑骨→加动画→导入 Unity，验证完整管线可行性。",
    "更新模型路由表（7/24 版）——加入 GPT-5.6 Sol/Terra/Luna、Claude Sonnet 5、Gemini 3.6 Flash/Flash-Lite 最新定价和 benchmark，按任务复杂度重算最优路由。"
  ],
  actionPaths: [
    {
      title: "Kling 4.0 Pro vs Seedance 2.5 对比测试",
      summary: "用 30 秒游戏宣传片需求测试 Kling 4.0 Pro 的全序列时空+音频同步+原生 4K 能力，对比 Seedance 2.5 的整片交付。",
      deploy: [
        "环境：Kling 4.0 Pro API / Seedance 2.5 API（火山引擎）。",
        "输入：一段 30 秒游戏角色宣传片需求（角色设定图/场景概念图/分镜/BGM）。",
        "对比基准：同需求分别跑两个模型。"
      ],
      prompt: "你是一个游戏宣传片导演 + AI 视频评估专家。请帮我完成 Kling 4.0 Pro vs Seedance 2.5 对比测试。\n\n【测试目标】\n量化 Kling 4.0 Pro（全序列时空+原生 4K+音频同步）和 Seedance 2.5（30 秒整片+50 份参考）在游戏宣传片场景的各自优势和适用场景。\n\n【需求】\n角色：仙侠女性角色，情绪弧线：登场→战斗→胜利\n场景：古风悬崖→空中战场→胜利落幕\n时长：30 秒\n风格：参考《原神》过场动画\n音频：一段 BGM + 3 句角色对白\n\n【执行】\n1. Kling 4.0 Pro：上传音频 URL + 9 张参考图（角色设定/场景/首尾帧），记录：\n   - 全序列时空处理效果（皮肤/布料/水体无 flickering）\n   - 音频同步质量（唇形对齐/环境音准确度）\n   - 原生 4K 画质\n   - 首尾帧控制精确度\n   - 生成耗时/成本\n2. Seedance 2.5：50 份参考素材 + 3D 白模预演，记录：\n   - 30 秒整片叙事连贯性\n   - 局部编辑灵活性\n   - 生成耗时/成本\n\n【输出】\n- Kling 4.0 Pro vs Seedance 2.5 四维对比（质量/时间/成本/可改率）\n- 各自最佳适用场景（宣传片/角色 PV/产品广告/过场动画）\n- 是否值得同时保留两个工具"
    },
    {
      title: "EU AI Act Article 50 合规检查",
      summary: "盘点团队 AI 生成内容的标注现状，建立 8/2 前合规 checklist。",
      deploy: [
        "资料：EU AI Act Article 50 透明度义务原文、欧盟 AI 内容标注行为准则。",
        "范围：团队所有使用 AI 生成的美术素材（角色立绘/宣传图/loading 图/icon 等）。"
      ],
      prompt: "你是一个游戏行业法务合规顾问 + AI 美术管线专家。请帮我完成 EU AI Act Article 50 合规检查。\n\n【背景】\nEU AI Act Article 50 透明度义务 2026/8/2 生效——所有 AI 生成图像内容需机器可读标注。\n\n【任务】\n1. 盘点团队使用的所有 AI 美术工具（Midjourney/FLUX/ComfyUI/Seedance/Kling/Photoshop AI 等）。\n2. 确认每个工具的输出是否自带 C2PA/Content Credentials 等机器可读标注。\n3. 建立团队 AI 生成内容标注 SOP：\n   - 哪些素材需要标注？（角色立绘/宣传图/场景概念图/icon/loading 图等）\n   - 标注方式？（C2PA 嵌入/文件名前缀/元数据标记）\n   - 谁来标注？（美术→QA→法务谁审核）\n   - 标注记录管理（哪个素材用了什么 AI 工具/什么 prompt）\n4. 对无法自动标注的工具，建立手动标注流程。\n\n【输出】\n- 工具标注能力矩阵\n- 标注 SOP 文档\n- 合规 gap 分析和补救计划\n- 8/2 前 checklist"
    },
    {
      title: "Meshy 6 自动绑定全链路测试",
      summary: "测试 AI 生成 3D 角色→自动绑骨→加动画→导入 Unity 的完整管线。",
      deploy: [
        "环境：Meshy 6、Unity/Unreal Engine。",
        "输入：一个 AI 生成的 3D 角色模型（T-pose）。",
        "对比基准：手动绑骨+手动拓扑（当前流程）。"
      ],
      prompt: "你是一个游戏技术美术 + 3D 管线顾问。请帮我跑通 Meshy 6 自动绑定全链路。\n\n【测试目标】\n验证 AI 生成的 3D 角色能否通过 Meshy 6 自动绑定+加动画+导入引擎，形成可生产管线。\n\n【输入】\n一个 AI 生成的角色模型（GLB 格式，T-pose）。\n\n【执行】\n1. 导入 Meshy 6 → 选择 Humanoid → 定位角色 → 自动绑定：\n   - 记录绑骨耗时（预期 30 秒）\n   - 检查骨骼层级完整性（脊椎/四肢/手指）\n   - 检查蒙皮权重质量（关节弯曲是否自然）\n2. 添加内置动画库动作（行走/待机/攻击）→ 预览。\n3. 导出 FBX → 导入 Unity：\n   - 检查骨架是否完整保留\n   - 测试动画重定向（Retargeting）\n   - 检查材质是否正常\n\n【输出】\n- 自动绑定全流程耗时和成功率\n- 对比手动绑骨（时间/质量/可复用性）\n- 能否替代手动绑骨用于中低模 NPC 生产\n- 高模 hero 角色是否需手动调整"
    },
    {
      title: "模型路由表更新（2026-07-24 版）",
      summary: "加入 7 月新模型定价和 benchmark，重算文本/代码/编排层最优模型组合。",
      deploy: [
        "资料：GPT-5.6 Sol/Terra/Luna、Sonnet 5、Gemini 3.6 Flash/Flash-Lite 最新定价和 benchmark。",
        "当前路由表：上次更新 7/23。"
      ],
      prompt: "你是一个 AI 基础设施成本优化专家。请帮我更新「AI 工具链模型路由表」到 2026/07/24 版。\n\n【背景】\n7 月新增：GPT-5.6 Sol $5/$30、Terra $2.50/$15、Luna $1/$6；Sonnet 5 $2/$10（8/31 前）；Gemini 3.6 Flash $1.50/$7.50（输出 token -65%）、Flash-Lite $0.30/$2.50。\n\n【任务】\n1. 把 API 调用按场景分类：\n   - 简单文本/路由（成本优先）\n   - 需求拆解/prompt 生成（平衡）\n   - 复杂编排/多步 Agent 任务（质量优先）\n   - 批量高吞吐（性价比）\n2. 为每类场景指定最优模型：\n   - 候选：DeepSeek V4 Flash、Gemini 3.6 Flash-Lite、Gemini 3.6 Flash、GPT-5.6 Luna、GPT-5.6 Terra、Sonnet 5\n3. 计算当前成本 vs 新路由成本。\n\n【输出】\n- 更新版模型路由决策树（按场景→模型→价格）\n- 成本对比表（当前 vs 新路由）\n- 实施建议\n- 下次更新计划（模型更新频率加快→建议每两周更新）"
    }
  ],
  timeline: {
    current: "2026-07-24",
    days: [
      { date: "2026-07-13", label: "07-13", weekday: "周一" },
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
      { date: "2026-07-24", label: "07-24", weekday: "周五" }
    ],
    weekly: {
      id: "week-2026-W31",
      range: "07-20 ~ 07-26",
      focus: "本周主线：① Kling 4.0 Pro 把原生 4K+全序列时空处理+音频同步做实——游戏宣传片从「能出片」进化到「能出专业级成片」；② EU AI Act Article 50 8/2 生效只剩 4 天——AI 生成内容强制标注，需立即建立合规流程；③ MCP 2026-07-28 最终规范 4 天后发布——Agent 基础设施里程碑，美术 Agent 管线有了标准底座。"
    },
    monthly: {
      id: "month-2026-07",
      range: "07-01 ~ 07-24",
      focus: "7 月主线：① AI 视频从「拼段」进化到「专业级成片」——Seedance 2.5 30 秒整片交付 + Kling 4.0 Pro 原生 4K 全序列时空+音频同步；② 3D 资产生成进入「生产可用」——Meshy 6 四边面拓扑+30 秒自动绑定+Tripo v3.1 速度；③ 2D 骨骼动画生产自动化——See-through 自动拆 Spine PSD；④ Agentic Engineering 进入自进化阶段——Karpathy AgentHub+英伟达 ASPIRE 技能库；⑤ 上游模型 7 月三旗舰扎堆——GPT-5.6+Sonnet 5+Gemini 3.6 Flash 集体跃迁、推理成本继续暴跌；⑥ EU AI Act 8/2 生效+Disney 版权诉讼——AI 美术合规成为硬需求。最后一周关键：跑通 Meshy 6 自动绑定全链路 + 建立 EU AI Act 合规流程 + 追踪 MCP 2026-07-28 发布。"
    }
  }
};
