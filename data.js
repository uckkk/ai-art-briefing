window.BRIEFING = {
  meta: {
    date: "2026-08-26",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "控场链路补齐 Pose 源：SAM 3D Body 8/23 并入 ComfyUI 核心——全身网格、时序平滑、OpenPose/SCAIL 直出，还能 BVH/GLB 进 Blender。昨天 H3 ControlNet 要控制视频，今天实拍抽骨架不用再装自定义节点。",
    "Blender 与生成同屏：Higgsfield 官方插件上线——Scene Builder 出可编辑 blockout，Video 喂 Seedance 2.5，MCP Bridge 让 Agent 改打开的场景。DCC 从「导出再上传」变成「视口里生成」。",
    "本地 H3 加速 + 端侧内存：NVIDIA Sol Engine 在 5090 上把库存 H3 推到约 4.52×；苹果 M5 Ultra Mac Studio 统一内存最高 512GB。云出片、本地跑 Agent，两条产能要一起养。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "SAM 3D Body 进 ComfyUI 核心：实拍 → Pose/BVH 不再靠自定义节点",
          summary: "8/23 kijai PR（ComfyUI #14370）合并：Meta SAM 3D Body 做成核心节点（Loader/Predict/Render/Smooth/FaceExpression）。时序平滑、MediaPipe 表情、OpenPose/SCAIL-pose 渲染、GLB/BVH 导出（Blender 已测）。权重 bf16 与 INT8。注意长视频 GLB 可能脚滑。",
          links: [
            {
              label: "ComfyUI Wiki：SAM 3D Body 原生接入",
              url: "https://comfyui-wiki.com/en/news/2026-08-23-sam-3d-body-native-comfyui"
            },
            {
              label: "GitHub PR #14370",
              url: "https://github.com/Comfy-Org/ComfyUI/pull/14370"
            },
            {
              label: "HF：Comfy-Org/sam-3d-body",
              url: "https://huggingface.co/Comfy-Org/sam-3d-body"
            },
          ],
          value: "接昨天 H3 Fun ControlNet：实拍 → SAM 抽 Pose → H3 V2V 换角色。先测 1 条 5 秒镜头的站位保持与脚滑。",
          impact: "抽姿态做成默认节点，ControlNet 工作流才能从研究图变成班组 SOP。"
        },
        {
          idx: "02",
          title: "Higgsfield 主 Blender：提示词搭 blockout，Seedance 在视口出片",
          summary: "8/21 官方 Blender 插件（4.2–5.1）：Scene Builder 出可编辑几何、3D Model 四边面+PBR、Character Animation 带骨架、Video 走 Seedance 2.5。Blender Bridge（bridge.higgsfield.ai/mcp）让 Agent 改当前场景。生成走云端积分。",
          links: [
            {
              label: "Higgsfield 博客：Blender 插件",
              url: "https://higgsfield.ai/blog/higgsfield-blender-plugin"
            },
            {
              label: "插件下载页",
              url: "https://higgsfield.ai/plugins/blender"
            },
            {
              label: "Changelog 8/21",
              url: "https://higgsfield.ai/creator-hub/changelog"
            },
          ],
          value: "关卡预演可 Scene Builder → 视口调机位 → Seedance 草稿。先跑 1 个白模三种灯光，看能否省半天搭景。",
          impact: "CapCut 是剪辑台，Blender 插件是 DCC 台。默认栈按环节拆。"
        },
        {
          idx: "03",
          title: "NVIDIA Sol Engine：库存 H3 在桌面卡约 4.52×，草稿+LTX 打穿交互时延",
          summary: "Sol Engine 无蒸馏/LoRA/标定：RTX 5090 @768p 端到端约 4.52×，DGX Spark @480p 约 3.92×。柱子：kernel 融合、Cross-step cache、Sol-Attn。社区草稿+LTX 在 GB200 上可到二十倍量级墙钟（以复测为准）。",
          links: [
            {
              label: "NVIDIA：Sol Engine × H3",
              url: "https://nvlabs.github.io/Sana/Sol-Engine/H3-OnDevice/"
            },
            {
              label: "arXiv 2606.23743",
              url: "https://arxiv.org/abs/2606.23743"
            },
            {
              label: "arXiv 2607.24027 Sol-Attn",
              url: "https://arxiv.org/abs/2607.24027"
            },
          ],
          value: "5090 上装 Sol-Attn + FirstBlockCache，同一 seed 对比库存 H3 的墙钟与口型/重影。",
          impact: "权重同质化后差距在推理壳。加速做成 Comfy 节点就拿走本地产能。"
        },
        {
          idx: "04",
          title: "Evoke：世界记忆搬出视频模型，开源权重冲长时一致性",
          summary: "Alaya Lab Evoke（约 8/23）：14B，场景几何进相机索引的外部 world state bank。H200 上约 1.5s 视频/2.11s 算力，3 步零 CFG，可中途改提示。训练阶梯公开。Apache 2.0；ViGeo 深度后端许可证更严。",
          links: [
            {
              label: "Ground Truth：Evoke",
              url: "https://groundtruth.day/news/evoke-keeps-a-generated-worlds-memory-outside-the-video-model.html"
            },
            {
              label: "GitHub：AlayaLab/Evoke",
              url: "https://github.com/AlayaLab/Evoke"
            },
            {
              label: "HF：AlayaLab/Evoke",
              url: "https://huggingface.co/AlayaLab/Evoke"
            },
          ],
          value: "先做 1 个室内「走开再回来」回访测试，别急着进宣发成片。",
          impact: "生成好看 ≠ 可规划可回访。游戏两边都要，预算分开。"
        },
        {
          idx: "05",
          title: "苹果 M5 Ultra Mac Studio：512GB 统一内存，本地美术 Agent 桌面预算",
          summary: "8/25 发布。M5 Ultra 最高约 512GB 统一内存、1.2TB/s 带宽；M5 Max 起售 $2,499，Ultra 约 $5,499；512GB 顶配预计 10 月底。TB5 多机集群官方称分布式推理最高约 3×。",
          links: [
            {
              label: "Apple Newsroom：Mac Studio",
              url: "https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/"
            },
            {
              label: "MacRumors：512GB 10 月到货",
              url: "https://www.macrumors.com/2026/08/25/mac-studio-m5-ultra-512gb-ram-october/"
            },
          ],
          value: "先算等额云 token；仅数据不出域/低延迟联调再下顶配。9 月可先摸 Max 128GB。",
          impact: "云按秒计价、端侧按工位资本开支。出片走云、Agent 与敏感资产走本地。"
        },
      ]
    },
    B: {
      tag: "B 层",
      title: "AI 上游信息",
      hint: "模型 / Agent / 开源 / 机器人 / 安全 / 产品化",
      items: [
        {
          idx: "01",
          title: "OpenAI Jalapeño 放出推理基准：每瓦吞吐约 1.5–1.9×，延迟约 1.7–3.6× 更低",
          summary: "8/25 OpenAI 更新 Jalapeño（Broadcom）InferenceX 口径：相对 GB200/GB300 记录，在 GPT-OSS 120B / DeepSeek R1 / Kimi K2.5 上每瓦约 1.5–1.9×，端到端延迟约 1.7–3.6× 更低。年底小规模、2027 放量；不替代全部 Nvidia。SemiAnalysis 提醒数字来自官方且 Blackwell 非最新代。",
          links: [
            {
              label: "The Verge：Jalapeño 基准 8/25",
              url: "https://www.theverge.com/ai-artificial-intelligence/984290/openai-jalapeno-ai-chip-benchmarks"
            },
            {
              label: "OpenAI 官方：Jalapeño",
              url: "https://openai.com/index/openai-broadcom-jalapeno-inference-chip/"
            },
          ],
          value: "短期别赌芯片降价，继续 Claude 热备 Sol/V4。采购表给 GPT 路线留「推理后端可能换硅」一行。",
          impact: "大厂训练买 Nvidia、推理自研。API 单价与限流会跟硅走。",
          conduction: "本周只改采购表：勿把明年单价锁进年约；同步盯 OpenAI 状态页——芯片新闻 ≠ 本周更稳。"
        },
        {
          idx: "02",
          title: "@ylecun：能写论文清不了房间——世界模型 ≠ 好看视频",
          summary: "媒体转述 @ylecun 回复 Paul Graham：要搞清 LLM 为何能写论文却清不了卧室，并研究超越 LLM 的体能学习架构。同线程强调控制论世界模型不应与视频生成混淆。原帖 status ID 未核到，以上为 Times of India 等权威转述。",
          links: [
            {
              label: "TOI 转述：LeCun bedroom problem",
              url: "https://timesofindia.indiatimes.com/technology/tech-news/godfather-of-ai-yann-lecun-wants-ai-models-to-upgrade-from-writing-his-essays-to-solving-this-big-bedroom-problem/articleshow/133449305.cms"
            },
          ],
          value: "买量/CG 看可控（ControlNet/Pose）；可走进场景看 Evoke。两套 KPI，两套验收。",
          impact: "上游掰开「生成好看」与「可规划可回访」。预算别糊成一笔。",
          conduction: "工具雷达拆成生成/可控/可回访三列；评审禁止用「世界模型」替代 Pose 保持率、回访一致性等硬指标。"
        },
        {
          idx: "03",
          title: "Prime Agent：开源 harness 把 ARC 从约 30% 拉到 95.5%，与 AVO 同向",
          summary: "Prime Intellect 开源 Prime Agent（MIT）：持久 IPython REPL + Continual Harness。报道称 Opus 5 其上 ARC-AGI-3 约 95.5% Best@1，对照裸模常见约 30%。公开回放与宣传最优跑可能有差，当方法论信号。",
          links: [
            {
              label: "GitHub：prime-agent",
              url: "https://github.com/primeintellect-ai/prime-agent"
            },
            {
              label: "arXiv 2608.23552",
              url: "https://arxiv.org/html/2608.23552v1"
            },
            {
              label: "MarkTechPost 解读",
              url: "https://www.marktechpost.com/2026/08/06/prime-intellect-releases-prime-agent/"
            },
          ],
          value: "对照你们质检 Agent：持久内核、跨轨迹记忆、子代理函数化缺哪补哪。",
          impact: "AVO 与 Prime Agent 同周强化：预算优先打 harness，不是再买旗舰席位。",
          conduction: "延续昨天 20 张图对比实验，用 Prime Agent 三项设计列差距清单并排期补齐。"
        },
      ]
    }
  },
  actions: [
    "Pose → H3 ControlNet 闭环：升级 ComfyUI 拉 SAM 3D Body，用 1 条买量实拍抽 SCAIL/OpenPose，接 MiniMax-H3-Fun-Controlnet-Union 做 V2V，记录脚滑与站位保持率。",
    "Higgsfield×Blender 预演会：装官方插件，对 1 个关卡白模跑 Scene Builder 三种灯光 + Seedance 视口出片，输出「能否替代半天搭景」结论。",
    "Sol Engine 本地测速：5090 或 DGX Spark 启用 Sol-Attn + Cross-step cache，同一 seed 对比库存 H3 的墙钟与口型/重影回归。",
    "世界模型验收表：Evoke 做 1 个室内「走开再回来」回访测试；工具雷达拆生成/可控/可回访三列，禁止空泛立项。",
    "端侧 vs 云账单：按 M5 Ultra 顶配预期 vs 等额云 token 写分流一页；Agent 壳对照 Prime Agent 补持久记忆与子代理。"
  ],
  timeline: {
    current: "2026-08-26",
    nodes: [
      {
        type: "day",
        date: "2026-08-26",
        label: "08-26"
      },
      {
        type: "week",
        id: "w35",
        label: "W35",
        range: "08-24 ~ 08-30",
        focus: "H3 控场闭环补齐 Pose 源（SAM 3D Body 进 ComfyUI）；Higgsfield 坐进 Blender 视口；Sol Engine 把本地 H3 推到约 4.5×；Evoke 外置世界记忆；苹果 M5 Ultra 512GB 抬端侧 Agent 预算；Jalapeño 推理基准与 Prime Agent 继续证明壳/硅比换旗舰更要紧。"
      },
      {
        type: "day",
        date: "2026-08-25",
        label: "08-25"
      },
      {
        type: "day",
        date: "2026-08-24",
        label: "08-24"
      },
      {
        type: "day",
        date: "2026-08-21",
        label: "08-21"
      },
      {
        type: "week",
        id: "w34",
        label: "W34",
        range: "08-17 ~ 08-23",
        focus: "Seedance 2.5 全球首发 3D 白模控制 + Maya/Blender 插件，AI 视频跨入工业化生产；Spline v2 用 WebGPU + AI Agent + MCP 重构 3D 编辑器；DeepSeek Harness rc.8 补齐多模态；Sora 2 API 9/24 停服倒计时，Kling 3.0 登顶 LLM Stats 视频榜。"
      },
      {
        type: "day",
        date: "2026-08-20",
        label: "08-20"
      },
      {
        type: "day",
        date: "2026-08-14",
        label: "08-14"
      },
      {
        type: "day",
        date: "2026-08-13",
        label: "08-13"
      },
      {
        type: "week",
        id: "w33",
        label: "W33",
        range: "08-10 ~ 08-16",
        focus: "Qwen 3.8-Max 开源但引入收入分成许可，开源 AI freemium 拐点；Comfy MCP 批量生成上线，Agent 驱动千级 workflow/天；Anthropic SynthID-Text 水印全平台落地；Gemini 3.7 Flash + Claude Sonnet 5 + NVIDIA Nemotron 3.5 密集迭代。"
      },
      {
        type: "day",
        date: "2026-08-04",
        label: "08-04"
      },
      {
        type: "week",
        id: "w32",
        label: "W32",
        range: "08-03 ~ 08-09",
        focus: "AI Agent 商业化验证：Cognition/Devin 年化收入破 $10 亿；Stripe 收购 OpenRouter $70 亿标志 LLM 分发层整合；Anthropic 签 20 年数据中心租约加码自有算力。"
      },
      {
        type: "day",
        date: "2026-08-02",
        label: "08-02"
      },
      {
        type: "day",
        date: "2026-08-01",
        label: "08-01"
      },
      {
        type: "month",
        id: "m202608",
        label: "8月",
        range: "08-01 ~ 08-26",
        focus: "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 白模进剪辑台 + H3 从配方→ControlNet 控场→Pose 源进 Comfy + Wan 3.0 文档直转商用 + Ruby EXR/ProRes + Higgsfield×Blender + Sol Engine 本地加速 + Evoke 外置记忆 + 端侧 512GB 内存。AI 美术从单点工具进入工具链编排、成片规范、推理壳与端云分流阶段。"
      },
      {
        type: "day",
        date: "2026-07-31",
        label: "07-31"
      },
      {
        type: "day",
        date: "2026-07-30",
        label: "07-30"
      },
      {
        type: "day",
        date: "2026-07-29",
        label: "07-29"
      },
      {
        type: "day",
        date: "2026-07-28",
        label: "07-28"
      },
      {
        type: "day",
        date: "2026-07-27",
        label: "07-27"
      },
      {
        type: "week",
        id: "w31",
        label: "W31",
        range: "07-27 ~ 08-02",
        focus: "Kling 4.0 Pro 原生 4K + 音频同步；EU AI Act Article 50 生效（8/2）AI 内容强制标注；MCP 最终规范发布——无状态核心 + Apps + Tasks；Midjourney V8.2 设为默认；Claude Opus 5 半价逼近 Fable 5。"
      },
      {
        type: "day",
        date: "2026-07-25",
        label: "07-25"
      },
      {
        type: "day",
        date: "2026-07-24",
        label: "07-24"
      },
      {
        type: "day",
        date: "2026-07-23",
        label: "07-23"
      },
      {
        type: "day",
        date: "2026-07-22",
        label: "07-22"
      },
      {
        type: "day",
        date: "2026-07-20",
        label: "07-20"
      },
      {
        type: "week",
        id: "w30",
        label: "W30",
        range: "07-20 ~ 07-26",
        focus: "字节 Seedream 5.0 Pro 像素级编辑；MeshFlow 3D 网格生成 1 秒内（SIGGRAPH）；DeepSeek V4 + Qwen3.8 + Kimi K3 三箭齐发；阿里 Qwen-Image-3.0 复杂 UI + 多语言一次生成。"
      },
      {
        type: "day",
        date: "2026-07-19",
        label: "07-19"
      },
      {
        type: "day",
        date: "2026-07-18",
        label: "07-18"
      },
      {
        type: "day",
        date: "2026-07-17",
        label: "07-17"
      },
      {
        type: "day",
        date: "2026-07-16",
        label: "07-16"
      },
      {
        type: "day",
        date: "2026-07-15",
        label: "07-15"
      },
      {
        type: "day",
        date: "2026-07-14",
        label: "07-14"
      },
      {
        type: "day",
        date: "2026-07-13",
        label: "07-13"
      },
      {
        type: "week",
        id: "w29",
        label: "W29",
        range: "07-13 ~ 07-19",
        focus: "Seedream 5.0 Pro 图层分离 + 像素编辑；Luma Ray3.2 16 关键帧逐帧控场；3D 开源权重（Hunyuan3D-2.5/TRELLIS.2）追平闭源可商用自托管；Kling 3.0 原生 4K/60fps；腾讯混元3D 8K PBR。"
      },
      {
        type: "month",
        id: "m202607",
        label: "7月",
        range: "07-13 ~ 07-31",
        focus: "视频三巨头同日开火（Kling 4/Veo 4/Sora 3）成本暴跌 80%；3D 开源权重追平闭源可商用自托管；EU AI Act 生效 + MCP 规范落地；Agentic Engineering 范式确立（Karpathy AgentHub）；极逸 SOON 原生 Spine 骨骼动画。"
      },
    ]
  }
};
