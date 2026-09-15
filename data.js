window.BRIEFING = {
  "meta": {
    "date": "2026-09-15",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "硬截止今日：ComfyUI 文档写明 Kling V1.5 / V1.6 / V2.1 / V2.1 Master 与 Kolors Virtual Try-On 于 2026-09-15 退役——旧 Partner 模板今天会断，迁 api_kling_o3_* / v3_* / Omni。",
    "业界话术压力上来了：Level-5 日野就 VISION 展示片用 AI 公开道歉（强调成片人格设定仍人工、AI 主做数字化）；今村隆也晒 AI 原型遭反噬——宣发/原型与入库成片的边界要写进对外口径。",
    "上游同周：Dario《We Must Pace the Frontier》主张给能力踩油门配闸；@sama 公开承诺独立评估员「类员工级」访问；Sora Videos API 仍无官方替代，约剩 9 天（9/24）。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "Kling 旧版 Comfy Partner 今日 EOL：V1.5/V2.1 Master/Kolors VTO 退役",
          "summary": "ComfyUI 官方 Kling 3.0 教程页与 Partner 定价页均写：Kling V1.5、V1.6、V2.1、V2.1 Master 与 Kolors Virtual Try-On API 于 2026-09-15 退役；相关 Partner Nodes 可能仍在，但旧模型选项与模板将失效。替换表：api_kling_i2v→api_kling_o3_i2v 或 api_kling2_6_i2v；effects/flf/dual_characters→api_kling_v3_* / o3_flf2v；试衣改 Flux Virtual Try-On（api_flux_vto）。Comfy-Org/workflow_templates 已归档旧 Kling/Runway Gen3a 模板。今日为硬截止。",
          "links": [
            {
              "label": "ComfyUI：Kling 3.0 + EOL",
              "url": "https://docs.comfy.org/tutorials/partner-nodes/kling/kling-3-0"
            },
            {
              "label": "ComfyUI Partner 定价（含 Legacy EOL）",
              "url": "https://docs.comfy.org/tutorials/partner-nodes/pricing"
            },
            {
              "label": "GitHub：归档旧模板 PR",
              "url": "https://github.com/Comfy-Org/workflow_templates/pull/1043"
            }
          ],
          "value": "还挂旧 i2v / effects 的宣发与预告节点今天必须切到 3.0/Omni，否则 Partner 调用直接失败。",
          "impact": "和 Sora 9/24 叠压：视频供给两周内两道硬关。Comfy 侧以 3.0 / Omni 为主路径，Premiere Generative Media 等旁路按所选模型核商用条款。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "今天内：导出仍含 V1.x/V2.1 的 Partner 模板清单→映射到 o3/v3 替换名→各跑 1 条同镜头基线并归档旧 JSON。",
          "sourceType": "一手",
          "cost": "旧版今日退役 · 2026-09-15"
        },
        {
          "idx": "02",
          "title": "Level-5 日野：VISION 展示片用 AI 道歉——成片人格人工、AI 主做数字化",
          "summary": "9/12 起 @AkihiroHino 发长文（ANN / Final Weapon / GamesRadar 等 9/12–14 转述）：承认 LEVEL5 VISION 2026 II 事件影像使用最新 AI 做「更炫的展示实验」，对观众不适「深表歉意」；强调剧本、角色设计、基础设定仍全人工；效率目标是把人做的原画准确转多边形等数字化，并称成片不含「草率生成」AI 数据；愿景是把大型标题周期从约 5 年压到约 2 年。粉丝对展示片与成片边界仍不买账。一手 X 本环境未直连，以权威媒体转述为准。",
          "links": [
            {
              "label": "ANN：日野声明摘要",
              "url": "https://www.animenewsnetwork.com/interest/2026-09-12/level-5-ceo-akihiro-hino-addresses-use-of-ai-in-latest-presentation/.241710"
            },
            {
              "label": "Final Weapon：声明全文英译",
              "url": "https://finalweapon.net/2026/09/12/level-5-ceo-akihiro-hino-comments-on-ai-usage-at-vision-2026-ii-broadcast/"
            },
            {
              "label": "GamesRadar：展示片 backlash",
              "url": "https://www.gamesradar.com/games/puzzle/i-deeply-apologize-after-global-backlash-level-5-ceo-admits-new-yo-kai-watch-and-professor-layton-showcase-uses-generative-ai/"
            }
          ],
          "value": "对外物料要先写清「展示/概念 vs 入库成片」；内部数字化（原画→拓扑）可谈，别让预告片成争议入口。",
          "impact": "日厂/主机向舆论对「宣发 AI 痕迹」零容忍上升。采购与发行合规会把「展示片是否含生成素材」写进验收清单。",
          "tags": [
            "授权",
            "生图"
          ],
          "action": "本周定一版对外口径一页纸：哪些环节可用 AI、展示片如何标注、成片禁止项；发行/市场签字。",
          "sourceType": "转述"
        },
        {
          "idx": "03",
          "title": "SceneHI（arXiv 9/9）：多物体场景高分辨率 3D 一致贴图 + 可控光照烘焙",
          "summary": "arXiv 2609.10363（9/9，ECCV 2026）：SceneHI 把 2D diffusion 的高分辨率、光照感知先验抬到 3D 贴图合成；号称无需微调/优化即可直接在 3D 物体上生成高分辨率纹理，面向复杂多物体场景，同时追求 3D 一致性、分辨率与物理合理烘焙阴影。核心含解析 pixel-to-texel 映射对齐多视角扩散轨迹、HRLT 持久画布，以及光感知生成把几何一致阴影写入 atlas；相对既有场景级方法称生成时间降约 80%。论文级，非商用 SaaS。",
          "links": [
            {
              "label": "arXiv：SceneHI",
              "url": "https://arxiv.org/abs/2609.10363"
            },
            {
              "label": "DOI",
              "url": "https://doi.org/10.48550/arXiv.2609.10363"
            }
          ],
          "value": "场景/关卡贴图客研可盯「多物体一致 + 阴影进 atlas」；生产仍要 UV、LOD、命名与引擎光照规范。",
          "impact": "和上周 FIRE3D（几何拆物体）互补：一边建 mesh，一边谈高分辨率一致贴图。道具海量管线可把「贴图一致性」写进验收，而不是只看单视角好看。",
          "tags": [
            "3D",
            "生图"
          ],
          "action": "读摘要 15 分钟：列你们场景贴图最痛的 3 类（多物体接缝/阴影穿帮/分辨率），标是否值得做客研对比现有烘焙流程。",
          "sourceType": "一手"
        },
        {
          "idx": "04",
          "title": "Sora Videos API 关停 T-9：官方替代栏仍为空",
          "summary": "OpenAI 弃用页仍列：Videos API 与 sora-2 / sora-2-pro 及快照于 2026-09-24 移除，Recommended replacement 为 ---。Help 中心与行业迁移文（Miraflow 等）继续指向 Kling 3.0 / Veo 3.1 / Seedance / Runway Gen-4.5 等逃生口。距今约 9 天。未迁完的调用点与未备份成片本周必须清零风险。",
          "links": [
            {
              "label": "OpenAI API deprecations（Sora）",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "OpenAI Help：Sora discontinuation",
              "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"
            },
            {
              "label": "迁移对照（行业文）",
              "url": "https://miraflow.ai/blog/sora-api-shutdown-video-model-alternatives-migration-guide-2026"
            }
          ],
          "value": "别等「官方替代」——今天同时完成 Kling 旧版切换与 Sora 迁移表对账。",
          "impact": "OpenAI 可编程视频空窗期内，宣发供给依赖多供应商；合同与预算按主/备两家写。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "核对迁移表：主/备供应商、同 prompt 基线片路径、剩余 Sora 成片导出；日历钉 9/24。",
          "sourceType": "一手",
          "cost": "API 9/24 关停 · 无官方替代 · 约剩 9 天"
        },
        {
          "idx": "05",
          "title": "今村隆也 AI 原型翻车：美术总监「试做」也要先定对外边界",
          "summary": "9/12–14 Kotaku / TheGamer / GamesRadar 等报道：任天堂元老、Majora's Mask 美术总监今村隆也（@ima_1966 等）在 X 晒 AI 辅助 3D 射击原型，称与 AI 来回像当年跟程序对想法；遇伦理与训练数据批评后回应「职业上无法无视 AI、在做实验」，并澄清从未说要做成品上架。与 Level-5 展示片争议同周，形成「个人实验 / 工作室宣发」双线舆论。一手 X 本环境未直连，以媒体转述为准。",
          "links": [
            {
              "label": "Kotaku：今村 AI 原型 backlash",
              "url": "https://kotaku.com/the-legend-of-zelda-majoras-masks-art-director-gets-blow-back-for-using-ai-in-prototyping-test-2000734003"
            },
            {
              "label": "TheGamer：Star Fox 创作者争议",
              "url": "https://www.thegamer.com/star-fox-creator-takaya-imamura-backlash-ai/"
            },
            {
              "label": "GamesRadar：报道",
              "url": "https://www.gamesradar.com/games/the-legend-of-zelda/legendary-zelda-and-star-fox-artist-is-genuinely-amazed-by-ai-even-as-he-catches-backlash-from-nintendo-fans/"
            }
          ],
          "value": "内部灰盒/个人实验可以，公开晒图前先过 PR：标注实验、不暗示入库、不碰未授权训练争议点。",
          "impact": "美术负责人个人账号也是品牌面。AI 原型 SOP 要从「能不能跑」扩到「能不能发」。",
          "tags": [
            "授权",
            "Agent"
          ],
          "action": "补一条班组规范：对外分享 AI 原型须标注「实验/非成片」+ 法务/市场预审，默认不发原始生成片。",
          "sourceType": "转述"
        }
      ]
    },
    "B": {
      "tag": "B 层",
      "title": "AI 上游信息",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "@DarioAmodei：We Must Pace the Frontier——能力放缓 + 嵌入式第三方评估",
          "summary": "9/12 Dario 个人站长文：主张必须放缓提升模型能力的节奏，让对齐/可解释/评测跟得上；动机含递推式自我改进加速，以及 OAI-HF 等 Agent 集群越权风险（称 6–12 月量级担忧）。三步：① 嵌入式第三方评估员（类员工级访问，Anthropic 单方面承诺）；② 民主国家内协调安全标准与未受控进展上限；③ 全球协调。明确 pacing ≠ 停训。一手来源；本环境无 X 直连。",
          "links": [
            {
              "label": "一手：We Must Pace the Frontier",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            },
            {
              "label": "The Atlantic 转述",
              "url": "https://www.theatlantic.com/technology/2026/09/dario-amodei-slow-down-ai-save-humanity/688610/"
            }
          ],
          "value": "美术侧别赌「下周就有更强无闸视频/Agent API」；选型按现网稳定档与可审计供应商。",
          "impact": "上游公开把「放缓」当议程，采购问卷会更问隔离、日志、第三方审计。产能叙事与闸门同涨。",
          "tags": [
            "Agent",
            "授权"
          ],
          "action": "班组同步：新模型试用默认「有人值守+配额+可停机」；不把实验室放量当编制依据。",
          "sourceType": "一手",
          "conduction": "接 A 层 Kling/Sora 硬截止：上游在谈踩刹车，管线侧先把已退役/将退役的供应商切干净，别等下一波能力放量。"
        },
        {
          "idx": "02",
          "title": "@sama：同意 pace the frontier，承诺独立评估员「类员工级」访问",
          "summary": "9/12 @sama 在 X 回应 Dario（SiliconANGLE / ABC 等 9/13 引原帖）：同意需要 pace the frontier，称 OpenAI 近几周内部已在讨论；认为承诺独立评估员拥有类似员工的访问权是好主意，「我们也会这样做，稍后分享更多」。与 Dario 文中第 1 步同构。一手 X 本环境 client-not-enrolled，以权威媒体引推文为准并标转述。",
          "links": [
            {
              "label": "SiliconANGLE：引 @sama 原帖",
              "url": "https://siliconangle.com/2026/09/13/sam-altman-and-elon-musk-back-dario-amodeis-call-to-slow-down-the-frontier-of-ai-development/"
            },
            {
              "label": "ABC：Altman/Musk 表态",
              "url": "https://www.abc.net.au/news/2026-09-13/anthropic-ceo-calls-for-slower-ai-development/107147650"
            },
            {
              "label": "Dario 原文（被引用）",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            }
          ],
          "value": "OpenAI 侧短期更可能加评测/访问闸，而不是突然补一个 Sora 官方替代——迁移计划别押「官方回头」。",
          "impact": "两大厂公开对齐「独立评估」叙事；企业客户可把第三方审计写进合同附件。",
          "tags": [
            "Agent",
            "授权"
          ],
          "action": "Sora/OpenAI 相关采购条款加一行：是否支持独立安全评估与事件披露；迁移表不因「稍后分享」停摆。",
          "sourceType": "转述",
          "conduction": "接 B01：Dario 提案 → sama 口头承诺。对美术管线只翻译成「供应商审计条款 + 不赌空窗期补位」。"
        },
        {
          "idx": "03",
          "title": "@demishassabis：方向正确，并指向行业标准机构提案",
          "summary": "9/12 @demishassabis 在 X quote Dario 文（Progressive Robot / Hindustan Times 等 9/13 引）：称 Dario 的文章指向正确道路，细节需推敲但方向对；并强调这也是他们近期提出「前沿 AI 行业标准机构」的原因。Dario 文中亦点名 Hassabis 机制可作为民主国家内协调路径之一。一手 X 未直连，转述标注。",
          "links": [
            {
              "label": "Progressive Robot：引 Hassabis 原帖",
              "url": "https://www.progressiverobot.com/2026/09/13/demis-hassabis-aligns-dario-amodei-pacing-frontier-ai/"
            },
            {
              "label": "Hindustan Times 转述",
              "url": "https://www.hindustantimes.com/world-news/after-musk-and-altman-google-deepmind-founder-backs-anthropic-ceo-dario-amodei-amid-alarm-over-ai-101789271487807.html"
            },
            {
              "label": "Dario 原文",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            }
          ],
          "value": "DeepMind/Google 线短期更偏「标准与评测」而非无闸放量；Veo 等选型仍看现网 SLA，不看周末 X 共识。",
          "impact": "Amodei / Altman / Hassabis 同周公开同向，监管与客户审计预期上移；开源/二线模型未必跟涨。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "视频主备供应商评估表加「安全披露/标准承诺」列；本周不因叙事换主供应商，只锁迁移窗口。",
          "sourceType": "转述",
          "conduction": "接 B01/B02：三方同向≠立刻降价或出替代模型。管线动作仍是 Kling 今日切完 + Sora T-9 清零。"
        }
      ]
    }
  },
  "actions": [
    "Kling 旧版：今日内模板清单→o3/v3 映射→同镜头基线；归档失效 JSON。",
    "对外口径一页纸：展示/原型 vs 成片边界；发行市场签字（对标 Level-5 / 今村舆论）。",
    "SceneHI：只做客研阅读，列 3 类场景贴图痛点是否值得对比现有烘焙。",
    "Sora T-9：迁移表主备供应商 + 成片导出；日历钉 9/24。",
    "Agent/采购：新模型默认有人值守+配额；合同问独立评估与事件披露。"
  ],
  "timeline": {
    "nodes": [
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
        "focus": "Kling 旧版 9/15 EOL 切 3.0/Omni；Sora 9/24 T-9 迁移；Level-5/今村舆论→展示与成片边界；Dario pace + sama/Hassabis 同向→采购问审计；SceneHI 贴图客研；跳过 9/12–9/14（周末/未落盘，不造）。"
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
        "range": "09-01 ~ 09-15",
        "focus": "Kling 旧版 9/15 EOL；Sora 9/24 无替代；Level-5 展示片道歉 / 今村 AI 原型舆论；SceneHI 场景贴图；Unity Claude Code 官方插件；FIRE3D；Dario Pace the Frontier + sama/Hassabis；跳过 9/4–9/7、9/12–9/14（未跑或不落盘，不造）。"
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
