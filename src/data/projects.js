export const projects = [
    {
        id: "nimbus-churn-analysis",
        name: "NimbusAI Customer Churn & Retention Analysis",
        summary: "End-to-end data analyst assignment for a B2B SaaS platform — spanning SQL, MongoDB, Python statistical analysis, and Power BI dashboarding across dual-database architecture with 1,204 customers and 80K+ records.",
        tags: ["SQL", "MongoDB", "Python", "Power BI", "Statistics", "K-Means Clustering"],
        problem: "NimbusAI's VP of Product needed actionable churn insights from messy production data split across PostgreSQL (transactional) and MongoDB (behavioral). The challenge: merge cross-database data, clean 10 data quality issues, perform hypothesis testing, segment customers, and deliver an interactive dashboard — all within 24 hours.",
        skills: ["PostgreSQL", "MongoDB Aggregation Pipelines", "Python (pandas, scipy, scikit-learn)", "Power BI", "Statistical Analysis", "ETL Pipeline Design", "Data Cleaning", "K-Means Clustering", "Hypothesis Testing", "Business Intelligence"],
        features: [
            "5 advanced SQL queries: JOINs + aggregation, window functions (RANK, LAG), CTEs with temporal filtering, time series with rolling averages and anomaly detection, fuzzy duplicate detection with confidence scoring",
            "4 MongoDB aggregation pipelines: tier-segmented sessions per user ($lookup cross-database join), 7-day retention analysis (timestamp-based), onboarding funnel with drop-off rates and median step times, free-tier engagement scoring for upsell targeting",
            "Built nimbus_tier_sync.py ETL bridge — exports PostgreSQL tier data into MongoDB lookup collection, enabling cross-database segmentation within MongoDB pipelines",
            "Cleaned 10 data quality issues: 668 duplicate records, 977 orphan records, mixed field naming (customer_id vs customerId), NULL session durations, inconsistent timestamps, data type mismatches",
            "Welch's t-test hypothesis testing (p≈0.030, Cohen's d≈0.13) proving engagement-churn link is statistically significant but practically negligible",
            "K-Means clustering (k=4) with RFM-inspired features producing 4 actionable segments: Champions, Steady Users, Engaged Explorers, At-Risk",
            "Power BI dashboard with 6 visuals including scatter chart combining SQL + MongoDB data, 2 interactive slicers, and DAX measures",
            "Merged PostgreSQL (7 tables) + MongoDB (3 collections) into single master dataset, exporting 6 cleaned CSVs for dashboard consumption"
        ],
        outcome: "Identified 22.1% overall churn rate driven primarily by low team adoption ('Not enough users' as #1 reason). Discovered Professional-tier support ticket gap suggesting need for 'Enterprise Lite' plan. Segmented 485 high-engagement free-tier users as prime upsell targets. Delivered statistically-backed recommendations: redesign onboarding to mandate team invitations, proactively contact high-ticket Professional users, and trigger upgrade prompts for engaged free users exceeding 75th percentile.",
        githubUrl: "https://github.com/BhaskarPurimitla8/NimbusAI-Data-Analyst-Assignment",
        liveUrl: null,
        screenshots: []
    },
    {
        id: "n8n-job-automation",
        name: "Automated Job Search Pipeline",
        summary: "An n8n workflow automation that fetches fresh job listings from the Adzuna API, intelligently filters by role, experience, and recency, deduplicates results, and exports a clean XLSX report — all on a daily schedule.",
        tags: ["n8n", "Workflow Automation", "API Integration", "JavaScript", "Excel"],
        problem: "Manually searching for relevant fresher-level job openings across multiple roles and locations is time-consuming and repetitive. I needed an automated pipeline that runs daily, pulls fresh listings, and delivers a clean, deduplicated Excel file of only the most relevant opportunities.",
        skills: ["n8n Workflow Design", "REST API Integration", "JavaScript", "Data Filtering", "Data Deduplication", "Workflow Automation", "JSON Data Processing", "Scheduling"],
        features: [
            "Scheduled daily execution at 8 AM via n8n Schedule Trigger",
            "Configurable input parameters for 19 target roles, 4 locations (Hyderabad, Chennai, Bangalore, Remote), and skill-based filtering",
            "Adzuna API integration fetching 50 results per page per role-location combination, sorted by date",
            "Intelligent role whitelist filtering — only keeps jobs matching allowed titles (Data Analyst, Business Analyst, SQL Developer, React Developer, AI Engineer, etc.)",
            "Strict fresher/entry-level experience filtering — blocks senior, lead, manager, and principal roles; rejects listings requiring 3+ years unless explicitly marked as fresher/entry-level",
            "Date-based filtering to surface only jobs posted within the last 3 days",
            "Field extraction for clean output: job title, company, location, apply link, and posted date",
            "Smart deduplication by job ID, URL, or title+company+location combination",
            "Automated XLSX export for easy review and tracking"
        ],
        outcome: "Built a fully automated, zero-maintenance job search pipeline that delivers a curated daily Excel report of relevant fresher-level openings. The workflow processes hundreds of raw listings down to a clean, deduplicated shortlist — saving hours of manual job hunting effort every day.",
        githubUrl: "https://github.com/BhaskarPurimitla8/n8n-Job-Automation",
        liveUrl: null,
        screenshots: ["/screenshots/n8n-job-workflow.png"]
    },
    {
        id: "playstore-eda",
        name: "Play Store App Review Analysis",
        summary: "Exploratory Data Analysis on Play Store apps and user reviews to uncover key factors influencing app engagement and success.",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
        problem: "Understanding what drives app success on the Play Store by analyzing app details, user reviews, ratings, installs, and sentiment to identify actionable insights for app developers.",
        skills: ["Python", "Data Analysis", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Statistical Analysis", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        features: [
            "Comprehensive data cleaning: removed duplicates, imputed missing values, standardized units",
            "Revenue estimation based on installs and pricing",
            "Correlation analysis between reviews, ratings, installs, and pricing",
            "Category-wise distribution analysis (Family, Games, Tools most popular)",
            "Content rating analysis (82% apps rated 'Everyone')",
            "App size group analysis revealing larger apps (>90 MB) have higher popularity",
            "Sentiment analysis: 64% positive, 22% negative, 14% neutral reviews",
            "Interactive visualizations: heatmaps, bar charts, pie charts, histograms"
        ],
        outcome: "Derived actionable insights for app developers: Focus on Games and Tools categories for visibility, optimize app sizes to balance competition and popularity, and address negative reviews to improve user sentiment. Analysis revealed that free apps dominate (92%) and Games/Communication categories have the highest installs.",
        githubUrl: "https://github.com/BhaskarPurimitla8/EDA-Playsotre_App_Review_Analysis",
        liveUrl: null,
        screenshots: []
    },
    {
        id: "store-data-mysql",
        name: "Store Data Analysis Using MySQL",
        summary: "Comprehensive SQL-based analysis of store sales data with interactive Power BI dashboard for business insights and decision-making.",
        tags: ["MySQL", "SQL", "Power BI", "Data Analysis", "Business Intelligence"],
        problem: "Analyzing retail store sales data to extract meaningful business insights, identify trends, and support data-driven decision making through SQL queries and visual dashboards.",
        skills: ["MySQL", "SQL Queries", "Data Analysis", "Power BI", "Data Visualization", "Business Intelligence", "Data Modeling", "ETL"],
        features: [
            "Complex SQL queries for data extraction and analysis",
            "Data cleaning and transformation from raw CSV to structured database",
            "Advanced SQL operations: JOINs, aggregations, subqueries, window functions",
            "Interactive Power BI dashboard for visual analytics",
            "Sales performance analysis across different dimensions",
            "Trend analysis and business metrics calculation",
            "Answering business questions through structured SQL queries",
            "Data-driven insights for store operations optimization"
        ],
        outcome: "Successfully analyzed store data using MySQL to answer critical business questions, created an interactive Power BI dashboard for stakeholders to visualize key metrics, and provided actionable insights for improving store performance and sales strategies.",
        githubUrl: "https://github.com/BhaskarPurimitla8/Store_Data-Analysis-Using-MYSQL",
        liveUrl: null,
        screenshots: []
    },
    {
        id: "vrinda-store-excel",
        name: "Vrinda Store Data Analysis",
        summary: "Comprehensive Excel-based sales analysis with interactive dashboard, KPIs, and actionable business insights for revenue growth.",
        tags: ["Excel", "Data Analysis", "Dashboard", "KPIs", "Data Visualization"],
        problem: "Analyzing Vrinda Store's sales performance to identify patterns, trends, and actionable insights that drive growth and increase revenue through data-driven decision-making.",
        skills: ["Microsoft Excel", "Data Cleaning", "Pivot Tables", "Data Visualization", "Dashboard Design", "KPI Development", "Business Intelligence", "Statistical Analysis"],
        features: [
            "Comprehensive data cleaning: removed duplicates, handled missing values, standardized formats",
            "Advanced categorization: added age groups and month columns for deeper analysis",
            "Interactive dashboard with slicers for gender, age group, and order status filtering",
            "Key Performance Indicators: Total Sales, Total Orders, Top Category, Average Order Value",
            "Sales trends analysis over time and seasonal patterns identification",
            "Order status distribution (Delivered, Returned, Refunded, Cancelled)",
            "Gender-wise and age group-wise sales analysis",
            "Sales channel performance analysis (Online vs Offline)",
            "B2B vs B2C customer segmentation and revenue contribution",
            "Category and SKU performance rankings"
        ],
        outcome: "Delivered actionable insights revealing 92% delivery rate, identified high-performing age groups (25-44), discovered B2B accounts for significant revenue share, and provided 7 strategic recommendations including targeted marketing for top demographics, enhanced customer experience to reduce 8% return rate, and channel optimization strategies resulting in data-driven growth roadmap.",
        githubUrl: "https://github.com/BhaskarPurimitla8/Vrinda-Store-Data-Analysis",
        liveUrl: null,
        screenshots: []
    },
    {
        id: "airbnb-eda",
        name: "Airbnb NYC Booking Analysis",
        summary: "Exploratory Data Analysis of 49K Airbnb listings in NYC with Power BI dashboard revealing pricing strategies, market trends, and ₹62.8M revenue insights.",
        tags: ["Power BI", "Data Analysis", "EDA", "Dashboard", "Business Intelligence"],
        problem: "Analyzing Airbnb NYC market data to uncover insights that help hosts optimize pricing strategies, identify profitable neighborhoods, and understand customer preferences for improved decision-making.",
        skills: ["Power BI", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Dashboard Design", "Statistical Analysis", "Business Intelligence", "Market Analysis"],
        features: [
            "Analyzed 48,895 Airbnb listings with 16 key attributes",
            "Comprehensive data cleaning: handled missing values, removed irrelevant columns",
            "Created calculated columns: Revenue (Price × Minimum Nights), Price Categories (Low/Medium/High)",
            "Neighborhood analysis: Manhattan and Brooklyn dominate with highest listings and revenue",
            "Room type distribution: 51.97% entire homes/apartments, significant private room share",
            "Host performance analysis: identified top hosts (Michael, David, Blueground) by listings and revenue",
            "Price category analysis: Medium pricing dominates, High-price contributes significant revenue",
            "Interactive Power BI dashboard with filters for neighborhood, room type, and price categories",
            "Revenue insights: Premium neighborhoods like Midtown generate highest returns (₹62.8M total)",
            "Market opportunity identification: Staten Island shows growth potential"
        ],
        outcome: "Delivered actionable insights revealing Manhattan and Brooklyn as key markets, entire homes as most preferred (52%), and premium properties generating highest revenue. Identified professional hosts focusing on high-value properties succeed more. Provided recommendations to focus on premium Manhattan/Brooklyn listings, optimize pricing strategies, and leverage seasonal demand. Dashboard enables stakeholders to make data-driven decisions for maximizing profitability in competitive NYC market.",
        githubUrl: "https://github.com/BhaskarPurimitla8/EDA-Airbnb-Booking-Analysis",
        liveUrl: null,
        screenshots: []
    }
];
