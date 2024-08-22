import Image from "next/image";
import { client } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card } from "@/components/ui/card";
async function getData() {
  const query = `*[_type== 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage
}`;
  const data: simpleBlogCard[] = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
}
