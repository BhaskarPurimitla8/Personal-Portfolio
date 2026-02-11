export const projects = [
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
