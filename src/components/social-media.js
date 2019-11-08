import React from "react"

import FacebookIcon from "../images/facebook-icon.svg"
import YoutubeIcon from "../images/youtube-icon.svg"
import TwitterIcon from "../images/twitter-icon.svg"

const accounts = [
  {
    name: "facebook",
    url: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    name: "youtube",
    url: "https://youtube.com",
    icon: YoutubeIcon,
  },
  {
    name: "twitter",
    url: "https://twitter.com",
    icon: TwitterIcon,
  },
]

const SocialMedia = () => (
  <div className="social-media">
    {accounts.map(account => (
      <a
        href={account.url}
        className="social-media__link"
        key={account.name}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${account.name} social media link`}
      >
        <div
          className="social-media__icon"
          style={{
            backgroundImage: `url(${account.icon})`,
          }}
        />
      </a>
    ))}
  </div>
)

export default SocialMedia
