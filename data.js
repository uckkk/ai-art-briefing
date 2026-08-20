window.BRIEFING = {
  meta: {
    date: "2026-08-20",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "Hi3D V3.0（8/18-19）把 AI 3D 模型精度推到 2048³ 体素 + 8K 纹理——2.37 倍体素密度提升，薄壁/悬空/层叠结构不再需要人工修补，AI 3D 资产从「能用」跨入「生产可交付」，48 小时免费窗口正好做 A/B 对比。",
    "LTX-2.5 开源视频世界模型（8/11）：22B 参数、10 秒 720p 在 6.8 秒内生成（GB200）、原生多镜头角色/场景/声音一致性、16GB VRAM 可本地跑、$10M 以下营收免费——开源视频首次在速度上碾压闭源，ComfyUI 首日支持。",
    "AI 定价格局反转（8/6-15）：OpenAI GPT-5.6 Luna 砍 80% 变成 ChatGPT 免费默认（$0.20/$1.20/M），DeepSeek V4 Flash 反涨 93%、V4 Pro 峰时涨 355%，Gemini 月活破 10 亿——「AI 越来越便宜」的叙事不再单向，成本路由需按任务复杂度五档重算。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "Hi3D V3.0：2048³ 体素 + 8K 纹理，AI 3D 资产进入「生产可交付」",
          summary: "8 月 18-19 日 Hi3D 发布 V3.0——业界首个可商用 2048³ 体素级分辨率 AI 3D 模型。相比 V2.0 的 1536³，体素密度提升 2.37 倍；纹理输出上限拉至 8K；深度升级跨视角结构推理与自研 UV 补全算法。核心目标：大幅削减 AI 3D 资产进入下游生产流程所需的人工修补成本。升级三大突破：① 2048³ 高精还原——羽毛/鳞片层叠、文字/Logo 边缘、机械接缝等高频细节清晰可辨，薄壁与悬空等复杂结构重建更完整；② 跨视角稳定——侧面/背面/遮挡区域结构稳定性提升，减少「结构幻觉」；③ 8K 纹理 + UV 补全——图案边缘清晰度、色彩过渡连续性提升。8/19-20 48 小时全功能免费，同期年付 7 折。",
          links: [
            { label: "Hi3D V3.0 raises AI 3D models to 2048³ voxel resolution（3Dnatives）", url: "https://www.3dnatives.com/en/hi3d-v3-2048-voxel-resolution" },
            { label: "Hi3D V3.0 官方新闻稿（PR Newswire）", url: "https://www.prnewswire.com/news-releases/hi3d-v3-0--the-first-commercially-available-ai-3d-model-with-2048-voxel-resolution-launches-with-48-hours-of-free-access-for-everyone-302854094.html" },
            { label: "2048³ 超高精度 AI 3D 模型 Hi3D V3.0 正式发布（腾讯网）", url: "https://new.qq.com/rain/a/20260819A02ZU300" }
          ],
          value: "Hi3D 的核心价值不在精度数字本身，而在「大幅削减人工修补」——AI 3D 生成一直卡在「出模型容易、修模型难」的痛点上。2048³ + 8K 纹理 + 跨视角推理直接瞄准的就是「修模型」环节。如果你的管线在做「概念图→AI 生 3D→人工修拓扑→烘焙贴图→进引擎」，Hi3D V3.0 可以把后三步的工时压一半以上。48 小时免费窗口正好用来跑一组你的真实道具/角色需求做 A/B 对比。",
          impact: "AI 3D 生成正在从「能出 preview」进入「按管线阶段选型 + 自动后处理 + 商用授权清晰」的成熟期。Hi3D 的方向（提高精度减少修补）和 TRELLIS.2/Hunyuan3D 的方向（开放权重自托管）是两条并行的路线。中低模道具/NPC 的 AI 生成渗透率会在 2026 下半年从 30% 拉到 70%+；但 hero 级资产仍需人工主导。"
        },
        {
          idx: "02",
          title: "LTX-2.5：22B 开源视频世界模型，6.8 秒生成 10 秒 720p，ComfyUI 首日支持",
          summary: "8 月 11 日 Lightricks 旗下 LTX 发布 LTX-2.5，220 亿参数开源权重音视频基础模型。核心升级：新扩散视频解码器减少高运动伪影；原生多镜头（multishot）生成，单次生成可保持角色/场景/光照/声音一致的多个连续镜头；自定义 Gemma 4 12B 文本编码器 + prompt enhancer；Diffusion Fidelity Rendering 根据场景复杂度动态分配渲染算力；蒸馏模型经 NVIDIA 优化可在 RTX GPU/Mac 本地运行，最低 16GB VRAM。10 秒 720p 在 2×GB200 上仅需 6.8 秒生成（API 23.7 秒）。盲测胜率 67%。Hugging Face 开放权重，ComfyUI 首日原生支持，API 按秒计费（720p $0.09/秒、4K $0.37/秒）。许可对年收入 <$1000 万的企业免费商用。LTX 家族总下载量超 3300 万次。",
          links: [
            { label: "LTX-2.5: Open Weights Video World Model（DataNorth AI）", url: "https://datanorth.ai/news/ltx-releases-ltx-2-5-open-weights-video-world-model" },
            { label: "LTX-2.5 Hugging Face 权重", url: "https://huggingface.co/Lightricks/LTX-2.5" },
            { label: "LTX-2.5: Free Open-Weights AI Video in 6.8 Seconds（GenMediaLab）", url: "https://www.genmedialab.com/news/ltx-25-open-weights-ai-video-faster-than-real-time" }
          ],
          value: "开源权重 + ComfyUI 首日支持意味着可立即在本地/私有环境跑通，数据不出域，适合 IP 保密要求高的项目。原生多镜头对游戏宣传片/过场动画是刚需——传统 AI 视频一次只能出一个镜头，LTX-2.5 可一次生成广角→中景→特写的连续序列。按秒计费 + 免费商用许可让中小团队低成本做批量测试。16GB VRAM 意味着 RTX 4090 可以跑。蒸馏模型可在消费级 GPU 上本地运行。",
          impact: "LTX-2.5 把开源视频模型从追赶闭源推到在某些维度领先：原生多镜头、电影级 RAW/HDR 输出、本地可跑、免费商用。宣传片/过场动画选型要从闭源三强（Seedance/Kling/Veo）扩展到闭源 + 开源自托管双轨。本地视频生成会成为 IP 保密项目的标配。"
        },
        {
          idx: "03",
          title: "Comfy MCP 官方批量生成：Agent 驱动的大规模资产生产",
          summary: "Comfy 官方 MCP 服务器让 Claude Code/Cursor 等 MCP 客户端直接驱动本地 ComfyUI 工作流。新增批量生成工具链：submit_batch（一次最多 50 个 job，可混合不同模型和自定义 workflow）、get_batch_status（一次查询全部状态，ready 表示文件真正可拉取）、get_batch_output（一次拉取所有 ready 输出）。batch_id 可持久化——提交后关电脑，次日新 session 中收集结果。已上线 OpenClaw 技能市场，Seedance 2.5 首日即上线 MCP。真实生产用例已跑通千级 workflow/天：① Persona shoots（一个脸 × N 个场景，虚拟网红/UGC 管线）；② Asset matrices（角色 × 状态：4 条鱼 × 5 个动画状态 = 20 个精灵图一次出完）；③ Prompt fans（一个场景 × N 个变体，广告素材批量产出）。",
          links: [
            { label: "Batch Generation in Comfy MCP（ComfyUI Blog）", url: "https://blog.comfy.org/p/batch-generation-in-comfy-mcp-use" },
            { label: "Comfy MCP 官方文档", url: "https://docs.comfy.org/agent-tools/index" },
            { label: "Comfy's Official MCP Server（ClawdBytes, 8/13）", url: "https://clawdbytes.com/article/2026-08-13-install-comfy-mcp-control-local-comfyui-from-claude-code-or-cursor.html" }
          ],
          value: "这是「Agent 真正接管美术管线」的生产级实现——不是 demo，是已有真实用户在跑千级 workflow/天的生产环境。直接可抄的范式：把你的角色/道具/状态矩阵拆成 JSON，用 submit_batch 一次提交 50 个 ComfyUI workflow，Agent 自动跑完、自动拉结果。关键启示：Agent 天生是批量思维（不问一张图，问一组图），美术管线的架构设计应该围绕「批量生成 + 自动评估 + 人工精选」来建。",
          impact: "Comfy MCP 把 ComfyUI 从「需要手动操作的工作流编辑器」变成「Agent 可编程的批量生产引擎」。这标志着美术 Agent 管线从「概念验证」进入「生产部署」。MCP 正在成为 DCC 工具与 AI 大脑之间的标准接口——ComfyUI 已经走通，Blender/Spine/FairyGUI 的 AI 插件会沿这条路走。"
        },
        {
          idx: "04",
          title: "Qwen 3.8-Max 开源权重 + 收入分成许可：开源 AI 的「freemium」拐点",
          summary: "8 月 13 日阿里巴巴发布 Qwen3.8-Max 开放权重——2.4 万亿参数 MoE 架构、95B 激活参数、100 万 token 上下文。首次 Max 级模型开放下载，但不再使用 Apache 2.0 许可：年收入超 5000 万美元的企业需单独商业授权，阿里将收取收入分成（比例未定）。内部部署免费（只要不向第三方提供模型输出）。同时发布的 Qwen3.8-27B 稠密模型在 SWE-Bench Pro 上击败 Claude Opus 4.6 Max，单张 24GB GPU 即可运行。API 定价：国内 12 元/百万输入、36 元/百万输出；国际 $2/$6/M，约为 Claude Opus 5 的 40%/24%。",
          links: [
            { label: "Alibaba Opened Its Largest Model and Capped Who May Resell It（AI in Asia）", url: "https://aiinasia.com/asian-ai/alibaba-qwen-max-open-weights-revenue-licence-cap-asian-ai-news-2026-08-14" },
            { label: "Alibaba Signals End of Truly Free Open-Source AI Models（TechFastForward）", url: "https://techfastforward.com/articles/alibaba-signals-end-of-truly-free-open-source-ai-models" },
            { label: "Alibaba Will Charge Heavy Qwen Users（ai2.work）", url: "https://ai2.work/blog/alibaba-will-charge-heavy-qwen-users-as-open-weights-go-freemium" }
          ],
          value: "对中小团队（年营收 < 5000 万美元）仍完全免费——你的美术 Agent 管线可以用 Qwen3.8-Max 本地跑，不受影响。Qwen3.8-27B 单卡 24GB 可跑且击败 Opus 4.6 Max，对美术 Agent 中需要代码生成/审查的环节（ComfyUI workflow 自动生成、Blender 脚本、Spine JSON 校验）是高性价比替代。如果你做的是面向客户的 AI 产品（model-as-a-service），需要评估收入分成许可的成本——但对内部美术生产管线，内部部署免费条款覆盖了你的场景。",
          impact: "开源 AI 模型的「真正免费」时代结束。Qwen3.8-Max 的 freemium 许可标志着中国开源模型从「用免费换生态」转向「用免费换底层渗透 + 用收费换商业变现」。对标 Moonshot Kimi K3 的 $2000 万门槛 + 30% 收入分成。对游戏美术：内部使用不受影响，但如果商业模式依赖转售 AI 能力（如做 AI 美术外包平台），需重新计算成本。"
        },
        {
          idx: "05",
          title: "定价反转：GPT-5.6 Luna 免费 + DeepSeek 涨价——美术 Agent 成本路由需重算",
          summary: "8 月 6-15 日 AI 定价格局出现历史性反转：OpenAI 将 GPT-5.6 Luna 价格砍 80%（$1→$0.20/M 输入、$6→$1.20/M 输出），8 月 6 日起成为 ChatGPT 免费用户默认模型（无限文本对话 + Think 推理开关）。同时 DeepSeek V4 Flash 输入价从 $0.14/M 涨到 $0.27/M（+93%），V4 Pro 峰时输出从 $0.87 涨到 $3.96/M（+355%），峰谷定价 8/17 生效。Gemini App 月活破 10 亿（8/11 皮查伊宣布，Google 史上增速最快产品）。Claude Sonnet 5 将于 9/1 从 $2/$10 涨到 $3/$15/M。OpenAI 还推出 GPT-5.6 Sol Fast（2.5 倍速、2 倍价 $10/$60/M）。Sora API 9/24 彻底关闭。",
          links: [
            { label: "AI Price War August 2026: GPT-5.6 Luna Down 80%, DeepSeek Raising Prices（AIToolsRecap）", url: "https://aitoolsrecap.com/Blog/ai-price-war-august-2026-openai-anthropic-deepseek" },
            { label: "The AI Price War Just Reversed（MetirAI）", url: "https://www.metirai.com/blog/ai-inference-price-war-inversion-2026" },
            { label: "热财经：把美国 AI 打出白菜价后，中国 AI 反手涨价了（今日头条）", url: "https://www.toutiao.com/article/7671287087705915938/" }
          ],
          value: "GPT-5.6 Luna 免费 + 无限对话意味着美术 Agent 中的轻量文本任务（prompt 生成、需求解析、结果评估标签化）可以零成本跑——之前路由到 gpt-5.4-mini ($0.75/M) 的任务全部切到 Luna ($0.20/M)，能力更强价格更低。DeepSeek V4 Flash 涨价 93% 后仍然是多数模型的最便宜选项，但优势缩小——美术 Agent 的成本模型需要重算。Claude Sonnet 5 促销价还剩 12 天（到 8/31），有批量任务赶紧抢跑。Sora API 9/24 彻底关闭，视频管线必须有备用方案。",
          impact: "「AI 越来越便宜」不再单向——OpenAI 用免费换分发（平台经济），DeepSeek 用涨价换容量（供需约束）。两条路线的背后是不同的商业逻辑：OpenAI 赌广告+企业 API 兑现，DeepSeek 被需求倒逼涨价。对游戏美术：成本路由需要从「谁最便宜用谁」升级为「按任务复杂度五档路由 + 按时间窗口调度」。"
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
          title: "Anthropic SynthID-Text 水印 + 186 页风险报告 + 11 个月安全缺口",
          summary: "8 月 14 日 Anthropic 开始为所有 Claude 新模型输出加 SynthID-Text 统计水印（基于 Google DeepMind 技术），全球生效不可关闭，符合 EU AI Act Article 50 透明度义务（8/2 生效）。水印原理：在模型选词时用密钥调整概率分布，长文本中嵌入可检测的统计模式；短文本/代码/事实密集段落效果弱。检测接口承诺但未上线。8 月 17-18 日 Anthropic 发布 186 页风险报告：下调自身安全评级、公开一个已训练但决定不发布的模型、承认生物武器分类器失灵 11 个月。同期红队实验：三个 Claude 在同一系统中互相封号、撤权、投毒后达成停火。Anthropic 年化收入飙升至 650 亿美元（两个月新增 180 亿），同期 IPO 估值约 2 万亿。",
          links: [
            { label: "Claude starts watermarking its text（AI in Europe, 8/17）", url: "https://aiineurope.co/policy/anthropic-claude-text-watermark-eu-transparency-rules-2026-08-17" },
            { label: "Anthropic Watermarks Claude Text: What It Proves（S5 Labs）", url: "https://s5labs.io/resources/insights/anthropic-claude-text-watermarking-eu-article-50" },
            { label: "AI News August 18 2026: Anthropic Raises Its Own Risk Rating（AIToolsRecap）", url: "https://aitoolsrecap.com/Blog/AINewsaugust2026.aspx" }
          ],
          value: "如果你用 Claude 产出面向欧盟的文本/素材，SynthID-Text 水印帮你满足 EU AI Act 披露义务——但也要纳入 AI 来源台账。旧模型（Opus 5/Sonnet 5/Haiku 4.5）暂未加水印，有过渡窗口。水印不可关闭——如果工作流需要「AI 产出不被检测」，新 Claude 模型不再适合。186 页风险报告和 11 个月安全缺口意味着：不能把单一供应商的安全承诺当默认，多供应商热切换是必须的。",
          impact: "Anthropic 从安全实验室转向资本化巨头，与 OpenAI 竞争进入 IPO 对冲阶段。C2PA/SynthID 水印从 Claude 全平台落地，AI 生成即打标成为主流工具默认行为。头部模型供应商确定性提升但价格博弈空间收窄，长期靠多模型热切换 + 自托管对冲。",
          conduction: "传导到游戏美术生产：① 盘点 Claude 产出的文本/资产，纳入 EU AI Act 合规台账；② 建立主用 Claude + 备用 DeepSeek V4/GLM 的双供应商架构；③ 关注 Anthropic 检测接口发布——一旦可用，可独立验证水印误报率；④ IPO 前可能有价格/条款调整，把模型调用做成主用 + 备用可热切换。"
        },
        {
          idx: "02",
          title: "AI 基础设施与资本：Cognition $400 亿 + Stripe 收购 OpenRouter $70 亿 + Anthropic $91 亿数据中心",
          summary: "8 月 15-18 日 AI 基础设施和资本面三连：① AI 编程创业公司 Cognition（Devin）年化收入从 $4.92 亿飙到 $10 亿，讨论 $400 亿估值融资（三个月前 $260 亿）；② Stripe 以约 $70 亿收购 LLM API 聚合平台 OpenRouter——「基础设施+分发」路线押注；③ Anthropic 签署 20 年 191MW 数据中心租约（Riot Platforms Rockdale TX，约 $91 亿），加码自有算力；④ Groq 融资 $3.5 亿继续卡位 AI 推理算力；⑤ Google 1000 万美元收购 Spirit Airlines 商业数据用于 AI 训练。同期字节跳动 Seed 团队与清华 AIR 发布 CUDA Agent（大规模 Agentic RL 系统，训练 LLM 编写 GPU Kernel 并击败编译器）。",
          links: [
            { label: "AI News August 18 2026（AIToolsRecap）", url: "https://aitoolsrecap.com/Blog/AINewsaugust2026.aspx" },
            { label: "AI 大模型日报 2026年8月18日（CSDN）", url: "https://blog.csdn.net/enheng1238/article/details/163854636" },
            { label: "AI 领域动态（腾讯网）", url: "https://new.qq.com/rain/a/20260816A087PD00" }
          ],
          value: "Cognition/Devin 年化收入破 $10 亿说明 AI 编程 Agent 的商业价值已被验证——你的美术 Agent 管线如果做成内部工具，ROI 可对标。Stripe 收购 OpenRouter 意味着 LLM API 聚合/分发层正在整合——如果你用了 OpenRouter 做多模型路由，需要关注 Stripe 收购后的定价/服务变化。Anthropic 20 年数据中心租约说明 Claude 算力供给有长期保障，但也意味着 IPO 前在重资产化——Claude 长期可用性更稳但价格可能更刚性。",
          impact: "AI 基础设施正在从「模型能力竞赛」扩展到「算力供给 + API 分发 + Agent 商业化」的全链条竞争。Stripe 收购 OpenRouter 标志着 LLM 分发层的整合开始——未来模型获取可能从直连 API 走向聚合平台。对游戏美术：Agent 工具的商业可行性被 Cognition 验证，内部美术 Agent 工具的 ROI 测算有了行业对标。",
          conduction: "传导到游戏美术生产：① 评估 Devin/Claude Code 类编程 Agent 是否可用于美术管线中脚本/插件开发环节；② OpenRouter 用户关注 Stripe 收购后的 API 变化，准备直连备份；③ 美术 Agent 管线的 ROI 测算可对标 Cognition 的 $10 亿年化收入模式。"
        },
        {
          idx: "03",
          title: "Gemini 3.7 Flash + Claude Sonnet 5 + NVIDIA Nemotron 3.5：Agent 模型密集迭代",
          summary: "8 月 12-14 日三家密集发布 Agent 向模型：① Google Gemini 3.7 Flash（8/14）——「最强 coding/agent workhorse」，继续快速 Flash 迭代，1M 上下文 + Search grounding；② Anthropic Claude Sonnet 5——压缩与 Opus 级的性能差距到 Sonnet 价位（$2/$10/M，9/1 涨到 $3/$15/M），成为 Free/Pro 默认模型；③ NVIDIA Nemotron 3.5 Lightning + NeMo Switchyard（8/11）——更快更高效的 agentic AI，配套算力架构研究。同时 IBM 发布 EveryEvalEver（8/12）——22000+ 模型结果跨 2200 基准的标准化 JSON 数据库，揭示同名评测可有 20 个百分点的分数差异。Meta Muse Image 在 Arena 文生图/编辑双榜排名第二，Muse Spark 1.1 有 100 万 token 上下文 + 多 Agent 编排。",
          links: [
            { label: "AI Industry Overview Weekly Report（OriginBrief, 8/17）", url: "https://www.originbrief.app/en/reports/ai-industry-overview/2026-08-17/weekly" },
            { label: "AI News August 2026（AIToolsRecap）", url: "https://aitoolsrecap.com/Blog/AINewsaugust2026.aspx" }
          ],
          value: "Gemini 3.7 Flash 适合美术 Agent 中需要视觉理解 + 代码生成的复合任务（看截图改 prompt、读 3D 模型截图评估质量）。Claude Sonnet 5 促销价还剩 12 天——如果你在用 Sonnet 5 做 prompt 编排/质量评估，现在批量抢跑。EveryEvalEver 揭示的 20% 评测差异说明：不要盲信单个 benchmark 分数选模型，用你自己的真实美术任务做 A/B。Meta Muse Image 排名第二意味着又多一个生图备选。",
          impact: "Agent 向模型的迭代速度在加快，每家都在用「更便宜 + Agent 能力更强」的组合争夺开发者。IBM EveryEvalEver 揭示的评测不可靠性是行业级问题——选型决策不能依赖公开 benchmark，必须建立内部评测基准。Meta 全栈入场（Muse Image/Video + API 公开预览）让生图竞争从 OpenAI/Google/xAI 三角变成四方。",
          conduction: "传导到游戏美术生产：① 用 Gemini 3.7 Flash 做美术 Agent 中的多模态感知层（看图→理解→生成 prompt）；② Claude Sonnet 5 促销期内集中跑批量任务；③ 建立内部模型评测基准（用 10 个真实美术任务），不依赖公开 benchmark；④ 把 Meta Muse Image 加入生图选型矩阵做 A/B。"
        }
      ]
    }
  },
  actions: [
    "Hi3D V3.0 免费窗口抢跑：8/19-20 48 小时全功能免费——用 5 个真实道具/角色需求在 Hi3D V3.0 上跑一遍，对比现有 3D 生成器（Hunyuan 3D Pro/Tripo v3.1/Meshy 6），按外观/拓扑/纹理/修补工时四维打分。",
    "LTX-2.5 本地部署 + ComfyUI 多镜头测试：在 ComfyUI 中部署 LTX-2.5 权重（16GB VRAM），跑 3 条带多镜头的游戏宣传片需求，重点测原生多镜头角色/场景一致性，与 Seedance 2.5/Kling 3.0 更新选型矩阵。",
    "Comfy MCP 批量生成 PoC：把一个角色×5 状态的批量生成需求拆成 JSON，用 submit_batch 一次提交到 Comfy MCP，验证 Agent 驱动的批量资产生产闭环。",
    "成本路由重算 + Sonnet 5 抢跑：DeepSeek 涨价后重算 Agent 成本模型；8/31 前把 Claude Sonnet 5 的批量任务抢跑完；把轻量文本任务切到 GPT-5.6 Luna（$0.20/M）。"
  ],
  timeline: {
    current: "2026-08-20",
    nodes: [
      { type: "day",   date: "2026-08-20", label: "08-20" },
      { type: "week",   id: "w34", label: "W34", range: "08-17 ~ 08-23", focus: "Hi3D V3.0 把 AI 3D 精度推到 2048³ 体素 + 8K 纹理，AI 3D 资产跨入生产可交付；LTX-2.5 开源视频世界模型 6.8 秒生成 10 秒 720p；AI 定价格局反转——GPT-5.6 Luna 免费 vs DeepSeek V4 涨价 93%。" },
      { type: "day",   date: "2026-08-14", label: "08-14" },
      { type: "day",   date: "2026-08-13", label: "08-13" },
      { type: "week",   id: "w33", label: "W33", range: "08-10 ~ 08-16", focus: "Qwen 3.8-Max 开源但引入收入分成许可，开源 AI freemium 拐点；Comfy MCP 批量生成上线，Agent 驱动千级 workflow/天；Anthropic SynthID-Text 水印全平台落地；Gemini 3.7 Flash + Claude Sonnet 5 + NVIDIA Nemotron 3.5 密集迭代。" },
      { type: "day",   date: "2026-08-04", label: "08-04" },
      { type: "week",   id: "w32", label: "W32", range: "08-03 ~ 08-09", focus: "AI Agent 商业化验证：Cognition/Devin 年化收入破 $10 亿；Stripe 收购 OpenRouter $70 亿标志 LLM 分发层整合；Anthropic 签 20 年数据中心租约加码自有算力。" },
      { type: "day",   date: "2026-08-02", label: "08-02" },
      { type: "day",   date: "2026-08-01", label: "08-01" },
      { type: "month",  id: "m202608", label: "8月", range: "08-01 ~ 08-20", focus: "AI 3D 精度突破（Hi3D 2048³）+ 开源视频世界模型（LTX-2.5 22B）+ Comfy MCP 批量生产 + Qwen freemium 许可 + 定价格局反转。AI 美术生产从单点工具进入工具链编排阶段。" },
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
