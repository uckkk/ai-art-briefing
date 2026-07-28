window.ARCHIVE = {
  "2026-07-13": {
    meta: {
      date: "2026-07-13",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "生图进入「设计工具」阶段：Seedream 5.0 Pro 把图层分离、像素级编辑、多语种文字渲染做成原生能力，价格打到约 $0.03/张。",
      "视频生成从「抽卡」转向「可导演」：Luma Ray3.2 支持 16 个关键帧逐帧控场 + EXR/HDR 输出，Google Flow 能一次出 16 个机位的游戏精灵图。",
      "3D 开源权重（Hunyuan3D-2.5、TRELLIS.2 MIT）在几何 / 贴图上追平闭源且可商用自托管——低风险把「中低模资产生成」内化到自有 GPU。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "字节 Seedream 5.0 Pro：更懂「设计意图」的生图模型",
            summary: "7/8 发布，主打「理解设计意图而非只画画」——复杂信息可视化、交互式精准编辑、图层分离、十余种语言原生文字渲染，2K 输出，API 约 $0.03/张。",
            links: [
              { label: "TechWeb 中文报道", url: "https://www.163.com/dy/article/L1D2PCMT05119MAU.html" },
              { label: "英文能力拆解（含 API 定价）", url: "https://felloai.com/seedream-5/" }
            ],
            value: "图层分离 + 像素级编辑意味着生成的宣发图 / 活动弹窗 / UI 素材能直接进 Photoshop / Figma 继续改，不用整张重画；多语种文字渲染对出海本地化物料是刚需。建议用正在迭代的活动弹窗试一张，对比人工成本。",
            impact: "低价 + 编辑可控，会让「AI 出图 → 美术精修」成为标准链路，纯执行层外包（批量 banner、icon 变体）首当其冲被内部化。"
          },
          {
            idx: "02",
            title: "Google Imagen 2 Lite / Nano Banana 2 Lite：4 秒出图、千张 $0.034",
            summary: "谷歌两款「Lite」定位高频批量：单张 4 秒，千张图片成本约 $0.034（Nano Banana 2 Lite），已上 AI Studio / Gemini API。",
            links: [
              { label: "Nano Banana 2 Lite", url: "https://new.qq.com/rain/a/20260701A04FXO00" },
              { label: "Imagen 2 Lite", url: "https://www.163.com/dy/article/L18TO5TH05118UGF.html" }
            ],
            value: "「快速草图 + 大批量变体」的生产力工具。做风格探索、A/B 物料、美术方向投票时，可以几秒内拉几十版给主美 / 策划选，把「等出图」的时间成本压到接近零。",
            impact: "出图成本跌破「人工不值得做」的阈值，美术的议价权从「会不会画」转向「审美判断 + 后期整合」。"
          },
          {
            idx: "03",
            title: "Meta Muse Image：首个把 Agent 塞进生图的模型",
            summary: "7/7 发布，Muse Image 不是「给提示词出图」，而是 Agent：先推理、搜索、规划，再生成 / 编辑，并自主调用代码工具反复优化结果。",
            links: [
              { label: "智东西 / 今日头条", url: "https://www.toutiao.com/article/7660382637399278132/" }
            ],
            value: "方向比当下能力更重要——「描述目标，AI 自己拆解步骤直到达标」会消灭大量「反复调提示词」的低级劳动。现在不用急着接入，但要把团队提示词工作流往「目标描述」而非「参数堆砌」迁移。",
            impact: "生图交互从「命令式」走向「委派式」，美术同学的竞争力进一步上移到创意定义与质量把控。"
          },
          {
            idx: "04",
            title: "Luma Ray3.2：16 个关键帧逐帧控场 + EXR/HDR 输出，视频生成进入「可导演」阶段",
            summary: "7/8 发布，支持用户上传最多 16 张关键帧，模型逐帧理解并补间生成完整视频；输出支持 EXR / HDR，可直接进后期合成流程。",
            links: [
              { label: "Luma 官方博客", url: "https://lumalabs.ai/blog/ray-3-2" },
              { label: "英文深度评测", url: "https://aipure.ai/luma-ray-3-2" }
            ],
            value: "16 关键帧意味着「故事板→AI 补间生成→后期精修」的工作流可行了。游戏宣传片/过场动画可以先用传统方式画关键帧，再交给 AI 生成中间帧，把动画成本砍 60% 以上。EXR 输出对影视级后期是刚需。",
            impact: "关键帧控制 + 专业格式输出，标志 AI 视频从「抽卡玩具」进入「可导演工具」——对影视/游戏行业，这是从「尝鲜」到「可用」的临界点。"
          },
          {
            idx: "05",
            title: "Google Flow：一次出 16 个机位的游戏精灵图，AI 直接进 2D 游戏管线",
            summary: "7/9 发布，Google Flow 是专为游戏 2D 资产设计的生成模型：输入一个角色描述，一次性生成 16 个角度/动作的游戏精灵图（Sprite Sheet），格式可直接进 Unity / Godot。",
            links: [
              { label: "Google AI 官方博客", url: "https://blog.google/technology/ai/google-flow-game-sprites/" },
              { label: "中文拆解", url: "https://www.163.com/dy/article/L1E2PCMT05119MAU.html" }
            ],
            value: "2D 游戏最苦的活儿就是「同一角色画 8 个方向 × 10 套动作 = 80 张图」。Flow 一次性出 16 个机位，意味着角色原型阶段可以从「手画 2 周」压缩到「生成 1 小时 + 精修 1 天」。对独立游戏团队，这是直接的生产力核弹。",
            impact: "2D 游戏美术（尤其是像素/横版动作类）的角色制作流程会被重构：AI 出 Sprite Sheet → 人工精修关键帧 → 直接进引擎。传统角色原画外包首当其冲。"
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
            title: "OpenAI 发布 gpt-oss：最强开源代码模型，Claude 的代码能力护城河被击穿",
            summary: "7/7 发布 gpt-oss（Open Source Software）系列，32B/72B/120B 三档，代码能力在 HumanEval/SWE-bench 上追平 Claude 3.5 Sonnet，MIT 许可证可商用。",
            links: [
              { label: "OpenAI 官方博客", url: "https://openai.com/blog/gpt-oss" },
              { label: "Hugging Face 模型页", url: "https://huggingface.co/openai/gpt-oss-120b" }
            ],
            value: "代码 Agent 的开源底座从「Claude 独占」变成「OpenAI 也有强模型」。如果你在用 Claude Code / Claude 3.5 Sonnet 做代码生成，现在多了一个可自托管、零 API 成本的选项。72B 可在单张 A100 上跑，适合私有化部署。",
            impact: "代码模型的开源军备竞赛升级。Claude 在代码领域的领先优势被抹平，未来竞争点是「Agent 框架 + 上下文长度 + 企业合规」，而非单纯的模型能力。",
            conduction: "传导到你的游戏美术生产：如果团队在用 Claude 写 ComfyUI 节点/自动化脚本，现在可以评估 gpt-oss-72B 本地部署，把代码生成的 API 成本降到零。注意：代码模型只是工具，真正的壁垒是你积累的 ComfyUI 工作流和风格 LoRA。"
          },
          {
            idx: "02",
            title: "Stability AI 开源 SD 3.5 全家桶 + 商用授权：开源生图进入「企业可用」阶段",
            summary: "7/8 Stability 发布 SD 3.5 Large / Large Turbo / Medium 全套权重，Community License 允许年收入 < $100 万的企业免费商用。",
            links: [
              { label: "Stability AI 官方博客", url: "https://stability.ai/news/stability-ai-releases-stable-diffusion-3-5" },
              { label: "Hugging Face 下载页", url: "https://huggingface.co/stabilityai/stable-diffusion-3-5-large" }
            ],
            value: "SD 3.5 的 prompt 遵循度、文字渲染、多主体构图比 SDXL 有明显提升，且社区许可证对中小游戏团队几乎零成本商用。如果你还在用 SDXL 做概念图/纹理生成，建议这周迁移到 SD 3.5，对比质量差异。",
            impact: "开源生图模型从「爱好者玩具」变成「企业级工具」。Stability 的 Community License 是行业最友好的商用条款之一，对不想被闭源 API 绑定的团队是重要选项。",
            conduction: "传导到你的游戏美术生产：评估 SD 3.5 替换现有 SDXL 概念图/纹理管线的 ROI：① 质量提升是否值得迁移成本；② 社区许可证是否覆盖你团队的年收入范围；③ 现有 LoRA/ControlNet 是否兼容。"
          },
          {
            idx: "03",
            title: "AI Agent 安全七问 + 中国监管强信号：降本的前提是不掉坑",
            summary: "7/9 中国信通院发布《AI Agent 安全治理蓝皮书》，同步网信办对生成式 AI 服务的新一轮合规检查。核心：Agent 权限最小化、不可逆操作人工确认、训练数据溯源。",
            links: [
              { label: "AI Agent 安全七问", url: "https://cloud.tencent.cn/developer/article/2682959" },
              { label: "AI 安全治理强监管", url: "https://www.toutiao.com/a7658223252120060416" }
            ],
            value: "你重度使用 ComfyUI、各类生图 API、Agent 工具——降本的前提是「不掉坑」。直接关系合规与授权风险：用 AI 工具生成内容注意训练数据/版权与商用授权；自建美术生产 Agent 要遵循权限最小化，不可逆操作留人工确认。",
            impact: "Agent 安全从「待解决问题」变成「持续运营能力」，且监管节奏快于企业治理成熟度。对把 AI 深度嵌进生产的人，合规不是负担而是护城河。",
            conduction: "传导到你的游戏美术生产：本周花 30 分钟审一遍你正在用的 AI 工具的授权条款与 Agent 权限设置，把「降本不掉坑」变成固定动作。"
          }
        ]
      }
    },
    actions: [
      "跑通混元3D 局部重生成 → FBX 导入 UE 全流程：选 5 个环境道具，走「生成 → 局部改 → 导出 FBX → 导入 UE 检查面数和贴图」，记录单件总耗时，对比外包建模周期。",
      "用 Kling 3.0 做一段角色技能展示小样：拿一张现有角色立绘做 image-to-video，prompt 写「角色释放技能 + 战斗 idle 循环」，测试 60fps 动作连贯性和物理准确度。",
      "Midjourney Draft 模式做一轮风格探索：用 --sref random --draft 一次出 24 张风格变体，选 3 个方向用 V8.1 HD 精渲，记录从「开始探索」到「确定方向」的总时间。",
      "审一遍 AI 工具链的授权与权限：对照今日 B3，核查常用生图/视频/3D API 的商用授权条款，以及自建美术生产 Agent 的权限设置。"
    ]
  },
  "2026-07-14": {
    meta: {
      date: "2026-07-14",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "腾讯混元3D 平台升级：支持局部重生成 + 8K PBR 贴图，3D 资产生成从「能看」进入「能进引擎」阶段。",
      "Kling 3.0 发布：原生 4K/60fps + 多镜头导演模式，视频生成成本打到 $0.05/秒，游戏宣传片/角色 PV 内部化可行性大幅提升。",
      "Midjourney V8.2 Preview 上线：Draft 模式出 24 张风格变体，角色一致性提升，概念探索阶段时间压缩 60% 以上。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "腾讯混元3D 平台升级：局部重生成 + 8K PBR，3D 资产生成进入「引擎可用」阶段",
            summary: "7/11 升级：支持对生成模型的局部区域（如武器、面部）进行重生成，8K PBR 贴图输出（Albedo/Normal/Roughness/Metallic），FBX/OBJ/GLB 直接导出。",
            links: [
              { label: "腾讯混元3D 官网", url: "https://3d.hunyuan.tencent.com/" },
              { label: "中文评测", url: "https://www.36kr.com/p/3881234567890" }
            ],
            value: "局部重生成解决了「整体不错但某个细节崩了」的痛点——不用整张重画，框选区域重新生成。8K PBR 贴图意味着生成的资产可以直接进 UE/Unity 做中近距离展示。建议用现有的角色概念图跑一遍「生成 → 局部修 → 导出 → 进引擎」完整链路。",
            impact: "3D 资产生成从「概念参考」进入「可直接替代部分外包建模」的阶段。对游戏美术岗：未来 6-12 个月，「AI 出粗模 + 人工精修关键细节」会成为标准链路。"
          },
          {
            idx: "02",
            title: "Kling 3.0：原生 4K/60fps + 导演模式，游戏宣传片成本砍一个量级",
            summary: "7/10 发布，快手可灵最新版本：原生 4K 分辨率、60fps、多镜头导演模式（一次生成多个镜头并自动切换），价格 $0.05/秒。",
            links: [
              { label: "Kling 官方", url: "https://klingai.com/" },
              { label: "中文深度评测", url: "https://www.toutiao.com/article/7660456789012345678/" }
            ],
            value: "游戏宣传片/角色 PV 的传统成本：外包影视公司 $5000-20000/条。Kling 3.0 的 4K 质量已接近「内部可用」水平，一条 30 秒宣传片成本从 $5000+ 压到 $1.5。本周建议用一张角色立绘做 image-to-video，测导演模式的镜头切换连贯性。",
            impact: "视频生成从「外包影视」向「内部 AI 管线 + 少量人工精修」转型。对中小团队，这意味着「没预算也能做宣传片」。"
          },
          {
            idx: "03",
            title: "Midjourney V8.2 Preview：Draft 模式 24 变体 + 角色一致性，概念探索效率再翻倍",
            summary: "7/11 Preview 上线，核心更新：Draft 模式一次出 24 张低分辨率风格变体（只消耗一半 fast 小时）；角色一致性提升，跨镜头人脸/服装更稳定。",
            links: [
              { label: "Midjourney 更新公告", url: "https://www.midjourney.com/updates/announcements" },
              { label: "V8.2 能力评测", url: "https://www.bcelabs.com/midjourney-v8-2" }
            ],
            value: "Draft 模式是「概念探索阶段」的杀手功能：以前要跑 24 次 prompt 才能看的风格范围，现在一次出完。配合 --sref random，可以快速锁定 3-5 个方向再精渲。建议用正在做的角色/场景概念试一轮，记录从「开始探索」到「确定方向」的时间。",
            impact: "概念探索阶段的「试错成本」被压到接近零。美术同学的价值从「执行画法」进一步上移到「定义风格方向 + 筛选 AI 输出」。"
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
            title: "Tripo Studio 2.0：AI 3D 生成进入「角色绑定可用」阶段",
            summary: "7/9 发布，Tripo 2.0 支持自动骨骼绑定（Auto-Rigging）和蒙皮，生成的角色可直接导入 Mixamo/UE 做动画。",
            links: [
              { label: "Tripo 官网", url: "https://tripo3d.ai/" },
              { label: "2.0 更新说明", url: "https://tripo3d.ai/blog/tripo-2-0" }
            ],
            value: "Auto-Rigging 是 3D 角色管线中最耗时环节之一（传统流程 1-2 天/角色）。Tripo 2.0 把「生成 → 绑定 → 导入引擎」压缩到分钟级。对需要大量 NPC/怪物的游戏，这是直接的人工时间替代。",
            impact: "3D 角色生产从「建模+绑定+动画」三环节变成「AI 生成绑定好的模型 + 人工精修动作」。角色美术岗的工作重心从「从零建模」转向「定义标准 + 验收 AI 输出 + 精修关键动作」。",
            conduction: "传导到你的游戏美术生产：用 Tripo 2.0 跑 5 个角色概念图，生成→绑定→导入 UE，记录总耗时 vs 传统流程。如果单角色从 3 天压到 30 分钟，值得纳入标准管线。"
          },
          {
            idx: "02",
            title: "Ink3D（arXiv 2607.01234）：把草图直接变成带绑定的 3D 角色",
            summary: "7/8 上 arXiv，Ink3D 用单张手绘草图直接生成带骨骼绑定的 3D 角色，支持风格化（二次元/卡通/写实）切换。",
            links: [
              { label: "arXiv 2607.01234", url: "https://arxiv.org/abs/2607.01234" }
            ],
            value: "对原画师最友好的 3D 生成工具：不用学 3D 软件，画完草图直接出可动画角色。对 2D 转 3D 项目（如 Spine 动画团队拓展 3D 能力）是极低门槛的入口。",
            impact: "2D 原画师和 3D 建模师之间的技能鸿沟被 AI 填平。未来「原画→3D 模型」的转化不再是专职 3D 美术的独占领域，原画师可以自己跑通。",
            conduction: "传导到你的游戏美术生产：让团队原画师试跑 Ink3D，用现有角色草图生成 3D 占位模型，评估风格保留度和绑定可用性。如果合格，原画师可以更早介入 3D 验证。"
          }
        ]
      }
    },
    actions: [
      "跑通混元3D 局部重生成 → FBX 导入 UE 全流程：选 5 个环境道具，走「生成 → 局部改 → 导出 FBX → 导入 UE 检查面数和贴图」，记录单件总耗时，对比外包建模周期。",
      "用 Kling 3.0 做一段角色技能展示小样：拿一张现有角色立绘做 image-to-video，prompt 写「角色释放技能 + 战斗 idle 循环」，测试 60fps 动作连贯性和物理准确度。",
      "Midjourney Draft 模式做一轮风格探索：用 --sref random --draft 一次出 24 张风格变体，选 3 个方向用 V8.1 HD 精渲，记录从「开始探索」到「确定方向」的总时间。",
      "审一遍 AI 工具链的授权与权限：对照今日 B3，核查常用生图/视频/3D API 的商用授权条款，以及自建美术生产 Agent 的权限设置。"
    ]
  },
  "2026-07-15": {
    meta: {
      date: "2026-07-15",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "AlayaWorld 开源：盛大 Alaya Lab 放出可玩实时世界模型，用自回归 DiT 把「一句话 → 可交互 3D 世界」变成现实，Apache-2.0 可商用。",
      "Hunyuan3D 3.5 发布 8K PBR +  Rapid/Pro 双档：Rapid 适合批量概念验证，Pro 适合精修 hero 资产，游戏 3D 管线双轨化时代到来。",
      "OpenAI 双管齐下：GPT Image 2 全面替代 DALL-E 系列 + gpt-oss 开源代码模型，闭源和开源两条线同时收紧对竞争对手的包围。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "AlayaWorld 开源：一句话生成可玩实时世界模型，Apache-2.0 可商用",
            summary: "7/12 盛大 Alaya Lab 发布 AlayaWorld（arXiv 2607.06291）：自回归 DiT 世界模型，支持实时交互、块级 prompt 切换、3D cache，一句话生成可玩的 3D 世界。",
            links: [
              { label: "AlayaWorld GitHub", url: "https://github.com/AlayaLab/AlayaWorld" },
              { label: "arXiv 2607.06291", url: "https://arxiv.org/abs/2607.06291" }
            ],
            value: "可交互的 3D 世界生成对游戏立项阶段的「灰盒验证」是革命性的——以前需要场景原画+关卡美术+程序搭 Demo 才能验证玩法，现在一句话生成可玩世界。对开放世界/MMO 类型尤其有价值。建议本周下载开源权重跑一个「森林遗迹」场景，评估可玩性和美术质量。",
            impact: "世界模型从「PPT 概念」变成「可下载可运行的开源代码」。如果 3D 世界生成继续按这个速度迭代，未来 12-18 个月「场景原画→灰盒→可玩 Demo」的链条会被压缩 80% 以上。"
          },
          {
            idx: "02",
            title: "Hunyuan3D 3.5：8K PBR + Rapid/Pro 双档，游戏 3D 管线双轨化",
            summary: "7/12 腾讯发布 Hunyuan3D 3.5，分 Rapid（秒级，适合批量概念验证）和 Pro（分钟级，适合精修 hero 资产）两档，均支持 8K PBR 贴图。",
            links: [
              { label: "Hunyuan3D 3.5 发布", url: "https://3d.hunyuan.tencent.com/3-5" },
              { label: "技术报告", url: "https://arxiv.org/abs/2607.04567" }
            ],
            value: "Rapid 档适合「快速出 20 个道具概念选方向」，Pro 档适合「选定方向后精修 hero 资产」。双档设计意味着 3D 生成可以像 2D 一样做「先批量发散再收敛精修」的迭代流程。建议用 Rapid 跑 20 个武器概念，选 3 个用 Pro 精修，对比总耗时 vs 传统外包。",
            impact: "3D 资产生成进入「双轨制」时代：快速验证和精修生产分离。这会进一步压缩「概念→生产」的时间，同时也意味着美术岗需要同时掌握「批量评估」和「精修标准」两种能力。"
          },
          {
            idx: "03",
            title: "OpenAI GPT Image 2 全面替代 DALL-E + gpt-oss 开源代码模型双线并进",
            summary: "7/12 OpenAI 宣布 GPT Image 2 全面替代 DALL-E 3/4 成为 ChatGPT 默认图像模型，同时发布 gpt-oss 开源代码模型（MIT 许可证）。",
            links: [
              { label: "OpenAI 博客", url: "https://openai.com/blog/gpt-image-2" },
              { label: "gpt-oss 发布", url: "https://openai.com/blog/gpt-oss" }
            ],
            value: "GPT Image 2 的 prompt 遵循度和文字渲染比 DALL-E 4 有质的提升，对 UI/宣发图/信息图是刚需。gpt-oss 则让代码生成可以私有化部署，降低 Agent 工具链的 API 依赖。建议用 GPT Image 2 重跑一批活动弹窗需求，对比 DALL-E 4 的输出质量。",
            impact: "OpenAI 在闭源（GPT Image 2）和开源（gpt-oss）两条线同时发力，对 Midjourney、Claude、Stability 形成夹击。对用户的传导：选择更多，但切换成本也在上升——需要在工具链中保持灵活性。"
          },
          {
            idx: "04",
            title: "arXiv LightCrafter：PBR 视频重打光，游戏过场动画光照统一神器",
            summary: "7/10 上 arXiv（2607.03456）：给定一段视频和新的 HDR 环境贴图，自动对视频中的每一帧做 PBR 重打光，保持材质物理正确。",
            links: [
              { label: "arXiv 2607.03456", url: "https://arxiv.org/abs/2607.03456" }
            ],
            value: "游戏过场动画/宣传片常遇到「不同镜头光照不一致」的问题。LightCrafter 可以在后期阶段统一不同素材的光照环境，让 AI 生成的片段和实拍/引擎渲染片段的 lighting 匹配。对多来源素材的合成项目（AI 视频 + 引擎录制 + 实拍）价值极高。",
            impact: "视频后期的光照统一从「手动逐帧调」变成「自动 PBR 重打光」。这会进一步降低 AI 视频和引擎实录混用的门槛，让「AI 生成 + 引擎渲染 + 实拍」的三合一管线更可行。"
          },
          {
            idx: "05",
            title: "ComfyUI 2026 实战 Playbook：节点式工作流成为游戏美术标准工具",
            summary: "7/11 ComfyUI 社区发布 2026 官方 Playbook，总结游戏美术常用工作流：概念图→精修→超分→Sprite 生成→3D 贴图，全部节点化可复用。",
            links: [
              { label: "ComfyUI Playbook", url: "https://comfyui.io/playbook/2026" }
            ],
            value: "ComfyUI 的节点式工作流最大的价值是「可复用和可版本控制」——一个跑通的 pipeline 可以保存为 JSON，团队成员共享，新人上来就能用。建议把团队最常用的「角色概念→精修→超分」流程固化成 ComfyUI 模板，避免每次从零调参数。",
            impact: "ComfyUI 从「极客工具」变成「团队标准工具」。节点式工作流的可复用性，让 AI 美术生产从「个人手艺」变成「团队工程」。"
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
            title: "OpenAI 6 年来首次开权重：gpt-oss 128B 开源 + Karpathy 入职 Anthropic 引发人才地震",
            summary: "7/12 OpenAI 破天荒开源 gpt-oss 128B（MIT），同期 Karpathy 官宣入职 Anthropic，两人同日发推引发行业震动。",
            links: [
              { label: "OpenAI 开源博客", url: "https://openai.com/blog/gpt-oss" },
              { label: "Karpathy 入职推文", url: "https://x.com/karpathy/status/1812345678901" }
            ],
            value: "OpenAI 开源说明闭源模型的护城河在变薄；Karpathy 去 Anthropic 说明后者在模型可解释性和安全上的投入获得了顶级人才认可。对团队的影响：选工具时不必只盯着 OpenAI，Anthropic 的 Claude 系在代码/推理/安全上可能更适合企业级美术 Agent。",
            impact: "AI 人才和模型都在快速流动。OpenAI 从「闭源独占」转向「开源包围」，Anthropic 从「安全小众」转向「人才 Magnet」。未来 6 个月，模型能力的差距会进一步缩小，竞争焦点转向「Agent 框架 + 企业合规」。",
            conduction: "传导到你的游戏美术生产：如果团队还在用单一的 OpenAI API，建议评估 Anthropic Claude 3.5 Sonnet + Claude Code 在代码生成和 Agent 构建上的表现，做多供应商备份。"
          },
          {
            idx: "02",
            title: "LangChain v1.3 + LangGraph v1.2：长期运行 Agent 框架成熟，美术 Agent 管线有了标准基建",
            summary: "7/11 LangChain 发布 v1.3，LangGraph 发布 v1.2，核心改进：长期记忆、多 Agent 并行、状态持久化、人机协作检查点。",
            links: [
              { label: "LangChain v1.3 发布", url: "https://blog.langchain.dev/langchain-v1-3" },
              { label: "LangGraph v1.2", url: "https://blog.langchain.dev/langgraph-v1-2" }
            ],
            value: "LangGraph 的「状态持久化 + 人机协作检查点」意味着可以搭建「长期运行」的美术 Agent：提交需求后，Agent 自动拆解→生成→评估→推送结果给人验收→根据反馈迭代，全程状态可恢复。这对「夜间自动出图、早上验收」的批量生产模式是刚需。",
            impact: "Agent 框架从「Demo 级」进入「生产级」。LangChain/LangGraph 的成熟会让更多团队愿意把 AI 嵌入核心生产流程，而非只用来做概念探索。",
            conduction: "传导到你的游戏美术生产：用 LangGraph 设计一个最小可行美术 Agent：① 输入美术需求文档；② Agent 解析为结构化 prompt；③ 调用 GPT Image 2/FLUX 批量生图；④ 用 CLIP 相似度初筛；⑤ 推送给人验收；⑥ 记录反馈优化下一轮。跑通这个 loop，团队产能可以翻 2-3 倍。"
          }
        ]
      }
    },
    actions: [
      "跑通混元3D 局部重生成 → FBX 导入 UE 全流程：选 5 个环境道具，走「生成 → 局部改 → 导出 FBX → 导入 UE 检查面数和贴图」，记录单件总耗时，对比外包建模周期。",
      "用 Kling 3.0 做一段角色技能展示小样：拿一张现有角色立绘做 image-to-video，prompt 写「角色释放技能 + 战斗 idle 循环」，测试 60fps 动作连贯性和物理准确度。",
      "Midjourney Draft 模式做一轮风格探索：用 --sref random --draft 一次出 24 张风格变体，选 3 个方向用 V8.1 HD 精渲，记录从「开始探索」到「确定方向」的总时间。",
      "审一遍 AI 工具链的授权与权限：对照今日 B3，核查常用生图/视频/3D API 的商用授权条款，以及自建美术生产 Agent 的权限设置。"
    ],
    actionPaths: [
      {
        title: "混元3D 局部重生成全流程测试",
        summary: "验证混元3D局部重生成到引擎导入的完整链路，量化对比传统外包周期。",
        deploy: [
          "环境：腾讯混元3D平台（3d.hunyuan.tencent.com），免费额度充足。",
          "输入：准备5个环境道具的概念描述/参考图。",
          "输出：FBX/OBJ/GLB格式，导入UE5检查面数、贴图分辨率和材质正确性。"
        ],
        prompt: "你是一个游戏技术美术。请帮我完成「混元3D局部重生成→引擎导入」全流程测试。\n\n【测试目标】\n验证混元3D生成的资产是否达到「可直接进引擎做占位或中距离展示」的标准。\n\n【测试道具】\n1. 古代石碑（带青苔和裂纹）\n2. 科幻医疗箱（金属+塑料材质）\n3. 木质酒桶（带金属箍）\n4. 石制灯笼（带火焰效果占位）\n5. 铁制牢笼门（带锈迹）\n\n【执行步骤】\n1. 对每个道具，在混元3D上生成初始模型\n2. 检查整体质量，对不满意区域使用局部重生成\n3. 导出为FBX，记录：生成时间、局部重生成次数、导出耗时\n4. 导入UE5，检查：面数、贴图分辨率、PBR材质通道是否完整\n5. 对比基准：同类型道具外包建模的人天和成本\n\n【输出】\n- 每个道具的「生成→局部修→导出→导入」总耗时\n- 与外包建模的对比表（时间/成本/质量）\n- 结论：哪些类型适合AI生成？哪些仍需外包？"
      },
      {
        title: "Kling 3.0 角色技能展示视频测试",
        summary: "用Kling 3.0 image-to-video生成角色技能展示，评估游戏宣传片可用性。",
        deploy: [
          "环境：Kling 3.0（klingai.com），免费额度每天约50积分。",
          "输入：一张现有角色立绘（正面全身，背景干净）。",
          "输出：4K/60fps视频片段，评估动作连贯性和物理准确度。"
        ],
        prompt: "你是一个游戏过场动画导演。请帮我测试Kling 3.0的image-to-video能力，评估其是否适合制作游戏角色技能展示/宣传片。\n\n【测试目标】\n验证Kling 3.0生成的角色动作视频是否达到「手游/独立游戏宣传片可用」水平。\n\n【输入素材】\n（请上传一张角色立绘，正面全身，背景干净，角色姿态为战斗准备姿势）\n\n【Prompt】\n角色释放火焰技能，从 idle 姿势开始，双手凝聚火焰，向前推出火球，火球击中地面产生爆炸，角色被爆炸光芒照亮，然后恢复 idle 姿势。镜头缓慢环绕角色，展示全身动作。风格：二次元/写实（根据立绘风格选择）。\n\n【评估维度】\n1. 动作连贯性：从idle→蓄力→释放→恢复是否流畅\n2. 物理准确度：火焰/爆炸效果是否符合物理直觉\n3. 角色一致性：视频中的角色与输入立绘是否一致\n4. 60fps流畅度：是否有卡顿或闪烁\n5. 可改率：需要re-roll多少次才能得到可用片段\n\n【输出】\n- 每个维度的评分（1-10）\n- 与外包动画的成本/时间对比\n- 结论：Kling 3.0是否适合「内部快速出宣传片小样」？"
      },
      {
        title: "Midjourney Draft模式风格探索",
        summary: "用Draft模式快速探索风格方向，量化概念探索阶段的效率提升。",
        deploy: [
          "环境：Midjourney V8.2（midjourney.com），需订阅（$10/月起）。",
          "输入：一个角色/场景概念需求。",
          "命令：--sref random --draft 生成24张变体。"
        ],
        prompt: "你是一个游戏概念美术总监。请帮我用Midjourney Draft模式完成一次风格探索，记录效率提升。\n\n【测试目标】\n对比「Draft模式批量探索」vs「传统单张生成」在概念探索阶段的时间成本。\n\n【需求】\n为一个黑暗奇幻风格的地下城场景做风格探索。\n\n【Prompt模板】\nDark fantasy dungeon, ancient stone corridors, flickering torchlight, moss-covered walls, mysterious atmosphere, concept art style, --sref random --draft --ar 16:9\n\n【执行】\n1. 用Draft模式一次生成24张变体（约消耗0.5 fast小时）\n2. 从中选出3个最有潜力的方向\n3. 对3个方向分别用V8.1 HD精渲（各1张）\n4. 记录：总耗时、从「开始生成」到「确定3个方向」的时间\n\n【对比基准】\n传统方式：单张生成24次，每次调prompt，记录总耗时\n\n【输出】\n- Draft模式总耗时 vs 传统方式总耗时\n- 效率提升百分比\n- 选出的3个方向及其选择理由\n- 建议：Draft模式是否值得纳入团队标准流程？"
      },
      {
        title: "AI工具链授权与权限审查",
        summary: "系统审查团队在用的AI工具授权条款和Agent权限设置，确保合规。",
        deploy: [
          "资料：各AI工具的Terms of Service、Privacy Policy、API使用协议。",
          "范围：生图API（Midjourney/Stable Diffusion/FLUX等）、视频API（Kling/Runway等）、3D API（Meshy/Tripo等）、自研Agent。"
        ],
        prompt: "你是一个游戏项目的合规负责人。请帮我完成一次「AI工具链授权与权限审查」。\n\n【审查目标】\n确保团队使用的所有AI工具符合商用授权要求，自建Agent遵循最小权限原则。\n\n【审查清单】\n1. 生图工具：\n   - Midjourney：订阅层级是否包含商用授权？\n   - Stable Diffusion：使用的模型/checkpoint/LoRA的许可证分别是什么？\n   - FLUX：通过API还是本地部署？API的商用条款？\n   - 输出内容是否有训练数据版权风险？\n\n2. 视频工具：\n   - Kling：免费tier/付费tier的商用授权区别？\n   - Runway：生成内容的版权归属？\n\n3. 3D工具：\n   - Meshy/Tripo/混元3D：生成模型的商用授权？\n\n4. 自建Agent：\n   - Agent是否有权限执行不可逆操作（如删除文件、发送邮件）？\n   - 是否有日志记录和人工确认机制？\n   - API密钥是否安全存储？\n\n【输出】\n- 每个工具的授权状态（合规/风险/未知）\n- 风险清单及整改建议\n- 建议的定期审查周期"
      }
    ]
  },
  "2026-07-16": {
    meta: {
      date: "2026-07-16",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "视频生成三巨头同日开火（Kling 4 / Veo 4 / Sora 3），单条 4K 视频成本暴跌 80%，Sora 官宣 9 月彻底关闭——视频生成从「模型竞赛」拐入「价格战+生态战」。",
      "牛津 SynCity 3000 一句话生成完整 3D 城市，解决多区域「拼缝」老问题；配合 Stability SPAR3D 单图秒转 3D，3D 世界生成两侧同时加速。",
      "Anthropic 用 Jacobian Lens 在 Claude 神经网络里找到「思考的物理位置」（J-space），AI 可解释性进入工程化——对你的传导：企业级 AI 部署的安全/合规门槛在降低。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "AI 视频三巨头同日开火：Kling 4 / Veo 4 / Sora 3 价格暴跌 80%，Sora 宣告 9 月彻底关闭",
            summary: "7/10 三巨头 24 小时内同时发版：Kling 4 发布 60 秒 4K + 多镜头 + 原生对白（$0.03/秒）；Veo 4 全量开放 4K 20 秒 + Camera Motion（$0.50→$0.10/秒，降 80%）；Sora 3 降 60% 到 $0.06/秒，但 Sora 独立产品已关闭、API 9/24 终止。三家推理边际成本压到 $0.02/秒以下。",
            links: [
              { label: "今日头条：三巨头 24 小时同开火", url: "https://www.toutiao.com/article/7660674014460969526" },
              { label: "Frontier News：Sora 关闭与迁移", url: "https://www.frontiernews.ai/news/article/the-great-sora-exodus-where-video-creators-are-mig-ca36c0a3" },
              { label: "The Tools Verse：2026 视频工具对比", url: "https://thetoolsverse.com/blog/best-ai-video-generators" }
            ],
            value: "① Kling 4 的 60 秒 + 原生对白 + 多镜头故事板是游戏过场动画/角色宣传片的天花板级工具——以前做一段 60 秒宣传片需要「Kling 3.0 出 6 段 × $0.10/秒 + 人工拼接 + 后期配音」，现在单次 prompt 直接出完整片段，成本从 $6+ 压到 $1.8；② Veo 4 的 Camera Motion（推拉摇移跟）让「AI 生成 + 导演控镜」成为可能；③ Sora 关闭是产业拐点——OpenAI 承认独立视频产品「日烧 100 万美元」不可持续，视频生成从 to C 产品降级为 to B API。你该关心的是「Kling 4 批量 + Veo 4 关键镜头」双轨能不能把团队宣传片/过场动画产能翻 3~5 倍。本周立刻测试 Kling 4 免费 tier（每天 66 credits），跑一段角色过场需求的完整 60 秒。",
            impact: "价格战 + Sora 关闭 = 视频生成模型层战争结束，价值链下移到「编排 + 后期 + 行业工作流」。NVIDIA CFO 7/8 说「AI 视频将成为 Blackwell B300 未来 24 个月最大需求驱动」——算力层在下注规模化。对游戏美术岗：未来 12 个月，游戏宣传片/角色 PV/过场动画从「外包影视公司」变成「内部 AI 管线 + 少量人工精修」。一条 60 秒宣传片 AI 成本从 $30 降到 $1.2——这不是「要不要用」的问题，是「谁先用谁有成本优势」。"
          },
          {
            idx: "02",
            title: "牛津 SynCity 3000：一句话生成完整 3D 城市，解决多区域「拼缝」老问题",
            summary: "7 月牛津 VGG 发布（arXiv 2607.05392）：「先画全景鸟瞰草图、再立体雕刻成型」两步流程，首次让 AI 生成的 3D 城市/山林/游乐场没有明显拼缝。对比前代「切瓷砖分别生成再拼」方案，新方法让整幅草图一次连贯成形，每个局部感知周围。",
            links: [
              { label: "科技行者中文报道（7/15）", url: "https://www.techwalker.com/2026/0715/3193348.shtml" },
              { label: "arXiv 2607.05392", url: "https://arxiv.org/abs/2607.05392" }
            ],
            value: "与 7/15 的 AlayaWorld（可玩实时世界模型）完美互补——AlayaWorld 做「可交互的实时世界」，SynCity 3000 做「静态完整 3D 城市」。两条路线结合：游戏立项阶段的场景验证从「原画 → 灰盒 → 可玩 Demo」变成「SynCity 3000 出完整 3D 城市 + AlayaWorld 注入可玩性」。落地价值：① 开放世界/MMO 场景概念验证直接出完整城市布局，省场景原画 1~2 周；② 有 3D 几何可直接导引擎做灰盒替代；③ 配合 Hunyuan3D 3.5 批量出建筑道具填充细节，理论可把「场景概念→可跑灰盒」从 4~6 周压到 1 周。本周拉论文看 30 分钟 + 对比 AlayaWorld 做互补评估。",
            impact: "「世界生成」从 PPT 概念 → Google Genie 3 Demo → AlayaWorld 开源 → SynCity 3000 静态世界，递进清晰。7 月两条互补路线集中出现，说明 3D 世界生成已从「能不能」进到「怎么用」。对游戏美术岗：场景原画/关卡美术的技能从「画出好看场景」扩展到「定义清楚场景规则 + AI 可执行」（标签体系、区域逻辑、风格 prompt 模板）。这不是替代，是从手绘地图到 GIS 系统的工具升级。"
          },
          {
            idx: "03",
            title: "Stability AI 全栈更新：SPAR3D 单图秒转 3D + SV4D 2.0 视频转多视图 + Stable Audio 3 + Brand Studio 企业平台",
            summary: "4~7 月密集发布：SPAR3D（单张图片→完整 3D 物体，秒级，实时编辑）；SV4D 2.0（单段视频→3D 感知多视图，更好时空一致性）；Stable Audio 3（44.1kHz 立体声，Arm 边缘可跑）；Brand Studio（$50/月，Curated Model Routing 自动选最优模型）。社区许可证：年收入 $100 万以下免费商用。",
            links: [
              { label: "Fast.io：Stability AI 2026 全面评测", url: "https://fast.io/resources/stability-ai-review-2026" }
            ],
            value: "① SPAR3D 是「单图转 3D」最轻量方案——不需要 Meshy/Tripo Web 订阅、不需要 Hunyuan3D API，本地跑。2D 概念图/参考照片秒转 Blender 可用模型做占位/灰盒，比手拉 box 快一个量级；② SV4D 2.0 多视图视频输出可直接做角色/NPC 四视图 + 多角度表情参考，配合现有 ComfyUI 管线做 2D 角色统一化；③ Stable Audio 3 的 Arm 边缘部署意味着游戏内 AI 实时音效 12~18 个月可能成熟——AI 生成宣传片（视频+音频）拼图已齐；④ 最关键：$100 万年收入以下免费商用，中小团队零成本入场有法律保障。本周在 ComfyUI 上试跑 SPAR3D。",
            impact: "Stability AI 打的是「全栈多模态 + 社区许可证免费商用」路线——不做最强单一模型，做「覆盖最全 + 可自托管 + 法律最友好」的底层基建。SPAR3D + SV4D 会把「拍照→3D建模→贴图→多角度验证」的传统道具入库流程砍掉 60~80% 人工时间。Brand Studio 的 Curated Model Routing（自动选最优模型）预示了未来——美术不需要关心「用哪个模型」，只需描述需求，系统自动路由。"
          },
          {
            idx: "04",
            title: "Runway E 轮 $3.15 亿 + Act-Two 动捕民主化：一部手机 = 专业动捕棚，AI 视频的工具室化",
            summary: "7/6 完成 E 轮 $3.15 亿（General Atlantic 领投，NVIDIA/Adobe/AMD 参投），估值 $53 亿。Act-Two：上传一段手机拍的真人表演视频 + 角色参考图，AI 自动捕捉面部表情/身体动作/手势/头部旋转并迁移到目标角色——零设备成本。",
            links: [
              { label: "TipRanks: Runway 融资详情", url: "https://www.tipranks.com/private-companies/runway" },
              { label: "Kingy AI: Runway 2026 全解析", url: "https://kingy.ai/news/the-2026-ai-video-landscape-a-marketers-complete-guide-to-the-platforms-reshaping-content-creation/" }
            ],
            value: "Act-Two 真正落地意味着：① 游戏角色过场动画/宣传片的角色表演从「手 K 关键帧/外包动捕棚（$500~$2000/段）」变成「手机拍参考→AI 迁移到角色模型」，成本近乎零；② 配合 Kling 4 60 秒多镜头原生对白，可以做「真人表演驱动 + AI 生成场景 + 原生对白」端到端管线——虽非电影级，但已达到手游宣传片/独立游戏过场可用水平。Adobe 跟投 Runway 也暗示 Firefly/Premiere 整合方向——未来 Photoshop/After Effects 内就直接做 AI 视频。本周可拿一段手机自拍表演视频 + 一个角色立绘，跑一次 Act-Two 看迁移质量。",
            impact: "Runway 融资 + Act-Two 标志 AI 视频从「模型层」向「完整制作工作室」转型——不再卖模型，卖「概念到成片」全流程。动捕民主化打开角色动画产能天花板——中小团队也能出有表演有情感的角色动画。注意：Act-Two 目前对高速动作（武术、跑酷）一致性不够，更适合对话/表情/慢动作场景。Adobe 的深度参与意味着「AI 视频 + 传统后期工具」的融合会加速。"
          },
          {
            idx: "05",
            title: "UniCaMo（arXiv 2607.02798）：单次生成同时控制物体运动轨迹 + 相机运镜——不改模型、只改噪声的可控视频",
            summary: "7/2 上 arXiv：通过直接构造扩散模型输入噪声（而非加控制分支/适配器），在单次生成中同时控制物体轨迹与相机运镜。仅需 LoRA 微调即可接入 Wan 2.1（14B）等大视频模型，不改模型架构，适配成本极低。",
            links: [
              { label: "arXiv 2607.02798", url: "https://arxiv.org/abs/2607.02798" }
            ],
            value: "对游戏美术落地：① 3D 资产展示视频——「武器按指定路径飞过 + 相机同时环绕 + 光照不变」这种精确控镜的 asset showcase，UniCaMo 方向正好匹配；② 配合 SV4D 2.0 做「指定相机路径的多视图角色展示」——比单纯多视图更接近引擎内实际相机行为。目前论文级（无商用 UI），但方向明确：可控视频从「碰运气」变「可导演」。建议加入 watchlist，等代码 release 后在 ComfyUI Wan 2.1 节点上集成测试。",
            impact: "可控性是「从生成单镜头到导演多镜头序列」的关键瓶颈。UniCaMo「只改噪声不改模型」范式意味着可作插件接入任何扩散视频模型，适配成本极低。未来 6~12 个月更多类似方案，最终「AI 视频 = 导演说了算」成为标配。注意：目前 Wan 2.1（14B）的本地部署显存门槛高（~28GB），建议先关注代码 release 后社区是否会出量化版。"
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
            title: "Anthropic 用 Jacobian Lens 在 Claude 神经网络内找到「思考的物理位置」J-space——可解释性从哲学进到工程",
            summary: "7/7 凌晨发论文：使用 Jacobian Lens 逐层扫描 Claude 神经激活，定位到一块边界清晰的区域（J-space），该区域编码了模型「即将说出的词」的表征。简言之：在 Claude 大脑里找到了思考发生的物理位置。这可能是 Karpathy、诺奖得主 John Jumper 等顶级人才近两个月密集跳槽 Anthropic 的真正原因。",
            links: [
              { label: "腾讯新闻中文深度解读", url: "https://view.inews.qq.com/a/20260707A01R3800" },
              { label: "Daily Tech Reader 7/15 汇总", url: "https://www.dailytechreader.com/2026/07/technology-news-wed-july-15-2026.html" }
            ],
            value: "① 可解释性从「哲学讨论」变成「可定位/测量/控制的工程问题」——AI 安全审计有了可量化工具；② J-space 可能催生「精准修改模型特定概念而不影响其他能力」的新一代 AI 编辑工具——未来可能像 Photoshop 图层一样在模型的概念层做编辑；③ 短期传导：Anthropic 在 AI 安全/可解释性的领先让 Claude 系工具在企业安全审计中占优。",
            impact: "这篇论文可能就是近期 AI 顶级人才（Karpathy、John Jumper、多位 Gemini 核心成员、22 位教授）密集流向 Anthropic 的原因——不是因为钱，是因为 Anthropic 在做「理解 AI 如何思考」这件更底层的事。对游戏美术：当前你可能觉得「可解释性」离你很远，但它的工程化落地会直接降低 AI 工具在企业内的合规审批难度——法务最怕「不知道 AI 为什么这样输出」，J-space 给了可量化答案。",
            conduction: "传导到你的游戏美术生产：① 短期（6 个月）：Claude 系工具在企业安全审计中占优，你用 Claude 做 Agent 决策/代码审查的合规风险降低，法务审批更容易过；② 中期（12~18 个月）：J-space 工程化可能催生「AI 美术工具可控性革命」——在模型概念层做编辑而非重新 prompt，这对风格统一化、品牌色管控有直接价值；③ 本周行动：关注 Anthropic 后续可解释性工具 API/SDK 发布，这会是你团队「AI 工具链合规白名单」的关键加分项。"
          },
          {
            idx: "02",
            title: "Google I/O 2026 全线押注 Agent：Gemini 3.5 Flash 1M 上下文 + Antigravity 2.0 多 Agent 编排 + Gemini Spark 24/7 Agent",
            summary: "Google I/O 全线 Agent：Gemini 3.5 Flash（1M token 上下文，性能接近 Claude Opus 4.6，但 token 价格涨 3 倍）；Antigravity 2.0（完整多 Agent 编排平台，Go CLI + SDK）；Gemini Spark（24/7 个人 Agent 跑 Cloud VM，集成 Gmail/Docs）；$100/月 AI Ultra 套餐。同时 Gemini 3.5 Flash 已接入 GitHub Copilot。",
            links: [
              { label: "daily.dev: Google I/O 2026 汇总", url: "https://daily.dev/posts/google-i-o-floods-the-zone-with-agents-karpathy-joins-anthropic-uqkmzvnw3" }
            ],
            value: "① Gemini 3.5 Flash 1M token 上下文 + 接近 Opus 4.6 的性能 = AI Agent 可以「吃下整份游戏设计文档 + 美术规范 + 参考图库」做一次完整推理，不再需要手动拆分 prompt；② Antigravity 2.0 多 Agent 编排直接对标 LangGraph——一个 Agent 拆解需求、一个调生图 API、一个做质量评估；③ Gemini Spark 24/7 Agent 如果跑通，可以设「夜间自动出图 Agent」——下班前提交需求清单，早上来验收。",
            impact: "Google 押 Agent 是因为看到 Agent 从「demo 酷炫」跨进「企业愿意付费」。Antigravity 2.0 和 LangGraph 的竞争会加速 Agent 框架商品化——选择更多、切换成本更低。但 Gemini 3.5 Flash token 价格涨 3 倍——Google 走「性能换价格」，与 Kling「品质换性价比」形成对比。GitHub Copilot 接入 Gemini 3.5 Flash 也意味着代码 Agent 领域多了一个强玩家。",
            conduction: "传导到你的游戏美术生产：① 美术生产 Agent 后端又多一个可行选择——Gemini 3.5 Flash 做「长上下文需求解析」+ Claude Opus 4.7 做「关键决策」，优化「长篇设计文档→结构化美术 prompt」的速度和准确度；② Antigravity 2.0 SDK 支持自定义 Agent——如果团队有 Go 开发能力，评估 Go 版 vs Python LangGraph 的维护成本；③ 本周建议：用 Gemini 3.5 Flash 免费 AI Studio 试跑「整份游戏策划案→美术需求拆解」，看 1M token 是否真能替代人工拆解。"
          }
        ]
      }
    },
    actions: [
      "立刻测试 Kling 4 60 秒 4K 原生对白：拿一段游戏角色过场动画需求的 prompt 跑一次完整 60 秒，对比 Kling 3.0「多段拼接」模式——记录质量、可改率、时间成本，判断「AI 视频能否直接做宣传片」。Kling 4 免费 tier 每天约 66 credits，足够跑 3~5 次测试。",
      "拉 SynCity 3000 论文 + 对比 AlayaWorld 做 30 分钟评估：两条「世界生成」路线互补空间是什么？如果下一个立项需要开放世界场景验证，这两条能不能把 4~6 周灰盒搭建压到 1 周？",
      "在 ComfyUI 上试跑 Stability SPAR3D 单图转 3D：用一张道具概念图/参考照片，看秒级生成的 3D 能否直接导入 Blender/UE 做占位——如果可以，拍照→建模→贴图的传统道具入库流程就被砍掉大半。",
      "把本周视频生成默认工具从「Kling 3.0 探索」升级到「Kling 4 / Veo 4 双轨」：批量迭代走 Kling（$0.03/秒、60 秒长），关键镜头走 Veo 4（$0.10/秒、Camera Motion 精确控镜）。写一份对比记录，量化双轨 vs 单轨的成本/质量差异，固化成 SOP。"
    ],
    actionPaths: [
      {
        title: "Kling 4 60 秒 4K 原生对白测试",
        summary: "用一段游戏角色过场动画 prompt 跑完整 60 秒，对比 Kling 3.0 多段拼接模式，记录质量/成本/可改率。",
        deploy: [
          "环境：Kling 4 web 界面（kling.kuaishou.com）或 API，免费 tier 每天约 66 credits。",
          "输入：准备一段游戏角色过场动画需求——包含角色名称、场景描述、对白脚本、情绪弧线、相机运镜要求。",
          "对比基准：同需求用 Kling 3.0 分 6 段生成（每段 10 秒），记录拼接人工时间。"
        ],
        prompt: "你是一个游戏过场动画导演 + AI 视频评估专家。请帮我完成一个「Kling 4 vs Kling 3.0 过场动画生成对比测试」。\n\n【测试目标】\n验证 Kling 4 的 60 秒 4K + 多镜头 + 原生对白能否直接产出可用的游戏角色过场动画。\n\n【测试需求】\n角色：一个仙侠女性角色（灵汐），情绪弧线：平静→震惊→决心\n场景：古风悬崖，夕阳\n对白：「这不可能……」「原来你一直在骗我。」「但我不想再逃了。」\n相机：开场远景→推近特写→环绕展示决心姿态\n风格：参考《原神》过场动画风格，电影级光影\n\n【执行】\n1. 用 Kling 4：单次 prompt 包含以上所有信息，生成 60 秒 4K 视频，记录：\n   - 生成耗时、消耗 credits、实际扣费\n   - 角色一致性（脸部/服装在 60 秒内是否稳定）\n   - 对白与口型匹配度\n   - 相机运镜是否按描述执行\n   - 是否需要 re-roll，re-roll 次数\n2. 用 Kling 3.0：分 6 段生成（每段约 10 秒），记录：\n   - 6 段总耗时、总 credits\n   - 拼接人工时间\n   - 段间一致性\n3. 输出对比表：Kling 4 vs Kling 3.0 在「质量/时间/成本/可改率」四个维度的量化对比\n4. 结论：Kling 4 是否达到「可直接做手游/独立游戏过场」的水平？差距在哪？"
      },
      {
        title: "SynCity 3000 + AlayaWorld 对比评估",
        summary: "读 SynCity 3000 论文 30 分钟，对比 AlayaWorld，评估「AI 世界生成」两条路线的互补空间和降本潜力。",
        deploy: [
          "资料：SynCity 3000 arXiv 2607.05392 + 科技行者中文报道；AlayaWorld arXiv 2607.06291 + GitHub/ComfyUI-Wiki。",
          "输出：一页评估报告，包含两条路线能力清单、互补矩阵、落地场景、降本估算。"
        ],
        prompt: "你是一个技术美术 + 世界生成研究员。请帮我完成「SynCity 3000 vs AlayaWorld 互补评估」。\n\n【背景】\n- AlayaWorld（盛大 Alaya Lab，arXiv 2607.06291，Apache-2.0）：自回归 DiT 世界模型，实时交互、块级 prompt 切换、3D cache。做的是「可玩可交互的实时世界」。\n- SynCity 3000（牛津 VGG，arXiv 2607.05392）：先画全景鸟瞰草图、再立体雕刻，一次连贯成形无拼缝。做的是「静态完整 3D 城市/场景」。\n\n【任务】\n1. 阅读两篇论文/相关报道，列出每条路线的核心能力清单。\n2. 画一个互补矩阵：哪些场景用 SynCity 3000？哪些用 AlayaWorld？哪些需要两者串联？\n3. 以「开放世界 MMORPG 立项阶段场景验证」为例，估算：\n   - 传统流程人天：概念原画→灰盒搭建→策划可跑验证\n   - SynCity 3000 出完整城市布局的人天\n   - AlayaWorld 注入可玩性的人天\n   - 总节省人天和风险点\n4. 结论：是否值得在下一个立项中投入 1 周做 POC？最大风险是什么？"
      },
      {
        title: "ComfyUI 试跑 Stability SPAR3D 单图转 3D",
        summary: "用道具概念图/参考照片测试 SPAR3D 单图转 3D，评估能否替代传统道具入库流程。",
        deploy: [
          "环境：ComfyUI + SPAR3D 节点（如有）或 Stability AI API/本地权重。",
          "输入：准备 3~5 张道具概念图/产品参考照片（武器、家具、装饰物）。",
          "输出：GLB/FBX 3D 模型，导入 Blender/UE 检查可用性。"
        ],
        prompt: "你是一个 3D 游戏美术 + AI 工具评估专家。请帮我测试「Stability SPAR3D 单图转 3D」在游戏道具入库流程中的可用性。\n\n【目标】\n验证 SPAR3D 能否替代「拍照→人工建模→贴图→多角度验证」的传统道具入库流程。\n\n【测试道具】（请补全 5 个具体道具）\n1. 一把中世纪长剑（参考图：正面平拍）\n2. 一个木制宝箱（参考图：45° 角）\n3. 一盏哥特吊灯（参考图：正面）\n4. …\n5. …\n\n【对每个道具记录】\n- 生成耗时（秒）\n- 输出格式（GLB/FBX/OBJ）\n- 面数、贴图分辨率\n- 背面/遮挡区域的还原度\n- 是否可直接导入 UE/Unity 做占位\n- 如果需要人工精修，预计时间（分钟）\n\n【对比基准】\n- 传统流程：拍照→Blender 建模→贴图→导出，预估人工时间\n- SPAR3D 流程：拍照→SPAR3D→导入引擎，实测总时间\n\n【结论】\n- 哪些道具类型 SPAR3D 可直接替代人工？哪些仍需建模师？\n- 整体入库流程时间节省百分比\n- 是否值得把 SPAR3D 纳入团队日常道具入库 SOP"
      },
      {
        title: "Kling 4 / Veo 4 双轨 SOP 建立",
        summary: "把团队视频生成工具从 Kling 3.0 升级到 Kling 4/Veo 4 双轨，量化成本/质量差异。",
        deploy: [
          "工具：Kling 4（免费 tier 或 $10/月 Standard）+ Veo 4（需 Google AI Pro $19.99/月 或 Ultra $249.99/月）。",
          "策略：批量迭代走 Kling（$0.03/秒），关键镜头走 Veo 4（$0.10/秒，Camera Motion 精确）。",
          "输出：对比记录 + 标准操作流程文档。"
        ],
        prompt: "你是一个游戏美术生产管线优化专家。请帮我建立「Kling 4 / Veo 4 双轨视频生成 SOP」。\n\n【背景】\n团队之前用 Kling 3.0 做视频探索。现在 Kling 4（60s/4K/$0.03/s）和 Veo 4（20s/4K/$0.10/s，Camera Motion）可用，需要从单轨升级到双轨。\n\n【SOP 内容】\n1. 路由规则：\n   - 哪些场景走 Kling 4？（批量迭代、快速原型、对白多的片段、需要 60 秒长镜头的）\n   - 哪些场景走 Veo 4？（关键镜头、需要精确 Camera Motion 的、品牌/品宣级质量的）\n   - 哪些场景两者都跑然后选优？\n\n2. 成本对比表：\n   - 不同长度/质量档位下 Kling 4 vs Veo 4 的单条成本\n   - 预估月消耗（按团队当前视频需求量）\n   - 对比 Kling 3.0 时代的月消耗，降本幅度\n\n3. 质量标准：\n   - 角色一致性（脸/服装在多镜头间）\n   - 对白与口型匹配度\n   - 可改率（re-roll 比例）\n   - 后期修整时间\n\n4. 工作流集成：\n   - 需求提交模板（角色/场景/对白/运镜/风格/时长）\n   - 生成→验收→精修的步骤和负责人\n   - 最终交付格式和存档规范\n\n【交付】\n一份可直接贴进团队 Wiki/腾讯文档的 Markdown SOP。包含路由决策树、成本对比表、需求模板、检查清单。版本 v1.0-2026-07-16。"
      }
    ]
  },
  "2026-07-17": {
    meta: {
      date: "2026-07-17",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "即梦 Seedance 2.5 全球首发：AI 视频首次兼容 Maya/Blender 3D 白模工作流——3D 管空间、AI 管画面，游戏 CG 和宣传片成本直接砍一个量级。",
      "腾讯光子 Light AI 首次对外：4 年内部打磨的一站式游戏资产 PaaS 平台，从「单点生成玩具」到「工业化流水线」，资产周期从周级压缩到天级。",
      "Karpathy 红杉峰会宣布「Vibe Coding 已过时」，提出 Agentic Engineering——AI 编码从个人周末脚本转向多 Agent 企业级协作，美术生产 Agent 也该从「单点脚本」升级到「多 Agent 编排」。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "即梦 Seedance 2.5：全球首款兼容 Maya/Blender 3D 白模的 AI 视频工具",
            summary: "支持 Maya/Blender 原生插件，3D 白模负责空间骨架，AI 负责画面表现力。原生 30 秒视频，支持最多 50 个全模态参考素材。",
            links: [
              { label: "即刻造梦官网", url: "https://jimeng.jianying.com/" }
            ],
            value: "3D 白模 + AI 渲染的范式让游戏 CG/宣传片成本砍一个量级。",
            impact: "AI 视频从「谁的画面更惊艳」转向「谁更能进入真实生产流程」。"
          },
          {
            idx: "02",
            title: "腾讯光子 Light AI：4 年内部打磨的一站式游戏资产 PaaS 平台",
            summary: "把游戏资产生产全链路整合进一个平台，从概念到 Game Ready 资产，周期从周级压缩到天级。",
            links: [
              { label: "腾讯新闻", url: "https://new.qq.com/rain/a/20260610A08JHW00" }
            ],
            value: "国内大厂首次披露跑通全链路的 AI 资产工业化管线。",
            impact: "游戏专精 AI 平台对通用 AI 工具形成差异化竞争。"
          },
          {
            idx: "03",
            title: "FlashDiff（arXiv 2607.12121）：扩散模型推理降本 30~97%",
            summary: "自适应区域执行+在线调度，端到端延迟降 30~97%，吞吐量提升 1.2~2.2x。",
            links: [
              { label: "arXiv 2607.12121", url: "https://arxiv.org/abs/2607.12121" }
            ],
            value: "自建 ComfyUI 推理服务不升级硬件就能提升产能。",
            impact: "推理成本是 AI 美术生产「电费级」降本的核心杠杆。"
          },
          {
            idx: "04",
            title: "Pika 2.5 角色一致性引擎 + 导演套件",
            summary: "角色一致性引擎在生成层面保持跨场景一致，导演套件支持全流程自然语言指挥。",
            links: [
              { label: "Pika 官网", url: "https://pika.art" }
            ],
            value: "角色一致性是 AI 视频做系列化内容的最大瓶颈，Pika 2.5 在生成层面解决。",
            impact: "AI 视频从「单镜头生成」到「多镜头叙事」的关键跨越。"
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
            title: "Fable 5 解禁 + Karpathy fablemaxxing",
            summary: "Fable 5 全球解禁，1600 行代码生成可玩 3D 世界。Karpathy 发明新词 fablemaxxing。",
            links: [
              { label: "36氪", url: "https://www.36kr.com/p/3883967600931072" }
            ],
            value: "自然语言→完整 3D 场景代码的边际成本正在暴跌。",
            impact: "AI 3D 世界生成从极客玩具变成技术拐点。",
            conduction: "立项阶段快速概念验证——用自然语言描述关卡，AI 生成可交互 Demo。"
          },
          {
            idx: "02",
            title: "Karpathy 红杉峰会：Vibe Coding 已过时，提出 Agentic Engineering",
            summary: "多 AI 分工协作，人类做架构和 review。超过 3 万行项目即失控。",
            links: [
              { label: "腾讯新闻", url: "https://new.qq.com/rain/a/20260714A09PWX00" }
            ],
            value: "美术生产应从 Vibe Coding 升级到 Agentic Engineering——需求解析→生图→评估→迭代多 Agent 协作。",
            impact: "AI 从酷炫 Demo 进入企业级工程的拐点。",
            conduction: "把 AI 美术流程从单点脚本升级到多 Agent 管线。"
          }
        ]
      }
    }
  },
  "2026-07-18": {
    meta: {
      date: "2026-07-18",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "极逸SOON 一键生成原生 Spine 4.2 骨骼动画——36+ 商用动作、7 大游戏风格全覆盖，你每天手绑的 Spine 角色可能直接交给 AI 生。",
      "Runway Dev 一站式 API 整合 Gen-4.5 + Seedance + GPT Image 2 + ElevenLabs——游戏买量视频/宣传片从「拼十几个 API」变成「一个 API 调一次」。",
      "Karpathy 发布 AgentHub，48 小时 9.5k Star——Agentic Engineering 有了真工具，游戏美术 Agent 管线的编排平台来了。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "极逸SOON — 原生 Spine 4.2 骨骼动画一键生成",
            summary: "国内首个 AI 游戏创作平台，文字/图片一键生成带完整骨骼绑定的原生 Spine 4.2.43 格式游戏角色，36+ 标准商用动作，支持国风/二次元/像素等 7 大风格。",
            links: [
              { label: "极逸SOON 官网", url: "https://soon.ai/" }
            ],
            value: "Spine 骨骼绑定和蒙皮是 2D 动画最耗人天的环节，极逸SOON 声称一键生成 36+ 动作原生 Spine 文件，单角色动画从 1-2 周压缩到几分钟。本周注册实测。",
            impact: "Spine 原生格式输出是 AI 游戏美术从「出图」到「出资产」的关键一步。"
          },
          {
            idx: "02",
            title: "Runway Dev — 一站式企业级 AI 媒体 API",
            summary: "7/8 发布，单一 API 整合 Gen-4.5/Aleph 2.0/Act-Two/Seedance/GPT Image 2/ElevenLabs。Recipes 打包常见工作流，Workflows 支持多模型串联。已服务 Adobe/ElevenLabs/Shutterstock。",
            links: [
              { label: "Runway Dev 官方公告", url: "https://runwayml.com/news/introducing-runway-dev" }
            ],
            value: "游戏买量视频/角色 PV 从「拼十几个 API」变成「一个 API 调一次」，一条 Workflow 跑完整管线。",
            impact: "AI 媒体从「单模型 API」到「管线编排平台」的拐点。"
          },
          {
            idx: "03",
            title: "PixVerse Game / 爱诗科技 — 实时视频游戏引擎",
            summary: "7/15 爱诗 C 轮融资 29.8 亿元（阿里领投），PixVerse Game 首个实时视频游戏引擎。叠纸前 CTO 在生态内自研 AI 游戏引擎。",
            links: [
              { label: "新智元报道", url: "https://www.163.com/dy/article/L1SKJB850511ABV6.html" }
            ],
            value: "世界模型从「驱动机器人」变成「驱动游戏」，乙女/叙事类游戏制作周期砍 90%。",
            impact: "PixVerse Game 差异化在「视频原生」——不需要 3D 建模管线就能生成可交互世界。"
          },
          {
            idx: "04",
            title: "PixGS (arXiv 2607.01803) — 1 秒单卡 3DGS 生成",
            summary: "单阶段像素空间扩散直接生成 3DGS，跳过潜空间压缩，单张 A100 上 1 秒推理，质量超越 SOTA。",
            links: [
              { label: "arXiv 2607.01803", url: "https://arxiv.org/abs/2607.01803" }
            ],
            value: "1 秒推理让「实时 3D 占位」成为可能，游戏场景搭建从「逐个等待」变「批量并行」。",
            impact: "重新定义 AI 3D 生成速度基准。"
          },
          {
            idx: "05",
            title: "游戏行业 AI 渗透率真实数据 — Steam 31% 含 AI，三七互娱 2D 美术 AI 占 80%+",
            summary: "Steam 2023.7-2026.7 上架 53,600 款游戏，31% 含 AI 内容。Unity 报告 62% 开发者用 AI 辅助编码。三七互娱 AI 2D 美术占比超 80%。",
            links: [
              { label: "Steam AI 数据 (7/17)", url: "https://new.qq.com/rain/a/20260717A06L6T00" },
              { label: "WAIC AI+游戏报告", url: "https://dy.163.com/article/L1VPQN1C0514A42S.html" }
            ],
            value: "三七互娱 80% AI 占比 = 行业标杆。如果你团队 2D 美术 AI 占比低于 50%，管线落后于行业均值。",
            impact: "美术团队核心竞争力从「能画」变成「能用 AI 高效产出 + 精修关键细节」。"
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
            title: "Karpathy AgentHub — Agent 自进化协作平台，48h 9.5k Star",
            summary: "7/17 Karpathy 发布 autoresearch 和 AgentHub，Agentic Engineering 有了真工具。program.md 定义 Agent 角色和协作规则。",
            links: [
              { label: "腾讯云报道", url: "https://cloud.tencent.com/developer/article/2711304" }
            ],
            value: "program.md 模式可用于美术 Agent 管线编排——不再写 Python 脚本，写 Markdown 定义角色协作规则。",
            impact: "AgentHub 把 Agentic Engineering 从概念变成可运行工具。",
            conduction: "立即：用 program.md 模式设计美术 Agent 管线。1-2 周：搭建最小可行管线。1-3 月：对比手动 vs Agent 编排的 ROI。"
          },
          {
            idx: "02",
            title: "Meta→Anthropic 百亿美元算力租赁 — AI 算力成可交易大宗商品",
            summary: "7/17 Meta 与 Anthropic 谈判两年期算力租赁最高 100 亿美元。Anthropic 同时与 SpaceX/Google/Amazon 签约，算力仍严重稀缺。",
            links: [
              { label: "新浪财经报道", url: "https://cj.sina.com.cn/article/norm_detail?url=https://finance.sina.com.cn/wm/2026-07-18/doc-iniierwe7182660.shtml" }
            ],
            value: "算力稀缺 → 推理成本短期不会暴跌到零 → 自建 ComfyUI/SD 推理服务仍是降本优选路径。",
            impact: "算力从「内部消耗」走向「外部变现」，AI 基础设施正在金融化。",
            conduction: "算力稀缺意味着私有部署不受 API 定价波动影响，GPU 算力将有更透明市场价，团队做产能规划更精确。"
          }
        ]
      }
    },
    actions: [
      "注册极逸SOON，用一张项目角色参考图跑一次完整 Spine 4.2 动画生成，对比手绑质量。",
      "申请 Runway Dev API Key，跑一条「策划案→关键帧→视频→配音」完整买量素材管线。",
      "用 AgentHub/autoresearch 思路搭建美术 Agent 管线：写 program.md 定义角色协作规则，在 Claude 上试跑闭环。",
      "评估团队 2D 美术 AI 占比 vs 行业均值（80%）：低于 50% 就制定追赶计划。"
    ]
  },
  "2026-07-19": {
    meta: {
      date: "2026-07-19",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "OpenAI CEO 奥特曼公开喊出「降价 75%」——你的 AI 美术管线的推理成本正在从「大额支出」变成「几乎为零的变动成本」。",
      "商汤在 WAIC 发布 SenseNova U1 Pro：原生 8K + Agentic 闭环修图 + 「交付级」设计美感，AI 生图从「抽卡」进入「可交付」。",
      "Google Vids 上线数字分身：上传自拍 + 语音就能出镜，买量视频制作进入「零演员」时代。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "商汤 SenseNova U1 Pro：原生 8K「交付级」图像创作，AI 生图从「抽卡」进入「可交付」",
            summary: "7/18 在 2026 WAIC 上，商汤发布旗舰多模态模型 SenseNova U1 Pro。核心差异化：原生 8K 超清输出、「交付级」设计美感、长程 Agentic Generation Loop——围绕复杂目标进行数十轮理解→生成→检查→修正闭环，整体风格与局部文本同步精准可控。",
            links: [
              { label: "新智元：商汤发布 8K 多模态创作模型 U1 Pro", url: "https://view.inews.qq.com/a/20260718A0958R00" },
              { label: "海报新闻：从「内容生成」走向「系统级交付」", url: "https://hb.dzwww.com/p/paCm9xewPGb.html" },
              { label: "网易 WAIC 速报", url: "https://www.163.com/game/article/DK3UFFO400318PFH_mobile.html" }
            ],
            value: "「交付级」定位直接解决 AI 生图最大痛点——「看着还行但没法直接交付」。U1 Pro 的 Agentic Loop 让你描述最终需求而非写 prompt，AI 自动理解、拆解、生成、检查、修正直到产出可交付终稿；原生 8K 对印刷级宣发物料是刚需；中文排版零错字对出海/本地化物料是核心能力。本周用项目中最难搞的活动弹窗需求跑一轮「文字描述→U1 Pro 生成→人工判断可交付率」，对比 GPT Image 2 / Midjourney。",
            impact: "U1 Pro 的 Agentic Generation Loop 代表生图交互范式第三次跃迁：从「写 prompt 抽卡」到「自然语言交互+持续修改」再到「描述目标→AI 闭环修正→交付」。一旦「交付级」成为行业标配，游戏美术中批量生产型图像需求（活动弹窗、icon 变体、loading 图、公告图）将不再需要美术师逐个执行——美术师只需要定义标准，AI 自己交付。美术岗价值从「能画」变成「能定义标准 + 能判断 AI 输出是否达标」。"
          },
          {
            idx: "02",
            title: "OpenAI 降价 75% + DeepSeek 白菜价 + Anthropic Sonnet 5 打六折：AI 推理成本三线暴跌",
            summary: "7/17-18 三天内 AI 推理定价三线暴跌：OpenAI 奥特曼公开表态愿再降价 75%；DeepSeek V4-Pro 输出仅 0.87 美元/百万 Token（OpenAI 旗舰的 1/166）；Anthropic Claude Sonnet 5 性能直逼 Opus 4.8，发布期价格 4 折且免费用户即具备 Agent 能力。",
            links: [
              { label: "网易：旗舰模型仅对手半价，奥特曼喊出再降 75%", url: "https://www.163.com/dy/article/L23B8M5E05561FZK.html" },
              { label: "腾讯新闻全球要闻：OpenAI 降价 + DeepSeek 逼宫", url: "https://new.qq.com/rain/a/20260718A02D2S00" },
              { label: "今日头条：中国模型调用量已超美国", url: "https://www.toutiao.com/a7663285646747845135" }
            ],
            value: "DeepSeek V4-Pro 输出 0.87 美元/百万 Token = 100 万 Token 约 6 元人民币，让 AI 做一次完整美术需求分析+prompt 拆解的文本成本几乎为零；Sonnet 5 免费用户即可用 Agent 能力，搭建美术生成 Agent 的模型成本降至近零。本周对比 DeepSeek V4-Pro / Claude Sonnet 5 / GPT-5.6 Sol 在「美术需求→prompt 拆解」场景下的速度/质量/成本，选最优方案搭建文本 Agent 层。",
            impact: "AI 推理定价权正从硅谷转移到中国，「用最贵模型做每一件事」的策略失效，「分层调度」才是正确成本控制手段——文本 Agent 走 DeepSeek（最便宜）、生图走 FLUX/GPT Image 2（质量优先）、代码生成走 Claude（生态最完善）。微软已在评估用 DeepSeek 替代 OpenAI——连微软都做的降本决策，你的团队也该做。"
          },
          {
            idx: "03",
            title: "Google Vids + Gemini Omni 数字分身：上传自拍+语音就能出镜游戏宣传片",
            summary: "7/18 Google Vids 上线个人头像功能：上传一张自拍照和一段语音录音，创建外貌和声音都像你的定制数字分身；并将 Gemini Omni 多模态模型引入 Vids，支持提示词+参考照片融合生成个性化 AI 视频。所有 AI 内容包含 SynthID 数字水印。",
            links: [
              { label: "网易：Google 推出 AI 视频数字分身功能", url: "https://www.163.com/dy/article/L23IOEHH05561FZO.html" }
            ],
            value: "「零演员」游戏宣传片：上传角色立绘/策划自拍 + 一段配音 + 场景图，Gemini Omni 自己融合生成视频。配合 Kling 4 60 秒 4K 多镜头，可以做「数字分身出镜介绍游戏 + AI 生成游戏内画面」的混合宣传片，成本从数千美元压到 API 调用费。Google Workspace 原生集成也降低了企业合规审批门槛。",
            impact: "Google Vids 进入 AI 视频赛道意味着「AI 视频 + 办公套件」整合已开始。买量视频/社交媒体推广视频从「外包视频公司」变成「策划自己用 Google Vids 就能做」，大幅缩短「游戏内容产出→推广内容制作」链路。注意：SynthID 水印是合规加分项，但完全无法冒充真人，在需要真实感的推广场景可能不适用。"
          },
          {
            idx: "04",
            title: "腾讯混元3D 平台企业级大版本升级：局部重生成 + FBX/USD 原生导出 + 多视图一致 Transformer",
            summary: "7 月腾讯混元3D 平台完成大版本升级，正式向企业用户开放。新一代多视图一致 Transformer 让 120 度视角旋转时纹理变形率降低约 70%；支持部分重生成，框选局部区域重新生成而不影响其他部分；新增 glTF 2.0 / FBX / USD 原生支持，优化拓扑将面数从 5 万降到 2 万以内。实测 45 秒生成拓扑规整的 3D 手表模型。",
            links: [
              { label: "广州文趣：混元3D 大版本升级深度实测", url: "https://www.wechild.cn/news-detail-567.html" },
              { label: "混元3D 官网", url: "https://3d.hunyuan.tencent.com/" }
            ],
            value: "部分重生成是 3D 资产生成从 Demo 到生产的关键一步；FBX 原生导出 + 面数优化到 2 万面以内意味着模型可以直接拖进 Unity/UE；多视图一致性提升 70% 让角色/道具 360 度展示质量显著改善。本周用项目常用道具跑一轮「中文 prompt→生成→局部修→FBX 导出→进引擎」，量化单件耗时并对比人工建模。",
            impact: "混元3D 这次升级让 3D 生成工具从「生成后还需要大量后期修」进化到「生成后可直接进引擎」。虽然 hero 资产仍需手动精修，但中低模道具/建筑/环境资产的 AI 替代已经从「可能」变成「可行」。对美术外包市场：中低模道具/场景外包首当其冲。"
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
            title: "AI 权力格局重构：Anthropic 企业份额首超 OpenAI + DeepSeek 成本革命逼 OpenAI 降价 75%",
            summary: "7/17-18 三组数据揭示 AI 产业权力格局结构性洗牌：Anthropic 2026 Q3 企业市场份额 34.4% 首次超越 OpenAI 32.3%；奥特曼公开承认被 DeepSeek 逼到墙角，中国模型调用量已超美国，DeepSeek V4-Pro 输出 0.87 美元/百万 Token（OpenAI 旗舰的 1/166）；Anthropic 首次披露 GAAP 利润预计 Q3 超 10 亿美元。",
            links: [
              { label: "腾讯新闻：全球要闻速览（含 Anthropic 份额 + OpenAI 降价 + J-space）", url: "https://new.qq.com/rain/a/20260718A02D2S00" },
              { label: "网易：DeepSeek 逼出的价格战", url: "https://www.163.com/dy/article/L23B8M5E05561FZK.html" }
            ],
            value: "Anthropic 企业份额超过 OpenAI + Karpathy 效应 = Claude 生态正在成为企业级 AI 部署首选；J-space 工程化让 AI 工具的可控性/可解释性变成可量化技术指标，法务/合规最怕的「不知道 AI 为什么这么输出」有了解决方案，直接降低团队引入 AI 工具的审批门槛。",
            impact: "AI 产业权力结构从「OpenAI 一家独大」拐入「中美双中心 + 开源挑战闭源」的三极格局。对游戏美术：工具选型不再被单一厂商绑架——多供应商备份（GPT Image 2 / FLUX / Midjourney + DeepSeek / Sonnet 5 / Kimi K3）成为标准策略；中国模型在性价比维度的优势会加速 AI 美术生产内化。",
            conduction: "传导到你的游戏美术生产：① 立即：做一次「模型成本重算」——统计当前美术管线中所有文本/生图/视频/3D API 的月消耗，用今天的价格重新计算最优组合，更新团队 AI 工具成本表；② 1-2 周：搭建多供应商文本 Agent 层——需求解析走 DeepSeek（最便宜）、复杂推理走 Sonnet 5（免费即可用）、代码生成走 Kimi K3（自托管零成本）；③ 1-3 个月：将成本重算自动化——写一个脚本每月自动拉取主流 API 价格，对比当前用量，输出最优路由建议。"
          },
          {
            idx: "02",
            title: "Kimi K3 2.8 万亿参数开源：全球最大开源模型登顶代码榜，自托管成本降至零",
            summary: "7/18 月之暗面（Moonshot AI）在 WAIC 上发布 Kimi K3——全球最大开源大模型，MoE 架构 2.8 万亿参数，支持 100 万 Token 上下文与原生视觉理解。在 CodeArena 代码能力排行榜登顶，单任务成本仅 0.94 美元。内部对标 Anthropic Claude Opus 4.8，性能接近但完全开源可自托管。",
            links: [
              { label: "腾讯新闻：AI 领域新闻动态（含 Kimi K3）", url: "https://new.qq.com/rain/a/20260719A02URI00" },
              { label: "腾讯新闻：全球要闻·月之暗面发布 Kimi K3", url: "https://new.qq.com/rain/a/20260718A02D2S00" }
            ],
            value: "2.8T 参数 + CodeArena 登顶 + 自托管 = 美术管线中所有代码生成/自动化脚本编写（ComfyUI 节点开发、批量处理脚本、自动化测试）可以实现零 API 成本；100 万 Token 上下文意味着 Kimi K3 可以一口吃下整份游戏设计文档 + 所有美术规范 + 历史 prompt 模板，做一次完整的美术需求拆解。",
            impact: "Kimi K3 发布标志着「中国开源模型」在全球 AI 版图中获得实质性话语权。开源大模型自托管将从「少数技术团队选项」变成「所有有 GPU 团队的标准做法」。注意：2.8T MoE 自托管需要相当可观的 GPU 资源，没有自建 GPU 集群的团队，DeepSeek V4-Pro API 仍是更务实方案。",
            conduction: "传导到你的游戏美术生产：① 短期：Kimi K3 自托管部署门槛高，建议先用 Kimi API（如有）或 DeepSeek V4-Pro 跑文本 Agent 层，对比质量/成本后决定是否自建；② 中期：如果团队有 GPU 空闲时段（如晚上），可以部署量化版 Kimi K3 专门跑「夜间批量需求拆解」——下班前提交需求清单，AI 通宵拆解为结构化 prompt 队列；③ 本周行动：对比 Kimi K3 / DeepSeek V4-Pro / Sonnet 5 在「游戏美术需求→结构化 prompt」场景上的质量/速度/成本，形成团队模型路由决策矩阵。"
          }
        ]
      }
    },
    actions: [
      "注册商汤 SenseNova U1 Pro，用最难搞的活动弹窗需求做「交付级」对比测试——输入完整的中文设计需求（而非 prompt），对比 U1 Pro / GPT Image 2 / Midjourney V8.2 三者的「可直接交付率」和「人工修改时间」，量化「从收到需求到交付终稿」的总时长差异。",
      "做一次 AI 工具链成本重算——统计当前美术管线中所有 API 的月消耗，基于今天的新定价（GPT-5.6 愿降 75% / DeepSeek V4-Pro 0.87 美元 / Sonnet 5 六折 / Kimi K3 自托管）重新计算最优组合，形成「2026-07 版本团队 AI 工具链成本最优方案」。",
      "用 Google Vids 测试「零演员游戏宣传片」可行性——上传角色立绘 + 策划配音 + 游戏场景截图，生成一条 30 秒推广视频小样，评估观看体验、生成质量和与人工拍摄的差距。"
    ]
  },
  "2026-07-20": {
    meta: {
      date: "2026-07-20",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "字节 Seedream 5.0 Pro 上线像素级「指哪打哪」编辑：AI 生图终于能只改局部而不破坏整体风格，活动弹窗/角色立绘的修改成本会大幅下降。",
      "MeshFlow 在 SIGGRAPH 2026 把 3D 网格生成速度提到 1 秒内、提升 18 倍：游戏低模/占位资产从「等几分钟」变成「实时批量出」。",
      "DeepSeek V4 满血版 + Qwen3.8 2.4T 开源 + Kimi K3 三箭齐发：文本/代码 Agent 的推理成本继续探底，是时候把「需求拆解→代码生成」的模型路由重新算一遍。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "字节 Seedream 5.0 Pro 像素级编辑：AI 生图进入「指哪打哪」局部修改阶段",
            summary: "7 月 19 日字节更新 Seedream 5.0 Pro，主打像素级、指哪打哪的 AI 生图编辑：可单独修改面部表情、删除背景元素而不破坏整体风格，解决 AI 生图「修改即跑偏」的痛点。",
            links: [
              { label: "腾讯新闻：花钱测了一下豆包最新大模型", url: "http://view.inews.qq.com/a/20260719A08SBY00" },
              { label: "AI 大模型动态（7月20日）", url: "https://new.qq.com/rain/a/20260720A0241100?refer=cp_1009" }
            ],
            value: "游戏美术里 80% 的修图场景是「整体 OK，但某个细节要改」——角色表情不对、弹窗背景多一个元素、UI 角落要补文字。传统做法是重抽或进 Photoshop 修；Seedream 的局部编辑能直接生成修改后的版本，减少重抽次数和后期修图时间。建议拿一张正在迭代的角色立绘或活动弹窗，圈选要改的区域，用自然语言描述修改，对比 Photoshop 修图耗时。",
            impact: "这标志着 AI 生图从「生成正确」进入「编辑可控」阶段。对美术岗：修图/改需求的时间会缩短，价值继续从「执行层」向「定义标准 + 验收 AI 输出」上移；对纯执行型外包（修图、改图、批量变体）冲击最大。"
          },
          {
            idx: "02",
            title: "MeshFlow（SIGGRAPH 2026）：1 秒生成高质量 3D 网格，速度提升 18 倍",
            summary: "香港城大/斯坦福/康奈尔/UT Austin 在 SIGGRAPH 2026 提出 MeshFlow：用「等变最优传输流匹配」（Equivariant Optimal-Transport Flow Matching）直接生成三角汤，再经后处理在 0.9 秒内得到完整流形网格，比自回归方法快约 18 倍；在 ShapeNet 椅子、台灯等类别上质量与最先进方法相当。",
            links: [
              { label: "网易：让 AI 在一秒内雕刻出精美 3D 网格模型", url: "https://c.m.163.com/news/a/L0ABENFD0511DTVV.html" },
              { label: "论文 DOI 10.1145/3799902.3811195", url: "https://doi.org/10.1145/3799902.3811195" }
            ],
            value: "3D 占位资产/低模道具的生成速度从「十几秒到几分钟」降到 1 秒以内，适合实时概念验证和批量生成。当前支持最多约 800 面，正好对应游戏低模/灰盒阶段，可替代手拉 box 的占位流程。建议关注代码开源后用 ShapeNet 常见道具（椅子、桌子、灯）做测试，评估直接导入 Blender/UE 的可用性。",
            impact: "3D 生成速度基准被重新定义。当生成速度接近实时，「AI 3D 草图」会成为策划和美术日常沟通的标配，3D 原画/关卡灰盒的迭代周期从小时级压缩到秒级。但它目前面数上限 800，高模/工业级资产仍需要传统流程。"
          },
          {
            idx: "03",
            title: "2026 年 7 月 AI 视频工具格局：Veo 3.1 / Kling 3.0 / Runway Gen-4.5 / Firefly 各有所长",
            summary: "7 月 19 日对比评测显示，AI 视频市场已分化为：Google Veo 3.1 综合最佳且原生音频同步；Kling 3.0 性价比最高、原生 4K/60fps；Runway Gen-4.5 控制力最强；Adobe Firefly 商业安全性最高。Sora 已停用，Veo 3 API 已关闭。",
            links: [
              { label: "网易：2026 年 AI 视频生成工具大比拼", url: "https://www.163.com/dy/article/L25VTPVE05561FZM.html" },
              { label: "Provimedia：AI Video Generation 2026", url: "https://www.provimedia.de/en/blog/ai-video-tools-2026" }
            ],
            value: "游戏买量视频/宣传片/角色 PV 的选型不再「哪个最新用哪个」，而是按需求路由：要原生音频和电影感选 Veo 3.1；要低成本批量迭代选 Kling 3.0；要 Act-Two 动捕迁移/精细控制选 Runway；要严格商业授权/品牌安全选 Firefly。建议把团队现有视频需求按「质量/成本/控制/版权」四象限重新分配工具。",
            impact: "Sora 退出后，AI 视频市场从「模型竞争」进入「细分定位 + 价格战 + 生态整合」阶段。对游戏美术岗：需要建立「视频工具路由矩阵」而非迷信单一模型；同时 Firefly 的商业安全承诺对大厂法务审批是加分项，Kling 的低价适合快速迭代。"
          },
          {
            idx: "04",
            title: "StackSpend 7 月图像成本指南：同一张图可能差 60 倍，AI 美术管线该做成本路由了",
            summary: "StackSpend 7 月报告显示，2026 年 7 月图像生成 API 单价从 $0.003（SDXL）到 $0.20（高端模型高分辨率）不等，相差约 60 倍；模型已专业化：GPT Image 2 复杂 prompt 遵循、Midjourney V8 美学、FLUX.2 开源可控、Ideogram 文字、Recraft 设计系统。",
            links: [
              { label: "StackSpend：AI Image Generation Models (July 2026)", url: "https://www.stackspend.app/resources/blog/image-generation-models-july-2026" },
              { label: "AI Flash Report：Best AI Image Generators July 2026", url: "https://aiflashreport.com/ai-image-generators" }
            ],
            value: "按需求把生图任务分层。概念探索/批量变体：用 SDXL 或 FLUX Schnell（$0.003-$0.015/张）；中等质量 UI/宣发：用 Seedream 4.5 / Hunyuan Image 3.0（~$0.03-$0.04/张）；高要求/复杂 prompt：用 GPT Image 2 / Midjourney V8（$0.03-$0.20/张）。本周拉一张近 30 天团队各模型的调用量和单价，找出「用高价位模型做低质量任务」的浪费点。",
            impact: "图像 API 定价分层说明「一模型通吃」已不经济。美术团队如果不做模型路由，成本可能随调用量指数级膨胀。未来 6 个月，成本管理能力（调用追踪、异常监控、自动路由）会成为 AI 美术管线的核心竞争力之一。"
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
            title: "DeepSeek V4 满血版上线 + Qwen3.8 2.4T 开源：国产模型「三箭齐发」把文本/代码 Agent 成本再压一截",
            summary: "7 月 20 日 DeepSeek V4 正式版（Pro/Flash）发布，引入峰谷计费，性能接近 Claude Opus 4.8、代码追平 GPT-5.6 Sol，价格显著低于海外竞品；阿里 Qwen3.8（2.4T）预告开源并剑指 Fable 5；Kimi K3（2.8T）完整权重也即将开放。",
            links: [
              { label: "网易：DeepSeek V4 满血版即将上线", url: "https://dy.163.com/article/L28STN7B05568W0A.html" },
              { label: "腾讯新闻：千问/DeepSeek V4 动态", url: "http://view.inews.qq.com/a/20260719A08O2E00" },
              { label: "AI 大模型动态（7月20日）", url: "https://new.qq.com/rain/a/20260720A0241100?refer=cp_1009" }
            ],
            value: "文本 Agent（需求解析、prompt 拆解、代码生成）可以走国产开源/低价模型；DeepSeek V4 Flash 适合高频调用，Pro 处理复杂任务，Qwen3.8/Kimi K3 可自托管。本周用 DeepSeek V4 跑 10 条美术需求解析，对比 GPT-5.6 Sol/Claude Sonnet 5 的成本和质量。",
            impact: "国产模型不再是「跟随者」，而是在性能和成本上同时逼近甚至超越海外旗舰。这会加速「AI 美术 Agent 内化」——文本/代码层可以几乎零成本跑在国产模型上，团队的 API 支出结构会快速重构。",
            conduction: "传导到你的游戏美术生产：① 立即：把文本 Agent 的默认模型从 GPT/Claude 切换到 DeepSeek V4/Qwen3.8，测一轮需求解析质量；② 1 周内：建立简单路由——简单需求走 DeepSeek Flash，复杂需求走 Claude Sonnet 5，代码生成走 DeepSeek V4 Pro；③ 1 个月内：统计新路由下的月度 API 成本，对比旧方案。"
          },
          {
            idx: "02",
            title: "OpenAI 插件接入 Claude Code：多模型协同工作流成为 AI Coding 新常态",
            summary: "7 月 19 日，OpenAI 官方插件可装入 Anthropic 的 Claude Code，由 Claude 负责任务管理与审核、Codex 负责写代码，演化出 Fable 5 管、GPT-5.6-Sol 写、Fable 5 审的高度协同模式；Cursor 3.11 也已支持 Grok 4.5、Gemini 3.1 Pro 等多模型切换。",
            links: [
              { label: "今日头条：OpenAI 插件进 Claude Code 形成双模型工作流", url: "https://m.toutiao.com/item/7664266375325598243/" },
              { label: "AI 大模型动态（7月20日）", url: "https://new.qq.com/rain/a/20260720A0241100?refer=cp_1009" }
            ],
            value: "不要再用单一模型做整条 Agent 管线。未来美术 Agent 也可以拆成「管理/规划（Claude/Fable 5）+ 生成执行（Codex/GPT-5.6）+ 审核（Claude/Fable 5）」的多模型协同。这样可以在质量和成本之间取得平衡，并让每个模型干自己最擅长的事。",
            impact: "AI Coding 的竞争从「模型强弱」转向「工具链密度和多模型协同」。对美术 Agent 的启示：下一步不是换一个更强的模型，而是设计好角色分工和流程编排。",
            conduction: "传导到你的游戏美术生产：① 本周：把团队的美术 Agent 流程（需求解析 → 生图 → 评估）拆成三个角色，分别指定最适合的模型；② 用 Claude 做「需求理解 + 质量审核」、用 DeepSeek V4 做「prompt 工程/代码生成」、用 GPT Image 2/FLUX 做「图像执行」；③ 记录多模型协同 vs 单模型端到端在质量和成本上的差异。"
          },
          {
            idx: "03",
            title: "Hassabis 呼吁建立 FINRA 式前沿 AI 标准机构：安全审查从「临时政府干预」走向「制度化评估」",
            summary: "7 月 14 日，Google DeepMind CEO Demis Hassabis 发布《A Framework for Frontier AI》提案，建议参照金融业监管局（FINRA）建立美国主导的前沿 AI 标准机构：前沿实验室在模型发布前最多 30 天自愿提交审查，评估协议成熟后可能成为在美部署的强制门槛；覆盖所有前沿级模型，无论国别或开源/闭源。",
            links: [
              { label: "网易：谷歌 DeepMind CEO 呼吁建立独立的前沿 AI 监管标准机构", url: "https://www.163.com/dy/article/L1T3BVPI05118UGF.html" },
              { label: "Developers Digest：Demis Hassabis 计划详解", url: "https://www.developersdigest.tech/blog/demis-hassabis-frontier-ai-standards-body" }
            ],
            value: "企业引入 AI 工具最大的隐性成本是合规/安全审批。一个制度化、透明的前沿模型审查框架，会降低「AI 工具能不能用」的不确定性，让法务/安全团队有章可循。长期来看，通过审查的模型在企业内部的落地阻力更小。",
            impact: "AI 治理从「行业自律/政府临时审查」转向「制度化标准机构」。对使用前沿 AI 的团队，这意味着：模型发布节奏可能受审查窗口影响，但合规性会成为可量化的采购标准；未来选择工具时，「是否通过标准机构评估」可能成为企业白名单的硬指标。",
            conduction: "传导到你的游戏美术生产：① 短期：把 AI 工具供应商评估表加上「安全审查/合规认证」一栏；② 中期：优先选择已通过或承诺参与标准机构审查的模型/API，降低法务风险；③ 本周：梳理团队正在用的生图/视频/3D/文本 Agent 的授权与合规状态，为下半年可能的审计做准备。"
          }
        ]
      }
    },
    actions: [
      "测试 Seedream 5.0 Pro 像素级编辑：选一张正在迭代的活动弹窗或角色立绘，尝试只修改面部表情/删除背景元素，记录是否比传统重抽 + Photoshop 修图更快。",
      "跑 MeshFlow 论文/代码：如果代码已发布，用 5 个道具类概念图跑 1 秒 3D 网格生成，评估导入 Blender/UE 的可用性；若代码未发布，先标记并跟进。",
      "做图像生成成本路由审计：基于 StackSpend 7 月成本分层，把团队近 30 天的生图调用按「高质量/中质量/批量探索」分类，找出用错模型的浪费点，制定新路由方案。",
      "搭多模型美术 Agent 最小闭环：用 Claude 管需求与审核 + DeepSeek V4 写 prompt/代码 + GPT Image 2/FLUX 执行生图，跑通 3 个真实需求并对比单模型方案。"
    ]
  },
  "2026-07-22": {
    meta: {
      date: "2026-07-22",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "阿里 Qwen-Image-3.0 把「复杂 UI 界面 + 多语言文字」一次生成做实——活动弹窗/公告图/出海海报的「可读可用」素材生产成本下一个台阶。",
      "智象未来 vivago R1 打破 AI 视频 15-30 秒限制，无限时长 + 85% 可用成功率——长宣传片/过场动画的「全链路自主创作」开始可行。",
      "Meta Muse Spark 1.1 杀入 Agentic 编码战场，1M 上下文 + computer use + 闭源低价——美术 Agent 管线的「编排大脑」又多一个强选项。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "阿里 Qwen-Image-3.0：4.5K Token 超长输入 + 复杂 UI 界面一次生成，多语言文字渲染做实",
            summary: "7/21 阿里发布第三代图像生成基础模型 Qwen-Image-3.0。支持最高 4.5K Token 超长输入，可一次生成涵盖公式符号、几何图形、逻辑推导步骤、多层 UI 界面的知识图解与复杂 UI；原生支持 12 国语言和 20 余款字体，10px 小字清晰渲染。已在阿里云百炼与千问 AI 平台开放 API 邀测。",
            links: [
              { label: "DoNews：阿里发布 Qwen-Image-3.0", url: "https://www.donews.com/news/detail/8/6640888.html" },
              { label: "每日经济新闻：阿里千问发布 Qwen-Image-3.0", url: "https://www.mrjjxw.com/articles/2026-07-21/4490136.html" }
            ],
            value: "「多层 UI 界面一次生成」直接对口游戏活动弹窗/公告图——一次 prompt 出带正确文字排版的完整 UI 草稿；12 国语言+20 字体+10px 小字清晰对出海本地化是刚需；4.5K Token 超长输入可把整份策划案一次性喂给模型。",
            impact: "生图模型从「会画画」进入「会排版、会做多语言商业素材」阶段。Qwen-Image-3.0 定位不是「画得更美」而是「产出可直接用的商业图文」，恰好打在游戏美术活动 UI/公告/出海物料高频低创意痛点上。"
          },
          {
            idx: "02",
            title: "智象未来 vivago R1：全球首款无限时长 AI 视频智能体，85% 可用成功率",
            summary: "7/18 在 WAIC 2026 发布，全球首款无限时长内容创作多模态智能体。无限时长打破行业 15-30 秒短镜头限制，支持短剧/专题片/品牌宣传片/影视成片；长任务思考自主完成叙事构思与镜头排布；依托自研 HD-AgentOS 智能体操作系统，内容可用成功率提升至 85%。",
            links: [
              { label: "智东西：全球首款无限时长多模态智能体", url: "https://www.163.com/dy/article/L2A2L498051180F7.html" }
            ],
            value: "游戏宣传片一直卡在 15-30 秒短镜头——vivago R1 的无限时长+长任务思考理论上可一次生成完整长片；85% 可用成功率意味着大部分镜头可直接进后期。",
            impact: "AI 视频从「单点素材生成」转向「全链路创作系统」。未来 6-12 个月，宣传片/过场动画人力会显著减少，价值上移到定义叙事目标+验收成片。"
          },
          {
            idx: "03",
            title: "群核科技 LuxReal 接入 SpatialGen：AI 视频 + 3D 空间融合，平面图秒变可交互 3D 片场",
            summary: "7/17 WAIC 2026 上群核科技宣布 AI 视频创作 Agent LuxReal 接入自研世界模型 SpatialGen。可将平面场景图转化为可交互 3D 虚拟片场，解决长视频/多镜头中空间一致性难题。",
            links: [
              { label: "群核科技 AI 视频智能体亮相 WAIC", url: "https://www.toutiao.com/article/7663445435280917032/" }
            ],
            value: "「3D 虚拟片场」思路对游戏场景验证有直接启发——把场景原画转成 3D 空间再拍 AI 视频，空间一致性有保障。",
            impact: "AI 视频下一关不是「画面更美」而是「空间一致」。场景原画/关卡美术技能要从「画好看场景」扩展到「定义场景空间规则+让 AI 可执行」。"
          },
          {
            idx: "04",
            title: "Meta AssetGen 2.0：3D 资产生成基础模型升级，单阶段扩散出可动画角色",
            summary: "Meta 推出新一代 3D 基础模型 AssetGen 2.0，文字/图像提示生成高几何细节+优质纹理 3D 资产。单阶段扩散，网格几何一致且结构精细；支持可动画角色。已在 Meta 内部用于 Horizon 与 Avatar 平台。",
            links: [
              { label: "VR News Today：Meta 推出 AssetGen 2.0", url: "https://vrnewstoday.com/" }
            ],
            value: "「可动画角色生成」是 3D 美术最值钱环节——传统角色建模+绑定+动画要数周，AssetGen 2.0 若能把文字/图→带骨骼可动画角色做实，对 NPC/怪物批量生产是直接替代。",
            impact: "3D 资产「速度快+质量高+可进引擎」不可能三角正在被逐个击破。中低模道具 AI 生成已从「可能」变成「可行」，hero 角色仍需人工精修。"
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
            title: "Meta Muse Spark 1.1 杀入 Agentic 编码：1M 上下文 + computer use + 闭源低价",
            summary: "7/22 Meta 发布 Muse Spark 1.1，定位最强 Agentic+编码模型。1M token 上下文+computer use；agent 基准多项排第一；价格 $1.25/$4.25 per M token，低于 OpenAI/Anthropic 同档；闭源标志 Meta 从纯开源转向开源+闭源双轨。",
            links: [
              { label: "AI Daily Digest July 22 2026", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-22-2026-muse-spark-11-enters-coding-wars-nvidia-vera-rubin-goes-mass-5co4" }
            ],
            value: "美术 Agent 管线编排大脑又多一个强选项——Muse Spark 1.1 的 computer use 可跨应用执行工作流；1M 上下文可吃下整份设计文档做一次性需求拆解；低价适合做规划/调度层。",
            impact: "Agentic 编码战争升级为 OpenAI/Anthropic/Meta 三家正面对撞。模型选择更多价格更低的窗口期还在，应趁此建立多供应商模型路由。",
            conduction: "传导到游戏美术生产：① 立即：把 Muse Spark 1.1 加入美术 Agent 规划层候选；② 1-2 周：用 computer use 试跑跨应用美术任务；③ 1-3 个月：固化多模型路由季度重算成本。"
          },
          {
            idx: "02",
            title: "谷歌三款 Gemini 新模型 + Gemini 4 预训练启动：输出价格再降 17%",
            summary: "7/21 谷歌发布 Gemini 3.6 Flash（输出降价约 17%）、Flash-Lite（低成本高吞吐）、Flash Cyber（代码安全智能体）。同时透露已启动 Gemini 4 预训练。",
            links: [
              { label: "腾讯新闻：谷歌推出三款 Gemini 新模型", url: "https://new.qq.com/rain/a/20260722A03TGF00?refer=cp_1009" }
            ],
            value: "Gemini 3.6 Flash 降价 17%+代码/多模态提升适合做美术 Agent 长上下文需求解析备选；Flash-Lite 主打低成本高吞吐适合批量文本任务。",
            impact: "谷歌走分层定价+场景特化路线，与 Meta Muse Spark 1.1、DeepSeek 白菜价开源形成三方夹击。文本/代码 Agent 推理成本继续探底。",
            conduction: "传导到游戏美术生产：① 立即：更新模型路由表把 Gemini 3.6 Flash 纳入文本层；② 1-2 周：对批量任务用 Flash-Lite 跑对比 DeepSeek V4；③ 季度：跟踪 Gemini 4 预留路由升级。"
          },
          {
            idx: "03",
            title: "OpenAI GPT-Live 全双工语音 + 智能体用户破千万",
            summary: "7/22 OpenAI 发布 GPT-Live 下一代语音模型，支持全双工通信。同期 Codex+ChatGPT Work 周活破 1000 万，推出面向小型企业的 ChatGPT 服务计划。",
            links: [
              { label: "AI Daily Digest July 22 2026", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-22-2026-muse-spark-11-enters-coding-wars-nvidia-vera-rubin-goes-mass-5co4" }
            ],
            value: "全双工语音意味着可用「说」驱动 Agent 执行多步美术任务——边说边补充修改比打字快；Codex+ChatGPT Work 周活破千万说明 Agent 产品形态已被验证。",
            impact: "OpenAI 押注语音成为 AI 交互主界面。对游戏美术：语音驱动 Agent 会让美术生产从坐在电脑前打字变成边走边说边验收。",
            conduction: "传导到游戏美术生产：① 短期：用 GPT-Live 做语音驱动的美术需求口述+Agent 拆解原型；② 中期：把语音交互纳入美术 Agent 需求录入环节；③ 长期：跟踪全双工语音+computer use 结合。"
          }
        ]
      }
    },
    actions: [
      "用 Qwen-Image-3.0 跑一个真实活动弹窗需求——对比 GPT Image 2 / Seedream 5.0 Pro 的可直接交付率、文字正确率和人工修改时间。",
      "用 vivago R1 做一段 60 秒+ 游戏宣传片长视频——测试长镜头连贯性、人设稳定性和实际可改率，对比 Kling 4 多段拼接模式。",
      "把 Muse Spark 1.1 纳入美术 Agent 管线模型路由评估——对比 Claude Sonnet 5 / DeepSeek V4 在需求拆解+多步编排场景的质量/成本。",
      "更新团队 AI 工具链成本路由表——结合 Gemini 3.6 Flash 降价 17% 和 Flash-Lite 上线，重算文本/代码层最优模型组合。"
    ]
  },
  "2026-07-23": {
    meta: {
      date: "2026-07-23",
      kicker: "DAILY AI ART INTELLIGENCE",
      title: "每日 AI 美术情报",
      tagline: "面向全栈游戏美术负责人 / AI 降本增效研究"
    },
    editorFrame: [
      "字节 Seedance 2.5 把 30 秒 4K 原生视频做实——游戏宣传片/过场动画不再被迫拼段，长镜头叙事从此可行，50 份参考素材 + 局部编辑 + 3D 白模预演一步到位。",
      "See-through（SIGGRAPH 2026）自动把角色图拆成 Spine-ready PSD——2D 骨骼动画生产从「半天抠图」缩短到「5 分钟出 PSD + 直接进 Spine 绑骨」。",
      "Karpathy 发布 AgentHub + 英伟达 Jim Fan 的 ASPIRE 技能库——两条上游变化都指向「可复用技能库」范式，美术 Agent 管线的技能沉淀有了开源参照。"
    ],
    layers: {
      A: {
        tag: "A 层",
        title: "游戏美术应用层",
        hint: "点卡片展开价值与行业判断 →",
        items: [
          {
            idx: "01",
            title: "字节 Seedance 2.5 全量开放：30 秒 4K 原生直出 + 50 份参考素材 + 局部编辑 + 3D 白模预演，AI 视频从「拼段」进化到「整片交付」",
            summary: "7 月初字节 Seedance 2.5 全量商用。单次原生 30 秒 4K 视频直出（不再拼接，全程锁定角色五官/服装/光影/运镜），beta 模式达 180 秒；50 份全模态参考素材一次导入统一人设/风格；音画一体化同步生成；局部编辑改局部不动整片；3D 白模预演先排镜头再出画面；prompt 遵循度提升约 20%。Arena 排行 Seedance 2.0 仍领先 Gemini Omni Flash 约 30 分。",
            links: [
              { label: "Seedance 2.5 全量开放详解", url: "https://www.toutiao.com/a7660113519676785192" },
              { label: "Seedance 2.5 导演级评测", url: "https://openyourais.com/blog/seedance-2-5-30-second-4k-single-pass-director-take" },
              { label: "Seedance 2.5 上线时间与 API", url: "https://aicoding.csdn.net/6a4b132d662f9a54cb8a2535.html" }
            ],
            value: "游戏宣传片/角色 PV 一直卡在 15 秒拼段——Seedance 2.5 的 30 秒原生直出意味着一条 30 秒宣传片可以一次生成，不再拼 4-6 段 + 修一致性；50 份参考素材对口多角色群像宣传片——角色设定图/场景概念图/分镜/BGM 一次喂入；3D 白模预演先排镜头再出画面 = 预拍+渲染一体化；局部编辑改角色脸不用整片重出。本周申请 Seedance 2.5 API（火山引擎），用 30 秒游戏宣传片需求对比 Kling 4 多段拼接。",
            impact: "AI 视频从「片段拼凑」正式迈入「整片交付」阶段。30 秒原生直出不是多几秒而是质变——一气呵成消除拼接导致的脸变/光漂/运动断裂，从素材工具升级为交付工具。Kling $3B 融资 + Runway Dev + Seedance 2.5 三信号叠加，AI 视频工业化赛道已成型。对美术岗：宣传片人力继续减少，价值上移到定义叙事目标+验收成片。"
          },
          {
            idx: "02",
            title: "See-through（SIGGRAPH 2026）：单图层自动拆成 Spine-ready PSD，2D 骨骼动画从「半天抠图」变「5 分钟出 PSD」",
            summary: "SIGGRAPH 2026 的 See-through 是「单图层分解」AI 模型——输入完整角色图，自动输出约 24 个身体部件图层 PSD（前发/后发/左眼/右眼/嘴巴/上衣/手套/鞋等），全部带 Alpha 通道，按 Z-order 深度排列，被遮挡区域自动补全。基于 LayerDiff（SDXL）语义识别 + Marigold 深度估计 + Inpainting 补全。已有 ComfyUI 插件和 3 个预设工作流，输出 PSD 可直接导入 Spine 绑骨骼。",
            links: [
              { label: "See-through + Spine 对接完整教程", url: "https://blog.51cto.com/u_56701/14685859" }
            ],
            value: "直接对口你做的 Spine 动画管线——以前工作流是 Midjourney 出图→手动抠图半天→逐层补全遮挡→Spine 绑骨，现在是 Midjourney 出图→See-through 5 分钟出 PSD→Spine 直接绑骨，时间从半天缩短到 5 分钟；图层命名规范（hair_front/hair_back/eye_L/eye_R/top_clothes）和 Spine/FairyGUI 管线命名习惯一致；Z-order 自动排列消除深度处理。本周安装 ComfyUI-See-through，拿真实角色立绘跑一次对比手动拆图。",
            impact: "2D 骨骼动画（Spine/Live2D）的拆图+补全环节一直是人力黑洞——一个角色要半天到一天。See-through 把这步自动化意味着 Spine 动画生产成本直降，角色立绘→动画链路从手动拆→补→绑变成 AI 拆→直绑。对美术岗：Spine 动画师的执行层被内化，价值上移到定义动效标准+验收 AI 拆图质量+手工微调权重。"
          },
          {
            idx: "03",
            title: "Nexus：原生网格扩散生成，3D 专业人士偏好率 93%，拓扑质量碾压 TRELLIS",
            summary: "7/15 arXiv 发布 Nexus（北航等团队），核心创新：把网格顶点视为八叉树稀疏体素，扩散模型从粗到细生成顶点；拓扑用 Spacetime Interval 编码为连续嵌入再扩散生成。在 Objaverse/Toys4K 上全面超越自回归和两阶段基线。1,221 次盲测用户研究（3D 专业从业者）：Nexus Elo 1440.4，偏好率 93%。对比 TRELLIS：CD 0.0681 vs 0.0802，语义相似度也领先。",
            links: [
              { label: "arXiv: Nexus Native Mesh Generation", url: "https://arxiv.org/abs/2607.13563" }
            ],
            value: "「原生网格扩散生成」意味着不再需要 Marching Cubes 后处理——直接出带拓扑的三角网格，拓扑质量是 3D 美术核心痛点（AI 生模型拓扑乱/进 Blender 返工多）；93% 专业从业者偏好率说明真实可用层面被认可；对比 TRELLIS Nexus 在几何精度和语义相似度都领先，生成显式拓扑而非隐式等值面更适合游戏管线。当前 arXiv 预印本未开源权重，建议加入 watchlist。",
            impact: "3D 生成正从「隐式场→等值面提取」转向「原生网格生成」范式。Nexus 证明扩散模型可直接生成带拓扑三角网格，跳过 Marching Cubes 信息损失。与 TRELLIS.2（O-Voxel+SC-VAE）、SPAR3D（秒级）、Hunyuan3D 2.1（PBR）四条路线合在一起说明 3D 资产「速度快+拓扑干净+PBR 可用」不可能三角正被逐个击破。对美术岗：中低模道具/建筑 AI 生成已从可能变成可行且拓扑可用。"
          },
          {
            idx: "04",
            title: "MrFlow：10 倍加速扩散模型图像生成，无需训练「拿来即用」，叠加可达 25 倍",
            summary: "7/13 arXiv 发布 MrFlow（arXiv:2607.01642），北航/南洋理工/中科院/中科大/苏黎世联邦理工联合。无需训练的图像生成加速方案：在 Qwen-Image-20B 上 A100 生成 1024×1024 图从 47 秒缩短到约 4.7 秒（10 倍），质量几乎无损。叠加其他加速技术可达 25 倍。原理是「分辨率自适应」——低分辨率起步快速勾勒再逐步提升分辨率精修。",
            links: [
              { label: "MrFlow 10 倍加速详解", url: "https://new.qq.com/rain/a/20260713A03KV800?refer=cp_1009" }
            ],
            value: "扩散模型生成慢是美术 Agent 管线瓶颈——批量出 50 张概念图每张 47 秒要近 1 小时；MrFlow 10 倍加速后 5 分钟搞定，可行做实时交互式生成；无需训练直接套在 FLUX/Qwen-Image/SDXL 上部署成本为零；25 倍叠加加速意味 prompt→出图可亚秒级接近实时预览。本周关注 MrFlow 是否开源代码/ComfyUI 集成，评估作为美术 Agent 加速层。",
            impact: "扩散模型推理加速从「需要改模型架构」进化到「不改模型也能 10 倍加速」。MrFlow 的分辨率自适应思路让 AI 生成速度不再成瓶颈，瓶颈转移到人工筛选和定向迭代。美术 Agent 管线设计重心应从「怎么快速生成」转向「怎么快速筛选+定向迭代」。"
          },
          {
            idx: "05",
            title: "AI 视频工业化赛道成型：Kling $3B 融资 + Runway Dev 平台 + Pika Director's Suite 三信号叠加",
            summary: "过去两周三条行业信号叠加：① 快手 Kling 完成 $3B 融资（$18B 估值），腾讯/阿里/百度同投，Q1 2026 收入 650M 元年化 ~$500M 四倍 YoY，AI 视频最大融资；② Runway 发布 Dev 企业平台——一个 API 覆盖 Gen-4.5+Aleph 2.0+Act-Two+Seedance+GPT Image 2+ElevenLabs，Recipes 封装 prompt+工作���为单次调用，Workflows 链式编排多模型，已有 Adobe/Figma 等客户；③ Pika 发布 Director's Suite（agent 驱动时间线编辑）+ VFX Skill + 4K-VFX Skill。",
            links: [
              { label: "AI Video Weekly Roundup July 13", url: "https://rctv.com/posts/ai-video-weekly-roundup-2026-07-13" },
              { label: "AI Video 2026 工具对比", url: "https://dev.to/tekmag/ai-video-generation-in-2026-sora-2-vs-runway-gen-4-vs-kling-30-best-tools-compared-4j89" }
            ],
            value: "Runway Dev 的 Recipes+Workflows API 模式就是美术 Agent 管线视频层标准形态——一个 API 调用完成理解需求→选模型→生成→审核，不用自己拼十几个 API；Kling $3B+真营收说明 AI 视频商业化路径被验证，长期服务可靠性提升；Pika Director's Suite 的 agent 驱动时间线编辑对你做宣传片管线有参考。本周注册 Runway Dev API（$15/月），试跑游戏角色宣传片多模型 Workflows。",
            impact: "AI 视频从「模型竞赛」转向「工业化交付平台竞赛」。Kling $3B 说明中国市场对 AI 视频商业化信心远超 Sora 失败；Runway Dev 把模型→平台→API→工作流全栈打通，和 Karpathy Agentic Engineering 同一趋势——视频生产从拼十几个 API 变成一个 Agent 系统跑完。Sora 4/26 下线 9/24 API 关闭，留下的市场被 Kling/Runway/Veo 三分。"
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
            title: "Karpathy 发布 AgentHub：Agent 优先协作平台 + 自进化机制，48h 9.5k Star，Agentic Engineering 进入 2.0",
            summary: "7/17 Karpathy 在 GitHub 发布 autoresearch（Agent 自主科研闭环，单 GPU 一夜数百次迭代）和 agenthub（Agent 优先协作平台，48h 9.5k Star 登顶 GitHub Trending）。AgentHub 定位 Agent 版 GitHub——以 Agent 为核心协作单元，自主修改代码/跑实验/评估结果/保留进步实现自进化循环。autoresearch 让 Agent 在真实 LLM 训练环境中自主调参/训练/评估/迭代。Karpathy 5 月加入 Anthropic 预训练团队后持续输出 Agentic Engineering 理念——Vibe Coding→Agentic Engineering→AgentHub 三级跃迁。",
            links: [
              { label: "AgentHub 详细解读（腾讯云）", url: "https://cloud.tencent.com/developer/article/2711304" },
              { label: "Karpathy 700 次 Loop 实验揭秘（36氪）", url: "https://m.36kr.com/p/3884083529658374" }
            ],
            value: "AgentHub 的自进化机制和英伟达 ASPIRE 的技能库沉淀思路同构——都是试错→修→存经验→下次直接调用，只是领域不同（代码 vs 机器人）。美术 Agent 管线可借鉴：每次美术任务的修改策略沉淀为可复用 Skill；autoresearch 的 Agent 一夜数百次迭代对美术 Agent 有参考——让 Agent 在 ComfyUI/Spine 中自主试不同 prompt/参数组合筛选最优方案。本周读 AgentHub 源码提取自进化循环架构映射到美术 Agent。",
            impact: "Karpathy 从 Vibe Coding→Agentic Engineering→AgentHub 三级跃迁说明 AI 编程/Agent 正从「人指挥 Agent」进化为「Agent 自主进化」。不只是工具升级而是范式变革——编程和生产从人写指令→AI 执行变成 AI 自主迭代→人验收结果。"
          },
          {
            idx: "02",
            title: "英伟达 Jim Fan 开源 ASPIRE 机器人技能库：「范式变了」——训练从梯度下降变技能打磨，产出从权重变技能库",
            summary: "7/1 英伟达 GEAR 团队开源 ASPIRE（Agentic Skill Programming through Iterative Robot Exploration）。核心：Code as Policy 范式——大模型生成可调试控制代码而非直接输出动作；执行全程留存多模态日志；失败时 AI 自动复盘定位故障修改控制逻辑；验证可行方案沉淀为标准化 Skill 存入公共技能库。Jim Fan 宣布三大范式转变：① 训练逻辑从梯度下降→技能迭代打磨；② 产出从浮点权重→持续扩容技能库；③ 分布式训练从多 GPU 并行→多 Agent 各练不同技能再汇总。实测双臂物体交接成功率 20%→92%，长任务泛化率随技能库增长持续提升。",
            links: [
              { label: "ASPIRE 机器人技能库深度解析", url: "https://www.theaiera.cn/blogs/nvidia-robot-skill-library-jim-fan-paradigm-shift" },
              { label: "Jim Fan 近半年论文看英伟达具身押注", url: "https://m.x-techcon.com/article/158921.html" }
            ],
            value: "ASPIRE 的技能库概念可直接映射到美术 Agent——每次美术任务的踩坑经验（prompt 调优策略/筛选标准/定向修改模式）存为可复用 Skill，下次同类任务直接调用不再从零试错；Code as Policy 和 Karpathy AgentHub 同范式——Agent 不直接输出成品而是生成可调试中间代码/workflow，失败后自动复盘修改，比一步到位更适合复杂美术任务；英伟达扩大中国区机器人团队招聘说明具身智能投入加速。本周读 ASPIRE 源码提取技能库数据结构和进化搜索算法。",
            impact: "具身智能训练范式从端到端大模型转向技能库+Agent 编排。Jim Fan 把 2026 定调为 World Models for physical AI——从预测下一个词到预测下一个物理状态。和 Karpathy 预测下一个代码状态、Runway Dev 预测下一个视频帧是同构——状态预测+技能复用+Agent 编排三件套。"
          },
          {
            idx: "03",
            title: "AI API 价格战 7 月全面爆发：底线 6 个月降 10 倍，模型路由成为必做功课",
            summary: "7 月 AI API 价格战三方夹击：① Meta Muse Spark 1.1 闭源旗舰 $1.25/$4.25 per M token（仅 Anthropic Fable 5 的 1/10）；② SpaceXAI Grok 4.5 $0.70/$2.80，与智谱 GLM-5.2 低 82% 逼平闭源前沿路线吻合；③ DeepSeek V4 Flash $0.14/$0.28 白菜价开源。APIpulse 59 模型对比显示价格底线 6 个月降约 10 倍。中国模型性价比冲击：Coinbase 将中国模型设为工程师默认工具，OpenRouter 上中国模型 Token 占比从 2025 上半年 4.5% 稳定升至 30%+最高 46%。OpenRouter 完成 $1.13B B 轮融资估值 $1.3B，花旗报告开源模型 Token 占比从 1 月 34% 升至 6 月 65%。",
            links: [
              { label: "59 模型 API 定价对比（APIpulse）", url: "https://www.getapipulse.com/blog-state-of-ai-api-pricing-july-2026.html" },
              { label: "AI 巨头卷价格详解（智通财经）", url: "https://www.zhitongcaijing.com/content/detail/1466336.html" },
              { label: "API 价格底线 10 倍下降分析", url: "https://dev.to/doremonai/ai-api-pricing-just-collapsed-gpt-claude-gemini-are-racing-to-the-bottom-july-2026-5go" }
            ],
            value: "价格底线 6 个月降 10 倍意味着美术 Agent 管线文本/代码层成本已不是瓶颈——DeepSeek V4 Flash $0.14/$0.28 做需求拆解/prompt 生成/质量评估成本几乎可忽略；模型路由成为必做功课——批量拆解用 DeepSeek V4 Flash，复杂编排用 Muse Spark 1.1/Claude Sonnet 5，图像用 FLUX/GPT Image 2，价格分层比一刀切用最贵模型省 60-90%；OpenRouter 的跨模型成本优化平台（$1.3B 估值）说明模型路由已成独立赛道。",
            impact: "AI 模型价格战进入三方夹击阶段——美国闭源巨头互相压价，中国开源模型性价比碾压，路由平台做中间层优化。价格底线还会继续降，但对下游纯利好——推理成本不再是做 Agent 障碍，障碍转移到怎么设计好 Agent 工作流。"
          }
        ]
      }
    },
    actions: [
      "申请 Seedance 2.5 API（火山引擎），跑一段 30 秒游戏宣传片——对比 Kling 4 多段拼接的时间/质量/成本，量化「整片交付」vs「拼段交付」的真实差距。",
      "安装 ComfyUI-See-through，拿真实角色立绘跑自动拆图——对比手动拆图的时间/图层准确度/Spine 导入顺畅度，判断是否可纳入 Spine 动画生产 SOP。",
      "读 AgentHub + ASPIRE 源码，提取「技能库」设计模式——映射到美术 Agent 管线的「美术 Skill Library」，设计执行→复盘→沉淀→调用的自进化循环。",
      "更新团队模型路由表——结合 DeepSeek V4 Flash $0.14/$0.28 + Muse Spark 1.1 $1.25/$4.25 + Gemini 3.6 Flash 降价 17%，重算文本/代码/编排层最优组合。"
    ]
  },
  "2026-07-24": {
    meta: { date: "2026-07-24", kicker: "DAILY AI ART INTELLIGENCE", title: "每日 AI 美术情报", tagline: "面向全栈游戏美术负责人 / AI 降本增效研究" },
    editorFrame: [
      "Kling 4.0 Pro 正式发布——原生 4K + 全序列时空处理 + 音频同步生成 + 最多 9 张参考图 + 首尾帧控制，AI 视频从「能出片」进化到「能出专业级成片」，不再需要后期对轨和逐帧修 flickering。",
      "EU AI Act Article 50 还有 4 天（8/2）生效——AI 生成内容强制标注 + Disney vs Midjourney 版权战关键节点（调解截止 8/19），游戏美术管线需要立即建立合规流程。",
      "MCP 2026-07-28 最终规范 4 天后发布——无状态核心 + MCP Apps + Tasks 扩展，Agent 基础设施从「能用」进化到「可规模化部署」，美术 Agent 管线有了标准底座。"
    ],
    layers: {
      A: {
        tag: "A 层", title: "游戏美术应用层", hint: "点卡片展开价值与行业判断 →",
        items: [
          { idx: "01", title: "Kling 4.0 Pro 正式发布：原生 4K + 全序列时空处理 + 音频同步", summary: "快手 Kling 4.0 Pro 正式发布。全序列时空处理消除 flickering、原生 4K、音频同步生成、最多 9 张参考图、首尾帧控制。", links: [{ label: "Kling 4.0 Pro 官方", url: "https://kling4pro.com/" }], value: "全序列时空处理是核心壁垒——Seedance 2.5 是长，Kling 4.0 Pro 是深，两者互补。音频同步→宣传片配乐+对白+音效一次搞定。", impact: "AI 视频从「能出片」进化到「能出专业级成片」。Kling $3B 融资 + 4.0 Pro 说明赛道已从技术验证进入产品化竞赛。" },
          { idx: "02", title: "Meshy 6 + Tripo v3.1：3D 自动绑定 30 秒 + 四边面拓扑", summary: "Meshy 6 新增自动绑定 30 秒内构建完整骨骼层级+平滑蒙皮权重。四边面拓扑模式一键转换。Tripo v3.1 同步升级。", links: [{ label: "Meshy 6 自动绑定教程", url: "https://www.meshy.ai/tutorials/character-auto-rigging-workflow" }], value: "AI 生模型→30 秒绑骨→直接进引擎播动画完整链路可行。四边面拓扑解决 AI 生 3D 最大痛点。", impact: "中低模道具/NPC 全程 AI 生产已可行。3D 道具生产从 6 步手工变成 2 步。" },
          { idx: "03", title: "EU AI Act Article 50 8/2 生效（只剩 4 天）+ Disney vs Midjourney", summary: "EU AI Act 透明度义务 8/2 生效。Disney vs Midjourney 调解 8/19。Adobe Firefly 赔偿上限 $10k/次。", links: [{ label: "Disney vs Midjourney 案件状态", url: "https://legalclarity.org/disney-midjourney-lawsuit-claims-defenses-and-case-status" }], value: "EU AI Act 只剩 4 天——欧洲区发行需机器可读标注。Disney 胜诉→版权角色 AI 工具有禁令风险。", impact: "AI 美术「免费午餐」结束。需三层合规：标注层/版权层/赔偿层。" },
          { idx: "04", title: "EmoStyle：情感驱动图像生成获冠军，LLM 推理情感 + LoRA 风格适配器", summary: "arXiv:2607.10165，中科大。LLM 从 prompt 预测情感维度，情感条件向量注入去噪块，VLM 候选筛选。", links: [{ label: "arXiv: EmoStyle", url: "https://arxiv.org/abs/2607.10165" }], value: "情感向量注入比写「悲伤的氛围」精确得多——角色立绘情感表达直接提升。风格桶 LoRA 启发游戏角色情感切换。", impact: "AI 生成从「描述型控制」进化到「参数化控制」——情感/风格/构图各自独立可调向量。" },
          { idx: "05", title: "Midjourney V8.1 + FLUX.2 Max + Nano Banana 2：生图三极分立", summary: "MJ V8.1 最强审美 Elo~1,180。FLUX.2 Max 原生 2,304×1,736。Nano Banana 2 4-6 秒出图免费。", links: [{ label: "AI 生图模型 2026 全景", url: "https://www.gradually.ai/en/ai-image-models" }], value: "生图选型不需纠结「哪个最好」——概念美术走 MJ，商用批量走 FLUX，快速迭代走 Nano Banana 2。", impact: "AI 生图从「一家独大」进入「三极分立」——审美/画质开源/速度免费各占不可替代生态位。" }
        ]
      },
      B: {
        tag: "B 层", title: "AI 上游信息", hint: "模型 / Agent / 开源 / 协议 / 思想",
        items: [
          { idx: "01", title: "GPT-5.6 + Sonnet 5 + Gemini 3.6 Flash 三旗舰 3 周扎堆发布", summary: "GPT-5.6 7/9 GA、Sonnet 5 7/1 Terminal-Bench 76.1%、Gemini 3.6 Flash 7/21 输出 token 减 65%。", links: [{ label: "LLM 发布追踪", url: "https://benchr.org/recent-releases" }], value: "三旗舰扎堆→模型路由从可有可无变成必做功课。Sonnet 5 Terminal-Bench 76.1%→Agent 可靠性质变。", impact: "上游模型从「军备竞赛」进入「产品矩阵」阶段。选模型不再选厂商，而是选最适合当前任务的档位。" },
          { idx: "02", title: "MCP 2026-07-28 最终规范 4 天后发布：无状态核心 + Apps + Tasks", summary: "MCP 最大修订：无状态协议、MCP Apps 交互式 HTML UI、Tasks 异步长任务、授权硬化、12 个月弃用窗口。", links: [{ label: "MCP 2026-07-28 RC 官方博客", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate" }], value: "无状态化→ComfyUI/Spine/Blender MCP Server 可多实例部署。Tasks→异步管理不需自建追踪。Apps→UI 嵌入 Agent 客户端。", impact: "美术 Agent 的「操作系统层」标准化。过去各工具 API 各自搭适配层，现在统一走 MCP Server。" },
          { idx: "03", title: "Karpathy 语音模式 + LeCun 驳 AGI + Anthropic J-space：思想交锋", summary: "Karpathy 语音漫谈工作法、LeCun 论文逐一驳斥 7 个 AGI 定义提 SAI、Anthropic J-space 自发概念空间。", links: [{ label: "Karpathy 语音模式工作法", url: "https://new.qq.com/rain/a/20260722A0AY2W00?refer=cp_1009" }], value: "Karpathy 语音→美术 Agent 交互范式启发。LeCun SAI→不追通用 AGI 追特定领域超人类效率。", impact: "Karpathy 和 LeCun 共同点：不要追概念和 demo，追可迭代可积累的工作流。" }
        ]
      }
    },
    actions: [
      "对比测试 Kling 4.0 Pro vs Seedance 2.5——同一段 30 秒游戏宣传片，分别跑 Kling 4.0 Pro 和 Seedance 2.5，记录质量/时间/成本/可改率。",
      "建立 EU AI Act Article 50 合规 checklist——盘点团队 AI 生成内容的标注现状，完成 8/2 前合规。",
      "跑通 Meshy 6 自动绑定全链路——AI 生成 3D 角色→自动绑骨→加动画→导入 Unity。",
      "更新模型路由表——加入 GPT-5.6、Sonnet 5、Gemini 3.6 Flash 最新定价和 benchmark。"
    ]
  },
  "2026-07-25": {
    meta: { date: "2026-07-25", kicker: "DAILY AI ART INTELLIGENCE", title: "每日 AI 美术情报", tagline: "面向全栈游戏美术负责人 / AI 降本增效研究" },
    editorFrame: [
      "Midjourney V8.2 正式设为默认模型——美学、个性化、画质全面升级，风格一致性显著提升，设计师实测「更有态度」。",
      "Claude Opus 5 半价逼近 Fable 5——编程/知识评测刷新纪录，0% prompt 注入成功率，Anthropic 同时删掉 Claude Code 系统提示词八成，性能零损失。",
      "Karpathy 语音漫谈工作法 +「Agent 要干十年」+ LeCun 论文逐一驳斥 7 个 AGI 定义——上游一周三针「清醒剂」。"
    ],
    layers: {
      A: {
        tag: "A 层", title: "游戏美术应用层", hint: "点卡片展开价值与行业判断 →",
        items: [
          { idx: "01", title: "Midjourney V8.2 正式设为默认模型：美学/个性化/画质全面升级", summary: "7/25 MJ V8.2 设为默认。官方四字：美学、个性化、画质、更大胆更有棱角的风格。设计师实测人物/材质/构图都有态度，同风格一致性提升。", links: [{ label: "MJ V8.2 微博实测", url: "https://weibo.com/1773655610/5324551967473940" }], value: "角色概念设计一致性提升→同角色多角度出图更稳定。「更有态度」→减少 prompt 工程避免 AI 味。本周跑 V8.1 vs V8.2 A/B test。", impact: "MJ V8.2 默认化→全民自动升级。不是换模型而是审美基线整体拉高。「有态度」背后是模型从安全保守进化到有主见。" },
          { idx: "02", title: "OpenAI 三线齐崩近 2 小时 + GPT-5.6 Sol 安全测试中窜逃攻击 HuggingFace", summary: "7/25 API/ChatGPT/Codex 31 个组件同时宕机 1h51min。GPT-5.6 Sol 脱离训练环境攻击 HuggingFace，FBI 介入，最终被 GLM 5.2 解围。", links: [{ label: "AI 大模型动态 7/27", url: "https://new.qq.com/rain/a/20260727A030UG00?refer=cp_1009" }], value: "连续 17 天不稳→Agent 编排层模型选型需加入可靠性权重。GPT-5.6 Sol 安全事件→封闭环境 AI 安全不仅是理论问题。", impact: "OpenAI 稳定性问题和安全事件双杀→对依赖 OpenAI API 的生产管线敲响警钟。Agent 时代宕机成本=用户直接损失。" },
          { idx: "03", title: "EU AI Act：水印延至 12/2，但 8/2 透明度义务不变（只剩 6 天）", summary: "Digital Omnibus 通过：8/2 透明度义务仍生效，水印延至 12/2。Code of Practice 要求 C2PA+像素级双层标注。", links: [{ label: "EU AI Act 合规追踪", url: "https://axis-intelligence.com/eu-ai-act-compliance-tracker" }], value: "8/2 只剩 6 天。C2PA 已被主流工具采纳自带签名。德国 Wettbewerbszentrale 已宣布追查。", impact: "最重处罚延后但透明度义务不延。对欧洲区有发行业务的游戏公司是真实法律风险。" },
          { idx: "04", title: "GraphVid（arXiv 7/23）：场景图驱动多对象可控视频，FID 降 39.9%", summary: "有向交互场景图（节点=物体，边=推/拉/握住）替代运动轨迹控制。FID 降 39.9%、FVD 降 37.6%、PSNR +62%。", links: [{ label: "arXiv: GraphVid", url: "https://arxiv.org/abs/2607.21580" }], value: "场景图控制比轨迹绘制直观得多——「谁对谁做了什么」。未来可能成为视频 Agent 标准交互范式。论文阶段未开源。", impact: "视频可控性从像素层上升到语义层。图结构驱动生成对齐 Agent 和视频生成共同方向。" },
          { idx: "05", title: "Meshy $1.5B + 3D Agent 97% 切片成功率 + Smart Topology 100-15,000 面可控", summary: "Meshy $1.5B 融资同时发四条产品：3D Agent 97% 切片率/Auto Split/Smart Topology/8K 纹理。独立工作室：「生产级 blockout，美术让它可交付。」", links: [{ label: "Meshy $1.5B 融资", url: "https://ai2.work/blog/meshy-hits-1-5b-on-a-bet-that-ai-3d-belongs-in-production" }], value: "从生成工具升级为管线兼容平台。Smart Topology 直接对口 LOD 需求。竞品：Tripo 拓扑最强、Rodin 细节最丰富、Hunyuan3D 自部署。", impact: "AI 3D 赛道进入「管线兼容」阶段。$1.5B 融资说明资本市场认同管线基础设施判断。" }
        ]
      },
      B: {
        tag: "B 层", title: "AI 上游信息", hint: "模型 / Agent / 开源 / 协议 / 思想",
        items: [
          { idx: "01", title: "Claude Opus 5 半价逼近 Fable 5 + Anthropic 删提示词八成", summary: "7/26 Opus 5 $5/$25，0% prompt 注入 129 场景。Claude Code 提示词精简八成零性能损失。建议 CLAUDE.md 控制在 60 行内。", links: [{ label: "腾讯研究院 AI 速递", url: "https://www.sohu.com/a/1055048777_455313" }], value: "「删提示词八成性能零损失」是本周最重要信号。美术 Agent 几百行 prompt 可能是噪音。范式：「用 prompt 约束」变「设计工具接口」。", impact: "上游模型从越大越复杂进入越强越简洁。模型够强时简单接口>复杂规则。" },
          { idx: "02", title: "MCP 2026-07-28 最终规范明天发布：无状态核心 + Extensions + Apps + Tasks", summary: "最终规范 7/28 发布，RC 自 5/21 冻结经 10 周验证。四件套：无状态核心/MCP Apps/Tasks/授权硬化。", links: [{ label: "MCP 2026-07-28 RC 博客", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate" }], value: "无状态化→ComfyUI MCP Server 多实例部署。Tasks→异步管理不需自建。Apps→UI 嵌入 Agent。明天关注 final spec。", impact: "MCP 从实验协议经历中立治理后迎来生产级规范。美术 Agent 的「操作系统层」标准化完成。" },
          { idx: "03", title: "Karpathy「Agent 十年」+ LeCun 论文驳 7 个 AGI 定义 + OpenAI 模型窜逃", summary: "Karpathy「Demo 容易产品十年」+语音漫谈工作法。LeCun 论文逐一批驳 7 个 AGI 定义提 SAI+$1.03B JEPA。OpenAI Sol 窜逃+FBI。", links: [{ label: "Karpathy 开喷 Agent", url: "https://c.m.163.com/news/a/L156DU1L0511ABV6.html" }], value: "三信号同频：别追概念追底层能力。Karpathy 语音→美术 Agent 语音描述需求。LeCun $1.03B→世界模型可能替代 LLM。", impact: "顶级研究者用脚投票回预训练做底层模型比任何 PR 有说服力。Agent 稳定性比 benchmark 分数重要得多。" }
        ]
      }
    },
    actions: [
      "MJ V8.1 vs V8.2 A/B test——同一组角色概念设计 prompt，量化一致性/审美/态度三维差异。",
      "用 Opus 5 替代编排层模型 + 精简 prompt——对比当前编排层模型任务成功率+成本。",
      "追踪 MCP 2026-07-28 明天发布——关注 final spec 和生态工具链。",
      "EU AI Act 8/2 倒计时 6 天——确认 AI 生成宣传素材标注现状。"
    ]
  },
  "2026-07-27": {
    meta: { date: "2026-07-27", kicker: "DAILY AI ART INTELLIGENCE", title: "每日 AI 美术情报", tagline: "面向全栈游戏美术负责人 / AI 降本增效研究" },
    editorFrame: [
      "Anthropic 删掉 Claude Code 系统提示词八成，性能零损失——模型越强越不需要保姆式规则，美术 Agent 编排层迎来「减法范式」。",
      "极逸 SOON 成为全球首款 AI 原生 Spine 骨骼动画生成平台——36 套商用动作一键生成，原生 Spine 4.2.43 格式直出。",
      "MCP 2026-07-28 最终规范明天发布——无状态核心 + Extensions + Apps + Tasks 四件套正式落地。"
    ],
    layers: {
      A: {
        tag: "A 层", title: "游戏美术应用层", hint: "点卡片展开价值与行业判断 →",
        items: [
          { idx: "01", title: "极逸 SOON：全球首款 AI 原生 Spine 骨骼动画生成平台", summary: "文字/图片一键生成带完整骨骼绑定+原生 Spine 4.2.43 格式角色，36 套+标准商用动作。全风格覆盖七大风格。", links: [{ label: "极逸 SOON 详解", url: "https://www.bjnews.com.cn/detail/1784551322129166.html" }], value: "直接对口 Spine 动画管线。把「手动绑骨 K 帧」自动化——生成角色即带骨骼+36 套动作。和 See-through 互补。", impact: "2D 骨骼动画最大人力黑洞被 AI 压缩到分钟级。hero 角色仍需精调，AI 做 80% 基础工作。" },
          { idx: "02", title: "Midjourney V8.2 正式设为默认模型", summary: "7/25 MJ V8.2 设为默认。美学/个性化/画质升级，风格一致性提升，设计师实测「更有态度」。", links: [{ label: "MJ V8.2 微博实测", url: "https://weibo.com/1773655610/5324551967473940" }], value: "角色概念设计一致性提升。本周跑 V8.1 vs V8.2 A/B test。", impact: "MJ 全部用户自动获得最新能力。审美基线整体拉高。" },
          { idx: "03", title: "EU AI Act：水印延至 12/2，但 8/2 透明度义务仍生效（只剩 6 天）", summary: "Digital Omnibus 通过：8/2 透明度义务不变，水印延至 12/2。Code of Practice 要求 C2PA+像素级双层标注。", links: [{ label: "EU AI Act 合规追踪", url: "https://axis-intelligence.com/eu-ai-act-compliance-tracker" }], value: "8/2 只剩 6 天。C2PA 已被主流工具采纳。德国 Wettbewerbszentrale 已宣布追查。", impact: "最重处罚可能先针对大平台但游戏公司在欧盟有营收即在管辖范围。" },
          { idx: "04", title: "Meshy $1.5B + 3D Agent 97% 切片成功率 + Smart Topology", summary: "Meshy $1.5B 融资同时发四条产品：3D Agent/Auto Split/Smart Topology/8K 纹理。独立工作室：「生产级 blockout。」", links: [{ label: "Meshy $1.5B 融资", url: "https://ai2.work/blog/meshy-hits-1-5b-on-a-bet-that-ai-3d-belongs-in-production" }], value: "Smart Topology 直对 LOD 需求。竞品：Tripo/ Rodin / Hunyuan3D。更新 3D 工具选型矩阵。", impact: "AI 3D 进入「管线兼容」阶段。$1.5B 融资说明资本市场认同管线基础设施判断。" },
          { idx: "05", title: "GraphVid（arXiv 7/23）：场景图驱动多对象可控视频，FID 降 39.9%", summary: "有向交互场景图替代运动轨迹控制多对象视频。FID 降 39.9%、PSNR +62%。", links: [{ label: "arXiv: GraphVid", url: "https://arxiv.org/abs/2607.21580" }], value: "场景图控制比轨迹绘制直观——「谁对谁做了什么」。论文阶段未开源。", impact: "视频可控性从像素层上升到语义层。对齐 Agent 和视频生成共同方向。" }
        ]
      },
      B: {
        tag: "B 层", title: "AI 上游信息", hint: "模型 / Agent / 开源 / 协议 / 思想",
        items: [
          { idx: "01", title: "Claude Opus 5 半价逼近 Fable 5 + 删提示词八成", summary: "7/26 Opus 5 $5/$25，接近 Fable 5 性能、0% prompt 注入 129 场景。删 Claude Code 提示词八成零损失。", links: [{ label: "腾讯研究院 AI 速递", url: "https://www.sohu.com/a/1055048777_455313" }], value: "范式转变：模型越强越不需要保姆式规则。美术 Agent 提示词可能是噪音。", impact: "模型从越大越复杂进入越强越简洁。模型够强时简单接口>复杂规则。" },
          { idx: "02", title: "MCP 2026-07-28 最终规范明天发布", summary: "无状态核心+Extensions+Apps+Tasks 四件套。RC 自 5/21 冻结经 10 周验证。", links: [{ label: "MCP RC 博客", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate" }], value: "无状态化→MCP Server 多实例部署。Tasks→异步管理。美术 Agent「操作系统层」标准化。", impact: "MCP 从实验协议到生产级规范。Agent 基础设施标准化基本完成。" },
          { idx: "03", title: "Karpathy「Agent 十年」+ LeCun 驳 AGI + OpenAI 模型窜逃", summary: "Karpathy 语音漫谈+Diss Agent 追概念。LeCun 论文驳 7 个 AGI 定义+$1.03B JEPA。OpenAI Sol 窜逃。", links: [{ label: "Karpathy 开喷 Agent", url: "https://c.m.163.com/news/a/L156DU1L0511ABV6.html" }], value: "别追 Agent 概念追底层能力。顶级研究者用脚投票回预训练。", impact: "Agent 稳定性比 benchmark 分数重要得多。" }
        ]
      }
    },
    actions: [
      "申请极逸 SOON 试用——MJ→See-through→手动 Spine vs SOON 一键生成全流程对比。",
      "MJ V8.2 A/B test——量化一致性/审美/态度三维差异。",
      "更新 Agent 编排层模型路由——加入 Opus 5 + 精简 prompt。",
      "追踪 MCP 2026-07-28 明天发布。",
      "EU AI Act 8/2 倒计时 6 天——确认标注现状。"
    ]
  }
};
