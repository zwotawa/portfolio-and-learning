import Image from "next/image";
import styles from "./screenshot-gallery.module.css";

const screenshots = [
  { file: "Dashboard-top.png", title: "A clear starting point", caption: "The dashboard brings active goals, weekly focus, and today’s suggested actions into one view.", alt: "Life Copilot dashboard with goal counts, weekly focus, and today's menu." },
  { file: "Inbox-top.png", title: "Capture first, decide later", caption: "An inbox gives new ideas a place to land before they become goals or commitments.", alt: "Inbox with quick capture, status counts, and options to clarify, defer, archive, or convert an idea to a goal." },
  { file: "Goal-Overview-top.png", title: "Give each goal context", caption: "Purpose, category, touch frequency, and timing help define how a goal fits into the planning system.", alt: "Goal overview form showing the goal title, why it matters, category, touch frequency, and deadline." },
  { file: "Weekly-Review-top.png", title: "Choose the week’s focus", caption: "Weekly review pairs execution insights with a focused selection of anchor, infrastructure, maintenance, and creative goals.", alt: "Weekly review showing execution insights and selected goals grouped by planning role." },
  { file: "Surfacing-Scores-Breakdown.png", title: "Make prioritization explainable", caption: "A diagnostic view breaks down the signals behind goal scores, including frequency, freshness, weekly selection, and momentum.", alt: "Expanded surfacing scores showing individual contributions to each goal's ranking." },
  { file: "Goal-Roadmap-bottom.png", title: "Turn milestones into small actions", caption: "An active milestone contains ordered tiny tasks, completion counts, and a progress indicator.", alt: "Active roadmap milestone with three tiny tasks, one completed, and 33 percent task progress." },
  { file: "Goal-Progress.png", title: "Keep a record of progress", caption: "A goal’s activity history connects progress notes and completed tasks back to their milestones.", alt: "Goal progress timeline with a recorded progress event and a completed tiny task." },
  { file: "Smartphone-screen-only.png", title: "Bring the same workflow to mobile", caption: "The dashboard adapts to a narrow screen with stacked cards and a compact navigation menu.", alt: "Mobile Life Copilot dashboard with stacked goal counts and the navigation menu open.", mobile: true },
];

export function LifeCopilotGallery() {
  return (
    <div className={styles.gallery}>
      <p className={styles.intro}>From capturing an idea to planning the week and tracking progress. Select any screenshot to view it at full size.</p>
      <div className={styles.grid}>
        {screenshots.map((shot, index) => (
          <figure key={shot.file} className={`${styles.figure} ${index === 0 ? styles.featured : ""} ${shot.mobile ? styles.mobile : ""}`}>
            <a href={`/projects/life-copilot/${shot.file}`} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={`View ${shot.title.toLowerCase()} screenshot at full size (opens in a new tab)`}>
              <Image src={`/projects/life-copilot/${shot.file}`} alt={shot.alt} width={shot.mobile ? 410 : 1920} height={shot.mobile ? 893 : 1140} sizes={shot.mobile ? "(max-width: 600px) 260px, 300px" : index === 0 ? "(max-width: 1230px) 95vw, 1180px" : "(max-width: 700px) 95vw, (max-width: 1230px) 46vw, 578px"} />
            </a>
            <figcaption>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{shot.title}</h3><p>{shot.caption}</p><a href={`/projects/life-copilot/${shot.file}`} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span><span className={styles.srOnly}>: {shot.title} (opens in a new tab)</span></a></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
