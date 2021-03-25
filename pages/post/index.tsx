import Layout from "../../components/Layout";
import fetch from "isomorphic-fetch";
import Link from "next/link";

interface Props{
    body:string;
    id:number;
    title:string;
    userId:number;
}
const Post = (props:{posts:Props[]}) =>{
    const {posts} = props;
    return(
        <Layout>
            {posts.map((item)=>
            <div key={item.id}>
                <Link href="/post/[id]" as={`/post/${item.id}`}>
                    <a>
                        <p>id : {item.id} </p>
                        <div>
                            {item.title}
                        </div>
                    </a>
                </Link>
            </div>
            )}    
        </Layout>
    );
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    if(!posts){
        return{
            notFound:true,
        }
    }

    return{
        props:{
            posts
        },
        revalidate:1,
    };
}

export default Post;