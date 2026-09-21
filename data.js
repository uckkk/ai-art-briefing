window.BRIEFING = {
  "meta": {
    "date": "2026-09-21",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "Sora T-3：今天起站会只认「导出校验勾选 + 直连调用清零」；Azure Foundry 的 10/15 是另一条日历，别混成「还能拖一周」。",
    "生图目标抬一档：Comfy OpenAIGPTImageNodeV2 已列 gpt-image-2.5-flare / sunburst——生产键别停在 gpt-image-2；10/23+12/01 旧串仍要扫。",
    "本地开源补丁：Qwen-Image-2.1（9/20）原生进 Comfy，RGBA 精灵/图标可直出——但 RESEARCH LICENSE 仅非商用，量产前先问法务。 Google：Omni T-9 / 2.5-flash-image T-11 / Antigravity T-14。上游 Buist 案把 pace 写成采购风险。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "Sora T-3：直连 9/24 与 Foundry 10/15 必须分轨收口",
          "summary": "周一站会窗口：距 OpenAI Videos API / sora-2* 硬关停还剩 3 天，弃用表「Recommended replacement」仍为空；Help 继续指向 sora.chatgpt.com/sunset 导出，关停后数据永久删除，credits 可转 Codex。Microsoft Foundry 另列 sora-2（2025-12-08）Preview 退休日 2026-10-15、无替换——Azure 部署是第二条日历，不是直连宽限。备用镜官方价签（720p 量级）：Omni 1.1 ≈ $0.10/s；Veo 3.1 Lite $0.05 / Fast $0.10 / Standard $0.40（4K $0.60）。今天：导出+对象存储校验签字、清 Comfy OpenAIVideoSora2 与网关 /v1/videos、对照片过门禁；Foundry 用户另登 10/15。",
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
              "label": "Microsoft Foundry：model retirement",
              "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule"
            },
            {
              "label": "Gemini：Pricing（Omni/Veo）",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          ],
          "value": "同一「Sora」品牌下有两条死线；混日历会让周三直连已断、团队还以为有 Foundry 缓冲。",
          "impact": "未分轨清零的网关会在 9/24 集中 4xx/空响应；Azure 侧也别赌 10/15 会有官方替身。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "站会两列签字：① 直连导出/校验/调用清零；② 是否走 Foundry——是则另建 10/15 工单。",
          "sourceType": "一手",
          "cost": "直连 9/24 T-3 · Foundry 10/15 · Omni≈$0.10/s · Veo Lite $0.05/s"
        },
        {
          "idx": "02",
          "title": "gpt-image-2.5 Flare/Sunburst：Comfy 节点已上，生产别停在 2",
          "summary": "OpenAI 9/8 发布 ChatGPT Images 2.5：API 分轨 gpt-image-2.5-flare（日常更快，官方称相对 2.0 延迟可降约 50%）与 gpt-image-2.5-sunburst（精修/编辑精度）。token 标价与 gpt-image-2 同档（文输入 $5/1M、图输入 $8/1M、图输出 $30/1M），但官方提醒 2.5 token 消耗不能用旧计算器估。ComfyUI OpenAIGPTImageNodeV2 已枚举 flare/sunburst，并多出 xhigh/max quality 与 transparent（2 没有透明）。相对昨日「切到 gpt-image-2」：周一把默认生产键抬到 flare，字标/图标/商店图用 sunburst 做对照；10/23 gpt-image-1 与 12/01 旧别名扫库不停。",
          "links": [
            {
              "label": "OpenAI：Introducing Images 2.5",
              "url": "https://openai.com/index/introducing-chatgpt-images-2-5/"
            },
            {
              "label": "API：gpt-image-2.5-flare",
              "url": "https://developers.openai.com/api/docs/models/gpt-image-2.5-flare"
            },
            {
              "label": "API：gpt-image-2.5-sunburst",
              "url": "https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst"
            },
            {
              "label": "ComfyUI：OpenAIGPTImageNodeV2",
              "url": "https://docs.comfy.org/built-in-nodes/OpenAIGPTImageNodeV2"
            }
          ],
          "value": "同价位拿到更快日常档 + 更高精修档，迁移成本主要在模型字符串与质量档回归。",
          "impact": "网关仍钉 gpt-image-2 会错过延迟/透明/xhigh；旧串 10/23·12/01 仍会爆。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "Comfy/网关默认改 flare；挑 10 张 UI 字标跑 sunburst 对照；导出仍含 gpt-image-1* 的键列表。",
          "sourceType": "一手",
          "cost": "token 价同 gpt-image-2 · 延迟宣称约 -50%"
        },
        {
          "idx": "03",
          "title": "Omni preview→1.1（T-9）：本周切生产并锁 interaction_id",
          "summary": "gemini-omni-flash-preview 仍写最早 2026-09-30 关停（T-9），替换 gemini-omni-1.1-flash。官方 Omni 文档示例已全面用 1.1；多轮编辑靠 previous_interaction_id；store=false 不可后续 conversational edit；上传成片编辑/延展单段≤10s、只可尾部追加、总长约 40s；1080p/4K 多为升采样。周末若未干跑完，周一改为：生产默认 1.1、preview 仅保留到对照表签字日、DB/日志强制落 interaction 谱系。",
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
            },
            {
              "label": "Gemini：Pricing",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          ],
          "value": "从「能出片」验收升级为「第二轮窄编辑仍在 + ID 可追溯」。",
          "impact": "preview 当 rollback 会在 9/30 双死；丢 interaction_id 等于丢掉可导演性。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "生产默认改 gemini-omni-1.1-flash；抽 1 条成片跑生成→窄编辑→再编辑，确认 ID 落库。",
          "sourceType": "一手",
          "cost": "Preview 9/30 EOL · T-9 · 约 $0.10/s（720p）"
        },
        {
          "idx": "04",
          "title": "gemini-2.5-flash-image（T-11）：替换链仍断，钉 GA 3.1",
          "summary": "弃用表：gemini-2.5-flash-image 最早 2026-10-02 关停（T-11），表内「Recommended replacement」仍写已关停的 gemini-3.1-flash-image-preview（2026-06-25 已 shutdown）。GA 侧 gemini-3.1-flash-image / gemini-3-pro-image 无公布关停日。动作不是再等 preview 复活，而是 Comfy/SDK/AI Studio 枚举一次性改到 GA 3.1，并回归透明底、多轮局部改、字标稳定性。与 Omni/Antigravity 同一周别漏扫。",
          "links": [
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            }
          ],
          "value": "官方推荐串已死时，唯一可执行路径是钉 GA ID 并自己验收。",
          "impact": "10/02 后仍写 2.5 或已死 preview 的工作流会整批失败。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "全库替换 2.5-flash-image→gemini-3.1-flash-image；删 preview 别名；跑 20 张 UI 字标回归。",
          "sourceType": "一手",
          "cost": "最早 10/02 EOL · T-11"
        },
        {
          "idx": "05",
          "title": "Qwen-Image-2.1（9/20）：Comfy 原生 RGBA，商用先过授权关",
          "summary": "ComfyUI 官方博客（2026-09-20）：阿里 Qwen-Image-2.1（约 7B）当日原生支持。卖点对齐 2D 管线：原生 RGBA/透明通道（精灵、UI 图标、贴纸可直接合成，少抠图节点）、原生 2K、最多 10 张参考、生图与编辑同 checkpoint。HF 提供权重与 Comfy-Org 包。硬约束：Qwen RESEARCH LICENSE（2026-09-20）仅 Non-Commercial；商用须另向 model-business@notice.qwencloud.com 申请。周一可做客研模板跑透明图标；未拿商用授权前不要写进上线物料门禁。",
          "links": [
            {
              "label": "ComfyUI：Qwen-Image-2.1",
              "url": "https://blog.comfy.org/p/qwen-image-21-in-comfyui-open-weight"
            },
            {
              "label": "Hugging Face：Qwen-Image-2.1",
              "url": "https://huggingface.co/Qwen/Qwen-Image-2.1"
            },
            {
              "label": "LICENSE（RESEARCH）",
              "url": "https://huggingface.co/Qwen/Qwen-Image-2.1/raw/main/LICENSE"
            }
          ],
          "value": "本地透明通道直出能砍掉一批 UI/特效抠图步骤，但授权边界比「开源」紧。",
          "impact": "当开源商用塞进生产会踩 RESEARCH LICENSE；法务未批只能做客研对照。",
          "tags": [
            "生图",
            "授权"
          ],
          "action": "Nightly/Cloud 跑模板出 10 张 RGBA 图标；同步法务开商用授权工单或明确「仅内部评测」。",
          "sourceType": "一手",
          "cost": "权重开源 · 商用需另授权"
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
          "title": "Buist 诉 Anthropic/OpenAI/SpaceXAI/Google：pace 谈进反垄断诉状",
          "summary": "北加州 N.D. Cal. 案 3:26-cv-10693（投诉日期 2026-09-18）：付费订阅用户指控四家就「放慢能力改进速率」形成 Sherman Act §1 横向协议，援引 Amodei《We Must Pace the Frontier》、Musk「Dario is right」、Altman「pace the frontier」、Hassabis「the right path forward」等公开表态，并称 OpenAI 曾就协同限速是否触反垄断征求国会意见、Altman 表示不先等豁免。被告尚未公开完整回应。对游戏美术采购：增量不是站队安全叙事，而是把「能力发版/配额/评估窗可能被诉讼与合规拖慢」写成供应商分列风险。一手诉状 + Bloomberg Law 报道；X MCP 仍 client-not-enrolled。",
          "links": [
            {
              "label": "Bloomberg Law：诉讼报道",
              "url": "https://news.bloomberglaw.com/litigation/openai-anthropic-google-spacexai-hit-with-antitrust-lawsuit"
            },
            {
              "label": "诉状 PDF（Buist et al.）",
              "url": "https://chatgptiseatingtheworld.com/wp-content/uploads/2026/09/Buist_et_al_v_Anthropic_PBC_-Sept-18-2026.pdf"
            },
            {
              "label": "Amodei 一手文",
              "url": "https://darioamodei.com/post/we-must-pace-the-frontier"
            }
          ],
          "value": "把周末的 pace/自治吵闹落成「可写进采购表的法律不确定性」。",
          "impact": "即便案件早期，法务/安全也可能临时收紧企业键与 Agent 出网——迁移日历更要自己盯。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "供应商表加列「反垄断/协同限速诉讼暴露」；评审时仍优先硬关停日期，不把诉讼当延期借口。",
          "sourceType": "一手",
          "conduction": "接 A 层 Sora/Omni/gpt-image 多线弃用：上游口号与诉讼越吵，你的迁移窗口越不能赌「行业一起慢下来」。"
        },
        {
          "idx": "02",
          "title": "@ylecun：对灭绝风险叙事与「实验室驱动安全话术」持续反弹",
          "summary": "近 72 小时内，Newsference 汇总 @ylecun 多条转评/原帖（含 x.com/ylecun/status/2100459279434027195 等），批评灭绝风险量化与「安全恐慌来自实验室负责人而非外部批评者」一类叙事，并指向错位报告框架。放在 Buist 案与 pace 公开表态同一周：上游安全话语本身高度对立，买方无法从单一大 V 立场推导 API 稳定性。无 X MCP，据 Newsference 转述并保留原帖链接。",
          "links": [
            {
              "label": "Newsference：ylecun 评论综述",
              "url": "https://newsference.com/c/ylecun-ai-safety-extinction-risk-commentary"
            },
            {
              "label": "x.com/@ylecun 示例帖",
              "url": "https://x.com/ylecun/status/2100459279434027195"
            }
          ],
          "value": "提醒评审会：安全舆论分裂 ≠ 你的弃用表会改日期。",
          "impact": "别用「业界都在限速」推迟 Sora/Omni 清零。",
          "tags": [
            "授权"
          ],
          "action": "站会口头一句：上游争议只进风险备注，执行序仍按厂商弃用表。",
          "sourceType": "转述",
          "conduction": "接 A 层倒计时与 B01 诉讼：对立叙事越多，越要用硬日期当唯一排序键。"
        },
        {
          "idx": "03",
          "title": "Antigravity May→09（T-14）：托管 Agent 仍要 token 熔断",
          "summary": "Gemini 弃用表（页脚更新至 2026-09-17）：antigravity-preview-05-2026 最早 2026-10-05 关停（T-14），替换 antigravity-preview-09-2026。文档要求用 agent_config.max_total_tokens 做预算熔断。对美术：贴图清单/校验脚本可继续用，但本周必须完成 ID 替换与出网白名单复核——与 Buist/越狱叙事同周，安全口更容易抽查。",
          "links": [
            {
              "label": "Gemini：Antigravity agent 文档",
              "url": "https://ai.google.dev/gemini-api/docs/antigravity-agent"
            },
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            }
          ],
          "value": "托管沙箱能跑批处理，前提是字符串正确且有 token 天花板。",
          "impact": "05 字符串 10/5 会断；无熔断的「整理资源库」能吃穿预算。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "全库 05→09-2026；max_total_tokens=50000 冒烟；复核 Agent 出网白名单。",
          "sourceType": "一手",
          "cost": "May 预览 10/05 EOL · T-14",
          "conduction": "接 B01/B02：诉讼与舆论升温时，Agent 演示可以炫，生产闸（ID+熔断+出网）必须先合上。"
        }
      ]
    }
  },
  "actions": [
    "Sora：直连导出/校验/清零今日签字；Foundry 另登 10/15；备用镜按 Omni≈$0.10/s、Veo Lite $0.05/s 签对照表。",
    "gpt-image：默认 flare，精修对照 sunburst；继续扫 10/23+12/01 旧串。",
    "Omni：生产默认 1.1；三轮编辑确认 previous_interaction_id；登记约 $0.10/s。",
    "Google 生图：2.5-flash-image→GA gemini-3.1-flash-image；Antigravity 05→09 + max_total_tokens。",
    "Qwen-Image-2.1：跑 RGBA 客研 + 开授权工单；供应商表记下 Buist 案暴露。"
  ],
  "timeline": {
    "title": "时间轴",
    "nodes": [
      {
        "type": "day",
        "date": "2026-09-21",
        "label": "09-21"
      },
      {
        "type": "week",
        "id": "w39",
        "label": "W39",
        "range": "09-21 ~ 09-27",
        "focus": "Sora T-3：直连 9/24 vs Foundry 10/15 + Omni/Veo 签价；gpt-image-2.5 Flare/Sunburst；Qwen-Image-2.1 RGBA（非商用授权）；Omni T-9 / 2.5-flash-image T-11 / Antigravity T-14；Buist 反垄断案；@ylecun 安全叙事反弹。"
      },
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
        "range": "09-01 ~ 09-21",
        "focus": "Sora 双轨（直连 9/24 / Foundry 10/15）+ 签价；gpt-image-2.5；Qwen-Image-2.1；Omni/2.5-flash-image/Antigravity 倒计时；上游 pace→Buist 案；跳过 9/12–9/14（不造）。"
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
