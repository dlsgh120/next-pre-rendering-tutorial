import Layout from "../../components/Layout";
import fetch from 'isomorphic-fetch'

interface Props{
    body:string;
    id:number;
    title:string;
    userId:number;
}

const PostDetail = ({data}:{data:Props}) =>{
    return(
        <Layout>
            <p>id : {data.id}</p>
            <p>userId : {data.userId}</p>
            <h1>{data.title}</h1>
            <div>
                {data.body}
            </div>
        </Layout>
    );
}

// Server side rendering
export async function getServerSideProps(context){
    const query = context.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const data = await res.json();

    if(!query){
        return{
            notFound:true,
        };
    }
    return{
        props:{
            data
        }
    }
}

// Static Generation
// export async function getStaticPaths(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await res.json();

//     const paths = posts.map(({ id }: Props) => ({
//         params: { id: String(id) },
//       }));

//     return {paths, fallback:false}
// }

// export async function getStaticProps({params}){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
//     const data = await res.json();

//     return{
//         props:{post:data}
//     }
// }

export default PostDetail;