window.BRIEFING = {
  "meta": {
    "date": "2026-09-18",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "引擎侧：Unreal MCP Server v5.0.0-beta（9/12）把「看见→校验→可回滚改」做成编辑器 Agent 底线——美术批改 UI/材质别再信口头 success。",
    "三倒计时：Sora Videos API 9/24 关停（T-6，官方替代仍空）；gemini-omni-flash-preview 9/30（T-12）迁 1.1 要保 previous_interaction_id；gemini-2.5-flash-image 最早 10/02；Antigravity May 预览 10/05→09-2026。",
    "上游：DeepMind Institute 落地（Hassabis 提美方前沿标准体）；Amodei 一手文写清「嵌入评估员」工位级访问；Dreamforce 上 Huang 拒新法、Altman/Amodei 要 pace——采购按供应商分列，不收统一口号。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "Unreal MCP Server v5：Agent 能「看见」改完没，再谈批改 UI/材质",
          "summary": "StraySpark 于 9/12 发布 Unreal MCP Server v5.0.0-beta（UE 5.8.2，Win64）。相对 v4.6：内置工具 455→523、类别 64→70，但主线不是堆接口，而是证据链——编辑器表面捕获（含 paint 就绪判定）、九类只读校验器（Blueprint/UMG/动画/材质/Niagara/声音/PCG 等统一 issues[]）、带 expected_revision 的补丁、Actor change plan（plan/apply/revert）、以及入口级 Scope。对游戏美术/技术美术：用 Agent 批量改 HUD、材质参数、场景 actor 时，终于能要求「改完截图+校验」而不是工具返回 success 就结案。明确限制：beta、仅 Win64；macOS/Linux 留在 v4.6.2；UE 5.7 留在 v4.0.0。",
          "links": [
            {
              "label": "StraySpark：Unreal MCP Server v5",
              "url": "https://www.strayspark.studio/blog/unreal-mcp-server-v5-verified-editing-ue58"
            },
            {
              "label": "StraySpark 文档入口",
              "url": "https://www.strayspark.studio/docs"
            }
          ],
          "value": "美术批改可验收：同一失败模式（锚点错、材质回默认）能在当次会话被帧证据拦住。",
          "impact": "beta+Win64；未跑满 soak。别上生产主干，先开隔离工程验收 Visual/Validator 两条路径。",
          "tags": [
            "Agent",
            "3D"
          ],
          "action": "UE 5.8 Win64 测试工程装 v5 beta：对 1 个 UMG + 1 个材质各跑「改→capture→validate」一轮，记 not_ready / revision 冲突次数。",
          "sourceType": "一手"
        },
        {
          "idx": "02",
          "title": "Antigravity preview-09-2026：沙箱 Agent 默认真身 3.8 Flash；May 版 10/5 EOL",
          "summary": "Gemini 弃用表（页脚更新至 2026-09-17 UTC）新增托管 Agent：antigravity-preview-09-2026（无关闭日）；antigravity-preview-05-2026 最早 2026-10-05 关停，替换到 09-2026。官方 Antigravity 文档示例已钉 09-2026：单次 Interactions 调用可在 Google 托管 Linux 沙箱里跑代码、管文件、搜网页/抓 URL，默认真身 gemini-3.8-flash，可挂远程 MCP、设 max_total_tokens。对美术管线：适合「批量重命名贴图、写校验脚本、拉竞品参考页再出表」这类 Agent 活，不是生图本身。计费按底层 token+工具循环，官方估复杂任务可到数百万 token。",
          "links": [
            {
              "label": "Gemini：Antigravity agent 文档",
              "url": "https://ai.google.dev/gemini-api/docs/antigravity-agent"
            },
            {
              "label": "Gemini API：Deprecations（含 Managed agents）",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            },
            {
              "label": "Managed agents quickstart",
              "url": "https://ai.google.dev/gemini-api/docs/managed-agents-quickstart"
            }
          ],
          "value": "美术脚本/批处理可外包给托管沙箱，少在本机开半吊子 Agent 环境。",
          "impact": "Preview 会变；5 月字符串 10/5 会断。务必设 max_total_tokens，避免一次「整理资源库」吃穿预算。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "全库搜 antigravity-preview-05-2026；本周钉到 09-2026，并用 max_total_tokens=50000 跑一条「导出贴图清单 CSV」冒烟。",
          "sourceType": "一手",
          "cost": "May 预览 10/05 EOL · 复杂任务可至 ~$5/次"
        },
        {
          "idx": "03",
          "title": "Omni preview→1.1（T-12）：别只换模型名，保住编辑状态",
          "summary": "gemini-omni-flash-preview 仍写 2026-09-30 关停（今天起 T-12），替换 gemini-omni-1.1-flash。相对昨日「全库搜字符串」，今日增量是合约层：多轮编辑依赖 previous_interaction_id；store=false 的一锤子任务事后不可再 conversational edit；上传成片编辑/延展单段≤10s、只可尾部追加、总长约 40s；1080p/4K 文档口径为升采样勿当原生；EEA/瑞士/英对上传成片编辑有区域限制。弃用表同日还提醒 gemini-2.5-flash-image 最早 2026-10-02→gemini-3.1-flash-image-preview。Comfy/自建网关若只改 model 字段、丢掉 interaction 谱系，宣发「改一句台词」会在 9/30 后整段重做。",
          "links": [
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            },
            {
              "label": "Gemini Omni 生成与编辑指南",
              "url": "https://ai.google.dev/gemini-api/docs/omni"
            },
            {
              "label": "Google：Omni 1.1 Flash 博文",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"
            },
            {
              "label": "IndieSeek：Omni 迁移清单（对照）",
              "url": "https://indieseek.co/blogs/gemini-omni-1-1-flash-ga-preview-migration-checklist/"
            }
          ],
          "value": "迁移验收从「能出片」升级到「第二轮窄编辑还能保住未点名元素」。",
          "impact": "把 preview 当 rollback 会在 9/30 一起死。生图侧 10/02 的 2.5-flash-image 别漏。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "抽 3 条生产任务：核对是否持久化 interaction_id；store=false 的 UI 标「不可再编辑」；同一镜跑 360p 草稿→升采样对照账单。",
          "sourceType": "一手",
          "cost": "Preview 9/30 EOL · T-12 · 360p≈1/3 价"
        },
        {
          "idx": "04",
          "title": "Sora Videos API 关停 T-6：导出窗口优先，官方替代仍空",
          "summary": "OpenAI 弃用表仍写：Videos API 与 sora-2 / sora-2-pro 及 dated snapshots 于 2026-09-24 永久关停，Recommended replacement 为空。距今 6 天。Help Center 继续建议尽快导出历史成片（sora.chatgpt.com/sunset）；应用端已于 4/26 停，API 是最后一刀。相对昨日「Comfy/Omni 替代扳手已齐」叙事，今日动作优先级改成：未备份资产先导出，再谈同镜三家对照表签字。没有官方替身＝迁移责任全在买方。",
          "links": [
            {
              "label": "OpenAI：Deprecations（Sora/Videos）",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "OpenAI Help：Sora discontinuation",
              "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"
            },
            {
              "label": "Sora 导出入口（sunset）",
              "url": "https://sora.chatgpt.com/sunset"
            }
          ],
          "value": "6 天窗口里「导出」比「再调一次 API」更保值。",
          "impact": "官方替代栏空＝任何「我们会平滑迁移」口头承诺都不可写进上线门禁。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "今天完成：sunset 导出未备份成片；生产图/脚本清零 sora-2* 与 /v1/videos；同 3 镜对照表签字人落到人。",
          "sourceType": "一手",
          "cost": "9/24 硬关停 · T-6 · 无官方替代"
        },
        {
          "idx": "05",
          "title": "FLUX Video Edit 价签落地：$0.03/秒输出——先算「改」还是「重跑」",
          "summary": "BFL 产品页写明 FLUX Video Edit [fast]：已有 MP4+提示做局部改（去物/换景/改屏显字/对口型等），未点名内容保持；输入≤15s/50MiB；输出同长宽比、24fps、最高约 720p；计费 $0.03/输出秒（10s≈$0.30，约 50s 出结果）；拒片不收费。与昨日 Comfy 0.36「节点进图」互补：今天补的是采购与分镜决策——宣发小改用 Edit 堆叠，大改叙事仍走文/图生视频。高于 720p 需另接 Upscale。不等同 FLUX 3 Video（后者是生成新片）。",
          "links": [
            {
              "label": "BFL：FLUX Video Edit 产品页",
              "url": "https://bfl.ai/video-edit"
            },
            {
              "label": "BFL：FLUX Video Edit API 文档",
              "url": "https://docs.bfl.ai/flux_tools/flux_video_edit"
            },
            {
              "label": "OpenRouter：flux-video-edit 定价对照",
              "url": "https://openrouter.ai/black-forest-labs/flux-video-edit"
            }
          ],
          "value": "10 秒成片 3 毛钱量级试错，比整段重生成更适合「去 logo / 换道具色」。",
          "impact": "720p 封顶；商用条款与地区合规仍要法务过。别把 Edit 当无限次免费合成。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "挑 1 条已锁定宣发成片：用「去标」与「换道具」各跑 1 次，记成功率与是否还要 Upscale 预算。",
          "sourceType": "一手",
          "cost": "$0.03/输出秒 · 10s≈$0.30"
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
          "title": "DeepMind Institute：Hassabis 提美方前沿标准体，评估可「留底题」",
          "summary": "TechCrunch 9/17：Google / DeepMind 启动 DeepMind Institute，董事含 Shane Legg、James Manyika、Demis Hassabis（Legg 任 managing editor），首批四篇随笔覆盖经济政策、可读推理、人类繁荣与前沿评估框架。Hassabis 文提出美方主导的前沿模型标准体：初期自愿、发版前最多约 30 天送审；成熟后可用「held-out」未公开题防刷榜，并可视情况抬到协调放缓。另有 DeepMind 安全向随笔谈限制不透明串行深度。本环境无 X 直连，据 TechCrunch 转述 @demishassabis / DeepMind 线。",
          "links": [
            {
              "label": "TechCrunch：DeepMind Institute（9/17）",
              "url": "https://techcrunch.com/2026/09/17/google-deepmind-launches-institute-to-widen-the-agi-debate/"
            },
            {
              "label": "Gemini Deprecations（对照平台治理节奏）",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            }
          ],
          "value": "「标准体 + 留底题」若成真，模型发版可能多出固定评估窗——管线排期要留缓冲。",
          "impact": "随笔≠立法。短期仍是叙事，但采购可预埋「发版评估窗口」问询项。",
          "tags": [
            "授权",
            "Agent"
          ],
          "action": "供应商问卷加一列：是否接受第三方 held-out 评估、报告能否给发行方看。",
          "sourceType": "转述",
          "conduction": "接 A 层 Omni/Antigravity/Sora 弃用：上游越爱谈标准，买方越要自己的迁移日历——别等标准体替你留窗口。"
        },
        {
          "idx": "02",
          "title": "Amodei 一手文：嵌入评估员要工位级访问；RSI 要「限速」",
          "summary": "Dario Amodei《We Must Pace the Frontier》（2026-09）一手落地三步：①嵌入第三方评估员（工位、工牌、公司电脑、近似内部风控权限，合同允许公开关键不利结论，Anthropic 单方面承诺）；②民主国家内协调；③全球协调。文中两动机：今夏起递归自改进（RSI）加速；以及 OAI-HF 等 agent 群失控案例。相对昨日 TechCrunch「要嵌入评估」新闻，今日可核对一手细节：不是公关形容词，是访问与披露条款。本环境未调 X，直接读官网长文。",
          "links": [
            {
              "label": "Dario Amodei：We Must Pace the Frontier",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            },
            {
              "label": "Forbes：Amodei 谈 RSI（9/17 转述）",
              "url": "https://www.forbes.com/sites/johnwerner/2026/09/17/amodei-cites-recursive-self-improvement-in-september-essay/"
            }
          ],
          "value": "谈「第三方审计」时，可对照：有没有工位级访问与不利结论公开权。",
          "impact": "若业界真限速 RSI，模型节奏可能更不齐——美术工具链更要多供应商。",
          "tags": [
            "授权",
            "Agent"
          ],
          "action": "合同附件对照 Amodei 清单：评估方驻场权限、redact 边界、不利结论可否披露。",
          "sourceType": "一手",
          "conduction": "接 A 层关停潮：供应商自我限速≠你的 API 更稳；弃用通知窗口仍要写进 SLA。"
        },
        {
          "idx": "03",
          "title": "Dreamforce 三角：Amodei/Altman 要 pace，Huang 称「不必新法」",
          "summary": "Diginomica 9/15 报道 Dreamforce 上 Benioff 分别追问 Amodei、Altman、Huang。Amodei 坚持 pace 与行业标准；Altman 强调世界应能信任厂商「做正确的事」、必要时可放缓或停下；Huang 明确反对为 AI 立新规，称安全是工程问题、「创新速度 vs 安全产品」是假二选一，并重申不会因放缓叙事停步。相对昨日单抽 @sama「trust us」金句，今日增量是三方对立图谱——同一采购清单不能用同一套合规话术过会。无 X 直连，据 Diginomica 转述。",
          "links": [
            {
              "label": "Diginomica：Dreamforce 安全辩论（9/15）",
              "url": "https://diginomica.com/dreamforce-2026-ai-safety-debate-comes-dreamforce-benioff-hosts-amodei-altman-and-huangwith-telling"
            },
            {
              "label": "SF Standard：Altman「trust us」（对照）",
              "url": "https://sfstandard.com/2026/09/16/sam-altman-trust-us/"
            }
          ],
          "value": "选型会上把供应商标成 pace 派 / 工程自治派，避免一份问卷打天下。",
          "impact": "口号分裂时，美术侧只认：弃用通知天数、数据驻留、商用权属三列。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "本周供应商表加标签列：pace / 自治；NVIDIA 生态与 Anthropic/OpenAI API 分列风险备注。",
          "sourceType": "转述",
          "conduction": "接 A 层 FLUX/Omni/Sora 账单：算力方喊冲、模型方喊慢时，你的单价与可用性都可能抖——对照表比站队重要。"
        }
      ]
    }
  },
  "actions": [
    "Sora T-6：今天导出 sunset 未备份成片；清零 sora-2* 与 /v1/videos；同 3 镜对照表签字。",
    "Omni T-12：钉 omni-1.1-flash；验收 previous_interaction_id；store=false 标不可再编辑；顺手登 2.5-flash-image（10/2）。",
    "Antigravity：05→09-2026；冒烟任务加 max_total_tokens。",
    "UE：Win64 测试工程试 MCP v5「改→capture→validate」；mac/Linux 勿升。",
    "FLUX Edit：1 条成片跑去标/换道具，核对 $0.03/s 与是否要 Upscale。"
  ],
  "timeline": {
    "title": "时间轴",
    "nodes": [
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
        "focus": "Sora 9/24 T-6 导出优先；Omni preview→1.1 保编辑状态（T-12）；Antigravity 09-2026（May 10/5 EOL）；UE MCP v5 验证改；FLUX Edit $0.03/s；DeepMind Institute + Amodei 嵌入评估 + Dreamforce 三角；跳过 9/12–9/14。"
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
        "range": "09-01 ~ 09-18",
        "focus": "Sora 9/24 T-6；Omni 9/30 T-12 + 2.5-flash-image 10/02；Antigravity 10/05；UE MCP v5；FLUX Edit 价签；Comfy 0.36/WorldGen 已报；上游 Institute/嵌入评估/Dreamforce；跳过 9/12–9/14（不造）。"
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
