# Tool Share App: original portfolio draft

Retained for planning reference. This draft described intended functionality as completed work; those claims are not a record of implementation. Actual progress is planning and some initial environment setup only. The public project page reflects that status.

~~~ts
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
~~~

