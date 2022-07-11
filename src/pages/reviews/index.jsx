import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Reviews = () => {
  return (
    <section className="py-5" id="reviews">
      <p className="text-center text-red mt-5">Testimonials</p>
      <h3 className="mb-5 text-center">What Clients Say</h3>

      <div className="review-card-wrapper">
        <div className="review-card">
          <div className="text-end m-3">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <StarHalfIcon />
          </div>
          <blockquote>
          Juliet listened to my ideas, and incorporated them well &amp;
           into the design, he worked hard to deliver a quality product
          </blockquote>
          <p>"I recommend this freelancer for such work"</p>
        </div>

        <div className="review-card">
        <div className="text-end m-3">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <StarHalfIcon />
          </div>
          <blockquote>
          It was a really wonderful experience working with him. &amp; Resources were made 
          easily available and the job was done in a timely manner.
          </blockquote>
          <p>"I recommend this freelancer for such work"</p>
        </div>

        <div className="review-card">
        <div className="text-end m-3">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <StarHalfIcon />
          </div>
          <blockquote>

          Great communication, great skills, project finished way  &amp; ahead of schedule. 
          I would be glad to work again with Volodumur.
          </blockquote>
          <p>"I recommend this freelancer for such work"</p>
        </div>
      </div>
      <div className="w-100 black-line mt-5">
      </div>
    </section>
  );
};

export default Reviews;
