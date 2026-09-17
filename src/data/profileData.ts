import { ProjectItem, TechItem, MLConceptItem, RoadmapStep, MLStage } from '../types';

export const PROFILE_INFO = {
  name: "Nitin Patel",
  tagline: "AI & Machine Learning Student | Software Developer",
  email: "nitinpatel7337@gmail.com",
  githubUsername: "nitin-patel-0907",
  githubUrl: "https://github.com/nitin-patel-0907",
  portfolioUrl: "https://portfolio-ni-tin.vercel.app/",
  linkedinUrl: "https://www.linkedin.com/in/nitin-patel-0907",
  typingPhrases: [
    "AI & Machine Learning Enthusiast",
    "Data & Software Development",
    "Building Intelligent Systems",
    "Learning | Building | Improving"
  ],
  bio: "I'm Nitin Patel, an AI & Machine Learning student and software developer interested in building practical, data-driven solutions. I enjoy taking a problem from data → analysis → model → solution, while continuously improving my programming and software engineering skills.",
  coreInterests: [
    "Artificial Intelligence & Machine Learning",
    "Data Analysis & Data Science",
    "Software Development & Clean Architecture",
    "Problem Solving & Algorithmic Foundations",
    "Real-World Applied ML Systems"
  ],
  focusAreas: [
    { title: "Building & experimenting with ML projects", icon: "Bot", category: "AI/ML" },
    { title: "Advanced data analysis with Python", icon: "LineChart", category: "Data" },
    { title: "Improving Pandas / NumPy skills", icon: "Binary", category: "Data" },
    { title: "Strengthening ML fundamentals", icon: "Brain", category: "AI/ML" },
    { title: "Model evaluation & validation metrics", icon: "TrendingUp", category: "Evaluation" },
    { title: "Better software development practices", icon: "Code2", category: "Engineering" },
    { title: "Git & GitHub team collaboration", icon: "GitFork", category: "Workflow" },
    { title: "ML experimentation in Google Colab", icon: "Cloud", category: "Platform" },
    { title: "Building a strong technical portfolio", icon: "Rocket", category: "Career" }
  ],
  careerInterests: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analysis",
    "Data Science",
    "Software Development",
    "ML/AI Projects",
    "Internships & Entry-Level Roles"
  ],
  mindset: {
    loop: "Learn → Build → Experiment → Improve → Repeat",
    motto: "Building today. Learning every day. 🚀"
  }
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    description: "Personal developer portfolio showcasing background, technical skills, machine learning projects, and developer journey.",
    longDescription: "A modern, lightning-fast developer portfolio website designed with clean typography, responsive layouts, and interactive project cards. Demonstrates frontend craftsmanship paired with a technical profile.",
    builtWith: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://portfolio-ni-tin.vercel.app/",
    repoUrl: "https://github.com/nitin-patel-0907/Portfolio",
    iconName: "Globe",
    status: "Live",
    category: "Web App",
    highlights: [
      "Modern React 18 + Vite SPA architecture",
      "Responsive, mobile-first design with Tailwind CSS",
      "Showcases technical skills, certifications, and project demos",
      "Deployed and hosted continuously on Vercel"
    ]
  },
  {
    id: "finvista",
    title: "FinVista",
    description: "A financial intelligence application applying software and data-driven concepts to practical financial use cases.",
    longDescription: "FinVista bridges software engineering and financial metrics to empower users to track, analyze, and visualize fiscal data, budgets, and key indicators with clear analytical breakdowns.",
    builtWith: ["Python", "Data Analysis", "Financial Modeling", "Visualization"],
    repoUrl: "https://github.com/nitin-patel-0907/FinVista",
    iconName: "Coins",
    status: "Completed",
    category: "Finance / Data",
    highlights: [
      "Data-driven financial calculations and budgeting logic",
      "Analysis of historical financial inputs and cash flow trends",
      "Clean modular code structure following software engineering best practices",
      "Intuitive reporting of financial health and insights"
    ]
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    description: "A data-oriented project analyzing sales information and presenting actionable business insights through interactive dashboards.",
    longDescription: "Analyzes raw sales data across time periods, regions, and categories to compute key performance indicators (KPIs), trends, and revenue distributions for stakeholder decision-making.",
    builtWith: ["Python", "Pandas", "Matplotlib", "Seaborn", "Dashboard UI"],
    repoUrl: "https://github.com/nitin-patel-0907/Sales_Dashboard",
    iconName: "BarChart3",
    status: "Completed",
    category: "Data Analytics",
    highlights: [
      "Data cleaning and transformation of heterogeneous sales logs",
      "Aggregation pipelines for revenue, margins, and regional volumes",
      "Interactive data visualizations highlighting seasonal growth patterns",
      "Actionable summaries tailored for business intelligence"
    ]
  }
];

export const TECH_ITEMS: TechItem[] = [
  // Programming
  { name: "Python", category: "Programming", description: "Primary language for ML, scientific computing, and backend scripts" },
  { name: "C", category: "Programming", description: "Low-level system concepts, memory management, and pointers" },
  { name: "C++", category: "Programming", description: "Object-oriented programming, data structures, and algorithms" },
  { name: "Java", category: "Programming", description: "Object-oriented design, robust enterprise-grade applications" },
  
  // Data & ML
  { name: "Pandas", category: "Data & ML", description: "Data manipulation, DataFrame queries, cleaning, and time series" },
  { name: "NumPy", category: "Data & ML", description: "High-performance multi-dimensional array computing and linear algebra" },
  { name: "Matplotlib", category: "Data & ML", description: "Static, animated, and interactive data plotting and visualizations" },
  { name: "Seaborn", category: "Data & ML", description: "Statistical data visualization built atop Matplotlib with elegant aesthetics" },
  { name: "Scikit-Learn", category: "Data & ML", description: "Supervised and unsupervised ML algorithms, model validation, and pipelines" },

  // Web & Software
  { name: "React", category: "Web & Software", description: "Component-driven user interfaces with modern hooks and state management" },
  { name: "TypeScript", category: "Web & Software", description: "Strictly typed JavaScript for scalable, reliable web applications" },
  { name: "Vite", category: "Web & Software", description: "Fast next-generation frontend tooling and bundler" },
  { name: "Tailwind CSS", category: "Web & Software", description: "Utility-first CSS framework for rapid and maintainable responsive UI" },
  { name: "HTML5 / CSS3", category: "Web & Software", description: "Semantic web structure, accessible markup, and modern styles" },
  { name: "JavaScript", category: "Web & Software", description: "Core ES6+ client-side logic and asynchronous programming" },

  // Database
  { name: "MySQL", category: "Database", description: "Relational database management, schema design, and complex SQL queries" },

  // Tools
  { name: "Git", category: "Tools", description: "Distributed version control, branching strategies, and commit hygiene" },
  { name: "GitHub", category: "Tools", description: "Code collaboration, pull requests, issue tracking, and CI/CD actions" },
  { name: "VS Code", category: "Tools", description: "Primary IDE configured with linting, debugging, and extensions" },
  { name: "Google Colab", category: "Tools", description: "Cloud Jupyter notebooks for GPU/TPU accelerated ML experimentation" }
];

export const ML_WORKFLOW_STAGES: MLStage[] = [
  {
    id: 1,
    title: "Problem Definition",
    shortDesc: "Formulating business & research goals into formal ML objectives.",
    details: "Translating ambiguous domain questions into concrete supervised or unsupervised tasks with defined success criteria.",
    tools: ["Domain Analysis", "KPI Definition", "Feasibility Study"]
  },
  {
    id: 2,
    title: "Dataset Collection",
    shortDesc: "Sourcing representative data from files, APIs, and databases.",
    details: "Gathering structured or unstructured datasets with appropriate sampling, license verification, and storage planning.",
    tools: ["Web Scraping", "SQL Queries", "Kaggle", "APIs"]
  },
  {
    id: 3,
    title: "Data Understanding",
    shortDesc: "Auditing feature distributions, data types, and initial patterns.",
    details: "Inspecting metadata, summary statistics (mean, median, variance), and initial cardinality across all target columns.",
    tools: ["Pandas", "Summary Stats", "Info & Describe"]
  },
  {
    id: 4,
    title: "Data Cleaning",
    shortDesc: "Remediating nulls, anomalies, duplicate records, and outliers.",
    details: "Handling missing values via imputation or deletion, detecting extreme outliers via IQR/z-score, and normalizing datatypes.",
    tools: ["Pandas", "NumPy", "Imputation Rules"]
  },
  {
    id: 5,
    title: "Exploratory Data Analysis",
    shortDesc: "Discovering correlations, distributions, and domain signals.",
    details: "Visualizing univariate and bivariate distributions, heatmaps of Pearson/Spearman correlations, and feature-target relationships.",
    tools: ["Matplotlib", "Seaborn", "Correlation Heatmaps"]
  },
  {
    id: 6,
    title: "Feature Engineering",
    shortDesc: "Transforming raw data into high-signal model inputs.",
    details: "Encoding categorical variables (One-Hot, Ordinal), scaling numerical features (StandardScaler, MinMaxScaler), and interaction features.",
    tools: ["Scikit-Learn", "Feature Scaling", "Target Encoding"]
  },
  {
    id: 7,
    title: "Train / Validation / Test Split",
    shortDesc: "Partitioning data to prevent leakage and enable true validation.",
    details: "Executing stratified splits or temporal splits to ensure distribution parity between training sets and unseen test evaluations.",
    tools: ["train_test_split", "K-Fold Cross-Validation"]
  },
  {
    id: 8,
    title: "Model Training",
    shortDesc: "Fitting baseline and candidate algorithms to training data.",
    details: "Training diverse model families: linear/logistic models, decision trees, random forests, and gradient boosters.",
    tools: ["Scikit-Learn", "Hyperparameter Search", "Google Colab"]
  },
  {
    id: 9,
    title: "Model Evaluation",
    shortDesc: "Assessing performance against validation metrics and baselines.",
    details: "Analyzing confusion matrices, PR-AUC, ROC-AUC, RMSE, and error distributions to verify generalization without overfitting.",
    tools: ["Classification Report", "Confusion Matrix", "Residual Plots"]
  },
  {
    id: 10,
    title: "Model Selection",
    shortDesc: "Benchmarking trade-offs between precision, speed, and complexity.",
    details: "Selecting optimal weights based on production constraints, inference latency, interpretability, and validation scores.",
    tools: ["Cross-Validation Scores", "Bias-Variance Tradeoff"]
  },
  {
    id: 11,
    title: "Final Model & Deployment",
    shortDesc: "Packaging the best model for inference and downstream solutions.",
    details: "Serializing trained pipelines (joblib/pickle), writing inference wrappers, and publishing API endpoints or application integration.",
    tools: ["Joblib", "Pickle", "REST APIs", "Integration Test"]
  }
];

export const ML_CONCEPTS: MLConceptItem[] = [
  // Data & Statistics
  {
    title: "Descriptive Statistics",
    category: "Data & Statistics",
    summary: "Measures of central tendency (mean, median, mode) and dispersion (standard deviation, variance, interquartile range).",
    formulaOrKeyIdea: "μ = Σx / N,  σ = √(Σ(x - μ)² / N)",
    importance: "Fundamental foundation for understanding data spread and spotting distortions before modeling."
  },
  {
    title: "Probability & Distributions",
    category: "Data & Statistics",
    summary: "Quantifying uncertainty and fitting empirical data to known theoretical curves (Gaussian, Binomial, Poisson).",
    formulaOrKeyIdea: "P(A|B) = P(B|A) · P(A) / P(B)",
    importance: "Informs assumptions behind algorithms like Naive Bayes and maximum likelihood estimation."
  },
  {
    title: "Hypothesis Testing",
    category: "Data & Statistics",
    summary: "Determining whether observed effects in sample data reflect genuine population truths or random fluctuations.",
    formulaOrKeyIdea: "p-value < α (typically 0.05) → Reject Null Hypothesis H₀",
    importance: "Validates A/B testing and statistical significance of engineered features."
  },
  {
    title: "Type I & II Errors",
    category: "Data & Statistics",
    summary: "Type I: False Positive (rejecting true H₀). Type II: False Negative (failing to reject false H₀).",
    formulaOrKeyIdea: "α = P(Type I Error),  β = P(Type II Error), Power = 1 - β",
    importance: "Guides risk thresholds in medical diagnoses, fraud detection, and safety systems."
  },
  {
    title: "Homoscedasticity vs Heteroscedasticity",
    category: "Data & Statistics",
    summary: "Homoscedasticity occurs when residuals have equal variance across all predictor values; heteroscedasticity violates linear regression assumptions.",
    formulaOrKeyIdea: "Var(ε | X) = constant vs Var(ε | X) varies with X",
    importance: "Diagnosing funnel shapes in residual plots ensures regression confidence intervals are valid."
  },

  // Machine Learning
  {
    title: "Supervised vs Unsupervised Learning",
    category: "Machine Learning",
    summary: "Supervised models learn mappings from labeled inputs (X → y); unsupervised algorithms discover hidden patterns in unlabelled data (clustering, PCA).",
    formulaOrKeyIdea: "Supervised: min L(f(x), y) | Unsupervised: min Reconstruction Error / Cluster Inertia",
    importance: "Determines the foundational problem framing and training pipeline structure."
  },
  {
    title: "Data Preprocessing & Scaling",
    category: "Machine Learning",
    summary: "Transforming features into appropriate ranges to prevent distance-based algorithms from being skewed by large magnitudes.",
    formulaOrKeyIdea: "StandardScaler: z = (x - μ) / σ | MinMaxScaler: x_norm = (x - min) / (max - min)",
    importance: "Critical for gradient descent convergence, KNN, SVM, and neural network performance."
  },
  {
    title: "Cross-Validation & Data Leakage Prevention",
    category: "Machine Learning",
    summary: "Iterative k-fold training where every partition is used as validation, ensuring no test data informs preprocessing steps.",
    formulaOrKeyIdea: "K-Fold (k=5 or 10): E = (1/K) Σ Score_i",
    importance: "Guarantees reliable out-of-sample performance estimates and prevents optimistic bias."
  },
  {
    title: "Hyperparameter Tuning",
    category: "Machine Learning",
    summary: "Systematically discovering the optimal model configuration (e.g., learning rate, max depth, regularization penalty).",
    formulaOrKeyIdea: "GridSearchCV vs RandomizedSearchCV vs Bayesian Optimization",
    importance: "Extracts maximum predictive power while controlling overfitting."
  },

  // Classification Evaluation
  {
    title: "Confusion Matrix",
    category: "Classification",
    summary: "A 2x2 or NxN contingency table categorizing True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN).",
    formulaOrKeyIdea: "[ [TN, FP], [FN, TP] ]",
    importance: "The mathematical backbone for calculating almost all classification performance metrics."
  },
  {
    title: "Accuracy, Precision & Recall",
    category: "Classification",
    summary: "Precision measures exactness (how many selected items were relevant), while Recall measures completeness (how many relevant items were selected).",
    formulaOrKeyIdea: "Precision = TP / (TP + FP) | Recall = TP / (TP + FN)",
    importance: "Indispensable for imbalanced classes where simple accuracy is misleading."
  },
  {
    title: "F1 Score & F-beta Score",
    category: "Classification",
    summary: "Harmonic mean of precision and recall. F-beta weights recall higher (β > 1) or precision higher (β < 1).",
    formulaOrKeyIdea: "F1 = 2 · (Precision · Recall) / (Precision + Recall)",
    importance: "Single metric that balances both error types on imbalanced datasets."
  },
  {
    title: "PR-AUC vs ROC-AUC",
    category: "Classification",
    summary: "Area under the Precision-Recall curve is favored for severe class imbalance, while ROC-AUC evaluates true positive vs false positive rates across thresholds.",
    formulaOrKeyIdea: "ROC: TPR vs FPR | PR: Precision vs Recall",
    importance: "Evaluates threshold-invariant model discriminative capability."
  },
  {
    title: "Hinge Loss",
    category: "Classification",
    summary: "Loss function used for maximum-margin classification (notably in Support Vector Machines).",
    formulaOrKeyIdea: "L(y, f(x)) = max(0, 1 - y · f(x))",
    importance: "Penalizes not only misclassifications but also correct predictions that are too close to the decision boundary."
  },

  // Regression Evaluation
  {
    title: "Mean Absolute Error (MAE)",
    category: "Regression",
    summary: "Average magnitude of errors between predicted and actual values without considering direction.",
    formulaOrKeyIdea: "MAE = (1/n) Σ |y_i - ŷ_i|",
    importance: "Linear score that is robust to extreme outliers compared to squared metrics."
  },
  {
    title: "Mean Squared Error (MSE)",
    category: "Regression",
    summary: "Average of squared differences between predictions and actuals; penalizes larger errors disproportionately.",
    formulaOrKeyIdea: "MSE = (1/n) Σ (y_i - ŷ_i)²",
    importance: "Smoothly differentiable loss function standard for gradient-based optimizers."
  },
  {
    title: "Root Mean Squared Error (RMSE)",
    category: "Regression",
    summary: "Square root of MSE, restoring error magnitude back to the original units of the target variable.",
    formulaOrKeyIdea: "RMSE = √MSE",
    importance: "Most intuitive squared-error metric for stakeholders and engineers."
  },
  {
    title: "Coefficient of Determination (R²)",
    category: "Regression",
    summary: "Proportion of target variance explained by the independent predictor variables in the model.",
    formulaOrKeyIdea: "R² = 1 - (SS_res / SS_tot)",
    importance: "Normalized benchmark (0 to 1, or negative if worse than the mean baseline) for comparing model fit."
  }
];

export const LEARNING_ROADMAP: RoadmapStep[] = [
  {
    step: 1,
    title: "Python Fundamentals",
    status: "Mastered",
    skills: ["Syntax", "Data Structures", "Functions", "OOP Basics", "File I/O"],
    description: "Solid foundation in Python programming, clean coding conventions, and algorithm implementation."
  },
  {
    step: 2,
    title: "NumPy & Pandas",
    status: "Mastered",
    skills: ["Vectorization", "Broadcasting", "DataFrames", "Indexing", "Groupby"],
    description: "High-performance numerical computing and tabular data manipulation for ML pipelines."
  },
  {
    step: 3,
    title: "Data Analysis & Visualization",
    status: "Mastered",
    skills: ["Exploratory Data Analysis", "Matplotlib", "Seaborn", "Feature Correlation"],
    description: "Extracting insights, identifying anomalies, and presenting quantitative stories visually."
  },
  {
    step: 4,
    title: "Applied Statistics",
    status: "In Progress",
    skills: ["Distributions", "Hypothesis Testing", "Probability", "P-Values", "Homoscedasticity"],
    description: "Mathematical grounding for interpreting models, conducting A/B tests, and validating hypotheses."
  },
  {
    step: 5,
    title: "Machine Learning Algorithms",
    status: "In Progress",
    skills: ["Linear & Logistic Regression", "Decision Trees", "Random Forest", "KNN", "SVM"],
    description: "Implementation of supervised and unsupervised learning algorithms using Scikit-Learn."
  },
  {
    step: 6,
    title: "Model Evaluation & Validation",
    status: "In Progress",
    skills: ["Cross-Validation", "Confusion Matrix", "PR-AUC", "RMSE", "Hyperparameter Tuning"],
    description: "Rigorous testing to prevent overfitting, detect data leakage, and optimize performance."
  },
  {
    step: 7,
    title: "Advanced Machine Learning",
    status: "Upcoming",
    skills: ["XGBoost", "LightGBM", "Ensemble Methods", "Feature Selection", "Pipelines"],
    description: "Competitive ML techniques, state-of-the-art gradient boosting, and complex feature spaces."
  },
  {
    step: 8,
    title: "Deep Learning Foundations",
    status: "Upcoming",
    skills: ["Neural Networks", "Backpropagation", "PyTorch / TensorFlow", "CNNs", "Optimization"],
    description: "Deep multi-layer architectures, tensor computations, and representation learning."
  },
  {
    step: 9,
    title: "Real-World AI Applications",
    status: "Upcoming",
    skills: ["Model Deployment", "Inference APIs", "MLOps", "Monitoring", "Production Pipelines"],
    description: "Deploying intelligent systems into production with automated monitoring and software reliability."
  }
];
