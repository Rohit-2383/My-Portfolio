import  SanityClient, { createClient }  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId:'',
    dataset:'',
    apiVersion:'',
    useCdn:true,
    token:'',
})