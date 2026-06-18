import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outRoot = join(process.cwd(), 'public', 'blog');
const baseUrl = 'https://www.altercraft.in';
const whatsapp = 'https://wa.me/918817503658';
const apkPath = '/downloads/operator-desk-debug-d428fcf.apk';
const date = '2026-06-18';

const sharedSlides = [
  ['01', 'Capture', 'Lead, site photos, scope, quotation and expected payment stage are recorded before movement.'],
  ['02', 'Gate', 'Advance, material payment, labour readiness and milestone proof decide whether work can move.'],
  ['03', 'Report', 'The operator sees what is active, blocked, risky and ready for follow-up each day.'],
];

const related = [
  ['Contractor Desk landing page', '/ContractorDesk/'],
  ['Download OperatorDesk APK', apkPath],
  ['Payment gate guide', '/blog/contractor-desk-payment-gate-system/'],
  ['Daily site report guide', '/blog/daily-site-report-app-for-contractors/'],
  ['Cash ledger guide', '/blog/contractor-cash-ledger-app/'],
];

const articles = [
  {
    slug: 'contractor-desk-apk-for-contractors',
    title: 'Contractor Desk APK for Contractors | AlterCraft Operator App',
    description:
      'Contractor Desk APK by AlterCraft is a mobile-first operator app for contractor jobs, payment gates, labour, material, site reports, cash ledger and dispute protection.',
    category: 'Contractor Desk APK',
    h1: 'Contractor Desk APK for contractors who need control before speed',
    cover: '/images/blog/contractor-desk/contractor-desk-apk-cover.svg',
    tags: ['contractor desk apk', 'contractor management app', 'site management app', 'payment gate app'],
    lede:
      "Contractor Desk is AlterCraft's mobile-first execution control app for contractors, interior execution teams, furniture manufacturers and site operators who cannot afford vague work, delayed payments or missing proof.",
    note:
      'This is the first private APK direction for OperatorDesk. It is designed to create a disciplined workflow first: login, roles, leads, jobs, cash, labour, material, reports and disputes. Deeper automation can come later because the operating rhythm is now visible.',
    metrics: [
      ['APK', 'Mobile-first install flow for the field team'],
      ['3 levels', 'Founder, manager and worker access direction'],
      ['Gate first', 'Payment, material and labour rules before work'],
      ['Proof trail', 'Photos, notes, cash and status in one job file'],
    ],
    sections: [
      [
        'Why a contractor APK matters',
        `<p>Most contractors do not lose control because they do not know the work. They lose control because the work, money, people and proof live in different places. The quotation is in one chat, the site photo is in another, the labour update is verbal, the material bill is in a drawer and the payment reminder is in someone's memory.</p>
        <p>Contractor Desk APK is built around a simple belief: before a site moves, the operator should know what has been paid, what is pending, who is responsible, what proof exists and what action is blocked.</p>`,
      ],
      [
        'What the APK should help with',
        `<div class="grid">
          <div class="card accent"><h3>Leads and jobs</h3><p>Capture new enquiries, active jobs, production orders and site work without mixing them into ordinary chat noise.</p></div>
          <div class="card accent"><h3>Payment gates</h3><p>Keep advance, material payment, labour advance and milestone payment visible before risky movement starts.</p></div>
          <div class="card accent"><h3>Daily execution</h3><p>Record labour attendance, material requirement, photos uploaded, written confirmation and next action.</p></div>
          <div class="card accent"><h3>Dispute file</h3><p>When a conflict begins, proof should already be organized: scope, payment, photos, approvals and communication.</p></div>
        </div>`,
      ],
      [
        'Who should use it first',
        `<p>The first users should be small and mid-sized contractors who manage multiple jobs at once: modular kitchen vendors, wardrobe and furniture manufacturers, office interior vendors, civil renovation teams, site supervisors and execution partners. These businesses usually know how to do the work, but struggle with follow-up discipline, payment visibility and proof management.</p>
        <p>For AlterCraft, this app also becomes a product arm: a practical operating system for contractor-backed execution, powered by AlterLabs and shaped around real interior and furniture site problems.</p>`,
      ],
      [
        'Promotional positioning',
        `<div class="pullquote">Contractor Desk is not another pretty dashboard. It is a field discipline system for people whose profit depends on the next site decision.</div>
        <p>The best content angle is direct and practical: stop cash leakage, stop verbal work, stop material movement without payment, stop labour confusion, and keep every job's proof ready before conflict starts.</p>`,
      ],
    ],
    faqs: [
      ['Is Contractor Desk a public APK?', 'It is currently positioned as a private AlterCraft OperatorDesk APK and should be shared with selected users or teams first.'],
      ['Is it only for interior contractors?', 'No. The first use case is AlterCraft execution, but the same workflow can support furniture, civil, renovation, commercial interiors and small contractor teams.'],
      ['What is the main benefit?', 'It makes payment gates, job status, site reports and proof visible before risky work moves forward.'],
    ],
  },
  {
    slug: 'contractor-management-app-india',
    title: 'Contractor Management App in India | Contractor Desk by AlterCraft',
    description:
      'A practical contractor management app guide for Indian contractors handling site work, labour, material, payment follow-up, daily reports and disputes.',
    category: 'Contractor Management App',
    h1: 'What a contractor management app in India must actually solve',
    cover: '/images/blog/contractor-desk/contractor-desk-apk-cover.svg',
    tags: ['contractor management app India', 'construction app India', 'contractor CRM', 'site execution software'],
    lede:
      'Indian contractor work is fast, local, phone-driven and payment-sensitive. A useful contractor management app should respect that reality instead of forcing a heavy corporate project-management system on a small execution team.',
    note:
      'The first version should not try to impress with complicated charts. It should make the next action obvious: who has to pay, who has to work, what material is needed, what proof is missing and what should not move today.',
    metrics: [
      ['Local-first', 'Built around phone calls, WhatsApp follow-ups and site visits'],
      ['Cash-aware', 'Payment stages are part of execution, not accounting afterthoughts'],
      ['Role-based', 'Founder sees risk, manager runs jobs, worker updates tasks'],
      ['Proof-ready', 'Photos, notes and confirmations stay attached to the job'],
    ],
    sections: [
      [
        'The real Indian contractor workflow',
        `<p>A contractor may start the day by checking a pending advance, sending a carpenter to one site, arranging plywood for another, following up on a quotation, visiting a disputed client and answering ten calls. If the app is too heavy, it will not survive this day.</p>
        <p>Contractor Desk is shaped for field reality. It keeps the dashboard direct: active work, payment pending, labour deployed, proof missing and blocked actions. The operator does not need a long training session to understand where attention is required.</p>`,
      ],
      [
        'The core modules that matter',
        `<table><thead><tr><th>Module</th><th>Why it matters</th><th>Contractor Desk direction</th></tr></thead><tbody>
        <tr><td>Leads</td><td>New enquiries are easy to forget when they live only in chat.</td><td>Capture lead, phone, job type, value and next action.</td></tr>
        <tr><td>Jobs</td><td>Every active order needs status and owner visibility.</td><td>Move from lead to quotation, advance, production, execution and handover.</td></tr>
        <tr><td>Cash</td><td>Contractor profit disappears when job money mixes with daily expenses.</td><td>Split money into material, labour, reserve, debt, tools and profit buckets.</td></tr>
        <tr><td>Reports</td><td>Daily verbal updates are weak during payment or scope disputes.</td><td>Keep daily work, photos, issues and next steps inside the job record.</td></tr>
        </tbody></table>`,
      ],
      [
        'Why role levels are important',
        `<p>A founder should not see the same screen as a worker. The founder needs risk, cash and dispute visibility. A manager needs job movement, team assignment and follow-up. A worker needs simple daily tasks and report submission. This is why Contractor Desk is moving toward a three-level access model: L3 Founder, L2 Manager and L1 Worker.</p>`,
      ],
      [
        'Content angle for promotion',
        `<p>The strongest marketing message is not "software for contractors." It is "control site chaos before it becomes cash loss." Articles, reels and slides should talk about payment gates, proof before emotion, labour visibility and material movement because those are the words contractors feel in daily work.</p>`,
      ],
    ],
    faqs: [
      ['Can a small contractor use this?', 'Yes. The app direction is intentionally mobile-first and simple enough for small teams.'],
      ['Does it replace accounting software?', 'No. It gives field-level cash and job discipline. Full accounting can be integrated later if required.'],
      ['What is the best first module to use?', 'Start with jobs and payment gates because they immediately reduce risky site movement.'],
    ],
  },
  {
    slug: 'contractor-desk-payment-gate-system',
    title: 'Contractor Payment Gate System | Contractor Desk by AlterCraft',
    description:
      'Learn how Contractor Desk uses payment gates to stop cash leakage, risky site movement, unclear advances and unpaid milestone work for contractors.',
    category: 'Payment Gate System',
    h1: 'Contractor payment gate system: stop cash leakage before site work starts',
    cover: '/images/blog/contractor-desk/payment-gate-cover.svg',
    tags: ['contractor payment gate', 'advance tracking app', 'milestone payment', 'contractor cash control'],
    lede:
      'Payment gates are the most important discipline inside Contractor Desk. They turn payment from a polite reminder into a visible rule that protects material, labour, production and handover.',
    note:
      'A payment gate is not a fight with the customer. It is a clear business boundary. If the agreed stage is not paid or approved in writing, the next risky movement stays blocked.',
    metrics: [
      ['Advance', 'Do not begin without the agreed first payment'],
      ['Material', 'Do not procure without material money or approval'],
      ['Labour', 'Do not deploy without readiness and labour advance'],
      ['Milestone', 'Do not hand over without documented payment stage'],
    ],
    sections: [
      [
        'Why contractor losses begin early',
        `<p>The loss usually starts before anyone notices it. A team begins production because the client sounded serious. Material is ordered because the site has urgency. Labour is sent because a promise was made on the phone. Two weeks later, the contractor has spent money, the site has changed scope, and the payment conversation becomes emotional.</p>
        <p>Contractor Desk treats that early moment as the control point. If the gate is not clear, the dashboard should say so before the operator spends money.</p>`,
      ],
      [
        'Four gates every contractor should use',
        `<ol class="flow"><li><strong>Advance gate:</strong> No confirmed work order moves until the first agreed advance is recorded.</li><li><strong>Material gate:</strong> Material procurement starts only after the material amount is collected or clearly approved.</li><li><strong>Labour gate:</strong> Labour reaches site only when readiness, payment and work scope are visible.</li><li><strong>Milestone gate:</strong> Production, installation and handover are tied to documented stages.</li></ol>`,
      ],
      [
        'How the APK promotes discipline',
        `<p>The APK should show active jobs, pending payment, blocked work and next action directly on the phone. The point is not only to store data. The point is to create a small pause before the operator makes a costly decision.</p>
        <p>When used properly, payment gates reduce unclear credit, prevent material movement without money, and make client follow-up more professional because the team can say exactly which stage is pending.</p>`,
      ],
      [
        'The language to use with clients',
        `<p>Keep it calm and written: "As per the agreed scope, the next stage will begin after the material/payment milestone is cleared." This sounds professional, avoids drama and protects the relationship because the rule was visible from the beginning.</p>`,
      ],
    ],
    faqs: [
      ['Is a payment gate too strict for small jobs?', 'No. Smaller jobs are often where cash discipline matters most because one unpaid purchase can disturb the entire week.'],
      ['Can the customer still approve changes?', 'Yes, but changes should be written and linked to revised payment or scope before work moves.'],
      ['What is the first gate to implement?', 'Start with advance and material payment gates because they directly control early cash leakage.'],
    ],
  },
  {
    slug: 'contractor-desk-labour-material-site-control',
    title: 'Labour, Material and Site Control App | Contractor Desk',
    description:
      'How Contractor Desk helps contractors organize labour deployment, material requirements, daily site reports, photos and next actions in one mobile flow.',
    category: 'Site Control',
    h1: 'Labour, material and site reports in one contractor desk',
    cover: '/images/blog/contractor-desk/labour-material-cover.svg',
    tags: ['labour management app', 'material management app', 'daily site report app', 'site control app'],
    lede:
      'A contractor does not need another place to dump notes. The team needs one mobile rhythm where labour, material and daily site proof are checked before the next day begins.',
    note:
      'The best site control system is simple enough to be used after a tiring site visit. It should ask the right questions and keep the answer attached to the job.',
    metrics: [
      ['Labour', 'Who attended, who was assigned, what work was done'],
      ['Material', 'What is needed, what is ordered, what is blocked'],
      ['Photos', 'Before, progress, issue and handover proof'],
      ['Next action', 'Who must do what before tomorrow'],
    ],
    sections: [
      [
        'Why labour and material must be seen together',
        `<p>Labour without material wastes the day. Material without labour blocks the site. Both without daily proof create a weak handover. Contractor Desk places these moving parts in the same operating rhythm so the manager can see what is ready, what is missing and what must be stopped.</p>`,
      ],
      [
        'A daily site report should be short but complete',
        `<div class="grid"><div class="card"><h3>Attendance</h3><p>Worker names, team count, arrival, leave and approved work.</p></div><div class="card"><h3>Progress</h3><p>What was completed today and what remains pending.</p></div><div class="card"><h3>Material</h3><p>Used material, shortage, purchase requirement and delivery status.</p></div><div class="card"><h3>Proof</h3><p>Photos, issue notes, client instruction and written confirmation.</p></div></div>`,
      ],
      [
        'How this helps the owner',
        `<p>The founder or site owner can review the day without calling five people. A manager can explain why a job is delayed with proof. A worker can submit a clean update without writing a long report. The benefit is not only documentation; it is calmer decision-making.</p>`,
      ],
      [
        'APK promotion angle',
        `<p>For content, show "before Contractor Desk" and "after Contractor Desk." Before: material asked verbally, labour sent without readiness, photos lost in chat. After: job card, labour row, material row, photo proof and next action. This gives viewers an immediate reason to download or request access.</p>`,
      ],
    ],
    faqs: [
      ['Can workers update reports from mobile?', 'That is the intended direction: workers and managers should be able to submit simple mobile updates based on access level.'],
      ['Should every site need a daily report?', 'Yes, even a short report creates proof and protects the next payment conversation.'],
      ['What is the minimum report?', 'Labour present, work done, material issue, photos and next action.'],
    ],
  },
  {
    slug: 'daily-site-report-app-for-contractors',
    title: 'Daily Site Report App for Contractors | Contractor Desk',
    description:
      'A daily site report app guide for contractors covering attendance, site photos, material usage, issues, client approvals and next actions.',
    category: 'Daily Site Reports',
    h1: 'Daily site report app for contractors: the report that protects tomorrow',
    cover: '/images/blog/contractor-desk/labour-material-cover.svg',
    tags: ['daily site report app', 'site photo report', 'contractor daily report', 'site supervisor app'],
    lede:
      'Daily site reports are not paperwork. For contractors, they are the memory of the site, the proof of progress and the cleanest way to keep tomorrow from starting with confusion.',
    note:
      'A useful report should be short enough to complete daily and strong enough to support payment, dispute, material and labour decisions later.',
    metrics: [
      ['5 minutes', 'Target time for a simple daily update'],
      ['4 proofs', 'Attendance, progress, material and photos'],
      ['1 owner', 'Every next action needs one responsible person'],
      ['0 confusion', 'Tomorrow begins with a visible status'],
    ],
    sections: [
      [
        'What a daily report should include',
        `<p>The report should capture labour present, work completed, work pending, material used, material required, site photos, customer instruction, issue notes and the next action owner. Anything more can be optional, but these details should not be skipped.</p>
        <p>Contractor Desk is built to make this routine visible in a mobile flow so the report becomes a habit, not a special task.</p>`,
      ],
      [
        'Photos must be labelled by purpose',
        `<p>Site photos are powerful only when someone understands why they were taken. A progress photo, issue photo, damage photo, measurement photo and handover photo are not the same thing. The app direction should encourage labels so the proof remains useful months later.</p>`,
      ],
      [
        'How reports improve client communication',
        `<p>Instead of sending scattered messages, the manager can summarize the day professionally: what was done, what is pending, what is required from the client and what will happen next. This reduces panic calls and improves trust.</p>`,
      ],
      [
        'Suggested daily rhythm',
        `<ol class="flow"><li>Open job card before leaving the site.</li><li>Tick attendance and work completed.</li><li>Add material used and material required.</li><li>Upload progress and issue photos.</li><li>Assign tomorrow's next action to one person.</li></ol>`,
      ],
    ],
    faqs: [
      ['Should reports be sent to the customer daily?', 'Not always. Some reports can stay internal, while important progress or approvals can be shared with the customer.'],
      ['Can site photos replace written notes?', 'No. Photos support notes, but the reason for the photo should still be written.'],
      ['Why does this matter for payments?', 'A clean daily trail makes milestone follow-up more credible and reduces arguments about progress.'],
    ],
  },
  {
    slug: 'contractor-cash-ledger-app',
    title: 'Contractor Cash Ledger App | Payment Buckets and Job Money Control',
    description:
      'Contractor cash ledger app guide for separating job money, material, labour, tools, reserve, debt and profit before spending.',
    category: 'Cash Ledger',
    h1: 'Contractor cash ledger app: every rupee needs a bucket',
    cover: '/images/blog/contractor-desk/cash-ledger-cover.svg',
    tags: ['contractor cash ledger app', 'job cash control', 'contractor profit tracking', 'payment bucket system'],
    lede:
      'Contractor profit disappears quietly when all money looks available. A cash ledger turns received amount into clear buckets before it gets spent in the wrong place.',
    note:
      'The purpose is not complex accounting. The purpose is daily survival: know how much belongs to material, labour, tools, reserve, debt, operating expense and real profit.',
    metrics: [
      ['Material', 'Protected amount for purchase'],
      ['Labour', 'Daily and milestone wage pressure'],
      ['Reserve', 'Buffer for delay, rework and transport'],
      ['Profit', 'Visible only after obligations are separated'],
    ],
    sections: [
      [
        'Why contractors need bucket thinking',
        `<p>A customer pays an advance and the business feels rich for a day. Then material has to be bought, labour needs payment, transport takes cash, an old debt is due and the profit vanishes. This happens because the money was received but not assigned.</p>
        <p>Contractor Desk's cash ledger direction is simple: every rupee should enter a visible bucket before spending begins.</p>`,
      ],
      [
        'Recommended buckets',
        `<table><thead><tr><th>Bucket</th><th>Purpose</th><th>Warning sign</th></tr></thead><tbody>
        <tr><td>Material</td><td>Plywood, laminate, hardware, glass, lights and site consumables.</td><td>Material bought from general cash without job assignment.</td></tr>
        <tr><td>Labour</td><td>Carpenters, helpers, electricians, painters, polish and installation workers.</td><td>Labour paid before client stage is collected.</td></tr>
        <tr><td>Reserve</td><td>Transport, correction, delay, small rework and emergency movement.</td><td>No buffer left before handover.</td></tr>
        <tr><td>Profit</td><td>The money that remains after the job's real obligations are protected.</td><td>Profit assumed before material and labour are closed.</td></tr>
        </tbody></table>`,
      ],
      [
        'How this should look in the APK',
        `<p>The mobile dashboard should make job value, received amount, pending amount and bucket allocation visible quickly. The founder should see cash risk. The manager should see whether material or labour can move. The worker does not need full financial visibility, only task status.</p>`,
      ],
      [
        'Promotion angle',
        `<p>Use this line in reels and blog snippets: "If all received money looks spendable, your contractor business is already at risk." It is direct, relatable and leads naturally into the Contractor Desk cash ledger.</p>`,
      ],
    ],
    faqs: [
      ['Is this the same as accounting?', 'No. It is operational cash discipline. Accounting can still happen separately.'],
      ['Should workers see the cash ledger?', 'Usually no. Cash visibility should follow access level and business role.'],
      ['What is the first bucket to protect?', 'Material and labour should be protected first because they directly affect site movement.'],
    ],
  },
  {
    slug: 'contractor-desk-dispute-proof-cash-ledger',
    title: 'Dispute Protection for Contractors | Contractor Desk Proof and Cash Ledger',
    description:
      'How Contractor Desk helps contractors prepare proof, written scope, photos, payment trail and cash ledger records before payment or scope disputes grow.',
    category: 'Dispute Protection',
    h1: 'Dispute protection for contractors: proof before emotion',
    cover: '/images/blog/contractor-desk/dispute-proof-cover.svg',
    tags: ['contractor dispute protection', 'site proof app', 'payment dispute contractor', 'contractor documentation'],
    lede:
      'Contractor disputes become expensive when proof is created after the argument starts. Contractor Desk is designed around the opposite habit: keep proof ready while the site is still active.',
    note:
      'This content should never sound aggressive. The premium message is calm: written scope, site proof and payment trail protect both the contractor and the customer.',
    metrics: [
      ['Scope', 'What was agreed and what changed'],
      ['Photos', 'Before, progress, issue and handover evidence'],
      ['Payment', 'Received, pending and milestone trail'],
      ['Action', 'Next lawful or business follow-up'],
    ],
    sections: [
      [
        'Why proof must start before conflict',
        `<p>Once a dispute begins, memory becomes selective. The customer remembers promises, the contractor remembers extra work, the worker remembers site problems and the payment trail becomes uncomfortable. A proof-first system keeps the conversation factual.</p>
        <p>Contractor Desk should keep scope, photos, approvals, payment stages and notes inside the job file so the team does not search across chats during stress.</p>`,
      ],
      [
        'The proof stack',
        `<div class="grid"><div class="card"><h3>Written scope</h3><p>Original work, revised work, exclusions and customer approvals.</p></div><div class="card"><h3>Photo trail</h3><p>Before, progress, measurement, issue, damage and handover photos.</p></div><div class="card"><h3>Payment trail</h3><p>Advance, material, labour, milestone, pending and final payment.</p></div><div class="card"><h3>Settlement notes</h3><p>Conversation summary, amount at risk, decision and next follow-up.</p></div></div>`,
      ],
      [
        'How to write a calm dispute note',
        `<p>A good note is short and factual: "The agreed scope was X. Additional work Y was requested on this date. Payment stage Z is pending. We can continue after written confirmation and payment clearance." This protects tone while keeping the business boundary firm.</p>`,
      ],
      [
        'Why the cash ledger matters during disputes',
        `<p>A dispute is not only emotional. It is a cash event. The contractor needs to know how much material, labour, transport and profit are at risk. A cash ledger helps the founder decide whether to pause, negotiate, continue, or close the matter.</p>`,
      ],
    ],
    faqs: [
      ['Can Contractor Desk prevent every dispute?', 'No app can prevent every dispute, but organized proof reduces confusion and supports calmer resolution.'],
      ['What proof is most important?', 'Written scope, payment trail and site photos are usually the strongest starting points.'],
      ['Should every change be written?', 'Yes. Even a short written confirmation is better than a verbal change.'],
    ],
  },
  {
    slug: 'contractor-desk-apk-installation-guide',
    title: 'Contractor Desk APK Installation Guide | OperatorDesk Download',
    description:
      'How to download, install and start using the Contractor Desk OperatorDesk APK for leads, jobs, cash, labour and reports.',
    category: 'APK Installation',
    h1: 'Contractor Desk APK installation and first-use guide',
    cover: '/images/blog/contractor-desk/contractor-desk-apk-cover.svg',
    tags: ['download contractor desk apk', 'operator desk apk', 'contractor app install', 'AlterCraft app'],
    lede:
      'This guide explains how a contractor, manager or AlterCraft operator can download the current OperatorDesk APK and start using the mobile workflow carefully.',
    note:
      'The current APK should be treated as an early product build. Install it for review, field workflow testing and controlled rollout, not as a public mass-market release.',
    metrics: [
      ['Download', 'Use the APK link from the official AlterCraft page'],
      ['Signup', 'Create the first operator account with correct details'],
      ['Role', 'Use the correct founder, manager or worker access level'],
      ['Test', 'Add sample jobs before live operational use'],
    ],
    sections: [
      [
        'Before installation',
        `<p>Use the APK from the official AlterCraft Contractor Desk page. Do not circulate renamed files in random chats because old builds can confuse the team. Keep one current link for operators and update it only after a tested release.</p>
        <p>If Android asks for permission to install an APK, allow it only for the browser or file manager you trust. After installation, you can disable that permission again from Android settings.</p>`,
      ],
      [
        'First login and roles',
        `<p>The app direction includes a login gate and role-aware access: L3 Founder, L2 Manager and L1 Worker. The founder role should remain protected because it sees business-sensitive items like cash, disputes and user management. Managers can run jobs and reports. Workers should see only the tasks and updates they need.</p>`,
      ],
      [
        'What to test first',
        `<ol class="flow"><li>Create one lead and convert it into a job.</li><li>Add a payment stage and mark whether it is clear or pending.</li><li>Create a labour or material note.</li><li>Open the reports screen and check whether the flow feels natural.</li><li>Try one dispute or proof file with sample data.</li></ol>`,
      ],
      [
        'Rollout recommendation',
        `<p>Start with one founder and one manager before giving the APK to the wider team. The goal is to confirm the operating language: payment gate, job owner, daily report, cash bucket, proof file and next action. Once the team understands the language, the app becomes much more valuable.</p>`,
      ],
    ],
    faqs: [
      ['Where is the APK?', `Use the official download link on the Contractor Desk page or this direct path: <a href="${apkPath}">Download OperatorDesk APK</a>.`],
      ['Can I use it without the server?', 'Some mobile views can be reviewed locally, but proper team use needs the backend and login setup.'],
      ['Should live customer data be entered immediately?', 'Start with sample data first, then move to live data after the team confirms the workflow.'],
    ],
  },
];

const esc = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const renderSlides = (slides) =>
  `<div class="slide-strip">${slides
    .map(
      ([num, title, copy]) =>
        `<article class="slide-card"><small>${esc(num)}</small><strong>${esc(title)}</strong><p>${esc(copy)}</p></article>`,
    )
    .join('')}</div>`;

const renderArticle = (article) => {
  const url = `${baseUrl}/blog/${article.slug}/`;
  const imageUrl = `${baseUrl}${article.cover}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.description,
    image: imageUrl,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'AlterCraft' },
    publisher: { '@type': 'Organization', name: 'AlterCraft' },
    mainEntityOfPage: url,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer.replace(/<[^>]+>/g, '') },
    })),
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${esc(article.title)}</title>
  <meta name="description" content="${esc(article.description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${esc(article.title)}" />
  <meta property="og:description" content="${esc(article.description)}" />
  <meta property="og:image" content="${imageUrl}" />
  <link rel="stylesheet" href="/blog/blog-style.css" />
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
</head>
<body>
<main>
  <img class="cover wide" src="${article.cover}" alt="${esc(article.h1)}" />
  <p class="k">${esc(article.category)}</p>
  <h1>${esc(article.h1)}</h1>
  <p class="lede">${esc(article.lede)}</p>
  <div class="tags">${article.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}</div>
  <div class="note strong"><p>${esc(article.note)}</p></div>
  <div class="metric-strip">${article.metrics
    .map(([value, label]) => `<span><strong>${esc(value)}</strong>${esc(label)}</span>`)
    .join('')}</div>
  <nav class="toc"><strong>In this guide</strong>${article.sections
    .map(([title], index) => `<a href="#section-${index + 1}">${esc(title)}</a>`)
    .join('')}<a href="#faq">Questions</a></nav>
  ${renderSlides(sharedSlides)}
  ${article.sections
    .map(([title, html], index) => `<section id="section-${index + 1}"><h2>${esc(title)}</h2>${html}</section>`)
    .join('\n  ')}
  <section id="faq" class="faq">
    <h2>Questions contractors ask</h2>
    ${article.faqs
      .map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${answer}</p></details>`)
      .join('')}
  </section>
  <div class="cta dark">
    <strong>Want Contractor Desk for your execution team?</strong>
    <p>Ask AlterCraft for APK access, onboarding and backend setup direction. Start with payment gates, site reports and cash discipline before adding more automation.</p>
    <a href="${whatsapp}">Request Contractor Desk access</a>
    <a href="${apkPath}">Download APK</a>
  </div>
  <div class="related"><strong>Related Contractor Desk pages</strong><ul>${related
    .map(([label, href]) => `<li><a href="${href}">${label}</a></li>`)
    .join('')}</ul></div>
</main>
</body>
</html>
`;
};

for (const article of articles) {
  const dir = join(outRoot, article.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), renderArticle(article));
}

console.log(`Wrote ${articles.length} Contractor Desk blog pages.`);
