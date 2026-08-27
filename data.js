window.BRIEFING = {
  meta: {
    date: "2026-08-27",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究",
  },
  editorFrame: [
    "H3 本地成片补齐「时长 × 分辨率」：Auto-Chain 把约 20 秒对口型自动切段、接 latent 上下文、拼成一条 MP4；Ultimate Upscale 时空分块把峰显存压到单 tile，社区已测到约 2550×1920 且音频不丢。接昨天 Sol Engine，本地 H3 从草稿走向可交付长片。",
    "12GB 卡也能跑旗舰生图编辑：SenseNova-U1.5 ConvRot（INT8 约 17.6GB / 混合 W4A8 约 13.8GB）在 RTX 4070 12GB 上跑 2048²，同 seed 像素差约 0.43%。班组「每工位一块高端卡」假设可以松一松。",
    "云端选型扩盘 + 旧 Kling 倒计时：PixVerse V6、Meshy-7 进 Comfy Partner；Kling V1.5/V1.6/V2.1 等 9/15 EOL。Hot Chips 上 @sama / OpenAI Jalapeño 与 Google TPUv8 同台——Agent 账单继续跟硅走。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "H3 Motion Context Auto-Chain：一次跑完超长对口型",
          summary: "8/24–25 Auto-Chain 插件：整段音频按约 20 秒切块，latent 上下文延续动作与声音，末帧作下一镜参考，自动拼一条 MP4。推荐 20s/24fps/22 context/`last_frame`。依赖原版 Motion Context，勿与实验 fork 混装。",
          links: [
            {
              label: "ComfyUI Wiki：H3 Auto-Chain",
              url: "https://comfyui-wiki.com/en/news/2026-08-25-h3-motion-context-auto-chain",
            },
            {
              label: "GitHub：Auto-Chain addon",
              url: "https://github.com/Ltamann/ComfyUI-H3-Motion-Context-Auto-Chain-addon",
            },
            {
              label: "原版 Motion Context",
              url: "https://github.com/NikoDemon80/ComfyUI-H3-Motion-Context",
            }
          ],
          value: "角色预告/PV 旁白超 20 秒不再手工排队。本周用 1 条 40–60 秒旁白测接缝口型与身份漂。",
          impact: "H3 上限从单段能力变成编排能力。切段 SOP 写进手册才能吃本地长片产能。",
          tags: [
            "视频"
          ],
          action: "装 Auto-Chain，用 1 条 40–60 秒旁白跑切段→拼片，记录接缝口型帧数。",
          sourceType: "一手",
        },
        {
          idx: "02",
          title: "MMH3 Ultimate Upscale：有限 VRAM 分块放大 H3，音频原样带走",
          summary: "8/25 节点：对已去噪 H3 嵌套 AV latent 做时间切块→latent 放大→空间 tile→缝合，峰显存绑定单 tile。社区：原流程约 4MP OOM，分块同机约 2550×1920/18s。实验性 LTX-2.5 变体音频仍不稳。",
          links: [
            {
              label: "ComfyUI Wiki：MMH3 Ultimate Upscale",
              url: "https://comfyui-wiki.com/en/news/2026-08-25-mmh3-ultimate-upscale",
            },
            {
              label: "GitHub：MMH3 UltimateUpscale",
              url: "https://github.com/bbaudio-2025/Comfyui-MMH3-UltimateUpscale",
            }
          ],
          value: "接 Auto-Chain：先低分出长片再分块抬分辨率。固定一条 seed 对比整段 OOM vs 分块墙钟与接缝。",
          impact: "NestedTensor 挡住普通放大节点。懂 AV latent 的放大做成默认节点就拿走小卡成片权。",
          tags: [
            "视频",
            "成本"
          ],
          action: "同一条低分 H3 成片接 Ultimate Upscale，目标 ≥2K，对比 OOM 与分块墙钟。",
          sourceType: "一手",
          cost: "约 2550×1920 / 18s",
        },
        {
          idx: "03",
          title: "SenseNova-U1.5 ConvRot：50GB 模型塞进 12GB 卡",
          summary: "8/25 ConvRot：INT8 约 17.58 GiB、混合 W4A8 约 13.80 GiB（层 18+ 真 W4A8）+ 官方 8 步 LoRA。RTX 4070 12GB @2048²；同 seed INT8 像素差约 0.43%。需 comfy-kitchen ≥0.2.31。",
          links: [
            {
              label: "ComfyUI Wiki：SenseNova ConvRot",
              url: "https://comfyui-wiki.com/en/news/2026-08-25-sensenova-u1-5-convrot-quantization",
            },
            {
              label: "GitHub：SenseNova ConvRot 节点",
              url: "https://github.com/Milor123/ComfyUI-SenseNova-U1.5-ConvRot",
            }
          ],
          value: "概念迭代/多参考编辑可下放到普通工位。同 prompt 跑 bf16 对照机 vs INT8 12GB，记可接受差与墙钟。",
          impact: "量化从能跑进入可进班组。采购可写：质检留 24GB+，日常 12GB + ConvRot。",
          tags: [
            "生图",
            "成本"
          ],
          action: "12GB 工位装 INT8 + 8 步 LoRA，同 seed 对照 bf16 的像素差与可过审率。",
          sourceType: "一手",
          cost: "INT8 约 17.6GB · W4A8 约 13.8GB",
        },
        {
          idx: "04",
          title: "PixVerse V6 进 Comfy Partner：原生音频 + 多镜 + 延长/融合",
          summary: "8/25 PR #15880 合并：T2V/I2V/首末帧/Extend/Fusion，原生同步音频，最长约 15s、最高约 1080p。Replicate 参考价：720p 有声约 $0.12/s，1080p 有声约 $0.23/s。",
          links: [
            {
              label: "GitHub PR #15880",
              url: "https://github.com/Comfy-Org/ComfyUI/pull/15880",
            },
            {
              label: "PixVerse V6 产品页",
              url: "https://pixverse.ai/en/model/pixverse-v6",
            },
            {
              label: "Replicate：计费参考",
              url: "https://replicate.com/pixverse/pixverse-v6/readme",
            }
          ],
          value: "云端快速分镜多一条有声多镜选项。同一分镜脚本对比 V6 vs 默认云视频的口型与跳切。",
          impact: "Partner 层把有声视频变成一等公民。选型表别只比无声画质。",
          tags: [
            "视频",
            "成本"
          ],
          action: "用同一条分镜脚本对比 PixVerse V6 有声多镜 vs 默认云视频的口型与跳切。",
          sourceType: "一手",
          cost: "720p 有声约 $0.12/s",
        },
        {
          idx: "05",
          title: "Meshy-7 进 Comfy Partner；Kling 旧版 9/15 EOL",
          summary: "8/24 PR #15807：Meshy 文生/图生/多图节点支持 meshy-7 与 ultra mode（标准生成仍约 20 credits）。定价页确认 Kling V1.5/V1.6/V2.1/V2.1 Master 与 Kolors VTO 于 2026-09-15 退役，需迁 Kling 3.0/O3 或 Flux VTO。",
          links: [
            {
              label: "GitHub PR #15807 Meshy-7",
              url: "https://github.com/Comfy-Org/ComfyUI/pull/15807",
            },
            {
              label: "Meshy 7 对齐基准",
              url: "https://www.meshy.ai/blog/meshy-7-image-to-3d-geometry-alignment",
            },
            {
              label: "ComfyUI：Kling EOL 说明",
              url: "https://docs.comfy.org/tutorials/partner-nodes/kling/kling-3-0",
            }
          ],
          value: "3D 概念可在 Comfy 直调 Meshy-7；扫工作流，把仍钉 Kling v2.x 的图在 9 月前迁完。",
          impact: "云节点生命周期开始像引擎插件——不跟版本表就会在上线日突然断。",
          tags: [
            "3D",
            "授权"
          ],
          action: "试 Meshy-7 一单图→GLB；把 Kling v2.x 节点标红并排期迁 3.0/O3（截止 9/15）。",
          sourceType: "一手",
          cost: "Meshy-7 标准约 20 credits",
        }
      ],
    },
    B: {
      tag: "B 层",
      title: "AI 上游信息",
      hint: "模型 / Agent / 开源 / 机器人 / 安全 / 产品化",
      items: [
        {
          idx: "01",
          title: "@sama：「we made a chip and it is fast」——Jalapeño Hot Chips 细则",
          summary: "8/25 @sama 发帖（权威媒体转述；原帖 status ID 未核到）。OpenAI 博客 InferenceX：每瓦约 1.5–1.9×、延迟约 1.7–3.6× 更低。8/26 Hot Chips：约 13.4 PFLOP/s mxfp4、216 GiB HBM4、700W，Gluon；内核称较专家手写约 1.5–1.8×。年底小规模、2027 放量。",
          links: [
            {
              label: "India Today 转述 @sama",
              url: "https://www.indiatoday.in/technology/news/story/we-made-a-chip-and-it-is-fast-sam-altman-says-after-openai-takes-on-nvidia-with-first-ai-chip-2980067-2026-08-26",
            },
            {
              label: "OpenAI：Jalapeño first results",
              url: "https://openai.com/index/jalapeno-first-results/",
            },
            {
              label: "ServeTheHome：Hot Chips",
              url: "https://www.servethehome.com/openai-jalapeno-asic-at-hot-chips-2026/",
            }
          ],
          value: "延续昨天采购表「推理后端可能换硅」。本周盯延迟与限流，不赌单价下调写进年约。",
          impact: "自研推理硅进入可复述工程细节阶段。API 延迟/限流会跟硅走，选型留多后端。",
          tags: [
            "成本"
          ],
          action: "SLA 给 GPT 路线加「同模型多后端」一行；对照状态页与自测 P95。",
          sourceType: "转述",
          cost: "每瓦约 1.5–1.9× · 700W",
          conduction: "质检 Agent/看图批处理若走 GPT，本周只改 SLA 多后端列并盯状态页，不把明年单价锁进年约。",
        },
        {
          idx: "02",
          title: "Google TPUv8：训练 8t / 推理 8i 同代双芯（Hot Chips）",
          summary: "8/26 Hot Chips：TPU 8t（训练，6×HBM）与 8i（推理，8×HBM、更高 SRAM/带宽比）；8t superpod 约 9600 芯、2PB 共享 HBM、121 EFLOPS FP4，相对 Ironwood 约 2× perf/watt。8i 配 Axion、BoardFly。未核到 @GoogleDeepMind 原帖，以上为 ServeTheHome 会场转述。",
          links: [
            {
              label: "ServeTheHome：TPUv8",
              url: "https://www.servethehome.com/googles-tpuv8s-for-training-and-inference-at-hot-chips-2026/",
            }
          ],
          value: "Gemini/Veo 类云端美术 Agent 成本曲线会跟 Google 自研硅走。预算保留同能力换后端弹性。",
          impact: "大厂训练/推理硅拆开设计成常态。云视频价签要按能力档×后端拆。",
          tags: [
            "成本",
            "Agent"
          ],
          action: "把 Google 云视频/Agent 价签改成「能力档 × 后端」两列表，本周只改表。",
          sourceType: "转述",
          cost: "相对 Ironwood 约 2× perf/watt",
          conduction: "工具雷达给 Google 云加「后端未定」标记；评审禁止用芯片新闻直接改本周出片供应商。",
        },
        {
          idx: "03",
          title: "OpenAI 官方博客：Jalapeño first results（与 @sama 同主题补一手）",
          summary: "8/25 openai.com/index/jalapeno-first-results/：跨 GPT-OSS 120B、DeepSeek R1、Kimi K2.5 1T，高交互负载约 2.1–4.1× 更高性能；强调吞吐与延迟同架构兼得。属 @OpenAI 官方一手，可与 Hot Chips 细节交叉验证。",
          links: [
            {
              label: "OpenAI：Jalapeño first results",
              url: "https://openai.com/index/jalapeno-first-results/",
            },
            {
              label: "OpenAI：full stack 旁注",
              url: "https://openai.com/index/the-full-stack-behind-abundant-intelligence/",
            }
          ],
          value: "需要对外引用数字时优先用官方博客，不以媒体二手口径写进立项书。",
          impact: "官方口径与会场细节并行，减少「芯片叙事」污染管线决策。",
          tags: [
            "成本"
          ],
          action: "立项/采购引用芯片数字时，只贴 OpenAI 官方页链接，不贴传闻帖。",
          sourceType: "一手",
          cost: "交互负载约 2.1–4.1×",
          conduction: "本周资料库把 Jalapeño 条目的「可引用源」改成官方博客；媒体转述降为背景。",
        }
      ],
    },
  },
  actions: [
    "H3 长片闭环：装 Auto-Chain + 原版 Motion Context，用 1 条 40–60 秒旁白跑切段→拼片，记录接缝口型与身份漂。",
    "分块放大验收：同一条低分 H3 成片接 MMH3 Ultimate Upscale，目标 ≥2K，对比整段 OOM vs 分块墙钟与接缝。",
    "12GB 生图试点：装 SenseNova ConvRot INT8 + 8 步 LoRA，同 seed 对照 bf16 机的像素差与可过审率。",
    "云端选型 + 版本扫雷：试 PixVerse V6 有声多镜；试 Meshy-7 一单图→GLB；把 Kling v2.x 节点标红并排期迁 3.0/O3（截止 9/15）。",
    "采购/SLA 多后端：给 GPT 与 Google 云各加「能力档 × 后端」列；Jalapeño 数字只引用 OpenAI 官方页，本周只改表不改年约。"
  ],
  timeline: {
    current: "2026-08-27",
    nodes: [
      {
        type: "day",
        date: "2026-08-27",
        label: "08-27"
      },
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
        focus: "H3 本地成片补齐时长×分辨率（Auto-Chain + Ultimate Upscale）；SenseNova ConvRot 让 12GB 跑旗舰生图；PixVerse V6 / Meshy-7 进 Partner，Kling 旧版 9/15 EOL；Hot Chips 上 Jalapeño 与 TPUv8 同台，Agent 账单继续跟硅走；承接周初 Pose/ControlNet/Sol/端侧内存主线。"
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
        range: "08-01 ~ 08-27",
        focus: "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 白模进剪辑台 + H3 从配方→ControlNet→Pose→Auto-Chain/分块放大成片 + Wan 3.0 + Ruby + Higgsfield×Blender + Sol Engine + Evoke + 端侧 512GB + SenseNova ConvRot 消费卡量化 + PixVerse V6/Meshy-7 Partner + Kling 旧版 EOL + Hot Chips 自研硅。AI 美术进入工具链编排、成片规范、推理壳与端云分流阶段。"
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
