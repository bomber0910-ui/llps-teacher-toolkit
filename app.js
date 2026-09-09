const categories=["全部","班級行政","家長溝通","評量與回饋","教學設計","輔導與特教","班級活動","校務文件","範本仿製"];
const tools=[
{id:"class-plan",cat:"班級行政",icon:"▤",title:"學期班級經營計畫",desc:"依班級現況與經營目標，整理學期策略、常規與親師合作重點。",fields:["班級／年級","學生概況","本學期經營目標","想強調的班級特色"]},
{id:"class-rules",cat:"班級行政",icon:"◉",title:"班規公告",desc:"將班級規範轉成學生易懂、正向而明確的圖文版文字。",fields:["適用年級","核心班規","獎勵方式","需要提醒的事項"]},
{id:"progress",cat:"班級行政",icon:"▦",title:"學期教學進度表",desc:"依科目、週次與學習目標，快速建立可調整的教學進度初稿。",fields:["年級與科目","學期週數","主要單元","重要活動或評量日"]},
{id:"parent-letter",cat:"家長溝通",icon:"✉",title:"親師溝通信",desc:"將事項整理成語氣得體、重點清楚的家長通知或聯絡信。",fields:["通知主旨","對象／班級","事情說明","日期、地點與配合事項"]},
{id:"notice",cat:"家長溝通",icon:"▤",title:"班級通知與簡報文稿",desc:"一次整理通知單文字與適合班親會說明的簡報重點。",fields:["活動／事項名稱","家長需要知道的內容","需配合事項","聯絡方式"]},
{id:"consent",cat:"家長溝通",icon:"✓",title:"同意書與回條",desc:"產生具備目的、風險、個資說明與回條欄位的同意書初稿。",fields:["活動名稱","時間與地點","活動內容及注意事項","回條截止日"]},
{id:"multilingual",cat:"家長溝通",icon:"文",title:"多語言通知單",desc:"將校園通知整理為清楚的繁體中文與指定語言對照內容。",fields:["通知標題","中文原文","翻譯語言","專有名詞或注意事項"]},
{id:"rubric",cat:"評量與回饋",icon:"◇",title:"評量規準 Rubric",desc:"依學習任務與表現層級，建立具體、可觀察的評量指標。",fields:["年級與領域","學習任務","評量面向","等第或分數層級"]},
{id:"comments",cat:"評量與回饋",icon:"◌",title:"學生期末個別化評語",desc:"依學生亮點、進步與下一步建議，產生尊重差異的個別評語。",fields:["學生稱呼","具體亮點","本學期進步","下一步建議"]},
{id:"remedial",cat:"評量與回饋",icon:"↗",title:"補救與差異化教學計畫",desc:"依學生需求規劃分層目標、教材調整與學習支持方式。",fields:["年級與科目","學生學習現況","需加強的概念","可用時間與資源"]},
{id:"lesson",cat:"教學設計",icon:"▰",title:"單元教案",desc:"依素養導向原則整理目標、活動流程、提問與評量方式。",fields:["年級與領域","單元名稱","學習目標","節數與教材資源"]},
{id:"inquiry",cat:"教學設計",icon:"?",title:"課程引導問題單",desc:"產生由淺入深的引導問題，支持學生觀察、推理與表達。",fields:["主題／文本","適用年級","核心概念","希望引導的思考方向"]},
{id:"observation",cat:"教學設計",icon:"◉",title:"教學觀察備課單",desc:"整理公開授課前的學習目標、觀察焦點與課後議課提綱。",fields:["課程名稱","學習目標","觀察焦點","課程流程摘要"]},
{id:"iep",cat:"輔導與特教",icon:"▤",title:"IEP 輔助產生器",desc:"依學生優勢與需求，協助整理可觀察、可衡量的支持目標初稿。",fields:["學生優勢","學習需求","希望達成的行為／能力","可提供的支持"]},
{id:"counsel",cat:"輔導與特教",icon:"☵",title:"學生晤談／輔導紀錄",desc:"以客觀語氣整理事件、學生陳述、教師觀察與後續支持。",fields:["晤談日期與對象","晤談緣由","學生陳述與教師觀察","後續處遇"]},
{id:"safety",cat:"輔導與特教",icon:"!",title:"危機事件處理紀錄",desc:"依時間序整理事件事實、當下處置、通報與追蹤事項。",fields:["事件時間與地點","客觀事實","立即處置","通報與後續追蹤"]},
{id:"visit",cat:"輔導與特教",icon:"⌂",title:"家庭訪問紀錄",desc:"整理家訪目的、家庭回饋、觀察重點與後續合作事項。",fields:["訪問日期與對象","訪問目的","訪談重點","後續合作事項"]},
{id:"awards",cat:"班級活動",icon:"★",title:"客製化獎狀文字",desc:"為學生的具體行動寫出真誠、有記憶點的表揚內容。",fields:["學生稱呼","值得肯定的具體表現","活動／期間","教師想說的話"]},
{id:"minutes",cat:"校務文件",icon:"▣",title:"會議紀錄生成器",desc:"將討論重點整理為議程、決議、分工與追蹤期限。",fields:["會議名稱與日期","出席人員","討論摘要","決議與分工"]},
{id:"clone",cat:"範本仿製",icon:"▧",title:"既有範本文字仿製",desc:"貼上既有文件的結構與新資料，產生格式一致的新版本。",fields:["文件類型","既有範本文字","需要替換的新資料","需保留的格式或語氣"]}
];
const accents={"班級行政":"#4b78c2","家長溝通":"#18a2a5","評量與回饋":"#dfa523","教學設計":"#27a77d","輔導與特教":"#dc6680","班級活動":"#8d65d4","校務文件":"#3f8dd0","範本仿製":"#71849a"};
let activeCategory="全部",activeTool=null;
const $=s=>document.querySelector(s);
const PASSWORD_HASH="3f61f8e7d83de184d1d4e92383922cbab6d848b384338a6c3c34f93d3cc0d9f1";
async function hashPassword(value){const bytes=new TextEncoder().encode(value);const digest=await crypto.subtle.digest("SHA-256",bytes);return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("")}
function unlockSite(){sessionStorage.setItem("linrong_access",PASSWORD_HASH);const gate=$("#accessGate");gate.hidden=true;gate.style.display="none";$("#appRoot").hidden=false;document.title="林榮智慧教務站｜花蓮縣林榮國小";window.scrollTo(0,0)}
function renderTabs(){ $("#categoryTabs").innerHTML=categories.map(c=>`<button role="tab" aria-selected="${c===activeCategory}" data-cat="${c}">${c}</button>`).join(""); }
function filteredTools(){const q=$("#searchInput").value.trim().toLowerCase();return tools.filter(t=>(activeCategory==="全部"||t.cat===activeCategory)&&(!q||`${t.title}${t.desc}${t.cat}`.toLowerCase().includes(q)))}
function renderTools(){const list=filteredTools();$("#toolGrid").innerHTML=list.map(t=>`<button class="tool-card" style="--accent:${accents[t.cat]}" data-id="${t.id}"><span class="card-top"><span class="tool-icon">${t.icon}</span><span class="card-arrow">↗</span></span><h3>${t.title}</h3><p>${t.desc}</p><small>${t.cat}</small></button>`).join("");$("#resultCount").textContent=`顯示 ${list.length} 項工具`;$("#emptyState").hidden=list.length>0;$("#toolGrid").hidden=!list.length;$("#clearFilter").hidden=activeCategory==="全部"&&!$("#searchInput").value;}
function resetFilter(){activeCategory="全部";$("#searchInput").value="";renderTabs();renderTools()}
function openTool(id){activeTool=tools.find(t=>t.id===id);$("#modalIcon").textContent=activeTool.icon;$("#modalCategory").textContent=activeTool.cat;$("#modalTitle").textContent=activeTool.title;$("#modalDesc").textContent=activeTool.desc;$("#formFields").innerHTML=activeTool.fields.map((f,i)=>`<div class="form-field ${i>1?"full":""}"><label for="field${i}">${f}</label>${i>1?`<textarea id="field${i}" placeholder="請輸入${f}" ${i===2?"required":""}></textarea>`:`<input id="field${i}" placeholder="請輸入${f}" ${i===0?"required":""}/>`}</div>`).join("");showForm();$("#toolModal").hidden=false;document.body.style.overflow="hidden";setTimeout(()=>$("#field0").focus(),30)}
function closeModal(){$("#toolModal").hidden=true;document.body.style.overflow="";activeTool=null}
function showForm(){$("#toolForm").hidden=false;$("#resultView").hidden=true;$("#stepOne").classList.add("active");$("#stepTwo").classList.remove("active")}
function makeResult(){const vals=activeTool.fields.map((_,i)=>$("#field"+i).value.trim()||"（待補充）"),tone=$("#toneSelect").value,date=new Intl.DateTimeFormat("zh-TW",{dateStyle:"long"}).format(new Date());const points=vals.slice(1).map((v,i)=>`${i+1}. ${activeTool.fields[i+1]}：${v}`).join("\n");return `【${activeTool.title}】\n\n製作日期：${date}\n適用對象：${vals[0]}\n文字語氣：${tone}\n\n一、說明\n本文件依據「${vals[0]}」之實際需求擬定，目的在提供清楚、具體且可執行的溝通與工作依據。\n\n二、內容重點\n${points}\n\n三、執行與提醒\n1. 請依現場情況調整日期、人名、聯絡方式與相關細節。\n2. 涉及學生資料時，請遵守個人資料保護及校內相關規定。\n3. 執行後可記錄回饋，作為後續調整與親師溝通參考。\n\n花蓮縣林榮國民小學 敬啟`}
function generate(){ $("#resultText").value=makeResult();$("#toolForm").hidden=true;$("#resultView").hidden=false;$("#stepOne").classList.remove("active");$("#stepTwo").classList.add("active");$("#resultText").focus() }
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800)}
renderTabs();renderTools();$("#toolCount").textContent=tools.length;$("#year").textContent=new Date().getFullYear();
if(sessionStorage.getItem("linrong_access")===PASSWORD_HASH){unlockSite()}else{document.title="身分驗證｜林榮智慧教務站";setTimeout(()=>$("#accessPassword").focus(),40)}
$("#accessForm").addEventListener("submit",async e=>{e.preventDefault();const input=$("#accessPassword"),button=e.currentTarget.querySelector("button[type=submit]");$("#accessError").textContent="";button.disabled=true;button.firstChild.textContent="驗證中 ";const valid=await hashPassword(input.value)===PASSWORD_HASH;button.disabled=false;button.firstChild.textContent="進入系統 ";if(valid){unlockSite()}else{$("#accessError").textContent="密碼不正確，請重新輸入。";input.value="";input.focus();input.closest(".password-field").animate([{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}],{duration:220})}});
$("#togglePassword").addEventListener("click",e=>{const input=$("#accessPassword"),show=input.type==="password";input.type=show?"text":"password";e.currentTarget.textContent=show?"隱藏":"顯示";e.currentTarget.setAttribute("aria-label",show?"隱藏密碼":"顯示密碼")});
$("#categoryTabs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;activeCategory=b.dataset.cat;renderTabs();renderTools()});
$("#toolGrid").addEventListener("click",e=>{const b=e.target.closest(".tool-card");if(b)openTool(b.dataset.id)});$("#searchInput").addEventListener("input",renderTools);$("#clearFilter").addEventListener("click",resetFilter);$("#emptyClear").addEventListener("click",resetFilter);
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus()}if(e.key==="Escape"&&!$("#toolModal").hidden)closeModal()});
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));$("#toolForm").addEventListener("submit",e=>{e.preventDefault();generate()});$("#backBtn").addEventListener("click",showForm);$("#regenerateBtn").addEventListener("click",generate);$("#copyBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText($("#resultText").value);toast("已複製到剪貼簿")}catch{ $("#resultText").select();document.execCommand("copy");toast("已複製到剪貼簿") }});$("#helpBtn").addEventListener("click",()=>$("#guide").scrollIntoView());
