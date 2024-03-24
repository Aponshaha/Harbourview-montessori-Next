import React from "react";
import blog_data from "@data/blog-data";

import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";
// import student_data from "@data/school-details-data";
// images
import img_1 from "@assets/img/shop/1.1.png";
import HMSchool from "@assets/img/school/student-amy.jpeg";

const student_data = {
  id: 1,
  title: "Our Students",
  header:
    "My Mom and Grampy took me to school today. I’m 4 years old and I go to Harbourview Montessori School. Mommy opens the big red doors and I can smell the coffee brewing in the hallway. She always pours herself a cup on the way out. My Grampy will have some today, too. I walk down the hallway and find my cubby. It says ‘Amy’ on it so I know it’s mine. I sit down, take off my shoes and put them in my cubby. I put on my indoor shoes. My mom doesn’t help me because she knows that I feel good when I can do things by myself. I take my water bottle, walk over to the classroom door, give Mommy and Grampy a hug and walk in.",
  schoolImg: HMSchool,
  descriptionOne:
    "My teacher shakes my hand and says ‘Good morning,’ then I walk around to see who’s here. I see Madeline building the pink tower, Jonathan drawing a metal inset design and Amaar washing some cleaning cloths while Heather hangs them to dry. Jenny invites me to help build the maze with the red rods but I’d like to see what’s in the mystery box before I choose my work. I hear the circle time music box and find my way to the circle rug. I wonder what my teacher will introduce this morning. First, we sing our Good Morning Song, then we review the continents. After my teacher reads a story that she found in National Geographic for Kids, she tells us about an adventure she had on the weekend. Then she has a surprise. She takes out a small container. There’s a snail in it! She says that we’re going to learn a lot about slugs and snails this week! I love snails and slugs. After circle time, I decide to write a story about Slugs. My teacher helps me. I tell her the story and she writes it. I think I’ll copy it later. For now, I’m going to draw some slugs and make a little book. Time for the Movable Alphabet. I love spelling new words and writing them in my word book! I’m feeling hungry by now so I invite my friend, Alex, to have snack with me. We serve ourselves from the snack table, clean up when we’re done and get back to work. For the rest of the morning, I think I’ll work with the Numeral Cards with Alex. I’m going to make the biggest number that I can! I feel a bit tired after making such big numbers. I’m going to read in the Peace Place. There’s a book in the basket about snails! That’s what I’ll do next. It’s outdoor time! We go into the Peace Garden, play with the trucks in the gravel, walk through the little paths, play with balls and climb the play structure. I love being in my classroom but I love outdoor time even more! There are some friends planting flowers while others dig holes in the dirt. Today, one of my teachers is showing us how composting works. Cool! I’d rather run and play, though, so that’s what I do. We’ll come out again after lunch, hike in the woods and do some science experiments! It’s Friday, so we end the day with the Friendship Walk. I’m the Friend of the Day, so I’m the first one to carry the candle. It makes me feel very special. I see some Moms and Dads in the hallway so it’s time to go home. Not for me, though! I’m in After School Care today for an hour and we’re going to collect worms outside. I had a great day at school today. I really love my school.",
  descriptionTwo: "",
  descriptionThree: "",
};

const StudentDetails = () => {
  return (
    <>
      <div className="container pt-120 pb-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="bd-blog-details-wrapper mb-60">
              <div className="row">
                <div className="col-12">
                  <div
                    className="bd-blog-details mb-50 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="bd-blog-details-thumb pb-180">
                      {student_data.schoolImg && (
                        <Image
                          src={student_data.schoolImg}
                          style={{ width: "50%", height: "500px" }}
                          alt="img not found"
                        />
                      )}
                    </div>
                    <div
                      className="bd-blog-details-meta wow fadeInUp pt-120"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="bd-blog-details-content wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="bd-blog-details-quote wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                      >
                        <div className="bd-blog-quote-icon">
                          <i className="flaticon-quote"></i>
                        </div>
                        <div className="bd-blog-quote-content">
                          <p>{student_data.header}</p>
                        </div>
                      </div>
                      <p>{student_data.descriptionOne}</p>
                      <p>{student_data.descriptionTwo}</p>
                    </div>

                    {/* <NewsTopics /> */}
                    <div
                      className="bd-blog-topic wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <p>{student_data.descriptionThree}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
