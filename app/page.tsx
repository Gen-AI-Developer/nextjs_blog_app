import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <CardHeader className="p-0">
            <Image
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={500}
              height={500}
              className="rounded rounded-b-none h-[200px] object-cover w-full"
            />
          </CardHeader>
          <CardContent className="mt-2 text-pretty font-bold text-lg pb-3">
            <h2>{post.title}</h2>
          </CardContent>
          <CardFooter className="m-0">
            <p>{post.smallDescription}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
