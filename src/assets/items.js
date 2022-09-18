import neeoon from "../assets/neeoon.png";
import jellyfin from "../assets/jellyfin.png";
import sonarr from "../assets/sonarr.png";
import radarr from "../assets/radarr.png";
import prowlarr from "../assets/prowlarr.png";
import bazarr from "../assets/bazarr.png";
import qbittorrent from "../assets/qbittorrent.png";
import portainer from "../assets/portainer.png";
import npm from "../assets/npm.png";

const items = [
  {
    title: "Jellyfin",
    subtitle: "Watch movies and tv shows, free of charge!",
    image: jellyfin,
    link: "https://jellyfin.neeoon.net", 
  },
  {
    title: "Sonarr",
    subtitle: "Manage shows library",
    image: sonarr,
    link: "https://sonarr.neeoon.net", 
  },
  {
    title: "Radarr",
    subtitle: "Manage films library",
    image: radarr,
    link: "https://radarr.neeoon.net", 
  },
  {
    title: "Prowlarr",
    subtitle: "Manage torrent trackers",
    image: prowlarr,
    link: "https://prowlarr.neeoon.net", 
  },
  {
    title: "Bazarr",
    subtitle: "Manage & download subtitles automatically",
    image: bazarr,
    link: "https://bazarr.neeoon.net", 
  },
  {
    title: "qBittorrent",
    subtitle: "Web UI for qBittorrent, a torrent downloader",
    image: qbittorrent,
    link: "https://qbittorrent.neeoon.net", 
  },
  {
    title: "Portainer",
    subtitle: "Manage Docker containers",
    image: portainer,
    link: "https://portainer.neeoon.net", 
  },
  {
    title: "Nginx Proxy Manager",
    subtitle: "neeoon.net's Proxy manager",
    image: npm,
    link: "https://proxy.neeoon.net", 
  },
  {
    title: "neeoon.net",
    subtitle: "Have a look at my works!",
    image: neeoon,
    link: "https://neeoon.net",
  },
];

export default items;
