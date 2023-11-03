import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
const BlogList: React.FC = () => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogData.slice(startIndex, endIndex);
  const [expandedPosts, setExpandedPosts] = useState<number | null>(null); // Track expanded post index

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setExpandedPosts(null); // Reset expanded post on page change
  };

  const handleSeeMoreClick = (index: number) => {
    if (expandedPosts === index) {
      setExpandedPosts(null); // Unexpand if already expanded
    } else {
      setExpandedPosts(index); // Expand if not expanded
    }
  };

  return (
    <div className="scroll-container">
      <Navbar bg="dark" variant="dark">
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + '/brain.png'}
              alt="Icon"
              width="30"
              height="30"
            />{' '}
            SAYY
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Confession</Nav.Link>
            <Nav.Link href="#features">Write Yours</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
        <h1 className="mt-4">Share Your Confessions</h1>
        <p className="mt-4">Confess your thoughts and feelings anonymously.</p>

          <button className="btn btn-dark btn-lg mt-5">Share your Story</button>
        </div>
      </div>

      <div className="blog-post">
        <h1 className="pd-1 outline-text">Trending</h1>
        <div className="container">
          <div className="row">
            {currentPosts.map((post, index) => (
              <div className="col-md-4 my-3" key={index}>
                <Card className="my-3 p-3" bg="dark" text="white">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      {expandedPosts === index ? post.content : post.content.slice(0, 100) + '...'}
                    </Card.Text>
                    {post.content.length > 100 && (
                      <button className="btn btn-primary" onClick={() => handleSeeMoreClick(index)}>
                        See More
                      </button>
                    )}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <nav>
            <ul className="pagination justify-content-center m-0 p-3 ">
              {Array.from({ length: Math.ceil(blogData.length / postsPerPage) }, (_, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
   

     
     </div>
  );
};

export default BlogList;
