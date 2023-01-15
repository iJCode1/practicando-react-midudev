import { useState } from "react";

function TwitterCard({ children, username, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const classes = isFollowing
    ? "tw-card-button is-following"
    : "tw-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="tw-card">
      <div className="tw-card-user">
        <img
          className="tw-card-img"
          src={`https://unavatar.io/${username}`}
          alt={`Foto de ${username}`}
          width="60"
        />
        <div className="tw-card-text">
          <strong>{children}</strong>
          <span className="tw-card-span">@{username}</span>
        </div>
      </div>
      <button className={classes} onClick={handleClick}>
        <span className="tw-card-button-text">{text}</span>
        <span className="tw-card-button-text stop-follow">Dejar de seguir</span>
      </button>
    </div>
  );
}

export default TwitterCard;
