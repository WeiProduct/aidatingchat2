// ===== Reply styles for the interactive hero demo =====
const STYLES = [
  { key: 'flirty', emoji: '❤️',
    name:  { 'zh-CN': '调情', 'en': 'Flirty' },
    reply: { 'zh-CN': '被你发现了😏 其实是想给你留点时间呀',
             'en': 'You caught me 😏 I was saving some time just for you.' } },
  { key: 'casual', emoji: '💬',
    name:  { 'zh-CN': '随意', 'en': 'Casual' },
    reply: { 'zh-CN': '哈哈刚忙完，正好想起你，最近怎么样？',
             'en': 'Haha just wrapped up — you popped into my head. How have you been?' } },
  { key: 'funny', emoji: '😄',
    name:  { 'zh-CN': '幽默', 'en': 'Funny' },
    reply: { 'zh-CN': '我的日程表一看到你名字就自动清空了🤪',
             'en': 'My calendar clears itself the second your name shows up 🤪' } },
  { key: 'deep', emoji: '🧠',
    name:  { 'zh-CN': '深度', 'en': 'Deep' },
    reply: { 'zh-CN': '难得能慢下来，反而更想和你好好聊聊',
             'en': "It's rare to actually slow down — makes me want to really talk with you." } },
  { key: 'direct', emoji: '💯',
    name:  { 'zh-CN': '直接', 'en': 'Direct' },
    reply: { 'zh-CN': '因为我想多陪陪你，有空一起吃个饭？',
             'en': 'Because I wanted the time for you — free to grab dinner?' } }
];
let activeStyle = 'flirty';

// ===== Scenario playground data =====
const SCENARIOS = [
  { key: 'read', emoji: '👀',
    label: { 'zh-CN': '被已读不回', 'en': 'Left on read' },
    incoming: { 'zh-CN': '哈哈 好吧', 'en': 'haha ok' },
    replies: {
      flirty: [
        { t: { 'zh-CN': '突然想起你了，罚你陪我聊五分钟😏', 'en': "You crossed my mind — that's five minutes of chat you owe me 😏" },
          w: { 'zh-CN': '不追问冷场原因，用轻松的「罚」把主动权拿回来。', 'en': 'Skips the guilt trip and restarts with a playful demand.' } },
        { t: { 'zh-CN': '我发现不主动找你，你还真能忍住不理我呀', 'en': 'So you really can go a whole day without texting me first. Impressive.' },
          w: { 'zh-CN': '半开玩笑的「吃醋」语气，把已读不回变成调情素材。', 'en': 'Turns the silence itself into flirty banter instead of an accusation.' } }
      ],
      casual: [
        { t: { 'zh-CN': '刚路过一家新开的咖啡店，突然觉得你会喜欢', 'en': 'Just walked past a new coffee spot that seems very you.' },
          w: { 'zh-CN': '用具体的小事自然重启话题，没有质问的压力。', 'en': 'Restarts with a low-pressure, concrete detail — no interrogation.' } },
        { t: { 'zh-CN': '这周过得怎么样？我这边终于闲下来了', 'en': "How's your week going? Mine finally calmed down." },
          w: { 'zh-CN': '简单近况开场，给对方一个轻松的台阶重新接话。', 'en': 'An easy check-in that lets them re-enter the chat gracefully.' } }
      ],
      funny: [
        { t: { 'zh-CN': '我的消息是不是掉进你收件箱的百慕大三角了🤔', 'en': 'Did my last text get lost in the Bermuda Triangle of your inbox? 🤔' },
          w: { 'zh-CN': '自嘲式幽默点破冷场，不指责，还给了对方笑着回复的空间。', 'en': 'Names the silence with a joke, so replying feels fun, not awkward.' } },
        { t: { 'zh-CN': '紧急通知：再不回我，我就要开始给你发冷笑话了', 'en': "Warning: if you don't reply soon I'll start sending dad jokes." },
          w: { 'zh-CN': '用「威胁发冷笑话」制造轻松的梗，把球抛回给对方。', 'en': 'A silly stakes-raiser that makes replying the easy way out.' } }
      ],
      deep: [
        { t: { 'zh-CN': '感觉你最近挺忙的，忙完记得给自己放个假呀', 'en': "Feels like life's been busy on your end — hope you're getting a breather." },
          w: { 'zh-CN': '体贴而不粘人，表达关心的同时给足对方空间。', 'en': 'Shows care without pressure and leaves space to respond anytime.' } },
        { t: { 'zh-CN': '你上次说的那件事我想了想，还挺有意思的，后来呢？', 'en': 'I kept thinking about that thing you mentioned — how did it turn out?' },
          w: { 'zh-CN': '呼应之前的对话，证明你有认真听，重启也更自然。', 'en': 'Calls back an earlier thread, proving you actually listened.' } }
      ],
      direct: [
        { t: { 'zh-CN': '感觉话题断啦，重新开机：这周有空一起喝杯东西吗？', 'en': 'Okay, rebooting this chat: free for a drink sometime this week?' },
          w: { 'zh-CN': '大方点破冷场并直接提出邀约，把线上聊天推向见面。', 'en': 'Acknowledges the stall and pivots straight to a real plan.' } },
        { t: { 'zh-CN': '不绕弯子啦，我挺想继续和你聊下去的', 'en': "No games — I'd genuinely like to keep talking with you." },
          w: { 'zh-CN': '坦诚表达意图，简单一句反而更有分量。', 'en': 'Honest and confident; one clear line carries more weight than ten hints.' } }
      ]
    } },
  { key: 'match', emoji: '✨',
    label: { 'zh-CN': '刚匹配的开场白', 'en': 'Just matched' },
    incoming: { 'zh-CN': '嗨，很高兴匹配到你 😊', 'en': 'Hey, glad we matched 😊' },
    replies: {
      flirty: [
        { t: { 'zh-CN': '在遇到你之前，我都准备卸载这个软件了😌', 'en': 'I was about to delete this app — then you showed up 😌' },
          w: { 'zh-CN': '把「匹配」本身变成一句恰到好处的恭维，起点就有温度。', 'en': 'Turns the match itself into a compliment with a wink.' } },
        { t: { 'zh-CN': '先说好，你笑起来这么好看是犯规的', 'en': 'Fair warning: that smile of yours feels like cheating.' },
          w: { 'zh-CN': '夸到具体细节，比一句「你好漂亮」真诚得多。', 'en': "A specific, playful compliment — warmer than a generic 'hey'." } }
      ],
      casual: [
        { t: { 'zh-CN': '哈喽！看到你也喜欢旅行，最近去过最喜欢的地方是哪？', 'en': 'Hey! Fellow travel person — best place you have been lately?' },
          w: { 'zh-CN': '从资料里的共同点切入，再附一个好回答的问题。', 'en': 'Opens with a shared interest and an easy, fun question.' } },
        { t: { 'zh-CN': '嗨，很高兴匹配到你！今天过得怎么样？', 'en': "Hi, happy we matched! How's your day going so far?" },
          w: { 'zh-CN': '简单友好零压力，适合先摸清对方的聊天节奏。', 'en': 'Friendly and zero-pressure — a soft way to find their rhythm.' } }
      ],
      funny: [
        { t: { 'zh-CN': '系统说我们匹配了，它一般不会错，我们最好别辜负它', 'en': "The algorithm says we're a match, and it's rarely wrong. Best not to disappoint it." },
          w: { 'zh-CN': '借「算法」抖个包袱，一句话立住幽默人设。', 'en': 'A light meta-joke that sets a fun tone instantly.' } },
        { t: { 'zh-CN': '重要选择题：菠萝到底该不该放在披萨上？你的答案决定一切', 'en': 'Big first question: pineapple on pizza — yes or no? Choose wisely.' },
          w: { 'zh-CN': '无厘头的小辩题最容易接话，回复门槛极低。', 'en': 'A silly debate is the easiest thing in the world to reply to.' } }
      ],
      deep: [
        { t: { 'zh-CN': '你资料里那句话我看了两遍，想听听它背后的故事', 'en': "I read that line in your bio twice — I'd love the story behind it." },
          w: { 'zh-CN': '表现出真的读了资料，好奇的是人本身而不是照片。', 'en': 'Shows you truly read their profile and care about the person.' } },
        { t: { 'zh-CN': '比起查户口式聊天，更想知道你最近在为什么开心', 'en': "Skipping the small talk: what's been making you happy lately?" },
          w: { 'zh-CN': '跳过模板问题，直接开启一段有质量的对话。', 'en': 'Sidesteps template questions and invites a real answer.' } }
      ],
      direct: [
        { t: { 'zh-CN': '你看起来很有意思，想认真认识一下你', 'en': "You seem genuinely interesting — I'd like to get to know you." },
          w: { 'zh-CN': '清晰表达好感与意图，自信本身就是吸引力。', 'en': 'Clear intent, simply said. Confidence reads as attractive.' } },
        { t: { 'zh-CN': '与其在线上聊三周，不如先好好聊几天，合拍就见一面？', 'en': "Let's chat for a few days, and if it clicks — coffee?" },
          w: { 'zh-CN': '直接给出节奏，也筛选出同样认真的人。', 'en': 'Sets an honest pace and filters for people who mean it too.' } }
      ]
    } },
  { key: 'tease', emoji: '😜',
    label: { 'zh-CN': '对方在调侃你', 'en': 'They teased you' },
    incoming: { 'zh-CN': '你照片是不是开了十级美颜哈哈', 'en': 'Be honest, how many filters are on that photo? 😏' },
    replies: {
      flirty: [
        { t: { 'zh-CN': '本人比照片好看，不信你可以当面验证😏', 'en': "The photos don't do me justice — feel free to verify in person 😏" },
          w: { 'zh-CN': '接住调侃顺势反杀，还悄悄递出了见面的钩子。', 'en': 'Absorbs the tease, flips it, and sneaks in a meet-up hook.' } },
        { t: { 'zh-CN': '美颜是给别人看的，素颜是给你留的', 'en': 'The filters are for everyone else. The real thing is reserved.' },
          w: { 'zh-CN': '把对方的玩笑接成情话，甜而不腻。', 'en': 'Turns their joke into a flirt without missing a beat.' } }
      ],
      casual: [
        { t: { 'zh-CN': '哈哈就调了个亮度，本人出场自带打光', 'en': 'Haha just the brightness — I come with built-in good lighting.' },
          w: { 'zh-CN': '轻松承认又轻松自夸，不较真也不辩解。', 'en': 'Takes the joke in stride: no defensiveness, no over-explaining.' } },
        { t: { 'zh-CN': '哈哈拍照技术好而已，你那张咖啡店的也拍得不错啊', 'en': 'Haha decent camera skills, that is all. Your café shot is pretty good too.' },
          w: { 'zh-CN': '接住玩笑后，自然把话题引回对方身上。', 'en': 'Deflects lightly, then hands the spotlight back to them.' } }
      ],
      funny: [
        { t: { 'zh-CN': '十级不至于，九级半吧，做人要诚实', 'en': "Ten filters? Please. Nine and a half — I'm an honest person." },
          w: { 'zh-CN': '顺着梗夸张自黑，比急着反驳高明得多。', 'en': 'Leans into the joke instead of fighting it — instantly disarming.' } },
        { t: { 'zh-CN': '嘘，再问下去我的证件照都要连夜跑路了', 'en': 'Shh, keep asking and even my passport photo will flee the country.' },
          w: { 'zh-CN': '荒诞化处理，把调侃变成两个人共享的喜剧。', 'en': "Escalates the absurdity, turning their tease into a shared bit." } }
      ],
      deep: [
        { t: { 'zh-CN': '哈哈其实我不太上镜，真实的我更多藏在说话方式里', 'en': "Haha honestly, cameras and I aren't close — the real me shows up in conversation." },
          w: { 'zh-CN': '幽默过后来点真诚，展示照片以外的自己。', 'en': 'Meets the tease with warmth and steers toward something real.' } },
        { t: { 'zh-CN': '照片只能算预告片，正片得慢慢看', 'en': 'Photos are just the trailer. The full film takes time.' },
          w: { 'zh-CN': '用一个比喻既接了梗，又暗示自己值得深入了解。', 'en': "A playful metaphor that hints there's more worth knowing." } }
      ],
      direct: [
        { t: { 'zh-CN': '有没有美颜，见一面不就知道了？', 'en': 'Only one way to settle the filter debate: see for yourself.' },
          w: { 'zh-CN': '把对方的调侃当跳板，直接推进到见面。', 'en': 'Uses their tease as a springboard straight to a date.' } },
        { t: { 'zh-CN': '放心，真人不翻车，敢不敢约个时间验证一下', 'en': 'I stand by the real thing. Dare you to fact-check me over coffee.' },
          w: { 'zh-CN': '自信应战式回应，把玩笑变成一次轻松的邀约。', 'en': 'Confident, playful, and it converts banter into a plan.' } }
      ]
    } },
  { key: 'date', emoji: '📅',
    label: { 'zh-CN': '约第一次见面', 'en': 'Planning the first date' },
    incoming: { 'zh-CN': '周末我还没安排，你呢？', 'en': "I've got no plans this weekend yet, what about you?" },
    replies: {
      flirty: [
        { t: { 'zh-CN': '我的安排就是想办法出现在你的安排里😏', 'en': 'My plan was mostly to end up in yours 😏' },
          w: { 'zh-CN': '读懂对方递来的信号，用一句撩人的话稳稳接住。', 'en': 'Reads their opening for what it is and answers with charm.' } },
        { t: { 'zh-CN': '巧了，我周末的空位正好想留给一个有趣的人', 'en': 'Funny — I was saving my weekend for someone interesting.' },
          w: { 'zh-CN': '留白式调情，引导对方主动对号入座。', 'en': 'A teasing blank that invites them to claim the spot.' } }
      ],
      casual: [
        { t: { 'zh-CN': '我也还没定，要不要一起去逛那个周末市集？', 'en': 'Same here — want to check out that weekend market together?' },
          w: { 'zh-CN': '顺着话头给出具体、低压力的活动提议。', 'en': 'Picks up their cue with a concrete, low-pressure plan.' } },
        { t: { 'zh-CN': '打算找家咖啡店坐坐，你要是没事就一起呀', 'en': "I was thinking of trying a café — join me if you're free." },
          w: { 'zh-CN': '随口一提的邀约方式，进可攻退可守。', 'en': 'Casual enough that yes is easy and no is graceful.' } }
      ],
      funny: [
        { t: { 'zh-CN': '我的周末计划：百分之八十取决于你接下来这句话', 'en': 'My weekend plan is 80% dependent on your next message.' },
          w: { 'zh-CN': '把邀约包装成段子，压力小但意图明确。', 'en': 'Wraps the ask in a joke — light delivery, clear intent.' } },
        { t: { 'zh-CN': '正在纠结：睡懒觉，还是和一个网友奔现。在线等，挺急的', 'en': 'Currently torn between sleeping in and meeting an internet stranger. Advice?' },
          w: { 'zh-CN': '自嘲「网友奔现」的梗，让见面话题变得轻松好接。', 'en': 'Makes the first-meet topic funny and easy to say yes to.' } }
      ],
      deep: [
        { t: { 'zh-CN': '聊了这么久，感觉见面聊会比打字更有意思，你觉得呢？', 'en': "We've talked enough that I think in person would be even better. What do you think?" },
          w: { 'zh-CN': '真诚说出关系的自然进展，同时尊重对方的节奏。', 'en': 'Names the natural next step and still asks, not assumes.' } },
        { t: { 'zh-CN': '想找个安静点的地方，认真听你讲讲那些故事', 'en': "I'd love somewhere quiet where I can actually hear your stories." },
          w: { 'zh-CN': '把邀约落在「想更了解你」上，走心而不套路。', 'en': 'Frames the date around knowing them better — sincere, not scripted.' } }
      ],
      direct: [
        { t: { 'zh-CN': '那就周六下午见一面吧，我知道一家不错的咖啡店', 'en': 'Saturday afternoon, then. I know a great coffee place.' },
          w: { 'zh-CN': '给出明确的时间和地点，让对方只需要说「好」。', 'en': 'Time, place, done — all they have to say is yes.' } },
        { t: { 'zh-CN': '周日我请你吃饭，你只负责挑口味', 'en': 'Dinner Sunday, my treat — you just pick the cuisine.' },
          w: { 'zh-CN': '主动扛起安排，只留一个最简单的选择给对方。', 'en': 'Takes charge of the plan and leaves them the easiest choice.' } }
      ]
    } }
];
let activeScenario = 'read';
let pgStyle = 'flirty';

// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navTry: '在线体验', navFeatures: '功能特色', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    eyeHow: '使用流程', eyeTry: '上手体验', eyeFeatures: '功能特色', eyePersonas: '使用场景', eyeShots: '界面预览', eyeAnatomy: '方法论', eyeCompare: '对比一下', eyeFaq: '答疑解惑',
    heroEyebrow: '✦ AI 约会对话助手',
    heroTitle: '让 AI 帮你<span class="highlight">接住每一句话</span>',
    heroSubtitle: '粘贴对方的消息，选一种风格，立刻拿到多条自然、走心又有分寸的回复。',
    downloadBtn: 'App Store 下载', learnMore: '看看怎么用',
    trust1: '🔒 对话不外传', trust2: '💬 5 种回复风格', trust3: '🌏 中英双语',
    demoTitle: '对话助手', demoLive: 'AI 在线',
    demoIncoming0: '周末有什么安排呀？', demoReply0: '正好空着，就看有没有有趣的邀约啦',
    demoIncoming: '哈哈你今天怎么这么有空？', demoPick: '选择回复风格',
    chipA: '✨ AI 生成', chipB: '👉 点一点试试',
    proofRating: '生活方式 · 社交',
    stat1: '种回复风格', stat2: '隐私本地', stat3: '双语界面', stat4: '广告 · 追踪',
    howTitle: '三步开启完美对话', howSub: '不知道怎么回？把它交给 AI。',
    step1Title: '粘贴对方的消息', step1Desc: '把对方发来的那句话复制粘贴进来，长短都行。',
    step2Title: '选择回复风格', step2Desc: '调情、随意、幽默、深度还是直接？一键切换语气。',
    step3Title: '获得智能回复', step3Desc: 'AI 一次给出多条可用回复，还告诉你为什么这样说更好。',
    tryTitle: '拿一个真实场景试试', trySub: '选一个场景，再挑一种风格，看看 AI 会怎么接。',
    pgIncoming: '对方发来', pgPick: '选择回复风格', pgWhyLabel: '为什么好：', pgCopy: '复制', pgCopied: '已复制 ✓',
    featuresTitle: '强大功能，助你聊得更自在', featuresSub: '从破冰到深聊，每一句都更有把握。',
    feature1Title: '5 种回复风格', feature1Desc: '调情、随意、幽默、深度、直接，一键切换语气，贴合当下的心情与场景。',
    feature2Title: '每条都有理由', feature2Desc: '不只给回复，还解释「为什么这样说更好」，顺便附上可参考的改写建议。',
    feature3Title: '对话助手多轮聊', feature3Desc: '进入对话助手模式，AI 记住上下文，边聊边给建议，把一整段对话带下去。',
    feature4Title: '一键复制即用', feature4Desc: '看到满意的那条，轻点复制，直接粘到聊天窗口发出去，毫不费力。',
    feature5Title: 'AI 智能生成', feature5Desc: '读懂对方消息里的语气和潜台词，为你量身定制专属回复，而不是生硬模板。',
    feature6Title: '隐私优先', feature6Desc: '无需注册账号，对话只用于生成回复，绝不出售或用于广告，历史随时删除。',
    personasTitle: '这些时刻，正好用得上', personasSub: '对号入座，每一种卡壳都有对应的风格解法。',
    persona1T: '反复措辞型', persona1D: '打了又删，删了又打，五条草稿一条没发。', persona1C: '深度风格',
    persona2T: '破冰新手', persona2D: '刚匹配上，输入框却一片空白。', persona2C: '调情风格',
    persona3T: '线上冷场型', persona3D: '见面很逗，打字却总是很干。', persona3C: '幽默风格',
    persona4T: '行动派', persona4D: '想把聊天推进成一次真正的见面。', persona4C: '直接风格',
    screenshotsTitle: '应用界面预览', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: '一次给出多条回复建议', shot2: '每条都解释为什么这样说', shot3: '对话助手，边聊边给建议', shot4: '随时切换回复风格',
    anatomyTitle: '一条好回复，好在哪里', anatomySub: '拆开看一条 AI 生成的回复，每个细节都有讲究。',
    anTag: 'AI 回复',
    anIn: '这周好累，感觉时间都不够用了…',
    anOut: '「时间不够用」恰恰说明你把日子过得很满呀。周末给自己留一个什么都不排的晚上——到时候跟我讲讲，你最近都在为什么忙？',
    an1T: '接住对方的语气', an1D: '先共情再接话，和对方保持同一频率，不生硬转折。',
    an2T: '呼应对方的原话', an2D: '重复「时间不够用」，让对方感到被认真听见。',
    an3T: '长度刚好，自信不讨好', an3D: '两三句话说完，不刷屏、也不敷衍。',
    an4T: '留一个轻松的接话点', an4D: '结尾一个好回答的问题，把话题稳稳递回去。',
    privacyTitle: '你的对话，只属于你', privacyDesc: '无需账号即可使用，聊天内容只用于生成回复，绝不出售、也绝不用于广告。',
    pp1: '不出售你的数据', pp2: '随时删除历史', pp3: '无广告 · 无追踪', pp4: '无需注册账号',
    cmpTitle: '为什么不干脆自己想？', cmpSub: '对比一下就知道——每一行都对应应用里的真实功能。',
    cmpColSelf: '自己硬想', cmpColGroup: '发到群里求助', cmpColApp: 'AI约会助手',
    cmpR1: '秒出多条回复', cmpR2: '贴合对方语气', cmpR3: '每条都有理由', cmpR4: '记住对话上下文', cmpR5: '完全私密',
    faqTitle: '常见问题',
    q1: '回复是怎么生成的？', a1: 'AI 会读懂你粘贴的对方消息，再结合你选择的回复风格，一次生成多条可直接使用的回复，每条还会说明它为什么合适。',
    q2: '我的聊天记录会被保存或分享吗？', a2: '对话内容只用于当次生成回复，绝不会出售或分享给第三方，也不会用于广告。你可以随时在应用内删除历史记录。',
    q3: '支持哪些回复风格？', a3: '内置调情、随意、幽默、深度、直接五种风格，覆盖从破冰、日常到深聊的各种约会场景。',
    q4: '需要注册或付费吗？', a4: '无需注册账号即可使用，应用可免费下载。',
    q5: '支持哪些系统和语言？', a5: '应用运行于 iOS，界面同时支持简体中文与英文。',
    downloadTitle: '立即下载 AI约会助手', downloadSubtitle: '让 AI 成为你的约会伙伴，开启更精彩的对话。', downloadNote: '免费下载 · 需要 iOS 系统',
    footerRights: 'AI约会助手. 保留所有权利。', footerMadeBy: '由 WeiProduct 打造', footerContact: '联系我们',
    footerHelp: '帮助中心', footerPrivacy: '隐私政策', footerTerms: '服务条款',
    footTagline: '让 AI 帮你接住每一句话。', footProduct: '产品', footSupport: '支持', footPrefs: '偏好设置',
    stickySub: 'AI 约会回复 · 免费', stickyGet: '获取'
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navTry: 'Try it live', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    eyeHow: 'How it works', eyeTry: 'Try it live', eyeFeatures: 'Features', eyePersonas: 'Made for you', eyeShots: 'Preview', eyeAnatomy: 'The method', eyeCompare: 'Compare', eyeFaq: 'FAQ',
    heroEyebrow: '✦ AI dating reply assistant',
    heroTitle: 'Let AI help you <span class="highlight">nail every reply</span>',
    heroSubtitle: 'Paste their message, pick a vibe, and get several natural, on-point replies in seconds.',
    downloadBtn: 'Download on App Store', learnMore: 'See how it works',
    trust1: '🔒 Chats stay private', trust2: '💬 5 reply styles', trust3: '🌏 EN / 中文',
    demoTitle: 'Conversation Assistant', demoLive: 'AI online',
    demoIncoming0: 'Any plans this weekend?', demoReply0: 'Wide open — just waiting for a fun invite',
    demoIncoming: 'Haha, how come you are so free today?', demoPick: 'Pick a reply style',
    chipA: '✨ AI generated', chipB: '👉 Give it a tap',
    proofRating: 'Lifestyle · Social',
    stat1: 'Reply styles', stat2: 'Private', stat3: 'Bilingual', stat4: 'Ads · Tracking',
    howTitle: 'A great reply in three steps', howSub: "Not sure what to say? Let AI handle it.",
    step1Title: 'Paste their message', step1Desc: 'Copy in whatever they just sent you — short or long, it all works.',
    step2Title: 'Pick a reply style', step2Desc: 'Flirty, casual, funny, deep, or direct? Switch the tone with one tap.',
    step3Title: 'Get smart replies', step3Desc: 'AI gives you several ready-to-send options and explains why each one lands.',
    tryTitle: 'Try it on a real situation', trySub: 'Pick a scenario, pick a vibe, and see how AI handles it.',
    pgIncoming: 'They sent', pgPick: 'Pick a reply style', pgWhyLabel: 'Why it works: ', pgCopy: 'Copy', pgCopied: 'Copied ✓',
    featuresTitle: 'Powerful features for easier chats', featuresSub: 'From the first hello to the deep talks — feel sure of every line.',
    feature1Title: '5 reply styles', feature1Desc: 'Flirty, casual, funny, deep, and direct — switch tone with a tap to fit the mood and moment.',
    feature2Title: 'Every reply, explained', feature2Desc: 'It gives more than a reply — it tells you why it works and adds tips you can tweak.',
    feature3Title: 'Multi-turn assistant', feature3Desc: 'Enter Conversation Assistant mode: AI remembers the context and coaches you line by line.',
    feature4Title: 'One-tap copy', feature4Desc: 'Love one of the options? Tap to copy and paste it straight into your chat — effortless.',
    feature5Title: 'AI-generated', feature5Desc: 'It reads the tone and subtext of their message to craft replies made for you — never canned templates.',
    feature6Title: 'Privacy first', feature6Desc: 'No account needed; chats are used only to generate replies, never sold or used for ads, and deletable anytime.',
    personasTitle: 'Made for these moments', personasSub: 'Find yourself here — every stuck moment has a style that fits.',
    persona1T: 'The overthinker', persona1D: 'Drafts five replies, sends none of them.', persona1C: 'Deep style',
    persona2T: 'The ice-breaker', persona2D: 'Just matched — and the text box is blank.', persona2C: 'Flirty style',
    persona3T: 'The dry-texter', persona3D: 'Hilarious in person, flat over text.', persona3C: 'Funny style',
    persona4T: 'The mover', persona4D: 'Ready to turn the chat into an actual date.', persona4C: 'Direct style',
    screenshotsTitle: 'App preview', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'Several reply options at once', shot2: 'Each one explains why it works', shot3: 'Assistant coaches as you chat', shot4: 'Switch reply style anytime',
    anatomyTitle: 'What makes a reply land', anatomySub: 'Take one AI-crafted reply apart — every detail is deliberate.',
    anTag: 'AI reply',
    anIn: "This week wore me out — never enough hours in the day…",
    anOut: "'Never enough hours' just means your days are full ones. Save one unplanned evening this weekend — and then tell me, what's been keeping you so busy?",
    an1T: 'Matches their energy', an1D: 'It meets their mood first — same frequency, no tone-deaf pivot.',
    an2T: 'Calls back their exact words', an2D: "Echoing 'never enough hours' shows you actually listened.",
    an3T: 'Right length — confident, not needy', an3D: 'A few lines. No essay, no one-word brush-off.',
    an4T: 'Ends with an easy next step', an4D: 'A light closing question hands the conversation right back.',
    privacyTitle: 'Your conversations stay yours', privacyDesc: 'No account required. Your chats are used only to generate replies — never sold, never used for ads.',
    pp1: 'Never sold', pp2: 'Delete history anytime', pp3: 'No ads or tracking', pp4: 'No account needed',
    cmpTitle: 'Why not just wing it?', cmpSub: 'See for yourself — every row maps to a real feature in the app.',
    cmpColSelf: 'Staring at the keyboard', cmpColGroup: 'Asking the group chat', cmpColApp: 'AI Dating Chat',
    cmpR1: 'Reply in seconds', cmpR2: 'Tone-matched to their message', cmpR3: 'Explains why it works', cmpR4: 'Remembers the context', cmpR5: 'Stays 100% private',
    faqTitle: 'Frequently Asked Questions',
    q1: 'How are the replies generated?', a1: 'AI reads the message you paste in, combines it with the reply style you pick, and generates several ready-to-use replies at once — each with a note on why it fits.',
    q2: 'Is my chat saved or shared?', a2: 'Your chat is used only to generate that reply. It is never sold or shared with third parties, and never used for ads. You can delete your history anytime in the app.',
    q3: 'Which reply styles are supported?', a3: 'Five built-in styles — flirty, casual, funny, deep, and direct — covering everything from breaking the ice to deeper conversations.',
    q4: 'Do I need to register or pay?', a4: 'No account is required, and the app is free to download.',
    q5: 'Which platforms and languages are supported?', a5: 'The app runs on iOS, with an interface available in both Simplified Chinese and English.',
    downloadTitle: 'Download AI Dating Chat now', downloadSubtitle: 'Let AI be your dating wingman and spark better conversations.', downloadNote: 'Free download · Requires iOS',
    footerRights: 'AI Dating Chat. All rights reserved.', footerMadeBy: 'Built by WeiProduct', footerContact: 'Contact',
    footerHelp: 'Help Center', footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Service',
    footTagline: 'Let AI help you nail every reply.', footProduct: 'Product', footSupport: 'Support', footPrefs: 'Preferences',
    stickySub: 'AI dating replies · Free', stickyGet: 'Get'
  }
};

let currentLang = 'zh-CN';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'zh-CN';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] === undefined) return;
    if (el.getAttribute('data-i18n-html') === '1') el.innerHTML = t[k];
    else el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-switch').forEach(b => { b.textContent = currentLang === 'zh-CN' ? 'EN' : '中文'; });
  renderChips();
  renderDemo();
  renderPlayground();
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Interactive demo =====
function renderChips() {
  const row = document.getElementById('styleChips');
  if (!row) return;
  row.innerHTML = '';
  STYLES.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'style-chip' + (s.key === activeStyle ? ' active' : '');
    b.setAttribute('data-style', s.key);
    b.innerHTML = '<span aria-hidden="true">' + s.emoji + '</span><span>' + s.name[currentLang] + '</span>';
    b.addEventListener('click', () => {
      activeStyle = s.key;
      row.querySelectorAll('.style-chip').forEach(c => c.classList.toggle('active', c === b));
      renderDemo(true);
    });
    row.appendChild(b);
  });
}

function renderDemo(animate) {
  const s = STYLES.find(x => x.key === activeStyle) || STYLES[0];
  const reply = document.getElementById('demoReply');
  const name = document.getElementById('demoStyleName');
  const emoji = document.getElementById('demoEmoji');
  if (name) name.textContent = s.name[currentLang];
  if (emoji) emoji.textContent = s.emoji;
  if (reply) {
    reply.textContent = s.reply[currentLang];
    if (animate) {
      reply.classList.remove('swap');
      void reply.offsetWidth;
      reply.classList.add('swap');
    }
  }
}

// ===== Scenario playground =====
function copyReply(text, btn) {
  const t = I18N[currentLang];
  const done = () => {
    btn.textContent = t.pgCopied;
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = t.pgCopy; btn.classList.remove('copied'); }, 1600);
  };
  const fallback = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch (e) {}
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else {
    fallback();
  }
}

function renderPlayground(animate) {
  const scRow = document.getElementById('pgScenarios');
  const stRow = document.getElementById('pgStyleChips');
  const inBubble = document.getElementById('pgIncomingBubble');
  const wrap = document.getElementById('pgReplies');
  if (!scRow || !stRow || !inBubble || !wrap) return;
  const t = I18N[currentLang];
  const sc = SCENARIOS.find(s => s.key === activeScenario) || SCENARIOS[0];
  const st = STYLES.find(s => s.key === pgStyle) || STYLES[0];

  scRow.innerHTML = '';
  SCENARIOS.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'style-chip scene-chip' + (s.key === activeScenario ? ' active' : '');
    b.innerHTML = '<span aria-hidden="true">' + s.emoji + '</span><span></span>';
    b.lastChild.textContent = s.label[currentLang];
    b.addEventListener('click', () => { activeScenario = s.key; renderPlayground(true); });
    scRow.appendChild(b);
  });

  stRow.innerHTML = '';
  STYLES.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'style-chip' + (s.key === pgStyle ? ' active' : '');
    b.innerHTML = '<span aria-hidden="true">' + s.emoji + '</span><span></span>';
    b.lastChild.textContent = s.name[currentLang];
    b.addEventListener('click', () => { pgStyle = s.key; renderPlayground(true); });
    stRow.appendChild(b);
  });

  inBubble.textContent = sc.incoming[currentLang];

  wrap.innerHTML = '';
  (sc.replies[st.key] || []).forEach(r => {
    const card = document.createElement('div');
    card.className = 'pg-reply-card';

    const head = document.createElement('div');
    head.className = 'pg-card-head';
    const tag = document.createElement('span');
    tag.className = 'reply-style';
    tag.innerHTML = '<span class="rs-emoji" aria-hidden="true"></span><span></span>';
    tag.firstChild.textContent = st.emoji;
    tag.lastChild.textContent = st.name[currentLang];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pg-copy';
    btn.textContent = t.pgCopy;
    btn.addEventListener('click', () => copyReply(r.t[currentLang], btn));
    head.appendChild(tag);
    head.appendChild(btn);

    const bubble = document.createElement('div');
    bubble.className = 'bubble bubble-out' + (animate ? ' swap' : '');
    bubble.textContent = r.t[currentLang];

    const why = document.createElement('p');
    why.className = 'pg-why';
    const strong = document.createElement('strong');
    strong.textContent = t.pgWhyLabel;
    why.appendChild(strong);
    why.appendChild(document.createTextNode(r.w[currentLang]));

    card.appendChild(head);
    card.appendChild(bubble);
    card.appendChild(why);
    wrap.appendChild(card);
  });
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0C0C12' : '#667eea');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const bar = document.getElementById('progressBar');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  document.querySelectorAll('.lang-switch').forEach(b => {
    b.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  });
  [document.getElementById('themeToggle'), document.getElementById('footerThemeToggle')].forEach(btn => {
    if (btn) btn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
