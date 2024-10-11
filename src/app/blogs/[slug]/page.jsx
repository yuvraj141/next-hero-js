//function for Dynamic metadata
export const generateMetadata=async({params})=>{
  return {
    title :`Blog Details for ${params.slug}`
  }
}
export default function slugPage({params}){
console.log(params);
const {title,description}=blogs.find(blog=> blog.slug=== params.slug)

    return(
        <div>
        <h3 className='text-pink-950 font-bold'>welcome to Details page</h3>
        <div className='h-screen'>
            <h2>{title}</h2>
            <h2>{description}</h2>
        </div>
        </div>
    )
}
const blogs=[
    {
      "slug": "intro-to-landscape-painting",
      "title": "Introduction to Landscape Painting",
      "description": "Learn the basics of landscape painting, including key techniques and styles that capture the beauty of nature."
    },
    {
      "slug": "mastering-portrait-drawing",
      "title": "Mastering Portrait Drawing",
      "description": "A guide to drawing realistic and expressive portraits, from proportions to shading techniques."
    },
    {
      "slug": "watercolour-painting-tips",
      "title": "Top Tips for Watercolour Painting",
      "description": "Explore essential watercolour techniques and tools to create vibrant and fluid art pieces."
    },
    {
      "slug": "oil-painting-for-beginners",
      "title": "Oil Painting for Beginners",
      "description": "Discover the fundamentals of oil painting, including color mixing, brushwork, and canvas preparation."
    },
    {
      "slug": "charcoal-sketching-basics",
      "title": "Charcoal Sketching Basics",
      "description": "An introduction to charcoal sketching, focusing on blending, shading, and texture to create striking art."
    },
    {
      "slug": "cartoon-drawing-tips",
      "title": "Cartoon Drawing: Tips and Techniques",
      "description": "A fun guide to drawing cartoon characters, covering proportions, expressions, and dynamic poses."
    },
    {
      "slug": "exploring-modern-art",
      "title": "Exploring Modern Art Styles",
      "description": "A deep dive into modern art movements, including abstract, expressionism, and surrealism."
    },
    {
      "slug": "choosing-the-right-art-materials",
      "title": "Choosing the Right Art Materials",
      "description": "A comprehensive guide to selecting the best art materials, from brushes to paints and canvases."
    }
  ]