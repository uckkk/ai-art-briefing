window.BRIEFING = {
  meta: {
    date: "2026-08-25",
    kicker: "DAILY AI ART INTELLIGENCE",
    title: "每日 AI 美术情报",
    tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  editorFrame: [
    "H3 从配方走进结构化控制：MiniMax-H3 Fun ControlNet Union 上了 Hugging Face——一条约 6.8GB 权重同时吃 Canny / Depth / Pose，还能做视频 inpainting。昨天写绿幕假人两步替换，今天是用控制视频钉运镜和姿态。",
    "Wan 3.0 正式商用：快于实时 + 文档直转 30 秒。阿里 8/24 全网上线，单次原生 30 秒，首次吃 doc/xls/ppt/pdf；API 到 9/23 七折。视频从「能不能出片」切到「能不能按时交差」。",
    "成片格式碰上 harness 比模型值钱：Runway Ruby 把 H3 / Seedance 接到 EXR / ProRes；NVIDIA AVO 用同一颗 Opus 5 把 ARC-AGI-3 从约 30% 拉到 100%。Claude 8/24 再宕约 3.4 小时——美术 Agent 必须双轨。"
  ],
  layers: {
    A: {
      tag: "A 层",
      title: "游戏美术应用层",
      hint: "点卡片展开价值与行业判断 →",
      items: [
        {
          idx: "01",
          title: "MiniMax H3 Fun ControlNet Union：一条权重钉 Canny/Depth/Pose，H3 进入「控场期」",
          summary: "昨天写的是周末社区把 H3 走成绿幕假人 / 精灵连续帧 / 12GB 成片配方。这一窗新信号是控制层：阿里 PAI 把 MiniMax-H3-Fun-Controlnet-Union 放到 Hugging Face——单文件约 6.8GB，只含 control 分支（control_proj_in + 5 个 control_blocks），叠在 H3 基座上。一条权重同时吃 Canny、Depth、HED、MLSD、Pose 控制视频，还能做视频 inpainting。配置必须对上训练布局（control_blocks_places: [0, 10, 20, 30, 40]），guidance 只能 1.0——这是 guidance-distilled，再加 CFG 会糊。社区同期给出 lightx 四步 LoRA + Euler/Beta、768p（约 0.6MP）成片。",
          links: [
            {
              label: "Hugging Face：MiniMax-H3-Fun-Controlnet-Union",
              url: "https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union"
            },
            {
              label: "Hugging Face：MiniMax-H3 基座",
              url: "https://huggingface.co/MiniMaxAI/MiniMax-H3"
            },
            {
              label: "AGI HUNT 日报 8/25：H3 ControlNet",
              url: "https://agihunt.info/daily/latest"
            }
          ],
          value: "昨天的配方解决「能出、能换皮」；ControlNet 解决「镜头和姿态能不能按预演走」。用 Blender 出 Depth/Pose 控制视频再喂 H3，等于把 DCC 中间层接到了可下载权重上。先拿 1 条已有买量镜头：原片抽 Pose → H3 V2V 换角色。",
          impact: "视频模型的下一场不是再卷 15 秒变 30 秒，而是谁先把 ControlNet / 白模 / 时间线做成默认可复现节点。H3 这一周连跳两级：配方 → 控场。"
        },
        {
          idx: "02",
          title: "阿里 Wan 3.0 正式上线：快于实时 + 文档直转 30 秒，视频开始按「交差」计价",
          summary: "8 月 24 日通义万相 Wan 3.0 全网上线（8/6 起公测）。① 单次原生 30 秒，连续运镜 + 多镜头叙事；② 首次支持 doc/xls/ppt/pdf/md 直接当输入（单文件不超过 100MB、50 页）；③ 全能参考：角色、道具、声音、场景、风格；④ 演示称生成时长短于播放时长，接近实时。API 三档：480P 0.3 元/秒、720P 0.6、1080P 1.2；8/24–9/23 百炼/千问七折，折后 0.21/0.42/0.84 元/秒。模型 ID wan3.0-video。社区评测盯特写：脸少了僵死感，口型在剪辑点和语种切换后仍能对齐。",
          links: [
            {
              label: "雷峰网：Wan 3.0 正式上线",
              url: "https://www.leiphone.com/category/industrynews/XGOehdmO7fBF2xnb.html"
            },
            {
              label: "AIbase：定价 + 七折窗口",
              url: "https://news.aibase.com/zh/news/30562"
            },
            {
              label: "人人都是产品经理：文档直转 30 秒评测",
              url: "https://www.woshipm.com/ai/6453472.html"
            },
            {
              label: "万相官网",
              url: "https://tongyi.aliyun.com/wan/"
            }
          ],
          value: "30 秒对游戏 CG/买量已经够一条完整卖点；文档直转对「策划 PPT → 预告草稿」是真降本。七折窗口只到 9/23，本周用 1 份真实分镜表跑 480P 和 1080P 各一条，跟 Seedance×CapCut、H3 配方放同一张选型表。",
          impact: "国内视频三家开始按工作流分工——H3 控场和本地、Seedance 进剪辑台、Wan 吃文档和按时出片。Sora API 9/24 停，这三家就是默认栈。"
        },
        {
          idx: "03",
          title: "Runway Ruby：任意模型出片转 16-bit EXR / ProRes，AI 视频第一次接到成片规范",
          summary: "8/21 Runway 宣布 Ruby 对 Max / Enterprise 开放，8/24 官方 X 明确：Seedance 2.5、Gen-4.5、MiniMax H3 哪个都行，Ruby 转到 16-bit EXR 序列或 10/12-bit ProRes / HEVC，色彩空间 BT.2020，传输 PQ 或 HLG。API POST /v1/video_to_hdr，输出包括 hdr10、hlg、hdr_prores（422 / 422 HQ / 4444）、hdr_exr_sequence（zip 包 half-float OpenEXR + sidecar + wav）。上限约 30 秒。这不是生成模型，是成片端。",
          links: [
            {
              label: "The AI Dude：Ruby SDR→HDR / EXR / ProRes",
              url: "https://theaidude.net/blog/runway-ruby-sdr-to-hdr-prores-exr"
            },
            {
              label: "OrcaRouter：Ruby 成片格式说明",
              url: "https://www.orcarouter.ai/blog/runway-ruby-hdr-launch"
            },
            {
              label: "Runway 应用",
              url: "https://app.runwayml.com/"
            }
          ],
          value: "买量和 CG 预告最后一公里一直卡在「生成物是 8-bit mp4，调色/合成接不住」。如果 Ruby 真能把 H3/Seedance 拉成可分级 EXR，管线可以变成：Blender 白模 → 生成 → Ruby 出 EXR → 合成师只做套底。先拿 5 秒测试片进 AE 看色带和高光余量。",
          impact: "生成器在商品化，分发层开始抢最后一公里格式。谁先把 AI 视频接到 DCC 成片规范，谁拿走专业团队的预算。"
        },
        {
          idx: "04",
          title: "4DAnyone：一段手机视频出可换视角 4D 数字人，代码和权重已开源",
          summary: "浙大 / 蚂蚁等提出 4DAnyone（arXiv 2608.20335，8/21）：随便拍的单目视频，不用标定相机，生成重建级多视角视频再抬成 4DGS。现有相机控制视频模型分组后参考视图线性膨胀、结构会漂。RCP 把参考压到固定预算，TCR 在去噪过程中轮换分组。训练数据含自研游戏引擎出的 MVGameHuman。项目页、GitHub（Apache 2.0）和 Hugging Face 权重都在；低显存推理和开源 4DGS 重建仍是待办。",
          links: [
            {
              label: "arXiv 2608.20335：4DAnyone",
              url: "https://arxiv.org/abs/2608.20335"
            },
            {
              label: "4DAnyone 项目页",
              url: "https://4danyone.github.io/"
            },
            {
              label: "GitHub：ant-research/4DAnyone",
              url: "https://github.com/ant-research/4DAnyone"
            }
          ],
          value: "角色展示、皮肤预告、展会循环片——可以拍一段角色视频看能不能出可换机位的 4D 人。注意这是 4DGS 不是进引擎骨骼网格，先当预览/过场。先拿 1 个已有角色表演视频试，记录新视角漂不漂。",
          impact: "3D 人同时打重建速度和换视角一致性。开源权重比再等一个闭源数字人 API 更值得本周摸。"
        },
        {
          idx: "05",
          title: "DiGS-Avatar：单张图 0.71 秒出可 LBS 驱动的 3D 人，绑骨不再等半分钟",
          summary: "中国传媒大学等提出 DiGS-Avatar（arXiv 2608.20759，8/21）：把单图重建改写成 SMPL-X UV 空间上的 2D 潜空间补全，再解码成绑定在模板上的 3DGS。多视角教师产出几何对齐伪真值，单视角学生用扩散补全不可见图。端到端 0.71 秒，训练约 60 GPU 小时；对比 IDOL 约 2.25 秒、SyncHuman 约 51 秒。标准 LBS 直接驱动。短板：极松拖地长裙、SMPL-X 估姿失败会糊脸、往平均体型塌。",
          links: [
            {
              label: "arXiv 2608.20759：DiGS-Avatar",
              url: "https://arxiv.org/abs/2608.20759"
            },
            {
              label: "GitHub：KLMAV-CUC/DiGS-Avatar",
              url: "https://github.com/KLMAV-CUC/DiGS-Avatar"
            }
          ],
          value: "概念图 → 0.71 秒可摆 pose 的 3D 人（高斯，不是 FBX）。关卡会、皮肤评审、买量角色转一圈看形，这个速度够用。Hero 和复杂时装别指望一次过。和 4DAnyone 搭配：静帧用 DiGS，表演视频用 4DAnyone。",
          impact: "数字人从能不能重建切到能不能立刻动。谁能把高斯人导出成引擎骨骼，谁拿走中低模角色预演市场；现在还是两截，但 0.71 秒已经把预演门槛打穿。"
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
          title: "NVIDIA AVO：同一颗 Opus 5，harness 把 ARC-AGI-3 从约 30% 拉到 100%",
          summary: "NVIDIA 技术博客：AVO（Agentic Variation Operators，智能体变异算子）在 ARC-AGI-3 公开集拿下 100.00 RHAE——25 个陌生环境、183 关、6624 步，比同样用 Opus 5 的 VISTA 少约 12% 动作。ARC Prize 把裸模型 Opus 5 标在约 30%。AVO 不是新模型：持久记忆、监督器、失败恢复。这套壳最初给 GPU kernel 优化用——七天探索 500+ 方向，多头注意力核在 DGX B200 上最高超 FlashAttention-4 约 10.5%。公开集已被打满，半私有/私有集没测。Gigazine 8/25：评模型 ≠ 评智能体。",
          links: [
            {
              label: "NVIDIA 技术博客：AVO 100% on ARC-AGI-3",
              url: "https://developer.nvidia.com/blog/nvidia-avo-reaches-100-on-arc-agi-3-demonstrating-a-frontier-level-general-purpose-architecture-for-long-horizon-autonomous-agents/"
            },
            {
              label: "The New Stack：Opus 5 30% → AVO 100%",
              url: "https://thenewstack.io/nvidia-avo-arcagi3-benchmark/"
            },
            {
              label: "Gigazine 8/25：harness 决定长时程表现",
              url: "https://gigazine.net/gsc_news/en/20260825-nvidia-avo/"
            }
          ],
          value: "美术 Agent 现在的瓶颈不是再换一个旗舰，是记忆和卡住重启。质检 Agent 如果每轮忘记上一张为什么挂，就会原地抽卡。把失败样例 + 通过标准 + 已试过的改法写成持久日志，比把模型从 Sonnet 升到 Opus 更值钱。",
          impact: "上游叙事从更大的模型切到更好的壳。和昨天 Vercel 开源吃量、旗舰吃钱是同一条线——壳用开源跑，旗舰只在监督器拍板时出场。",
          conduction: "本周不要上新模型。给现有看图质检 Agent 加三样：失败样例库、卡住换策略的监督规则、可回放的步骤日志。用同一批 20 张图对比裸旗舰 vs 小模型+壳，看可用率差多少。"
        },
        {
          idx: "02",
          title: "Anthropic：8/24 多模型错误率再升高，8 月旗舰已经不是能单绑的生产依赖",
          summary: "官方状态页：8/24 04:50–07:36 UTC（北京时间 12:50–15:36）Claude Mythos 5 / Fable 5 / Opus 5 / Opus 4.8 请求错误率升高，波及 claude.ai 和 API，约 3.4 小时后恢复。同日还有两段登录故障。往前翻：8/12 至 8/20 几乎隔天都有模型或登录事故。PCMag、TNW 同日跟进。此刻状态页已回到 All Systems Operational，90 天 claude.ai 可用性约 99.35%。",
          links: [
            {
              label: "Anthropic 官方状态页",
              url: "https://status.anthropic.com/"
            },
            {
              label: "IsDown：8/24 Elevated errors 事故时间线",
              url: "https://isdown.app/status/claude-ai/incidents/642920-elevated-errors-for-multiple-models"
            },
            {
              label: "PCMag：Anthropic 称已修复",
              url: "https://uk.pcmag.com/ai/166872/is-claude-down-ai-chatbot-slowly-recovers-from-latest-outage"
            }
          ],
          value: "风格终审、复杂分镜、看图拍板如果只走 Claude，一次午间事故就能停产。昨天写开源扛量、旗舰拍板还是账单逻辑；今天是可用性逻辑——拍板模型也要有热备。Codex / GPT-5.6 Sol / DeepSeek V4 至少备一条。",
          impact: "Anthropic 8 月把「旗舰很强」和「旗舰经常挂」同时交给市场。企业会为强付溢价，但不会为单点故障再加预算。双轨会从建议变成默认。",
          conduction: "今天下午就把美术 Agent 的拍板路由写成：Claude 超时/5xx → 切 GPT-5.6 Sol 或 DeepSeek V4 Pro，并打故障日志。列一份「哪些任务绝对不能只绑 Claude」清单。"
        },
        {
          idx: "03",
          title: "@fchollet：时间线正在变成「回音的回音」——买量和社区内容先过一道反 slop 闸",
          summary: "8/22 20:36（美西）François Chollet（@fchollet，ARC-AGI 作者）发帖：「越来越大比例的社交媒体是 slop 网红用 AI 发帖、机器人在下面回。回音的回音的回音。」Digg 同日转述，原帖未核到 status ID，以上为权威媒体转述。Victor Taelin 跟帖称时间线是 engagement farmer 的复制再复制。买量素材、官方社媒、社区二创已经和同一套生成器抢注意力。模型越听话，画面越平均，前 3 秒越难停住真人。",
          links: [
            {
              label: "Digg 转述：Chollet 点名 AI slop 回音壁（8/22）",
              url: "https://digg.com/tech/xz86e0me"
            }
          ],
          value: "买量 A/B 如果全是同一套 Seedance/H3 腔，CTR 会一起掉，还看不出是素材问题还是平台问题。风格终审加一条硬规则：这张/这条能不能一眼从时间线 slop 里挑出来。过不了就重做参考、加实拍、加品牌特有的脏和破。",
          impact: "生成成本趋零之后，稀缺的是「不像生成」。这和昨天 swyx 说的模拟玩家/审核是同一件事的反面——一边用假玩家滤掉明显不行的，一边用人眼滤掉太平均的。",
          conduction: "本周只改一处质检表：买量前 3 秒、官方社媒主视觉，增加「不像时间线 slop」一票否决。抽最近 20 条已投素材，标多少条放进现在的信息流会直接被滑走。"
        }
      ]
    }
  },
  actions: [
    "H3 ControlNet 控场 PoC：挑 1 条已有买量/CG 镜头，抽 Pose 或 Depth 当控制视频，用 MiniMax-H3-Fun-Controlnet-Union 做 V2V 换角色，记录站位/运镜保持率和人脸糊的分辨率阈值（先 0.6MP 成片）。",
    "Wan 3.0 文档直转：拿 1 份真实分镜 PPT 或策划案，在七折窗口内跑 480P 和 1080P 各一条 30 秒，跟 Seedance×CapCut、H3 配方放同一张成本/可用率表。",
    "Ruby 成片格式摸底：用 H3 或 Seedance 出 5 秒 SDR，经 Runway Ruby 转 EXR 或 ProRes 422 HQ，丢进 AE/Nuke 看色带、高光余量和音频是否同步——过不了就别对客户承诺 HDR 交付。",
    "数字人两条预演：静帧概念图走 DiGS-Avatar（0.71 秒、看 LBS 摆 pose）；角色表演视频走 4DAnyone（看换视角漂不漂）。各测 3 个角色，输出「预演用谁、什么场景绝对不用」。",
    "拍板双轨 + 壳：今天下午给美术 Agent 加 Claude 5xx/超时热备（Sol 或 V4 Pro）；给看图质检加失败样例库和卡住换策略，用 20 张图对比裸旗舰 vs 小模型+壳。"
  ],
  timeline: {
    current: "2026-08-25",
    nodes: [
      {
        type: "day",
        date: "2026-08-25",
        label: "08-25"
      },
      {
        type: "week",
        id: "w35",
        label: "W35",
        range: "08-24 ~ 08-30",
        focus: "H3 从配方跳到 ControlNet 控场；Wan 3.0 正式商用（文档直转 30 秒、快于实时、七折窗口到 9/23）；Runway Ruby 把生成物接到 EXR/ProRes 成片规范；4DAnyone/DiGS 把数字人推进到可换视角与 0.71 秒 LBS；AVO 证明 harness 比换模型更值钱，Claude 8/24 再宕必须双轨。"
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
        range: "08-01 ~ 08-25",
        focus: "AI 3D 精度突破（Hi3D 2048³）+ Seedance 2.5 3D 白模视频工作流并坐进剪辑台 + H3 从配方走到 ControlNet 控场 + Wan 3.0 文档直转正式商用 + Ruby 接到 EXR/ProRes 成片格式 + 4D 数字人开源 + 3D 生成进入 5–6 秒交互速度 + 开源 token 用量过半。AI 美术生产从单点工具进入工具链编排、成片规范与成本/可用性分层阶段。"
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
      }
    ]
  }
};
