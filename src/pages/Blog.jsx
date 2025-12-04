import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Top 5 Places to Visit in Coorg',
            excerpt: 'Discover the coffee capital of India. From Abbey Falls to Raja Seat, here is your ultimate guide to Coorg.',
            date: 'October 15, 2023',
            author: 'Travel Desk'
        },
        {
            id: 2,
            title: 'Why You Should Choose a Tempo Traveller for Group Trips',
            excerpt: 'Planning a family reunion? Here is why a Tempo Traveller is the most comfortable and cost-effective option.',
            date: 'November 2, 2023',
            author: 'Admin'
        },
        {
            id: 3,
            title: 'A Weekend Guide to Mysore',
            excerpt: 'Explore the royal city of Mysore. Palaces, Zoos, and the famous Mysore Pak await you.',
            date: 'December 10, 2023',
            author: 'Travel Desk'
        },
        {
            id: 4,
            title: 'Ooty vs Kodaikanal: Which Hill Station is Better?',
            excerpt: 'Confused between the Queen and Princess of Hills? We break down the pros and cons of each.',
            date: 'January 5, 2024',
            author: 'Guest Writer'
        }
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Travel Blog | Best Service Cabs and Travels</title>
                <meta name="description" content="Read our latest travel guides, tips, and destination reviews for South India." />
            </Helmet>
            <h1 className="text-center">Travel Blog & Guides</h1>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Tips, tricks, and guides for your next South Indian adventure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {posts.map(post => (
                    <article key={post.id} style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--color-surface)',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{post.date} | {post.author}</span>
                        <h3 style={{ marginTop: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>{post.title}</h3>
                        <p style={{ color: 'var(--color-text)' }}>{post.excerpt}</p>
                        <button className="btn btn-outline" style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9rem' }}>Read More</button>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
