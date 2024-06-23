import  ImageUrlBuilder  from "@sanity/image-url";
import {createClient} from "next-sanity";


export const client = createClient({
    projectId: "owa8zmtb",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any){
   return builder.image(source);
}