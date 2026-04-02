import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/데스크탑복사/svg-wcom07ex0g";
import heroBg from "figma:asset/96ae70cbe7704fabab0a24e07eebb6c76a9d3b5d.png";
import heroImg from "figma:asset/2cf1b7f411cfe9894023b339a7539ca73afd4f91.png";

// ─── Logo SVG ───────────────────────────────────────────────
function LogoSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 60.1335 53.563">
      <path d={svgPaths.p336a9900} fill="#3232C8" />
      <path d={svgPaths.p1207d7c0} fill="#99BC42" />
      <path d={svgPaths.p17c2da00} fill="#5CB1E0" />
      <path d={svgPaths.p12efa500} fill="#000064" />
    </svg>
  );
}

// ─── Arrow Icon ──────────────────────────────────────────────
function ArrowIcon({ color = "#000064", className = "" }: { color?: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16.56 16.56" width="16" height="16">
      <path d={svgPaths.p35969670} fill={color} />
    </svg>
  );
}

// ─── Hamburger Icon ──────────────────────────────────────────
function HamburgerIcon() {
  return (
    <svg fill="none" viewBox="0 0 36.75 32.6667" width="22" height="22">
      <path d={svgPaths.p1ee95480} fill="black" />
    </svg>
  );
}

// ─── Header ─────────────────────────────────────────────────
function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header
      className="bg-white sticky top-0 z-50 w-full border-b border-gray-100 shadow-sm"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoSvg className="w-[40px] h-[36px] sm:w-[48px] sm:h-[43px]" />
          <div className="flex flex-col">
            <span className="text-[7px] text-[#515151] font-light tracking-wide">HYEAN FOUNDATION</span>
            <span className="text-[22px] sm:text-[28px] text-[#000064] font-semibold leading-none">혜안재단</span>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="bg-[#000064] text-white text-[11px] sm:text-[12px] font-semibold flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-[#00004a] transition-colors">
            <svg fill="none" viewBox="0 0 19.0133 13.7503" className="w-[14px] h-[10px]">
              <path d={svgPaths.p1f2435f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p3428f740} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className="hidden sm:inline">장학금 신청하기</span>
            <span className="sm:hidden">신청</span>
            <svg fill="none" viewBox="0 0 8.89 10.64" className="w-[8px] h-[10px] rotate-90">
              <path d={svgPaths.p242b10f0} fill="white" />
            </svg>
          </button>
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Mobile Nav Drawer ───────────────────────────────────────
function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navItems = ["재단소개", "인재상", "주요사업", "소식과��지", "장학금신청"];
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 shadow-2xl ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="text-[#000064] font-semibold text-lg">메뉴</span>
          <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-800">✕</button>
        </div>
        <nav className="p-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={onClose}
              className="w-full text-left px-4 py-3 text-[#515151] hover:bg-[#f5f5ff] hover:text-[#3232c8] rounded-lg transition-colors font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="p-4">
          <button className="w-full bg-[#000064] text-white font-semibold py-3 rounded-full hover:bg-[#00004a] transition-colors">
            장학금 신청하기
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Hero Section ────────────────────────────────────────────
const heroSlides = [
  {
    tag: "Wise Insight",
    title1: "통찰의 혜안으로",
    title2: "미래를 밝히다",
    desc: "깊은 통찰력을 바탕으로 차세대 인재들의 앞날을 환하게 비춥니다.",
  },
  {
    tag: "Innovation",
    title1: "혁신의 도전으로",
    title2: "세상을 바꾸다",
    desc: "반도체 산업의 정밀함과 혁신 정신을 바탕으로 미래 기술 인재를 키웁니다.",
  },
  {
    tag: "Together",
    title1: "따뜻한 나눔으로",
    title2: "함께 성장하다",
    desc: "기술 발전과 함께 따뜻한 나눔의 가치를 실현하며 사회적 가치를 창출합니다.",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 4000);
  };

  useEffect(() => {
    if (playing) startAutoplay();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing]);

  const prev = () => { setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length); startAutoplay(); };
  const next = () => { setCurrent((c) => (c + 1) % heroSlides.length); startAutoplay(); };

  const slide = heroSlides[current];

  return (
    <section
      className="relative w-full overflow-hidden rounded-b-[24px] sm:rounded-b-[32px]"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center gap-6 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-5 sm:gap-7 min-w-0">
          <div className="inline-flex">
            <span className="bg-[#69bc42] text-white text-[13px] sm:text-[16px] font-medium px-3 py-1.5 rounded-sm">
              {slide.tag}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-[32px] sm:text-[48px] lg:text-[56px] font-bold text-[#515151] leading-tight">
              {slide.title1}
            </p>
            <p className="text-[32px] sm:text-[48px] lg:text-[56px] font-bold text-[#69bc42] leading-tight">
              {slide.title2}
            </p>
          </div>
          <p className="text-[14px] sm:text-[16px] text-[#515151] font-medium leading-relaxed max-w-[400px]">
            {slide.desc}
          </p>
        </div>
        {/* Image */}
        <div className="flex-shrink-0 w-[200px] sm:w-[260px] lg:w-[300px]">
          <img src={heroImg} alt="혜안재단" className="w-full h-auto object-contain" />
        </div>
      </div>
      {/* Controls */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 pb-6 flex items-center gap-5">
        <span className="text-[14px] font-medium text-black w-6 text-center">{String(current + 1).padStart(2, "0")}</span>
        <div className="relative w-[100px] sm:w-[130px] h-[4px] bg-[#adadad] rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-[#515151] rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / heroSlides.length) * 100}%` }}
          />
        </div>
        <span className="text-[14px] font-medium text-[#adadad]">{String(heroSlides.length).padStart(2, "0")}</span>
        <div className="flex items-center gap-2 ml-2">
          <button onClick={prev} className="text-[#adadad] hover:text-black transition-colors text-[16px] font-medium px-1">{"<"}</button>
          <button
            onClick={() => setPlaying(!playing)}
            className="text-[9px] text-black font-medium w-[12px] text-center"
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button onClick={next} className="text-black hover:text-[#515151] transition-colors text-[16px] font-medium px-1">{">"}</button>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────
function AboutSection() {
  const cards = [
    {
      title: "따뜻한 나눔",
      desc: "기술 발전과 함께 따뜻한 나눔의 가치를 실현하며, 지속 가능한 사회적 가치를 창출합니다.",
      icon: (
        <svg fill="none" viewBox="0 0 45.16 37.94" className="w-[36px] h-[30px]">
          <path d={svgPaths.p1ef47880} fill="#515151" />
          <path d={svgPaths.pd917680} fill="#515151" />
        </svg>
      ),
    },
    {
      title: "혁신의 정신",
      desc: "반도체 산업의 정밀함과 혁신 정신을 바탕으로 미래 기술 인재를 발굴하고 육성합니다.",
      icon: (
        <svg fill="none" viewBox="0 0 80 84.28" className="w-[28px] h-[32px]">
          <path d={svgPaths.p162df6f0} fill="#515151" />
        </svg>
      ),
    },
    {
      title: "미래 인재 양성",
      desc: "우수한 인재들이 꿈을 펼칠 수 있도록 체계적인 장학 프로그램과 교육기회를 제공합니다.",
      icon: (
        <svg fill="none" viewBox="0 0 80 50" className="w-[36px] h-[24px]">
          <path d={svgPaths.p165ca500} stroke="#515151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="w-full"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-10 sm:py-12 lg:py-14">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-[#3232c8] text-[14px] sm:text-[16px] font-medium mb-2">About Foundation</p>
          <h2 className="text-[28px] sm:text-[36px] text-black font-semibold">혜안재단 소개</h2>
          <p className="text-[#515151] text-[14px] sm:text-[16px] font-medium mt-3">배움의 기회를 넓혀, 인재의 가능성을 키웁니다.</p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-[#adadad] rounded-lg p-5 sm:p-6 flex flex-col gap-6 min-h-[180px] sm:min-h-[216px] justify-center"
            >
              <div className="w-[48px] h-[48px] bg-[#e6e6e6] rounded flex items-center justify-center">
                {card.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-black">{card.title}</h3>
                <p className="text-[13px] sm:text-[15px] text-[#515151] font-medium leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Ideal Talent Section ─────────────────────────────────────
function IdealTalentSection() {
  return (
    <section
      className="w-full"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <p className="text-[#3232c8] text-[14px] sm:text-[16px] font-medium mb-2">Our Ideal Talent</p>
            <h2 className="text-[28px] sm:text-[36px] text-black font-semibold">재단이 추구하는 인재상</h2>
            <p className="text-[#515151] text-[14px] sm:text-[16px] font-medium mt-3">미래를 이끌어갈 핵심 가치를 갖춘 인재를 육성합니다.</p>
          </div>
          <button className="flex items-center gap-2 border border-[#000064] text-[#000064] text-[14px] sm:text-[16px] font-medium px-5 py-2.5 rounded-full hover:bg-[#f5f5ff] transition-colors whitespace-nowrap self-start sm:self-auto">
            인재상 자세히보기
            <svg fill="none" viewBox="0 0 8.89 10.64" className="w-[8px] h-[10px] rotate-90">
              <path d={svgPaths.p242b10f0} fill="#000064" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Programs Section ────────────────────────────────────────
const programs = [
  {
    title: "미래인재장학사업",
    desc: "우수한 학생들에게 장학금을 지원하여 학업에 전념할 수 있는 환경을 조성합니다",
    icon: (
      <svg fill="none" viewBox="0 0 80 60" className="w-[56px] h-[44px]">
        <path d={svgPaths.p165ca500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" />
        <g transform="translate(19, 28)">
          <path d={svgPaths.p3a2b9100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" />
        </g>
      </svg>
    ),
  },
  {
    title: "희망장학사업",
    desc: "잠재력을 개발하고 미래 역량을 키울 수 있는 다양한 프로그램을 운영합니다",
    icon: (
      <svg fill="none" viewBox="0 0 80 84.28" className="w-[48px] h-[56px]">
        <path d={svgPaths.p162df6f0} fill="black" />
      </svg>
    ),
  },
  {
    title: "연구학술지원사업",
    desc: "혁신적인 연구 활동을 지원하여 과학기술 발전에 기여합니다",
    icon: (
      <svg fill="none" viewBox="0 0 96 96" className="w-[56px] h-[56px]">
        <ellipse cx="48" cy="48" rx="23" ry="47" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="48" cy="48" rx="47" ry="12.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="48" cy="48" r="5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "나눔문화확산사업",
    desc: "나눔과 봉사의 가치를 확산하여 더 나은 사회를 만들어갑니다",
    icon: (
      <svg fill="none" viewBox="0 0 45.16 37.94" className="w-[52px] h-[44px]">
        <path d={svgPaths.p1ef47880} fill="black" />
        <path d={svgPaths.pd917680} fill="black" />
      </svg>
    ),
  },
];

function ProgramsSection() {
  return (
    <section
      className="w-full bg-[#f5f5ff]"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <p className="text-[#3232c8] text-[14px] sm:text-[16px] font-medium mb-2">Our Programs</p>
          <h2 className="text-[28px] sm:text-[36px] text-black font-semibold">혜안재단의 주요사업</h2>
          <p className="text-[#515151] text-[14px] sm:text-[16px] font-medium mt-3">다양한 프로그램을 통해 인재 육성과 사회 기여를 실현합니다</p>
        </div>
        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-4">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="bg-white rounded-bl-[24px] sm:rounded-bl-[32px] rounded-lg overflow-hidden min-h-[180px] sm:min-h-[229px] flex flex-row items-stretch"
            >
              <div className="flex-1 flex flex-col justify-between p-5 sm:p-7">
                <div>
                  <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#515151] mb-3">{prog.title}</h3>
                  <p className="text-[13px] sm:text-[15px] text-[#adadad] font-medium leading-relaxed">{prog.desc}</p>
                </div>
                <button className="flex items-center gap-2 text-[#000064] text-[13px] sm:text-[14px] font-semibold mt-4 hover:gap-3 transition-all">
                  내용보기
                  <ArrowIcon color="#000064" className="rotate-180 -scale-y-100 w-[14px] h-[14px]" />
                </button>
              </div>
              <div className="flex items-center justify-center px-6 py-4 opacity-80">
                {prog.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── News Section ────────────────────────────────────────────
const notices = [
  { tag: "장학", title: "2026년 (재)혜안재단 제1기 장학생 선발", date: "2026.03.24" },
  { tag: "장학", title: "2026년 (재)혜안재단 제1기 장학생 서류", date: "2026.03.17" },
  { tag: "장학", title: "2026년 (재)혜안재단 제1기 장학생 선발", date: "2026.02.20" },
];

function NewsSection() {
  return (
    <section
      className="w-full"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#3232c8] text-[14px] sm:text-[16px] font-medium mb-2">News & Notice</p>
          <h2 className="text-[28px] sm:text-[36px] text-black font-semibold">소식과 공지</h2>
          <p className="text-[#515151] text-[14px] sm:text-[16px] font-medium mt-3">재단의 새로운 소식과 공지사항을 확인하세요</p>
        </div>

        {/* 게시물 없음 박스 */}
        <div className="border border-[#adadad] rounded-lg px-4 py-3 mb-4">
          <p className="text-[#515151] text-[14px] sm:text-[16px] font-medium">게시물이 없습니다.</p>
        </div>

        {/* Notice Board */}
        <div className="bg-white border border-[#adadad] rounded-lg overflow-hidden">
          {/* Board Header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-[#adadad]">
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-black">공지사항</h3>
            <button className="flex items-center gap-1.5 text-[#000064] text-[13px] sm:text-[14px] font-semibold hover:gap-2.5 transition-all">
              더보기
              <ArrowIcon color="#000064" className="rotate-180 -scale-y-100 w-[14px] h-[14px]" />
            </button>
          </div>
          {/* Notice Items */}
          <div className="flex flex-col gap-2 p-4">
            {notices.map((notice, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#e6e6e6] text-[14px] font-medium w-3 text-center flex-shrink-0">·</span>
                <div className="flex-1 flex items-center gap-2 min-w-0">
                  <span className="bg-[#facc4d] text-white text-[12px] font-medium px-2 py-0.5 rounded-full flex-shrink-0">
                    {notice.tag}
                  </span>
                  <span className="text-[#515151] text-[13px] sm:text-[14px] font-medium truncate">
                    {notice.title}
                  </span>
                </div>
                <span className="text-[#adadad] text-[12px] sm:text-[13px] font-normal flex-shrink-0 ml-auto">
                  {notice.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quick Menu ───────────────────────────────────────────────
const quickMenuItems = [
  {
    label: "장학금 신청",
    icon: (
      <svg fill="none" viewBox="0 0 40 50" className="w-[28px] h-[36px]">
        <path d={svgPaths.p30d7fef0} fill="black" />
      </svg>
    ),
  },
  {
    label: "주요사업",
    icon: (
      <svg fill="none" viewBox="0 0 54 54" className="w-[32px] h-[32px]">
        <path d={svgPaths.p24da7c00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d="M2 27H52" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d={svgPaths.p18efb0c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d={svgPaths.p1afda380} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    ),
  },
  {
    label: "자주묻는질문",
    icon: (
      <svg fill="none" viewBox="0 0 44 54" className="w-[28px] h-[34px]">
        <path d={svgPaths.p29ab6e00} stroke="black" strokeWidth="4" />
        <path d={svgPaths.p27be7e00} stroke="black" strokeWidth="4" />
        <path d="M12 14.5H32M12 23.25H24.5" stroke="black" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "문의하기",
    icon: (
      <svg fill="none" viewBox="0 0 53.75 53.75" className="w-[32px] h-[32px]">
        <path clipRule="evenodd" d={svgPaths.p90e4c80} fill="black" fillRule="evenodd" />
      </svg>
    ),
  },
];

function QuickMenu() {
  return (
    <section
      className="w-full"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 pb-8">
        <div className="bg-[#deeff9] rounded-lg overflow-hidden">
          <div className="flex items-stretch justify-around p-4 sm:p-6 gap-2">
            {quickMenuItems.map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 flex-1 hover:scale-105 transition-transform"
              >
                <div className="bg-white rounded flex items-center justify-center w-full aspect-square max-w-[70px] sm:max-w-[80px]">
                  {item.icon}
                </div>
                <span className="text-[11px] sm:text-[13px] text-black font-normal text-center leading-tight">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="w-full bg-[#e6e6e6]"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
    >
      <div className="border-b border-[#adadad]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 py-3 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          <button className="text-black text-[13px] sm:text-[15px] font-medium hover:underline">
            개인정보처리방침
          </button>
          <button className="text-[#515151] text-[13px] sm:text-[15px] font-medium hover:underline">
            경기도교육청
          </button>
          <button className="text-[#515151] text-[13px] sm:text-[15px] font-medium hover:underline">
            국세청
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-4 flex justify-center">
        <button className="flex items-center gap-2 text-[#515151] text-[14px] sm:text-[16px] font-medium hover:text-black transition-colors">
          관련 사이트 바로가기
          <span>▼</span>
        </button>
      </div>
    </footer>
  );
}

// ─── TOP Button ───────────────────────────────────────────────
function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-4 sm:right-6 z-40 bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center text-black hover:bg-gray-100 transition-colors text-[16px] font-medium"
    >
      ↑
    </button>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <IdealTalentSection />
        <ProgramsSection />
        <NewsSection />
        <QuickMenu />
      </main>

      <Footer />
      <TopButton />
    </div>
  );
}