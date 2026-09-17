window.BRIEFING = {
  "meta": {
    "date": "2026-09-17",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "管线今日主菜：ComfyUI v0.36.0（9/15）把 FLUX Video Edit、Tripo v3/P2、Bria Video Eraser、Video Concatenate、Generic Loops 拉进节点图——宣发局部改与 3D 分段不必再跳网页端。",
    "双倒计时：Sora Videos API 9/24 关停（T-7，官方替代仍空）；gemini-omni-flash-preview 9/30 退役（T-13）→ 迁 gemini-omni-1.1-flash（延展 40s / 首尾帧 / 360p 草稿约 1/3 价）。本周清节点依赖。",
    "上游：Anthropic+OpenAI 谈嵌入第三方安全评估（细节仍虚）；@ylecun 嘲「又是 GPT-2 危险论」；@sama Dreamforce 要世界「信任我们」。采购继续要审计条款，不收信任口号。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "ComfyUI v0.36.0：FLUX Video Edit / Tripo v3·P2 / Bria 擦除进节点图",
          "summary": "Comfy-Org 于 9/15 发布 v0.36.0（tag ee71d5c）。Partner Nodes 重点：BFL Flux Video Edit 节点（对已有短片按提示局部改）；Tripo 迁 v3 API，新增 Smart Segment，并补 P2 文/图/多视角生模；Bria 增加 Video Eraser 与一批图像编辑节点；核心侧落地 Video Concatenate 与 Generic Loops；Gemini 文本节点接入 3.8 Flash；OpenRouter 侧加入 Microsoft mai-image-2.6。对游戏美术意味着：昨天还在网页端点的局部改镜、道具分段、去标擦除，今天可以串进同一张可版本化的 workflow JSON。",
          "links": [
            {
              "label": "ComfyUI Releases：v0.36.0",
              "url": "https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.36.0"
            },
            {
              "label": "ComfyUI Releases 列表",
              "url": "https://github.com/Comfy-Org/ComfyUI/releases"
            },
            {
              "label": "BFL：FLUX Video Edit 文档（对照节点能力）",
              "url": "https://docs.bfl.ai/flux_tools/flux_video_edit"
            }
          ],
          "value": "宣发「去标/换道具/拼镜」与道具 3D 可进同一 Comfy 图；图可 git 存档，复现比网页点选稳。",
          "impact": "Partner 节点≠本地白嫖：仍走各家 API 计费与商用条款。升级前先备份旧图，核对 Tripo v2→v3 字段断裂。",
          "tags": [
            "视频",
            "3D"
          ],
          "action": "今晚升一台测试机到 v0.36.0：跑通「FLUX Video Edit→Concatenate」与「Tripo P2 单道具→引擎」两条最小图，记失败点。",
          "sourceType": "一手"
        },
        {
          "idx": "02",
          "title": "Hyper3D WorldGen：单图→可编辑 Rodin 网格场景（含物理）",
          "summary": "Hyper3D 9/9 PR：WorldGen 把单张场景图拆成独立可编辑 3D 物体（Rodin 网格）+ 背景 Gaussian，并估计接触/支撑关系与碰撞、质量、摩擦等物理量；可选自动识别或框选物体。导出路径覆盖 Blender、Unity、Unreal、团结引擎。定位从「单物体 Rodin」扩到「可交互场景」——游戏侧更适合关卡白盒/预演与道具布局，而不是直接当最终美术。与 Seedance 2.5 等视频模型的组合叙事是：WorldGen 锁空间结构，视频模型补表演与材质。",
          "links": [
            {
              "label": "PR Newswire：Hyper3D WorldGen",
              "url": "https://www.prnewswire.com/news-releases/hyper3d-launches-worldgen-to-turn-single-images-into-editable-3d-scenes-302873750.html"
            },
            {
              "label": "Hyper3D / Rodin 产品线（对照）",
              "url": "https://hyper3d.ai/"
            }
          ],
          "value": "概念图一晚变可挪物体的白盒场景，比纯图生视频更利于关卡讨论机位与遮挡。",
          "impact": "PR 口径偏机器人仿真与影视；进游戏引擎后拓扑/UV/PBR 仍要人工收。别当「一键关卡」。",
          "tags": [
            "3D"
          ],
          "action": "挑 1 张已有场景概念图跑 WorldGen：导出进 Unity/UE 看物体是否可单独替换，记重拓扑工时。",
          "sourceType": "一手"
        },
        {
          "idx": "03",
          "title": "gemini-omni-flash-preview 9/30 退役（T-13）→ 迁 Omni 1.1 Flash",
          "summary": "Google 弃用表（页脚更新至 2026-09-16 UTC）写明：gemini-omni-flash-preview 最早 2026-09-30 关停，推荐替换 gemini-omni-1.1-flash。Omni 1.1 官方博文能力：场景延展可累积至约 40s（每次约 10s、参考最长约 10s 前文）；首尾帧插值；360p 草稿宣称相对标准 720p 约 1/3 成本且吞吐可高约 60%；成片可升 1080p/4K。Comfy 0.35 起已有 Omni 1.1 Partner 节点——今天起把 preview 字符串从生产图里清掉。另：gemini-2.5-flash-image 最早 2026-10-02 关停，生图侧也要排迁移。",
          "links": [
            {
              "label": "Gemini API：Deprecations",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            },
            {
              "label": "Google：Build with Gemini Omni 1.1 Flash",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"
            },
            {
              "label": "模型卡/文档入口（Omni）",
              "url": "https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash"
            }
          ],
          "value": "视频草稿用 360p 压试错账单；定稿再升 4K。延展 40s 让「一镜多拍」少切供应商。",
          "impact": "Preview 名还在图里=定时炸弹。与 Sora 9/24 叠周：本周必须做模型名审计。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "全库搜 gemini-omni-flash-preview 与旧 Veo 2/3.0 字符串；本周内全部钉到 omni-1.1-flash，并用同一镜头对照 360p→4K 费用。",
          "sourceType": "一手",
          "cost": "Preview 9/30 EOL · T-13 · 360p≈1/3 价"
        },
        {
          "idx": "04",
          "title": "Sora Videos API 关停 T-7：迁移角——Comfy 已接局部改+Omni 延展",
          "summary": "OpenAI 弃用表仍写：Videos API 与 sora-2 / sora-2-pro 及 dated snapshots 于 2026-09-24 永久关停，Recommended replacement 为空。距今 7 天。相对昨日「列出调用点」的动作，今日增量是供给侧已齐两块替代扳手——Comfy 0.36 的 FLUX Video Edit（局部改已有成片）与 Omni 1.1（延展/首尾帧/草稿价）。消费端帮助中心仍建议尽快导出历史成片。本周验收标准应从「有没有试用过 Kling」改成「同镜头三家对照表是否签字、Sora 节点是否清零」。",
          "links": [
            {
              "label": "OpenAI API：Deprecations（Sora/Videos）",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "OpenAI Help：Sora discontinuation",
              "url": "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"
            },
            {
              "label": "第三方迁移对照参考",
              "url": "https://aivideosensei.com/guides/sora-api-shutdown-migration-guide"
            }
          ],
          "value": "T-7 不再适合再开新 Sora 任务；把预算砸在对照表与资产导出上。",
          "impact": "官方替代栏空白=自行承担供应商碎片化。Premiere/Comfy/直连都要同一周清掉。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "今天完成：①导出全部未备份 Sora 成片；②同 3 条镜头各跑 Kling/Veo/Omni1.1（或 Flux Edit）对照；③生产图删除 Sora/Videos 节点。",
          "sourceType": "一手",
          "cost": "API 9/24 关停 · 无官方替代 · T-7"
        },
        {
          "idx": "05",
          "title": "Gemini 3.8 Live：可当「看图说话」的美术验收语音 Agent",
          "summary": "Google 9/15 发布 Gemini 3.8 Live 与 Live Extended Thinking：近实时语音对话 + 视觉 grounding，可边聊边在后台调工具；Extended Thinking 宣称能一边推理一边口头汇报进度（示例含草图→React 组件）。对游戏美术更务实的用法不是「再来一个聊天机器人」，而是把评审会变成：镜头/UI/角色参考投屏，Live 按验收清单口头挑刺（三角预算、命名、漏贴图、比例），人工拍板。开发者可走 Gemini API / AI Studio；音频带 SynthID 水印。",
          "links": [
            {
              "label": "Google：Gemini 3.8 Live 发布",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
            },
            {
              "label": "Gemini API：3.8 Live 模型页",
              "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live"
            },
            {
              "label": "9to5Google：发布转述",
              "url": "https://9to5google.com/2026/09/15/gemini-3-8-live-announced/"
            }
          ],
          "value": "评审从「翻评论区」变成「对着画面口头过清单」，适合远程周会压缩时间。",
          "impact": "语音 Agent≠自动过审。商用成片与对白仍要人工与法务；别把 Live 输出当发行结论。",
          "tags": [
            "Agent",
            "生图"
          ],
          "action": "下周一次资产评审：准备 5 条验收口令，用 3.8 Live 对着 3 张概念/UI 试跑，对照人工评审遗漏率。",
          "sourceType": "一手"
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
          "title": "TechCrunch：Anthropic+OpenAI 要「嵌入」第三方安全评估，独立性仍虚",
          "summary": "TechCrunch 9/16：Anthropic 与 OpenAI 公开表态将引入/嵌入第三方安全评估方；受访评估机构指出访问范围、披露节奏与 NDA 细节仍不清楚；报道称 DeepMind、Meta 尚未作出同等承诺。这是相对此前「放缓/节奏」叙事的可执行增量——从口号落到「谁进实验室、看什么日志」。对本环境未直连 X，据 TechCrunch 转述；与 @sama / @DarioAmodei 本周公开表态同脉，但不重复「pace the frontier」旧头条。",
          "links": [
            {
              "label": "TechCrunch：安全评估独立性（9/16）",
              "url": "https://techcrunch.com/2026/09/16/anthropic-and-openai-want-to-embed-safety-evaluators-will-they-really-be-independent/"
            },
            {
              "label": "OpenAI：Deprecations（对照其平台治理节奏）",
              "url": "https://developers.openai.com/api/docs/deprecations"
            }
          ],
          "value": "供应商若吹「已接受第三方审计」，追问：评估方是谁、看哪些系统、报告能否给采购看。",
          "impact": "安全叙事升温时，合同附件比新闻稿值钱。美术工具链照样要条款与数据驻留说明。",
          "tags": [
            "授权",
            "Agent"
          ],
          "action": "本周采购表加两列：第三方评估方名称、报告是否可披露给客户/发行。",
          "sourceType": "转述",
          "conduction": "接 A 层 Sora/Omni 弃用：平台说「我们很负责」≠你的 API 不会被关。迁移清单仍靠自己。"
        },
        {
          "idx": "02",
          "title": "@ylecun：嘲 Amodei「又是 GPT-2 太危险」——别被口号带节奏",
          "summary": "The Verge 等 9 月中旬综述援引 @ylecun（约 9/13）回应放缓呼吁：Dario 早在 2019 就称 GPT-2 开源太危险，「我当时就嘲过，现在大家也该嘲」。本环境未直连 X，据 Verge/TechStartups 等转述。对游戏美术负责人：上游安全口水战会继续吵，但不改变本周 Comfy/供应商选型的验收标准——墙钟、一致性、授权、账单。",
          "links": [
            {
              "label": "The Verge：高管与政客谈放缓 AI",
              "url": "https://www.theverge.com/ai-artificial-intelligence/995141/ai-executives-politicians-safety-regulation-anthropic-dario-amodei"
            },
            {
              "label": "TechStartups：LeCun 称警告「fake」转述",
              "url": "https://techstartups.com/2026/09/14/china-michael-burry-and-yann-lecun-reject-openai-and-anthropic-calls-to-slow-ai-development-lecun-calls-warnings-fake/"
            }
          ],
          "value": "把「行业要放缓」从周会纪要里挪到附录；正文明写可验证指标。",
          "impact": "口号战两边都可能服务自身叙事。美术预算评审用交付物压回去。",
          "tags": [
            "Agent"
          ],
          "action": "选型会加否决项：只有安全口号、无 SLA/无授权说明的方案不进短名单。",
          "sourceType": "转述",
          "conduction": "与 B01 对照：一边要第三方评估，一边被嘲「又来危险论」——落地仍看合同与迁移，不看站队。"
        },
        {
          "idx": "03",
          "title": "@sama Dreamforce：「世界应信任我们会做对的事」——采购不收信任口号",
          "summary": "SF Standard 9/16 报道 @sama 在 Dreamforce 相关场合称「The world should trust that we are going to do the right thing…」；同文对照 Amodei 表态软化至即便冻结也「只用到 5–10% 价值」一类表述。本环境未直连 X，据 SF Standard 转述。对美术负责人的传导非常直接：Sora API 9/24 无官方替代已经演示「信任」换不来 Continuity——条款、导出、多供应商对照才是。",
          "links": [
            {
              "label": "SF Standard：Sam Altman「trust us」（9/16）",
              "url": "https://sfstandard.com/2026/09/16/sam-altman-trust-us/"
            },
            {
              "label": "TechCrunch：第三方评估（同周对照）",
              "url": "https://techcrunch.com/2026/09/16/anthropic-and-openai-want-to-embed-safety-evaluators-will-they-really-be-independent/"
            }
          ],
          "value": "供应商话术含「trust us」时，回复模板：要审计权、数据删除、模型弃用通知窗口。",
          "impact": "公关信任≠生产连续性。视频/生图 API 弃用窗口正在收紧。",
          "tags": [
            "授权",
            "成本"
          ],
          "action": "把「弃用通知≥30 天 + 可导出 + 无单点供应商」写进下季度云视频/生图合同必选条款。",
          "sourceType": "转述",
          "conduction": "直接服务 A04 Sora T-7：信任口号救不了 9/24；今天就清节点、导出成片。"
        }
      ]
    }
  },
  "actions": [
    "Sora T-7：导出未备份成片；同 3 镜对照 Kling/Veo/Omni1.1（或 Flux Edit）；生产图删除 Sora/Videos 节点。",
    "Comfy v0.36.0：测试机升级；跑通 Video Edit→Concatenate 与 Tripo P2 单道具最小图。",
    "Omni：全库替换 gemini-omni-flash-preview→omni-1.1-flash；顺手登记 gemini-2.5-flash-image（10/2）迁移。",
    "WorldGen：1 张场景概念图生成可编辑物体，进 Unity/UE 看能否单换，记重拓扑工时。",
    "采购：合同加「第三方评估可披露 + 弃用通知窗口 + 禁止信任口号替代 SLA」三列。"
  ],
  "timeline": {
    "nodes": [
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
        "focus": "Sora 9/24 T-7 迁移清零；Comfy 0.36 Flux Edit/Tripo v3·P2/Bria；Omni preview→1.1（T-13）；WorldGen 白盒试；3.8 Live 评审试点；上游评估独立性+ylecun/sama 话术；跳过 9/12–9/14。"
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
        "range": "09-01 ~ 09-17",
        "focus": "Comfy 0.36 节点化局部改/3D；WorldGen 单图场景；Omni preview 9/30 T-13；Sora 9/24 T-7；3.8 Live 验收；第三方安全评估争议；ylecun/sama 话术；跳过 9/12–9/14（周末/未落盘，不造）。"
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
