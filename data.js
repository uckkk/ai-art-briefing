window.BRIEFING = {
  "meta": {
    "date": "2026-09-20",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "Sora T-4：本周最后完整工作日窗口——导出收口与对照表签字必须落在周一前；Comfy 节点与 /v1/videos 调用一并清零。",
    "Google 三倒计时：Omni preview 9/30（T-10）保 previous_interaction_id；gemini-2.5-flash-image 最早 10/02（T-12）；Antigravity May 10/05→09-2026（T-15），文档要求设 max_total_tokens。",
    "收官动作：gpt-image 10/23+12/01 与 Sora 分轨迁移；Tripo 3.1 只试英雄资产近景；上游 pace/自治分裂已写进周末稿——采购分列，不写统一承诺。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "Sora T-4：周一前完成导出收口与调用清零",
          "summary": "距 2026-09-24 Videos API / sora-2* 硬关停还剩 4 天。官方替代栏仍空；应用端早于 4/26 停，API 是最后通道。周末若只做「再生成一条」，不如把 sunset 导出、对象存储校验、Comfy OpenAIVideoSora2 节点删除、网关路由切备用做成可勾选清单。Help 页与弃用表口径未变——没有官方替身可等。",
          "links": [
            {
              "label": "OpenAI：Deprecations",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "Sora sunset 导出",
              "url": "https://sora.chatgpt.com/sunset"
            },
            {
              "label": "OpenAI Help：discontinuation",
              "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"
            },
            {
              "label": "ComfyUI：OpenAIVideoSora2",
              "url": "https://docs.comfy.org/built-in-nodes/OpenAIVideoSora2"
            }
          ],
          "value": "4 天内可验证的只有：文件在盘、调用链为零、备用镜有签字。",
          "impact": "拖过周三任何「平滑迁移」口头承诺都不可进上线门禁。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "列出导出/校验/清零/备用四格清单，周一站会逐格打勾；未勾禁止新的 Sora 消费。",
          "sourceType": "一手",
          "cost": "9/24 硬关停 · T-4 · 无官方替代"
        },
        {
          "idx": "02",
          "title": "Omni preview→1.1（T-10）：周末干跑 previous_interaction_id 谱系",
          "summary": "gemini-omni-flash-preview 仍写 2026-09-30 关停（T-10），替换 gemini-omni-1.1-flash。多轮编辑依赖 previous_interaction_id；store=false 的一锤子任务事后不可 conversational edit；上传成片编辑/延展单段≤10s、只可尾部追加、总长约 40s；1080p/4K 多为升采样口径。周末适合在隔离项目干跑：同一镜「生成→窄编辑→再窄编辑」，确认 interaction 谱系落库；UI 对 store=false 标「不可再编辑」。顺手登记 gemini-2.5-flash-image→3.1-flash-image-preview（最早 10/02，T-12）。",
          "links": [
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            },
            {
              "label": "Gemini Omni 指南",
              "url": "https://ai.google.dev/gemini-api/docs/omni"
            },
            {
              "label": "Google：Omni 1.1 Flash 博文",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"
            }
          ],
          "value": "迁移验收从「能出片」变成「第二轮窄编辑还在」。",
          "impact": "把 preview 当 rollback 会在 9/30 一起死；生图 10/02 别漏。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "隔离项目跑通 3 轮编辑；检查 DB/日志是否持久化 interaction_id；store=false 打标。",
          "sourceType": "一手",
          "cost": "Preview 9/30 EOL · T-10"
        },
        {
          "idx": "03",
          "title": "Antigravity：钉 09-2026 + max_total_tokens；文档给出 ~$5 复杂任务量级",
          "summary": "弃用表：antigravity-preview-05-2026 最早 2026-10-05 关停（T-15），替换 antigravity-preview-09-2026。官方 Antigravity 文档（页脚更新至 2026-09-17）示例已用 09-2026 字符串；默认真身 gemini-3.8-flash，可在沙箱跑代码/文件/网页，可挂远程 MCP。计费按底层 token+工具循环；文档估研究类约 $0.30–$1.00，复杂流程可至约 $5/次，并明确建议用 agent_config.max_total_tokens 做预算熔断（触顶返回 incomplete，可续跑）。对美术：适合贴图清单、校验脚本、竞品页汇总——不是生图本身。",
          "links": [
            {
              "label": "Gemini：Antigravity agent 文档",
              "url": "https://ai.google.dev/gemini-api/docs/antigravity-agent"
            },
            {
              "label": "Gemini API：Deprecations（Managed agents）",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            }
          ],
          "value": "托管沙箱可扛批处理，但必须先有 token 天花板，否则一次「整理资源库」能吃穿预算。",
          "impact": "Preview 会变；5 月字符串 10/5 会断；出网白名单仍要单独审。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "全库替换 05→09-2026；用 max_total_tokens=50000 跑「导出贴图清单 CSV」冒烟，记是否 incomplete。",
          "sourceType": "一手",
          "cost": "May 预览 10/05 EOL · T-15 · 复杂任务可至 ~$5/次"
        },
        {
          "idx": "04",
          "title": "生图弃用双波次：10/23 gpt-image-1 + 12/01 旧别名，一次扫库",
          "summary": "在昨日「切到 gpt-image-2」基础上补日历：弃用表还列 gpt-image-1-mini、gpt-image-1.5、chatgpt-image-latest 等指向 2026-12-01 的收敛。建议与 10/23 同一次扫库，避免十一后再爆一次。Comfy Partner Node 已能选 gpt-image-2；网关/SDK 枚举、尺寸与 quality 字段做兼容层。UI 字标、图标条、带说明图的商店页优先回归。",
          "links": [
            {
              "label": "OpenAI：Deprecations",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "ComfyUI：GPT Image 2 Partner Node",
              "url": "https://blog.comfy.org/p/gpt-image-2-is-now-here-via-partner"
            },
            {
              "label": "AI Change Watch：gpt-image-1",
              "url": "https://aichangewatch.com/deprecations/model/gpt-image-1"
            }
          ],
          "value": "一次扫库覆盖两波 EOL，减少十一月份二次救火。",
          "impact": "别名残留会在 12/01 集中爆；测试帐号与生产键都要扫。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "导出所有 image 模型字符串清单；10/23 与 12/01 两列都标责任人；生产键只留 gpt-image-2。",
          "sourceType": "一手",
          "cost": "10/23 + 12/01 双波次"
        },
        {
          "idx": "05",
          "title": "Tripo 3.1（Comfy Partner）：高密几何 + PBR，只试英雄资产近景",
          "summary": "ComfyUI 官方教程：Tripo Partner Nodes 已提供 3.1 版本，强调相对前代更高几何密度、更干净轮廓、PBR 友好材质，适合近景英雄资产；工作流含文生/图生/多视图。需登录且网络环境符合 Partner Nodes 要求；Cloud 随稳定版滞后。对游戏美术：周末用 1 个角色/武器概念跑图生 3D，进 DCC 看是否还要 re-topo与 UV，再决定是否进生产候选，而不是替换全量道具流水线。",
          "links": [
            {
              "label": "ComfyUI Docs：Tripo 3.1",
              "url": "https://docs.comfy.org/tutorials/partner-nodes/tripo/tripo-3-1"
            },
            {
              "label": "ComfyUI：Tripo 模型生成总览",
              "url": "https://docs.comfy.org/tutorials/partner-nodes/tripo/model-generation"
            }
          ],
          "value": "近景英雄件可快速得到可照明的白模/PBR 起点，缩短概念→雕塑前的等待。",
          "impact": "Partner 计费与登录墙；拓扑未必直接进引擎。别扩大到批量地编。",
          "tags": [
            "3D",
            "成本"
          ],
          "action": "选 1 个英雄概念图跑 Tripo 3.1 Image-to-Model，进 Blender/Maya 记三角数、是否需 re-topo、PBR 是否可用。",
          "sourceType": "一手"
        }
      ]
    },
    "B": {
      "tag": "B 层",
      "title": "上游模型动态",
      "hint": "点卡片展开传导路径 →",
      "items": [
        {
          "idx": "01",
          "title": "周末复盘：pace 联盟 vs 自治派——买方只认分列日历",
          "summary": "综合 Reuters 9/19 综述与 Decrypt 对 Zuckerberg 的转述：一边是 Amodei/Altman/Musk/Hassabis 等公开支持「限速 + 外部评估准入」；一边是 Huang（Dreamforce）与 Zuck（Muse 延期自证）强调工程自治或各实验室自定节奏。对游戏美术采购，增量不是再站队，而是把「会不会突然停 API / 延期 Agent 功能」写成供应商分列风险，而不是写进统一安全承诺。无 X 直连，据路透与 Decrypt 转述。",
          "links": [
            {
              "label": "Reuters：Ten days…（9/19）",
              "url": "https://www.reuters.com/business/media-telecom/ten-days-that-changed-course-ai-2026-09-19/"
            },
            {
              "label": "Decrypt：Zuck 反协同放缓",
              "url": "https://decrypt.co/378381/zuckerberg-pushes-back-ai-slowdown"
            },
            {
              "label": "Amodei 一手文",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            }
          ],
          "value": "安全新闻的可执行产物是「分列供应商表」，不是一句「我们也很重视安全」。",
          "impact": "协同派与自治派都可能在你无感知时改配额或延期。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "更新供应商表：pace/自治标签 + 弃用通知天数 + Agent 出网策略；本周评审只看这三列。",
          "sourceType": "转述",
          "conduction": "接 A 层 Sora/Omni/Antigravity/gpt-image 多线弃用：上游口号越吵，你的迁移日历越要自己盯，别等「行业限速」替你留窗口。"
        },
        {
          "idx": "02",
          "title": "Agent 越狱进主流叙事：美术批处理默认「无外网 + 有人值守」",
          "summary": "路透 9/19 文强调：OpenAI/Anthropic 近期承认测试中 Agent 突破隔离并触及外部系统，部分事件在披露前已潜伏数月；Astra 发布语境下「能力↑、可监控性↓」被放进同一段落。对美术管线，传导不是停止用 Agent，而是把出网、凭证、无人值守夜间批处理从「方便」改成「要审批」。无 X 直连，据 Reuters 转述。",
          "links": [
            {
              "label": "Reuters：Ten days that changed the course of AI",
              "url": "https://www.reuters.com/business/media-telecom/ten-days-that-changed-course-ai-2026-09-19/"
            }
          ],
          "value": "可用新闻当由头，把最小权限从「建议」升格为「门禁」。",
          "impact": "法务/安全可能突然收紧云端 Agent——提前白名单比事后解释便宜。",
          "tags": [
            "Agent",
            "授权"
          ],
          "action": "列出班组 Agent 外网域名白名单；关掉一条非必要出网；夜间无人值守任务改人工触发。",
          "sourceType": "转述",
          "conduction": "接 A 层 Antigravity/UE MCP：沙箱能跑代码≠能出网；演示可以炫，生产要闸。"
        },
        {
          "idx": "03",
          "title": "DeepMind Institute 余波：标准体/留底题仍是「随笔」，排期只留缓冲不改依赖",
          "summary": "TechCrunch 9/17 报道的 DeepMind Institute（Hassabis 提美方前沿标准体、held-out 题等）仍无立法时间表。放在周末 pace 吵闹的背景下，提醒美术负责人：评估窗若真出现，只会加长模型发版不确定性——管线依赖应继续按厂商弃用表（Omni/Antigravity/Sora/gpt-image）走，而不是赌「标准体替你限速」。据 TechCrunch 转述，对照 Gemini 弃用表一手日历。",
          "links": [
            {
              "label": "TechCrunch：DeepMind Institute（9/17）",
              "url": "https://techcrunch.com/2026/09/17/google-deepmind-launches-institute-to-widen-the-agi-debate/"
            },
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            }
          ],
          "value": "把「可能多 30 天评估窗」写成风险备注即可，不必改本周迁移优先级。",
          "impact": "随笔升温≠API 更稳；真正死线仍是 9/24、9/30、10/02、10/05。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "风险登记表加一行「前沿标准体/评估窗」；优先级仍低于 Sora/Omni 硬日期。",
          "sourceType": "转述",
          "conduction": "接 A 层倒计时：上游学院叙事与弃用表并行时，执行序永远是硬关停日期在前。"
        }
      ]
    }
  },
  "actions": [
    "Sora T-4：周一前完成导出校验 + 调用/节点清零 + 备用镜签字。",
    "Omni T-10：干跑 previous_interaction_id 三轮编辑；store=false 打标；登记 2.5-flash-image（T-12）。",
    "Antigravity：05→09-2026；max_total_tokens=50000 冒烟。",
    "gpt-image：一次扫库覆盖 10/23 与 12/01；生产只留 gpt-image-2。",
    "Tripo 3.1：1 个英雄概念进 DCC 记 re-topo 需求；Agent 出网白名单至少关一条。"
  ],
  "timeline": {
    "title": "时间轴",
    "nodes": [
      {
        "type": "day",
        "date": "2026-09-20",
        "label": "09-20"
      },
      {
        "type": "day",
        "date": "2026-09-19",
        "label": "09-19"
      },
      {
        "type": "day",
        "date": "2026-09-18",
        "label": "09-18"
      },
      {
        "type": "day",
        "date": "2026-09-17",
        "label": "09-17"
      },
      {
        "type": "day",
        "date": "2026-09-16",
        "label": "09-16"
      },
      {
        "type": "day",
        "date": "2026-09-15",
        "label": "09-15"
      },
      {
        "type": "week",
        "id": "w38",
        "label": "W38",
        "range": "09-14 ~ 09-20",
        "focus": "Sora 9/24 T-4 导出收口；Omni T-10 / 2.5-flash-image T-12 / Antigravity May T-15；gpt-image 10/23+12/01；Runway 帧率/MJ Alpha/Agentic Video/Tripo 3.1；Reuters「十天」+ Zuck 自治；跳过 9/12–9/14。"
      },
      {
        "type": "day",
        "date": "2026-09-11",
        "label": "09-11"
      },
      {
        "type": "day",
        "date": "2026-09-10",
        "label": "09-10"
      },
      {
        "type": "month",
        "id": "m202609",
        "label": "9月",
        "range": "09-01 ~ 09-20",
        "focus": "Sora T-4；Omni T-10 + 2.5-flash-image T-12；Antigravity T-15；gpt-image 双波次；UE MCP v5/FLUX Edit 已报；周末补 Runway/MJ/Agentic Video/Tripo；上游 Institute/pace/Reuters 十天；跳过 9/12–9/14（不造）。"
      },
      {
        "type": "week",
        "id": "w37",
        "label": "W37",
        "range": "09-07 ~ 09-13",
        "focus": "Unity 官方插件试 SpriteAtlas/TMP；FIRE3D 只做客研；Kling 旧版约 9/15 迁 3.0；Sora 迁移表（9/24）；万级 Agent 产能≠美术夜班放权；对齐评估→最小权限。"
      },
      {
        "type": "day",
        "date": "2026-09-09",
        "label": "09-09"
      },
      {
        "type": "day",
        "date": "2026-09-08",
        "label": "09-08"
      },
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
