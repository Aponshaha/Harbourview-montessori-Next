import blog_data from "@data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestPost = () => {
  return (
    <div
      className="bd-blog-sidebar mb-50 wow fadeInRight"
      data-wow-duration="1s"
      data-wow-delay=".3s"
    >
      <h5 className="bd-blog-sidebar-title">Notice</h5>
      <div className="bd-blog-latest">
        <ul>
          {blog_data.slice(0, 3).map((item) => (
            <li key={item.id}>
              <div className="bd-blog-latest-content">
                {/* <div className="bd-blog-latest-thumb">
                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div> */}
                <div className="bd-blog-latest-title">
                  <h6>
                    <Link href={`/news-details/${item.id}`}>
                      {/* {item.title} */}
                      {item.title.substring(0, 100)}{" "}
                      {item.title.length > 100 ? `...` : ""}
                    </Link>
                  </h6>
                  <div className="bd-blog-latest-meta">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestPost;
