export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    content: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Executive's Guide to AI Governance",
      excerpt: "How to establish robust governance frameworks that ensure ethical AI deployment while maximizing business value.",
      date: "March 15, 2023",
      author: "Adenola Adegbesan",
      category: "governance",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      content: "AI governance is no longer optional for organizations deploying advanced systems. This article explores the critical components of effective AI governance frameworks, including risk assessment methodologies, ethical guidelines, and accountability mechanisms. Learn how to develop governance structures that protect your organization while enabling innovation."
    },
    {
      id: "2",
      title: "Five AI Implementation Pitfalls and How to Avoid Them",
      excerpt: "Common mistakes that organizations make when implementing AI solutions and strategies to overcome them.",
      date: "February 28, 2023",
      author: "Adenola Adegbesan",
      category: "implementation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content: "Despite the promise of AI, many implementation initiatives fail to deliver expected results. This article examines the five most common pitfalls in AI implementation: unrealistic expectations, poor data quality, lack of cross-functional collaboration, inadequate infrastructure, and insufficient talent. For each challenge, I offer practical strategies based on successful case studies."
    },
    {
      id: "3",
      title: "AI and the Future of Financial Services",
      excerpt: "How AI is transforming investment strategies, risk management, and client services in the financial sector.",
      date: "January 12, 2023",
      author: "Adenola Adegbesan",
      category: "finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      content: "The financial services industry stands at the forefront of AI adoption. This article explores how AI is revolutionizing portfolio management, algorithmic trading, credit assessment, fraud detection, and personalized banking experiences. I also address the regulatory considerations and technological challenges specific to financial institutions implementing AI solutions."
    },
    {
      id: "4",
      title: "Building AI Literacy Across Your Organization",
      excerpt: "Strategies for developing AI competencies at all levels of your company.",
      date: "December 5, 2022",
      author: "Adenola Adegbesan",
      category: "training",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      content: "As AI becomes ubiquitous in business operations, building organizational AI literacy is crucial. This article outlines a comprehensive approach to developing AI capabilities across your workforce, from executive leadership to frontline employees. I provide frameworks for skills assessment, curriculum development, and continuous learning programs tailored to different roles within the organization."
    },
    {
      id: "5",
      title: "Ethical AI: Moving Beyond Principles to Practice",
      excerpt: "Practical frameworks for implementing ethical AI principles in real-world business applications.",
      date: "November 18, 2022",
      author: "Adenola Adegbesan",
      category: "ethics",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      content: "While many organizations have adopted ethical AI principles, translating these into operational practices remains challenging. This article presents actionable approaches for embedding ethics into AI development lifecycles, including assessment tools, documentation practices, testing protocols, and stakeholder engagement models that can help organizations move from aspirational ethics to practical implementation."
    },
    {
      id: "6",
      title: "AI Strategy for Uncertain Times: Adaptability as Competitive Advantage",
      excerpt: "How to develop AI strategies that thrive despite economic volatility and technological disruption.",
      date: "October 7, 2022",
      author: "Adenola Adegbesan",
      category: "strategy",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      content: "In today's uncertain business environment, traditional strategic planning approaches often fall short. This article explores how to build adaptable AI strategies that can respond to changing market conditions, technological developments, and competitive landscapes. I introduce the concept of strategic optionality and provide frameworks for developing AI initiatives that create lasting value regardless of how the future unfolds."
    },
    {
      id: "7",
      title: "The Hidden Costs of AI: What Your CFO Needs to Know",
      excerpt: "Understanding the full financial implications of AI adoption beyond the initial investment.",
      date: "September 20, 2022",
      author: "Adenola Adegbesan",
      category: "finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      content: "While the transformative potential of AI is well-documented, its total cost of ownership is often underestimated. This article provides a comprehensive framework for assessing the true costs of AI initiatives, including data preparation, infrastructure, talent, maintenance, and governance. I also discuss ROI measurement approaches and provide guidance on building financially sustainable AI programs."
    },
    {
      id: "8",
      title: "Board-Level AI Oversight: A Director's Guide",
      excerpt: "How corporate boards should approach their AI governance responsibilities.",
      date: "August 15, 2022",
      author: "Adenola Adegbesan",
      category: "governance",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content: "As AI becomes central to business strategy and operations, corporate boards face new oversight responsibilities. This article outlines the key AI governance questions directors should be asking, risk management frameworks they should implement, and competencies they need to develop. I provide examples of leading practices from boards that have successfully integrated AI oversight into their responsibilities."
    },
    {
      id: "9",
      title: "AI Vendor Selection: Beyond the Sales Pitch",
      excerpt: "A framework for evaluating AI solution providers and making informed procurement decisions.",
      date: "July 12, 2022",
      author: "Adenola Adegbesan",
      category: "implementation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      content: "Choosing the right AI vendors and solution providers is critical for implementation success. This article provides a comprehensive framework for evaluating potential AI partners, including technical capabilities, domain expertise, implementation support, pricing models, and contractual considerations. I also discuss how to structure proof-of-concepts and pilot programs to validate vendor claims before committing to full-scale implementations."
    },
    {
      id: "10",
      title: "The AI Talent Gap: Creative Solutions for Workforce Development",
      excerpt: "Innovative approaches to finding, developing, and retaining AI expertise in a competitive market.",
      date: "June 8, 2022",
      author: "Adenola Adegbesan",
      category: "training",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      content: "The scarcity of AI talent remains a significant barrier to adoption for many organizations. This article explores creative approaches to building AI capabilities, including upskilling existing employees, establishing university partnerships, leveraging global talent through remote work models, and developing organizational structures that maximize the impact of limited technical resources."
    }
  ];