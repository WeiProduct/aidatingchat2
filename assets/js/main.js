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

// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navFeatures: '功能特色', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 约会对话助手',
    heroTitle: '让 AI 帮你<span class="highlight">接住每一句话</span>',
    heroSubtitle: '粘贴对方的消息，选一种风格，立刻拿到多条自然、走心又有分寸的回复。',
    downloadBtn: 'App Store 下载', learnMore: '看看怎么用',
    trust1: '🔒 对话不外传', trust2: '💬 5 种回复风格', trust3: '🌏 中英双语',
    demoTitle: '对话助手', demoLive: 'AI 在线',
    demoIncoming: '哈哈你今天怎么这么有空？', demoPick: '选择回复风格',
    chipA: '✨ AI 生成', chipB: '👉 点一点试试',
    proofRating: '生活方式 · 社交',
    stat1: '种回复风格', stat2: '隐私本地', stat3: '双语界面', stat4: '广告 · 追踪',
    howTitle: '三步开启完美对话', howSub: '不知道怎么回？把它交给 AI。',
    step1Title: '粘贴对方的消息', step1Desc: '把对方发来的那句话复制粘贴进来，长短都行。',
    step2Title: '选择回复风格', step2Desc: '调情、随意、幽默、深度还是直接？一键切换语气。',
    step3Title: '获得智能回复', step3Desc: 'AI 一次给出多条可用回复，还告诉你为什么这样说更好。',
    featuresTitle: '强大功能，助你聊得更自在', featuresSub: '从破冰到深聊，每一句都更有把握。',
    feature1Title: '5 种回复风格', feature1Desc: '调情、随意、幽默、深度、直接，一键切换语气，贴合当下的心情与场景。',
    feature2Title: '每条都有理由', feature2Desc: '不只给回复，还解释「为什么这样说更好」，顺便附上可参考的改写建议。',
    feature3Title: '对话助手多轮聊', feature3Desc: '进入对话助手模式，AI 记住上下文，边聊边给建议，把一整段对话带下去。',
    feature4Title: '一键复制即用', feature4Desc: '看到满意的那条，轻点复制，直接粘到聊天窗口发出去，毫不费力。',
    feature5Title: 'AI 智能生成', feature5Desc: '读懂对方消息里的语气和潜台词，为你量身定制专属回复，而不是生硬模板。',
    feature6Title: '隐私优先', feature6Desc: '无需注册账号，对话只用于生成回复，绝不出售或用于广告，历史随时删除。',
    screenshotsTitle: '应用界面预览', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: '一次给出多条回复建议', shot2: '每条都解释为什么这样说', shot3: '对话助手，边聊边给建议', shot4: '随时切换回复风格',
    privacyTitle: '你的对话，只属于你', privacyDesc: '无需账号即可使用，聊天内容只用于生成回复，绝不出售、也绝不用于广告。',
    pp1: '不出售你的数据', pp2: '随时删除历史', pp3: '无广告 · 无追踪', pp4: '无需注册账号',
    faqTitle: '常见问题',
    q1: '回复是怎么生成的？', a1: 'AI 会读懂你粘贴的对方消息，再结合你选择的回复风格，一次生成多条可直接使用的回复，每条还会说明它为什么合适。',
    q2: '我的聊天记录会被保存或分享吗？', a2: '对话内容只用于当次生成回复，绝不会出售或分享给第三方，也不会用于广告。你可以随时在应用内删除历史记录。',
    q3: '支持哪些回复风格？', a3: '内置调情、随意、幽默、深度、直接五种风格，覆盖从破冰、日常到深聊的各种约会场景。',
    q4: '需要注册或付费吗？', a4: '无需注册账号即可使用，应用可免费下载。',
    q5: '支持哪些系统和语言？', a5: '应用运行于 iOS，界面同时支持简体中文与英文。',
    downloadTitle: '立即下载 AI约会助手', downloadSubtitle: '让 AI 成为你的约会伙伴，开启更精彩的对话。', downloadNote: '免费下载 · 需要 iOS 系统',
    footerRights: 'AI约会助手. 保留所有权利。', footerMadeBy: '由 WeiProduct 打造', footerContact: '联系我们',
    footerHelp: '帮助中心', footerPrivacy: '隐私政策', footerTerms: '服务条款',
    stickySub: 'AI 约会回复 · 免费', stickyGet: '获取'
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ AI dating reply assistant',
    heroTitle: 'Let AI help you <span class="highlight">nail every reply</span>',
    heroSubtitle: 'Paste their message, pick a vibe, and get several natural, on-point replies in seconds.',
    downloadBtn: 'Download on App Store', learnMore: 'See how it works',
    trust1: '🔒 Chats stay private', trust2: '💬 5 reply styles', trust3: '🌏 EN / 中文',
    demoTitle: 'Conversation Assistant', demoLive: 'AI online',
    demoIncoming: 'Haha, how come you are so free today?', demoPick: 'Pick a reply style',
    chipA: '✨ AI generated', chipB: '👉 Give it a tap',
    proofRating: 'Lifestyle · Social',
    stat1: 'Reply styles', stat2: 'Private', stat3: 'Bilingual', stat4: 'Ads · Tracking',
    howTitle: 'A great reply in three steps', howSub: "Not sure what to say? Let AI handle it.",
    step1Title: 'Paste their message', step1Desc: 'Copy in whatever they just sent you — short or long, it all works.',
    step2Title: 'Pick a reply style', step2Desc: 'Flirty, casual, funny, deep, or direct? Switch the tone with one tap.',
    step3Title: 'Get smart replies', step3Desc: 'AI gives you several ready-to-send options and explains why each one lands.',
    featuresTitle: 'Powerful features for easier chats', featuresSub: 'From the first hello to the deep talks — feel sure of every line.',
    feature1Title: '5 reply styles', feature1Desc: 'Flirty, casual, funny, deep, and direct — switch tone with a tap to fit the mood and moment.',
    feature2Title: 'Every reply, explained', feature2Desc: 'It gives more than a reply — it tells you why it works and adds tips you can tweak.',
    feature3Title: 'Multi-turn assistant', feature3Desc: 'Enter Conversation Assistant mode: AI remembers the context and coaches you line by line.',
    feature4Title: 'One-tap copy', feature4Desc: 'Love one of the options? Tap to copy and paste it straight into your chat — effortless.',
    feature5Title: 'AI-generated', feature5Desc: 'It reads the tone and subtext of their message to craft replies made for you — never canned templates.',
    feature6Title: 'Privacy first', feature6Desc: 'No account needed; chats are used only to generate replies, never sold or used for ads, and deletable anytime.',
    screenshotsTitle: 'App preview', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'Several reply options at once', shot2: 'Each one explains why it works', shot3: 'Assistant coaches as you chat', shot4: 'Switch reply style anytime',
    privacyTitle: 'Your conversations stay yours', privacyDesc: 'No account required. Your chats are used only to generate replies — never sold, never used for ads.',
    pp1: 'Never sold', pp2: 'Delete history anytime', pp3: 'No ads or tracking', pp4: 'No account needed',
    faqTitle: 'Frequently Asked Questions',
    q1: 'How are the replies generated?', a1: 'AI reads the message you paste in, combines it with the reply style you pick, and generates several ready-to-use replies at once — each with a note on why it fits.',
    q2: 'Is my chat saved or shared?', a2: 'Your chat is used only to generate that reply. It is never sold or shared with third parties, and never used for ads. You can delete your history anytime in the app.',
    q3: 'Which reply styles are supported?', a3: 'Five built-in styles — flirty, casual, funny, deep, and direct — covering everything from breaking the ice to deeper conversations.',
    q4: 'Do I need to register or pay?', a4: 'No account is required, and the app is free to download.',
    q5: 'Which platforms and languages are supported?', a5: 'The app runs on iOS, with an interface available in both Simplified Chinese and English.',
    downloadTitle: 'Download AI Dating Chat now', downloadSubtitle: 'Let AI be your dating wingman and spark better conversations.', downloadNote: 'Free download · Requires iOS',
    footerRights: 'AI Dating Chat. All rights reserved.', footerMadeBy: 'Built by WeiProduct', footerContact: 'Contact',
    footerHelp: 'Help Center', footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Service',
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
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  renderChips();
  renderDemo();
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
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
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

  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

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
