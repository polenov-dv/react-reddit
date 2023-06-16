import React from "react";
import "./Posts.css";

import posts from "../../../data/posts/posts.json";
import Button from "../../button/Button";
import Video from "../../video/Video";

export default function Posts() {
	return (
		<div className="posts-wrapper">
			{posts.map((post, index) => (
				<div className="post">
					<div className="post-sidebar">
						<img src="./assets/images/arrow-upward-icon.ico" alt="Arrow-upward" />
						<span>{post.upvotes}</span>
						<img src="./assets/images/arrow-downward-icon.ico" alt="Arrow-downward" />
					</div>
					<div className="post-main">
						<div className="post-title">
							<img src={post.subreddit.image_src} alt="Subreddit-image" />
							<span className="subreddit-name">/r{post.subreddit.name}</span>
							<span className="post-user">Posted by u/</span>
							<span className="post-user underline">{post.username}</span>
							<div className="spacer"></div>
							<Button label="+ JOIN" />
						</div>
						<div className="post-body">
							<span className="body-title">{post.title}</span>
							{post.video_src && <Video src={post.video_src} duration={post.duration} />}
							{post.image_src && <img src={post.image_src} alt="Post-image" />}
							{post.description && <span className="body-description">{post.description}</span>}
						</div>
						<div className="post-footer">
							<div className="comments footer-actions">
								<img className="footer-img comment-img" src="./assets/images/comment-icon.svg" alt="Comment-icon" />
								<span>{post.comments} Comments</span>
							</div>
							<div className="share footer-actions">
								<img className="footer-img" src="./assets/images/share-icon.svg" alt="Share-icon" />
								<span>Share</span>
							</div>
							<div className="save footer-actions">
								<img className="footer-img" src="./assets/images/bookmark-icon.svg" alt="Bookmark-icon" />
								<span>Save</span>
							</div>
							<img className="more-icon footer-actions" src="./assets/images/three-dots-icon.svg" alt="Three-dots" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}