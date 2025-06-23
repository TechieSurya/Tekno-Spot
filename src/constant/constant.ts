export const reviewData=[
    {
        id:1,
        name:"Bhaskaran",
        company:"Trinity Plus Social Trust",
        review:"We, Trinity Plus Social Trust, are truly impressed with Tekno Spot's professional approach and dedication. Within a month of partnering with them, our LinkedIn profile reached 500+ meaningful professional connections.  Highly recommended for any NGO or professional looking to grow online with purpose!",
    },
    {
        id:2,
        name:"Prakash Raj",
        company:"Ulav Tech",
        review:"We recently worked with Tekno Spot to build our web application. The team was professional, responsive, and truly understood our vision of transforming agriculture through technology.We are very satisfied with their service and highly recommend Tekno Spot for any web development needs.",
    },
    {
        id:3,
        name:"Vimalesh",
        company:"Rockfort Developers",
        review:"Recently we dealt with Tekno Spot for making Website. We're real estate promoting agency. Before the website creation we only generate leads through offline marketing and cold calls. Now we are receiving Leads through Google Search and Website. Tekno Spot is the Best Web Development Company in Trichy.",
    },
    {
        id:4,
        name:"Sundara Moorthi",
        company:"Aaraniyam Farm",
        review:"Best Web Design Company...Great Work for Our Plants Listing Website...Highly recommend Web Design Company in Trichy",
    },
]

export interface Service {
  title: string;
  description: string;
  topPurpleBar?: boolean;
  topGradientUnderline?: boolean;
  bottomGradientUnderline?: boolean;
  blueBottom?: boolean;
}

export const services: Service[] = [
  {
    title: "Web Design",
    description: "We design and develop highly interactive websites that move your business forward.",
    topPurpleBar: true,
    bottomGradientUnderline: true
  },
  {
    title: "App Development",
    description: "We develop Web Apps, Hybrid Apps, Native Apps to accelerate your business growth.",
    topGradientUnderline: true,
    blueBottom: true
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Maximize search engine love and drive organic traffic to your website with proven SEO Strategy.",
    topPurpleBar: true,
    bottomGradientUnderline: true
  },
  {
    title: "SEM (Search Engine Marketing)",
    description: "We rank business websites higher in Google Search results to get in front of your target audience.",
    topGradientUnderline: true,
    blueBottom: true
  },
  {
    title: "Graphics Design",
    description: "We create eye-catching, attractive and impressive designs. Logos, Social Media Posters, Brouchers and more.",
    topPurpleBar: true,
    bottomGradientUnderline: true
  },
  {
    title: "SMM (Social Media Marketing)",
    description: "We run creative advertisement campaigns on social media to accelerate your business growth.",
    topGradientUnderline: true,
    blueBottom: true
  },
  {
    title: "Video Production",
    description: "We produce professional and high-quality videos that will impress your target audience.",
    topPurpleBar: true,
    bottomGradientUnderline: true
  }
];