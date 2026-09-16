window.BRIEFING = {
  "meta": {
    "date": "2026-09-16",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "硬截止逼近：Sora Videos API 9/24 关停且官方替代栏仍空（T-8）。宣发视频本周必须完成备用供应商对照，别把成片押在临期 API 上。",
    "管线两把新扳手：Black Forest Labs FLUX Video Edit（约 $0.03/秒，≤15s）可局部改一镜；Adobe Premiere Generative Media 把 Firefly/Veo/Kling/Runway/Luma 拉进时间线——选型要连同商用条款一起核。",
    "上游：@fchollet 拒「宣布 AGI」直到可发明；@karpathy 谈持续学习 vs 纯 LLM；@DrJimFan 用 World of Bits→专用通才类比提醒 Agent 要先广后专。采购继续问可验证行为，不追口号。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "FLUX Video Edit：按提示局部改现有镜头，$0.03/秒",
          "summary": "Black Forest Labs 于 9/10 前后上线 FLUX Video Edit（官方文档与 @bfl_ai 同步）：对已有成片做增删改、换场景/风格/对白，未点名部分尽量保持原时长、机位、节奏与音频。接口 POST /v1/flux-tools/video-edit-v1，源片 ≤15 秒、≤50 MiB；>720p 会降到约 720p；按时长计费 FLUX Video Edit [fast] 为 $0.03/秒（10 秒约 $0.30）。不支持遮罩/参考视频/延展（延展走 continuation）。对游戏宣发最实用的是「去标、换道具、改一句旁白」而不必整镜重生成。",
          "links": [
            {
              "label": "BFL 文档：FLUX Video Edit",
              "url": "https://docs.bfl.ai/flux_tools/flux_video_edit"
            },
            {
              "label": "GIGAZINE：功能与定价转述",
              "url": "https://gigazine.net/gsc_news/en/20260911-flux-video-edit/"
            },
            {
              "label": "BFL：FLUX 3 总览",
              "url": "https://bfl.ai/blog/flux-3"
            }
          ],
          "value": "预告片小改不必重跑整段 i2v；把「局部修」从剪辑手工抠/重渲改成一次 API。",
          "impact": "和 Sora 关停叠在一起：视频供给从「能生成」转向「能可控改」。720p 上限意味着成片级仍要接上采样或实拍层。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "挑 1 条 ≤10s 预告镜头：列 3 个局部改需求（去标/换道具/改旁白）各跑 1 次，对照人工修补墙钟与费用。",
          "sourceType": "一手",
          "cost": "$0.03/秒 · ≤15s"
        },
        {
          "idx": "02",
          "title": "Premiere Generative Media：时间线直出 Firefly/Veo/Kling/Runway/Luma",
          "summary": "Adobe 9/8 官方博文（IBC 周期持续曝光至 9/14）：Premiere 新增 Generative Media Tool，在时间线框选区间即可生成视频与音效；模型可选 Adobe Firefly 及合作方 Google Veo、Kling、Runway、Luma。Generate Video 可采工程内参考帧；Generate Sound Effects 已上线；Generate Music / Soundscape 为 beta。After Effects 同步上线 AI Assistant 公测。任务栏会显示所选模型组合的积分消耗。对游戏宣发意味着「补空镜/转场垫片」不必再跳出剪辑软到网页端来回导出。",
          "links": [
            {
              "label": "Adobe 官方：Premiere/AE AI 更新",
              "url": "https://blog.adobe.com/en/publish/2026/09/08/generate-create-directly-in-your-timeline-with-new-ai-powered-innovations-in-premiere-after-effects"
            },
            {
              "label": "Digital Production：模型与状态拆解",
              "url": "https://digitalproduction.com/2026/09/08/adobe-puts-a-prompt-layer-across-pro-video/"
            },
            {
              "label": "ProVideo Coalition：IBC 上手",
              "url": "https://www.provideocoalition.com/pvc-at-ibc-2026-adobe-debuts-generative-media-tool-to-bring-ai-directly-into-premiere-pro-timeline/"
            }
          ],
          "value": "宣发剪辑可在时间线内补 1–2 秒垫片并立刻看卡点；模型切换变成剪辑决策而非工具链决策。",
          "impact": "Partner 模型进时间线不等于同一商用条款。发行前仍要按所选模型核授权、水印与 Content Credentials。",
          "tags": [
            "视频",
            "授权"
          ],
          "action": "本周用同一空镜区间分别跑 Firefly 与 Kling（或 Veo）各 1 条，记录积分消耗、观感与商用条款差异，写进选型表。",
          "sourceType": "一手"
        },
        {
          "idx": "03",
          "title": "ChatGPT Images 2.5 / GPT-Image-2.5：编辑更准、延迟约降半",
          "summary": "OpenAI 9/8 发布 ChatGPT Images 2.5：宣称相对 Images 2.0 生成延迟最高约降 50%，参考一致性与多轮局部编辑更稳。API 拆成 gpt-image-2.5-flare（快）与 gpt-image-2.5-sunburst（精修），token 价与 GPT Image 2 同档：文本输入 $5/百万、图像输入 $8/百万、图像输出 $30/百万；有 2026-09-08 快照可钉版本。适合概念图「只改盔甲纹样/UI 角标」这类多轮定点修改；批量过夜任务需自行量测，勿直接沿用旧 Image 2 计算器。",
          "links": [
            {
              "label": "OpenAI：Introducing ChatGPT Images 2.5",
              "url": "https://openai.com/index/introducing-chatgpt-images-2-5/"
            },
            {
              "label": "API：gpt-image-2.5-flare",
              "url": "https://developers.openai.com/api/docs/models/gpt-image-2.5-flare"
            },
            {
              "label": "API：gpt-image-2.5-sunburst",
              "url": "https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst"
            }
          ],
          "value": "概念迭代从「整张重抽」更多变成「定点改」；flare 跑量、sunburst 收口。",
          "impact": "单价 token 未降，价值在少重试与少整图重跑。入库前仍要人工修与版权审查。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "同一张定稿：用 flare 做 2 轮快改、sunburst 做 1 轮精修，对照旧 Images 2.0 的墙钟与重试次数。",
          "sourceType": "一手",
          "cost": "输出 $30/百万 token（同 Image 2 档）"
        },
        {
          "idx": "04",
          "title": "Sora Videos API 关停 T-8：官方替代栏仍为空",
          "summary": "OpenAI 弃用表与帮助中心仍写明：Videos API 与 sora-2 / sora-2-pro 及 dated snapshots 于 2026-09-24 永久关停，Recommended replacement 为空。消费端 App/Web 已于 4/26 停；帮助中心建议尽快导出历史成片。距今约 8 天。游戏宣发若仍把可编程视频押在 Sora，本周必须完成迁移对照与资产导出，不能等到截止日期当周再动。",
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
              "label": "迁移对照参考（第三方）",
              "url": "https://aivideosensei.com/guides/sora-api-shutdown-migration-guide"
            }
          ],
          "value": "倒计时进入个位数：迁移与导出比「再试一镜 Sora」更值钱。",
          "impact": "OpenAI 暂时退出可编程视频供给。Premiere/Comfy/直连接口都要清掉 Sora 依赖。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "今天列出所有 Sora/Videos API 调用点与未备份成片；本周内完成备用供应商同镜头对照并导出库。",
          "sourceType": "一手",
          "cost": "API 9/24 关停 · 无官方替代 · T-8"
        },
        {
          "idx": "05",
          "title": "Hi3D / Meshy 7 / Tripo：按交付物选型，别再「一个工具打天下」",
          "summary": "Meshy 博客 9/7 发布可核对对比（注明自家立场）：单视角几何对齐 Meshy 7 领先；四视角后三家收敛。实务结论——Hi3D 3.0 偏打印（2048³、分件连接件、上色分区）；Tripo Smart Mesh 偏海量道具（500–50K 四边、引擎插件面广）；Meshy 偏「一张图走完」到绑定/动画/导出。游戏侧常见组合：道具量产走 Tripo，英雄角色走 Meshy 绑定，实体周边才碰 Hi3D。价格表常变，引用前核对官网。",
          "links": [
            {
              "label": "Meshy：Hi3D vs Meshy vs Tripo（9/7）",
              "url": "https://www.meshy.ai/blog/hi3d-vs-meshy-vs-tripo"
            },
            {
              "label": "Meshy：游戏 3D 资产工具对比",
              "url": "https://www.meshy.ai/blog/best-ai-tools-for-3d-game-assets"
            },
            {
              "label": "独立评测参考（HackerNoon）",
              "url": "https://hackernoon.com/how-i-stress-tested-3-ai-3d-generators-on-the-same-inputs-what-the-numbers-actually-show"
            }
          ],
          "value": "用交付物选工具，比追「最新模型名」更能压重拓扑与返工。",
          "impact": "3D AI 进入分工阶段：拓扑、绑定、打印不再指望一家包圆。采购可按资产类型拆账单。",
          "tags": [
            "3D",
            "成本"
          ],
          "action": "本周固定 1 张硬表面道具图：Tripo Smart Mesh 与 Meshy 各出 1 版，进引擎看是否还要 re-topo，记墙钟。",
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
          "title": "@fchollet：在 AI 能「发明」之前，我不会宣布 AGI",
          "summary": "9/7 前后 @fchollet 在 X 发帖：构建 AGI 的叙事一直绑在发明能力上（治癌、聚变等），因此在系统能做出概念突破、新洞见或真实新技术之前，他不会「declare AGI」；并补一句「AGI 应能产出比你塞进去的更多东西」。语境是 GPT-6 Astra「AGI era」叙事与黄仁勋等表态升温。本环境未直连 X，据 Traictory 等转述。",
          "links": [
            {
              "label": "Traictory：Chollet 拒宣布 AGI",
              "url": "https://traictory.com/news/2026-09-09-chollet-agi-declaration"
            },
            {
              "label": "相关讨论线索（unroll）",
              "url": "https://www.unrollnow.com/status/2095605239269519771"
            }
          ],
          "value": "别把上游「AGI 到了」当采购理由；美术选型看可复现管线与授权，不看口号。",
          "impact": "口号战升温时，预算评审更容易被带节奏。用可交付指标压回去。",
          "tags": [
            "Agent"
          ],
          "action": "本周选型会加一行否决项：无基准/无授权说明的「AGI 级」话术不进短名单。",
          "sourceType": "转述",
          "conduction": "上游叙事≠生产就绪。游戏美术继续按墙钟、一致性和条款验收。"
        },
        {
          "idx": "02",
          "title": "@karpathy：持续学习缺位时，LLM 更像「召唤幽灵」",
          "summary": "近几日转述显示 @karpathy 评论 Richard Sutton 对 LLM 的批评：预训练像「蹩脚的进化」，动物世界几乎没有这种大规模监督学习；若具备持续（在岗）学习，就不那么需要单独的训练/部署割裂。他把当下前沿研究部分描述为在「召唤幽灵」（对人类数据蒸馏出的实体）。对美术 Agent 的启示是：没有在线纠错与经验沉淀的批处理，只是一次次重抽，不会自动变「熟手」。",
          "links": [
            {
              "label": "unroll：karpathy 谈 Sutton/持续学习",
              "url": "https://www.unrollnow.com/status/1973435013875314729"
            }
          ],
          "value": "批图/节点 Agent 要留「错题本」：失败案例、可用种子、禁止项，而不是只换模型。",
          "impact": "持续学习产品化之前，人机闭环仍是产能主路径。",
          "tags": [
            "Agent"
          ],
          "action": "给现有批图流程加一个共享失败库（坏案例+修好的提示/节点），本周至少写入 5 条。",
          "sourceType": "转述",
          "conduction": "接 A 层 Images 2.5/视频局部改：工具更会改了，团队知识库更要跟上，否则只是更快地重复犯错。"
        },
        {
          "idx": "03",
          "title": "@DrJimFan：World of Bits 十年后——先广博预训练，再专向像素/按键",
          "summary": "9/4 @DrJimFan（Jim Fan）回顾 OpenAI Universe/World of Bits：当年从零 RL 点屏幕订机票基本注定失败；认为计算机使用 Agent 正解是先在广任务上「煮沸海洋」，再专向屏幕像素与键鼠——「专用通才」。并祝贺 GPT-6 终于能较可靠订票。评论区追问机器人是否同理：先做世界模型再专向传感器。对游戏美术 Agent：别指望窄场景脚本一步到位，先覆盖通用资产规范再挂项目规则。",
          "links": [
            {
              "label": "LinkedIn：Jim Fan World of Bits 帖",
              "url": "https://www.linkedin.com/posts/drjimfan_good-old-days-at-openai-in-2016-an-agent-activity-7501655653912981505-tFM6"
            },
            {
              "label": "Jim Fan 主页动态",
              "url": "https://www.linkedin.com/in/drjimfan"
            }
          ],
          "value": "美术 Agent 先喂「引擎导入规范/命名/三角预算」通识，再挂单项目风格，比一上来写死关卡脚本更稳。",
          "impact": "和 Chollet/Karpathy 同周：上游在谈能力边界与学习范式，落地侧把「通用规范层」做厚。",
          "tags": [
            "Agent",
            "3D"
          ],
          "action": "写一页「通用资产验收」清单（三角数、材质槽、命名、碰撞），作为所有 Agent 任务的前置系统提示。",
          "sourceType": "转述",
          "conduction": "A 层工具在变快，B 层提醒：没有通识约束的 Agent 只会更快地产出不合规资产。"
        }
      ]
    }
  },
  "actions": [
    "Sora T-8：列出调用点与未备份成片，本周迁 Kling/Runway/Luma/Veo 并做同镜头对照，完成导出。",
    "FLUX Video Edit：1 条 ≤10s 预告，去标/换道具/改旁白各 1 次，记费用与墙钟。",
    "Premiere Generative Media：同一空镜区间 Firefly vs Kling（或 Veo）对照积分与商用条款，写入选型表。",
    "Images 2.5：定稿上 flare 快改 2 轮 + sunburst 精修 1 轮，对照旧版重试次数。",
    "3D：同一硬表面图 Tripo Smart Mesh vs Meshy 进引擎，看是否还要 re-topo；Agent 任务挂上通用资产验收清单。"
  ],
  "timeline": {
    "nodes": [
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
        "focus": "Sora 9/24 T-8 迁移；FLUX Video Edit 试局部改；Premiere Generative Media 选型+商用条款；Images 2.5 局部改对照；3D 按交付分 Hi3D/Meshy/Tripo；跳过 9/12–9/14。"
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
        "range": "09-01 ~ 09-16",
        "focus": "FLUX Video Edit 局部改镜；Premiere Generative Media 时间线直出；Images 2.5 编辑提速；Sora 9/24 T-8；Hi3D/Meshy/Tripo 按交付选型；fchollet/karpathy/Jim Fan 上游；跳过 9/12–9/14（周末/未落盘，不造）。"
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
