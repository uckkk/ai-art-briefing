window.BRIEFING = {
  "meta": {
    "date": "2026-09-03",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "世界模型开始抢「几何机位」：World Labs Atlas 用摄像机位当原生输入，官方称最长约 1 分钟 1440p，还能出点云/高斯。early access。预告环绕可以按镜头设计，正式关卡别指望替换引擎。",
    "生图编辑进办公流、灰盒开始能玩：Google Pics（Nano Banana）GA 进 Docs/Slides；Gemini 3.8 Flash 在 Antigravity 用 Nano Banana 贴图写出可玩 3D 关卡。策划侧会先用起来，班组要划哪些物料能直出。",
    "上游同价不等于更便宜：3.8 Flash 引入价不变但任务账单可能抬头；@AIatMeta 的 Muse Spark 1.3 官方称工具调用约 −20%。Sora 9/24、Kling v2 9/15、Omni Preview 9/30 倒计时继续。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "World Labs Atlas：几何机位控镜，最长约 1 分钟 1440p，还能出点云/高斯",
          "summary": "9/1 World Labs（李飞飞）官方：Atlas 从零预训练的 omni 世界模型，原生吃文本/图/视频/3D。摄像机位是几何输入而不是「pan left」提示词；官方称最长约 1 分钟 1440p。空间重建少到 2–3 张图；输出点云或 3D Gaussian splat，对接现有 Marble。官方评测摄像机跟随相对 MiniMax H3 / Gemini Omni Flash / FLUX 3 / Seedance 2.5 更受偏好。现为合作伙伴 early access，无公开 API/价。",
          "links": [
            {
              "label": "World Labs：Atlas",
              "url": "https://www.worldlabs.ai/blog/atlas"
            },
            {
              "label": "The Decoder：Atlas 转述",
              "url": "https://the-decoder.com/world-labs-unveils-atlas-a-single-ai-model-that-generates-reconstructs-and-simulates-3d-worlds-from-just-a-few-photos/"
            }
          ],
          "value": "预告/过场可以按「概念图 + 设计机位」出可控环绕，而不是抽卡。点云/高斯只做客研灰盒，正式关卡仍走引擎网格。",
          "impact": "视频竞争点从「像不像」挪到「机位是不是几何可控」。和昨天 Solaris（可点界面）错层：一条管镜头，一条管交互壳。",
          "tags": [
            "视频",
            "3D"
          ],
          "action": "填 Atlas early access；拿 1 张现有场景概念图设计一条环绕机位，估能否替代抽卡式预告。正式关卡渲染不进评估。",
          "sourceType": "一手"
        },
        {
          "idx": "02",
          "title": "Google Pics 正式可用：Nano Banana 对象级编辑进 Docs/Slides，pics.new",
          "summary": "9/1 Google 官方：Google Pics GA，底层 Nano Banana。对象分割局部改、图内文字改/翻译、一次出多版、升到 2K/4K。独立站 pics.new，并嵌进 Docs/Slides，Drive 随后。面向 AI Pro/Ultra 与 Workspace Business/Enterprise；生成功能至少用到 2027-02-28 额度更高。Rapid 域 9/1 起最多约 15 天放量，Scheduled 域 9/15。",
          "links": [
            {
              "label": "Google：Try Google Pics",
              "url": "https://blog.google/products-and-platforms/products/workspace/google-pics/"
            },
            {
              "label": "Workspace 更新：Pics GA",
              "url": "https://workspaceupdates.googleblog.com/2026/09/google-pics-brings-pro-level-ai-image-creation-and-editing-to-Google-Workspace.html"
            }
          ],
          "value": "活动物料/本地化海报可以在 Slides 里点图改字，少一轮导去 PS。别拿它当角色立绘生产器。",
          "impact": "Workspace 把「能改的生图」塞进策划/运营日常。美术要定：哪些物料允许 Pics 直出，哪些仍走班组 SOP。",
          "tags": [
            "生图"
          ],
          "action": "用 pics.new 拿 1 张现有活动图做对象分割 + 图内文字翻译，记和 PS/Canva 比省了几步。",
          "sourceType": "一手"
        },
        {
          "idx": "03",
          "title": "Bernini v2 进 Comfy：语义规划 + Wan2.2 双 DiT，一条工作流六种剪辑任务",
          "summary": "9/1 ComfyUI Wiki：社区把字节 Bernini-Diffusers-v2（Apache-2.0）打成 Comfy 自定义节点。Qwen2.5-VL 规划器出语义 token，再由 Wan2.2 高/低噪双 DiT（0.875 切换）渲染。按接口自动选 t2v / r2v / v2v / rv2v / 风格迁移。HF 权重 ByteDance/Bernini-Diffusers-v2；官方推荐 Hopper。OpenS2V 63.83。rzgar 原仓本环境 404，RunningHub 全量包可用。",
          "links": [
            {
              "label": "ComfyUI Wiki：Bernini v2",
              "url": "https://comfyui-wiki.com/en/news/2026-09-01-bernini-v2-comfyui"
            },
            {
              "label": "Hugging Face：Bernini-Diffusers-v2",
              "url": "https://huggingface.co/ByteDance/Bernini-Diffusers-v2"
            },
            {
              "label": "GitHub：RunningHub 全量包",
              "url": "https://github.com/RH-RunningHub/ComfyUI-RH-Bernini-Full"
            }
          ],
          "value": "本地视频剪辑（换背景/参考改镜头）可以先试一条 v2v，对照云端 Kling/Wan 账单。没 H100 只做客研。",
          "impact": "开源视频从「会出片」挪到「能按语义剪」。剪辑外包的短单会先被内部化。",
          "tags": [
            "视频"
          ],
          "action": "有 Hopper/大显存的机子装 RunningHub 包跑 1 条 5–10 秒 v2v；没卡就只记「本地剪辑客研」，不改 SOP。",
          "sourceType": "一手"
        },
        {
          "idx": "04",
          "title": "Gemini 3.8 Flash × Nano Banana：Antigravity 里一句话出可玩 3D 关卡",
          "summary": "9/2 Google 官方演示：3.8 Flash 在 Antigravity 用循环指令写出可玩 3D 关卡，谜题和环境叙事在，贴图走 Nano Banana。The Decoder 转述称 3D 生成观感有提升——实际是编码 Agent 调生图，不是 Flash 自己出网格。同日还有 DOS 版 Google Maps 单提示可玩。这是灰盒原型近窗，不是关卡生产器。",
          "links": [
            {
              "label": "Google：Gemini 3.8 Flash",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
            },
            {
              "label": "The Decoder：3.8 Flash 转述",
              "url": "https://the-decoder.com/gemini-3-8-flash-is-googles-third-budget-model-in-six-weeks-while-frontier-models-remain-mia/"
            }
          ],
          "value": "策划验收可以用「一句话出可点灰盒 + Nano Banana 贴图」看节奏，别把生成网格当碰撞真相。",
          "impact": "编码 Agent 开始碰美术灰盒。和 9/1 Magpie（引擎白盒→视频）错层：一条管观感视频，一条管可玩原型。",
          "tags": [
            "3D",
            "Agent"
          ],
          "action": "在 Antigravity 用 3.8 Flash 试 1 条现有灰盒关卡（贴图指定 Nano Banana），记能不能玩、贴图花了多久。",
          "sourceType": "一手"
        },
        {
          "idx": "05",
          "title": "Diffusion Compiler：3090 Ti 上 Krea 2 Turbo 出图约 2.2×，H3 还在路上",
          "summary": "9/1 ComfyUI Wiki：alexone 的 C++20 Diffusion Compiler 把 Krea 2 Turbo 编成无 libtorch 的本地运行时。RTX 3090 Ti、1024²、8 步 Euler：prompt→PNG 26.58s vs Comfy/PyTorch 59.14s（约 2.2×）。加速主要来自去 warmup 和更快的文本编码/VAE，热步并不更快。H3 ConvRot INT8 单步约 1.72×，端到端尚未过验收。实验栈，计划接 Comfy 钩子。",
          "links": [
            {
              "label": "ComfyUI Wiki：Diffusion Compiler",
              "url": "https://comfyui-wiki.com/en/news/2026-09-01-diffusion-compiler"
            },
            {
              "label": "GitHub：diffusion-compiler",
              "url": "https://github.com/CodeAlexx/diffusion-compiler"
            }
          ],
          "value": "本地 Krea 2 Turbo 批量草稿如果卡在 Python 开销，可以记一笔墙钟上限。生产继续走 Comfy。",
          "impact": "本地生图的下一刀是推理壳，不是再下一个模型。没过验收的编译器不能进 SOP。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "有 3090 级卡的实验机按 README 跑同一条 Krea 2 Turbo，对照 Comfy 墙钟；没卡或编不过就只记「未进 SOP」。",
          "sourceType": "一手",
          "cost": "3090 Ti 约 26.6s vs 59.1s"
        }
      ]
    },
    "B": {
      "tag": "B 层",
      "title": "AI 上游信息",
      "hint": "模型 / Agent / 开源 / 机器人 / 安全 / 产品化",
      "items": [
        {
          "idx": "01",
          "title": "GoogleDeepMind：Gemini 3.8 Flash 同价更能干，但任务账单可能更贵",
          "summary": "9/2 Google 官方：3.8 Flash 接 3.7，入 $0.75 / 出 $3.75 每百万 token，引入价收到 2026-12-31，之后翻倍到 $1.50 / $7.50。官方称复杂任务会多推理、多工具——「更勤奋」。The Decoder 引 Artificial Analysis：Intelligence Index 59 vs 3.7 的 56，但每任务约 $0.58 vs $0.40（约 +40%）。效率优先可继续 3.7。Cyber 档走 Fairwind，美术用不到。",
          "links": [
            {
              "label": "GoogleDeepMind：3.8 Flash",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
            },
            {
              "label": "DeepMind 模型卡",
              "url": "https://deepmind.google/models/model-cards/gemini-3-8-flash/"
            },
            {
              "label": "The Decoder：账单与指数",
              "url": "https://the-decoder.com/gemini-3-8-flash-is-googles-third-budget-model-in-six-weeks-while-frontier-models-remain-mia/"
            }
          ],
          "value": "写节点/批处理 Agent 可以先换 3.8 Flash 试质量，但必须记 token 账单；省钱任务留 3.7。",
          "impact": "Flash 节奏在加快，单价不变不等于账单不变。选型表要拆「质量档」和「效率档」。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "把一条常驻 Gemini 美术/节点任务迁到 3.8 Flash，对照 3.7 的质量和 $/任务。",
          "sourceType": "一手",
          "conduction": "Cursor/批处理默认可试 3.8 Flash，效率优先任务继续 3.7；引入价盯 12/31。",
          "cost": "引入价 $0.75/$3.75 · 至 12/31"
        },
        {
          "idx": "02",
          "title": "@AIatMeta 9/2：Muse Spark 1.3，官方称工具调用约 −20%、token 约 −25%",
          "summary": "9/2 Meta 研究博客（@AIatMeta 同日发帖，本环境未直读原帖）：Muse Spark 1.3 今日进 Muse Code 与 Meta Model API。相对 1.2，内部工程师对比约少 20% 工具调用、约少 25% token，更少废话。会问清再动、不可逆操作先确认。max reasoning 还在安全测试。Axios 转述 AI 主管 Alexandr Wang：对标前沿，铺 24/7 个人 Agent。价与前代相同（Axios）。",
          "links": [
            {
              "label": "Meta：Introducing Muse Spark 1.3",
              "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
            },
            {
              "label": "Axios：Wang 谈 1.3",
              "url": "https://www.axios.com/2026/09/02/meta-debuts-muse-spark-13-as-personal-agent-work-continues"
            }
          ],
          "value": "若已在用 Muse Code/API 写节点，本周换 1.3 看墙钟和 token；24/7 个人 Agent 还不是生产承诺。",
          "impact": "上游一边降 Agent 账单，一边把 max/Cyber 档留在安全闸后。接 Astra / Mythos 的「能力 gated」。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "Muse Code 里把一条现网节点任务换到 Spark 1.3，记工具调用次数和 token。",
          "sourceType": "一手",
          "conduction": "有 Muse 的工位本周切 1.3；通宵无人值守仍不开放，max reasoning 没过安全测试就当没有。",
          "cost": "官方称工具调用约 −20% · token 约 −25%"
        },
        {
          "idx": "03",
          "title": "3.8 Flash 注入更硬：Gray Swan 攻击成功率约 5.5%；Cyber 档只给防御方",
          "summary": "9/2 同一篇 Google 博文：3.8 Flash 在 Gray Swan IPI 上攻击成功率约 5.5%（The Decoder 转述官方图；Opus 5 约 4.8%）。3.8 Flash Cyber 走 Fairwind，给政府/关键基础设施/软件维护方，护栏更松、专攻漏洞发现和补丁。Chrome 安全组称正确补丁量约 2.6× 更大商业模型。美术侧申请不到 Cyber，也不该申请。",
          "links": [
            {
              "label": "Google：3.8 Flash / Cyber",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
            },
            {
              "label": "The Decoder：注入与 Cyber 数字",
              "url": "https://the-decoder.com/gemini-3-8-flash-is-googles-third-budget-model-in-six-weeks-while-frontier-models-remain-mia/"
            }
          ],
          "value": "看图/批处理 Agent 换 3.8 Flash 能吃一点注入加固，仍要隔离和停机开关。别等 Cyber 档。",
          "impact": "接上周 HF 事故和 Astra Critical：前沿实验室继续把进攻能力锁在白名单。生产 Agent 的闸比模型分数更值钱。",
          "tags": [
            "Agent"
          ],
          "action": "夜间批图 Agent 默认模型改 3.8 Flash 标准档，保留网络隔离 + 停机开关；不申请 Cyber。",
          "sourceType": "转述",
          "conduction": "美术 Agent 只用 3.8 Flash 标准档；隔离和熔断不撤。Cyber / Fairwind 与生产出图无关。"
        }
      ]
    }
  },
  "actions": [
    "Atlas：填 early access，拿 1 张场景概念图设计环绕机位，估能否替代抽卡式预告；正式关卡渲染不进评估。",
    "Google Pics：pics.new 对 1 张活动图做对象分割 + 图内文字翻译，划哪些物料允许直出、哪些仍走班组 SOP。",
    "3.8 Flash：Antigravity 试 1 条灰盒关卡（贴图走 Nano Banana）；编码 Agent 迁 3.8 并记 $/任务，省钱任务留 3.7。",
    "Bernini：有大显存的机子跑 1 条 5–10 秒 v2v；没卡只做客研。Sora 9/24 / Kling v2 9/15 / Omni Preview 9/30 倒计时表继续填。",
    "Muse Spark 1.3：有 Muse Code 的工位换一条节点任务记工具调用；夜间批图 Agent 改 3.8 Flash 标准档，隔离不撤。"
  ],
  "timeline": {
    "current": "2026-09-03",
    "nodes": [
      {
        "type": "day",
        "date": "2026-09-03",
        "label": "09-03"
      },
      {
        "type": "day",
        "date": "2026-09-02",
        "label": "09-02"
      },
      {
        "type": "month",
        "id": "m202609",
        "label": "9月",
        "range": "09-01 ~ 09-03",
        "focus": "Atlas 几何机位世界模型；Google Pics / Nano Banana 进 Workspace；Gemini 3.8 Flash 同价更勤奋但账单可能抬头；Muse Spark 1.3 降工具调用；Bernini v2 进 Comfy；Solaris / Omni 1.1 / Sora 9/24 / Kling 9/15 / Preview 9/30 续盯。"
      },
      {
        "type": "week",
        "id": "w36",
        "label": "W36",
        "range": "08-31 ~ 09-06",
        "focus": "Atlas 机位可控预告做客研；Pics 划物料直出边界；3.8 Flash 质量档 vs 3.7 效率档；Muse 1.3 试一条节点；Bernini v2v 有卡再跑；Sora 9/24、Kling v2 9/15、Omni Preview 9/30 倒计时；Solaris 只试交互页。"
      },
      {
        "type": "day",
        "date": "2026-09-01",
        "label": "09-01"
      },
      {
        "type": "day",
        "date": "2026-08-31",
        "label": "08-31"
      },
      {
        "type": "day",
        "date": "2026-08-28",
        "label": "08-28"
      },
      {
        "type": "day",
        "date": "2026-08-27",
        "label": "08-27"
      },
      {
        "type": "day",
        "date": "2026-08-26",
        "label": "08-26"
      },
      {
        "type": "week",
        "id": "w35",
        "label": "W35",
        "range": "08-24 ~ 08-30",
        "focus": "H3 本地成片补齐时长×分辨率并加上官方 8 步 PDD 加速；Omni 1.1 把云视频拉到 40s 可导演 + 360p 草稿价；腾讯 Motus / 群核 Lux3D 把 3D 角色与道具推进生产管线；Wan 3.0 Prime 进 Comfy；Kling 旧版 9/15 EOL；@OpenAI 公布 HF 事故正式报告，Agent 要加闸。"
      },
      {
        "type": "day",
        "date": "2026-08-25",
        "label": "08-25"
      },
      {
        "type": "day",
        "date": "2026-08-24",
        "label": "08-24"
      },
      {
        "type": "day",
        "date": "2026-08-21",
        "label": "08-21"
      },
      {
        "type": "week",
        "id": "w34",
        "label": "W34",
        "range": "08-17 ~ 08-23",
        "focus": "Seedance 2.5 全球首发 3D 白模控制 + Maya/Blender 插件，AI 视频跨入工业化生产；Spline v2 用 WebGPU + AI Agent + MCP 重构 3D 编辑器；DeepSeek Harness rc.8 补齐多模态；Sora 2 API 9/24 停服倒计时，Kling 3.0 登顶 LLM Stats 视频榜。"
      },
      {
        "type": "day",
        "date": "2026-08-20",
        "label": "08-20"
      },
      {
        "type": "day",
        "date": "2026-08-14",
        "label": "08-14"
      },
      {
        "type": "day",
        "date": "2026-08-13",
        "label": "08-13"
      },
      {
        "type": "week",
        "id": "w33",
        "label": "W33",
        "range": "08-10 ~ 08-16",
        "focus": "Qwen 3.8-Max 开源但引入收入分成许可，开源 AI freemium 拐点；Comfy MCP 批量生成上线，Agent 驱动千级 workflow/天；Anthropic SynthID-Text 水印全平台落地；Gemini 3.7 Flash + Claude Sonnet 5 + NVIDIA Nemotron 3.5 密集迭代。"
      },
      {
        "type": "day",
        "date": "2026-08-04",
        "label": "08-04"
      },
      {
        "type": "week",
        "id": "w32",
        "label": "W32",
        "range": "08-03 ~ 08-09",
        "focus": "AI Agent 商业化验证：Cognition/Devin 年化收入破 $10 亿；Stripe 收购 OpenRouter $70 亿标志 LLM 分发层整合；Anthropic 签 20 年数据中心租约加码自有算力。"
      },
      {
        "type": "day",
        "date": "2026-08-02",
        "label": "08-02"
      },
      {
        "type": "day",
        "date": "2026-08-01",
        "label": "08-01"
      },
      {
        "type": "month",
        "id": "m202608",
        "label": "8月",
        "range": "08-01 ~ 08-28",
        "focus": "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 白模进剪辑台 + H3 从配方→ControlNet→Pose→Auto-Chain/分块放大/官方 8 步加速成片 + Wan 3.0 / Prime + Omni 1.1 40s 可导演 + Motus/Lux3D 生产管线 + Ruby + Higgsfield×Blender + Sol Engine + Evoke + 端侧 512GB + SenseNova ConvRot + PixVerse V6/Meshy-7 Partner + Kling 旧版 EOL + Hot Chips 自研硅 + Agent 事故正式报告。AI 美术进入工具链编排、成片规范、推理壳与端云分流阶段。"
      },
      {
        "type": "day",
        "date": "2026-07-31",
        "label": "07-31"
      },
      {
        "type": "day",
        "date": "2026-07-30",
        "label": "07-30"
      },
      {
        "type": "day",
        "date": "2026-07-29",
        "label": "07-29"
      },
      {
        "type": "day",
        "date": "2026-07-28",
        "label": "07-28"
      },
      {
        "type": "day",
        "date": "2026-07-27",
        "label": "07-27"
      },
      {
        "type": "week",
        "id": "w31",
        "label": "W31",
        "range": "07-27 ~ 08-02",
        "focus": "Kling 4.0 Pro 原生 4K + 音频同步；EU AI Act Article 50 生效（8/2）AI 内容强制标注；MCP 最终规范发布——无状态核心 + Apps + Tasks；Midjourney V8.2 设为默认；Claude Opus 5 半价逼近 Fable 5。"
      },
      {
        "type": "day",
        "date": "2026-07-25",
        "label": "07-25"
      },
      {
        "type": "day",
        "date": "2026-07-24",
        "label": "07-24"
      },
      {
        "type": "day",
        "date": "2026-07-23",
        "label": "07-23"
      },
      {
        "type": "day",
        "date": "2026-07-22",
        "label": "07-22"
      },
      {
        "type": "day",
        "date": "2026-07-20",
        "label": "07-20"
      },
      {
        "type": "week",
        "id": "w30",
        "label": "W30",
        "range": "07-20 ~ 07-26",
        "focus": "字节 Seedream 5.0 Pro 像素级编辑；MeshFlow 3D 网格生成 1 秒内（SIGGRAPH）；DeepSeek V4 + Qwen3.8 + Kimi K3 三箭齐发；阿里 Qwen-Image-3.0 复杂 UI + 多语言一次生成。"
      },
      {
        "type": "day",
        "date": "2026-07-19",
        "label": "07-19"
      },
      {
        "type": "day",
        "date": "2026-07-18",
        "label": "07-18"
      },
      {
        "type": "day",
        "date": "2026-07-17",
        "label": "07-17"
      },
      {
        "type": "day",
        "date": "2026-07-16",
        "label": "07-16"
      },
      {
        "type": "day",
        "date": "2026-07-15",
        "label": "07-15"
      },
      {
        "type": "day",
        "date": "2026-07-14",
        "label": "07-14"
      },
      {
        "type": "day",
        "date": "2026-07-13",
        "label": "07-13"
      },
      {
        "type": "week",
        "id": "w29",
        "label": "W29",
        "range": "07-13 ~ 07-19",
        "focus": "Seedream 5.0 Pro 图层分离 + 像素编辑；Luma Ray3.2 16 关键帧逐帧控场；3D 开源权重（Hunyuan3D-2.5/TRELLIS.2）追平闭源可商用自托管；Kling 3.0 原生 4K/60fps；腾讯混元3D 8K PBR。"
      },
      {
        "type": "month",
        "id": "m202607",
        "label": "7月",
        "range": "07-13 ~ 07-31",
        "focus": "视频三巨头同日开火（Kling 4/Veo 4/Sora 3）成本暴跌 80%；3D 开源权重追平闭源可商用自托管；EU AI Act 生效 + MCP 规范落地；Agentic Engineering 范式确立（Karpathy AgentHub）；极逸 SOON 原生 Spine 骨骼动画。"
      }
    ]
  }
};
