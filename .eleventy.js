import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import yaml from "js-yaml";
import gitRepoInfo from "git-repo-info";
import isGitDirty from "is-git-dirty";
import anchor from "markdown-it-anchor";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  const site = {
    name: "Kot's Website",
    base: "https://kot.pink",
    email: "kot@kot.pink",
    image_url: "https://cdn.kot.pink/avatar.png",
  };

  eleventyConfig.addGlobalData("site", site);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/rss.xml",
    collection: {
      name: "posts",
    },
    metadata: {
      language: "en",
      title: "Kot's posts",
      subtitle: site.desc,
      base: site.base,
      author: {
        name: "Kot",
        email: site.email,
      },
    },
  });

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(anchor, {
      permalink: true,
      permalinkSymbol: "#",
    });
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    transformOnRequest: false, // BUG: `eleventy --serve` exits immediately when this is true
  });

  eleventyConfig.addDataExtension("yaml", (content) => yaml.load(content));
  eleventyConfig.addPassthroughCopy("site.css");

  eleventyConfig.addShortcode("datetime", (date, iso = false) => {
    const dateObj = date === "now" ? new Date() : new Date(date);
    const dateDisplay = iso
      ? dateObj.toISOString()
      : dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    return `<time datetime="${dateObj.toISOString()}">${dateDisplay}</time>`;
  });

  eleventyConfig.addGlobalData("git", {
    repo: gitRepoInfo(),
    dirty: isGitDirty(),
  });

  return {
    markdownTemplateEngine: "njk",
  };
}
