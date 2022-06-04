import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const project: ProjectType[] = [
  {
    title: "Bot Telegram ",
    image: require("public/projects/pkdx.png"),
    description:
      "Bot telegram anonymous chat yang di bangun mengunakan bahasa pemrograman python",
    createdAt: "2021-08-02",
    technology: [ { name: "Python" }],
    url: "https://github.com/Rianfirnanda/telegram-anonymous-chat",
    source: "https://github.com/Rianfirnanda/telegram-anonymous-chat",
  },
  {
    title: "Bot Whatsapp",
    image: require("public/projects/new-ketringan.png"),
    description: "Bot whatsapp dengan berbagai fitur, di buat menggunakan lembar kerja Baileys dengan NodeJs .",
    createdAt: "2021-12-01",
    technology: [js, { name: "Node Js" }],
    source: "https://github.com/Rianfirnanda/RoboAssistant",
  },
];

export default project;
