export type Project = {
  slug: string;
  number: string;
  type: string;
  title: string;
  summary: string;
  problem: string;
  goal: string;
  role: string;
  tech: string[];
  features: string[];
  challenges: string;
  learned: string;
  improvements: string[];
  highlight: string;
  className: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "life-copilot",
    number: "01",
    type: "Full-stack application",
    title: "Life Copilot",
    summary:
      "A personal productivity system that helps users manage goals through weekly planning, daily rotation, progress tracking, and adaptive surfacing logic.",
    problem:
      "Goals can become difficult to act on when planning, daily priorities, and progress live in separate places. Static task lists also tend to surface everything at once instead of helping users focus on what matters today.",
    goal:
      "Build a persistent, authenticated system that connects weekly planning to daily action. Rotation, scoring, and adaptive surfacing logic help determine which goals and tasks should receive attention at the right time.",
    role:
      "I developed the product concept and iterated on its planning model, user experience, and system behavior. I designed the Angular interface, built the C#/.NET API and PostgreSQL persistence layer, implemented authentication and state management, and refined the rotation and scoring logic through continued use.",
    tech: [
      "Angular",
      "C#",
      ".NET",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "State management",
    ],
    features: [
      "Weekly planning connected to daily priorities",
      "Daily goal rotation and adaptive surfacing logic",
      "Progress tracking supported by a scoring model",
      "Authenticated accounts with persistent user data",
    ],
    challenges:
      "The most difficult work was translating subjective ideas such as importance, recency, and progress into rotation and scoring rules that felt helpful rather than arbitrary. Those rules also needed to stay consistent across client state, API behavior, and stored data.",
    learned:
      "I learned to treat product logic as something that must be tested through real use and iteration. The project strengthened my ability to evolve a data model and API alongside the interface while keeping user goals—not technical novelty—at the center.",
    improvements: [
      "Continue tuning rotation and scoring from usage feedback",
      "Expand automated tests around adaptive surfacing rules",
      "Add richer planning insights without increasing daily complexity",
    ],
    highlight: "Productivity, simplified",
    className: "project-coral",
    tags: ["Angular", ".NET", "PostgreSQL", "Product thinking"],
  },
  {
    slug: "tool-share-app",
    number: "02",
    type: "Community platform",
    title: "Tool Share App",
    summary:
      "A full-stack app that allows friends to list tools, request to borrow them, and track ownership and borrowing status.",
    problem:
      "Useful tools are expensive, take up space, and often sit unused. Neighbors may be willing to share, but they need a reliable way to see what is available and coordinate borrowing.",
    goal:
      "Create a straightforward full-stack platform where friends can list tools, find what they need, submit borrowing requests, and clearly understand ownership and borrowing status.",
    role:
      "I designed the database model and REST API, built the Java Spring Boot backend, connected the React interface to each borrowing workflow, and containerized the application with Docker for a more consistent development and deployment setup.",
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
    features: [
      "Searchable tool listings with useful details",
      "Borrowing requests and status management",
      "Ownership and borrowing status tracking",
      "Validation and feedback for important actions",
    ],
    challenges:
      "Borrowing is a multi-person workflow with several possible states. Keeping the React client, Spring Boot API, and PostgreSQL data aligned while making ownership and request states understandable required careful database and API design.",
    learned:
      "I gained a stronger appreciation for defining domain language early. Clear names for ownership, requests, approvals, returns, and availability made the database, REST endpoints, and interface easier to reason about together.",
    improvements: [
      "Add location-aware discovery and filtering",
      "Introduce notifications for request updates",
      "Expand containerized integration and API test coverage",
    ],
    highlight: "Built for sharing",
    className: "project-blue",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    slug: "website-redesign",
    number: "03",
    type: "Front-end experience",
    title: "Mom’s Website Redesign",
    summary:
      "A modernized website concept for a small personal and business site, focused on clearer messaging, improved layout, and a more professional visual presentation.",
    problem:
      "The existing personal and business site needed clearer messaging, stronger content organization, and a presentation that better reflected the person and work behind it.",
    goal:
      "Modernize the website concept with a clearer content hierarchy, improved responsive layout, and a more professional visual direction while staying approachable and personal.",
    role:
      "I worked directly with my mom to understand her goals and clarify the site’s message. I reorganized the content, developed the visual redesign, translated feedback into revisions, and created a responsive layout for the updated concept.",
    tech: [
      "User experience",
      "Content organization",
      "Visual design",
      "Responsive layout",
      "Client communication",
    ],
    features: [
      "Simplified, task-oriented navigation",
      "Clearer personal and business messaging",
      "Improved typography and visual hierarchy",
      "Responsive presentation across screen sizes",
    ],
    challenges:
      "The challenge was balancing personal preferences with user-experience principles. Feedback needed to be translated into a cohesive design without losing the warmth and personality of the original site.",
    learned:
      "I learned how important client communication is to design work. Asking better questions and organizing the content before refining the visuals led to clearer decisions and made feedback easier to act on.",
    improvements: [
      "Validate the revised messaging with target visitors",
      "Add final imagery and accessibility review",
      "Measure whether the redesigned calls to action are clearer",
    ],
    highlight: "Clearer by design",
    className: "project-gold",
    tags: ["UX", "Content strategy", "Responsive design", "Client work"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
