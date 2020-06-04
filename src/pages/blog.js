import React from 'react';
import img from '../imgs/books.jpeg';
import './blog.scss';
import Card from '../components/cardForBlog'

export default function Blog() {
    return (
        <div className="blog">
            <Card img={img} heading="Books">
                    Love thy books! I never liked reading when I was a child. 
                    Now, It is a big part of my time. Reason being, It is worth spending time.
                    I have known so much about the journey of other people and how to deal with almost anything
                    from tying knots to apocalypse.
            </Card>
            <Card img={img} heading="Education System">
                Our society is as good as it's Education System. It should drive us forward rather than catching up to do.
                In this fast paced environment, there should better adopt to new methods and syllabus quickly.
                Like Medicines, Education should get more personalized.
            </Card>
            <Card img={img} heading="Climate Change">
                What's more serene than blue sky, birds chirping on flower-lit trees and reminiscing under it's shade.
                We need to think long term and make daily decisions accordingly.
            </Card>
            <Card img={img} heading="Waste Management">
                Closely linked with climate change and sustainable living, being in the modern times we can be more conscious of products we use and lifestyle we live.
                Every action we take defines the person we are and what we value.
            </Card>
            <Card img={img} heading="Movies">
                Stories unite People. It has a lot of influence on my life. It has inspired me.
            </Card>
            <Card img={img} heading="Poems">
                Expressing oneself is so liberating.
            </Card>
            <Card img={img} heading="Addiction">
                Not solving the problems instead abating the symptoms
            </Card>
        </div>
    )
}
