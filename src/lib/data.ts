import site from "@/data/site.json";
import home from "@/data/home.json";
import about from "@/data/about.json";
import marble from "@/data/marble.json";
import granite from "@/data/granite.json";
import tiles from "@/data/tiles.json";
import quartz from "@/data/quartz.json";
import blogs from "@/data/blogs.json";
import gallery from "@/data/gallery.json";
import contact from "@/data/contact.json";
import type { ProductCollection } from "./types";

export function getSite() {
  return site;
}

export function getHome() {
  return home;
}

export function getAbout() {
  return about;
}

export function getMarble(): ProductCollection {
  return marble as ProductCollection;
}

export function getGranite(): ProductCollection {
  return granite as ProductCollection;
}

export function getTiles() {
  return tiles;
}

export function getQuartz() {
  return quartz;
}

export function getBlogs() {
  return blogs;
}

export function getGallery() {
  return gallery;
}

export function getContact() {
  return contact;
}
