import Link from "next/link";
import { Headland_One } from "next/font/google";
const headland=Headland_One({weight:['400'],subsets:['latin-ext']})
export const metadata = {
  title: 'Blogs',
  description:'Blogs Page',
  keywords:['blogs','blogs page']
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
  
export default function blogsPage(){

    return (
        <div className={`${headland.className} p-24`}>
         <h2 className='text-center font-bold mb-5'> Blogs page</h2>
          {
            blogs.map(blog=>(
                <div key={blog.id} className='border-2 border-black p-3 mb-5'>
                    <h2 className='font-semibold'>{blog.title}</h2>
                    <h2>{blog.description}</h2>
                    <Link href={`/blogs/${blog.slug}`} className='btn bg-blue-300 p-1 border rounded-sm'>View Details</Link>
                </div>
            ))
          }
        </div>
    )
}