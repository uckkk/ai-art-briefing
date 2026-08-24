window.BRIEFING = {
  meta: {
    date: "2026-08-24",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "MiniMax H3 从「出片」走进可复用生产：绿幕假人两步角色替换、精灵动画连续帧、12GB 卡拆三镜拼 30 秒——周末社区把 H3 走成了 ComfyUI 配方，而不是又一个 demo 模型。",
    "Seedance 2.5 坐进 CapCut 剪辑台：R2V（参考驱动视频）吃白模/绿幕运镜，Intelligent Edit 按时间戳局部返工——AI 视频第一次真正嵌进「生成 → 精修 → 出片」一条工作区。",
    "算力涨价碰上开源用量搬家：NVIDIA 通知大客户 AI 服务器涨价超 15%（2027 年初出货）；Vercel AI Gateway 开源权重 token 份额两月从 28% 到 62%。美术 Agent 必须分层：开源扛量，旗舰拍板。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "MiniMax H3：绿幕假人替换 + 精灵动画 + 12GB 本地成片，视频模型进入「配方期」",
          summary: "7 月 31 日 MiniMax 发布 H3（消费端名 Hailuo 3.0）：原生 2K、最长 15 秒、同pass 立体声音频，2K 单价号称不到主流三分之一。真正新的是周末到周一的生产配方：① 绿幕假人两步角色替换——先把原角色换成绿幕 crash-test dummy，再换目标角色，避开相似面孔特征融合（ComfyUI 建议 Balance 模式，第一步预览没有覆盖层基本会失败）；② Ref2Va（参考驱动音视频）一张参考图 + 场景表即可出片，六格分镜约五格跟图、遵循度约 90%；③ 精灵动画连续帧可直接接游戏/动画管线；④ 12GB 卡把 30 秒带音频拆成三镜再拼接，约 14 分钟出片；⑤ 低分先出再放大到 2560×1440。局限：0.6MP 中远人脸糊/扭，提示词服从过高会省掉微动、画面发僵。",
          links: [
            { label: "MiniMax 官方：MiniMax H3", url: "https://www.minimax.io/blog/minimax-h3" },
            { label: "AGI HUNT 日报 8/24：H3 工作流 / 绿幕假人 / 精灵动画", url: "https://agihunt.info/daily/latest" },
            { label: "Hailuo 3 vs Seedance 2.5 vs Veo / Kling（选型对照）", url: "https://aicreatorhub.net/news/hailuo-3-seedance-2-5-vs-veo-kling-sora-video-ai-2026" }
          ],
          value: "H3 不再是「再测一个视频模型」，而是能进买量/角色替换/2D 精灵批产的配方。绿幕假人两步对「同一角色换皮、同一口播换背景」是直接生产力——以前相似脸一换就融，现在有可复现的规避路径。精灵连续帧对 2D 游戏是现成的动作草稿，别当最终交付，当「原画→动画」的中间层。12GB 笔记本能跑，外包/远程美术不用抢专业卡。",
          impact: "视频赛道的分水岭已经不是「谁画面更漂亮」，而是「谁先沉淀成可复制的 ComfyUI 节点」。H3 这一周被社区走成配方，Seedance 2.5 被嵌进剪辑台——模型能力开始让位于工作流所有权。"
        },
        {
          idx: "02",
          title: "Seedance 2.5 进 CapCut：R2V 白模/绿幕 + Intelligent Edit，AI 视频第一次坐上剪辑台",
          summary: "上周五写过即梦预热 Seedance 2.5 的 3D 白模控制。这一窗新信号是产品化：CapCut 官方页确认 Seedance 2.5 已在剪辑器里可选——App AI Lab / Web Video Studio / 桌面 AI Video。关键能力不再是「再出一条 30 秒」：① R2V 吃绿幕或白模（clay render）参考，按运动路径调度角色站位和场面，而不是纯靠提示词赌镜头；② Intelligent Edit 按时间戳/角色/物体/区域改，不整条重生成；③ 标准模式原生 30 秒 4K 一镜，beta 长视频多轮延到 180 秒；④ 最多 50 个全模态参考；⑤ 原生立体声音频同pass。社区已有人用 CapCut Web 一条工作流做完整短片。",
          links: [
            { label: "CapCut 官方：Seedance 2.5 for Video Editor", url: "https://www.capcut.com/features/seedance-2-5-for-video-editor" },
            { label: "DailyTopAI：用 Seedance 2.5 在 CapCut Web 一条工作流做短片", url: "https://dailytopai.com/article/i-made-an-ai-short-film-with-seedance-25-in-a-single-workflow-759.html" }
          ],
          value: "3D 白模控制如果只停在即梦独立产品里，美术还要「生成完再导出再剪」。进 CapCut 意味着预演白模、生成、局部返工、字幕调色导出可以待在同一个工作区——买量素材和 CG 预告的返工成本会掉一截。R2V 吃白模，正好对上你们 Blender 里已经会搭的东西。先测一条真实需求：白模运动轨迹 → CapCut 生成 → Intelligent Edit 改一个道具。",
          impact: "AI 视频的「编辑器化」比「模型升级」更值钱。谁先把生成嵌进剪辑时间线，谁就拿走制作链路。独立 Sora 应用已经退场、API 9/24 停服，CapCut 这条路是国内团队最不需要换工具习惯的迁移选项。"
        },
        {
          idx: "03",
          title: "Block3D：文生 3D 端到端 4.99 秒，块扩散比自回归快 5.15 倍",
          summary: "8 月 19 日（arXiv 21 日上新）浙大 ZIP Lab 放出 Block3D：把离散 shape token 切成连续块，块与块之间自回归、块内联合去噪，再加置信度引导的块内纠错——低置信 token 在块封板前可改，缓解自回归「错了不能回头」。在 TRELLIS-500K 留出集上，端到端从 25.71 秒降到 4.99 秒，相对微调后的自回归基线 5.15×，几何保真度不掉（F-score@1% 0.309，法线一致性 0.668）。项目页有可交互 3D 结果。",
          links: [
            { label: "arXiv 2608.19567：Block3D", url: "https://arxiv.org/abs/2608.19567" },
            { label: "Block3D 项目页", url: "https://alexandertsui.github.io/block3d/" }
          ],
          value: "5 秒文生 3D 把「策划一句话出白模看形」推进到交互速度——关卡会、武器脑暴、道具选型可以当场出十几套，不用等分钟级排队。注意这是研究框架，不是即开即用的生产 API；先当预演/选型加速器，别当进引擎资产。和 Meshy T2 的 6 秒图生网格是同一周信号：3D 生成正在从「等一杯咖啡」变成「刷新一下」。",
          impact: "3D 生成的瓶颈从「像不像」切到「够不够快、错了能不能改」。块扩散是自回归和全局扩散之间的第三条路——有局部纠错，又不把整坨表征反复算一遍。谁先把这个速度做成 API，谁拿走概念阶段的 3D 脑暴市场。"
        },
        {
          idx: "04",
          title: "Meshy T2：6 秒原生网格，面数预算 + 多部件一次出，网格生成进入交互时代",
          summary: "Meshy 8 月 12 日发博、18 日上 Hugging Face：T2 用流匹配直接出顶点和连通性，不走 Marching Cubes，也不走 MeshGPT 式逐 token 自回归。中位图生网格 6 秒，比自回归基线快一个数量级；重拓扑 3 秒。每个顶点一个连续 token，不量化、不焊接，艺术家拓扑和开放边界能保住。用户给一个顶点预算带（500–4000），闭三角网格大约 F≈2V。多部件（桌椅背包机械）一次生成自然分件，不用再拆再缝。论文 arXiv 2607.28675，代码和权重大概即将开源；生产图生 3D 仍走 Meshy 现有产品，T2 是下一代管线的研究底座。",
          links: [
            { label: "Meshy 官方博：Meshy T2 Native 3D Mesh Generation", url: "https://www.meshy.ai/blog/meshy-t2-native-3d-mesh-generation" },
            { label: "Hugging Face：Meshy T2", url: "https://huggingface.co/blog/meshy-ai-team/meshy-t2-native-3d-mesh-generation" }
          ],
          value: "上周五写的是 Meshy 7 的 30 秒绑骨——「能跑」。T2 解决的是更前面一截：网格本身能不能在交互速度下、按面数预算、带着分件结构出来。对中低模道具/场景件，6 秒 + 面数带 + 天然分件，意味着「概念图 → 可进引擎的低模草稿」可以压到分钟级。Hero 角色别指望一次过；先拿 10 个硬表面道具测面数带和分件是否真能少一次手工拆件。",
          impact: "AI 3D 正在同时打两场：Meshy 7 打「网格 + 绑骨」，T2 打「原生拓扑 + 速度」。谁能把这两段接成一条 API（图 → 预算网格 → 分件 → 绑骨），谁拿走中低模批产。现在还是两截，但方向已经清楚。"
        },
        {
          idx: "05",
          title: "VideoCoCo：可执行 Blender 代码当思维链，物理合理的视频终于有了可检查的中间层",
          summary: "中科大 / 港中文等提出 VideoCoCo（Code-as-CoT，代码即思维链）：提示词先让编码 Agent 写出 Blender 程序，沙盒跑出确定性白模草稿，再交给视频编辑模型按草稿「换皮」成片。PhyGenBench 从 0.475 到 0.558，VBench-2.0 从 52.18 到 77.88。教师编辑器用的是 Seedance 2.0，数据集 VideoCoCo-3K 是草稿–指令–目标三元组。今天 AGI HUNT 把它放进研究头条，针对黄油不融化、瓶子不变形这类物理翻车。短板：推理更慢，复杂流体仍受 Blender 模拟器限制。",
          links: [
            { label: "arXiv 2607.27380：VideoCoCo", url: "https://arxiv.org/abs/2607.27380" },
            { label: "AGI HUNT 日报 8/24：VideoCoCo / 可执行代码驱动视频", url: "https://agihunt.info/daily/latest" }
          ],
          value: "这和 Seedance 2.5 的 3D 白模控制是同一条路的两边——一边是产品已经让你上传白模，一边是研究在自动写白模脚本。游戏 CG 最怕的不是画面假，是运动假。把「Blender 预演 → AI 换皮」写成标准预演步骤，宣传片和技能演示的物理翻车会少很多。现在就能手搓：Blender 出白模运动，Seedance/H3 做 draft-conditioned 精修。",
          impact: "视频模型的控制权正在从提示词语言退回到 DCC 中间层。白模、相机轨迹、可执行代码，都是「导演能检查、能改、能回放」的东西。提示词抽卡会继续存在，但专业管线会慢慢只认结构化中间层。"
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
          title: "NVIDIA 通知大客户：AI 服务器涨价超 15%，2027 年初出货",
          summary: "8 月 22 日彭博社：NVIDIA 已通知部分最大客户，搭载其 AI 芯片的服务器（含 Vera Rubin、Grace Blackwell）多数情况下涨价超过 15%，2027 年初出货系统生效。幅度看芯片代际和内存配置。合同代工厂已转告微软、Google、Oracle 等。主因是三星 / SK 海力士 / 美光的存储涨价，NVIDIA 自己也吞不下。CNBC、路透同日跟进。",
          links: [
            { label: "CNBC：Nvidia customers warned about AI-related price hikes", url: "https://www.cnbc.com/2026/08/22/nvidia-customers-reportedly-warned-about-ai-related-price-hikes-.html" },
            { label: "Reuters：price hikes above 15%", url: "https://www.reuters.com/business/nvidia-customers-notified-about-ai-related-price-hikes-above-15-bloomberg-news-2026-08-22/" }
          ],
          value: "云端生图/生视频/3D 的单价不会立刻跳，但 2027 的算力预算要按「至少 +15%」重做。本地侧：现在能锁定的 4090/5090/专业卡不要再等「明年更便宜」；视频生成实测专业卡往往只比 5090 快 10–15%，租金却翻倍——买的是显存，不是速度。",
          impact: "存储墙已经强过 GPU 墙。卖方定价权在内存厂，不在黄仁勋。美术生产的长期策略是「少依赖单家云 GPU，多准备可迁的本地/开源备胎」。",
          conduction: "算力涨价 → 云端按秒计费的视频/3D 会跟涨 → 现在锁 2026 Q4–2027 的渲染/生成预算，把能过夜的批量任务（道具批产、买量多版本、质检）迁到本地卡或开源权重；采购下一批工作站按「显存优先、别为 10% 速度付一倍租金」选型。"
        },
        {
          idx: "02",
          title: "Vercel：开源权重 token 份额两月从 28% 到 62%，但钱还在闭源旗舰",
          summary: "8 月 22 日 Vercel CEO Guillermo Rauch 公开：当天 AI Gateway 开源权重 token 占比 62%，闭源 38%；两个月前（6/24）开源 28.4%。四月还只有 11%。同一组数据更刺眼：开源吃走了量，却只拿走不到 9% 的花费；七月 Anthropic 用约 30% 的量拿走约 65% 的网关支出。62% 是单日纪录、周六流量偏实验，当领先指标，别当月度审计数。",
          links: [
            { label: "CryptoBriefing：Vercel open-weight models hit 62%", url: "https://cryptobriefing.com/vercel-open-weight-models-62-percent-august/" },
            { label: "FourWeekMBA：开源吃量、Anthropic 吃钱", url: "https://fourweekmba.com/ai-vercel-ai-gateway-open-weight-volume-spend-barbell/" }
          ],
          value: "美术 Agent（看图质检、改 prompt、写 ComfyUI、抽 3D 元数据）里，80% 的调用不需要旗舰。开源/本地（Qwen 3.8 27B、DeepSeek V4 Flash）扛量，Claude/GPT 只留在「看不懂、要拍板」的 20%。这是唯一能同时扛住 NVIDIA 涨价和旗舰贵价的结构。",
          impact: "模型层在杠铃化——左边海量便宜 token，右边少量贵决策。还把所有美术 Agent 绑在一个旗舰上的团队，会先被账单教训。",
          conduction: "Agent 用量结构 → 立刻盘点现有美术 Agent 的调用：哪些是看图打分/改 prompt/写 JSON（可下沉开源），哪些是风格终审/复杂分镜（留旗舰）；本周内做一版「开源扛量 + 旗舰拍板」路由，目标把旗舰 token 压到总调用的 20% 以下。"
        },
        {
          idx: "03",
          title: "DeepSeek：周末全天低谷价（8/23 生效）+ V4-Flash-Vision-Exp 能看图",
          summary: "DeepSeek 官方价目写明：高峰只在周一到周五 01:00–04:00、06:00–10:00 UTC（北京时间 09:00–12:00、14:00–18:00），其余时间含整个周末都是低谷价，约为高峰一半。8 月 23 日 0 点（北京时间）起周末不再分峰谷。V4-Pro 高峰输出约 $3.96/百万 token，低谷 $1.98；V4-Flash / V4-Flash-Vision-Exp 低谷输出 $0.66。Vision-Exp 按尺寸把图折成输入 token。社区已有人在 Codex 额度用尽后，把 Vision-Exp + DeepSeek Harness 拿来看图干活。",
          links: [
            { label: "DeepSeek 官方价目（峰谷 + Vision-Exp）", url: "https://api-docs.deepseek.com/quick_start/pricing" },
            { label: "机器之心：周末全天低谷价 8/23 生效", url: "https://eu.36kr.com/en/p/3951308056099972" }
          ],
          value: "批量生图质检、提示词改写、3D 元数据抽取、Spine JSON 校验——这些不赶白天的活，周六日全天按半价跑。Vision-Exp 补上了 V4 家族最缺的「看图」，配上已经在跑的 dsh，周末可以真的把「看图→打分→改 prompt」闭环过夜。",
          impact: "API 在学电网：高峰赶人，低谷填谷。会排期的团队，账单能差一倍。这不是小优惠，是生产排班要改的信号。",
          conduction: "排班 → 本周六日起把不赶点的美术 Agent 批处理（质检、打标、多版本 prompt、元数据）切到 DeepSeek 低谷价；顺手用 20 张图测 V4-Flash-Vision-Exp + dsh 看图打分，能过线就把白天旗舰质检挪走一半。"
        }
      ]
    }
  },
  actions: [
    "H3 绿幕假人角色替换 PoC：挑 1 个买量角色，按「原角色 → 绿幕 dummy → 目标角色」两步在 ComfyUI 跑通，记录融合失败率和可用率；顺手测一版精灵连续帧能不能当 2D 动作草稿。",
    "Seedance 2.5 × CapCut 真需求：用 Blender 白模 + 运动轨迹，在 CapCut Web/桌面跑一条游戏 CG/买量片，重点测 R2V 空间稳定性和 Intelligent Edit「只改一个道具」的返工成本。",
    "3D 交互速度摸底：同一批 10 个硬表面道具，对比 Block3D（文生，研究向）概念速度 和 Meshy T2/现有 Meshy 图生网格（6 秒级、面数预算、分件），输出「概念预演用谁、进引擎草稿用谁」。",
    "Blender 白模预演 + AI 换皮：手工走一遍 VideoCoCo 的生产版——Blender 出物理正确的白模运动，Seedance/H3 做外观精修，沉淀成预演标准步骤。",
    "账单分层 + 周末低谷：盘点美术 Agent 调用，开源/V4 扛量、旗舰拍板；本周末把质检/打标/元数据批处理切到 DeepSeek 低谷价，并测 Vision-Exp 看图打分。"
  ],
  timeline: {
    current: "2026-08-24",
    nodes: [
      { type: "day",   date: "2026-08-24", label: "08-24" },
      { type: "week",   id: "w35", label: "W35", range: "08-24 ~ 08-30", focus: "H3 被社区走成可复用生产配方（绿幕假人/精灵帧/12GB 成片）；Seedance 2.5 坐进 CapCut 剪辑台（R2V 白模 + 局部返工）；Block3D/Meshy T2 把 3D 生成推进到 5–6 秒交互速度；NVIDIA 涨价 15% 碰上 Vercel 开源用量 62%，美术 Agent 必须分层。" },
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
      { type: "month",  id: "m202608", label: "8月", range: "08-01 ~ 08-24", focus: "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 3D 白模视频工作流并坐进剪辑台 + 开源视频世界模型（LTX-2.5 22B）+ Comfy MCP 批量生产 + 3D 生成进入 5–6 秒交互速度 + 开源 token 用量过半。AI 美术生产从单点工具进入工具链编排与成本分层阶段。" },
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
