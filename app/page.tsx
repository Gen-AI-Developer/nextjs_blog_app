import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export const revalidate = 30; // revalidate at most every 30 second
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
        <Card key={idx} className="mb-5">
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
          <CardDescription className="px-6 py-2 dark:text-zinc-400">
            {post.smallDescription.slice(0, 100) + "..."}
          </CardDescription>
          <CardFooter className="m-0 flex-col items-start">
            <button className="w-full bg-primary dark:bg-primary font-semibold rounded p-2 shadow">
              <Link href={`/blog/${post.currentSlug}`} className="w-full">
                Read More!
              </Link>
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
