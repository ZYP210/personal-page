(function () {
  "use strict";

  window.PORTFOLIO_CONFIG = {
    owner: "Zhang Yupeng",
    email: "zyp414598579@gmail.com",
    projects: [
      ["AI 知识助手", "把资料检索、引用溯源与内容生成整合为一条可信的知识工作流。", ["AI", "RAG", "PRODUCT"]],
      ["智能文档系统", "覆盖需求采集、模板编排、长文生成、编辑与多格式导出的完整生产链路。", ["DOCUMENT AI", "WORKFLOW", "UX"]],
      ["研究分析工作台", "将分散的信息、数据和结论组织成可追踪、可协作的分析空间。", ["RESEARCH", "DATA", "DASHBOARD"]],
      ["自动化工作流", "把重复操作沉淀为可靠流程，让团队把时间留给真正需要判断的工作。", ["AUTOMATION", "SYSTEM", "DELIVERY"]],
      ["产品设计系统", "以清晰的组件、规范与设计令牌支撑多端产品的一致体验。", ["DESIGN SYSTEM", "UI", "TOKENS"]],
      ["数据可视化平台", "从复杂指标中建立层级、关系和叙事，让数据更快转化为行动。", ["VISUALIZATION", "ANALYTICS", "WEB"]],
      ["开放 API 平台", "用稳定边界、清晰文档和可观测性连接内部能力与外部应用。", ["API", "PLATFORM", "OBSERVABILITY"]],
      ["移动端体验", "围绕小屏场景重构信息密度、输入效率与连续操作体验。", ["MOBILE", "INTERACTION", "PERFORMANCE"]],
      ["项目档案", "持续整理从问题定义到最终交付的关键设计决策与工程经验。", ["CASE STUDY", "PROCESS", "ARCHIVE"]],
      ["前端工程", "关注高保真实现、状态一致性、性能与长期可维护性。", ["VUE", "REACT", "WEBGL"]],
      ["系统架构", "从真实数据流和失败路径出发，设计可演进的系统边界。", ["ARCHITECTURE", "SERVICE", "DATA"]],
      ["AI 应用", "让模型能力进入可控、可解释、可验证的产品流程。", ["LLM", "AGENT", "EVALUATION"]],
      ["产品设计", "把复杂需求压缩成用户能够理解和完成的清晰路径。", ["PRODUCT", "UX", "PROTOTYPE"]],
      ["性能体验", "把加载、反馈和稳定性当作用户体验的一部分进行设计。", ["PERFORMANCE", "QUALITY", "ACCESSIBILITY"]],
      ["持续交付", "用自动化测试、构建与观测让每次发布更可预测。", ["CI/CD", "TESTING", "OPS"]],
      ["工程实践", "记录真实项目中的调试路径、边界判断和实现取舍。", ["ENGINEERING", "DEBUG", "CRAFT"]],
      ["AI 与大模型", "研究检索、生成、智能体和评测如何真正服务于业务。", ["AI", "LLM", "RAG"]],
      ["产品思考", "从用户目标、系统成本和长期演进三个方向理解产品。", ["PRODUCT", "STRATEGY", "SYSTEM"]],
      ["系统设计", "分析数据、服务和界面之间容易被忽略的关键连接。", ["DESIGN", "ARCHITECTURE", "SCALE"]],
      ["交互体验", "拆解那些让复杂操作变得自然、稳定和可预期的细节。", ["UX", "MOTION", "ACCESSIBILITY"]],
      ["阅读笔记", "整理技术、设计与商业书籍中值得长期保留的观点。", ["BOOKS", "LEARNING", "NOTES"]],
      ["工作日志", "持续记录阶段目标、关键决策以及它们最终产生的结果。", ["LOG", "DECISION", "REVIEW"]],
      ["生成视觉", "使用规则、随机性与计算创造有生命感的视觉系统。", ["GENERATIVE", "CANVAS", "ART"]],
      ["WebGL 实验", "探索粒子、空间、光影与实时交互在网页中的表达方式。", ["WEBGL", "THREE.JS", "SHADER"]],
      ["AI 原型", "用短周期原型验证模型能力与真实用户价值是否匹配。", ["AI", "PROTOTYPE", "VALIDATION"]],
      ["动效研究", "用节奏、层级和连续性让界面状态变化更容易理解。", ["MOTION", "INTERACTION", "CSS"]],
      ["开源项目", "把可复用的工具、组件和方法整理成开放的公共资产。", ["OPEN SOURCE", "TOOLS", "COMMUNITY"]]
    ]
  };

  var modal = document.getElementById("pop");
  var card = modal && modal.querySelector(".personal-project-card");
  var owner = window.PORTFOLIO_CONFIG.owner;
  var email = window.PORTFOLIO_CONFIG.email;

  document.title = owner + " — Personal Portfolio";
  document.querySelector(".logo-ieg strong").textContent = owner.toUpperCase();
  document.querySelector(".personal-signoff span").textContent = owner.toUpperCase();
  document.querySelector(".contact-card").textContent = email;
  document.querySelector(".personal-cta").setAttribute("href", "mailto:" + email);

  var contactChip = document.querySelector(".contact-chip");
  contactChip.setAttribute("role", "button");
  contactChip.setAttribute("tabindex", "0");
  contactChip.setAttribute("aria-label", "显示邮箱粒子二维码");

  function toggleEmailQr() {
    var isActive = contactChip.classList.toggle("qr-active");
    document.body.classList.toggle("qring", isActive);
    if (typeof window.toggleParticle === "function") {
      if (isActive) {
        window.toggleParticle(5);
      } else {
        var activeSection = document.querySelector("#fullpage .section.active");
        var sections = Array.prototype.slice.call(document.querySelectorAll("#fullpage .section"));
        window.toggleParticle(Math.max(0, sections.indexOf(activeSection)));
      }
    }
  }

  contactChip.addEventListener("click", function (event) {
    event.preventDefault();
    toggleEmailQr();
  });

  contactChip.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleEmailQr();
    }
  });

  function showProject(index) {
    var project = window.PORTFOLIO_CONFIG.projects[index];
    if (!project || !card) return;
    card.querySelector(".project-index").textContent = "PROJECT / " + String(index + 1).padStart(2, "0");
    card.querySelector("h2").textContent = project[0];
    card.querySelector("p").textContent = project[1];
    card.querySelector(".project-tags").innerHTML = project[2].map(function (tag) {
      return "<span>" + tag + "</span>";
    }).join("");
    modal.classList.remove("tall");
    modal.classList.add("show");
  }

  document.addEventListener("click", function (event) {
    var dot = event.target.closest && event.target.closest(".dot[data-project]");
    if (!dot) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    showProject(Number(dot.getAttribute("data-project")));
  }, true);

  document.addEventListener("click", function (event) {
    if (!modal) return;
    var close = event.target.closest && event.target.closest(".pop-close");
    if (close || event.target === modal) {
      event.preventDefault();
      event.stopPropagation();
      modal.classList.remove("show", "tall");
    }
  }, true);
})();
