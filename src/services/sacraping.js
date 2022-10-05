import axios from "axios";
import { load } from "cheerio";

const getData = async () => {
  const str = [];

  const keys = [
    "Git_Operations",
    "API_Requests",
    "Webhooks",
    "Visit www.githubstatus.com for more information",
    "Issues",
    "Pull_Requests",
    "Actions",
    "Packages",
    "Pages",
    "Codespaces",
    "Copilot",
  ];

  try {
    const siteUrl = "https://www.githubstatus.com/";

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    const $ = load(data);
    const elementSelector = ".component-container";

    $(elementSelector).each((parentId, parentElem) => {
      const requestData = $(parentElem).text();

      const dataWithoutQuestion = requestData.replace("?", "").trim();

      str.push(dataWithoutQuestion);
    });
  } catch (error) {}

  const arrayWithSpaces = str.map((item) => item.replace(/\s/g, " "));
  const array = arrayWithSpaces.map((item) => item.slice(-11));

  let newObj = new Object();

  for (let i = 0; i < keys.length; i++) {
    if (i === 3) continue;
    if (array[i] !== "Operational") array[i] = "Inoperational";
    newObj[keys[i]] = array[i];
  }

  return newObj;
};

export default getData;
