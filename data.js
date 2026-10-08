window.BRIEFING = {
  "meta": {
    "date": "2026-10-08",
    "kicker": "DAILY AI ART INTELLIGENCE",
    "title": "每日 AI 美术情报",
    "tagline": "面向全栈游戏美术负责人 / AI 降本增效研究"
  },
  "editorFrame": [
    "先更新一处倒计时：Google 10-07 改了 Gemini 弃用表，Nano Banana 2（gemini-3.1-flash-image）从「10/29 关停」改为「已弃用、未定关停日」。NB2.1 价格只有一半，迁移仍然值得做，但不再是硬截止。真正的硬截止是 Foundry sora-2 10/15（T-7）、Veo 3.1* preview 10/22（T-14）、gpt-image-1 10/23（T-15）。",
    "应用层：Google × Unity 推出 Playground / Unity Spark，提示词做游戏和 Asset Store 资产绑在一起（Spark 首发不能导出、不能售卖）；Vidu Q4 Preview 每秒 $0.014 起，参考上限 15 图 + 3 段音频，AA 图生视频榜第 3；Qwen-Image-2.1 多角度 LoRA 一张图出 72 种机位；EmbeddingGemma 2 让内网以图搜图有了 440M 的开源方案。",
    "上游：SynthID Detector 对所有人开放，外包抽检有了跨厂商入口，但查不出开源模型；Claude Haiku 5.5 每百万输入 $0.10，批量打标/改写 prompt 的成本接近忽略；GPT-6 进 ChatGPT，Intelligent UI 能在对话里现做小工具，但这次没有生图/视频模型的变化。"
  ],
  "layers": {
    "A": {
      "tag": "A 层",
      "title": "游戏美术应用层",
      "hint": "点卡片展开价值与行业判断 →",
      "items": [
        {
          "idx": "01",
          "title": "Google × Unity 发布 Playground（10-07）：一句话生成可玩网页游戏，背后是 Gemini + Nano Banana + Lyria；Unity Spark 年内封测，直连 Asset Store 的「美术家做的资产」",
          "summary": "Google Labs 10-07 上线实验性平台 Playground（playground.google，首发仅美国、18 岁以上）：在聊天框里描述玩法，选 2D/3D、单人/多人，就能生成在手机和电脑浏览器里直接玩的游戏，可以改物理、规则、角色和环境，发布到 Explore 广场，支持评分、排行榜和 Play Games 档案。Google 发言人对 The Verge 说，底层是 Gemini、Nano Banana、Lyria 三个现有模型加一套用内部游戏和评测打磨过的 harness；免费可用，Google One 订阅者每周 token 额度更高。同日 Unity 公布 Unity Spark：浏览器里的无代码 3D 创作工具，跑 Unity 引擎，可多人用共享链接同时编辑，「年内」进入封测、现在开放候补；Unity CEO Bromberg 原话是「一切从游戏美术开始」，Spark 直连 Unity Asset Store，演示里要一件披风会弹出商店里的候选资产、要一张日出背景会给几个选项。按 GamesIndustry.biz 采访（多家转述）：首发版不能下载项目、不能导出到桌面版 Unity、不能售卖作品，计费是 AI token 挂钩的积分（先送后买，价格未定）；Unity 7 定在 2027 年一季度，AI 工具是核心但不强制使用。",
          "links": [
            {
              "label": "Google 官方博客：Introducing Playground",
              "url": "https://blog.google/innovation-and-ai/technology/ai/playground-experimental-gaming-platform/"
            },
            {
              "label": "Unity：Unity Spark 页面（候补）",
              "url": "https://unity.com/spark"
            },
            {
              "label": "The Verge：Playground 底层模型与计费（转述 Google 发言人）",
              "url": "https://www.theverge.com/tech/1006477/google-playground-unity-spark-ai"
            },
            {
              "label": "Game Developer：Unity Spark 与 Asset Store",
              "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-spark-an-prompt-based-tool-for-google-s-ai-games-platform"
            },
            {
              "label": "GamesBeat：合作细节与 Bromberg 表态",
              "url": "https://gamesbeat.com/google-playground-and-unity-spark-will-enable-creators-to-easily-generate-3d-games/"
            },
            {
              "label": "SSBCrack：首发限制（不可导出/不可售卖，转述 GI.biz）",
              "url": "https://news.ssbcrack.com/unity-spark-browser-ai-3d-game-builder-google-playground-beta/"
            }
          ],
          "value": "引擎厂商第一次把「提示词做游戏」和资产商店绑在一起卖：AI 负责拼装，资产仍来自人做的商店素材。对美术团队，这既是新的资产分发渠道，也是一个信号——UGC/轻度游戏的美术门槛会继续被压低。",
          "impact": "中 / 美术负责人·资产商店/外包供给·UGC 与轻度项目；短期不影响商业项目管线（不能导出、不能卖）。",
          "tags": [
            "Agent",
            "授权"
          ],
          "action": "本周：美术负责人用 Playground（需美国账号）或候补 Spark，拿一个在研玩法让组里 2 人各做 30 分钟原型，记录哪些环节必须人工美术介入；有 Asset Store 上架资产的团队，核对商店协议里资产被 AI 代理推荐/组合使用的条款。",
          "sourceType": "一手"
        },
        {
          "idx": "02",
          "title": "NB2 倒计时更新：Google 10-07 改了弃用表，gemini-3.1-flash-image 从「10/29 关停」改成「已弃用、未定关停日」",
          "summary": "10-06 Nano Banana 2.1 GA 时，Google 在 Release notes 和弃用表里都写了 Nano Banana 2（gemini-3.1-flash-image）10/29 关停。今天复核：Gemini API 弃用页（页脚 Last updated 2026-10-07 UTC）里这一行的关停日已从「October 29, 2026」改为「No shutdown date announced」，推荐替代仍是 gemini-nano-banana-2.1；10-06 的 Release notes 也被同步改写，从「将于 2026 年 10 月 29 日关停」变成「已弃用（未公布关停日期）」。对比 box 上 10-07 抓取的页面快照，整页只有这一处日期变动，Google 没有单独发公告说明原因。同表其他日期不变：veo-3.1 系列 preview 10/22 关停（替代 gemini-omni-1.1-flash），gemini-2.5-flash-image 2027-03-15。OpenAI 弃用页 gpt-image-1 仍是 10/23，Azure Foundry 退役表 sora-2（2025-12-08）仍是 10/15、gpt-image-1 仍是 10/23。",
          "links": [
            {
              "label": "Gemini API 弃用时间表（Last updated 2026-10-07）",
              "url": "https://ai.google.dev/gemini-api/docs/deprecations"
            },
            {
              "label": "Gemini API Release notes（10-06 条目已改写）",
              "url": "https://ai.google.dev/gemini-api/docs/changelog"
            },
            {
              "label": "OpenAI 弃用页（gpt-image-1 10/23）",
              "url": "https://developers.openai.com/api/docs/deprecations"
            },
            {
              "label": "Azure Foundry 退役时间表（sora-2 10/15）",
              "url": "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule"
            }
          ],
          "value": "NB2 迁移从「三周内必须完成」变回「建议迁移」：NB2.1 价格只有一半，迁移仍然划算，但不用为 10/29 硬截止去挤压排期；512px 草图这类 NB2.1 不支持的用法可以先留在 NB2 上。",
          "impact": "中 / 生图管线·API 排期·预算；真正有硬截止的是 sora-2（10/15）、Veo 3.1 preview（10/22）、gpt-image-1（10/23）。",
          "tags": [
            "生图",
            "成本"
          ],
          "action": "本周：把迁移看板上「NB2 10/29」改成「已弃用、无关停日」，优先级让给 sora-2、Veo 3.1 preview、gpt-image-1 三条硬截止；NB2→NB2.1 的对比测试照做，结论用来决定是否主动切换。",
          "sourceType": "一手",
          "cost": "NB2 关停日撤回；硬截止：sora-2 10/15、Veo 3.1 preview 10/22、gpt-image-1 10/23"
        },
        {
          "idx": "03",
          "title": "Vidu Q4 Preview（10-07）：每秒 $0.014 起，最多 15 张参考图 + 3 段参考音频，2K/4K 10-bit；Artificial Analysis 图生视频榜第 3（Q3 Pro 是第 19）",
          "summary": "生数科技 10-07 发布 Vidu Q4 Preview，作为 Q4 正式版之前的公开预览，网页和 API 同时可用。官方新闻稿给的规格：起步价每秒 $0.014，输出 540p / 720p / 1080p / 2K / 4K，2K 和 4K 是 10-bit 色深；参考生视频模式最多 15 张参考图（角色、服装、道具、场景）加最多 3 段参考音频（mp3，每段 3–12 秒）用来稳定角色声音，时长 1–16 秒；图生视频是单张首帧、3–16 秒、默认 5 秒 720p，音频默认开启（含对白和音效），支持自动切镜。官方称在可比规格和计费条件下，同样预算产出最多是之前的 5 倍。第三方方面，Artificial Analysis 10-08 08:13 发帖：Q4 Preview 首次上榜就排在 AA-Video-I2V v1.0 第 3，Q3 Pro 当时第 19，且「价格与 Q3 Pro 相同、质量更好」。要注意 $0.014/秒是「起」价，2K/4K 的实际单价新闻稿没写，API 文档按 credits 计。",
          "links": [
            {
              "label": "PR Newswire：Vidu 发布 Q4 Preview（规格与起步价）",
              "url": "https://www.prnewswire.com/news-releases/vidu-launches-q4-preview-making-flagship-ai-video-creation-accessible-to-everyone-302901266.html"
            },
            {
              "label": "Vidu API 文档：viduq4-preview 图生视频",
              "url": "https://platform.vidu.com/docs/api-reference/video-models/vidu-q4-preview/image-to-video"
            },
            {
              "label": "@ArtificialAnlys：I2V 榜第 3（10-08）",
              "url": "https://x.com/ArtificialAnlys/status/2107987818526146964"
            },
            {
              "label": "Unite.AI：参考生视频参数整理（转述）",
              "url": "https://www.unite.ai/vidu-releases-q4-preview-of-next-generation-flagship-ai-video-model/"
            }
          ],
          "value": "15 图 + 3 段音频的参考上限，正好对应游戏 PV/剧情短片里「同一角色、同一套服装道具、同一个声线」反复出镜的需求；如果 2K/4K 档单价也维持低位，概念 PV 和技能演示的迭代成本会明显下降。",
          "impact": "中高 / 视频组·PV 与宣发·剧情演出预演。",
          "tags": [
            "视频",
            "成本"
          ],
          "action": "本周：视频组挑 1 个在研角色，备齐 8–10 张设定图（正侧背、服装、武器）和 1 段配音，用 Q4 Preview 参考生视频跑 5 条 8 秒镜头，和现有主力模型同 prompt 对比角色一致性与口型，并记录 1080p/2K 的实际 credits 消耗。",
          "sourceType": "一手",
          "cost": "起步价 $0.014/秒；AA I2V 榜第 3（Q3 Pro 第 19）"
        },
        {
          "idx": "04",
          "title": "Qwen-Image-2.1 多角度机位 LoRA v2（HF 10-07）：一张正面图出 12 个方位 × 4 个俯仰的视角，v2 专门加了 1,986 个绑骨角色，Apache-2.0",
          "summary": "开发者 akhaliq 10-07 在 Hugging Face 放出 Qwen-Image-2.1 的 Multiple-Angles 相机控制 LoRA，作者称是 Qwen-Image-2.1 上第一个此类 LoRA（沿用 fal 给 Qwen-Image-Edit-2511 做的同类格式）。用法：输入一张图，提示词以 <mva> 开头，写方位和俯仰，比如「<mva> back view, eye-level shot」；12 个方位（每 30°）× 4 个俯仰（平视 / 30° / 60° / 顶视），每个再加 close-up，共 72 种取景。推荐 v2（rank 64，319MB，step 1,500）：训练对从 v1 的 5,028 扩到 13,328，其中 3,952 对来自 1,986 个绑骨动画角色，作者说就是为了补 v1 在角色上的短板。数据来源是 Dome-Objaverse（CC-BY-4.0）和按 CC-BY / CC-BY-SA / CC0 过滤过的 Objaverse-XL 绑骨角色，LoRA 本身 Apache-2.0。作者写得很坦白：只在 512² 上训练，更大画布没训过；它给的 CLIP 基准分数 LoRA 反而略低于底模（0.832 vs 0.857），作者解释这个指标测不出「机位到底转没转」，能力证据主要是同 prompt 的可视化对照；真实照片上毛发等细节会变软。ComfyUI 里挂到任意 Qwen-Image-2.1 工作流即可，强度 0.8–1.0，另有 Gradio Space 在线试。",
          "links": [
            {
              "label": "Hugging Face：Qwen-Image-2.1-Multiple-Angles-LoRA",
              "url": "https://huggingface.co/akhaliq/Qwen-Image-2.1-Multiple-Angles-LoRA"
            },
            {
              "label": "Hugging Face Space：在线机位调节工作流",
              "url": "https://huggingface.co/spaces/akhaliq/qwen21-multiple-angles-workflow"
            }
          ],
          "value": "角色/道具三视图、转面图是概念到 3D 建模交接的固定成本；一张正面设定图就能出背面和俯视参考，原画少画几张转面，也能直接喂给图生 3D 当多视图输入。",
          "impact": "中 / 原画·角色设计·3D 建模交接；512² 训练意味着出的是参考图，不是成品图。",
          "tags": [
            "生图",
            "3D"
          ],
          "action": "本周：原画组拿 10 张已定稿的角色/道具正面图，用 v2 LoRA 出背面、侧面、俯视各一张，交给建模同事打分「能不能当建模参考」；可用的再试一次喂给现有图生 3D 工具，对比单图输入和多视图输入的结果。",
          "sourceType": "一手"
        },
        {
          "idx": "05",
          "title": "EmbeddingGemma 2 开源（10-07）：740M 多模态向量模型，文字、图片、视频、音频进同一个 768 维空间，Apache-2.0，可本地离线跑",
          "summary": "Google DeepMind 北京时间 10-07 00:04 发布 EmbeddingGemma 2，基于 Gemma 4 架构，Apache-2.0 商用许可。编码器按需加载：只要文本/代码 270M，加视觉 440M，加音频 570M，全模态 740M，输出都在同一个 768 维空间，后加的模态不用重算已有向量。上下文 8K token，一次最多 29 张图或 58 帧视频（默认每秒抽 1 帧）或 5.5 分钟音频。Matryoshka 表示可把向量从 768 维截到 512/256/128：官方开发者指南给的数据，256 维时图片、视频、语音检索保留约 95% 质量，128 维时掉到约 75%；bf16 下 100 万个 768 维向量约 1.5GB，截到 128 维约 250MB。量化后在 Pixel 11 Pro 上全模态约占 567MB 内存。官方称在 1B 以下多模态嵌入模型里分数领先、部分任务超过两倍体量的专用模型（官方自报，未见独立评测）。",
          "links": [
            {
              "label": "Google 博客：EmbeddingGemma 2",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
            },
            {
              "label": "Google Developers Blog：开发者指南（维度与内存数据）",
              "url": "https://developers.googleblog.com/en/embeddinggemma-2-the-developer-guide/"
            },
            {
              "label": "Hugging Face：google/embeddinggemma-2",
              "url": "https://huggingface.co/google/embeddinggemma-2"
            },
            {
              "label": "@GoogleDeepMind 发布帖",
              "url": "https://x.com/GoogleDeepMind/status/2107502286758895878"
            }
          ],
          "value": "美术资产库检索（「找一张类似这张的石墙贴图」「找那段带蓝色火焰的技能视频」）以前要么靠人打标签，要么把图传到云端；现在一个 440M 的开源模型就能在内网把图、视频、文字放进同一个索引，不出局域网。",
          "impact": "中 / TA·资产管理·美术中台；适合做以图搜图、参考图库和历史 PV 素材检索。",
          "tags": [
            "Agent",
            "成本"
          ],
          "action": "本周：TA 用 sentence-transformers 加载 text+vision（440M）版本，给 5,000 张历史贴图/原画和 200 段技能视频建索引（256 维），找 3 位美术各提 10 个真实检索需求，统计前 5 条命中率，决定是否替换现有的标签搜索。",
          "sourceType": "一手",
          "cost": "740M 全模态 / 440M 图文；100 万向量 128 维约 250MB"
        },
        {
          "idx": "06",
          "title": "arXiv 10-06 两篇可落地的图形学短文：PDB 跨网格面部动画重定向（权重每个目标脸只算一次）；免训练「分区域控制内容/风格」的风格化方法（SIGGRAPH Asia 技术交流）",
          "summary": "PDB（Point-Based Deformation Blending，Sihun Cha、Junyong Noh 等，arXiv 2610.08672）做的是不同拓扑网格之间的面部表情迁移：从源脸的中性/表情对里预测一小组变形控制点，从目标脸的中性网格预测混合权重，目标网格直接用「权重 × 控制点」重建，不需要预设 cage、预计算坐标或全局求解；权重对每个目标只算一次、逐帧复用，只用自重定向监督训练，就能做跨身份迁移。作者报告与对比的稠密位移方法相比表面瑕疵更少、推理快，感知评测也支持表情保真；目前未见代码。另一篇是 Amir Semmo 的 Local Content-Style Control（arXiv 2610.08704，SIGGRAPH Asia 2026 Technical Communications）：把 ControlNet + IP-Adapter 风格化流程里已有的两个全局权重改成逐像素的空间图，一次生成里就能分区域分别控制「画什么」和「怎么画」，组合出从自由重绘到保留原貌的 2×2 修图方式；不用重新训练，可直接插进现有同类流程。",
          "links": [
            {
              "label": "arXiv 2610.08672：PDB 面部动画重定向",
              "url": "https://arxiv.org/abs/2610.08672"
            },
            {
              "label": "arXiv 2610.08704：Local Content-Style Control",
              "url": "https://arxiv.org/abs/2610.08704"
            }
          ],
          "value": "PDB 对准的是「一套表情动画要套到多个不同拓扑角色脸上」的老问题；风格化那篇不需要训练，ComfyUI 里把 ControlNet / IP-Adapter 强度换成遮罩就能复现，是 TA 一下午能验证的东西。",
          "impact": "低中 / 面部动画 TA·风格化/修图流程；PDB 暂无代码，先收藏。",
          "tags": [
            "3D",
            "生图"
          ],
          "action": "本周：TA 在 ComfyUI 现有 ControlNet + IP-Adapter 风格化工作流里，把两个强度改成遮罩输入，按论文的 2×2 组合各出一张（如角色脸保原貌、背景换风格），评估是否能替代现在的分层重绘；PDB 加入面部动画组的论文跟踪表。",
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
          "title": "@GoogleDeepMind：SynthID Detector 对所有人开放（10-07 22:03）——一个网站同时查 Google、OpenAI、NVIDIA、Kakao 的水印，Apple「即将」加入",
          "summary": "Google DeepMind 10-07 发帖并发博客：SynthID Detector 从媒体专业人士内测扩大到全球所有人（英文界面），网址 synthid.com，可检查图片、视频、音频是否由 Google 或合作方的 AI 生成或编辑，合作方包括 OpenAI、NVIDIA、Kakao，Apple「即将」支持。官方数据：SynthID 已给 1,800 亿张以上图片和视频、24 万年时长的音频打过水印，Search、Gemini App、Chrome 里的内置验证每天处理超过 100 万次请求。Ars Technica 补充了限制：要用 Google、OpenAI 或 Apple 账号登录，每人每天约 10 次检查（Google 说是为了防止有人拿它调教去水印工具），网站只告诉你「有没有检测到水印」，不再像内部工具那样标出区域；Meta 用的是另一套水印，开源本地模型生成的内容通常没有水印，所以「没检出」不等于「不是 AI」。",
          "links": [
            {
              "label": "@GoogleDeepMind 发布帖",
              "url": "https://x.com/GoogleDeepMind/status/2107834249680499136"
            },
            {
              "label": "Google 博客：SynthID Detector 向全球开放",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/"
            },
            {
              "label": "SynthID Detector 网站",
              "url": "https://synthid.com/"
            },
            {
              "label": "Ars Technica：登录与每日约 10 次限额（转述）",
              "url": "https://arstechnica.com/ai/2026/10/google-rolls-out-improved-synthid-ai-content-detector-now-available-globally/"
            }
          ],
          "value": "外包交付「到底有没有用 AI」第一次有了一个跨厂商的免费核查入口，但它只能证明「有」，不能证明「没有」。",
          "impact": "中 / 外包管理·发行合规·美术负责人。",
          "tags": [
            "授权"
          ],
          "action": "本周：美术负责人登录 synthid.com，拿 5 张已知用 Gemini/ChatGPT 出的图和 5 张手绘稿各测一次，确认检出效果；把「交付抽检 SynthID」写进外包验收清单，并注明检测阴性不能当作无 AI 证明。",
          "sourceType": "一手",
          "conduction": "① 外包验收：上周 Jagex 外包预告那种「外包方事先保证不用 AI、最后靠玩家数手指才发现」的情况，入库前抽检 SynthID 至少能拦住用主流闭源工具出的图；② 局限：开源模型（本地 Flux/Qwen 等）和 Meta 系工具的输出查不出来，所以合同里仍要写过程稿和工具记录要求，检测只是辅助；③ 自查：自己团队用 Gemini、ChatGPT 出的中间稿也带水印，进成品前要清楚哪些资产会被玩家用这个网站查出来，和 Steam AI 声明口径保持一致；④ 额度：每人每天约 10 次，批量抽检需要分摊到多个账号或只查关键资产；⑤ 趋势：Apple 加入后，玩家手里的「AI 检测」会更普及，对外宣传素材的风险最高。"
        },
        {
          "idx": "02",
          "title": "@claudeai：Claude Haiku 5.5 发布（10-08 02:01）——10 万 token 以内每百万输入 $0.10 / 输出 $0.50，平均比 Haiku 4.5 便宜约 75%；Sonnet 5.5 缓存读取同日减半到 $0.10",
          "summary": "Claude 官方账号北京时间 10-08 凌晨连发：Haiku 5.5 是「最便宜、最快、能力最强的小模型」，平均运行成本比 Haiku 4.5 低约 75%，首次给 Haiku 加了可调 effort 档位，面向摘要、分类这类高频重复任务和编码子代理，AWS、Google Cloud、Azure 同步上线。官方文档：模型 ID claude-haiku-5-5，输入文本和图片、输出文本，1M 上下文、最长输出 128K；10 万 token 以内的请求每百万输入 $0.10、输出 $0.50，超过 10 万 token 涨到 $0.50 / $2.50，Batch 再打五折，缓存读取是输入价的 10%。75% 的算法官方有脚注：10 万以内的标价比 Haiku 4.5（$1 / $5）低 90%，以上低 50%，而 Haiku 4.5 约 90% 的请求落在 10 万以内；新分词器下同样文字会多出约 30% 的 token，这一点已计入。同一串帖子的最后一条：Sonnet 5.5 缓存读取从每百万 $0.20 降到 $0.10，官方称多数长时间任务因此便宜约 20%。",
          "links": [
            {
              "label": "@claudeai 发布帖",
              "url": "https://x.com/claudeai/status/2107894039626277339"
            },
            {
              "label": "@claudeai：Sonnet 5.5 缓存读取减半",
              "url": "https://x.com/claudeai/status/2107894060229034197"
            },
            {
              "label": "Anthropic 官方：Claude Haiku 5.5",
              "url": "https://www.anthropic.com/claude-haiku-5-5"
            },
            {
              "label": "Claude 文档：Haiku 5.5 规格与价格",
              "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview"
            },
            {
              "label": "Unite.AI：价格分档与 75% 的计算口径（转述）",
              "url": "https://www.unite.ai/anthropic-releases-claude-haiku-5-5-cutting-small-model-api-prices/"
            }
          ],
          "value": "能看图的前沿厂商小模型降到每百万输入 $0.10，和昨天 OpenAI Decisions API 的标价同一档：美术管线里「看图打标签、按规范检查、改写 prompt」这类批量活，模型成本基本可以忽略不计了。",
          "impact": "中 / TA·资产管理·生图 prompt 管线；成本敏感的批处理最受益。",
          "tags": [
            "成本",
            "Agent"
          ],
          "action": "本周：拿现有用大模型做的资产自动打标或 prompt 改写脚本，换成 claude-haiku-5-5（effort 先设 low/medium）跑 500 条，对比标签准确率和账单；注意重新统计 token，同样文本会多约 30%。",
          "sourceType": "一手",
          "cost": "≤10 万 token：$0.10 / $0.50 每百万；平均比 Haiku 4.5 低约 75%；Sonnet 5.5 缓存读取 $0.10",
          "conduction": "① 资产打标：入库贴图、原画按规范自动打类别、风格、用途标签，500 张图的输入量在 10 万 token 档内，成本按分计；② 判图选型：Decisions API（只回答是否/选项/打分，$0.10/百万）适合硬判断，Haiku 5.5 能输出理由和结构化字段，两者可以按任务分工，先各跑 50 张对比；③ prompt 管线：批量改写、翻译、扩写生图 prompt 交给 Haiku，主模型只做最终审核，参照 LangChain 那类「模型路由」思路省钱；④ 坑：超过 10 万 token 单价涨 5 倍，长上下文的批量任务要拆小；新分词器使 token 数虚高约 30%，预算表要改；⑤ 订阅：Max/Team 订阅本周起每月送 API 额度（Max 5x $100、20x $200、Team 最多 $500），小团队可以先用这笔额度试。"
        },
        {
          "idx": "03",
          "title": "@OpenAI + @sama：GPT-6 进 ChatGPT（10-08 02:05）——新增 Intelligent UI，回答里直接生成图表、表单和可交互小工具；付费用 Sol，免费和 Go 用户从今天起用 Luna",
          "summary": "OpenAI 北京时间 10-08 02:05 发帖：GPT-6 和 Intelligent UI 在 ChatGPT 全球推送，Plus、Pro、Business、Enterprise 当天上线（付费档由 GPT-6 Sol 驱动），Free 和 Go 从「明天」（即今天）开始（由 GPT-6 Luna 驱动）。Intelligent UI 的意思是模型自己决定用文字、图形还是交互组件来回答：可以有图表、可点按钮、表单、交互图解，也可以按需求现做一个小工具，比如计算器，或者「一个能在对话里玩的游戏」。官方说明背后是一个原生可流式的组件库加一个边生成边编译的编译器，并专门训练了模型的版式和交互判断；GPT-6 还能边想边答。范围要看清：这次只改 Chat，ChatGPT Work 和 Codex 的模型不变；旧版 macOS/Windows 桌面客户端不支持，要用网页或更新后的 App；没有单独额度，图片生成等工具仍按原有限额。Sam Altman 04:01 转发：「ChatGPT 现在可以为你生成定制的 UI 了」，并补了一句「等这个等了很久，不想再回到旧版 Chat」。",
          "links": [
            {
              "label": "@OpenAI 发布帖",
              "url": "https://x.com/OpenAI/status/2107894997538525580"
            },
            {
              "label": "@sama：ChatGPT can now generate a custom UI",
              "url": "https://x.com/sama/status/2107924408597950702"
            },
            {
              "label": "OpenAI：GPT-6 and Intelligent UI for everyone",
              "url": "https://openai.com/index/gpt-6-for-everyone"
            },
            {
              "label": "OpenAI 帮助中心：GPT-6 可用范围与限制",
              "url": "https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt"
            }
          ],
          "value": "12 亿周活用户的默认聊天界面开始「按问题现做界面」：对美术组，这是一个零开发成本的小工具生成器；对游戏 UI 设计，是玩家对「界面随内容变化」的预期在被重新训练。",
          "impact": "低中 / 美术负责人·UI/UX 设计·策划原型；不涉及图像/视频模型变化。",
          "tags": [
            "Agent"
          ],
          "action": "本周：让组里每人用 ChatGPT（GPT-6）各做一个日常小工具——贴图预算计算器、序列帧切分预览、配色对比板，挑能用的固化成团队书签；UI 组顺手收集 5 个 Intelligent UI 的交互样式做参考。",
          "sourceType": "一手",
          "conduction": "① 提效：贴图内存/包体预算、动画帧数与时长换算、外包报价对比这类「一次性计算器」，以前要找 TA 写脚本，现在在对话里现做现用；② 原型：策划和美术可以在对话里先做一个能点的玩法或 UI 草模，评审时比静态图更直观，但别当成可交付代码；③ UI 设计：图表、卡片、表单是 OpenAI 组件库里统一的样式，游戏 UI 组可以观察「AI 自动排版」的取舍，作为信息密集界面（背包、商店、数据面板）的参考；④ 边界：这次没有新的生图/视频能力，美术生产管线不用改；免费用户也拿到 GPT-6 Luna，外包和兼职美术的工具水位会跟着抬高。"
        }
      ]
    }
  },
  "actions": [
    "迁移看板：NB2「10/29」改为「已弃用、无关停日」，排期优先给 sora-2（Foundry 10/15）、veo-3.1 preview（10/22）、gpt-image-1（10/23）三条硬截止；NB2→NB2.1 对比测试照做，用结果决定是否主动切。",
    "视频：用 1 个在研角色的 8–10 张设定图和 1 段配音，在 Vidu Q4 Preview 参考生视频跑 5 条 8 秒镜头，与现有主力模型比角色一致性、口型，并记下 1080p/2K 实际 credits。",
    "原画/3D 交接：10 张定稿正面图过 Qwen-Image-2.1 多角度 LoRA v2，出背/侧/俯视参考给建模打分；可用的再喂图生 3D 做多视图输入对比。",
    "资产库：TA 用 EmbeddingGemma 2（440M 图文版、256 维）给 5,000 张贴图/原画 + 200 段技能视频建内网索引，收集 30 个真实检索需求测前 5 命中率；打标脚本同时试 claude-haiku-5-5 的成本。",
    "合规 + 原型：外包验收清单加「SynthID 抽检（阴性不等于无 AI）」；美术负责人花 30 分钟体验 Playground 或登记 Unity Spark 候补，记录哪些环节仍必须人工美术。"
  ],
  "timeline": {
    "title": "时间轴",
    "nodes": [
      {
        "type": "day",
        "date": "2026-10-08",
        "label": "10-08"
      },
      {
        "type": "month",
        "id": "m202610",
        "label": "10月",
        "range": "10-08 ~ …",
        "focus": "NB2 关停日撤回（已弃用、无关停日），硬截止 sora-2 10/15 / Veo3.1 preview 10/22 / gpt-image-1 10/23；Google×Unity Playground / Unity Spark；Vidu Q4 Preview $0.014/秒起；Qwen-Image-2.1 多角度 LoRA；EmbeddingGemma 2 本地多模态检索；SynthID Detector 全面开放 / Claude Haiku 5.5 / GPT-6 Intelligent UI；跳过未上线 9/22–10/07。"
      },
      {
        "type": "week",
        "id": "w41",
        "label": "W41",
        "range": "10-05 ~ 10-11",
        "focus": "NB2 关停日撤回；提示词做游戏（Playground / Unity Spark）；Vidu Q4 参考生视频；多角度 LoRA 出转面图；EmbeddingGemma 2 资产检索；SynthID 外包抽检 / Haiku 5.5 降价 / GPT-6 进 ChatGPT；10-05～10-07 成稿未上线不建节点。"
      },
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
        "focus": "Sora 双轨（直连 9/24 / Foundry 10/15）+ 签价；gpt-image-2.5；Qwen-Image-2.1；Omni/2.5-flash-image/Antigravity 倒计时；上游 pace→Buist 案；已发布末日仍 09-21；跳过未上线 9/12–9/14、9/22–9/30（不造）。"
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
